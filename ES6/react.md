# REACT:引领未来的用户界面开发框架

## 第1章 React 简介

1. React 的产生就是为了把这种重新渲染整个页面的PHP式工作流带到客户端应用中来
2. React 本质上是一个“状态机”，可以帮助开发者管理复杂的随着时间而变化的状态。它以一个精简的模型实现了这一点。React只关心两件事：
    1. 更新DOM
    2. 响应事件

## 第2章 JSX

1. JSX 即 JavaScript XML。一种在 React 组件内部构建标签的类XML语法。(可以提高组件的可读性)
2. 对比
```
// 不适用 JSX
React.DOM.h1({ className: 'question' }, 'Question');
React.createElement('h1', { className: 'quesion' }, 'Question');
// 使用 JSX
<h1 class="question">Question</h1>
```
3. 