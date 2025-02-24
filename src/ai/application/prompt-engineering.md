---
category: AI
tag:
  - 提示工程
  - 指令工程
---

# Prompt Engineering

随着 ChatGPT 等 LLM（大语言模型）的出现，自然语言处理的范式正在由 Pretrain-Finetune（预训练-微调）向提示工程演变。

对于具有较强自然语言理解、生成能力，能够实现多样化任务处理的 LLM 来说，一个合理的 Prompt 设计极大地决定了其能力的上限与下限。

Prompt Engineering，即是针对特定任务构造能充分发挥大模型能力的 Prompt 的技巧。 要充分、高效地使用 LLM，提示工程是必不可少的技能。

学习提示工程，你要明白为什么有的指令有效有的指令无效、怎么提升指令有效的概率、那些问题用提升工程更有效、那些用传统编程更快、能完成与业务系统的对接。

## Prompt 提示原则

好的 Prompt 不是一蹴而就的，要尝试，高质量 Prompt 的核心要点是：**具体、丰富、少歧异**，下面给出几个提示原则：

### 1. 编写清晰、具体的指令

用清晰、详尽的语言表达 Prompt，就像在给外星人讲解人类世界一样，你也可以使用角色定义，有论文表示，在提示词开始和结束的位置对模型影响是最大的，中间的内容反而影响最小。
其次可以加入例子，使用分隔符清晰地表示输入的不同部分，并加入结构化的输出。

### 2. 给模型时间去思考

在设计 Prompt 时，给予语言模型充足的推理时间非常重要。语言模型与人类一样，需要时间来思考并解决复杂问题。
我们可以指定完成任务所需的步骤，也可以指导模型在下结论之前找出一个自己的解法。

### 3. 局限性

开发大模型相关应用时请务必铭记：**模型偶尔会生成一些看似真实实则编造的知识**,

尽管模型经过大规模预训练，掌握了丰富知识，但它实际上并没有完全记住所见的信息，难以准确判断自己的知识边界，可能做出错误推断。

若让语言模型描述一个不存在的产品,它可能会自行构造出似是而非的细节。这被称为“幻觉”(Hallucination)，是语言模型的一大缺陷。

开发者可以通过Prompt设计减少幻觉发生的可能。例如，可以先让语言模型直接引用文本中的原句，然后再进行解答。这可以追踪信息来源，降低虚假内容的风险。

### 4. 英文原版 Prompt

在一些时候，英文原版 Prompt 往往比中文效果好，这是因为英文在歧义性上影响较小。值得注意的是，无论是那种语言的Prompt能够理解，除非该门语言十分小众。

## 防止 Prompt 漏洞

像著名的“奶奶漏洞”问题，通过变换用户角色等描述废弃掉之前的 Prompt 描述。解决大模型漏洞的方式和生活中的方式很像，解决方案有以下几种

### 注入分类器

在 Prompt 中加入分类器，让模型判断输入是否符合预期。在 Prompt 判断自己的结果是否符合之前要求进行拦截。

### 输入防御

在输入内容的前面都加上原则，比如说“作为……你不能回答与之无关的问题”。

## 具体案例
### 文本概括
::: normal-demo Prompt 概括
```python
import os
from dotenv import load_dotenv, find_dotenv
from openai import OpenAI

# Load environment variables from .env file
_ = load_dotenv(find_dotenv())

# Initialize the OpenAI client with the API key from the environment
client = OpenAI(
    # 若没有配置环境变量，请用百炼API Key将下行替换为：api_key="sk-xxx",
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    base_url="https://dashscope.aliyuncs.com/compatible-mode/v1",
)

# 产品评论
review_1 = """
这个熊猫公仔是我给女儿的生日礼物，她很喜欢，去哪都带着。
公仔很软，超级可爱，面部表情也很和善。但是相比于价钱来说，
它有点小，我感觉在别的地方用同样的价钱能买到更大的。
快递比预期提前了一天到货，所以在送给女儿之前，我自己玩了会。
"""

# 一盏落地灯的评论
review_2 = """
我需要一盏漂亮的卧室灯，这款灯不仅具备额外的储物功能，价格也并不算太高。
收货速度非常快，仅用了两天的时间就送到了。
不过，在运输过程中，灯的拉线出了问题，幸好，公司很乐意寄送了一根全新的灯线。
新的灯线也很快就送到手了，只用了几天的时间。
装配非常容易。然而，之后我发现有一个零件丢失了，于是我联系了客服，他们迅速地给我寄来了缺失的零件！
对我来说，这是一家非常关心客户和产品的优秀公司。
"""

# 一把电动牙刷的评论
review_3 = """
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
"""

# 一台搅拌机的评论
review_4 = """
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
"""

reviews = [review_1, review_2, review_3, review_4]

for i in range(len(reviews)):
    prompt = f"""
    你的任务是从电子商务网站上的产品评论中提取相关信息。

    请对三个反引号之间的评论文本进行概括，最多20个词汇。

    评论文本: ```{reviews[i]}```
    """
    completion = client.chat.completions.create(
        model="qwen-plus",
        # 此处以qwen-plus为例，可按需更换模型名称。模型列表：https://help.aliyun.com/zh/model-studio/getting-started/models
        messages=[
            {'role': 'system', 'content': 'You are a helpful assistant.'},
            {'role': 'user', 'content': prompt}, ],
    )
    print(f"评论{i + 1}: ", completion.choices[0].message.content, "\n")

```
:::

### 推断
::: normal-demo Prompt 推断
```python
import os
from dotenv import load_dotenv, find_dotenv
from openai import OpenAI

_ = load_dotenv(find_dotenv())

client = OpenAI(
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    base_url="https://dashscope.aliyuncs.com/compatible-mode/v1",
)

# 产品评论
lamp_review = """
我需要一盏漂亮的卧室灯，这款灯具有额外的储物功能，价格也不算太高。\
我很快就收到了它。在运输过程中，我们的灯绳断了，但是公司很乐意寄送了一个新的。\
几天后就收到了。这款灯很容易组装。我发现少了一个零件，于是联系了他们的客服，他们很快就给我寄来了缺失的零件！\
在我看来，Lumina 是一家非常关心顾客和产品的优秀公司！
"""

prompt = f"""
以下用三个反引号分隔的产品评论的情感是什么？

评论文本: ```{lamp_review}```
"""

completion = client.chat.completions.create(
    model="qwen-plus",
    messages=[
        {'role': 'system', 'content': 'You are a helpful assistant.'},
        {'role': 'user', 'content': prompt}, ],
)
print(completion.choices[0].message.content)
print(completion.usage.total_tokens)

```
:::

### 文本转换
::: normal-demo Prompt 推断
```python
import os
from dotenv import load_dotenv, find_dotenv
from openai import OpenAI

_ = load_dotenv(find_dotenv())

client = OpenAI(
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    base_url="https://dashscope.aliyuncs.com/compatible-mode/v1",
)

"""
翻译
"""
prompt = f"""
将以下中文翻译成西班牙语: 
```您好，我想订购一个搅拌机。```
"""

completion = client.chat.completions.create(
    model="qwen-plus",
    messages=[
        {'role': 'system', 'content': 'You are a helpful assistant.'},
        {'role': 'user', 'content': prompt}, ],
)
print(completion.choices[0].message.content + '\n')

"""
识别语种
"""
prompt = f"""
请告诉我以下文本是什么语种: 
```Combien coûte le lampadaire?```
"""
completion = client.chat.completions.create(
    model="qwen-plus",
    messages=[
        {'role': 'system', 'content': 'You are a helpful assistant.'},
        {'role': 'user', 'content': prompt}, ],
)
print(completion.choices[0].message.content)

"""
多语种翻译
"""
prompt = f"""
请将以下文本分别翻译成中文、英文、法语和西班牙语: 
```I want to order a basketball.```
"""
completion = client.chat.completions.create(
    model="qwen-plus",
    messages=[
        {'role': 'system', 'content': 'You are a helpful assistant.'},
        {'role': 'user', 'content': prompt}, ],
)
print(completion.choices[0].message.content)

"""
同时进行语气转换
"""
prompt = f"""
请将以下文本翻译成中文，分别展示成正式与非正式两种语气: 
```Would you like to order a pillow?```
"""
completion = client.chat.completions.create(
    model="qwen-plus",
    messages=[
        {'role': 'system', 'content': 'You are a helpful assistant.'},
        {'role': 'user', 'content': prompt}, ],
)
print(completion.choices[0].message.content)

"""
语气与写作风格调整
"""
prompt = f"""
将以下文本翻译成商务信函的格式: 
```小老弟，我小羊，上回你说咱部门要采购的显示器是多少寸来着？```
"""
completion = client.chat.completions.create(
    model="qwen-plus",
    messages=[
        {'role': 'system', 'content': 'You are a helpful assistant.'},
        {'role': 'user', 'content': prompt}, ],
)
print(completion.choices[0].message.content)

```
:::

### 拓展
::: normal-demo Prompt 推断
```python
import os
from dotenv import load_dotenv, find_dotenv
from openai import OpenAI

_ = load_dotenv(find_dotenv())

client = OpenAI(
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    base_url="https://dashscope.aliyuncs.com/compatible-mode/v1",
)

# 我们可以在推理那章学习到如何对一个评论判断其情感倾向
sentiment = "消极的"

# 一个产品的评价
review = f"""
他们在11月份的季节性销售期间以约49美元的价格出售17件套装，折扣约为一半。\
但由于某些原因（可能是价格欺诈），到了12月第二周，同样的套装价格全都涨到了70美元到89美元不等。\
11件套装的价格也上涨了大约10美元左右。\
虽然外观看起来还可以，但基座上锁定刀片的部分看起来不如几年前的早期版本那么好。\
不过我打算非常温柔地使用它，例如，\
我会先在搅拌机中将像豆子、冰、米饭等硬物研磨，然后再制成所需的份量，\
切换到打蛋器制作更细的面粉，或者在制作冰沙时先使用交叉切割刀片，然后使用平面刀片制作更细/不粘的效果。\
制作冰沙时，特别提示：\
将水果和蔬菜切碎并冷冻（如果使用菠菜，则轻轻煮软菠菜，然后冷冻直到使用；\
如果制作果酱，则使用小到中号的食品处理器），这样可以避免在制作冰沙时添加太多冰块。\
大约一年后，电机发出奇怪的噪音，我打电话给客服，但保修已经过期了，所以我不得不再买一个。\
总的来说，这些产品的总体质量已经下降，因此它们依靠品牌认可和消费者忠诚度来维持销售。\
货物在两天内到达。
"""

prompt = f"""
你是一位客户服务的AI助手。
你的任务是给一位重要客户发送邮件回复。
根据客户通过“```”分隔的评价，生成回复以感谢客户的评价。提醒模型使用评价中的具体细节
用简明而专业的语气写信。
作为“AI客户代理”签署电子邮件。
客户评论：
```{review}```
评论情感：{sentiment}
"""

completion = client.chat.completions.create(
    model="qwen-plus",
    messages=[
        {'role': 'system', 'content': 'You are a helpful assistant.'},
        {'role': 'user', 'content': prompt}, ],
    # 温度系数，0-1之间，越高越随机，越低越确定
    temperature=0.9,
)
print(completion.choices[0].message.content + '\n')

```
:::

### 分类
::: normal-demo Prompt 分类
```python
import os
from dotenv import load_dotenv, find_dotenv
from openai import OpenAI

_ = load_dotenv(find_dotenv())

client = OpenAI(
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    base_url="https://dashscope.aliyuncs.com/compatible-mode/v1",
)

# 客户分隔符
delimiter = "####"

# 系统消息
system_message = f"""
你将获得客户服务查询。
每个客户服务查询都将用{delimiter}字符分隔。
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

"""

user_message = f"""
我希望你删除我的个人资料和所有用户数据。
"""

messages = [
    {'role': 'system',
     'content': system_message},
    {'role': 'user',
     'content': f"{delimiter}{user_message}{delimiter}"},
]

completion = client.chat.completions.create(
    model="qwen-plus",
    messages=messages,
)
print(completion.choices[0].message.content)
print(f"消耗的 Tokens 数量有：{completion.usage.total_tokens}")

```
:::

### 思维链推理
::: normal-demo Prompt 思维链
```python
import os
from dotenv import load_dotenv, find_dotenv
from openai import OpenAI

_ = load_dotenv(find_dotenv())

client = OpenAI(
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    base_url="https://dashscope.aliyuncs.com/compatible-mode/v1",
)

delimiter = "===="

system_message = f"""
请按照以下步骤回答客户的提问。客户的提问将以{delimiter}分隔。

步骤 1:{delimiter}首先确定用户是否正在询问有关特定产品或产品的问题。产品类别不计入范围。

步骤 2:{delimiter}如果用户询问特定产品，请确认产品是否在以下列表中。所有可用产品：

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

步骤 3:{delimiter} 如果消息中包含上述列表中的产品，请列出用户在消息中做出的任何假设，\
例如笔记本电脑 X 比笔记本电脑 Y 大，或者笔记本电脑 Z 有 2 年保修期。

步骤 4:{delimiter} 如果用户做出了任何假设，请根据产品信息确定假设是否正确。

步骤 5:{delimiter} 如果用户有任何错误的假设，请先礼貌地纠正客户的错误假设（如果适用）。\
只提及或引用可用产品列表中的产品，因为这是商店销售的唯一五款产品。以友好的口吻回答客户。

使用以下格式回答问题：
步骤 1: {delimiter} <步骤 1 的推理>
步骤 2: {delimiter} <步骤 2 的推理>
步骤 3: {delimiter} <步骤 3 的推理>
步骤 4: {delimiter} <步骤 4 的推理>
回复客户: {delimiter} <回复客户的内容>

请确保每个步骤上面的回答中中使用 {delimiter} 对步骤和步骤的推理进行分隔。
"""

user_message = f"""BlueWave Chromebook 比 TechPro 台式电脑贵多少？"""

messages = [
    {'role': 'system',
     'content': system_message},
    {'role': 'user',
     'content': f"{delimiter}{user_message}{delimiter}"},
]

completion = client.chat.completions.create(
    model="qwen-plus",
    messages=messages,
)
print(completion.choices[0].message.content)
print(f"消耗的 Tokens 数量有：{completion.usage.total_tokens}")

user_message = f"""你有电视机么"""
messages = [
    {'role': 'system',
     'content': system_message},
    {'role': 'user',
     'content': f"{delimiter}{user_message}{delimiter}"},
]
completion = client.chat.completions.create(
    model="qwen-plus",
    messages=messages,
)
try:
    if delimiter in completion:
        final_response = completion.split(delimiter)[-1].strip()
    else:
        final_response = completion.split(":")[-1].strip()
except Exception as e:
    final_response = "对不起，我现在有点问题，请尝试问另外一个问题"

print(final_response)

print(completion.choices[0].message.content)
print(f"消耗的 Tokens 数量有：{completion.usage.total_tokens}")

```
:::