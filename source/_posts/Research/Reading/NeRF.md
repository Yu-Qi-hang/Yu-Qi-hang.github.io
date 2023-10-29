---
title: NeRF
aliases: NeRF_Representing_Scenes_as_Neural_Radiance_Fields_for_View_Synthesis
tags:
  - paper
  - 3D
  - display
  - 渲染
index_img: /img/CG.png
math: true
categories:
  - Research
  - Reading
abbrlink: a5bb
---

> [NeRF: Representing Scenes as Neural Radiance Fields for View Synthesis](https://arxiv.org/abs/2003.08934)
> 
> 2023.09.11
> 
> 神经辐射场表示场景来做新视角合成

![](../../../../image/paper/231029004.png)

![](../../../../image/paper/231029005.png)

体渲染中的光学模型：$T(t)$是一个衰减函数，从光线遇到物体表面开始迅速衰减，避免透视的出现。
$r(t)=o+td$，o是观测点位置坐标
光线的视角方向 $d=(\theta,\phi)$

![](../../../../image/paper/231029006.png)