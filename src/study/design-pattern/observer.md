---
category: 设计模式
tag: 
  - observer pattern
  - Java
  - Spring Boot
---

# 观察者模式
## 什么是观察者模式
观察者模式也被称为发布-订阅模式或者事件-监听模式，这让我们很容易联想到 Redis、MQ 中的发布订阅模式，即主题对象（发布者）和观察者对象（订阅者）之间的关系类似于发布者发布事件，而观察者监听并响应该事件的方式，所以观察者模常用于实现对象之间的一对多依赖关系。

## 实现
大多数编程语言都支持观察者模式的实现，但是大多数的场景下并不会去使用，因为其实现存在一些问题和局限性，不符合现代Java语言的设计原则和最佳实践。另外，它们也没有提供对并发编程的良好支持。拿 Java举例，Java 官方推荐使用其他更好的替代方案，例如使用接口和回调机制来实现观察者模式，或者使用第三方的观察者模式框架（如 Spring Framework 的事件机制或 Google Guava 的事件总线）。

### jdk版
在 Java 标准库中，java.util.Observable 类和 java.util.Observer 接口在 Java 9 版本之后被标记为过时，可能会在未来的 Java 版本中被移除，但是这并不影响我们用在这里方便理解其过程。

1. 首先，创建一个发布者类。

```java
// 发布者接口
interface Publisher {
    void subscribe(Subscriber subscriber);
    void unsubscribe(Subscriber subscriber);
    void notifySubscribers(String message);
}

// 具体的发布者类
class ConcretePublisher implements Publisher {
    private List<Subscriber> subscribers;

    public ConcretePublisher() {
        subscribers = new ArrayList<>();
    }

    @Override
    public void subscribe(Subscriber subscriber) {
        subscribers.add(subscriber);
    }

    @Override
    public void unsubscribe(Subscriber subscriber) {
        subscribers.remove(subscriber);
    }

    @Override
    public void notifySubscribers(String message) {
        for (Subscriber subscriber : subscribers) {
            subscriber.receiveMessage(message);
        }
    }

    public void publish(String message) {
        notifySubscribers(message);
    }
}
```

2. 创建订阅者类。

```java
// 订阅者接口
interface Subscriber {
    void receiveMessage(String message);
}

// 具体的订阅者类
class ConcreteSubscriber implements Subscriber {
    private String name;

    public ConcreteSubscriber(String name) {
        this.name = name;
    }

    @Override
    public void receiveMessage(String message) {
        System.out.println(name + " 收到消息: " + message);
    }
}
```

3. 创建一个具体的发布者和两个具体的订阅者来测试。

```java
public class ObserverPatternExample {
    public static void main(String[] args) {
        ConcretePublisher publisher = new ConcretePublisher();

        ConcreteSubscriber subscriber1 = new ConcreteSubscriber("订阅者1");
        ConcreteSubscriber subscriber2 = new ConcreteSubscriber("订阅者2");

        publisher.subscribe(subscriber1);
        publisher.subscribe(subscriber2);

        publisher.publish("Hello, World!");

        publisher.unsubscribe(subscriber2);

        publisher.publish("How are you?");
    }
}
```

运行上述代码时，一开始订阅者订阅了两个发布者，并且在发布者发布消息时接收到通知。然后，我们取消了一个订阅者的订阅，并再次发布消息，观察到只有一个订阅者收到了通知。

### Spring版
在Spring框架的观察者模式中我们首先要了解一些核心概念：

- 事件（Event）：Event 代表着在应用程序中发生的特定事件。事件对象中包含了相关的数据和信息，用于描述事件的发生和上下文。在观察者模式中，事件对象会被发布（publish）给所有注册的监听器，通知它们事件的发生。
- 监听器（Listener）：Listener 是事件的接收者和处理者。它负责监听和响应特定类型的事件。监听器需要实现ApplicationListener 接口，并通过泛型指定要监听的事件类型。当事件被发布时，对应类型的监听器将接收到事件，并执行相应的逻辑处理。
- 应用事件发布器（Application Event Publisher）：应用事件发布器是一个接口，通常由Spring框架提供的ApplicationEventPublisher接口实现。它允许组件或类将事件发布给观察者。通过应用事件发布器，可以将事件发布给所有注册的监听器。
- 应用事件监听器（Application Event Listener）：应用事件监听器是一个接口，通常由Spring框架提供的ApplicationListener接口实现。它定义了一个或多个用于处理特定类型事件的方法。通过实现应用事件监听器接口，并注册到应用事件发布器中，可以接收和处理相应类型的事件。
- 事件源（Event Source）：事件源是触发事件的对象或组件。在Spring框架的观察者模式中，事件源可以是任何对象，但通常是由应用程序定义的业务对象或组件。当事件源触发事件时，它会将事件发布给应用事件发布器。
- 事件上下文（Event Context）：事件上下文是事件发生时的上下文信息，它包含了与事件相关的数据和状态。事件上下文可以作为事件对象的一部分，在事件中传递给监听器进行处理。

接下来我们使用 Spring Framework 的事件机制重写这个例子：

1. 首先，我们定义一个事件类 MyEvent，它将作为观察者模式中的事件对象。

```java
public class MyEvent extends ApplicationEvent {

    private String message;

    public MyEvent(Object source, String message) {

        super(source);
        this.message = message;
    }

    public String getMessage() {

        return message;
    }
}
```

2. 接下来，创建一个事件源类MyEventPublisher，负责发布事件。

```java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Component;

@Component
public class MyEventPublisher {

    @Autowired
    private ApplicationEventPublisher eventPublisher;

    public void publishEvent(String message) {

        CustomEvent customEvent = new CustomEvent(this, message);
        eventPublisher.publishEvent(customEvent);
    }
}
```

3. 最后，创建一个事件监听器类MyEventListener，用于接收和处理事件：

```java
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

@Component
public class MyEventListener implements ApplicationListener<MyEvent> {

    @Override
    public void onApplicationEvent(CustomEvent event) {

        String message = event.getMessage();
        // 在这里处理事件
        System.out.println("收到消息:" + message);
    }
}
```

在这个示例中，通过 MyEventPublisher 发布了一个自定义事件。当事件发生时，MyEventListener 监听器将接收到该事件，并处理相应的逻辑。需要注意的是，需要使用 @Component 注解将事件发布器和事件监听器声明为 Spring 容器中的组件，以便自动注册和管理。

## 总结
观察者模式适用于以下场景：

- 一对多的依赖关系：当一个对象的状态发生变化时，需要通知多个其他对象进行相应的处理。观察者模式能够实现一对多的通知机制，确保所有相关的观察者都能接收到状态变化的通知并作出相应的响应。
- 发布-订阅模式：在发布-订阅模式中，观察者模式被广泛应用。事件发布者（发布者）负责发布事件，而订阅者（观察者）订阅感兴趣的事件，并在事件发生时接收通知。这种模式常用于异步消息处理、事件驱动的系统和消息队列等场景。
- GUI事件处理：在图形用户界面（GUI）开发中，观察者模式被广泛用于处理用户界面组件的事件。例如，当按钮被点击、文本框内容改变或窗口关闭时，相关的观察者会收到相应的事件通知并执行相应的操作。
- 系统状态监测和通知：当系统中的某些关键状态发生变化时，需要通知其他模块或组件进行相应的处理。观察者模式可以用于系统监测和通知的场景，例如服务器负载监测、日志记录、缓存更新等。
- 数据库触发器：在数据库系统中，触发器（Trigger）可以用作观察者模式的实现。当数据库中的数据发生变化时，触发器可以自动触发相应的操作，例如更新相关的数据表、发送通知等。
- 日志记录和审计：观察者模式可以用于实现日志记录和审计功能。当系统中发生重要事件时，观察者可以接收到事件通知，并将相关信息记录到日志文件或进行审计处理。
- 需要注意的是，观察者模式适用于那些多个对象之间存在一对多关系的场景，其中观察者和被观察者之间的依赖关系是动态的。在使用观察者模式时，需要合理设计观察者和被观察者的接口，确保它们之间的解耦和灵活性。