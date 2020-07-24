# 一个简单的评论组件 demo

## npm 设置淘宝镜像

```bash
$ npm config set registry https://registry.npm.taobao.org
```

> 前端中应用的状态存在的问题：一个状态可能被多个组件依赖或者影响，而 React.js 并没有提供好的解决方案，我们只能把状态提升到依赖或者影响这个状态的所有组件的公共父组件上，我们把这种行为叫做状态提升。

## redux 版本之前的组件拆分

1. 划分组件

![划分组件](http://huzidaha.github.io/static/assets/img/posts/1.003.png)

2. 组件树

![组件树](http://huzidaha.github.io/static/assets/img/posts/DAFA784B-6AD3-474B-9A87-316E5741DED6.png)

## redux 版本的组件划分

1. 去 LocalStorage 加载数据，去控制新增、删除评论，去把数据保存到 LocalStorage 里面等 逻辑是应该放在 Smart 组件里面的：

![](http://huzidaha.github.io/static/assets/img/posts/6F7A1EE0-9AF4-4AB3-B554-A01E9074FC3C.png)

2. 组件树

![](http://huzidaha.github.io/static/assets/img/posts/170B1159-C690-4DDA-9118-95AF810D40C6.png)

3. 文件目录

```json
src(CommentAppWithRedux)
├── components   /*dumb 组件*/
│   ├── Comment.js  
│   ├── CommentInput.js
│   └── CommentList.js
├── containers   /*smart 组件*/
│   ├── CommentApp.js
│   ├── CommentInput.js
│   └── CommentList.js
├── reducers   /*reducer*/
│     └── comments.js
├── index.css
└── index.js
```