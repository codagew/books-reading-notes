(function(window, document, undefined) {
	'use strict';
	// 创建 xhr
	var xhr = createXhrObject();
	// 针对某些特定版本的 mozilla 浏览器的 Bug 进行修正
	xhr.overrideMimeType ? (xhr.overrideMimeType('text/javascript')) : null;

	// 针对 IE8 的 xhr 做处理：ie8 的 xhr 没有 xhr.onload 事件
	xhr.onload === undefined ? (xhr.xhr_ie8 = true) : (xhr.xhr_ie8 = false);

	// 参数处理(get 和 post)，包括 xhr.open。get：拼接好 url 再open，post：先open
	ajaxSetting.data === '' ? null : (xhr = dealWithParam(ajaxSetting, this, xhr));

	// 设置超时时间(只有异步时才有超时时间)
	ajaxParam.async ? (xhr.timeout = ajaxSetting.time) : null;

	// 设置http协议的头部
	each(ajaxSetting.requestHeader, function(item, index) {
		xhr.setRequestHeader()
	})
})(window, document);