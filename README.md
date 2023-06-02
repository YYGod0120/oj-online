# 这是一个在线 OJ 平台

项目开始时间：5/11

项目结束时间：6/01

[挂在白嫖的阿里服务器上的一个菜鸡项目](http://47.108.221.20/)

## 项目概述

借着一个数据库比赛,正好浅学了一手 React 以及组件库,配合后端完成了一个简单的 OJ 页面

### 功能

- 用户(管理员)：
  - 登录
  - 注册
  - 个人简介修改和查看
- 题集：
  - 查看题目，搜索题目
  - 提交题目解答
  - 出题，修改题目以及删除题目(管理员)
  - 测评数据的提交修改和删除(管理员)
  - 查看测评数据，搜索测评数据
  - 查看测评结果

## 技术栈:

- **React**
  - React Router(路由)
  - hooks(函数式编程)
  - monaco-editor(嵌入网页的编辑器)
- **Arco-design**

## 遇到的问题

首先就是样式问题，一开始不太会用组件，瞎写样式发现还覆盖不了，加上其实组件库 api 自己能满足一些需求但是还是自己乱加样式导致问题一堆

其次是不熟悉 react 的写法，hooks 用不习惯，问题多多。以及没有封装一个自定义网络请求的 hooks 导致各自重复代码

还有就是和后端的对接，第一次和后端对接，无论是接口需要携带的参数位置和类型都吃了大亏：

搜索参数别放在 body 里，前端很难调
参数类型尽量用 string，不然前端要一直调来调去
接口需要的参数和方法看清楚

JSX 写法和之前有点不同

部署上 BrowerRouter 的路由会导致部署出现问题，得用 HashRouter
使用 BrowerRouter 还得写一下 apache 的规则

## 收获

能够基本使用 react 和 arcodesign 进行项目开发 <br/>
学到了一个嵌入网页的编辑器 <br/>
和后端多交流，能减少自己的工作量 <br/>
学会封装一些重复高的代码，像网络请求这种的，装成一个自定义 hooks <br/>
useEffect 不能传入异步函数作为参数，但是能在内部定义异步函数 <br/>
对象 key 想调用参数用[]包裹 <br/>
使用 apache 进行前端在服务器上的部署 <br/>
BrowerRouter 和 HashRouter 的区别 <br/>

## 总结

顺利完成这个项目，虽然不是很美观或者很好用，但是重在熟悉 react 和组件库的使用。 <br/>
下一步估计会去看看其他人写的项目的源代码，主要是自己写的 code 感觉一点也不优雅。 <br/>
顺便学习一下响应式布局，这个项目响应式还是一坨（为什么说还） <br/>
