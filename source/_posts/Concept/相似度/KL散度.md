---
title: KL散度
tags:
  - similarity
  - distribution
index_img: /img/AI.png
math: true
categories:
  - Concept
  - 相似度
abbrlink: f512
---
Kullback-Leibler divergence，简称 [KLD](https://zh.wikipedia.org/wiki/%E7%9B%B8%E5%AF%B9%E7%86%B5#cite_note-:0-1) ，是两个几率分布$P$和$Q$差别的非对称性的度量。 KL散度是用来度量使用基于$Q$的分布来编码服从$P$的分布的样本所需的额外的平均比特数。典型情况下，$P$表示数据的真实分布，$Q$表示数据的理论分布、估计的模型分布、或$P$的近似分布。

离散形式：
$$
D_{KL}(P\parallel Q)
=-\sum_{i}{P(i)\ln{\frac{Q(i)}{P(i)}}}
=\sum_{i}{P_{i}\ln\frac{P(i)}{Q(i)}}
$$

连续形式：
$$
D_{KL}(P\parallel Q)
=\int_{-\infty}^{\infty}{p(x)\ln\frac{p(x)}{q(x)}}\mathbf{d}x
$$

性质：
$$D_{KL}(P\parallel Q)\ge 0$$
$$D_{KL}(P\parallel Q)\ne D_{KL}(Q\parallel P)$$