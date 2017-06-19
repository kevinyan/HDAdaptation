# 移动端高清图片兼容解决方案

## 几个概念

- 设备像素比 = 物理像素 / 设备独立像素 
- 位图像素

[参考文档](http://div.io/topic/1092)


## 图片模糊的原因

> 理论上，1个位图像素对应于1个物理像素，图片才能得到完美清晰的展示。在普通屏幕下是没有问题的，但是在retina屏幕下就会出现位图像素点不够，从而导致图片模糊的情况。


![image](http://divio.qiniudn.com/Fuex59zSiV9pbaJG-s9wg_UpCERP)

## 两种图片调用方式及支持高清的方案：

#### ```<img srcset>```

- 调用Demo
```html
  <img src="demo.png" alt="baidu" srcset="demo.png  2x">
```

- [srcset 兼容性](http://caniuse.com/#search=srcset)
  - ios 10.1+
  - android  5+



#### ```background:url(image-set)```
```css
  div {
    background-image: image-set( "demo.png" 1x, "test-2x.png" 2x, "test-print.png" 600dpi );
  }
```

- [imageset 兼容性](http://caniuse.com/#search=image-set)

  - IOS 10.1+
  - android  4.4+



## 问题

1. 需要支持哪些清晰度的图片？
2. 如何可以访问到不同分辨率的图片？
3. 新的API有兼容性问题，怎么破？


## 高清图片解决方案
#### 解决问题：代码编写时一次引入，合理适配各端

#### 图片分类：
  - jpg
  - png
  - gif
  - webp
  - svg
  - base64



#### CSS  [预编译 & 后编译](http://www.kuqin.com/shuoit/20150210/344790.html)

#### PostCss
