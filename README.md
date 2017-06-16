# 移动端高清图片兼容解决方案

## 基础知识：

- 设备像素比 = 物理像素 / 设备独立像素 
- 位图像素
[参考文档](http://div.io/topic/1092)

## 图片模糊
```
理论上，1个位图像素对应于1个物理像素，图片才能得到完美清晰的展示。在普通屏幕下是没有问题的，但是在retina屏幕下就会出现位图像素点不够，从而导致图片模糊的情况。
```
![image](http://divio.qiniudn.com/Fuex59zSiV9pbaJG-s9wg_UpCERP)


## 高清图片解决方案
#### 解决问题：代码编写时一次引入，合理适配各端

#### 图片分类：
  - jpg
  - png
  - gif
  - webp
  - svg
  - base64


#### 图片引用方式：

```html
  <img src="../images/demo.png" alt="baidu">
```

```css
  body {
    background: url(images/demo.png) no-repeat fixed top;
  }
```

#### CSS  [预编译 & 后编译](http://www.kuqin.com/shuoit/20150210/344790.html)

#### PostCss
