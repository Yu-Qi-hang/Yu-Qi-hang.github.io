---
title: Anaconda下载、安装与使用
date: 2023-01-14
abbrlink: a2fb6424
tags:
- Windows
- Python
---

### 1. 下载安装

1. 来到 [anaconda官网](https://www.anaconda.com/) 点击download进行下载。嫌慢的可以来 [镜像站](https://www.anaconda.com/) 下载。<!--more-->
2. 运行下载好的程序开始安装，next->agree->next，选择自己希望的安装位置后一路默认完成。

![image.png](Anaconda下载、安装与使用/1667196891418-63663904-a5fa-45c2-b800-ca562bf76af7.png)

3. 配置环境变量。右键此电脑打开属性，打开高级系统设置，打开环境变量
   
   |                                                              |                                                              |                                                              |
   | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
   | ![image.png](Anaconda下载、安装与使用/1667197246151-484258f9-4658-4829-b24e-3920590575e6.png) | ![image.png](Anaconda下载、安装与使用/1667197285661-b417289b-ded3-4691-88f8-5c2fa09d50fe.png) | ![image.png](Anaconda下载、安装与使用/1667197325343-a2a48ad5-5faa-4010-b873-ba034a773aab.png) |
   
   

选中系统变量中的Path点击编辑，新建，增加两条路径
![image.png](Anaconda下载、安装与使用/1667197422888-7011f32e-a468-4bc2-acfa-d05fd63a5004.png)![image.png](Anaconda下载、安装与使用/1667197499439-e1aee6fc-b709-4653-8687-49abba026a91.png)

4. 检验win+R打开运行，cmd回车打开终端，如下说明安装成功。

    conda --version

![image.png](Anaconda下载、安装与使用/1667197606803-f1437863-0ea4-4ef3-9c9a-1d5455b01380.png)

5. 换源，增加国内下载源以加快速度。

    #添加下载源
    conda config --add channels http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
    conda config --add channels http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/
    conda config --add channels http://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/
    #删除默认源
    conda config --remove channels defaults
    # 查看通道地址
    conda config --show channels

此时显示如下
![image.png](Anaconda下载、安装与使用/1667197975422-15dc9143-fd7c-42bd-add5-ad16eb671301.png)
需要关闭defaults通道。找到 .condarc 文件。我的位于C:\Users\26594\文件夹下，用记事本打开，在-defaults前加一个#，保存即可。

|                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![image.png](Anaconda下载、安装与使用/1667198087317-a7938695-78be-4609-910d-f7a9c0e2bd1e.png) | ![image.png](Anaconda下载、安装与使用/1667198115166-b47757d1-f8b2-4624-ae60-596a2daf1558.png) |

### 2. 使用

1. 常用命令
   | 查看所有虚拟环境 | conda env list |
   | --- | --- |
   | 创建XXX 环境 | conda create -n XXX： |
   | 激活/启用 XXX环境 | activate XXX |
   | 移除XXX环境 | conda env remove -n XXX |
   | 退出当前环境 | deactivate |
   | 列出当前环境所以包 | conda list |
   | 安装XXX包 | conda install XXX |
   | 移除XXX包 | conda remove XXX |
   |  |  |
   |  |  |

2. 在VSCode中使用conda环境

cmd中执行

    conda init powershell

选择一个文件夹用vscode打开，ctrl+\` 打开终端，执行conda activate XXX即可。
