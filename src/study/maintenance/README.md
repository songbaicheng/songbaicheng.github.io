# 生产安全可靠
我目前还没做过蓝绿发布、灰色发布等运维的工作，如果说搞测试、版本和性能服务器也算运维的话，那我应该也算是半个运维吧。

刚接触 Linux 的时候，感觉命令行窗口酷炫得很，慢慢的才觉得可视化是真香啊。目前在工作中的上线模式还是 Jenkins 流水线的方式，而在非生产服务器上，还是自己打包扔上去重启服务来使用，这种方式确实有些 low 并且不太符合规范。

之前在服务器很火的运维工具就是宝塔了，像这种可视化的运维管理界面确实降低了服务器部署服务的难度，不过我个人是没用过，所以自己在服务器上摸爬滚打的时候没少删错东西，虽然大家嘴上天天 rm -rf /* ，可是身体还是很乖的。

在过去几年以 Docker 为首的容器化技术部署方式发展迅猛，当时目前公司也是有 k8s 的项目，虽然我也没用上，但是我记得自己看过容器化投产的性能瓶颈和安全性的问题，相信在容器化火热的今天，大部分的开发者还是因为容器的灵活和便捷性，所以日常个人使用还是十分推荐的，至于真的投产之后的问题还是得以后接触了才能下结论。