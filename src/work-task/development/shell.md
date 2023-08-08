---
category: 工作任务
tag: 
  - Shell
---

# Shell 脚本
> 所有的脚本没有特殊标注都以 Linux 机器为准，有些命令可能在 AIX 机器上会失效。
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
保存后退出，可以使用 ```crontab -l``` 查看是否添加成功。

## 比较声明环境文件是否生效
对于声明环境变量的文件，可以用 _**export**_ 关键字声明然后 _**source**_ 使文件生效即可，我们判断环境变量是否已经生效可以先按行遍历拿到 export 开头的行，从中取到变量名和值，然后根据变量名获取环境变量中已经生效的值和文件中的变量值进行比较即可。
```bash
#!/bin/bash

# 初始化错误计数器
error_count=0

# 函数来处理错误计数
count_error() {
    ((error_count++))
}

# 使用find命令查找以-profile结尾的环境变量文件，并处理它们
find . -name "*-profile" -type f | while read -r file; do

    # 检查文件是否存在并可读
    if [[ -r "$file" ]]; then

        echo "Reading variables from: $file"
        # 逐行读取文件内容
        while read -r line; do

            # 查找包含"export"关键字的行
            if [[ "$line" == export* ]]; then

                # 提取变量名和值
                variable=$(echo "$line" | cut -d' ' -f2 | cut -d'=' -f1)
                value=$(echo "$line" | cut -d'=' -f2-)

                # 去除文件中的单引号
                value=${value//\'/}
                
                # 获取对应的环境变量值
                env_value="${!variable}"
                
                # 比较文件中的值和环境变量中的值
                if [[ "$value" != "$env_value" ]]; then
                    echo "$file中$variable的值不相同，文件中的变量值为$value，环境变量中的变量值为$env_value"
                    echo "Variable $variable does not match. File value: $value, Environment value: $env_value"
                    count_error
                fi
            fi
        done < "$file"
    else
        echo "不能读取的文件：$file"
    fi
done

# 判断错误计数器是否为0
if [[ "$error_count" -eq 0 ]]; then
    echo "环境变量完全相同！"
else
    echo "环境变量有$error_count个不同"
fi

```