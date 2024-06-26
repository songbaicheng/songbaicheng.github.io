---
category: 开发规范
tag: 
  - Java
---

# Java 开发规范
## 好的代码就是注释。
其实开发规范这个事情在协作的时候是个非常让人高血压的事情，还记得当时在第一家公司工作的时候，领导是一个对代码规范十分苛刻的领导，几乎只要有时间他就看我们写的代码，然后把个别个性的代码告诉你让你改，所以当时组里十几个人代码风格出奇的相同，而这样的带来的好处别人写了什么一目了然，而且形似的地方可以直接简单改改就用，感觉自己的“代码洁癖”应该就是在当时产生的。

要说 Java 届的统一开发格式，中国开发者最先想到的应该是阿里的 **_《Java 开发手册》_**，从2017年9月25日手册正式发布，至今为止已更迭了四个版本,分别是2017(终极版)、2018(详尽版)、2019(华山版)、2020(泰山版)，感觉身边的 Java 程序员都是阅读过的，相比书而言阿里的代码规范插件更是收到了所有人的追捧，也是每个人 IDEA 上必装的插件之一，所以只要在规范插件的帮助下，大家的代码应该不会出现风格差别很大的情况。

尽管有了这些，但是一个目标总会有多种实现方式，每个人有每个人的思路，所以这篇文章想强调的并不是大家的代码风格，而是一些项目上一些功能的最佳实践，当然仅仅是基于个人目前技术水平的理解，分享出来和大家一起探讨和交流。

## 代码规范与技巧
### 1. 规范命名
关于命名规范的问题这里我不是建议，而是要求大家真的要遵守《阿里巴巴 Java 开发手册》，因为不规范的命名简直是一个项目的本质性的灾难。在规范的第一章就列举了各个场景命名的规范，可见其重要性。

```card
title: 阿里云开发者社区
desc: 点击跳转官网查看详细内容
logo: /assets/common-icon/aliyun.svg
link: https://developer.aliyun.com/ebook/386
color: rgba(173, 216, 590, 0.15)
```
> 下面的很多技巧其实可以通过在 IED 使用 （Alibaba Java Coding GuideLines）代码规范插件来提示建议。

### 2. 方法别太长
一旦代码太长，给人的第一眼感觉就很复杂，让人不想读下去；同时方法太长的代码可能读起来容易让人摸不着头脑，不知道哪一些代码是同一个业务的功能。
可以尝试将相同业务功能的代码单独抽取一个方法，最后在主方法中调用即可；如果遇到重复的代码，也可以尝试将重复的代码抽取成一个方法然后调用。

### 3. 多用 return
在有时我们平时写代码的情况可能会出现 if 条件套 if 的情况，当 if 条件过多的时候可能会出现如下情况：
```Java
if (条件1) {
    if (条件2) {
        if (条件3) {
            if (条件4) {
                if (条件5) {
                    // 业务逻辑
                }
            }
        }
    }
}
```
面对这种情况，可以换种思路，使用 return 来优化会显得更加直观。
```Java
if (!条件1) {
    return;
}
if (!条件2) {
    return;
}
if (!条件3) {
    return;
}
if (!条件4) {
    return;
}
if (!条件5) {
    return;
}
```

### 4. if 条件表达式不要太复杂
在 if 条件表达式中，不要出现太复杂的逻辑，比如：
```Java
if (((StringUtils.isBlank(person.getName())
        || "songbaicheng".equals(person.getName()))
        && (person.getAge() != null && person.getAge() > 10))
        && "China".equals(person.getNational())) {
    // 处理逻辑
}
```
可以通过将条件表达式拆分成多个 if 条件来优化。
```Java
boolean sanyouOrBlank = StringUtils.isBlank(person.getName()) || "songbaicheng".equals(person.getName());
boolean ageGreaterThanTen = person.getAge() != null && person.getAge() > 10;
boolean isHanNational = "China".equals(person.getNational());

if (sanyouOrBlank
    && ageGreaterThanTen
    && isHanNational) {
    // 处理逻辑
}
```
### 5. 优雅地参数校验
在 Java 中，参数校验是常见的需求，但是通常情况下一般可能会才用以下写法。
```Java
@PostMapping
public void addPerson(@RequestBody AddPersonRequest addPersonRequest) {
    if (StringUtils.isBlank(addPersonRequest.getName())) {
        throw new BizException("人员姓名不能为空");
    }

    if (StringUtils.isBlank(addPersonRequest.getIdCardNo())) {
        throw new BizException("身份证号不能为空");
    }

    // 处理新增逻辑
}
```

这种写固然可以，但是当字段的多的时候，光校验就占据了很长的代码，不够优雅。针对参数校验这个问题，有第三方库已经封装好了，比如 hibernate-validator 框架，只需要拿来用即可。

```Java
@Data
@ToString
private class AddPersonRequest {

    @NotBlank(message = "人员姓名不能为空")
    private String name;
    @NotBlank(message = "身份证号不能为空")
    private String idCardNo;

    //忽略
}
```
此时 Controller 接口就需要方法上就需要加上 @Valid 注解。
```Java
@PostMapping
public void addPerson(@RequestBody @Valid AddPersonRequest addPersonRequest) {
    // 处理新增逻辑
}
```
如果入参校验需要添加自定义校验逻辑，可以使用责任链的方式进行封装，具体实践可以参考设计模式中责任链模式的实践[责任链模式](/study/design-pattern/chain.md)。

### 6. 统一返回体结构

### 7. 统一异常处理

### 8. 尽量不传递 null
尽量不返回 null 值是为了减少调用者对返回值的为 null 判断，如果无法避免返回 null 值，可以通过返回 Optional 来代替 null 值。
```Java
public Optional<Person> getPersonById(Long personId) {
    return Optional.ofNullable(personService.selectById(personId));
}
```
如果不想这么写，也可以通过@NonNull 和@Nullable 表示方法会不会返回 null 值。
```Java
// @Nullable 表示可以为空值
public void updatePerson(@Nullable Person person) {
    if (person == null) {
        return;
    }
    personService.updateById(person);
}

// NonNull 表示不可以为空值
public void updatePerson(@NonNull Person person) {
    personService.updateById(person);
}
```

### 9. 类和方法单一职责
单一职责原则是设计模式的七大设计原则之一，如果一个类或者方法中包含多个功能，那么就会导致代码的复杂度增加，增加代码的复杂度会导致代码的可读性变差，增加代码的可读性会导致代码的可维护性变差。

### 10. 尽量使用聚合/组合代替继承
继承是面向对象编程中一个重要的概念，继承是类与类或者接口与接口之间的一种关系，继承的弊端：
- 灵活性低。Java 语言是单继承的，无法同时继承很多类，并且继承容易导致代码层次太深，不易于维护。
- 耦合性高。一旦父类的代码修改，可能会影响到子类的行为。

聚合/组合的意思就是通过成员变量的方式来使用类。 比如说 OrderService 需要使用 UserService，可以注入一个 UserService 而非通过继承 UserService。聚合和组合的区别就是，组合是当对象一创建的时候，就直接给属性赋值，而聚合的方式可以通过 set 方式来设置。
```Java
// 组合
public class OrderService {

    private UserService userService = new UserService();

}

// 聚合
public class OrderService {

    private UserService userService;

    public void setUserService(UserService userService) {
        this.userService = userService;
    }
}
```

### 11. 使用线程池代替手动创建线程
使用线程池还有以下好处：
- 降低资源消耗。通过重复利用已创建的线程降低线程创建和销毁造成的消耗。
- 提高响应速度。当任务到达时，任务可以不需要的等到线程创建就能立即执行。
- 提高线程的可管理性。线程是稀缺资源，如果无限制的创建，不仅会消耗系统资源，还会降低系统 的稳定性，使用线程池可以进行统一的分配，调优和监控。
  所以为了达到更好的利用资源，提高响应速度，就可以使用线程池的方式来代替手动创建线程。

### 12. 减小锁的范围
减小锁的范围就是给需要加锁的代码加锁，不需要加锁的代码不要加锁。这样就能减少加锁的时间，从而可以较少锁互斥的时间，提高效率。

### 13. 有类型区分时定义好枚举
比如在项目中不同的类型的业务可能需要上传各种各样的附件，此时就可以定义好不同的一个附件的枚举，来区分不同业务的附件。 不要在代码中直接写死，不定义枚举，单纯用注释进行标注是十分不优雅的方式。

### 14. 使用 StringBuilder 进行字符串拼接
StringBuilder 是 String 的可变对象，所以拼接字符串的时候，使用 StringBuilder 比直接使用 String 更高效。

### 15. 不循环调用数据库
不要在循环中访问数据库，这样会严重影响数据库性能。