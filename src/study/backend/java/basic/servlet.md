---
star: true
category: Java基础
tag: 
  - Servlet
---

# Servlet

```mindmap
root((Servlet 知识点))
    HTTP 协议
    Tomcat 服务器
    Servlet的实现
    HttpServletRequest 对象
    HttpServeltResponse 对象
    Cookie 对象
    HttpSession 对象
    ServletContext 对象
    文件上传和下载
```

## Servlet 是什么
Java Servlet 是运行在 Web 服务器或应用服务器上的程序，它是作为来自 Web 浏览器或其他 HTTP 客户端的请求和 HTTP 服务器上的数据库或应用程序之间的中间层。

Servlet 执行以下主要任务：
- 读取客户端（浏览器）发送的显式的数据。这包括网页上的 HTML 表单，或者也可以是来自 applet 或自定义的 HTTP 客户端程序的表单。
- 读取客户端（浏览器）发送的隐式的 HTTP 请求数据。这包括 cookies、媒体类型和浏览器能理解的压缩格式等等。
- 处理数据并生成结果。这个过程可能需要访问数据库，执行 RMI 或 CORBA 调用，调用 Web 服务，或者直接计算得出对应的响应。
- 发送显式的数据（即文档）到客户端（浏览器）。该文档的格式可以是多种多样的，包括文本文件（HTML 或 XML）、二进制文件（GIF 图像）、Excel 等。
- 发送隐式的 HTTP 响应到客户端（浏览器）。这包括告诉浏览器或其他客户端被返回的文档类型（例如 HTML），设置 cookies 和缓存参数，以及其他类似的任务。

## 快速开始
::: normal-demo Servlet demo
```java
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * @description Servlet demo
 */
@WebServlet("/servlet")
public class MyServlet extends HttpServlet {

    /**
     * 服务器关闭或者容器停止则调用此方法
     */
    @Override
    public void destroy() {
        System.out.println("我是 destroy 方法");
    }

    /**
     * 请求到达servlet容器会判断被请求的servlet是否存在，如果不存在则创建容器
     */
    @Override
    public void init() throws ServletException {
        System.out.println("MyServlet 被创建了！");
    }

    /**
     * 有请求到达servlet容器就会被调用
     */
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        resp.setCharacterEncoding("UTF-8");
        resp.setContentType("text/html;charset-utf-8");
        resp.setHeader("Content-Type", "text/html;charset=utf-8");

        System.out.println("我是 service 方法");
        resp.getWriter().write("我是 service 方法");
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        resp.setCharacterEncoding("UTF-8");
        resp.setContentType("text/html;charset-utf-8");
        resp.setHeader("Content-Type", "text/html;charset=utf-8");

        System.out.println("我是 doGet 方法");
        resp.getWriter().write("我是 doGet 方法");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        resp.setCharacterEncoding("UTF-8");
        resp.setContentType("text/html;charset-utf-8");
        resp.setHeader("Content-Type", "text/html;charset=utf-8");

        System.out.println("我是 doPost 方法");
        resp.getWriter().write("我是 doPost 方法");
    }
}
```
:::

## Servlet 生命周期
Servlet 生命周期可被定义为从创建直到毁灭的整个过程。以下是 Servlet 遵循的过程：
1. Servlet 初始化后调用 init () 方法。
2. Servlet 调用 service() 方法来处理客户端的请求。
3. Servlet 销毁前调用 destroy() 方法。
4. Servlet 是由 JVM 的垃圾回收器进行垃圾回收的。

### init 方法
init 方法被设计成只调用一次。它在第一次创建 Servlet 时被调用，在后续每次用户请求时不再调用。当用户调用一个 Servlet 时，就会创建一个 Servlet 实例，每一个用户请求都会产生一个新的线程，适当的时候移交给 doGet 或 doPost 方法。init() 方法简单地创建或加载一些数据，这些数据将被用于 Servlet 的整个生命周期。

### service 方法
service() 方法是执行实际任务的主要方法。Servlet 容器（即 Web 服务器）调用 service() 方法来处理来自客户端（浏览器）的请求，并把格式化的响应写回给客户端。

每次服务器接收到一个 Servlet 请求时，服务器会产生一个新的线程并调用服务。service() 方法检查 HTTP 请求类型（GET、POST、PUT、DELETE 等），并在适当的时候调用 doGet、doPost、doPut，doDelete 等方法。

### doGet 方法
GET 请求来自于一个 URL 的正常请求，或者来自于一个未指定 method 的 HTML 表单，它由 doGet() 方法处理。

### doPost 方法
POST 请求来自于一个特别指定了 method 为 POST 的 HTML 表单，它由 doPost() 方法处理。

### destroy 方法
destroy() 方法只会被调用一次，在 Servlet 生命周期结束时被调用。destroy() 方法可以让您的 Servlet 关闭数据库连接、停止后台线程、把 Cookie 列表或点击计数器写入到磁盘，并执行其他类似的清理活动。在调用 destroy() 方法之后，servlet 对象被标记为垃圾回收。

## 实现 Servlet