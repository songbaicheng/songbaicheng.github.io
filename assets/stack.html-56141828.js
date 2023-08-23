import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as p,c as u,a as n,b as s,d as a,w as t,e as r}from"./app-899d061f.js";const k="/assets/images/study/computer-basis/ads/data-structure/stack/stack.jpg",d={},m=n("h1",{id:"栈",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#栈","aria-hidden":"true"},"#"),s(" 栈")],-1),v=r('<h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h2><p>栈（Stack）是只允许在一端进行插入或删除操作的线性表。</p><figure><img src="'+k+'" alt="栈的示意图" tabindex="0" loading="lazy"><figcaption>栈的示意图</figcaption></figure><ul><li>栈顶：线性表允许进行插入和删除的那一端。</li><li>栈底：固定的，不允许进行插入和删除的那一端。</li><li>空栈：不含任何元素空表。</li></ul><p>如上图所示，a1为栈底元素，a5为栈顶元素。根据规则，进栈次序依次为a1,a2,a3,a4,a5，而出栈依次为a5,a4,a3,a2,a1，由此可见栈的操作特性可以明显囊括为先进后出（Last In First Out，LIFO）。</p><blockquote><p>栈的数学性质：n个不同元素进栈，出栈元素不同排列的个数为 1/(n+1)乘2n中选n个数的排列，也被称为卡特兰（Catalan）数。</p></blockquote><h2 id="基本操作" tabindex="-1"><a class="header-anchor" href="#基本操作" aria-hidden="true">#</a> 基本操作</h2><ul><li>InitStack：初始化一个空栈。</li><li>StackEmpty：判断一个栈是否为空。</li><li>Push：进栈。</li><li>Pop：出栈。</li><li>GetTop：读取栈顶元素。</li><li>DestroyStack：销毁栈。</li></ul><h2 id="栈的顺序存储" tabindex="-1"><a class="header-anchor" href="#栈的顺序存储" aria-hidden="true">#</a> 栈的顺序存储</h2><p>采用顺序存储的栈成为顺序栈，利用一组地址连续的存储单元存放自栈底到栈顶的数据元素，同时附设一个指针指示当前栈顶元素的位置。</p>',10),b=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"ArrayStack"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"E"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token keyword"},"extends"),s(),n("span",{class:"token class-name"},"Stack"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"E"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token punctuation"},"{"),s(`

    `),n("span",{class:"token doc-comment comment"},`/**
     * 栈顶指针
     */`),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"int"),s(" top"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token doc-comment comment"},`/**
     * 栈内数组
     */`),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"final"),s(),n("span",{class:"token class-name"},"E"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" data"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 初始化栈
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"capacity"),s(`
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"ArrayStack"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" capacity"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("data "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"E"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Object"),n("span",{class:"token punctuation"},"["),s("capacity"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("top "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token annotation punctuation"},"@Override"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"E"),s(),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"E"),s(" item"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

        `),n("span",{class:"token comment"},"// 判断栈内是否还有空间"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("top "),n("span",{class:"token operator"},"=="),s(" data"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        data`),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"++"),s("top"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" item"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"super"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 出栈
     * `),n("span",{class:"token keyword"},"@return"),s(` 栈顶元素
     */`)]),s(`
    `),n("span",{class:"token annotation punctuation"},"@Override"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"synchronized"),s(),n("span",{class:"token class-name"},"E"),s(),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" data"),n("span",{class:"token punctuation"},"["),s("top"),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 获取栈顶元素
     * `),n("span",{class:"token keyword"},"@return"),s(` 栈顶元素
     */`)]),s(`
    `),n("span",{class:"token annotation punctuation"},"@Override"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"synchronized"),s(),n("span",{class:"token class-name"},"E"),s(),n("span",{class:"token function"},"peek"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" data"),n("span",{class:"token punctuation"},"["),s("top"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 栈判空
     * `),n("span",{class:"token keyword"},"@return"),s(` 是否为空栈
     */`)]),s(`
    `),n("span",{class:"token annotation punctuation"},"@Override"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"boolean"),s(),n("span",{class:"token function"},"empty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("top "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("h3",{id:"共享栈",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#共享栈","aria-hidden":"true"},"#"),s(" 共享栈")],-1),h=n("p",null,"利用栈底位置不变的特性，可以让两个顺序栈共享一个一维数组空间，将两个栈的栈底分别设在共享空间的两端，两个栈顶向共享空间的中间延伸，共享栈是为了更有效的利用存储空间，两个栈互相调节，存取数据的时间复杂度都为O(1)。",-1),w=n("p",null,"两个栈的栈顶指针一个为-1一个为MaxSize时各自为空，而两个指针相邻，即top0 - top1 = 1的时候为栈满。",-1),f=n("h2",{id:"栈的链式存储",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#栈的链式存储","aria-hidden":"true"},"#"),s(" 栈的链式存储")],-1),E=n("p",null,"采用链式存储的栈称为链栈，优点是便于多个栈共享存储空间提高效率，并且不存在栈满的情况。通常采用单链表实现并规定所有的操作都在表头进行。",-1),g=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"LinkedStack"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"E"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token keyword"},"extends"),s(),n("span",{class:"token class-name"},"Stack"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"E"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token punctuation"},"{"),s(`

    `),n("span",{class:"token doc-comment comment"},`/**
     * 存储链表
     */`),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token class-name"},"LNode"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"E"),n("span",{class:"token punctuation"},">")]),s(" head "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token doc-comment comment"},`/**
     * 初始化头结点
     */`),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"LinkedStack"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        head `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"LNode"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 入栈
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"item"),s(` 入栈元素
     * `),n("span",{class:"token keyword"},"@return"),s(` 入栈元素
     */`)]),s(`
    `),n("span",{class:"token annotation punctuation"},"@Override"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"E"),s(),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"E"),s(" item"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"LNode"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"E"),n("span",{class:"token punctuation"},">")]),s(" node "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"LNode"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("head"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            node`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        head`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" node"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" item"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 出栈
     * `),n("span",{class:"token keyword"},"@return"),s(` 出栈元素
     */`)]),s(`
    `),n("span",{class:"token annotation punctuation"},"@Override"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"synchronized"),s(),n("span",{class:"token class-name"},"E"),s(),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

        `),n("span",{class:"token class-name"},"E"),s(" temp "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},"."),s("data"),n("span",{class:"token punctuation"},";"),s(`
        head`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token keyword"},"return"),s(" temp"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 查找栈顶元素
     * `),n("span",{class:"token keyword"},"@return"),s(` 栈顶元素
     */`)]),s(`
    `),n("span",{class:"token annotation punctuation"},"@Override"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"synchronized"),s(),n("span",{class:"token class-name"},"E"),s(),n("span",{class:"token function"},"peek"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" head"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},"."),s("data"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 判断是否栈空
     * `),n("span",{class:"token keyword"},"@return"),s(` 是否栈空
     */`)]),s(`
    `),n("span",{class:"token annotation punctuation"},"@Override"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"boolean"),s(),n("span",{class:"token function"},"empty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" head"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function x(A,O){const o=e("RouterLink"),l=e("Mermaid"),c=e("CodeDemo");return p(),u("div",null,[m,n("blockquote",null,[n("p",null,[s("所有的测试代码都在博客"),a(o,{to:"/"},{default:t(()=>[s("首页")]),_:1}),s("中的 java-study-demo 中找到。")])]),a(l,{id:"mermaid-8",code:"eJzLzcxLyU0s4FJQKMrPL9F4tqBDE8gGgZcLdz3d1Q8UgPEn70NwnrZufLJrNYgPAD5KGvY="}),v,a(c,{id:"code-demo-84",type:"normal",title:"Java%20%E5%AE%9E%E7%8E%B0%E9%A1%BA%E5%BA%8F%E6%A0%88",code:"eJytks9OwkAQxl9lwqligHj1X/TA2YNH5LCUVVbKttkuKBJOimAkakxEDppgQjQejB6IGjz4MrbAW7hbWmgBObnpYTOd+fb3zUwptI8KKLQcMvIpjaigasg0YZMxVNzmSM2uxtcBH3JM0yaMAqUdukNBnFg4PLxAGOxWbfDwbterg+uaF4wNLwYjBcQxEMqB68bKzGLrtGLfvPW+Tv4o3iUUaRBPJCGNOBIa0ypW7d56OrfqDSE3Cm4YiKEcqMhAKuHFSfWh7bFhRUJ6yQvSqpMvDs8QMyrfhjVQBMcCUHwAW6l9rPKEV5F0zY0KhF+RH1ly42WPe2OrgBkjaRzgiIuLmVHiQDjOOa+P5WIxYbBtN17cZjVfravH/nfTvjvrPXcHt51xKtkFZfz6mtOxqIbpHs9ABJYCtuRhmOcZBZrXNB+/YPWuUiCxuCjkksKNhPPludVm3sAs6vA79JOOA5OqdgMzciWGO2RVjnud1sSgZvfLLFI1w3RKjnBaNk83lIA5V9fBF/CRiDefmVT9iw/rUi7PFMT/EWKcnYs4F1BOvtYW057mcrbh57Mrfvo6OxctpesaRhRwzuDFmVD+HfKvsPhC5V+pmHGZ"},{default:t(()=>[b]),_:1}),y,h,w,f,E,a(c,{id:"code-demo-102",type:"normal",title:"Java%20%E5%AE%9E%E7%8E%B0%E5%B8%A6%E5%A4%B4%E7%BB%93%E7%82%B9%E7%9A%84%E9%93%BE%E6%A0%88",code:"eJyVk89OwkAQxl9l5FQ4wF2FcOmN6MErl6VdQ6Vsm7agSLhgiBg9mJAQLkZIQPFAvBATMeFt2spbuNt/tFCbsGnS6c505vd93bZTV6iJUscptVGRJQEEGek6lCRSw+KFgYTaKV8AfGNgIuoQbLTLpEyArlwm4waQAXMxMrvzzWD9O5n7mzk3UDWpiQwMpTNFxKxBFSMR8kAasnwS26v/Yr4/mk9Dc7q0fwZ293u3o4sbAuXSDMspossfgK+9oQWODUvTaSzdiR3am1njfvBYVJGG6iAZuO6lzN6dvRxvCzRsNDQSm/Qwi+dNrGmSiCPUPA30Ksc7vSPYgUGE3nf4neLALbakS+CY0CyhXwiOXD8j/dhirdyKvGOLE3s+RLzwffOL2YuhOk8tw0h08X4VcdE3ydk+wCS9RYSqphDpFovMMUV1v/AWiAeKooZVZUVkoBByWM22yNO/p4x1S1Jmvc6shzVVsZl8/XMU4pIHqcR45yB7jWMlxvvfn1rDhTX6NJ/fKI79sdqnjEkmUlYURcaIADXIaCXzQT74rT1EeqU6f3KOfag="},{default:t(()=>[g]),_:1})])}const L=i(d,[["render",x],["__file","stack.html.vue"]]);export{L as default};
