import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c as u,d as e,w as t,e as c,a as n,b as s}from"./app-b0b5172d.js";const p="/assets/images/study/computer-basis/ads/data-structure/queue/queue.jpg",r="/assets/images/study/computer-basis/ads/data-structure/queue/link-queue.jpg",k={},m=c('<h1 id="队列" tabindex="-1"><a class="header-anchor" href="#队列" aria-hidden="true">#</a> 队列</h1><h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h2><p>队列简称队，也是一种操作受限的线性表，只允许在表的一端进行插入，而在表的另一端进行删除。向队列中插入元素称为入队或进队；删除元素称为出队或离队。特性是最早进队的也是最早出队的，即先进先出（FIFO， First In First Out）。</p><figure><img src="'+p+'" alt="队列示意图" tabindex="0" loading="lazy"><figcaption>队列示意图</figcaption></figure><ul><li>队头（Front）：允许删除的一端，又称队首。</li><li>队尾（Rear）：允许插入的一端。</li><li>空队列：不包含任何元素的空表。</li></ul><h2 id="基础操作" tabindex="-1"><a class="header-anchor" href="#基础操作" aria-hidden="true">#</a> 基础操作</h2><ul><li>InitQueue：初始化队列，构造一个空队列。</li><li>QueueEmpty：判队列空。</li><li>EnQueue：入队。</li><li>DeQueue：出队。</li><li>GetHead：读队头元素。</li></ul><h2 id="队列的顺序存储" tabindex="-1"><a class="header-anchor" href="#队列的顺序存储" aria-hidden="true">#</a> 队列的顺序存储</h2>',8),d=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"SqQueue"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"E"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token punctuation"},"{"),s(`

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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("p",null,[s("看完以上的代码我们发现我们可以用"),n("code",null,"rear == maxSize"),s("这个条件来作为队满的条件吗？哒咩哟！因为在我们不断入对和出队的时候，会发现不仅仅是尾指针在增加的同时头指针也在增加，这就导致最后数组上溢是一种假溢出，数组中依然可以存放数组，只不过指针全都聚集到了数组尾部，为了解决这种问题就引出了下面循环队列的概念。")],-1),v=n("h3",{id:"循环队列",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#循环队列","aria-hidden":"true"},"#"),s(" 循环队列")],-1),y=n("p",null,"在循环队列中，我们将顺序队列臆想为一个环状空间，即把存储队列元素的表从逻辑上视为一个环，这也就是循环队列的精髓，当队首或队尾指针到 maxSize - 1 的位置时，再前进一个位置就自动到 0。",-1),w=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Queue"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"E"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token punctuation"},"{"),s(`

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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=c('<p>对于循环队列判空和满的方式有三种，上面只展示了最常用的一种，即通过队头指针在队尾指针的下一个位置来牺牲一个队列单元作为队满的标志。其他两种是通过增加标识位来区别队空和队满，一个是增设表示元素个数的单位成员和 maxSize 进行对来判断，另一个是设置 tag 标志位来判断。</p><h2 id="队列的链式存储" tabindex="-1"><a class="header-anchor" href="#队列的链式存储" aria-hidden="true">#</a> 队列的链式存储</h2><p>队列的链式表称为链队列，是一个同时带有队头指针和队尾指针的单链表。</p><figure><img src="'+r+'" alt="不带头结点的链式队列" tabindex="0" loading="lazy"><figcaption>不带头结点的链式队列</figcaption></figure><p>不难看出在不带头结点链队列操作比较麻烦，所以为了统一操作一般都会使用带头结点的链表存储。相对于容易出现存储不合分配不合理或者溢出情况的顺序存储队列，我们最好使用链式队列。</p><h2 id="双端队列" tabindex="-1"><a class="header-anchor" href="#双端队列" aria-hidden="true">#</a> 双端队列</h2>',6);function h(x,g){const a=o("CodeDemo");return i(),u("div",null,[m,e(a,{id:"code-demo-62",type:"normal",title:"Java%20%E5%AE%9E%E7%8E%B0%E9%A1%BA%E5%BA%8F%E5%AD%98%E5%82%A8%E9%98%9F%E5%88%97",code:"eJydk09v0zAYxr+K6al0EuU8GHApV4R23HpwiyM8Uie4SWFMk4qgawStQPzbJAYMqTBxgQhVULoxvkyd0hNfATuO16SNs2lWD5Hft0+e5/e+2citwQbMLeZst2LiKqiasF4Hy3dvushFl0tXwMYqWSWAn2KhIB9AAUx2PjBvO9htst4++/pr0n6mSkX5YFPcgA4CBibQBJg4oAbvL+MH6JJOjPX6Qac9eeFplISGQS3i6BX8oxMVKIJUKxC89scHjzOT3KisoaqzUgaQUrgeQuJy84LMe8f2n7LOG6ms7o/r12xIYU1BOQVPOZ1oLvkY0PNiQmEvP85tXL+gRJdmmIsTEuSVi7E7wWTmapqOFwi6p3JHguWodVO/G8zrjb8M53NT5LiUqMA739jzz6PBMNaaDFyxLBNBAnC9VLOd9XwibaQVZVqKDzfbWXDwUetMeopaf36PteqcXXdNM9WYBDs7hlRrrPWJvzJ42R393tUtCzJRDfGkspe1Ho37e+neGha+BSzDQDRfUn8LDU4tFosCx2jQ5QGD7R//Djus5U2aD1nzkHm+0PeP5CtEaavL/C15KT8x9mRvNGhO5bAB8ucUigSL5DqtCCYLC2W+VpGv2NZxMnpA7WEGoAi4bMoiI/cY2JYa2dzQeAq1alfjxsMtE84XAeEps4b5988r9va9cNLrJ82kfgezTemOEbpzFsfzfvkvt/kf59cqhQ=="},{default:t(()=>[d]),_:1}),b,v,y,e(a,{id:"code-demo-74",type:"normal",title:"Java%20%E5%AE%9E%E7%8E%B0%E5%BE%AA%E7%8E%AF%E9%98%9F%E5%88%97",code:"eJyNVMtu00AU/ZUhEpIbBIFtocAmbBFi2WYxCRPq4tiWYwdKVSkI0hhIKAL6kFqgSKEVm2KhiIa0tD+TcfCKX2DG44nH8aOMsnBmrs+cc+65XsktwQbMzeZ0q6zIFVBRYL0O7lnIQjeKN8HKgrqgArIK+Tx7AHngbX/G9pa728S9A3z4y2uv86MCe9ANuQFNBKqyChUgqyaowSf35afoehoY7vXdTtt7Z6cgUYyqoalmOoJzei6CgaCRCuBuOOPjF5lK7paXUMWcLwFoGHDZN4nAxQGx/REfvMadTYbM9yfnt3VowBo35T/8ZL3xL5QEO2dof/xKssxFuX6FQ85NOU6X7x85uSrsUUemtkJt5EBFj7nqALAUlK6mJwPbvfG3YVy1gUzLULnc7e/47f5oMBRKo3LLmqYgqAK5Xqzp5rIUURtgBZrmxNZmM3OPv6QyY5yC0qMfQmkaszuWoiQSk3xnL4FrM+DipNGEpxjiRKK49ZUQcN93R79304KDFFRDRDerxa3n4/5eMtOGJj8AWrWKDKnIX/PphoQLBWrOaNAlct2tn39POrhle81nuHmCbYfiO6fsCnq01sXOGttk44Zf7Y0GzRBOrgLpAjcm4kw0XPPUoBKJWMBKSKAQzCQbhUriYLqR7WGGkUGbWFGWgyz9QNd4o6NSJ+GMSQ1uUIkRUcbhnwDbRDWdaBW88VPCJ40uPrsSe4gZEssfxcyK2Z+zD3jnE9Xe60flJ87rdFGyRwg9mvYowAhn+FZcJ5gVXUqm++YIr2+Odw7xyy6bT2/jDA/3z/nIRIuipOl3VEHqQ3MxhTPPHp/ey6wL8SQSxuSXW/0HT1OWig=="},{default:t(()=>[w]),_:1}),f])}const Q=l(k,[["render",h],["__file","queue.html.vue"]]);export{Q as default};
