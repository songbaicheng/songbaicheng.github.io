---
star: true
category: SQL
tag: 
  - SQL
  - 数据库
---

# SQL 百科
## SQL 优化指南
## 简单语句 SQL 优化
### 1. 选择合适的数据类型及字符集
使用合适的数据类型可以减少存储空间和提高查询速度。这个可不能小看，数据量到达一个量级，这个就能看出明显差异。
- 对于布尔值使用 TINYINT(1) 而不是 CHAR(1) 比如你有一个字段是表示业务状态或者是类型。
- 对于仅存储英文的表，使用 latin1 而不是 utf8mb4。

### 2. 避免使用SELECT *
仅选择必要的列，减少数据传输量。

### 3. 合理使用JOIN、避免子查询
避免过多的 JOIN 操作，尽量减少数据集的大小。尽量使用 JOIN 或者 EXISTS 代替子查询。

### 4. 使用UNION代替OR
使用UNION代替OR、优化ORDER BY和GROUP BY

### 5. 优化 ORDER BY 和 GROUP BY
确保 ORDER BY 和 GROUP BY 的列上有索引。

### 6. 避免使用%开头的LIKE查询
避免使用 % 开头的 LIKE 查询，因为不能使用索引。这个尤其重要，相信各位在各大平台网站上。很多搜索只有输入前面的字才能有结果，你输入中间的字，会查询不到，其实就是这个原理。

### 7. 使用索引
使用批量插入、优化INSERT操作。

## 正确使用索引
### 1. 在常用查询条件和连接条件的列上建立索引
这块很清楚，反正只要发现查询较慢，优先检查where条件后面，有没有被创建索引。

### 2. 遵循最左前缀原则
这个是针对复合索引时的要求，遵循最左前缀原则。

### 3. 避免在索引列上进行计算
例子：避免 WHERE YEAR(date) = 2020，改用范围查询。
```sql
SELECT * FROM orders WHERE date BETWEEN '2024-06-01' AND '2024-06-30';
```

### 4. 更新频繁的列慎用索引
对于更新频繁的列，索引会增加写操作的开销，需要慎重使用。

## DBMS 配置优化
### 调整innodb_buffer_pool_size
innodb_buffer_pool_size 是 InnoDB 存储引擎最重要的配置参数之一，用于指定 InnoDB 缓冲池的大小。缓冲池用于缓存数据页、索引页和 InnoDB 表的其它信息。合理设置这个参数对数据库性能有很大影响。

增大 InnoDB 缓冲池大小，提高缓存命中率。

SET GLOBAL innodb_buffer_pool_size = 2G;
但是这里要注意 该值并不是越大越好。innodb_buffer_pool_size 应该设置要尽可能大，但要确保为操作系统和其他应用程序留出足够的内存。

一般建议在数据库专用服务器上设置为物理内存的 60% 到 80%。通过监控数据库性能和内存使用情况，可以进一步调整这个参数以优化数据库性能。

### 调整query_cache_size
query_cache_size 是用于指定查询缓存的大小。查询缓存可以缓存 SELECT 查询的结果，避免重复执行相同的查询，从而提高性能。

然而，在 MySQL 8.0 及更高版本中，查询缓存已经被完全移除。如果你使用的是 MySQL 8.0 及以上版本，可以忽略 query_cache_size 参数。

### 调整thread_cache_size
增大线程缓存大小，减少线程创建开销。

SET GLOBAL thread_cache_size = 100;
### 调整table_open_cache
增大表缓存大小，减少表打开的开销。

SET GLOBAL table_open_cache = 4000;
### 调整tmp_table_size和max_heap_table_size
增大临时表和堆表的最大大小，减少磁盘 I/O。

SET GLOBAL tmp_table_size = 64M;
SET GLOBAL max_heap_table_size = 64M;
### 调整innodb_flush_log_at_trx_commit
根据需求调整日志刷新策略，权衡性能和数据安全性。

SET GLOBAL innodb_flush_log_at_trx_commit = 2;
### 调整innodb_log_file_size
增大日志文件大小，减少日志文件切换的开销。

SET GLOBAL innodb_log_file_size = 256M;
### 调整innodb_log_buffer_size
增大日志缓冲区大小，提高写入性能。

SET GLOBAL innodb_log_buffer_size = 16M;
### 调整innodb_io_capacity
根据磁盘 I/O 性能调整 InnoDB I/O 容量。

SET GLOBAL innodb_io_capacity = 2000;
### 调整max_connections
增大最大连接数，支持更多并发连接。

SET GLOBAL max_connections = 500;

### 调整sort_buffer_size
增大排序缓冲区大小，提高排序操作的性能。

SET GLOBAL sort_buffer_size = 4M;

### 调整read_buffer_size
增大读缓冲区大小，提高顺序扫描性能。

SET GLOBAL read_buffer_size = 2M;
