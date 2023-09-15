---
category: 开发问题
tag: 
  - Spring
---

# Spring 中遇到的问题
## yaml 资源文件读取问题
在 spirng-boot-starter-parent 2.7.3 版本中，因为有一些数据想维护在 resources 下的 yaml 文件中，数据格式大致如下：

```yaml
rate-code:
  list:
    - key: "CADCNY3M=CFHB"
      rateName: "CADCNY" 
      tenor: "3M"
      market: ""
    - key: "CHF9MNFO=CFHB"
      rateName: "USDCHF" 
      tenor: "9M"
      market: "NFO"
```

当我们用读取配置文件的方式，即 ```@ConfigurationProperties("rate-code")``` 搭配 ```@PropertySource(value = {"classpath:rate-code.yaml"})``` 来读取的时候发现并没有注册到容器中，后来搜索后发现，原来 Spirng Boot 只会读取 application.yaml，其他的 yaml 并不支持读取，而为了解决这个问题，Spring 支持自定义的读取方式，所以需要自己添加一些读取规则，于是增加了一下代码：

```java
public class YamlPropertySourceFactory extends DefaultPropertySourceFactory {

  @Override
  public PropertySource<?> createPropertySource(String name, EncodedResource resource) throws IOException {

    Resource newResource = resource.getRsource();

    if (!newResource.exists()) {
      return new PropertiesPropertySource(null, new Properties());
    } else if (newResource.getFilename().endsWith(".yaml") || newResource.getFilename().endsWith(".yaml")) {
      List<PropertySource<?>> sources = new YamlPropertySourceLoader(newResource.getFilename(), newResource);
      return sources.get(0);
    }
    return super.createPropertySource(name, resourcce);
  }
}
```

```java
@Getter
@Setter
@ToString
@Configuration
@ConfigurationProperties("tare-code")
@PropertySource(value = {"clssspath:rate-code.yaml"}, factory = YamlPropertySourceFactory.class)
public class RateCodeConfig {
  private List<RateCodeDto> rateCodeList;
}
```