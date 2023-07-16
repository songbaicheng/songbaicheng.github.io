import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as i,c as p,a as n,b as s,d as e,w as t,e as u}from"./app-77c5875e.js";const r="/assets/images/study/computer-basis/ads/data-structure/linear-list/order-list.jpg",k={},d=n("h1",{id:"线性表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#线性表","aria-hidden":"true"},"#"),s(" 线性表")],-1),m=u('<h2 id="基本定义" tabindex="-1"><a class="header-anchor" href="#基本定义" aria-hidden="true">#</a> 基本定义</h2><p>线性表是具有相同数据结构的n(n ≥ 0)个数据元素的有限序列，其中n为表长，为0即为空表。一般标识为：L=(a<sub>1</sub>,a<sub>2</sub>,a<sub>3</sub>,a<sub>i</sub>,a<sub>i+1</sub>,……,a<sub>n</sub>,)，其中a<sub>1</sub>是唯一的第一个元素，被称为表头元素；a<sub>n</sub>是唯一一个最后一个元素，被称为表尾元素。除了第一个元素外，每个元素有且仅有一个直接前驱，除最后一个外，每个元素有且仅有一个直接后继，这种线性有序的表被称为线性表。线性表有以下特点：</p><ul><li>表中元素个数有限。</li><li>表中元素具有逻辑上的顺序性，表中元素有先后顺序。</li><li>表中元素都是数据结构，每个元素都是单个结构。</li><li>表中的元素类型数据都相同，这意味着每个元素所占相同大小的空间。</li><li>表中的元素具有抽象性。</li></ul><h2 id="基本操作" tabindex="-1"><a class="header-anchor" href="#基本操作" aria-hidden="true">#</a> 基本操作</h2><ul><li>initList：初始化表，构造一个空的线性表。</li><li>length：求表长，返回线性表的长度即其中的元素个数。</li><li>locationElem：按值查找元素。</li><li>getElem：按位查找元素。</li><li>listInsert：插入操作。</li><li>listDelete：删除操作。</li><li>printList：输出操作。</li><li>empty：判空操作。</li><li>destoryList：销毁操作。</li></ul><h2 id="线性表的顺序表示" tabindex="-1"><a class="header-anchor" href="#线性表的顺序表示" aria-hidden="true">#</a> 线性表的顺序表示</h2><h3 id="顺序表的定义" tabindex="-1"><a class="header-anchor" href="#顺序表的定义" aria-hidden="true">#</a> 顺序表的定义</h3><p>线性表的顺序存储又叫顺序表，使用一组地址连续的存储单元依次存储线性表中的的数据元素，从而使逻辑上相邻的两个元素在物理位置上也相邻。</p><figure><img src="'+r+'" alt="顺序表的存储结构" tabindex="0" loading="lazy"><figcaption>顺序表的存储结构</figcaption></figure><h3 id="顺序表的实现" tabindex="-1"><a class="header-anchor" href="#顺序表的实现" aria-hidden="true">#</a> 顺序表的实现</h3>',10),b=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token import"},[n("span",{class:"token namespace"},[s("java"),n("span",{class:"token punctuation"},"."),s("util"),n("span",{class:"token punctuation"},".")]),n("span",{class:"token class-name"},"Arrays")]),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token import"},[n("span",{class:"token namespace"},[s("java"),n("span",{class:"token punctuation"},"."),s("util"),n("span",{class:"token punctuation"},".")]),n("span",{class:"token class-name"},"Iterator")]),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@description"),s(` 底层用数组实现的顺序表
 */`)]),s(`
`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"SequenceList"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"T"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token keyword"},"implements"),s(),n("span",{class:"token class-name"},"Iterable"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"T"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token punctuation"},"{"),s(`

    `),n("span",{class:"token doc-comment comment"},`/**
     * 存储元素的数组
     */`),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token class-name"},"T"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" elements"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token doc-comment comment"},`/**
     * 当前顺序表中元素个数
     */`),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"int"),s(" size"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 初始化顺序表大小
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"capacity"),s(` 最大存储元素个数
     */`)]),s(`
    `),n("span",{class:"token annotation punctuation"},"@SuppressWarnings"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"unchecked"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token class-name"},"SequenceList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" capacity"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        elements `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"T"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Object"),n("span",{class:"token punctuation"},"["),s("capacity"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("size "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},`/**
     * 清空顺序表
     * 底层也是便利数组依次赋值，所以时间复杂度为O(n)。
     */`),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"clear"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        size `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 顺序表是否为空
     * 直接返回size值，所以时间复杂度为O(1)。
     *
     * `),n("span",{class:"token keyword"},"@return"),s(` 是否为空
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"boolean"),s(),n("span",{class:"token function"},"isEmpty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" size "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 获取顺序表长度
     * 直接返回size值，所以时间复杂度为O(1)
     *
     * `),n("span",{class:"token keyword"},"@return"),s(` 顺序表长度
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"length"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" size"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 根据下标获得元素
     * 顺序表的特点就是随机访问，直接返回根据下标返回数组元素，所以时间复杂度为O(1)。
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"i"),s(` 元素下标
     * `),n("span",{class:"token keyword"},"@return"),s(` 下标对应元素
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"T"),s(),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

        `),n("span",{class:"token comment"},"// 安全性校验"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"||"),s(" i "),n("span",{class:"token operator"},">="),s(" size"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token keyword"},"return"),s(" elements"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 向顺序表中插入元素，如果顺序表已满则进行扩容操作
     * 直接根据size位置插入，所以时间复杂度为O(1)。
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"e"),s(` 待插入元素
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"insert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"T"),s(" e"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

        `),n("span",{class:"token comment"},"// 数组扩容"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("size "),n("span",{class:"token operator"},">="),s(" elements"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// 扩容操作，这里乘2处理"),s(`
            `),n("span",{class:"token function"},"reSize"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),s(),n("span",{class:"token operator"},"*"),s(" elements"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        elements`),n("span",{class:"token punctuation"},"["),s("size"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" e"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},`/**
     * 重制顺序表大小
     */`),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"reSize"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" newSize"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        elements `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"Arrays"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"copyOf"),n("span",{class:"token punctuation"},"("),s("elements"),n("span",{class:"token punctuation"},","),s(" newSize"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 往指定下标插入元素
     * 直接根据size位置插入，所以时间复杂度为O(1)。
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"target"),s(` 目标下标
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"e"),s(`      待插入元素
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"update"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" target"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"T"),s(" e"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

        `),n("span",{class:"token comment"},"// 安全性校验"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("target "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"||"),s(" target "),n("span",{class:"token operator"},">="),s(" size"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("size "),n("span",{class:"token operator"},">="),s(" elements"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token comment"},"// 将target下标之后的元素向后移动一位"),s(`
        `),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"arraycopy"),n("span",{class:"token punctuation"},"("),s("elements"),n("span",{class:"token punctuation"},","),s(" target"),n("span",{class:"token punctuation"},","),s(" elements"),n("span",{class:"token punctuation"},","),s(" target "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" size "),n("span",{class:"token operator"},"-"),s(" target"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        elements`),n("span",{class:"token punctuation"},"["),s("target"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" e"),n("span",{class:"token punctuation"},";"),s(`
        size`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 删除指定下标元素
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"target"),s(` 目标下标
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"remove"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" target"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

        `),n("span",{class:"token comment"},"// 安全性校验"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("target "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"||"),s(" target "),n("span",{class:"token operator"},">="),s(" size"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token comment"},"// 将target下标之后的元素向前移动一位"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("size "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"-"),s(" target "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"arraycopy"),n("span",{class:"token punctuation"},"("),s("elements"),n("span",{class:"token punctuation"},","),s(" target "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" elements"),n("span",{class:"token punctuation"},","),s(" target"),n("span",{class:"token punctuation"},","),s(" size "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"-"),s(" target"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        elements`),n("span",{class:"token punctuation"},"["),s("size"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
        size`),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 返回待查找元素首次出现下标
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"e"),s(` 待查找元素
     * `),n("span",{class:"token keyword"},"@return"),s(` 待查找元素首次出现下标
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"T"),s(" e"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

        `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" size"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("elements"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"equals"),n("span",{class:"token punctuation"},"("),s("e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"return"),s(" i"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token annotation punctuation"},"@Override"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"Iterator"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"T"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"iterator"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"SequenceListIterator"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"SequenceListIterator"),s(),n("span",{class:"token keyword"},"implements"),s(),n("span",{class:"token class-name"},"Iterator"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"T"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token punctuation"},"{"),s(`

        `),n("span",{class:"token doc-comment comment"},`/**
         * 迭代器指针
         */`),s(`
        `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"int"),s(" currentIndex "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token annotation punctuation"},"@Override"),s(`
        `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"boolean"),s(),n("span",{class:"token function"},"hasNext"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" currentIndex "),n("span",{class:"token operator"},"<"),s(" size"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token annotation punctuation"},"@Override"),s(`
        `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"T"),s(),n("span",{class:"token function"},"next"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" elements"),n("span",{class:"token punctuation"},"["),s("currentIndex"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token annotation punctuation"},"@Override"),s(`
        `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"remove"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"UnsupportedOperationException"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"remove operation is not supported"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("h2",{id:"线性表的链式表示",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#线性表的链式表示","aria-hidden":"true"},"#"),s(" 线性表的链式表示")],-1);function y(w,h){const c=a("RouterLink"),l=a("CodeDemo");return i(),p("div",null,[d,n("blockquote",null,[n("p",null,[s("所有的测试代码都在博客"),e(c,{to:"/"},{default:t(()=>[s("首页")]),_:1}),s("中的 java-study-demo 中找到。")])]),m,e(l,{id:"code-demo-106",type:"normal",title:"Java%20%E5%AE%9E%E7%8E%B0%E9%A1%BA%E5%BA%8F%E8%A1%A8",code:"eJy9WFtPG0cU/isjnszNQB5bEtGHPESqygNUfcA8LPYAm9prd3dNoEkky4VgFww0gXAnWOUaFYdUNMEm2D+mO2v7qX+hZ3Z217MXG0jVrJCMd2bO5fu+c2bGT9seC1NC21dtYiwRl1VEvwWTqhgNfiPLwozydUjyjDxSsSyocRnGQlJPR0dIQh1oIIKVsCwmVDEuIVJaI+/T1dUTfe28ejVLCnvVpfPq1mw9XyKl5Vr+hC7pCUmJ5FhUDKNwVFAUNIR/SmIpjL8VFbV/+AECv1Ecw5KqIMPjWBTT10+pVwQP80yfDkTONkj6hMz9Ur3YBz/MrTUKjuhnQhanBBWj4ZFRhE3LkILH1PUrks3ZkWqXZ8ysdvkWzDaxKUoqUsSfsQGJx2JmlxwvkMXXtlFycEzOl60J9sSBhCALMRQWEkJYVGeQvpOiM7ncfIMYGEomEjJWlB8EWRKlCSUQaktK4Ukc/hFHQm3tbBYPb4DGa7lpp5AaBuGxgEH3UQCAakcSfoIGxx7jsDpiLRg1UaOPOikqQZo5LOg13z/3A0G/nKuelngBmOAYUtGKb/SNd1q5QjKnjDytvKv/ka/9tUBSn/75tKhnU9rVob7+ob5+QQ5y+m6alI60y9JgQGr/O5V208J0NRUXIyAuLMgBR5K3ideOFOIiK9QVhG+PVrcv9KXDWmWVbO9RazcF2ccH2eBbxmpSlpCfC2cmY/E4pCEhUXkYS6gzznRMKyyrG9KqLX0kyw0h1tcqEOJ/SKtpTk1cONOiMoxiaUKdbJpRS03tF/VcQbtc0PfnaWLldVYlXhKhJ1SzxWq6SM7fA9r1rWV9p1QrVOrrBUiQT9thk71hPcyw/Dkks6IWkVXB1LIHLvaavCuS0qozCSdiw2gCs/IVDcQamPX0IFLIkrkTPXWs7+frbxcbY+I4CoioH/WiZ88gkgf3DWgdkHOwS8lolCtxG3puitUmRkSrGfgSRFZ+4xupvvySzB3aSJKjtL6302iKH//Ur/Iks1mrbNfygPMpKRT1VzntesclUMYRTUG7zlWvC8zu53ODESnP8cG1aCeipGBZDQwjBp8Df6YUFrgTfKM2AXYLtyBTvYcBaoTLG1KqVTbr84taceMeOZitrrxwMzYElgP3IBe36WYM2tTRmDo7R6ERtiyy+nyOZD402bpc26CBkBkT1ShsHvT/ZjsMO2IEw/HEzOB4wBrospe1lFY5pS/Ok8IWqxw/9v4ntaiCDDUIxgvg113OlqCM5/aqSiYigJ+BGTPfBZXuo7CWFW4GZpa5+a11rfMiAWYUOMncQa1eG+5wz1+wMBhMWnGBrCxBL2Z4QHegX4+vyK/QHVLATmPx0Iyi4lhQoAqh+uDUYQHkfoM6UV8X2wW7zVdUQT7KZ4O88unD6qGl5jL79c0DXnZOYu+gFB8NyDgWn+I18GXpvzN12Zw/dbaCulGfzQQNpNcTxY0sM0693Hvs367dUcpduxt93d3d8shknAJoLb851LNlBkD96DUcT8l8CS42Tmb9NxduqWfvv7Vp7+FJlCJ4Gnqnt1mMx2XY8+kU46QLH/3sPIXEzk4PEZQzbk8Pwl1BiCoB3O6ZyR0CRA5GE71WZ4buPjfKA4NTWJbFCHbkZV0vjTug+b/v8ZBeTfhbjbUw4Nk4rP3Je9G01nhum2YAzgq0VWEp40y7+p1snkBLqL/M8GMmVe47Yjgpy+DjEaXNvIE0Jrrg8Dn+TwrKd3hadaLBIeIwb/LdhJTmzoYB2BY+bJnwzuAccXdHfNfzeFMn5fgTg+LvJQXut/ATBI4MJigz8AvDw+kwNn5qgKsus4Di1hhckpAUh/u4tQquwM7gzA/4a3v+L2i3srE="},{default:t(()=>[b]),_:1}),v])}const z=o(k,[["render",y],["__file","linear-list.html.vue"]]);export{z as default};
