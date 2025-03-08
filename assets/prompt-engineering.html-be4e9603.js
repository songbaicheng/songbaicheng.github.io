import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as i,c,e,w as t,a as p,b as n,d as s}from"./app-3c9963c4.js";const u={},r=p('<h1 id="prompt-engineering" tabindex="-1"><a class="header-anchor" href="#prompt-engineering" aria-hidden="true">#</a> Prompt Engineering</h1><p>随着 ChatGPT 等 LLM（大语言模型）的出现，自然语言处理的范式正在由 Pretrain-Finetune（预训练-微调）向提示工程演变。</p><p>对于具有较强自然语言理解、生成能力，能够实现多样化任务处理的 LLM 来说，一个合理的 Prompt 设计极大地决定了其能力的上限与下限。</p><p>Prompt Engineering，即是针对特定任务构造能充分发挥大模型能力的 Prompt 的技巧。 要充分、高效地使用 LLM，提示工程是必不可少的技能。</p><p>学习提示工程，你要明白为什么有的指令有效有的指令无效、怎么提升指令有效的概率、那些问题用提升工程更有效、那些用传统编程更快、能完成与业务系统的对接。</p><h2 id="prompt-提示原则" tabindex="-1"><a class="header-anchor" href="#prompt-提示原则" aria-hidden="true">#</a> Prompt 提示原则</h2><p>好的 Prompt 不是一蹴而就的，要尝试，高质量 Prompt 的核心要点是：<strong>具体、丰富、少歧异</strong>，下面给出几个提示原则：</p><h3 id="_1-编写清晰、具体的指令" tabindex="-1"><a class="header-anchor" href="#_1-编写清晰、具体的指令" aria-hidden="true">#</a> 1. 编写清晰、具体的指令</h3><p>用清晰、详尽的语言表达 Prompt，就像在给外星人讲解人类世界一样，你也可以使用角色定义，有论文表示，在提示词开始和结束的位置对模型影响是最大的，中间的内容反而影响最小。<br> 其次可以加入例子，使用分隔符清晰地表示输入的不同部分，并加入结构化的输出。</p><h3 id="_2-给模型时间去思考" tabindex="-1"><a class="header-anchor" href="#_2-给模型时间去思考" aria-hidden="true">#</a> 2. 给模型时间去思考</h3><p>在设计 Prompt 时，给予语言模型充足的推理时间非常重要。语言模型与人类一样，需要时间来思考并解决复杂问题。<br> 我们可以指定完成任务所需的步骤，也可以指导模型在下结论之前找出一个自己的解法。</p><h3 id="_3-局限性" tabindex="-1"><a class="header-anchor" href="#_3-局限性" aria-hidden="true">#</a> 3. 局限性</h3><p>开发大模型相关应用时请务必铭记：<strong>模型偶尔会生成一些看似真实实则编造的知识</strong>,</p><p>尽管模型经过大规模预训练，掌握了丰富知识，但它实际上并没有完全记住所见的信息，难以准确判断自己的知识边界，可能做出错误推断。</p><p>若让语言模型描述一个不存在的产品,它可能会自行构造出似是而非的细节。这被称为“幻觉”(Hallucination)，是语言模型的一大缺陷。</p><p>开发者可以通过Prompt设计减少幻觉发生的可能。例如，可以先让语言模型直接引用文本中的原句，然后再进行解答。这可以追踪信息来源，降低虚假内容的风险。</p><h3 id="_4-英文原版-prompt" tabindex="-1"><a class="header-anchor" href="#_4-英文原版-prompt" aria-hidden="true">#</a> 4. 英文原版 Prompt</h3><p>在一些时候，英文原版 Prompt 往往比中文效果好，这是因为英文在歧义性上影响较小。值得注意的是，无论是那种语言的Prompt能够理解，除非该门语言十分小众。</p><h2 id="防止-prompt-漏洞" tabindex="-1"><a class="header-anchor" href="#防止-prompt-漏洞" aria-hidden="true">#</a> 防止 Prompt 漏洞</h2><p>像著名的“奶奶漏洞”问题，通过变换用户角色等描述废弃掉之前的 Prompt 描述。解决大模型漏洞的方式和生活中的方式很像，解决方案有以下几种</p><h3 id="注入分类器" tabindex="-1"><a class="header-anchor" href="#注入分类器" aria-hidden="true">#</a> 注入分类器</h3><p>在 Prompt 中加入分类器，让模型判断输入是否符合预期。在 Prompt 判断自己的结果是否符合之前要求进行拦截。</p><h3 id="输入防御" tabindex="-1"><a class="header-anchor" href="#输入防御" aria-hidden="true">#</a> 输入防御</h3><p>在输入内容的前面都加上原则，比如说“作为……你不能回答与之无关的问题”。</p><h2 id="具体案例" tabindex="-1"><a class="header-anchor" href="#具体案例" aria-hidden="true">#</a> 具体案例</h2><h3 id="文本概括" tabindex="-1"><a class="header-anchor" href="#文本概括" aria-hidden="true">#</a> 文本概括</h3>',26),k=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(` os
`),n("span",{class:"token keyword"},"from"),s(" dotenv "),n("span",{class:"token keyword"},"import"),s(" load_dotenv"),n("span",{class:"token punctuation"},","),s(` find_dotenv
`),n("span",{class:"token keyword"},"from"),s(" openai "),n("span",{class:"token keyword"},"import"),s(` OpenAI

`),n("span",{class:"token comment"},"# Load environment variables from .env file"),s(`
_ `),n("span",{class:"token operator"},"="),s(" load_dotenv"),n("span",{class:"token punctuation"},"("),s("find_dotenv"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"# Initialize the OpenAI client with the API key from the environment"),s(`
client `),n("span",{class:"token operator"},"="),s(" OpenAI"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token comment"},'# 若没有配置环境变量，请用百炼API Key将下行替换为：api_key="sk-xxx",'),s(`
    api_key`),n("span",{class:"token operator"},"="),s("os"),n("span",{class:"token punctuation"},"."),s("getenv"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"DASHSCOPE_API_KEY"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    base_url`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"https://dashscope.aliyuncs.com/compatible-mode/v1"'),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"# 产品评论"),s(`
review_1 `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token triple-quoted-string string"},`"""
这个熊猫公仔是我给女儿的生日礼物，她很喜欢，去哪都带着。
公仔很软，超级可爱，面部表情也很和善。但是相比于价钱来说，
它有点小，我感觉在别的地方用同样的价钱能买到更大的。
快递比预期提前了一天到货，所以在送给女儿之前，我自己玩了会。
"""`),s(`

`),n("span",{class:"token comment"},"# 一盏落地灯的评论"),s(`
review_2 `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token triple-quoted-string string"},`"""
我需要一盏漂亮的卧室灯，这款灯不仅具备额外的储物功能，价格也并不算太高。
收货速度非常快，仅用了两天的时间就送到了。
不过，在运输过程中，灯的拉线出了问题，幸好，公司很乐意寄送了一根全新的灯线。
新的灯线也很快就送到手了，只用了几天的时间。
装配非常容易。然而，之后我发现有一个零件丢失了，于是我联系了客服，他们迅速地给我寄来了缺失的零件！
对我来说，这是一家非常关心客户和产品的优秀公司。
"""`),s(`

`),n("span",{class:"token comment"},"# 一把电动牙刷的评论"),s(`
review_3 `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token triple-quoted-string string"},`"""
我的牙科卫生员推荐了电动牙刷，所以我就买了这款。
到目前为止，电池续航表现相当不错。
初次充电后，我在第一周一直将充电器插着，为的是对电池进行条件养护。
过去的3周里，我每天早晚都使用它刷牙，但电池依然维持着原来的充电状态。
不过，牙刷头太小了。我见过比这个牙刷头还大的婴儿牙刷。
我希望牙刷头更大一些，带有不同长度的刷毛，
这样可以更好地清洁牙齿间的空隙，但这款牙刷做不到。
总的来说，如果你能以50美元左右的价格购买到这款牙刷，那是一个不错的交易。
制造商的替换刷头相当昂贵，但你可以购买价格更为合理的通用刷头。
这款牙刷让我感觉就像每天都去了一次牙医，我的牙齿感觉非常干净！
"""`),s(`

`),n("span",{class:"token comment"},"# 一台搅拌机的评论"),s(`
review_4 `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token triple-quoted-string string"},`"""
在11月份期间，这个17件套装还在季节性促销中，售价约为49美元，打了五折左右。
可是由于某种原因（我们可以称之为价格上涨），到了12月的第二周，所有的价格都上涨了，
同样的套装价格涨到了70-89美元不等。而11件套装的价格也从之前的29美元上涨了约10美元。
看起来还算不错，但是如果你仔细看底座，刀片锁定的部分看起来没有前几年版本的那么漂亮。
然而，我打算非常小心地使用它
（例如，我会先在搅拌机中研磨豆类、冰块、大米等坚硬的食物，然后再将它们研磨成所需的粒度，
接着切换到打蛋器刀片以获得更细的面粉，如果我需要制作更细腻/少果肉的食物）。
在制作冰沙时，我会将要使用的水果和蔬菜切成细小块并冷冻
（如果使用菠菜，我会先轻微煮熟菠菜，然后冷冻，直到使用时准备食用。
如果要制作冰糕，我会使用一个小到中号的食物加工器），这样你就可以避免添加过多的冰块。
大约一年后，电机开始发出奇怪的声音。我打电话给客户服务，但保修期已经过期了，
所以我只好购买了另一台。值得注意的是，这类产品的整体质量在过去几年里有所下降
，所以他们在一定程度上依靠品牌认知和消费者忠诚来维持销售。在大约两天内，我收到了新的搅拌机。
"""`),s(`

reviews `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s("review_1"),n("span",{class:"token punctuation"},","),s(" review_2"),n("span",{class:"token punctuation"},","),s(" review_3"),n("span",{class:"token punctuation"},","),s(" review_4"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token keyword"},"for"),s(" i "),n("span",{class:"token keyword"},"in"),s(),n("span",{class:"token builtin"},"range"),n("span",{class:"token punctuation"},"("),n("span",{class:"token builtin"},"len"),n("span",{class:"token punctuation"},"("),s("reviews"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`
    prompt `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-interpolation"},[n("span",{class:"token string"},`f"""
    你的任务是从电子商务网站上的产品评论中提取相关信息。

    请对三个反引号之间的评论文本进行概括，最多20个词汇。

    评论文本: \`\`\``),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),s("reviews"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},'```\n    """')]),s(`
    completion `),n("span",{class:"token operator"},"="),s(" client"),n("span",{class:"token punctuation"},"."),s("chat"),n("span",{class:"token punctuation"},"."),s("completions"),n("span",{class:"token punctuation"},"."),s("create"),n("span",{class:"token punctuation"},"("),s(`
        model`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"qwen-plus"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"# 此处以qwen-plus为例，可按需更换模型名称。模型列表：https://help.aliyun.com/zh/model-studio/getting-started/models"),s(`
        messages`),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},"'role'"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'system'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'content'"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'You are a helpful assistant.'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},"'role'"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'content'"),n("span",{class:"token punctuation"},":"),s(" prompt"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string-interpolation"},[n("span",{class:"token string"},'f"评论'),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),s("i "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},': "')]),n("span",{class:"token punctuation"},","),s(" completion"),n("span",{class:"token punctuation"},"."),s("choices"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("message"),n("span",{class:"token punctuation"},"."),s("content"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"\\n"'),n("span",{class:"token punctuation"},")"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),d=n("h3",{id:"推断",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#推断","aria-hidden":"true"},"#"),s(" 推断")],-1),m=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(` os
`),n("span",{class:"token keyword"},"from"),s(" dotenv "),n("span",{class:"token keyword"},"import"),s(" load_dotenv"),n("span",{class:"token punctuation"},","),s(` find_dotenv
`),n("span",{class:"token keyword"},"from"),s(" openai "),n("span",{class:"token keyword"},"import"),s(` OpenAI

_ `),n("span",{class:"token operator"},"="),s(" load_dotenv"),n("span",{class:"token punctuation"},"("),s("find_dotenv"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`

client `),n("span",{class:"token operator"},"="),s(" OpenAI"),n("span",{class:"token punctuation"},"("),s(`
    api_key`),n("span",{class:"token operator"},"="),s("os"),n("span",{class:"token punctuation"},"."),s("getenv"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"DASHSCOPE_API_KEY"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    base_url`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"https://dashscope.aliyuncs.com/compatible-mode/v1"'),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"# 产品评论"),s(`
lamp_review `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token triple-quoted-string string"},`"""
我需要一盏漂亮的卧室灯，这款灯具有额外的储物功能，价格也不算太高。\\
我很快就收到了它。在运输过程中，我们的灯绳断了，但是公司很乐意寄送了一个新的。\\
几天后就收到了。这款灯很容易组装。我发现少了一个零件，于是联系了他们的客服，他们很快就给我寄来了缺失的零件！\\
在我看来，Lumina 是一家非常关心顾客和产品的优秀公司！
"""`),s(`

prompt `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-interpolation"},[n("span",{class:"token string"},'f"""\n以下用三个反引号分隔的产品评论的情感是什么？\n\n评论文本: ```'),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),s("lamp_review"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},'```\n"""')]),s(`

completion `),n("span",{class:"token operator"},"="),s(" client"),n("span",{class:"token punctuation"},"."),s("chat"),n("span",{class:"token punctuation"},"."),s("completions"),n("span",{class:"token punctuation"},"."),s("create"),n("span",{class:"token punctuation"},"("),s(`
    model`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"qwen-plus"'),n("span",{class:"token punctuation"},","),s(`
    messages`),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},"'role'"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'system'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'content'"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'You are a helpful assistant.'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},"'role'"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'content'"),n("span",{class:"token punctuation"},":"),s(" prompt"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),s("completion"),n("span",{class:"token punctuation"},"."),s("choices"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("message"),n("span",{class:"token punctuation"},"."),s("content"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),s("completion"),n("span",{class:"token punctuation"},"."),s("usage"),n("span",{class:"token punctuation"},"."),s("total_tokens"),n("span",{class:"token punctuation"},")"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("h3",{id:"文本转换",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#文本转换","aria-hidden":"true"},"#"),s(" 文本转换")],-1),b=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(` os
`),n("span",{class:"token keyword"},"from"),s(" dotenv "),n("span",{class:"token keyword"},"import"),s(" load_dotenv"),n("span",{class:"token punctuation"},","),s(` find_dotenv
`),n("span",{class:"token keyword"},"from"),s(" openai "),n("span",{class:"token keyword"},"import"),s(` OpenAI

_ `),n("span",{class:"token operator"},"="),s(" load_dotenv"),n("span",{class:"token punctuation"},"("),s("find_dotenv"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`

client `),n("span",{class:"token operator"},"="),s(" OpenAI"),n("span",{class:"token punctuation"},"("),s(`
    api_key`),n("span",{class:"token operator"},"="),s("os"),n("span",{class:"token punctuation"},"."),s("getenv"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"DASHSCOPE_API_KEY"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    base_url`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"https://dashscope.aliyuncs.com/compatible-mode/v1"'),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token triple-quoted-string string"},`"""
翻译
"""`),s(`
prompt `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-interpolation"},[n("span",{class:"token string"},'f"""\n将以下中文翻译成西班牙语: \n```您好，我想订购一个搅拌机。```\n"""')]),s(`

completion `),n("span",{class:"token operator"},"="),s(" client"),n("span",{class:"token punctuation"},"."),s("chat"),n("span",{class:"token punctuation"},"."),s("completions"),n("span",{class:"token punctuation"},"."),s("create"),n("span",{class:"token punctuation"},"("),s(`
    model`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"qwen-plus"'),n("span",{class:"token punctuation"},","),s(`
    messages`),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},"'role'"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'system'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'content'"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'You are a helpful assistant.'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},"'role'"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'content'"),n("span",{class:"token punctuation"},":"),s(" prompt"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),s("completion"),n("span",{class:"token punctuation"},"."),s("choices"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("message"),n("span",{class:"token punctuation"},"."),s("content "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token string"},"'\\n'"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token triple-quoted-string string"},`"""
识别语种
"""`),s(`
prompt `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-interpolation"},[n("span",{class:"token string"},'f"""\n请告诉我以下文本是什么语种: \n```Combien coûte le lampadaire?```\n"""')]),s(`
completion `),n("span",{class:"token operator"},"="),s(" client"),n("span",{class:"token punctuation"},"."),s("chat"),n("span",{class:"token punctuation"},"."),s("completions"),n("span",{class:"token punctuation"},"."),s("create"),n("span",{class:"token punctuation"},"("),s(`
    model`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"qwen-plus"'),n("span",{class:"token punctuation"},","),s(`
    messages`),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},"'role'"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'system'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'content'"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'You are a helpful assistant.'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},"'role'"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'content'"),n("span",{class:"token punctuation"},":"),s(" prompt"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),s("completion"),n("span",{class:"token punctuation"},"."),s("choices"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("message"),n("span",{class:"token punctuation"},"."),s("content"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token triple-quoted-string string"},`"""
多语种翻译
"""`),s(`
prompt `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-interpolation"},[n("span",{class:"token string"},'f"""\n请将以下文本分别翻译成中文、英文、法语和西班牙语: \n```I want to order a basketball.```\n"""')]),s(`
completion `),n("span",{class:"token operator"},"="),s(" client"),n("span",{class:"token punctuation"},"."),s("chat"),n("span",{class:"token punctuation"},"."),s("completions"),n("span",{class:"token punctuation"},"."),s("create"),n("span",{class:"token punctuation"},"("),s(`
    model`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"qwen-plus"'),n("span",{class:"token punctuation"},","),s(`
    messages`),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},"'role'"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'system'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'content'"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'You are a helpful assistant.'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},"'role'"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'content'"),n("span",{class:"token punctuation"},":"),s(" prompt"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),s("completion"),n("span",{class:"token punctuation"},"."),s("choices"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("message"),n("span",{class:"token punctuation"},"."),s("content"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token triple-quoted-string string"},`"""
同时进行语气转换
"""`),s(`
prompt `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-interpolation"},[n("span",{class:"token string"},'f"""\n请将以下文本翻译成中文，分别展示成正式与非正式两种语气: \n```Would you like to order a pillow?```\n"""')]),s(`
completion `),n("span",{class:"token operator"},"="),s(" client"),n("span",{class:"token punctuation"},"."),s("chat"),n("span",{class:"token punctuation"},"."),s("completions"),n("span",{class:"token punctuation"},"."),s("create"),n("span",{class:"token punctuation"},"("),s(`
    model`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"qwen-plus"'),n("span",{class:"token punctuation"},","),s(`
    messages`),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},"'role'"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'system'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'content'"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'You are a helpful assistant.'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},"'role'"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'content'"),n("span",{class:"token punctuation"},":"),s(" prompt"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),s("completion"),n("span",{class:"token punctuation"},"."),s("choices"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("message"),n("span",{class:"token punctuation"},"."),s("content"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token triple-quoted-string string"},`"""
语气与写作风格调整
"""`),s(`
prompt `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-interpolation"},[n("span",{class:"token string"},'f"""\n将以下文本翻译成商务信函的格式: \n```小老弟，我小羊，上回你说咱部门要采购的显示器是多少寸来着？```\n"""')]),s(`
completion `),n("span",{class:"token operator"},"="),s(" client"),n("span",{class:"token punctuation"},"."),s("chat"),n("span",{class:"token punctuation"},"."),s("completions"),n("span",{class:"token punctuation"},"."),s("create"),n("span",{class:"token punctuation"},"("),s(`
    model`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"qwen-plus"'),n("span",{class:"token punctuation"},","),s(`
    messages`),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},"'role'"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'system'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'content'"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'You are a helpful assistant.'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},"'role'"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'content'"),n("span",{class:"token punctuation"},":"),s(" prompt"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),s("completion"),n("span",{class:"token punctuation"},"."),s("choices"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("message"),n("span",{class:"token punctuation"},"."),s("content"),n("span",{class:"token punctuation"},")"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("h3",{id:"拓展",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#拓展","aria-hidden":"true"},"#"),s(" 拓展")],-1),h=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(` os
`),n("span",{class:"token keyword"},"from"),s(" dotenv "),n("span",{class:"token keyword"},"import"),s(" load_dotenv"),n("span",{class:"token punctuation"},","),s(` find_dotenv
`),n("span",{class:"token keyword"},"from"),s(" openai "),n("span",{class:"token keyword"},"import"),s(` OpenAI

_ `),n("span",{class:"token operator"},"="),s(" load_dotenv"),n("span",{class:"token punctuation"},"("),s("find_dotenv"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`

client `),n("span",{class:"token operator"},"="),s(" OpenAI"),n("span",{class:"token punctuation"},"("),s(`
    api_key`),n("span",{class:"token operator"},"="),s("os"),n("span",{class:"token punctuation"},"."),s("getenv"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"DASHSCOPE_API_KEY"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    base_url`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"https://dashscope.aliyuncs.com/compatible-mode/v1"'),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"# 我们可以在推理那章学习到如何对一个评论判断其情感倾向"),s(`
sentiment `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"消极的"'),s(`

`),n("span",{class:"token comment"},"# 一个产品的评价"),s(`
review `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-interpolation"},[n("span",{class:"token string"},`f"""
他们在11月份的季节性销售期间以约49美元的价格出售17件套装，折扣约为一半。\\
但由于某些原因（可能是价格欺诈），到了12月第二周，同样的套装价格全都涨到了70美元到89美元不等。\\
11件套装的价格也上涨了大约10美元左右。\\
虽然外观看起来还可以，但基座上锁定刀片的部分看起来不如几年前的早期版本那么好。\\
不过我打算非常温柔地使用它，例如，\\
我会先在搅拌机中将像豆子、冰、米饭等硬物研磨，然后再制成所需的份量，\\
切换到打蛋器制作更细的面粉，或者在制作冰沙时先使用交叉切割刀片，然后使用平面刀片制作更细/不粘的效果。\\
制作冰沙时，特别提示：\\
将水果和蔬菜切碎并冷冻（如果使用菠菜，则轻轻煮软菠菜，然后冷冻直到使用；\\
如果制作果酱，则使用小到中号的食品处理器），这样可以避免在制作冰沙时添加太多冰块。\\
大约一年后，电机发出奇怪的噪音，我打电话给客服，但保修已经过期了，所以我不得不再买一个。\\
总的来说，这些产品的总体质量已经下降，因此它们依靠品牌认可和消费者忠诚度来维持销售。\\
货物在两天内到达。
"""`)]),s(`

prompt `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-interpolation"},[n("span",{class:"token string"},`f"""
你是一位客户服务的AI助手。
你的任务是给一位重要客户发送邮件回复。
根据客户通过“\`\`\`”分隔的评价，生成回复以感谢客户的评价。提醒模型使用评价中的具体细节
用简明而专业的语气写信。
作为“AI客户代理”签署电子邮件。
客户评论：
\`\`\``),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),s("review"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},"```\n评论情感："),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),s("sentiment"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},`
"""`)]),s(`

completion `),n("span",{class:"token operator"},"="),s(" client"),n("span",{class:"token punctuation"},"."),s("chat"),n("span",{class:"token punctuation"},"."),s("completions"),n("span",{class:"token punctuation"},"."),s("create"),n("span",{class:"token punctuation"},"("),s(`
    model`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"qwen-plus"'),n("span",{class:"token punctuation"},","),s(`
    messages`),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},"'role'"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'system'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'content'"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'You are a helpful assistant.'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},"'role'"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'content'"),n("span",{class:"token punctuation"},":"),s(" prompt"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token comment"},"# 温度系数，0-1之间，越高越随机，越低越确定"),s(`
    temperature`),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"0.9"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),s("completion"),n("span",{class:"token punctuation"},"."),s("choices"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("message"),n("span",{class:"token punctuation"},"."),s("content "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token string"},"'\\n'"),n("span",{class:"token punctuation"},")"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("h3",{id:"分类",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#分类","aria-hidden":"true"},"#"),s(" 分类")],-1),y=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(` os
`),n("span",{class:"token keyword"},"from"),s(" dotenv "),n("span",{class:"token keyword"},"import"),s(" load_dotenv"),n("span",{class:"token punctuation"},","),s(` find_dotenv
`),n("span",{class:"token keyword"},"from"),s(" openai "),n("span",{class:"token keyword"},"import"),s(` OpenAI

_ `),n("span",{class:"token operator"},"="),s(" load_dotenv"),n("span",{class:"token punctuation"},"("),s("find_dotenv"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`

client `),n("span",{class:"token operator"},"="),s(" OpenAI"),n("span",{class:"token punctuation"},"("),s(`
    api_key`),n("span",{class:"token operator"},"="),s("os"),n("span",{class:"token punctuation"},"."),s("getenv"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"DASHSCOPE_API_KEY"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    base_url`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"https://dashscope.aliyuncs.com/compatible-mode/v1"'),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"# 客户分隔符"),s(`
delimiter `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"####"'),s(`

`),n("span",{class:"token comment"},"# 系统消息"),s(`
system_message `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-interpolation"},[n("span",{class:"token string"},`f"""
你将获得客户服务查询。
每个客户服务查询都将用`),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),s("delimiter"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},`字符分隔。
将每个查询分类到一个主要类别和一个次要类别中。
以 JSON 格式提供你的输出，包含以下键：primary 和 secondary。

主要类别：计费（Billing）、技术支持（Technical Support）、账户管理（Account Management）或一般咨询（General Inquiry）。

计费次要类别：
取消订阅或升级（Unsubscribe or upgrade）
添加付款方式（Add a payment method）
收费解释（Explanation for charge）
争议费用（Dispute a charge）

技术支持次要类别：
常规故障排除（General troubleshooting）
设备兼容性（Device compatibility）
软件更新（Software updates）

账户管理次要类别：
重置密码（Password reset）
更新个人信息（Update personal information）
关闭账户（Close account）
账户安全（Account security）

一般咨询次要类别：
产品信息（Product information）
定价（Pricing）
反馈（Feedback）
与人工对话（Speak to a human）

"""`)]),s(`

user_message `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-interpolation"},[n("span",{class:"token string"},`f"""
我希望你删除我的个人资料和所有用户数据。
"""`)]),s(`

messages `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},"'role'"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'system'"),n("span",{class:"token punctuation"},","),s(`
     `),n("span",{class:"token string"},"'content'"),n("span",{class:"token punctuation"},":"),s(" system_message"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},"'role'"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
     `),n("span",{class:"token string"},"'content'"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string-interpolation"},[n("span",{class:"token string"},'f"'),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),s("delimiter"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),s("user_message"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),s("delimiter"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},'"')]),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),s(`

completion `),n("span",{class:"token operator"},"="),s(" client"),n("span",{class:"token punctuation"},"."),s("chat"),n("span",{class:"token punctuation"},"."),s("completions"),n("span",{class:"token punctuation"},"."),s("create"),n("span",{class:"token punctuation"},"("),s(`
    model`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"qwen-plus"'),n("span",{class:"token punctuation"},","),s(`
    messages`),n("span",{class:"token operator"},"="),s("messages"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),s("completion"),n("span",{class:"token punctuation"},"."),s("choices"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("message"),n("span",{class:"token punctuation"},"."),s("content"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string-interpolation"},[n("span",{class:"token string"},'f"消耗的 Tokens 数量有：'),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),s("completion"),n("span",{class:"token punctuation"},"."),s("usage"),n("span",{class:"token punctuation"},"."),s("total_tokens"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},'"')]),n("span",{class:"token punctuation"},")"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("h3",{id:"思维链推理",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#思维链推理","aria-hidden":"true"},"#"),s(" 思维链推理")],-1),P=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(` os
`),n("span",{class:"token keyword"},"from"),s(" dotenv "),n("span",{class:"token keyword"},"import"),s(" load_dotenv"),n("span",{class:"token punctuation"},","),s(` find_dotenv
`),n("span",{class:"token keyword"},"from"),s(" openai "),n("span",{class:"token keyword"},"import"),s(` OpenAI

_ `),n("span",{class:"token operator"},"="),s(" load_dotenv"),n("span",{class:"token punctuation"},"("),s("find_dotenv"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`

client `),n("span",{class:"token operator"},"="),s(" OpenAI"),n("span",{class:"token punctuation"},"("),s(`
    api_key`),n("span",{class:"token operator"},"="),s("os"),n("span",{class:"token punctuation"},"."),s("getenv"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"DASHSCOPE_API_KEY"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    base_url`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"https://dashscope.aliyuncs.com/compatible-mode/v1"'),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},")"),s(`

delimiter `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"===="'),s(`

system_message `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-interpolation"},[n("span",{class:"token string"},`f"""
请按照以下步骤回答客户的提问。客户的提问将以`),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),s("delimiter"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},`分隔。

步骤 1:`),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),s("delimiter"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},`首先确定用户是否正在询问有关特定产品或产品的问题。产品类别不计入范围。

步骤 2:`),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),s("delimiter"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},`如果用户询问特定产品，请确认产品是否在以下列表中。所有可用产品：

产品：TechPro 超极本
类别：计算机和笔记本电脑
品牌：TechPro
型号：TP-UB100
保修期：1 年
评分：4.5
特点：13.3 英寸显示屏，8GB RAM，256GB SSD，Intel Core i5 处理器
描述：一款适用于日常使用的时尚轻便的超极本。
价格：$799.99

产品：BlueWave 游戏笔记本电脑
类别：计算机和笔记本电脑
品牌：BlueWave
型号：BW-GL200
保修期：2 年
评分：4.7
特点：15.6 英寸显示屏，16GB RAM，512GB SSD，NVIDIA GeForce RTX 3060
描述：一款高性能的游戏笔记本电脑，提供沉浸式体验。
价格：$1199.99

产品：PowerLite 可转换笔记本电脑
类别：计算机和笔记本电脑
品牌：PowerLite
型号：PL-CV300
保修期：1年
评分：4.3
特点：14 英寸触摸屏，8GB RAM，256GB SSD，360 度铰链
描述：一款多功能可转换笔记本电脑，具有响应触摸屏。
价格：$699.99

产品：TechPro 台式电脑
类别：计算机和笔记本电脑
品牌：TechPro
型号：TP-DT500
保修期：1年
评分：4.4
特点：Intel Core i7 处理器，16GB RAM，1TB HDD，NVIDIA GeForce GTX 1660
描述：一款功能强大的台式电脑，适用于工作和娱乐。
价格：$999.99

产品：BlueWave Chromebook
类别：计算机和笔记本电脑
品牌：BlueWave
型号：BW-CB100
保修期：1 年
评分：4.1
特点：11.6 英寸显示屏，4GB RAM，32GB eMMC，Chrome OS
描述：一款紧凑而价格实惠的 Chromebook，适用于日常任务。
价格：$249.99

步骤 3:`),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),s("delimiter"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},` 如果消息中包含上述列表中的产品，请列出用户在消息中做出的任何假设，\\
例如笔记本电脑 X 比笔记本电脑 Y 大，或者笔记本电脑 Z 有 2 年保修期。

步骤 4:`),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),s("delimiter"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},` 如果用户做出了任何假设，请根据产品信息确定假设是否正确。

步骤 5:`),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),s("delimiter"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},` 如果用户有任何错误的假设，请先礼貌地纠正客户的错误假设（如果适用）。\\
只提及或引用可用产品列表中的产品，因为这是商店销售的唯一五款产品。以友好的口吻回答客户。

使用以下格式回答问题：
步骤 1: `),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),s("delimiter"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},` <步骤 1 的推理>
步骤 2: `),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),s("delimiter"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},` <步骤 2 的推理>
步骤 3: `),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),s("delimiter"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},` <步骤 3 的推理>
步骤 4: `),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),s("delimiter"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},` <步骤 4 的推理>
回复客户: `),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),s("delimiter"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},` <回复客户的内容>

请确保每个步骤上面的回答中中使用 `),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),s("delimiter"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},` 对步骤和步骤的推理进行分隔。
"""`)]),s(`

user_message `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-interpolation"},[n("span",{class:"token string"},'f"""BlueWave Chromebook 比 TechPro 台式电脑贵多少？"""')]),s(`

messages `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},"'role'"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'system'"),n("span",{class:"token punctuation"},","),s(`
     `),n("span",{class:"token string"},"'content'"),n("span",{class:"token punctuation"},":"),s(" system_message"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},"'role'"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
     `),n("span",{class:"token string"},"'content'"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string-interpolation"},[n("span",{class:"token string"},'f"'),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),s("delimiter"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),s("user_message"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),s("delimiter"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},'"')]),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),s(`

completion `),n("span",{class:"token operator"},"="),s(" client"),n("span",{class:"token punctuation"},"."),s("chat"),n("span",{class:"token punctuation"},"."),s("completions"),n("span",{class:"token punctuation"},"."),s("create"),n("span",{class:"token punctuation"},"("),s(`
    model`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"qwen-plus"'),n("span",{class:"token punctuation"},","),s(`
    messages`),n("span",{class:"token operator"},"="),s("messages"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),s("completion"),n("span",{class:"token punctuation"},"."),s("choices"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("message"),n("span",{class:"token punctuation"},"."),s("content"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string-interpolation"},[n("span",{class:"token string"},'f"消耗的 Tokens 数量有：'),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),s("completion"),n("span",{class:"token punctuation"},"."),s("usage"),n("span",{class:"token punctuation"},"."),s("total_tokens"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},'"')]),n("span",{class:"token punctuation"},")"),s(`

user_message `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-interpolation"},[n("span",{class:"token string"},'f"""你有电视机么"""')]),s(`
messages `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},"'role'"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'system'"),n("span",{class:"token punctuation"},","),s(`
     `),n("span",{class:"token string"},"'content'"),n("span",{class:"token punctuation"},":"),s(" system_message"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},"'role'"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(`
     `),n("span",{class:"token string"},"'content'"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string-interpolation"},[n("span",{class:"token string"},'f"'),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),s("delimiter"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),s("user_message"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),s("delimiter"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},'"')]),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),s(`
completion `),n("span",{class:"token operator"},"="),s(" client"),n("span",{class:"token punctuation"},"."),s("chat"),n("span",{class:"token punctuation"},"."),s("completions"),n("span",{class:"token punctuation"},"."),s("create"),n("span",{class:"token punctuation"},"("),s(`
    model`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"qwen-plus"'),n("span",{class:"token punctuation"},","),s(`
    messages`),n("span",{class:"token operator"},"="),s("messages"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"try"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token keyword"},"if"),s(" delimiter "),n("span",{class:"token keyword"},"in"),s(" completion"),n("span",{class:"token punctuation"},":"),s(`
        final_response `),n("span",{class:"token operator"},"="),s(" completion"),n("span",{class:"token punctuation"},"."),s("split"),n("span",{class:"token punctuation"},"("),s("delimiter"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("strip"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"else"),n("span",{class:"token punctuation"},":"),s(`
        final_response `),n("span",{class:"token operator"},"="),s(" completion"),n("span",{class:"token punctuation"},"."),s("split"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'":"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("strip"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"except"),s(" Exception "),n("span",{class:"token keyword"},"as"),s(" e"),n("span",{class:"token punctuation"},":"),s(`
    final_response `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"对不起，我现在有点问题，请尝试问另外一个问题"'),s(`

`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),s("final_response"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),s("completion"),n("span",{class:"token punctuation"},"."),s("choices"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("message"),n("span",{class:"token punctuation"},"."),s("content"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string-interpolation"},[n("span",{class:"token string"},'f"消耗的 Tokens 数量有：'),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),s("completion"),n("span",{class:"token punctuation"},"."),s("usage"),n("span",{class:"token punctuation"},"."),s("total_tokens"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},'"')]),n("span",{class:"token punctuation"},")"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function I(A,E){const a=l("CodeDemo");return i(),c("div",null,[r,e(a,{id:"code-demo-78",type:"normal",title:"Prompt%20%E6%A6%82%E6%8B%AC",code:"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"},{default:t(()=>[k]),_:1}),d,e(a,{id:"code-demo-84",type:"normal",title:"Prompt%20%E6%8E%A8%E6%96%AD",code:"eJxtU19PE0sU/yqbvQ+FBMu9ryQ8kHtNrtFEE5+Ma8pYBrtxO7PubDGEkLRQoIhQEKyoRfxTpSqWGhJYupV+GGdmt09+Bc/stlgTd7ObPef8zu/8zuw5c7o962Yo0cd0M2tTx9UoM8i0Q7PaFHUxmdF6bouiqVTsGtGmTdI3emBqY4LMPvg6WBNXDGKQlDY+mDo0kDk0PKwQacvExAVYnDRkEA0uZJup+3h2nLLkPRyhDf2/iZv/3/z3+o3LqYkbV1JXL98y9OGRGH4XMZzKOda4oWdc12Zjo6NTiGVYGnQlkWXO5kiaJdM0OwqPjVzzroUvZekUHp35x9CBJJLyl8ZbB2K7EB4Vw0bLIBbK2ikHz5j4Iegz9OgmsrTVrebDDwXu5YOXZdle4K1G8KIo1g9EoxYUjn60H4ed5/LwHL7F0qmsrnbf7olaRWEW6sHqR/FoP1z8BjDun8rXbX62z731oPFM1D51P+9+zy8YRlRGnJdE57NofpU7J6LU5K1l0ViEsKjWw85meL4ddlaC+hr3vgAX4Ll/CDWgauAfy8oXwKsa35blLug4FGUPCPnZpiyWxVGxmy8AAHrg3idZaUJir7BYeS1qH8XmxmBhiP3qCWQ1zuTuduAXw3dLEFJay1vBRlM0ty5Iuy9PuH+iFLQ2QEFY2AmOfRX1K7FQ0Xgrq+vRMSjPRbeB/1wRHhXl3nvAB+2WqH0FfJ+wEKms1gEUVNcABBTXclmTIA3qQHHROOnuvRKeJ5aORWex++YcSoknIET9XWDi7d3gIB+fieIj/X9rEBum2VbjON33cf8999aCnTr3VqEtUV4X7aeifCpKy90XO4ptYGjAlItLsrivlPh5flb60d5XvHFYVlZk9XBMm5ycnBuYrnmwB0WoIbWwa1ICQuIFSaYzCF4XAZhmByMX9/ZFzbKa/gcPMblkWzkWTXUUwYyhe5iN345tdc0lHGrhxJiWYLPMxdnEiJZIUwJ75irnLZrTkIM1pGWwZU/nLA0xZjIXgYzEfI/3d54cw87vLPFBzo9od+L1sh2TuEO/GoCGqJnG7Pbfd5I9jdBelP0ndC4CuNRFVsql9zFh0crq8z8Bv6dtxA=="},{default:t(()=>[m]),_:1}),v,e(a,{id:"code-demo-90",type:"normal",title:"Prompt%20%E6%8E%A8%E6%96%AD",code:"eJztld1OE0EUx19lsjeFiEVvSYghaiLxQhMvjHFNGdrBbpjOrDtbSWNIiihUqAJGVBSUTyVKbQlEK7Rw4aOwM91e8Qqe7bRAifhxLduPzMyeOXPO/zdn5oFhp9w4Z0aHYSVs7riIC5P1OTyBYtwl7D6qD1OOYxE91Ib6LNbo1I25TRi2GsbXoNfVbTKTRVDn0aktR2a2tLYGFlFqEeaCmZ7UYjIED7atSD9JdXIRvktq1qZxqevGlRsXr12/HOm63h25evmWabS2afNeLEgk6dBO04i7ri062ttjWMRFFOIKY2qlkiwqwlGeaIefjV2rl5KzCR4j7ffPmwY4qYViGrUPq+xu+/mpw74NGdpBiH2NEVkY8bZXvOK4V8ypl6N6gspM+iu7lYlc5cmMn891IJP19PSoh6typbxfyqrMlBre8L8s+ps5r5j2ip/U5GM1nlWzW3vph2B5uCCoAitS4lqcwbJaonA0juHv4AXk4xDskrpiQTZB/vcGCDtr06So5VV7Q4TAd4novK37wfMg5HBKQh0oJFLCJYlQGwpFOQOl3WDwFk8i7BCEUZxQuy9JERbCEi6GMEKDdb/NfpKCOM1etGyDbeiOFth2LOa2HCYACXErSsTtc3fC9RghvdpsdAaFTJOFmrD4+RGZ+QzKVj4+/R0cP/9NTo35+SeguKYEiNTsmnqd97bT3veMdlHnc5EnekFeFOU/tl2CKHwxbJEYthxyoYnKf86kiYVcfqNV/HOtBDga5aJByEwA8qBodA3tpYf88XXdUBvT4F0+z/6inrrRAGSMXI64EyMOyAHF30/cXkxp+JTXSbwms+rVV3/3rb+QBS1V4YVfXlNPF/8N3DFkcKhplHJ9urK8BeMqtyRLE17xWXXuXaO9DLtEL1kneJMnaQylQB5q9ZOjJG2LUj5wWnUnUdQygrxyZMYrz1aXnqn5kl8YVtObf3VbHaMop0fk2IK3uyBHy5U3j8AXAKtDkoUJPz0kS+/1zQXdys4YtL3imHz7zivP+/lN+Xy9OrxafbXqfxiqjo7CvRZ4eb0De0HOrMJxC6eELEzJfFHNrVTm0vul96doj6E1Bn8CpWHuYA=="},{default:t(()=>[b]),_:1}),g,e(a,{id:"code-demo-96",type:"normal",title:"Prompt%20%E6%8E%A8%E6%96%AD",code:"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"},{default:t(()=>[h]),_:1}),f,e(a,{id:"code-demo-102",type:"normal",title:"Prompt%20%E5%88%86%E7%B1%BB",code:"eJxtVW9P20Yc/iqn9AVUamF7i8QLVtjGpg0kuhdTXUXGPoiFfef6bFiEkGAjJDAgjFJoKVOBFahWcJjKICSBfZj6Ls4rvsJ+9iXBFU0Eiu+ee/z8nt+fm07ZWTdDSaonZVg2dVxEmULGHGohnbqYTKLmsklVPS2XHqAxg7QemmBqY6IaLfAQPPUNKkQhadSbPNqZONl5/36E0EwDExdg8lCnQhB8VNtIT+BsL2Vd4zhGK6n+vpFvRx4NDQ+k+4YH098P/Kyk7j+Q8FGV4bTnmL1KKuO6Nuvp7tZVlmEa6OpSTSPrEY11adTqhj9bdY1REz+0qI67J79UUkASS7mHuL8vChe8sNDY3qgfHypEx6ZhGS52QKCSugcfJSWh9Q/VevWNOC+IuZJCWJa52EpbmDF1HAN4DHDRlwRXu/x0IVy94Ndbkl7srPClPfHmICztf5z9VSGiVAzKf9/dbPx2BUfrG++m2zJm+MkWCJMK48OAkOflGdip/1PlhdOgPAuLQbkaHs7FK+/5+rJcFMd77cWgfBLTBNUD9N3I0I9I7NZ4rSiKa8H1a9Be354Pr5/zfOWmtsyXc3ztPSCD8u+NDf+mtm07hqU6WQTUiGGNEh2eYj5gTLwaoKG/F55d3tQKXxmmaZDxm9rix9k5sTQrdkpioySW52DvMdYyxNBUE414dlRKEhWeHYI1dX+vvrYAqD5Nox7UzA8qAbMtKB+AicImRBcWjvn6O/ABYN9ggh2gGiTPPMPJxlSxMikl6QLoAyeLm5DO0N9vvMwBG1/J1ytHwPMTYd4o0xxjFCPqIM8ed1QdAx1k7qLKl3aD6ktxfC02L8G4SJ6uIxXZajZShiwM/aVL9MY5vDc8+quRXwLcwC+2CRG4BiVoDIi1jOqMS96gshj6PoAh+YDsN5jtuRhYExjgS5h3N5pyOTyaFy9yje0dsbreePU2YYnrUA9agGUodWUuIleu+ds8z9W4fylmo8D78aShYdRqGcM03MhFgF6Vguq5eH0mNk8BN0LH3CnVwWCNrrqYNeUls3ZHXiO/Ur/yeWmhvhslflhlbIo6OnIww1E6IbqYPqrhSiX4bw/aLMpF/AZkY4dRAoEYBJyzYg/jQzz3obF1It8M8EcmZWCbrBcpPd7i/iLPRc62SgmK13Na4UW1e1tJd6QHlSP+fK4tadihuqe5d6X420E1EjHsGFrLZF5caRwWYPFrjPVRVZuQ6S6vQpD84oCXLsPSn5GlNlYnkEsh5RnPUiUjfJtDRSEew87nxo0o/MHLy2In6l1e2IW0wwo0sfQx/HdebL6CbhWLUDqLUF3RyHlxKlZ82Rtt/iY1A+4ncsZOdzjUxB09qEMOu47m7EUd0Pcwol3Y+nQMzjQRtycj1Z87B/ITM246GdxMYkNJRZRP42sDitLEce/0InmHdEFzwL/2Bgx8B0O1NK+UaNxHF8SzKUwe2qbH4sEf7zRj7W39kBcCDDfidt7yAT+FfmBPvnja1UTC2+IQ2mgIJJohs1tgOXpMJzBhCPxt5ItgN1TPdILOixlc6qpm2o2hEGB8EaVm/gdQvd/F"},{default:t(()=>[y]),_:1}),w,e(a,{id:"code-demo-108",type:"normal",title:"Prompt%20%E6%80%9D%E7%BB%B4%E9%93%BE",code:"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"},{default:t(()=>[P]),_:1})])}const x=o(u,[["render",I],["__file","prompt-engineering.html.vue"]]);export{x as default};
