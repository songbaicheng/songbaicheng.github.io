import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as u,c as p,a as n,b as s,d as a,w as e,e as l}from"./app-b3f15b1a.js";const r="/assets/images/study/computer-basis/ads/data-structure/queue/queue.jpg",k="/assets/images/study/computer-basis/ads/data-structure/queue/link-queue.jpg",d="/assets/images/study/computer-basis/ads/data-structure/queue/deque.jpg",m="/assets/images/study/computer-basis/ads/data-structure/queue/deque-1.jpg",b="/assets/images/study/computer-basis/ads/data-structure/queue/deque-2.jpg",v={},y=n("h1",{id:"队列",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#队列","aria-hidden":"true"},"#"),s(" 队列")],-1),w=l('<h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h2><p>队列简称队，也是一种操作受限的线性表，只允许在表的一端进行插入，而在表的另一端进行删除。向队列中插入元素称为入队或进队；删除元素称为出队或离队。特性是最早进队的也是最早出队的，即先进先出（FIFO， First In First Out）。</p><figure><img src="'+r+'" alt="队列示意图" tabindex="0" loading="lazy"><figcaption>队列示意图</figcaption></figure><ul><li>队头（Front）：允许删除的一端，又称队首。</li><li>队尾（Rear）：允许插入的一端。</li><li>空队列：不包含任何元素的空表。</li></ul><h2 id="基础操作" tabindex="-1"><a class="header-anchor" href="#基础操作" aria-hidden="true">#</a> 基础操作</h2><ul><li>InitQueue：初始化队列，构造一个空队列。</li><li>QueueEmpty：判队列空。</li><li>EnQueue：入队。</li><li>DeQueue：出队。</li><li>GetHead：读队头元素。</li></ul><h2 id="队列的顺序存储" tabindex="-1"><a class="header-anchor" href="#队列的顺序存储" aria-hidden="true">#</a> 队列的顺序存储</h2>',7),f=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"SqQueue"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"E"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token punctuation"},"{"),s(`

    `),n("span",{class:"token doc-comment comment"},`/**
     * 队列最大容量
     */`),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"final"),s(),n("span",{class:"token keyword"},"int"),s(" maxSize"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token doc-comment comment"},`/**
     * 队列头指针
     */`),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"int"),s(" front"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token doc-comment comment"},`/**
     * 队列尾指针
     */`),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"int"),s(" rear"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token doc-comment comment"},`/**
     * 队列数组
     */`),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"final"),s(),n("span",{class:"token class-name"},"Object"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" arrayQueue"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 初始化队列
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"maxSize"),s(` 队列最大容量
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"SqQueue"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" maxSize"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("maxSize "),n("span",{class:"token operator"},"="),s(" maxSize"),n("span",{class:"token punctuation"},";"),s(`
        front `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
        rear `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
        arrayQueue `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Object"),n("span",{class:"token punctuation"},"["),s("maxSize"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 队列判空
     *
     * `),n("span",{class:"token keyword"},"@return"),s(` 队列是否为空
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"boolean"),s(),n("span",{class:"token function"},"isEmpty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" front "),n("span",{class:"token operator"},"=="),s(" rear"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 队列判满
     *
     * `),n("span",{class:"token keyword"},"@return"),s(` 是否队列已满
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"boolean"),s(),n("span",{class:"token function"},"isFull"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" rear "),n("span",{class:"token operator"},"=="),s(" maxSize"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 入队操作
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"element"),s(` 入队元素
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"offer"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"E"),s(" element"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

        `),n("span",{class:"token comment"},"// 队不满时，先送值到队尾元素，再将队尾指针加一"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),n("span",{class:"token function"},"isFull"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            arrayQueue`),n("span",{class:"token punctuation"},"["),s("rear"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" element"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 出队操作
     *
     * `),n("span",{class:"token keyword"},"@return"),s(` 出队元素
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"Object"),s(),n("span",{class:"token function"},"poll"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"!"),n("span",{class:"token function"},"isEmpty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"?"),s(" arrayQueue"),n("span",{class:"token punctuation"},"["),s("front"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 返回队头元素
     *
     * `),n("span",{class:"token keyword"},"@return"),s(` 队头元素
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"Object"),s(),n("span",{class:"token function"},"peek"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"!"),n("span",{class:"token function"},"isEmpty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"?"),s(" arrayQueue"),n("span",{class:"token punctuation"},"["),s("front"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("p",null,[s("看完以上的代码我们发现我们可以用"),n("code",null,"rear == maxSize"),s("这个条件来作为队满的条件吗？哒咩哟！因为在我们不断入对和出队的时候，会发现不仅仅是尾指针在增加的同时头指针也在增加，这就导致最后数组上溢是一种假溢出，数组中依然可以存放数组，只不过指针全都聚集到了数组尾部，为了解决这种问题就引出了下面循环队列的概念。")],-1),h=n("h3",{id:"循环队列",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#循环队列","aria-hidden":"true"},"#"),s(" 循环队列")],-1),x=n("p",null,"在循环队列中，我们将顺序队列臆想为一个环状空间，即把存储队列元素的表从逻辑上视为一个环，这也就是循环队列的精髓，当队首或队尾指针到 maxSize - 1 的位置时，再前进一个位置就自动到 0。",-1),E=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Queue"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"E"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token punctuation"},"{"),s(`

    `),n("span",{class:"token doc-comment comment"},`/**
     * 队列最大容量
     */`),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"final"),s(),n("span",{class:"token keyword"},"int"),s(" maxSize"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token doc-comment comment"},`/**
     * 队列头指针
     */`),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"int"),s(" front"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token doc-comment comment"},`/**
     * 队列尾指针
     */`),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"int"),s(" rear"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token doc-comment comment"},`/**
     * 队列数组
     */`),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"final"),s(),n("span",{class:"token class-name"},"Object"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" arrayQueue"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 初始化队列
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"maxSize"),s(` 队列最大容量
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"Queue"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" maxSize"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("maxSize "),n("span",{class:"token operator"},"="),s(" maxSize"),n("span",{class:"token punctuation"},";"),s(`
        front `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
        rear `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
        arrayQueue `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Object"),n("span",{class:"token punctuation"},"["),s("maxSize"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 队列判空
     *
     * `),n("span",{class:"token keyword"},"@return"),s(` 队列是否为空
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"boolean"),s(),n("span",{class:"token function"},"isEmpty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" front "),n("span",{class:"token operator"},"=="),s(" rear"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 队列判满
     *
     * `),n("span",{class:"token keyword"},"@return"),s(` 是否队列已满
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"boolean"),s(),n("span",{class:"token function"},"isFull"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s("rear "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"%"),s(" maxSize "),n("span",{class:"token operator"},"=="),s(" front"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 入队操作
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"element"),s(` 入队元素
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"offer"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"E"),s(" element"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

        `),n("span",{class:"token comment"},"// 队不满时，先送值到队尾元素，再将队尾指针加一"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),n("span",{class:"token function"},"isFull"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            arrayQueue`),n("span",{class:"token punctuation"},"["),s("rear"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" element"),n("span",{class:"token punctuation"},";"),s(`
            rear `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("rear "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"%"),s(" maxSize"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 出队操作
     *
     * `),n("span",{class:"token keyword"},"@return"),s(` 出队元素
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"Object"),s(),n("span",{class:"token function"},"poll"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"isEmpty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token class-name"},"Object"),s(" temp "),n("span",{class:"token operator"},"="),s(" arrayQueue"),n("span",{class:"token punctuation"},"["),s("front"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
        front `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("front "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"%"),s(" maxSize"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token keyword"},"return"),s(" temp"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 返回队头元素
     *
     * `),n("span",{class:"token keyword"},"@return"),s(` 队头元素
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"Object"),s(),n("span",{class:"token function"},"peek"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"isEmpty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"?"),s(" arrayQueue"),n("span",{class:"token punctuation"},"["),s("front"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 获取目前队列长度
     *
     * `),n("span",{class:"token keyword"},"@return"),s(` 队列长度
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"length"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s("rear "),n("span",{class:"token operator"},"+"),s(" maxSize "),n("span",{class:"token operator"},"-"),s(" front"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"%"),s(" maxSize"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),z=n("p",null,"对于循环队列判空和满的方式有三种，上面只展示了最常用的一种，即通过队头指针在队尾指针的下一个位置来牺牲一个队列单元作为队满的标志。其他两种是通过增加标识位来区别队空和队满，一个是增设表示元素个数的单位成员和 maxSize 进行对来判断，另一个是设置 tag 标志位来判断。",-1),Q=n("h2",{id:"队列的链式存储",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#队列的链式存储","aria-hidden":"true"},"#"),s(" 队列的链式存储")],-1),S=n("p",null,"队列的链式表称为链队列，是一个同时带有队头指针和队尾指针的单链表。",-1),q=n("figure",null,[n("img",{src:k,alt:"不带头结点的链式队列",tabindex:"0",loading:"lazy"}),n("figcaption",null,"不带头结点的链式队列")],-1),A=n("p",null,"不难看出在不带头结点链队列操作比较麻烦，所以为了统一操作一般都会使用带头结点的链表存储。相对于容易出现存储不合分配不合理或者溢出情况的顺序存储队列，我们最好使用链式队列。",-1),_=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"LinkQueue"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"E"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token punctuation"},"{"),s(`

    `),n("span",{class:"token doc-comment comment"},`/**
     * 队列头指针
     */`),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token class-name"},"LNode"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"E"),n("span",{class:"token punctuation"},">")]),s(" front"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token doc-comment comment"},`/**
     * 队列尾指针
     */`),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token class-name"},"LNode"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"E"),n("span",{class:"token punctuation"},">")]),s(" rear"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token doc-comment comment"},`/**
     * 初始化队列
     */`),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"LinkQueue"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

        `),n("span",{class:"token class-name"},"LNode"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"E"),n("span",{class:"token punctuation"},">")]),s(" head "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"LNode"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"E"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token comment"},"// 队头指针一直是头结点，队头元素一直是head.next()"),s(`
        front `),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
        rear `),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 队列判空
     *
     * `),n("span",{class:"token keyword"},"@return"),s(` 队列是否为空
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"boolean"),s(),n("span",{class:"token function"},"isEmpty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" front "),n("span",{class:"token operator"},"=="),s(" rear"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 入队操作
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"element"),s(` 入队元素
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"offer"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"E"),s(" element"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

        `),n("span",{class:"token comment"},"// 定义新结点"),s(`
        `),n("span",{class:"token class-name"},"LNode"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"E"),n("span",{class:"token punctuation"},">")]),s(" node "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"LNode"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),s("element"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token comment"},"// 采用尾插法"),s(`
        rear`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" node"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token comment"},"// 尾指针指向新结点"),s(`
        rear `),n("span",{class:"token operator"},"="),s(" node"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 出队操作
     *
     * `),n("span",{class:"token keyword"},"@return"),s(` 出队元素
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"Object"),s(),n("span",{class:"token function"},"poll"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

        `),n("span",{class:"token class-name"},"E"),s(" temp "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"isEmpty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"?"),s(" front"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},"."),s("data "),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`

        front`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" front"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token comment"},"// 如果出队后队列为空则将尾指针指向头指针防止尾指针丢失"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("front"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            rear `),n("span",{class:"token operator"},"="),s(" front"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token keyword"},"return"),s(" temp"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 返回队头元素
     *
     * `),n("span",{class:"token keyword"},"@return"),s(` 队头元素
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"Object"),s(),n("span",{class:"token function"},"peek"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"!"),n("span",{class:"token function"},"isEmpty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"?"),s(" front"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},"."),s("data "),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=l('<h2 id="双端队列" tabindex="-1"><a class="header-anchor" href="#双端队列" aria-hidden="true">#</a> 双端队列</h2><p>双端队列是指允许两端都可以进行入队和出队操作的队列，逻辑结构仍为线性结构。</p><figure><img src="'+d+'" alt="双端队列" tabindex="0" loading="lazy"><figcaption>双端队列</figcaption></figure><p>在双端队列进队时，前端进的元素排列在队列后端进的元素前面，后端进的元素在队列前端进的后面，前后端出队的时候还是遵循先进先出的规律。</p><p>在双端队列的基础上，衍生出了输出受限和输入受限的两种特殊的队列。输出受限的队列只允许在一端进行插入和删除，在另一端只允许插入；输入受限的队列只允许在一端进行插入删除，另一端只允许删除。</p><figure><img src="'+m+'" alt="输出受限的双端队列" tabindex="0" loading="lazy"><figcaption>输出受限的双端队列</figcaption></figure><figure><img src="'+b+'" alt="输入受限的双端队列" tabindex="0" loading="lazy"><figcaption>输入受限的双端队列</figcaption></figure><blockquote><p>我并没有遇到实际的场景来使用双端队列这种结构，Java也有Deque来实现双端队列，但是并没有说做到输入输出限制和出入的前后顺序的限制，这个知识点最重要的是要理解下面这个经典问题即可。</p></blockquote><h3 id="双端队列经典问题" tabindex="-1"><a class="header-anchor" href="#双端队列经典问题" aria-hidden="true">#</a> 双端队列经典问题</h3><p>设有一个双端队列，输入顺序为1，2，3，4，求出下列三种条件的输出队列</p><ol><li>能由输入受限的双端队列得到，但不能由输出受限的双端队列得到的输出序列。</li></ol><ul><li>4，1，3，2</li></ul><ol start="2"><li>能由输出受限的双端队列得到，但不能由输入受限的双端队列得到的输出序列。</li></ol><ul><li>4，2，1，3</li></ul><ol start="3"><li>既不能由输入受限的双端队列得到，也不能由输出受限的双端队列得到的输出序列。</li></ol><ul><li>4，2，3，1</li></ul><p>当然这些结果是这么出来的呢，当然可能在只接触过定义之后我们并不知道双端队列甚至是队列的进出顺序，这里我们直接结合这个问题来给大家简单理理头绪。</p><p>首先我们严格意义上的队列应该严格遵循先进先出的规则，所以在保证入队顺序的情况下就只会有一种出队顺序。这里不得不提一下栈的进出顺序，我们常问的一组入栈顺序为什么会有多种出栈顺序，因为虽然是保证这先进后出的规则，但是我们可以不断的进出来打乱顺序，而队列先进只能先出，并不会被后面入队元素所影响。</p><p>其次到了双端队列，这种先进先出的规则被打破，既然可以两边同时进队，还要保证线性结构，那该如何保证先进入的在两侧都再次入队的情况下可以先出来呢，所以回到这个经典问题之所以能有这种答案，都是在保证了所有元素都入队的情况下再出队的，基于这个条件，我们才可以根据输入输出限制来找到不可能得到的序列。</p><p>我们拿第一个问题的 4，1，3，2 来解释，如果是输入受限，我们能在一端入队，因为入队顺序是确定的，所以四个元素在队内的相对位置就是顺序的 1，2，3，4，而因为两端都可以出队，所以可以用右左右左的顺序得到 4，1，3，2 的顺序，相反如果是输出受限，就应该反向推测输出前队内的顺序只能是4，1，3，2，而我们不能够在 1 和 2 入队之后让 3 在 1 和 2 之间，所以这输出序列是唯一正确的。</p>',20);function j(L,D){const o=c("RouterLink"),t=c("CodeDemo");return u(),p("div",null,[y,n("blockquote",null,[n("p",null,[s("所有的测试代码都在博客"),a(o,{to:"/"},{default:e(()=>[s("首页")]),_:1}),s("中的 java-study-demo 中找到。")])]),w,a(t,{id:"code-demo-67",type:"normal",title:"Java%20%E5%AE%9E%E7%8E%B0%E9%A1%BA%E5%BA%8F%E5%AD%98%E5%82%A8%E9%98%9F%E5%88%97",code:"eJydk09v0zAYxr+K6al0EuU8GHApV4R23HpwiyM8Uie4SWFMk4qgawStQPzbJAYMqTBxgQhVULoxvkyd0hNfATuO16SNs2lWD5Hft0+e5/e+2citwQbMLeZst2LiKqiasF4Hy3dvushFl0tXwMYqWSWAn2KhIB9AAUx2PjBvO9htst4++/pr0n6mSkX5YFPcgA4CBibQBJg4oAbvL+MH6JJOjPX6Qac9eeFplISGQS3i6BX8oxMVKIJUKxC89scHjzOT3KisoaqzUgaQUrgeQuJy84LMe8f2n7LOG6ms7o/r12xIYU1BOQVPOZ1oLvkY0PNiQmEvP85tXL+gRJdmmIsTEuSVi7E7wWTmapqOFwi6p3JHguWodVO/G8zrjb8M53NT5LiUqMA739jzz6PBMNaaDFyxLBNBAnC9VLOd9XwibaQVZVqKDzfbWXDwUetMeopaf36PteqcXXdNM9WYBDs7hlRrrPWJvzJ42R393tUtCzJRDfGkspe1Ho37e+neGha+BSzDQDRfUn8LDU4tFosCx2jQ5QGD7R//Djus5U2aD1nzkHm+0PeP5CtEaavL/C15KT8x9mRvNGhO5bAB8ucUigSL5DqtCCYLC2W+VpGv2NZxMnpA7WEGoAi4bMoiI/cY2JYa2dzQeAq1alfjxsMtE84XAeEps4b5988r9va9cNLrJ82kfgezTemOEbpzFsfzfvkvt/kf59cqhQ=="},{default:e(()=>[f]),_:1}),g,h,x,a(t,{id:"code-demo-79",type:"normal",title:"Java%20%E5%AE%9E%E7%8E%B0%E5%BE%AA%E7%8E%AF%E9%98%9F%E5%88%97",code:"eJyNVMtu00AU/ZUhEpIbBIFtocAmbBFi2WYxCRPq4tiWYwdKVSkI0hhIKAL6kFqgSKEVm2KhiIa0tD+TcfCKX2DG44nH8aOMsnBmrs+cc+65XsktwQbMzeZ0q6zIFVBRYL0O7lnIQjeKN8HKgrqgArIK+Tx7AHngbX/G9pa728S9A3z4y2uv86MCe9ANuQFNBKqyChUgqyaowSf35afoehoY7vXdTtt7Z6cgUYyqoalmOoJzei6CgaCRCuBuOOPjF5lK7paXUMWcLwFoGHDZN4nAxQGx/REfvMadTYbM9yfnt3VowBo35T/8ZL3xL5QEO2dof/xKssxFuX6FQ85NOU6X7x85uSrsUUemtkJt5EBFj7nqALAUlK6mJwPbvfG3YVy1gUzLULnc7e/47f5oMBRKo3LLmqYgqAK5Xqzp5rIUURtgBZrmxNZmM3OPv6QyY5yC0qMfQmkaszuWoiQSk3xnL4FrM+DipNGEpxjiRKK49ZUQcN93R79304KDFFRDRDerxa3n4/5eMtOGJj8AWrWKDKnIX/PphoQLBWrOaNAlct2tn39POrhle81nuHmCbYfiO6fsCnq01sXOGttk44Zf7Y0GzRBOrgLpAjcm4kw0XPPUoBKJWMBKSKAQzCQbhUriYLqR7WGGkUGbWFGWgyz9QNd4o6NSJ+GMSQ1uUIkRUcbhnwDbRDWdaBW88VPCJ40uPrsSe4gZEssfxcyK2Z+zD3jnE9Xe60flJ87rdFGyRwg9mvYowAhn+FZcJ5gVXUqm++YIr2+Odw7xyy6bT2/jDA/3z/nIRIuipOl3VEHqQ3MxhTPPHp/ey6wL8SQSxuSXW/0HT1OWig=="},{default:e(()=>[E]),_:1}),z,Q,S,q,A,a(t,{id:"code-demo-97",type:"normal",title:"Java%20%E5%AE%9E%E7%8E%B0%E9%93%BE%E9%98%9F%E5%88%97",code:"eJyNVE9v0zAc/Sqmp7SH9T7Y4NLbBOK+i9u6IlvqRGlSQNMkNDQaRIGyjVHYGGgqAw5AgR668mdfJk7W077C7NhxnKyLFkVJZP/8/H7vPWetsALbsDBfsNyqoddAzYCtFljS8epdF7noRmURrC3jZQzoVS6V+AcogWn/A/HekMEo6HamW148XuYflq23oYPA0m2zHmE0bBM71y+FGf6/GoyNoE1RLuIQ7z35/Ix0dzlgFof3JrvSiklT7JL49xCsgwWA0X05pmHXMIqCerRtOWIdd+6PH4V7o6D/g46Ef7bDjeOzv11eQDYfh6OPsoCBz2H0wNGKCVokDN2STSqbsEbTo+s5LniD8OskHpSTt2zkuDYWRYxh78gfT5TStDxV0zQQxEBvVZqW85CLlBCKsATdhdiJS5mRzU9032D7uf9v/yIzC9qwCZCBmojC8Vqu1mxqbVOvA7PRQLZWiZdlPKS2kO/v/OOnwe6Q+zDDX0zfKX8XtRgt43CnE+58Ybl8uRX8fp02JjKRwVCE9DIZZPokvVczqAhjxdI8ATuTHAGFHbwoT7k71RVUc4BlGkY29RXgoKZFySSG3+QGRw3O1aEDwTxg+ZdUZWRjDZR69kgVMkGONoKDfUGz94JHkYeQeG/J8ElGMXmspv1fwbdDOeuPD8ngZwKtN4Cm8qCKsmOqJlZRW/37pARXks20yAv06ckO2TtQD3bugcsWzXYFodWsKwLj2pVMEWzpXVg/B3heK0U="},{default:e(()=>[_]),_:1}),O])}const R=i(v,[["render",j],["__file","queue.html.vue"]]);export{R as default};
