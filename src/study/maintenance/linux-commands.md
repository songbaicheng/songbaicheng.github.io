---
category: 运维
tag: 
  - Linux commands
---

# 常用 Linux 命令
后段开发者难免需要经常和服务器打交道，自己把经常用到的命令都统计下来方便翻阅查看。

## Linux 关机重启
```shell
# 关机
shutdown -h now

# 重启
shutdown -r now
```

## ssh key
```shell
ssh-keygen -t rsa -C your_email@example.com
```
## 自定义快捷指令
```shell
alias ll='ls -alF'
```

## 后台运行命令
```shell
# 后台运行,并且有nohup.out输出
nohup xxx &

# 后台运行, 不输出任何日志
nohup xxx > /dev/null &

# 后台运行, 并将错误信息做标准输出到日志中 
nohup xxx >out.log 2>&1 &
```

## 查看磁盘空间
```shell
# 查看根目录下文件夹大小
df

# 查看当前目录下占用磁盘空间大小前 15 的文件夹
du -ahx * | sort -rh | head -n 15
```

## 创建和查看定时任务
```shell
# 查看定时任务
crontab -l

# 编辑定时任务
crontab -e
```

## 解压缩命令
```shell
# 压缩目录为 tar 文件
tar zcvf xxx.tar

# 压缩目录为 zip 文件
zip -r xxx.zip

# 解压 tar 文件到当前目录
tar zxvf xxx.tar
 
# 解压 tar 到指定文件夹
tar zxvf xxx.tar -C /xxx/yyy/

# 解压 zip 到当前目录
unzip xxx.zip
```

## vim 命令
```shell
#normal模式下 g表示全局, x表示查找的内容, y表示替换后的内容
:%s/x/y/g
 
#normal模式下
0  # 光标移到行首(数字0)
$  # 光标移至行尾
shift + g # 跳到文件最后
gg # 跳到文件头
 
# 显示行号
:set nu
 
# 去除行号
:set nonu
 
# 检索
/xxx(检索内容)  # 从头检索, 按n查找下一个
?xxx(检索内容)  # 从尾部检索
```