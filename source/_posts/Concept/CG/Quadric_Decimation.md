---
title: Quadric_Decimation
tags:
  - 3D
  - CG
  - simplify
index_img: /img/CG.png
categories:
  - Concept
  - CG
abbrlink: '9319'
---

Quadric Decimation（四面体减少）是计算机图形学领域中的一种三维模型简化技术，用于减少三维模型中的多边形（通常是三角形或四边形）数量，以降低模型的复杂性，减小文件大小，提高渲染性能或简化模型以便后续处理。

Quadric Decimation 的核心思想是将三维模型的多边形分成一系列四边形，并通过合并相邻的四边形来减少模型中的多边形数量。这一过程的目标是尽量保持模型的外观和几何特征，同时减少多边形的数量。这种技术通常用于高细节的三维模型，例如来自3D扫描、计算机游戏、虚拟现实应用等领域。

Quadric Decimation 的实现通常包括以下步骤：

1. Quadric Error Metric 计算：对于每个四边形，计算一个称为"Quadric Error Metric"的度量值，用于表示合并该四边形的成本。这个度量值考虑了四边形的形状、大小和与相邻四边形的光滑度等因素。
2. 四边形合并：选择具有最低 Quadric Error Metric 值的四边形，并将其与相邻的四边形合并成一个更大的四边形或者三角形。这一过程通常需要确保合并后的模型仍然是合法的、封闭的，并且不会引入明显的几何瑕疵。
3. 迭代处理：重复进行 Quadric Error Metric 计算和四边形合并，直到达到所需的多边形数量或者合并不再明显改善模型。
