import{_ as h}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as p,c as u,a as e,d as i,n as r,g as l,w as s,b as a,e as _}from"./app-14c0115f.js";const m="/assets/images/study/maintenance/1panel/safe-entrance.png",g="/assets/images/study/maintenance/1panel/index.png",b={},f=e("h1",{id:"_1panel",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1panel","aria-hidden":"true"},"#"),a(" 1Panel")],-1),v=e("h2",{id:"聊聊运维面板",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#聊聊运维面板","aria-hidden":"true"},"#"),a(" 聊聊运维面板")],-1),k=e("p",null,"在很多内网的服务器中，需要手工输入命令安装各类软件，操作起来费时费力并且容易出错，非常考验运维人员的基本功，而面向一些云服务器来说，我只是需要安装一些数据库或者运行环境，这个时候如果使用运维面板就可以一件安装，简直不要太方便。之前听过的运维面板只有宝塔，不过最近一款开源并且号称新一代的 Linux 服务器运维管理面板 1Panel 横空出世，正好手头也有服务器就看看面板工具是不是真的那么好用。如果想了解更详细的面板介绍可以点击下面链接跳转官网查看。",-1),x={class:"vp-card-container"},C=e("h2",{id:"快速开始",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#快速开始","aria-hidden":"true"},"#"),a(" 快速开始")],-1),P=e("h3",{id:"环境准备和下载",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#环境准备和下载","aria-hidden":"true"},"#"),a(" 环境准备和下载")],-1),q=e("p",null,"这里我准备了一台阿里云的服务器，下载前注意一下服务器用户是否有足够权限，默认是安装在 /opt 目录下的，而且像很多这种下载脚本执行的安装方式在下载安装的时候会产生文件，所以个人还是推荐创建一个新文件夹再进行下载。执行下面命令即可下载最新安装脚本并自动进行安装。",-1),w=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"curl"),a(),e("span",{class:"token parameter variable"},"-sSL"),a(" https://resource.fit2cloud.com/1panel/package/quick_start.sh "),e("span",{class:"token parameter variable"},"-o"),a(" quick_start.sh "),e("span",{class:"token operator"},"&&"),a(),e("span",{class:"token function"},"sh"),a(` quick_start.sh
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),y=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"curl"),a(),e("span",{class:"token parameter variable"},"-sSL"),a(" https://resource.fit2cloud.com/1panel/package/quick_start.sh "),e("span",{class:"token parameter variable"},"-o"),a(" quick_start.sh "),e("span",{class:"token operator"},"&&"),a(),e("span",{class:"token function"},"sudo"),a(),e("span",{class:"token function"},"bash"),a(` quick_start.sh
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),V=_('<h3 id="启动展示" tabindex="-1"><a class="header-anchor" href="#启动展示" aria-hidden="true">#</a> 启动展示</h3><p>安装的话会有一些初始化操作的步骤，一步一步完成即可，安装成功后，界面会出现访问服务的网址，如果你手速够快或者一些特殊情况看不到了，可以执行 <code>1pctl user-info</code> 进行查看，然后使用 ip + port 的方式就可以直接跳转登录界面了。</p><figure><img src="'+m+'" alt="暂无权限访问" tabindex="0" loading="lazy"><figcaption>暂无权限访问</figcaption></figure><p>如果出现上面界面，是因为新版本增加了一个安全入口登录的限制，这个就需要用 <code>1pctl user-info</code> 这个命令查看 entrance 这个属性跟在端口后才能进行访问。</p><figure><img src="'+g+'" alt="登录成功" tabindex="0" loading="lazy"><figcaption>登录成功</figcaption></figure><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h3>',6);function S(A,N){const c=o("VPCard"),d=o("CodeTabs");return p(),u("div",null,[f,v,k,e("div",x,[i(c,r(l({title:"1Panel 官网",desc:"点击跳转官网查看详细内容",logo:"/assets/images/study/maintenance/1panel/1Panel.png",link:"https://1panel.cn/",color:"rgba(173, 216, 590, 0.15)"})),null,16),i(c,r(l({title:"宝塔官网",desc:"点击跳转官网查看详细内容",logo:"/assets/images/study/maintenance/1panel/bt.svg",link:"https://www.bt.cn/new/index.html",color:"rgba(173, 216, 590, 0.15)"})),null,16)]),C,P,q,i(d,{id:"22",data:[{id:"RedHat / CentOS"},{id:"Ubuntu"}]},{title0:s(({value:n,isActive:t})=>[a("RedHat / CentOS")]),title1:s(({value:n,isActive:t})=>[a("Ubuntu")]),tab0:s(({value:n,isActive:t})=>[w]),tab1:s(({value:n,isActive:t})=>[y]),_:1}),V])}const L=h(b,[["render",S],["__file","1panel.html.vue"]]);export{L as default};