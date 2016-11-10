# Flex 布局

[REFERENCE]
1. http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html
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
5. 