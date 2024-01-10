import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as i,e as n}from"./app-d59e1d74.js";const r={},l=n('<h1 id="走进算法" tabindex="-1"><a class="header-anchor" href="#走进算法" aria-hidden="true">#</a> 走进算法</h1><h2 id="算法无处不在" tabindex="-1"><a class="header-anchor" href="#算法无处不在" aria-hidden="true">#</a> 算法无处不在</h2><p>其实算法并不是必须牵扯数学的复杂东西，更多的是一种逻辑思想。其实在生活中我们已经不知不觉学会了很多算法，比如：</p><ol><li>查阅字典<br> 比如说我想查字典，我可以先打开字典，然后翻到A开头，再找到A-Z，最后找到需要的单词。但是我们通常不会采用这种方法，而是随即从比较中间的位置打开，如果我们需要找到 R 开头的单词，当前看到的却是 M，我们知道 R 在 M 之后，所以我们就会默认排除字典当前的前半部分继续重复上面的操作来找到我们的目标 R，这就是后面要学到的二分查找。</li><li>整理扑克<br> 在抓牌的过程中，我们抽取的下一张牌的大小是未知的，而且我们手里的牌序是在我们自己的规则下是有序的，每当我们抽取一张未知的新牌后就会按照自己的规则放到指定的位置去，慢慢的就会让一堆无序的牌堆变成有序的手牌，这也就是后面我们要学的插入排序。</li><li>货币找零<br> 在需要找零31块的时候，我们采取的方案一般是先找到能找零的最大面值的再依次减少，直到找完为止，也就是 20 -&gt; 10 -&gt; 1，这就是后面我们要学的贪心算法。</li></ol><h2 id="什么是算法" tabindex="-1"><a class="header-anchor" href="#什么是算法" aria-hidden="true">#</a> 什么是算法</h2><p>算法是对特定问题求解步骤的一种描述，它是指令的有限序列，其中的每条指令有一个或多个操作。</p><p>算法五大特性：</p><ol><li>有穷性：一个算法必须在执行有穷步骤后结束，并且每一步都在有穷时间内完成。</li><li>确定性：算法中每条指令都应该有确切的含义，对于相同的输入只能得出相同的结果。</li><li>可行性：算法中描述的操作都可以通过已经实现的基本运算执行有限次来实现。</li><li>输入：一个算法可以有零个或多个输入。</li><li>输出：一个算法必须有一个或多个输出。</li></ol><p>基于这五种特性，一个好的算法应该达到正确性、可读性、健壮性和高效率与地存储量的需求。</p><h2 id="算法的效率" tabindex="-1"><a class="header-anchor" href="#算法的效率" aria-hidden="true">#</a> 算法的效率</h2><p>算法和数据结构高度相关、紧密结合。数据结构是算法的基石，算法是数据结构发挥作用的舞台，算法通常可以基于不同的数据结构进行实现。</p><h3 id="时间复杂度" tabindex="-1"><a class="header-anchor" href="#时间复杂度" aria-hidden="true">#</a> 时间复杂度</h3><p>首先我们需要知道大O表示法，算法中所有语句的频度之和记为 T(N)，算法中的最深层循环内的语句的频度与 T(n) 同数量级，所以算法的频度 f(n) 记为 T(n)=O(F(n))。</p><p>常见的渐进时间负责度排序：O(1) &lt; O(log n) &lt; O(n) &lt; O(n log n) &lt; O(n^2) &lt; O(2^n) &lt; O(n!)</p><h3 id="空间复杂度" tabindex="-1"><a class="header-anchor" href="#空间复杂度" aria-hidden="true">#</a> 空间复杂度</h3><p>算法的空间复杂度是 S(n) ，为该算法所耗费的存储空间，记为 S(n) =O(g(n))。一个算法所需要的空间包括存放本身所用的指令、常数、变量和输入数据，还有对一些数据进行操作的工作单元和存储一些为实现计算所需的辅助空间。</p><p>最后，算法的效率是时间复杂度和空间复杂度的综合，一个算法的时间复杂度和空间复杂度中较大的一个决定了算法的时间效率。通常我们在用算法解决实际问题的过程中，往往是在两者之间进行权衡，通过时间换取空间或者用空间换取时间。</p>',17),h=[l];function t(d,o){return a(),i("div",null,h)}const p=e(r,[["render",t],["__file","index.html.vue"]]);export{p as default};
