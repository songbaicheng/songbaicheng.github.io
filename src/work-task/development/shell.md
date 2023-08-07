---
category: 工作任务
tag: 
  - Shell
---

# Shell 脚本
## 定时删除过期日志
```shell
# ./bin.bash

Log_directory="/price/log" ＃ 日志地址
days_to_keep=7 ＃ 保留的天数，即七天前的文件将被删除

# 计算七天前的曰期
target_date=$(date -d "$days_to_keep days ago" + %Y-%m-%d)

# 删除七天前日期格式的文件夹
find "$log_directory" -type d -name "????-??-??" | while read -r folder; do
    folder_name=＄(basename "$folder")

    # 比较文件夹的日期与目标日期
    if [[ $folder_name < $target_date ]]; then
        echo "删除文件夹：$folder"
        rm - rf "＄folder"
    fi
done

# 删除七天前的*.1og.* 格式文件
find "$log_directory" -type f -name "*.1og.*" | while read -r file;
    file_date=$(stat -c "%y" "$file" | cut -d' ' -f1)

    # 比较文件的日期与目标日期
    if [[ $file_date < $target_date ]]; then
        echo "删除文件：$file"
        rm "$file"
    fi
done
```

可以使用 cron 来定时运行此脚本，使用 ```crontab -e``` 命令编辑当前用户的 cron 任务表，然后添加以下内容：
```shell
0 0 * * * /shells/cleanup_logs.sh # 将在每天的午夜（00:00）运行脚本
```
