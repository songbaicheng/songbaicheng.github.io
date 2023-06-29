---
category: Spring Boot
tag: 
  - Spring Data
  - Redis
---

# Spring Data Redis
## 引言
Redis 作为基于内存的 NoSQL 数据库，在解决包括缓存、会话存储、排行榜、实时分析和消息队列等场景上有着不可替代的作用，所以目前几乎所有的项目都会有依赖它的需求，相比于一些传统的关系型数据库 Redis 的配置更加简单容易，所以在项目中使用非常推荐放在 common 模块当中来方便其他模块依赖，使用的时候直接注入即可，这里我也是基于这种思想来演示一个 Redis 模块的创建，以后搭建项目可以直接开箱即用。

## 快速开始
### 添加依赖

::: code-tabs

@tab Maven#Maven

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>

<!-- 连接器二选一 -->
<dependency>
    <groupId>io.lettuce</groupId>
    <artifactId>lettuce-core</artifactId>
    <version>${your version}</version>
</dependency>

<!-- 连接器二选一 -->
<dependency>
    <groupId>redis.clients</groupId>
    <artifactId>jedis</artifactId>
    <version>${your version}</version>
</dependency>

<!-- jackson 序列化依赖 -->
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>${your version}</version>
</dependency>
```

@tab Gradle#Gradle

```gradle
implementation 'org.springframework.boot:spring-boot-starter-data-redis'
implementation 'io.lettuce:lettuce-core:${your_version}'
implementation 'redis.clients:jedis:${your_version}'
implementation 'com.fasterxml.jackson.core:jackson-databind:${your_version}'
```

:::

### 工具方法服务类和具体实现类
用命令行学习 Redis 的时候得心应手，但是 RedisTemplate 的方法直接用起来还是不太顺手，这里是根据命令封装好的 RedisTemplate 方法，可以直接 cv。

::: normal-demo Redis 操作接口

```java
package service;

import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * @ClassName IRedisService
 * @Description redis 操作接口
 */
public interface IRedisService {

    /**
     * 保存属性
     */
    void set(String key, Object value, long time);

    /**
     * 保存属性
     */
    void set(String key, Object value);

    /**
     * 获取属性
     */
    Object get(String key);

    /**
     * 删除属性
     */
    Boolean del(String key);

    /**
     * 批量删除属性
     */
    Long del(List<String> keys);

    /**
     * 设置过期时间
     */
    Boolean expire(String key, long time);

    /**
     * 获取过期时间
     */
    Long getExpire(String key);

    /**
     * 判断是否有该属性
     */
    Boolean hasKey(String key);

    /**
     * 按delta递增
     */
    Long incr(String key, long delta);

    /**
     * 按delta递减
     */
    Long decr(String key, long delta);

    /**
     * 获取Hash结构中的属性
     */
    Object hGet(String key, String hashKey);

    /**
     * 向Hash结构中放入一个属性
     */
    Boolean hSet(String key, String hashKey, Object value, long time);

    /**
     * 向Hash结构中放入一个属性
     */
    void hSet(String key, String hashKey, Object value);

    /**
     * 直接获取整个Hash结构
     */
    Map<Object, Object> hGetAll(String key);

    /**
     * 直接设置整个Hash结构
     */
    Boolean hSetAll(String key, Map<String, Object> map, long time);

    /**
     * 直接设置整个Hash结构
     */
    void hSetAll(String key, Map<String, ?> map);

    /**
     * 删除Hash结构中的属性
     */
    void hDel(String key, Object... hashKey);

    /**
     * 判断Hash结构中是否有该属性
     */
    Boolean hHasKey(String key, String hashKey);

    /**
     * Hash结构中属性递增
     */
    Long hIncr(String key, String hashKey, Long delta);

    /**
     * Hash结构中属性递减
     */
    Long hDecr(String key, String hashKey, Long delta);

    /**
     * 获取Set结构
     */
    Set<Object> sMembers(String key);

    /**
     * 向Set结构中添加属性
     */
    Long sAdd(String key, Object... values);

    /**
     * 向Set结构中添加属性
     */
    Long sAdd(String key, long time, Object... values);

    /**
     * 是否为Set中的属性
     */
    Boolean sIsMember(String key, Object value);

    /**
     * 获取Set结构的长度
     */
    Long sSize(String key);

    /**
     * 删除Set结构中的属性
     */
    Long sRemove(String key, Object... values);

    /**
     * 获取List结构中的属性
     */
    List<Object> lRange(String key, long start, long end);

    /**
     * 获取List结构的长度
     */
    Long lSize(String key);

    /**
     * 根据索引获取List中的属性
     */
    Object lIndex(String key, long index);

    /**
     * 向List结构中添加属性
     */
    Long lPush(String key, Object value);

    /**
     * 向List结构中添加属性
     */
    Long lPush(String key, Object value, long time);

    /**
     * 向List结构中批量添加属性
     */
    Long lPushAll(String key, Object... values);

    /**
     * 向List结构中批量添加属性
     */
    Long lPushAll(String key, Long time, Object... values);

    /**
     * 从List结构中移除属性
     */
    Long lRemove(String key, long count, Object value);
}

```
:::
::: normal-demo Redis 操作实现类
```java
package service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import service.IRedisService;

import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.TimeUnit;

/**
 * @ClassName IRedisServiceImpl
 * @Description redis 操作实现类
 */
public class IRedisServiceImpl implements IRedisService {

    @Autowired
    private RedisTemplate<String, Object> redisTemplate;

    @Override
    public void set(String key, Object value, long time) {
        redisTemplate.opsForValue().set(key, value, time, TimeUnit.SECONDS);
    }

    @Override
    public void set(String key, Object value) {
        redisTemplate.opsForValue().set(key, value);
    }

    @Override
    public Object get(String key) {
        return redisTemplate.opsForValue().get(key);
    }

    @Override
    public Boolean del(String key) {
        return redisTemplate.delete(key);
    }

    @Override
    public Long del(List<String> keys) {
        return redisTemplate.delete(keys);
    }

    @Override
    public Boolean expire(String key, long time) {
        return redisTemplate.expire(key, time, TimeUnit.SECONDS);
    }

    @Override
    public Long getExpire(String key) {
        return redisTemplate.getExpire(key, TimeUnit.SECONDS);
    }

    @Override
    public Boolean hasKey(String key) {
        return redisTemplate.hasKey(key);
    }

    @Override
    public Long incr(String key, long delta) {
        return redisTemplate.opsForValue().increment(key, delta);
    }

    @Override
    public Long decr(String key, long delta) {
        return redisTemplate.opsForValue().increment(key, -delta);
    }

    @Override
    public Object hGet(String key, String hashKey) {
        return redisTemplate.opsForHash().get(key, hashKey);
    }

    @Override
    public Boolean hSet(String key, String hashKey, Object value, long time) {
        redisTemplate.opsForHash().put(key, hashKey, value);
        return expire(key, time);
    }

    @Override
    public void hSet(String key, String hashKey, Object value) {
        redisTemplate.opsForHash().put(key, hashKey, value);
    }

    @Override
    public Map<Object, Object> hGetAll(String key) {
        return redisTemplate.opsForHash().entries(key);
    }

    @Override
    public Boolean hSetAll(String key, Map<String, Object> map, long time) {
        redisTemplate.opsForHash().putAll(key, map);
        return expire(key, time);
    }

    @Override
    public void hSetAll(String key, Map<String, ?> map) {
        redisTemplate.opsForHash().putAll(key, map);
    }

    @Override
    public void hDel(String key, Object... hashKey) {
        redisTemplate.opsForHash().delete(key, hashKey);
    }

    @Override
    public Boolean hHasKey(String key, String hashKey) {
        return redisTemplate.opsForHash().hasKey(key, hashKey);
    }

    @Override
    public Long hIncr(String key, String hashKey, Long delta) {
        return redisTemplate.opsForHash().increment(key, hashKey, delta);
    }

    @Override
    public Long hDecr(String key, String hashKey, Long delta) {
        return redisTemplate.opsForHash().increment(key, hashKey, -delta);
    }

    @Override
    public Set<Object> sMembers(String key) {
        return redisTemplate.opsForSet().members(key);
    }

    @Override
    public Long sAdd(String key, Object... values) {
        return redisTemplate.opsForSet().add(key, values);
    }

    @Override
    public Long sAdd(String key, long time, Object... values) {
        Long count = redisTemplate.opsForSet().add(key, values);
        expire(key, time);
        return count;
    }

    @Override
    public Boolean sIsMember(String key, Object value) {
        return redisTemplate.opsForSet().isMember(key, value);
    }

    @Override
    public Long sSize(String key) {
        return redisTemplate.opsForSet().size(key);
    }

    @Override
    public Long sRemove(String key, Object... values) {
        return redisTemplate.opsForSet().remove(key, values);
    }

    @Override
    public List<Object> lRange(String key, long start, long end) {
        return redisTemplate.opsForList().range(key, start, end);
    }

    @Override
    public Long lSize(String key) {
        return redisTemplate.opsForList().size(key);
    }

    @Override
    public Object lIndex(String key, long index) {
        return redisTemplate.opsForList().index(key, index);
    }

    @Override
    public Long lPush(String key, Object value) {
        return redisTemplate.opsForList().rightPush(key, value);
    }

    @Override
    public Long lPush(String key, Object value, long time) {
        Long index = redisTemplate.opsForList().rightPush(key, value);
        expire(key, time);
        return index;
    }

    @Override
    public Long lPushAll(String key, Object... values) {
        return redisTemplate.opsForList().rightPushAll(key, values);
    }

    @Override
    public Long lPushAll(String key, Long time, Object... values) {
        Long count = redisTemplate.opsForList().rightPushAll(key, values);
        expire(key, time);
        return count;
    }

    @Override
    public Long lRemove(String key, long count, Object value) {
        return redisTemplate.opsForList().remove(key, count, value);
    }
}

```
:::

### 配置类实现
引用该配之类的话就需要实现一个 RedisConfig 继承下面的 BaseRedisConfig 并添加 @Configuration 注册到容器中即可。

::: normal-demo Redis 基础配置类
```java
package config;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.PropertyAccessor;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.jsontype.impl.LaissezFaireSubTypeValidator;
import org.springframework.context.annotation.Bean;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.Jackson2JsonRedisSerializer;
import org.springframework.data.redis.serializer.RedisSerializer;
import org.springframework.data.redis.serializer.StringRedisSerializer;
import service.IRedisService;
import service.impl.IRedisServiceImpl;

/**
 * @ClassName RedisConfig
 * @Description Redis 配置
 */
public class BaseRedisConfig {

    /**
     * 使用Lettuce作为Redis客户端
     *
     * @return 返回一个 Lettuce 连接工厂
     */
    @Bean
    LettuceConnectionFactory redisConnectionFactory() {
        return new LettuceConnectionFactory();
    }

    /**
     * RedisTemplate 自定义配置
     * @param redisConnectionFactory Redis 连接工厂
     */
    @Bean
    public RedisTemplate<String, Object> redisTemplate(RedisConnectionFactory redisConnectionFactory) {

        RedisSerializer<Object> serializer = redisSerializer();
        RedisTemplate<String, Object> redisTemplate = new RedisTemplate<>();

        // 设置Redis连接工厂
        redisTemplate.setConnectionFactory(redisConnectionFactory);
        // 设置用于序列化Redis键的序列化器
        redisTemplate.setKeySerializer(new StringRedisSerializer());
        // 设置用于序列化Redis值的序列化器
        redisTemplate.setValueSerializer(serializer);
        // 设置用于序列化Redis哈希表键的序列化器
        redisTemplate.setHashKeySerializer(new StringRedisSerializer());
        // 设置用于序列化Redis哈希表值的序列化器
        redisTemplate.setHashValueSerializer(serializer);
        // 确保RedisTemplate的属性已经设置完毕，并进行必要的初始化。
        redisTemplate.afterPropertiesSet();

        return redisTemplate;
    }

    /**
     * Redis 自定义序列化方法
     * @return 自定义序列化器
     */
    public RedisSerializer<Object> redisSerializer() {

        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.setVisibility(PropertyAccessor.ALL, JsonAutoDetect.Visibility.ANY);
        // 必须设置，否则无法将JSON转化为对象，会转化成Map类型
        objectMapper.activateDefaultTyping(LaissezFaireSubTypeValidator.instance, ObjectMapper.DefaultTyping.NON_FINAL);

        return new Jackson2JsonRedisSerializer<>(objectMapper, Object.class);
    }

    /**
     * redis 工具类
     */
    @Bean
    public IRedisService redisService() {
        return new IRedisServiceImpl();
    }

}

```
:::

## 总结
使用 Spring Data Redis 只需要配置以上三步，在你真正调用的模块中配置你的 Redis 连接参数后就可以很方便的使用了。