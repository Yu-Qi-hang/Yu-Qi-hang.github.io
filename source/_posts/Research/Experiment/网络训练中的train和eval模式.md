---
title: 网络训练中的train和eval模式
tags:
  - AI
  - Pytorch
  - Python
  - model/神经网络
  - model/模型训练
categories:
  - Research
  - Experiment
index_img: /img/AI.png
abbrlink: aac5
date: 2023-05-04 00:00:00
---



### model.train()

model.train()的作用是**启用 Batch Normalization 和 Dropout**。

如果模型中有BN层(Batch Normalization）和Dropout，需要在训练时添加model.train()。

model.train()是保证BN层能够用到每一批数据的均值和方差。对于Dropout，model.train()是随机取一部分网络连接来训练更新参数。 

### model.eval()

model.eval()的作用是**不启用 Batch Normalization 和 Dropout**。

如果模型中有BN层(Batch Normalization）和Dropout，在测试时添加model.eval()。

model.eval()是保证BN层能够**用全部训练数据**的均值和方差，即测试过程中要保证BN层的均值和方差不变。对于Dropout，model.eval()是利用到了**所有网络连接**，即不进行随机舍弃神经元。

### 测试时候的设定

训练完train\_datasets之后，model要来测试样本了。在model(test\_datasets)之前，需要**加上model.eval()**. 否则的话，**有输入数据，即使不训练，它也会改变权值**。这是model中含有batch normalization层所带来的的性质。

eval()时，pytorch会自动把BN和DropOut固定住，不会取平均，而是用训练好的值。不然的话，一旦test的batch\_size过小，很容易就会被BN层导致生成图片颜色失真极大。
