# vue

一个基于 vue + vue-router + vuex + less + axios 搭建的脚手架

## 代码目录

```
src/
  api/         #请求的接口的位置
    index.js   # 多有接口都从这里出去
  assets/      #放静态资源图片等
  utils/        #公共的配置文件和公共方法的位置
  components/  #用于存放会被多个页面用到的组件
  lib/      #存储第三方库
  mixins/    #存储mixins方法
  pages/    #存储所有的页面入口
    home/
      components/ # 存储只会在本页面所用到的组件
      index.vue  # 每个页面的入口的文件必须为index.vue
  store/  #存储vuex
  style/ #存储less所需要的提取出来的文件
public/
  index.html  # 存储HTML的模板
```

## 代码规范

代码规范由 eslint 控制，可以根据自己的需求自己配置代码规则,使用 vscode 建议配置保存自动格式化代码以及 vue 的代码规范最好参照官网推荐的
[vue 代码规范](https://cn.vuejs.org/v2/style-guide/)

[vscode 配置保存自动格式化代码](https://blog.csdn.net/weixin_30723433/article/details/101176004)

## 参考文档

- [vue 官网](https://cn.vuejs.org/)
- [vuex 官网](https://vuex.vuejs.org/zh/)
- [vue cli 官网](https://cli.vuejs.org/zh/)
- [vue router 官网](https://router.vuejs.org/zh/)
- [vue 代码规范](https://cn.vuejs.org/v2/style-guide/)
- [eslint 官网](https://eslint.org/)
