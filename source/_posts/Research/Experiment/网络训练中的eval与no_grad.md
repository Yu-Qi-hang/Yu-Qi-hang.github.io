---
title: 网络训练中的eval与no_grad
aliases: model.eval()与torch.no_grad()
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
abbrlink: be0b
date: 2023-05-04 00:00:00
---



### model.eval()

model.eval()不会影响各层的gradient计算行为，即gradient计算和存储与training模式一样，只是不进行反向传播(backprobagation)

具体参考 [网络训练中的train和eval模式](网络训练中的train和eval模式.md)

### torch.no\_grad()

```python
with torch.no_grad()：
	# 代码块
```

1. 用于停止autograd模块的工作，起到加速和节省显存的作用（具体行为就是停止gradient计算，从而节省了GPU算力和显存）
2. 不会影响dropout和batchnorm层的行为

### 使用

可以同时使用，仅使用model.eval()已足够得到正确的validation的结果；

而with torch.zero\_grad()则是更进一步加速和节省gpu空间（因为不用计算和存储gradient），从而可以更快计算，也可以跑更大的batch来测试。
