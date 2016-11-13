# Flex 布局

[REFERENCE]
1. http://www.ruanyifeng.com/blog/2015/07/flex-grammar.htmlhttp://www.ruanyifeng.com/blog/2015/07/flex-examples.html
2. https://css-tricks.com/snippets/css/a-guide-to-flexbox/
3. https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties

## Flex Grammar
1. browser support
* Chrome 21+
* Opera 12.1+
* Firefox 22+
* Safari 6.1+
* IE 10+
2. Flex 是 Flexible Box 的缩写，意为 "弹性布局"，用来为盒状模型提供最大的灵活性。
3. 设置为 Flex 布局以后，子元素的 float,clear,vertical-align 将失效
4. 相关概念
    1. 基本概念
        * flex container
        * main axis
        * main start
        * main end
        * cross axis
        * cross start
        * cross end
        * flex item
        * main size
        * cross size
    2. 容器属性
        * flex-direction: row | row-reverse | column | column-reverse;(决定主轴方向)
        * flex-wrap: nowrap | wrap | wrap-reverse; (定义如果一条轴线排不下，如何换行)
        * flex-flow: <flex-direction> || <flex-wrap>;(flex-direction 和 flex-wrap 的简写)
        * justify-content: flex-start | flex-end | center | space-between | space-around; (定义项目在主轴上的对齐方式)
        * align-items: flex-start | flex-end | center | baseline | stretch; (定义项目在交叉轴上如何对齐)
        * align-content: flex-start | flex-end | center | space-between | space-around | stretch; (定义了多根轴线的对齐方式，如果项目只有一根轴线，该属性不起作用)
    3. 项目属性
        * order:定义项目的排列顺序。数字越小，排列越靠前，默认为0(可以为负值)
        * flex-grow:定义项目的放大比例，默认为0.即如果存在剩余空间，也不放大
        * flex-shrink:定义项目的缩小比例，默认为1.即如果空间不足，该项目将缩小
        * flex-basis: <length> | auto; (定义了在分配多余空间之前，项目占据的主轴空间。浏览器根据这个属性，计算主轴是否有多余空间。默认值为 auto，即项目本来大小)
        * flex: none | [ <'flex-grow'> <'flex-shrink'> <'flex-basis'>]
        * align-self: auto | flex-start | flex-end | center | baseline | stretch;(允许项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性)
    4. 
5. 