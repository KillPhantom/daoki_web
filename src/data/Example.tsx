import { DATA_TYPE } from "./Constants";
const PageOneTextData = [
  {
    body: [
      { type: "paragraph", children: [{ text: "1.套利交易：" }] },
      {
        type: "paragraph",
        children: [
          { text: "" },
          {
            type: "link",
            url: "https://etherscan.io/tx/0xeb8c3bebed11e2e4fcd30cbfc2fb3c55c4ca166003c7f7d319e78eaab9747098",
            description: "txn link",
            children: [
              {
                text: "0xeb8c3bebed11e2e4fcd30cbfc2fb3c55c4ca166003c7f7d319e78eaab9747098",
              },
            ],
          },
          { text: "" },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "2. 套利者地址是：0x6703741e913a30d6604481472b6d81f3da45e6e8 (大概率是 ",
          },
          {
            type: "link",
            url: "https://yieldfarming.com/",
            description: "https://yieldfarming.com/",
            children: [{ text: "https://yieldfarming.com/" }],
          },
          { text: " 团队成员的杰作，后文有线索说明)" },
        ],
      },
      { type: "paragraph", children: [{ text: "3. 套利成本：106ETH" }] },
      {
        type: "paragraph",
        children: [{ text: "4. 套利收益：278ETH，约80万美金" }],
      },
      {
        type: "paragraph",
        children: [
          { text: "5. 套利手法：不是从Sushi做了闪电贷。" },
          {
            text: "不过手法和闪电贷类似，在一个transaction中反复使用nftx的mint/redeem，来获得多个的BAYC NFT的所有权，从而claim APECOIN",
            strike: true,
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          { text: "更正：感谢 " },
          {
            type: "link",
            url: "@twodam.eth ",
            description: "@twodam.eth ",
            children: [{ text: "@twodam.eth " }],
          },
          { text: "的进一步深入核实：是在" },
          {
            type: "link",
            url: "/example-page-2",
            isInternal: true,
            description: "NFTX",
            children: [{ text: "NFTX" }],
          },
          {
            text: "中使用了闪电贷，来获得多个的BAYC NFT的所有权，从而claim APECOIN",
          },
        ],
      },
      {
        type: "paragraph",
        children: [{ text: "分析ethersan.io数据时的Tips：" }],
      },
      {
        type: "bulleted-list",
        children: [
          {
            type: "list-item",
            children: [
              {
                text: "一个Transaction内部的各个transfer的展示顺序，并不代表真实的逻辑顺序。因为合约的代码执行是有逻辑顺序的，但上链的数据是并发的状态",
              },
            ],
          },
          {
            type: "list-item",
            children: [
              {
                text: "Tokens Transferred内容也是运算的结果，并不是运算过程。",
              },
            ],
          },
        ],
      },
      {
        type: "paragraph",
        children: [{ text: "也欢迎小伙伴来一起讨论，求真第一：" }],
      },
    ],
    id: 1,
    title: "",
    type: DATA_TYPE.RICH_TEXT,
  },
  {
    body: [
      {
        type: "bulleted-list",
        children: [
          {
            type: "list-item",
            children: [
              {
                text: "套利者从FTX提现了159.99ETH(后文我们就按160ETH计算)到 0x6703741e913a30d6604481472b6d81f3da45e6e8",
              },
            ],
          },
        ],
      },
      {
        type: "bulleted-list",
        children: [
          {
            type: "list-item",
            children: [
              {
                text: "已106ETH从Opensea.io买入BAYC的#1060，Item Activity里可以发现是 yieldfarmingdotcom ",
              },
              {
                type: "link",
                url: "https://opensea.io/assets/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/1060",
                description: "item activity",
                children: [
                  {
                    text: "(https://opensea.io/assets/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/1060)",
                  },
                ],
              },
              { text: "" },
            ],
          },
        ],
      },
      {
        type: "bulleted-list",
        children: [
          {
            type: "list-item",
            children: [
              {
                text: "创建包含套利操作流程的合约：0x7797A99a2e91646aBdc9DC30e838A149CCB3013B",
              },
            ],
          },
        ],
      },
      {
        type: "bulleted-list",
        children: [
          { type: "list-item", children: [{ text: "合约内执行逻辑：" }] },
        ],
      },
      {
        type: "numbered-list",
        children: [
          {
            type: "list-item",
            children: [{ text: "从0x6703地址转出BAYC#1060到合约0x7797" }],
          },
          {
            type: "list-item",
            children: [
              {
                text: "0x7797和NFTX合约交互，给出Mint 6次、Redeem 5次的操作结果。综合计算如下 ",
              },
            ],
          },
          {
            type: "list-item",
            children: [
              {
                text: "Mint: 6次，NFTX规则是每次消耗10%手续费，获得 6*0.9 = 5.4 vToken BAYC Redeem: 5次，采用Random方 式，每次消耗4%手续费，需要消耗 5**1.04= 5.2 vToken BAYC",
              },
            ],
          },
          {
            type: "list-item",
            children: [
              { text: "NFTX合约判定vToken足够，则执行操作", bold: true },
            ],
          },
          {
            type: "list-item",
            children: [
              { text: "0x7797得到：", bold: true },
              {
                text: "剩余的0.2 vToken，以及瞬时的6个BAYC NFT的owner权，立即Claim APECOIN 6份，共计60,564APECOIN",
              },
            ],
          },
          {
            type: "list-item",
            children: [
              { text: "0x7797失去：", bold: true },
              { text: "BAYC#1060这个NFT(购买成本为106ETH)" },
            ],
          },
          {
            type: "list-item",
            children: [
              {
                text: "0x7797再创建合约0x3ebd3d86f810b141f9b2e9b15961fc66364b54f3，自动卖出剩余的0.2 vToken，得到14.15ETH并转账给0x6703",
              },
            ],
          },
        ],
      },
      { type: "paragraph", children: [{ text: "" }] },
      {
        type: "image",
        url: "https://mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2FQdJQmSx9X46eskjZHKmvO.png&w=1200&q=90",
        children: [{ text: "" }],
      },
    ],
    id: 2,
    title: "具体的技术原理和流程如下",
    type: DATA_TYPE.RICH_TEXT,
  },
  {
    body: [
      {
        type: "heading-two",
        children: [
          {
            text: "套利合约执行完成，0x6703手动卖出APECOIN、增减LP。最后转出了399ETH，持有19.2ETH+7,273APECOIN的LP(可以约等于38.4ETH)",
          },
        ],
      },
      {
        type: "image",
        url: "https://mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2FogcLilQ4pGncGUVqgZXdX.png&w=1920&q=90",
        children: [{ text: "" }],
      },
      { type: "paragraph", children: [{ text: "" }] },
      { type: "paragraph", children: [{ text: "" }] },
      {
        type: "image",
        url: "https://mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2Fsa82_14RGdvfmUEE_3hcV.png&w=1920&q=90",
        children: [{ text: "" }],
      },
    ],
    id: 3,
    title: "",
    type: DATA_TYPE.RICH_TEXT,
  },
  {
    body: [
      {
        type: "paragraph",
        children: [{ text: "感谢 @twodam.eth 的进一步深入核实：" }],
      },
      {
        type: "paragraph",
        children: [{ text: "堆栈信息：Tenderly Dashboard" }],
      },
      { type: "paragraph", children: [{ text: "这笔交易的操作路径应该是：" }] },
      {
        type: "numbered-list",
        children: [
          { type: "list-item", children: [{ text: "闪电贷借出 5.2 $BAYC" }] },
          { type: "list-item", children: [{ text: "赎回 5 个 BAYC NFT" }] },
          { type: "list-item", children: [{ text: "领取 $APE" }] },
          {
            type: "list-item",
            children: [
              {
                text: "存入 BAYC #1060 并归还借来的 5 个 BAYC，用来铸造 $BAYC ，归还本金加利息",
              },
            ],
          },
          { type: "list-item", children: [{ text: "卖出剩余的 $BAYC 代币" }] },
        ],
      },
      { type: "paragraph", children: [{ text: "$BAYC 数值：" }] },
      {
        type: "numbered-list",
        children: [
          { type: "list-item", children: [{ text: "借出 5.2" }] },
          { type: "list-item", children: [{ text: "铸造 6 （1:1）" }] },
          { type: "list-item", children: [{ text: "利息 0.6" }] },
        ],
      },
      {
        type: "image",
        url: "https://mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2FA-KmDh7V2jFpaJHWCrE13.jpeg&w=1920&q=90",
        children: [{ text: "" }],
      },
      { type: "paragraph", children: [{ text: "" }] },
      { type: "paragraph", children: [{ text: "" }] },
      {
        type: "image",
        url: "https://mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2FIcf_of0RYDhNBrS5Mchk-.jpeg&w=2048&q=90",
        children: [{ text: "" }],
      },
      {
        type: "image",
        url: "https://mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2FPbygd0gn6RTujkvQsMjab.png&w=1080&q=90",
        children: [{ text: "" }],
      },
      { type: "paragraph", children: [{ text: "" }] },
      { type: "paragraph", children: [{ text: "综合来看：", bold: true }] },
      {
        type: "bulleted-list",
        children: [
          {
            type: "list-item",
            children: [
              {
                text: "初始资金：160ETH，其中106ETH为真实支出成本",
                bold: true,
              },
            ],
          },
          {
            type: "list-item",
            children: [
              { text: "终局资金： 转出399+LP38.4+余额1.48≈438ETH", bold: true },
            ],
          },
          {
            type: "list-item",
            children: [{ text: "套利收益：438-160=278 ETH", bold: true }],
          },
        ],
      },
      { type: "heading-two", children: [{ text: "感慨" }] },
      {
        type: "heading-two",
        children: [
          {
            text: "套利者对于合约的研究特别透彻，艺高人胆大，成就了一次传奇套利。",
          },
        ],
      },
      {
        type: "heading-two",
        children: [
          {
            text: "非常希望作者能站出来贡献思路和心得，并为后来的项目提供规避此类问题的建议。",
          },
        ],
      },
      {
        type: "heading-two",
        children: [{ text: "毕竟说到底，这是白嫖了Staker的claim权益。" }],
      },
    ],
    id: 4,
    title: "深入堆栈",
    type: DATA_TYPE.RICH_TEXT,
  },
];

export const PageOneData = {
  title: "在NFT一哥BAYC头上套利80万美金的技术真相",
  data: PageOneTextData,
  quoteTopics: [
    {
      title: "NFTX 官方中文介绍",
      link: "/example-page-2",
    },
  ],
};

const PageTwoTextData = [
  {
    body: [
      {
        type: "paragraph",
        children: [{ text: "NFTX是一个为 NFTs创建流动性市场的平台。" }],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "用户将他们的NFT存储到一个NFTXvault 中，并创建一个可替换的ERC20令牌(vToken)，该令牌表示对该vault 中随机资产的索赔。vTokens也可以用于从该vault 赎回特定的NFT。",
          },
        ],
      },
      { type: "paragraph", children: [{ text: "优势包括：" }] },
      {
        type: "bulleted-list",
        children: [
          {
            type: "list-item",
            children: [{ text: "为vToken创造LP并stake，以赚取收益；" }],
          },
          {
            type: "list-item",
            children: [{ text: "为NFT项目提供更好的分配和价格发现机制；" }],
          },
          {
            type: "list-item",
            children: [
              {
                text: "通过将任何NFT铸成ERC20并通过Sushiswap进行兑换，即时销售任何NFT；",
              },
            ],
          },
          {
            type: "list-item",
            children: [{ text: "为NFT投资者和投机者增加流动性，" }],
          },
        ],
      },
    ],
    id: 0,
    title: "NFTX简介",
    type: DATA_TYPE.RICH_TEXT,
  },
  {
    body: [
      { type: "heading-two", children: [{ text: "创建vault ", bold: true }] },
      {
        type: "paragraph",
        children: [
          {
            text: '任何人都可以为以太坊上的任何NFT资产创建vault 。一旦创建了vault ，任何用户都可以将符合条件的NFT存入保险vault ，以铸造一个可替代的NFT支持的代币，被称为 "vToken"。',
          },
          {
            type: "link",
            url: "https://docs.nftx.io/tutorials/vault-creation",
            description: "创建vault",
            children: [{ text: "查看更多" }],
          },
          { text: "" },
        ],
      },
      { type: "heading-two", children: [{ bold: true, text: "铸造vToken" }] },
      {
        type: "paragraph",
        children: [
          {
            text: "任何人都可以将NFT存入现有的vault （或他们已创建的vault ），以便铸造一个FT vToken，代表对vault 内的随机NFT的1:1索赔。",
          },
          {
            type: "link",
            url: "https://docs.nftx.io/tutorials/minting",
            description: "铸造vToken",
            children: [{ text: "查看更多" }],
          },
          { text: "" },
        ],
      },
      { type: "heading-two", children: [{ text: "地板价", bold: true }] },
      {
        type: "paragraph",
        children: [
          {
            text: '然后，用户可以在Sushiswap等自动做市商（AMM）中将他们铸造的vToken Pool化，为其他用户的交易创造一个流动市场。随着流动性和交易量的建立，由NFT支持的vToken进入价格发现阶段，"地板价"被发现。',
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "地板价是指某一特定NFT的最低价格。用户通过在他们认为自己的NFT被高估的市场上铸造和出售vToken来建立一个地板价。",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "NFTX正在帮助建立可靠的NFT底价，使其在以太坊的去中心化金融中得到更广泛的应用。例如，一个用户有5个Hashmasks，并对其中的两个估值很高。然而，他们认为另外3个Hashmasks的价值低于Sushiswap上的Mask vault的市场价格。用户将这3个Hashmasks存入Sushiswap，并在Sushiswap上出售他们的3个MASK代币，降低了它的价格，有助于价格发现。",
          },
        ],
      },
      {
        type: "paragraph",
        children: [{ text: "上述过程将继续进行，直到达到一个底价。" }],
      },
      { type: "heading-two", children: [{ bold: true, text: "资格" }] },
      {
        type: "paragraph",
        children: [
          {
            text: "Mask vault 允许任何Hashmask 存入其中， 然而，其他的vaults 使用一个资格列表，只允许存放特定的子类别的NFT。 例如，Kitty第0代vault 有一个资格列表，只包括元数据为第0代的Kitty，其他Kitty不能存入该vault 。",
          },
        ],
      },
    ],
    id: 1,
    title: "如何工作？",
    type: DATA_TYPE.RICH_TEXT,
  },
];

export const PageTwoData = {
  title: "NFTX官方doc 中文版",
  data: PageTwoTextData,
  quotedTopics: [
    {
      title: "在NFT一哥BAYC头上套利80万美金的技术真相",
      link: "/example-page-1",
    },
    {
      title: "簡評超過四十個NFTFi項目，小浣熊的第一眼印象 - Raccoon Chan",
      link: "/example-page-4",
    },
  ],
};

const PageThreeTextData = [
  {
    body: [
      {
        type: "paragraph",
        children: [
          {
            text: "NFTX是一种促进NFT买卖的市场和流动性协议，允许NFT持有者将NFTX存入某个金库并铸造出可以互换的代币 vTokens（可用额外费赎回特定的NFT）。同时，他们的vTokens质押至流动性池中赚取收益。此外，NFTX 还与去中心化期货平台Futureswap合作推出基于 NFT 的杠杆永续合约，可做空或做多指定的NFT。 简单易懂的机制，NFTX把地板价的NFT转换成Fungible的ERC20，然后用AMM收手续费；FloorDAO就加入ve Tokenomics和OHM机制降低参与门槛，同时发展NFT指数领域。可组合性高，规模效应也强，一旦做起来了，其他地板ERC20流动性很难追得上。优点是NFTX库房的钱比FDV还要多，缺点是NFTX没有Tokenomics",
          },
        ],
      },
    ],
    id: 0,
    title: "",
    type: DATA_TYPE.RICH_TEXT,
  },
];

export const PageThreeData = {
  title: "NFTX 介绍",
  data: PageThreeTextData,
};

const PageFourTextData = [
  {
    body: [
      {
        type: "paragraph",
        children: [
          { text: "我是" },
          {
            type: "link",
            url: "/example-page-5",
            isInternal: true,
            description: "个人介绍",
            children: [{ text: "小浣熊" }],
          },
          {
            text: "，由於我堅定不移看好NFTFi，又有很多人問我NFTFi要看什麼項目，所以花了一段時間挑了些我有掃過幾眼的項目，一次過無保留的分享，大家記得一鍵三連支持。",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "頭盔：還有很多項目我聽説過，但嫌太土Skip了，沒寫進來的，也許是我走漏眼，我評分低的項目也有可能大逆襲打我臉，項目方和持分者歡迎説服我改正我的觀點，畢竟我只是掃兩眼，認知一定沒專注一個項目的人深。",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          { text: "" },
          {
            type: "link",
            url: "/example-page-2",
            description: "NFTX 官方中文介绍",
            isInternal: true,
            children: [{ text: "NFTX/FloorDAO（⭐️⭐️⭐️⭐️⭐️）：" }],
          },
          {
            text: "簡單易懂的機制，NFTX把地板價的NFT轉換成Fungible的ERC20，然後用AMM收手續費；FloorDAO就加入ve Tokenomics和OHM機制降低參與門檻，同時發展NFT指數領域。可組合性高，規模效應也強，一旦做起來了，其他地板ERC20流動性很難追得上。優點是NFTX庫房的錢比FDV還要多，缺點是NFTX沒有Tokenomics",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "Abacus（⭐️⭐️⭐️⭐️+0.5⭐）：Abacus Crowds透過羣眾質押估值再加權，去為NFT提供類似預言機服務的，有望讓稀有NFT也能得到準確估值，已經推出；Abacus Spot就是透過類似沽空期權池子的形式去為NFT賺取年化同時精確估值，尚未推出。機制相當複雜，應該比較能直接To C，也許能作為NFTFi的底層協議去捕獲價值，但不是一時三刻，確定性也稍低，但這賽道只有它，不卷，而且機制是創新的。",
          },
        ],
      },
      { type: "paragraph", children: [{ text: "…………" }] },
      { type: "paragraph", children: [{ text: "總結：" }] },
      {
        type: "paragraph",
        children: [
          {
            text: "這麼多競爭對手，成功的大概只有三五家，其他的命運都是歸零，謹記不要上頭，控制注碼適量分注梭哈好了。大盤如何，小浣熊也會一直在大家枕邊的。",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "加入浣熊不同渠道（Telegram, Twitter, Mirror…）的社群，互相交流學習：",
          },
          {
            type: "link",
            url: "https://y.at/%F0%9F%8D%9C%F0%9F%90%BB%F0%9F%98%98",
            description: "个人网站",
            children: [{ text: "https://y.at/🍜🐻😘" }],
          },
          { text: "" },
        ],
      },
      { type: "paragraph", children: [{ text: "使用邀請鏈結支持小浣熊：" }] },
      {
        type: "paragraph",
        children: [
          { text: "Binance交易所：" },
          {
            type: "link",
            url: "https://accounts.binance.com/zh-TC/register?ref=43274886",
            description: "币安注册",
            children: [
              {
                text: "https://accounts.binance.com/zh-TC/register?ref=43274886",
              },
            ],
          },
          { text: "" },
        ],
      },
      {
        type: "paragraph",
        children: [
          { text: "FTX交易所：" },
          {
            type: "link",
            url: "https://ftx.com/#6=8260237",
            description: "FTX注册",
            children: [{ text: "https://ftx.com/#6=8260237" }],
          },
          { text: "" },
        ],
      },
      {
        type: "paragraph",
        children: [
          { text: "WhaleFin理財：" },
          {
            type: "link",
            url: "https://h5.whalefin.com/register?referral_code=5AQwIH",
            description: "WhaleFin",
            children: [
              { text: "https://h5.whalefin.com/register?referral_code=5AQwIH" },
            ],
          },
          { text: "" },
        ],
      },
      {
        type: "paragraph",
        children: [
          { text: "合作接洽：Telegram @RaccoonChan or " },
          {
            type: "link",
            url: "raccooncrypto314@gmail.com",
            description: "个人邮箱",
            children: [{ text: "raccooncrypto314@gmail.com" }],
          },
          { text: "" },
        ],
      },
      { type: "paragraph", children: [{ text: "02/03/2021" }] },
      { type: "paragraph", children: [{ text: "Raccoon Chan小浣熊" }] },
      { type: "paragraph", children: [{ text: "" }] },
    ],
    id: 0,
    title: "",
    type: DATA_TYPE.RICH_TEXT,
  },
];

export const PageFourData = {
  title: "簡評超過四十個NFTFi項目，小浣熊的第一眼印象 - Raccoon Chan",
  data: PageFourTextData,
  quoteTopics: [
    {
      title: "NFTX 官方中文介绍",
      link: "/example-page-2",
    },
    {
      title: "Raccoon Chan 小浣熊",
      link: "/example-page-5",
    },
  ],
};

const PageFiveTextData = [
  {
    body: [
      { type: "paragraph", children: [{ text: "🔗Twitter" }] },
      {
        type: "paragraph",
        children: [
          { text: "" },
          {
            type: "link",
            url: "twitter.com/RaccoonHKG/",
            description: "Twitter",
            children: [{ text: "twitter.com/RaccoonHKG/" }],
          },
          { text: "" },
        ],
      },
      { type: "paragraph", children: [{ text: "" }] },
      {
        type: "paragraph",
        children: [
          { text: "🔗Telegram 交流群" },
          {
            type: "link",
            url: "medium.com/@RaccoonHKG/",
            description: "Medium",
            children: [{ text: "" }],
          },
          { text: "" },
        ],
      },
      {
        type: "paragraph",
        children: [
          { text: "" },
          {
            type: "link",
            url: "t.me/raccoondegen",
            description: "Telegram Group",
            children: [{ text: "t.me/raccoondegen" }],
          },
          { text: "" },
        ],
      },
      { type: "paragraph", children: [{ text: "" }] },
      { type: "paragraph", children: [{ text: "🔗Telegram 頻道" }] },
      {
        type: "paragraph",
        children: [
          { text: "" },
          {
            type: "link",
            url: "t.me/raccoonhkg",
            description: "Telegram Channel",
            children: [{ text: "t.me/raccoonhkg" }],
          },
          { text: "" },
        ],
      },
      { type: "paragraph", children: [{ text: "" }] },
      { type: "paragraph", children: [{ text: "🔗網站" }] },
      {
        type: "paragraph",
        children: [
          { text: "" },
          {
            type: "link",
            url: "decentralizedcitadel.com/",
            description: "Personal website",
            children: [{ text: "decentralizedcitadel.com/" }],
          },
          { text: "" },
        ],
      },
      { type: "paragraph", children: [{ text: "" }] },
      { type: "paragraph", children: [{ text: "🔗Mirror" }] },
      {
        type: "paragraph",
        children: [
          { text: "" },
          {
            type: "link",
            url: "mirror.xyz/raccooncrypto.eth",
            description: "Mirror",
            children: [{ text: "mirror.xyz/raccooncrypto.eth" }],
          },
          { text: "" },
        ],
      },
      { type: "paragraph", children: [{ text: "" }] },
      { type: "paragraph", children: [{ text: "🔗Medium" }] },
      {
        type: "paragraph",
        children: [
          { text: "" },
          {
            type: "link",
            url: "medium.com/@RaccoonHKG/",
            description: "Medium",
            children: [{ text: "medium.com/@RaccoonHKG/" }],
          },
          { text: "" },
        ],
      },
      { type: "paragraph", children: [{ text: "" }] },
      { type: "paragraph", children: [{ text: "🔗Buji DAO Discord" }] },
      {
        type: "paragraph",
        children: [
          { text: "" },
          {
            type: "link",
            url: "discord.gg/bujidao",
            description: "Buji Dao Discord",
            children: [{ text: "discord.gg/bujidao" }],
          },
          { text: "" },
        ],
      },
      { type: "paragraph", children: [{ text: "" }] },
      { type: "paragraph", children: [{ text: "🔗幣安邀請鏈結" }] },
      {
        type: "paragraph",
        children: [
          { text: "" },
          {
            type: "link",
            url: "accounts.binance.com/zh-TC/register?ref=43274886",
            description: "Binance invitation link",
            children: [
              { text: "accounts.binance.com/zh-TC/register?ref=43274886" },
            ],
          },
          { text: "" },
        ],
      },
      { type: "paragraph", children: [{ text: "" }] },
      { type: "paragraph", children: [{ text: "🔗Bybit邀請鏈結" }] },
      { type: "paragraph", children: [{ text: "香港人用這個" }] },
      {
        type: "paragraph",
        children: [
          { text: "" },
          {
            type: "link",
            url: "bybit.com/en-US/invite?ref=D1VGZA",
            description: "Bybit invitation",
            children: [{ text: "bybit.com/en-US/invite?ref=D1VGZA" }],
          },
          { text: "" },
        ],
      },
      { type: "paragraph", children: [{ text: "" }] },
      { type: "paragraph", children: [{ text: "🔗FTX邀請鏈結" }] },
      {
        type: "paragraph",
        children: [
          { text: "" },
          {
            type: "link",
            url: "ftx.com/profile#a=raccooncrypto",
            description: "FTX invitation",
            children: [{ text: "ftx.com/profile#a=raccooncrypto" }],
          },
          { text: "" },
        ],
      },
      { type: "paragraph", children: [{ text: "" }] },
      { type: "paragraph", children: [{ text: "🔗WhaleFin理財邀請鏈結" }] },
      {
        type: "paragraph",
        children: [
          { text: "" },
          {
            type: "link",
            url: "https://h5.whalefin.com/register/?referral_code=5AQwIH",
            children: [
              {
                text: "https://h5.whalefin.com/register/?referral_code=5AQwIH",
              },
            ],
          },
          { text: "" },
        ],
      },
      {
        type: "paragraph",
        children: [
          { text: "" },
          {
            type: "link",
            url: "https://h5.whalefin.com/register/?referral_code=5AQwIH",
            children: [{ text: "" }],
          },
          { text: "" },
        ],
      },
    ],
    id: 0,
    title: "",
    type: DATA_TYPE.RICH_TEXT,
  },
];

export const PageFiveData = {
  title: "Raccoon Chan 小浣熊",
  data: PageFiveTextData,
  quotedTopics: [
    {
      title: "簡評超過四十個NFTFi項目，小浣熊的第一眼印象 - Raccoon Chan",
      link: "/example-page-4",
    },
  ],
};
