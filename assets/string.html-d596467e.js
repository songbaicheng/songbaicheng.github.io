import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as i,e as r}from"./app-22216418.js";const t={},h=r('<h1 id="串" tabindex="-1"><a class="header-anchor" href="#串" aria-hidden="true">#</a> 串</h1><p>字符串简称串，计算机上非数值处理的对象基本都是字符串。通常用的搜索引擎、文本编辑程序、问答系统和自然语言翻译等都是以字符串作为处理对象。串是由零个或多个字符组成的有限序列，一般记为 <code>S = &#39;a1a2a3……an&#39;</code>，其中 S 是串名，单引号内的括起来的字符序列是串的值，其中 ai 可以是字母、数字或者其他字符；串中字符的个数称为串的长度，为 0 时是空串。串中任意多个连续的字符组成的子序列称为该串的子串，包含子串的串称为主串。某个字符在串中的序号称为该字符在串中的位置。子串在主串中的位置以子串在主串的第一个字符位置来表示，当两个串的长度相等且每个对应对应位置的元素都相等时，称这两个串是相等的。由一个或者多个空格组成的串为空格串，其长度为串中空格字符的个数。</p><h2 id="串的存储结构" tabindex="-1"><a class="header-anchor" href="#串的存储结构" aria-hidden="true">#</a> 串的存储结构</h2><h3 id="定长顺序存储" tabindex="-1"><a class="header-anchor" href="#定长顺序存储" aria-hidden="true">#</a> 定长顺序存储</h3><p>类似于线性表的顺序存储结构，文用一组地址连续的存储单元存储串值的字符序列，因为每个元素都是定长的，所以当串的实际长度长过了 MaxSize ，超过预定义长度的串将被舍去，称为截断。</p><h3 id="堆分配存储" tabindex="-1"><a class="header-anchor" href="#堆分配存储" aria-hidden="true">#</a> 堆分配存储</h3><p>堆分配存储仍然以一组地址连续的存储单元进行存放，但是存储空间是在程序执行过程中动态分配的。</p><h3 id="块链存储" tabindex="-1"><a class="header-anchor" href="#块链存储" aria-hidden="true">#</a> 块链存储</h3><p>类似于线性表的链式存储结构，由于串每个元素只有一个字符，在具体的实现，每个链表结点可以存放一个字符，也可以存放多个字符，这样每个结点就可以被称为块，整个链表被称为块链结构。</p><h2 id="串的基本操作" tabindex="-1"><a class="header-anchor" href="#串的基本操作" aria-hidden="true">#</a> 串的基本操作</h2><ul><li>StrAssign：赋值操作。</li><li>StrCopy：赋值操作。</li><li>StrEmpty：判空操作。</li><li>StrCompare：比较操作。</li><li>StrLength：求表长。</li><li>SubString：求子串。</li><li>Concat：串连接。</li><li>Index：定位串出现的位置。</li><li>ClearString：清空串。</li><li>DestroyString：销毁串。</li></ul>',11),n=[h];function d(l,c){return e(),i("div",null,n)}const p=a(t,[["render",d],["__file","string.html.vue"]]);export{p as default};
