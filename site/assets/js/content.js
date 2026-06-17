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

  // 顶部品牌
  brand: {
    initials: "P", // 左上角 logo 显示的字符
    name: "Palemoky",
  },

  // 首屏
  hero: {
    badge: "👋 Hello, I'm",
    name: "Palemoky",
    // 渐变高亮的一句话定位
    tagline: "用代码把复杂变简单。",
    bio: "开发者，开源爱好者。热衷于打磨工程细节、构建效率工具，并把学到的东西写下来分享给更多人。",
    // 首屏行动按钮：留空 [] 即不显示。第一个为主按钮。
    actions: [],
  },

  // 社交链接（渲染在右上角导航）：留空 [] 即不显示。icon 取值见 main.js 中的 ICONS。
  social: [
    { label: "GitHub", href: "https://github.com/palemoky", icon: "github" },
  ],

  // 技能 / 关注领域标签
  skills: [
    "Go", "Rust", "Python",
    "Cloudflare", "Linux", "DevOps", "开源",
  ],

  // 精选项目
  projects: [
    {
      name: "诗泉 API",
      description: "免费开源的中国古诗词 API",
      href: "https://poetry.palemoky.com",
      tags: ["Go", "poetry"],
    },
    {
      name: "斗地主",
      description: "让斗地主回归纯粹——无控牌，真公平",
      href: "https://github.com/palemoky/fight-the-landlord",
      tags: ["Go", "CLI"],
    },
    {
      name: "Paper Pi",
      description: "Powered by Pi, rendered in Pixels.",
      href: "https://github.com/palemoky/paper-pi",
      tags: ["Python"],
    },{
      name: "Readings",
      description: "与聪明的大脑共鸣。",
      href: "https://readings.palemoky.com",
      tags: ["Book"],
    },{
      name: "Algo",
      description: "Powered by Pi, rendered in Pixels.",
      href: "https://alog.palemoky.com",
      tags: ["algo"],
    }
  ],

  // 赞助（与 SPONSOR.md 内容独立维护）
  sponsor: {
    enabled: false,
    title: "请我喝杯咖啡 ☕",
    intro: "如果这些项目对你有帮助，欢迎赞助支持，让代码与咖啡都能继续流动。",
    methods: [
      { label: "微信支付", qr: "assets/img/wechat_pay.png" },
      { label: "支付宝", qr: "assets/img/alipay.png" },
    ],
  },

  // 页脚
  footer: {
    copyright: "Palemoky",
    note: "Built with ❤ · Hosted on Cloudflare Pages",
  },
};
