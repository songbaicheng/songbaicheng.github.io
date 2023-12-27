import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as h,o as r,c as d,a as t,b as a,d as n,e as l}from"./app-936191f9.js";const c={},s=a("h1",{id:"图",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#图","aria-hidden":"true"},"#"),n(" 图")],-1),o=l('<h2 id="图的基本概念" tabindex="-1"><a class="header-anchor" href="#图的基本概念" aria-hidden="true">#</a> 图的基本概念</h2><p>图G由顶点集V和边集E组成，记为<code>G=(V,E)</code>，其中V(G)表示图G中顶点的有限非空集；E(G)表示图G中顶点关系的集合。注意线性表可以是空表，树可以是空树，但是图不可以是空图。</p><p>下面是图的一些基本概念和基本术语：</p><h4 id="有向图和无向图" tabindex="-1"><a class="header-anchor" href="#有向图和无向图" aria-hidden="true">#</a> 有向图和无向图</h4><p>当E是有向边（弧）的有限集合时，则图G为无向图。若E是无向边的有限集合则图G为无向图。</p><h4 id="简单图、多重图" tabindex="-1"><a class="header-anchor" href="#简单图、多重图" aria-hidden="true">#</a> 简单图、多重图</h4><p>一个图G如果满足不存在重复边、不存在顶点到自身的边，那么称图G为简单图。若图G中某两个顶点之间的边数大于1条，又允许顶点通过一条边和自身关联，则称图G为多重图。</p><h4 id="完全图" tabindex="-1"><a class="header-anchor" href="#完全图" aria-hidden="true">#</a> 完全图</h4><p>任何两个顶点之间都存在边的无向图是完全图。有向完全图是任意两个顶点之间都存在方向相反的两条弧的有向图。</p><h4 id="子图" tabindex="-1"><a class="header-anchor" href="#子图" aria-hidden="true">#</a> 子图</h4><p>如果一个图中的顶点集和边集是另一个图的子集，那么称前者为后者的子图。</p><h4 id="连通、连通图和连通分量" tabindex="-1"><a class="header-anchor" href="#连通、连通图和连通分量" aria-hidden="true">#</a> 连通、连通图和连通分量</h4><p>在无向图中，若从顶点v到顶点w有路径存在，则称v和w是连通的。若图G中任意两个顶点都是连通的，则称图G为连通图，否则称为非连通图。无向图中极大连通子图称为连通分量。</p><h4 id="强连通图和强连通分量" tabindex="-1"><a class="header-anchor" href="#强连通图和强连通分量" aria-hidden="true">#</a> 强连通图和强连通分量</h4><p>在有向图中，如果有一对顶点v和w，从v到w和从w到v之间都有路径，则称为这两个顶点时强连通的。若图中任何一对顶点都是强连通的，则称为此图为强连通图。有向图中的极大强连通子图称为有向图的强连通分量。</p><h4 id="生成树和生成森林" tabindex="-1"><a class="header-anchor" href="#生成树和生成森林" aria-hidden="true">#</a> 生成树和生成森林</h4><p>连通图的生成树是包含图中全部顶点的一个极小连通子图。若痛中的顶点树为n，则它生成树包含n-1条边。在非连通图中，连通分量的生成树构成了非连通图的生成森林。</p><h4 id="顶点的度、入度和出度" tabindex="-1"><a class="header-anchor" href="#顶点的度、入度和出度" aria-hidden="true">#</a> 顶点的度、入度和出度</h4><p>在无向图中，顶点v的度是指依附于顶点v的边的条数，无向图的全部顶点的度的和等于边数的2倍，因为每条边和两个顶点相关联。</p><p>在有向图中，顶点v的度分为入度和出度，入度是以顶点v为终点的有向边的数量，而出度是以顶点v为起点的有向边的数目。</p><h4 id="边的权和网" tabindex="-1"><a class="header-anchor" href="#边的权和网" aria-hidden="true">#</a> 边的权和网</h4><p>在一个图中，每条边都可以标上具有某种含义的数值，该数值称为该边的权值。这种边上带有权值的图称为带权图，也称为网。</p><h4 id="稠密图和稀疏图" tabindex="-1"><a class="header-anchor" href="#稠密图和稀疏图" aria-hidden="true">#</a> 稠密图和稀疏图</h4><p>边数很少的图称为稀疏图，反之称为稠密图。</p><h4 id="路径、路径长度和回路" tabindex="-1"><a class="header-anchor" href="#路径、路径长度和回路" aria-hidden="true">#</a> 路径、路径长度和回路</h4><p>两个顶点之间的路径是指两个顶点间的顶点序列，路径上边的数目称为路径长度。第一个顶点和最后一个顶点相同的路径称为回路或环。若一个图有n个顶点，并且有大于n-1<br> 条边，则此图一定有环。</p><h4 id="简单路径和简单回路" tabindex="-1"><a class="header-anchor" href="#简单路径和简单回路" aria-hidden="true">#</a> 简单路径和简单回路</h4><p>在路径序列中，顶点不重复出现的路径称为简单路径。除第一个顶点和最后一个顶点外，其余顶点不重复出现的回路称为简单回路。</p><h4 id="距离" tabindex="-1"><a class="header-anchor" href="#距离" aria-hidden="true">#</a> 距离</h4><p>从顶点u出发到顶点v的最短路径若存在，则此路径的长度为从u到v的距离。若从u到v根本不存在路径，则记该距离为无穷。</p><h4 id="有向树" tabindex="-1"><a class="header-anchor" href="#有向树" aria-hidden="true">#</a> 有向树</h4><p>一个顶点的入度为0，其余顶点的入度均为1的有向图称为有向树。</p><h2 id="图的存储及基本操作" tabindex="-1"><a class="header-anchor" href="#图的存储及基本操作" aria-hidden="true">#</a> 图的存储及基本操作</h2><p>图的存储需要完整、准确的反映顶点集和边集的信息。</p><h3 id="邻接矩阵法" tabindex="-1"><a class="header-anchor" href="#邻接矩阵法" aria-hidden="true">#</a> 邻接矩阵法</h3><p>所谓邻接矩阵，是指用一个一维数组存储图中顶点的信息，用一个二维数组存储图中边的信息，存储顶点之间邻接关系的二维数组称为邻接矩阵。</p><p>图的邻接矩阵存储表示法具有以下特点：</p><ol><li>无向图邻接矩阵一定是唯一的对称矩阵。因此，在实际存储邻接矩阵时只需存储上或下三角矩阵即可。</li><li>对于无向图，邻接矩阵的第i行或第i列非零元素的个数正好是顶点i的度。</li><li>对于有向图，邻接矩阵的第i行非零元素或非∞元素的个数正好是顶点i的出度，第i列非零元素或非∞元素的个数正好是顶点i的入度。</li><li>用邻接矩阵存储图，很容易确定两个顶点是否相连。但是，要确定图中有多少条边，则必须按行、按列对每个元素进行检测。</li><li>稠密图适合使用邻接矩阵存储。</li><li>设图G的邻接矩阵为A，A<sup>n</sup>[i][j]等于由顶点i到顶点j的长度为n的路径的数目。</li></ol><h3 id="邻接表法" tabindex="-1"><a class="header-anchor" href="#邻接表法" aria-hidden="true">#</a> 邻接表法</h3><p>当一个图是稀疏图的时候，使用邻接矩阵法显然要量费大量的存储空间，而使用邻接表是指对图G中的每一个顶点vi建立一个单链表，第i个单链表中的结点表示依附于顶点vi的边，如果是有向图则就是以顶点i为尾的弧，这个单链表就称为顶点i的边表。边表的头指针和顶点的数据信息采用顺序存储。</p><p>图的邻接表存储方法具有以下特点：</p><ol><li>稀疏图适合使用邻接表法。</li><li>邻接表中对于一个顶点很容易找到他所有的邻边，但是确定两个点之间是否有边，则需要在相应结点对应的边表中查找另一个结点。</li><li>在有向图的邻接表表示中，求一个给定顶点的出度只需要计算其边表中结点的个数，如果是出度则需遍历整个表。</li><li>图的邻接表不唯一。</li></ol><h3 id="十字链表" tabindex="-1"><a class="header-anchor" href="#十字链表" aria-hidden="true">#</a> 十字链表</h3><p>十字链表是有向图的一种链式存储结构，在十字链表中，对应于有向图中的每条弧有一个结点，对应于每个顶点也有一个结点。</p><h3 id="邻接多重表" tabindex="-1"><a class="header-anchor" href="#邻接多重表" aria-hidden="true">#</a> 邻接多重表</h3><p>邻接多重表是无向图的另一种链式存储结构，在邻接表中，容易求的顶点和边的各种信息，但是在邻接表中求两点之间是否存在边对边执行删除等操作时，需要分别在两个顶点的边表中遍历，效率低，在邻接多重表中，所有依附于同一顶点的边串联在同一个链表中，由于每条边依附于两个顶点，因此每个边结点同时链接在两个链表中。对无向图而言，其邻接多重表和邻接表的区别在于，同一条边在邻接表中用两个结点表示，二在邻接多重表只有一个。</p><h3 id="图的基本操作" tabindex="-1"><a class="header-anchor" href="#图的基本操作" aria-hidden="true">#</a> 图的基本操作</h3><ul><li>Adjacent(G, x, y)：判断图G是否存在边&lt;x,y&gt;或（x,y）。</li><li>Neighbors(G, x): 列出图G中与结点x邻接的边。</li><li>InsertVertex(G, x): 在图G中插入顶点x。</li><li>DeleteVertex(G, x): 在图G中删除顶点x。</li><li>AddEdge(G, x, y): 若无向边（x,y）或有向边&lt;x,y&gt;不存在，则有向图G中添加该边。</li><li>RemoveEdge(G, x, y): 若无向边（x,y）或有向边&lt;x,y&gt;存在，则自从图G中删除该边。</li><li>FirstNeighbor(G, x): 求图G中顶点x的第一个邻接点。</li><li>NextNeightbor(G, x, y): 假设图G中顶点y是顶点x的一个邻接点，返回除了y外顶点x的下一个邻接点的顶点号。</li><li>Get_edge_velue(G, x, y): 获取图G中边（x，y）或&lt;x,y&gt;的权值。</li><li>Set_edge_value(G, x, y, v): 设置图G中边（x，y）或&lt;x,y&gt;的权值。</li></ul><h2 id="图的遍历" tabindex="-1"><a class="header-anchor" href="#图的遍历" aria-hidden="true">#</a> 图的遍历</h2><p>图的遍历是指从图中的某一个顶点出发，按照某种搜索方法沿着图中的边对图中的所有顶点访问一次且仅访问一次。</p><h3 id="广度优先搜索" tabindex="-1"><a class="header-anchor" href="#广度优先搜索" aria-hidden="true">#</a> 广度优先搜索</h3><p>广度优先搜索类似于二叉树的层序遍历算法。基本思想是：首先访问起始顶点v，然后从v出发，依次访问</p><h3 id="深度优先搜索" tabindex="-1"><a class="header-anchor" href="#深度优先搜索" aria-hidden="true">#</a> 深度优先搜索</h3><h3 id="图的遍历与连通性" tabindex="-1"><a class="header-anchor" href="#图的遍历与连通性" aria-hidden="true">#</a> 图的遍历与连通性</h3><p>图的遍历算法可以用来判断图的连通性，对于无向图来说，若无向图是连通的，则从任意一个结点出发，仅需一次遍历就能够访问图中的所有顶点；若无向图是非连通的，则从某一个顶点出发，一次遍历只能访问到该顶点在连通分量的所有顶点，而对于途中其他连通分量的顶点，则无法通过这次遍历访问。对于有向图来说，若从初始点到图中的每个顶点都有路径，则能够访问到图中的所有顶点，否则不能访问到所有顶点。</p>',55);function p(x,u){const e=h("Mermaid");return r(),d("div",null,[s,t(e,{id:"mermaid-3",code:"eJxtj81OwlAQhfc+xSz1MUjUjQtcuW/CpkKtKbhwJ6QoxLSIraEpxmqiBhetGmKQouVlmLnct+Dyk7ZpuavJ952cmavIZyVFOt8B0FS1tov9aE/MyydG5uoYuLNxO4UmFj3pS+E72BhsBABvTMh8Y94Hd35o+JDh85dBHuKry28MoWKORh39HreiBK6v4HUDzes4R6NvDN9nfw42WxmF4+l2tS5i/V9sDjG0mZ2spccr/Oow26PWHT13Yw5wrMkKsKCXPh7gSLuolqVKVoga5vnz0SdGeiq9L5+WqzVNyvccVtTLUq7l1qJ2l8x7DDupbKF4Auw/uU38gttBblmheLCKLQCcdM0o"}),o])}const b=i(c,[["render",p],["__file","picture.html.vue"]]);export{b as default};
