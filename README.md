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



## 问题 1: 需要支持哪些清晰度的图片？

| 设备 | 屏幕尺寸 | 分辨率(pt) | Reader（逻辑分辨率） | 物理分辨率(px) | 渲染后 | PPI |
| --- | --- | --- | --- | --- | --- | --- |
| iPhone 3GS | 3.5吋 | 320x480 | @1x | 320x480 |  | 163 |
| iPhone 4/4s | 3.5吋 | 320x480 | @2x | 640x960 |  | 330 |
| iPhone 5/5s/5c | 4.0吋 | 320x568 | @2x | 640x1136 |  | 326 |
| iPhone 6/7 | 4.7吋 | 375x667 | @2x | 750x1334 |  | 326 |
| iPhone6/7 Plus | 5.5吋 | 414x736 | @3x | 1242x2208 | 1080x1920 | 401 |

- 根据物理分辨率和逻辑分辨率我们得到需要支持的像素倍率 1x,2x,3x

## 问题 2：如何访问到不同分辨率的图片？

- 原理是通过判断页面访问的不同环境，访问不同的图片url，如：像素倍率是2的，访问demo.2x.png
- way1：服务器存一份demo.png,根据请求的不同，进行图片动态裁剪和重命名。
- way2：上传图片的时候，利用本地服务，处理3份图片，统一上传。


## 问题 3：新的API有兼容性问题，怎么破？

```
fis3-preprocessor-postcss-hd
```

原理：利用PostCss在Fis编译过程中增加预处理插件来处理CSS

#### CSS  [预编译 & 后编译](http://www.kuqin.com/shuoit/20150210/344790.html)

