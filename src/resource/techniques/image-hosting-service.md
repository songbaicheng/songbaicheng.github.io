---
category: 奇技淫巧
tag: 
  - Image Hosting Service
  - Cloudflare
---

# 个人图床
## 项目介绍
Telegraph-Image，一个免费图片托管解决方案，Flickr/imgur替代品。使用 Cloudflare Pages 和 Telegraph。

:::card
```card
title: Telegraph-Image 项目Github官网
desc: 点击跳转官网查看详细内容
logo: /assets/common-icon/github-logo.svg
link: https://github.com/cf-pages/Telegraph-Image
color: rgba(173, 216, 590, 0.15)
```
```card
title: Cloudflare 官网文档
desc: 点击跳转官网查看详细内容
logo: /assets/images/resource/techniques/image-hosting-service/cloudflare.png
link: https://www.cloudflare.com/zh-cn/
color: rgba(173, 216, 590, 0.15)
```
:::

## 优缺点
### 优点
1. 无限空间。
2. 开源免费。
3. 部署简单，只需要根据 README 文件几分钟就可以成功。

### 缺点
1. 图片大小最大为5MB。
2. 由于使用Cloudflare的网络，图片的加载速度在某些地区可能得不到保证，有时候会因为网络问题导致图片上传问题。
3. Cloudflare Function免费版每日限制100,000个请求，超过可能需要选择购买 Cloudflare Function 的付费套餐。

## 项目功能
### 图片审查
搭配 moderatecontent 提供免费图片审查，开启图片审查后，因为审查需要时间，首次的图片加载将会变得缓慢，之后的图片加载由于存在缓存，并不会受到影响。

```card
title: moderatecontent 官网文档
desc: 点击跳转官网查看详细内容
logo: /assets/images/resource/techniques/image-hosting-service/moderatecontent-logo.png
link: https://moderatecontent.com/
color: rgba(173, 216, 590, 0.15)
```
### 图片管理功能
图床管理后台，提供统计图片总数量、关键字搜索、图片黑白名单。