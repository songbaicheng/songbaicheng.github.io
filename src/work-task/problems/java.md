---
category: 开发问题
tag: 
  - Java
---

# Java 中遇到的问题
## 访问不信任证书网站
记录一次在项目访问公网域名 Minio 服务提示以下报错：
```java
PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target
```
这是因为在 Java8 及高版本以上的版本在源应用程序不信任目标应用程序的证书，导致在源应用程序的JVM信任库中找不到该证书或证书链的报错，以下有几种解决方案：
### 1. 禁用 SSL 证书验证
在不同的 JDK 版本禁用方式是不同的，基本都是调整 java.security 文件中的配置。从 JDK 9 开始，Java 默认启用 TLS 1.2 和 TLS 1.3，禁用了 SSLv3、TLSv1 和 TLSv1.1，位置通常在 ```$JAVA_HOME/conf/security/java.security```,你可以在这里找到一些配置项，例如：

![JDK 禁用 SSL 验证](/assets/images/work-task/problems/ssl.png "JDK 禁用 SSL 验证")

当然这也是下策，毕竟生产和本地环境是两套环境，而且都可能存在不安全的证书，所以还是不建议使用这种方式。

## 2. 添加证书到 JVM 信任库
找到 Java 安装目录中的 cacerts 文件（通常在 ```jre/lib/security/cacerts``` 目录下，使用 keytool 命令将证书导入到信任库中。例如，假设您的证书文件名为 my-cert.crt，可以使用以下命令：

```shell
keytool -import -alias mycert -file /path/to/my-cert.crt -keystore $JAVA_HOME/jre/lib/security/cacerts
```

记得更新完后重启应用使其生效。

## 3. 代码忽略证书验证（不推荐用于生产环境）
在 Spring Boot 中可以通过配置 TrustManager 来禁用证书验证。以下是一个实现的方法：

```java
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.conn.PoolingHttpClientConnectionManager;
import org.apache.http.impl.conn.SystemDefaultRoutePlanner;
import org.apache.http.conn.ssl.NoopHostnameVerifier;
import org.springframework.web.client.RestTemplate;
import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;
import java.security.cert.X509Certificate;

@Configuration
public class SslConfig {

    @Bean
    public RestTemplate restTemplate(RestTemplateBuilder builder) throws Exception {
        // Create a TrustManager that trusts all certificates
        TrustManager[] trustAllCertificates = new TrustManager[]{
            new X509TrustManager() {
                public X509Certificate[] getAcceptedIssuers() {
                    return null;
                }

                public void checkClientTrusted(X509Certificate[] certs, String authType) {
                }

                public void checkServerTrusted(X509Certificate[] certs, String authType) {
                }
            }
        };

        // Install the all-trusting trust manager
        SSLContext sc = SSLContext.getInstance("TLS");
        sc.init(null, trustAllCertificates, new java.security.SecureRandom());
        CloseableHttpClient httpClient = HttpClients.custom()
                .setSSLContext(sc)
                .setSSLHostnameVerifier(NoopHostnameVerifier.INSTANCE)
                .build();

        return builder
                .requestFactory(() -> new HttpComponentsClientHttpRequestFactory(httpClient))
                .build();
    }
}
```