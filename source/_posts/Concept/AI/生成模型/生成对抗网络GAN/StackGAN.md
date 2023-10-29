---
title: StackGAN
categories:
  - Concept
  - AI
  - 生成模型
  - 生成对抗网络GAN
index_img: /img/AI.png
tags:
  - model/神经网络
  - model
  - model/GAN
  - AI
abbrlink: 2a1
date: 2023-05-04 00:00:00
---

StackGAN（Stacked Generative Adversarial Networks）是一种生成对抗网络（GAN）模型，由中国香港科技大学的Han Zhang等人在2017年提出。StackGAN是一种多尺度图像生成模型，可以生成高分辨率的真实感图像。

StackGAN的网络结构包括**两个生成器网络**和**两个判别器网络**，其中第一个生成器网络用于**生成低分辨率**的图像，第二个生成器网络则用于将**低分辨率图像转换成高分辨率**的真实感图像。而两个判别器网络则用于区分生成的图像与真实的图像之间的差异。

为了提高模型的性能，StackGAN还使用了条件变分自编码器（conditional variational autoencoder，CVAE）和循环一致性损失（cycle consistency loss）等技术。CVAE可以通过潜在向量和条件信息来生成**高质量的图像**，而循环一致性损失则可以确保生成的图像与真实图像之间的**转换是可逆的**。

StackGAN可以应用于许多领域，如计算机视觉、图像处理、虚拟现实等。它可以生成高质量、高分辨率的真实感图像，具有很高的应用价值。
