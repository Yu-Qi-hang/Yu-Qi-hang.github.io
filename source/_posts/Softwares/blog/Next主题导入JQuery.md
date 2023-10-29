---
title: Next主题导入JQuery
categories:
  - Softwares
  - blog
index_img: /img/blog.png
tags:
  - blog
  - blog/Hexo
  - blog/Hexo/Next
abbrlink: 6c58
date: 2022-05-04 00:00:00
---



### 问题

使用Next主题的Hexo博客，在进行个性化配置时，可能出现

```shell
Uncaught ReferenceError: $ is not defined`
```

这是由于使用的插件引用了 `JQuery`　但是我们没有导入。 

### 方法

在Next的主题配置文件 `_config.yml` 中，找到

```yaml
vendors:
```

在下面增加一行，即可导入。

```yaml
jquery: //cdn.jsdelivr.net/npm/jquery@3/dist/jquery.min.js
```

![image-20230210201839159.png](../../../../image/NextJQuery/jquery.png)
