---
title: Dropout
categories:
  - Concept
  - AI
  - 神经网络
index_img: /img/AI.png
tags:
  - data/正则化
  - overfitting
  - model/神经网络
abbrlink: b5d6
date: 2023-05-04 00:00:00
---

Dropout是一种正则化技术，用于在神经网络的训练过程中**减少过拟合**。它在每次训练迭代中**随机丢弃**一些神经元，从而降低它们对特定输入的依赖性，并增加网络的泛化能力。

具体来说，Dropout将每个神经元的输出以概率p（通常为0.5）设置为0，这意味着该神经元在该迭代中不会对前向传递的输出进行贡献。在反向传播期间，只有那些没有被设置为0的神经元才会更新其权重。这使得神经元不能过分依赖其它神经元的输出，从而防止过拟合。

使用Dropout时，通常在**训练阶段启用**它，在**测试阶段禁用**它。这是因为在测试阶段，我们希望使用整个网络来进行预测，而不是对每个神经元都进行随机丢弃。在PyTorch中，可以使用`nn.Dropout`模块来添加Dropout层，例如：

```python
dropout = nn.Dropout(p=0.5) # 创建一个丢弃概率为0.5的Dropout层
x = dropout(x) # 对输入进行Dropout
```
