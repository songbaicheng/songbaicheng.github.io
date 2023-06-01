# 打包工具-Ant
## 对ant的理解
Apache Ant，在我看来称他为时代弃子也不为过，我现在都还依稀记得当时学习ant时看到的一篇文章里有那么一句话：使用 ant 作为构建工具对程序员来说是一种挑战。

对我来说，认识到ant还是因为刚步入社会的公司里总有些老旧的纯 Java 项目依然苟延残喘，第一次看见项目目录里的 build.xml 的我那时候还没有认识到问题的严重性，直到自己负责这些项目打包上线的时候，我才发现不知不觉，我已经和它打了两年的交道了。说句题外话，其实相对于我这个年龄段的程序员来说，xml文件就已经逐渐被 yml 所取代了，虽然 xml 在公司项目中更容易维护，但是体积过大和比较繁琐的标签和属性确实让人头大，不过对我来说，拥抱 yaml 的原因只有优雅二字而已。言归正传，想学会ant最主要的就是学会读懂构建脚本，先列举一个简单的Java项目打 jar 包的例子：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project name="myproject" default="build">

  <!-- 定义属性 -->
  <property name="src.dir" value="src"/>
  <property name="build.dir" value="build"/>
  <property name="dist.dir" value="dist"/>
  <property name="main-class" value="com.example.MyApp"/>


  <!-- 定义任务 -->
  <target name="clean">
    <delete dir="${build.dir}"/>
    <delete dir="${dist.dir}"/>
  </target>

  <target name="compile" depends="clean">
    <mkdir dir="${build.dir}"/>
    <javac srcdir="${src.dir}" destdir="${build.dir}"/>
  </target>

  <target name="build" depends="compile">
    <mkdir dir="${dist.dir}"/>
    <jar destfile="${dist.dir}/myapp.jar" basedir="${build.dir}">
      <manifest>
        <attribute name="Main-Class" value="${main-class}"/>
      </manifest>
    </jar>
  </target>

</project>
```

其实这个脚本的内容就挺“Java”的：定义属性，执行任务，所以整个脚本最重要的就是其中的一个个```<target></target>```标签中的任务，这里的 target 任务和 Gradle 里的 task 十分相像，里面的步骤也是根据一个个的命令标签从上到下执行的，正如这里的打 jar 包的操作，就是使用了```<jar></jar>```标签来实现的，所以相比于Maven和Gradle来说，ant并不是一无是处，跨平台、简单易用、强大的任务库和可拓展性这些优点放在现在就是一句话，成熟！可是陈旧的设计注定它不能拥有依赖管理、自动化测试、增量构建这些功能，这也注定了它逐渐被 Maven 和 Gradle 所取代，并逐渐被视为过时的技术。

## 工作中遇到的Ant打包需求

low 归 low，活还是得照干，下面是工作上项目打包的一些需求记录。

### 构建war包和jar包中的Manifest文件添加打包Git分支明细
```xml
<target name="set-version">
  <exec executable="git" outputproperty="git.branch">
    <arg value="rev-parse" />
    <arg value="--abbrev-ref" />
    <arg value="HEAD" />
  </exec>

  <manifest file="MANIFEST.MF">
    <attribute name="Git-Branch" value="${git.branch}" />
  </manifest>
</target>
```
