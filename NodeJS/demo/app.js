
var eventproxy = require('eventproxy');
var superagent = require('superagent');
var cheerio = require('cheerio');
var express = require('express');

var app = express();

var url = require('url');

app.get('/', function(req, httpRes) {
	var baseUrl = 'https://segmentfault.com/';
	superagent.get(baseUrl)
		.end(function(err, res) {
			if (err) {
				return console.error(err);
			}

			var topicUrls = [];
			var $ = cheerio.load(res.text);

			$('.stream-list__item h2.title a').each(function(index, el) {
				var $element = $(el);

				var href = url.resolve(baseUrl, $element.attr('href'));
				topicUrls.push(href);
			});

			// console.log(topicUrls);

			var ep = new eventproxy();

			ep.after('topic_html', topicUrls.length, function(topics) {
				topics = topics.map(function(topicPair) {
					var topicUrl = topicPair[0];
					var topicHtml = topicPair[1];
					var $ = cheerio.load(topicHtml);

					return ({
						title: $('#questionTitle a').text(), 
						href: topicUrl, 
						comment1: $('.answer p').eq(0).text()
					});
				});

				console.log('topics: ', topics);

				httpRes.send(topics);
			});

			topicUrls.forEach(function(topicUrl) {
				superagent.get(topicUrl)
					.end(function(err, res) {
						console.log('fetch: ', topicUrl, ' successful...');
						ep.emit('topic_html', [topicUrl, res.text]);
					});
			});
		});
});


app.listen(3000, function(req, res) {
	console.log('App is running on port 3000');
});