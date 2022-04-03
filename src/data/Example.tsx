import { DATA_TYPE } from "./Constants";
const PageOneTextData = [
  {
    text: [
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
            url: "https://nftx.io/",
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
    type: 0,
  },
  {
    text: [
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
    type: 0,
  },
  {
    text: [
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
    type: 0,
  },
  {
    text: [
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
    type: 0,
  },
];

export const PageOneData = {
  title: "在NFT一哥BAYC头上套利80万美金的技术真相",
  data: PageOneTextData,
};
