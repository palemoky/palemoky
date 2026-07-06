/**
 * 站点内容配置 —— 维护页面只需修改本文件，无需改动 HTML / CSS / JS。
 * Landing page content. Edit ONLY this file to update the page.
 * 与 README.md 独立维护。
 */
window.SITE_CONTENT = {
  // 站点元信息（用于 <title>、SEO、社交分享）
  meta: {
    name: "Palemoky",
    title: "Palemoky · Developer & Open Source",
    description: "开发者 · 开源爱好者。专注于工程实践、效率工具与分享。",
    url: "https://palemoky.com",
    lang: "zh-CN",
  },

  // 首屏
  hero: {
    badge: "👋 Hello, I'm",
    name: "Palemoky",
    // 渐变高亮的一句话定位
    tagline: "七窍通了六窍 😉",
    bio: "先后在小米与滴滴从事研发工作，用过 Go、PHP、Python，正在学 Rust 和 English（不用在编程时切换输入法），日常泡在 Neovim 里。关注产品，喜欢历史与科学，脑子里总有些稀奇古怪的想法（好在 AI 能帮我把它们快速变成现实）。做过几个小的开源项目，希望未来参与到更多的开源项目，也想涉足嵌入式开发，探索智能硬件。",
    // 首屏行动按钮：留空 [] 即不显示。第一个为主按钮。
    actions: [],
  },

  // 社交链接（渲染在右上角导航）：留空 [] 即不显示。icon 取值见 main.js 中的 ICONS。
  social: [
    { label: "GitHub", href: "https://github.com/palemoky", icon: "github" },
  ],

  // 技能：按类别分组，显示在首屏简介下方。增删类别或条目直接改这里。
  skills: [
    // { label: "语言", items: ["中文", "英文"] },
    { label: "编程语言", items: ["Go", "Python", "Rust", "PHP"] },
    { label: "操作系统", items: ["Linux", "macOS", "Windows"] },
    { label: "网络", items: ["TCP/IP", "HTTP(S)", "DNS"] },
    { label: "数据库", items: ["MySQL", "PostgreSQL", "SQLite", "Redis"] },
    { label: "工具链", items: ["Neovim", "Git", "Docker", "CI/CD"] },
    { label: "区块链", items: ["Bitcoin", "Ethereum"] },
  ],

  // 分组卡片：每组一张卡片，组内为链接列表
  groups: [
    {
      title: "笔记",
      icon: "✍️",
      items: [
        {
          name: "博客",
          description: "记录技术与生活",
          href: "https://blog.palemoky.com",
        },
        {
          name: "读书笔记",
          description: "与聪明的大脑共鸣",
          href: "https://readings.palemoky.com",
        },
        {
          name: "算法笔记",
          description: "算法与数据结构",
          href: "https://algo.palemoky.com",
        },
      ],
    },
    {
      title: "开源项目",
      icon: "🛠️",
      items: [
        {
          name: "诗泉",
          description: "免费开源的中国古诗词 API",
          href: "https://poetry.palemoky.com",
        },
        {
          name: "Paper Pi",
          description: "由树莓派驱动的墨水屏信息聚合看板",
          href: "https://github.com/palemoky/paper-pi",
        },
        {
          name: "斗地主",
          description: "让斗地主回归纯粹",
          href: "https://github.com/palemoky/fight-the-landlord",
        },
        {
          name: "DNS Pick",
          description: "选出适合你的 DNS",
          href: "https://github.com/palemoky/dnspick",
        },
      ],
    },
    {
      title: "小玩具",
      icon: "🎈",
      items: [
        {
          name: "趣味 WiFi",
          description: "有趣的 WiFi 名字大全",
          href: "https://wifi.palemoky.com",
        },
      ],
    },
  ],

  // 赞助（与 SPONSOR.md 内容独立维护）
  sponsor: {
    enabled: false,
    title: "请我喝杯咖啡 ☕",
    intro: "如果这些项目对你有帮助，欢迎赞助支持，让我动力十足！",
    methods: [
      { label: "微信支付", qr: "assets/img/wechat_pay.png" },
      { label: "支付宝", qr: "assets/img/alipay.png" },
    ],
  },

  // 页脚
  footer: {
    copyright: "Palemoky",
    note: "Built with ❤️ · Hosted on Cloudflare Pages",
  },
};
