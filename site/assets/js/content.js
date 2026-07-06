/**
 * 站点内容配置 —— 维护页面只需修改本文件，无需改动 HTML / CSS / JS。
 * Landing page content. Edit ONLY this file to update the page.
 * 与 README.md 独立维护。
 *
 * 中英双语：zh / en 各一套完整内容，结构完全相同。
 * 默认跟随浏览器语言，右上角按钮可手动切换（记忆在 localStorage）。
 */
window.SITE_CONTENT = {
  zh: {
    // 站点元信息（用于 <title>、SEO、社交分享）
    meta: {
      name: "Palemoky",
      title: "Palemoky · 开发者",
      description: "开发者 · 开源爱好者。专注于工程实践、效率工具与分享。",
      url: "https://palemoky.com",
      lang: "zh-CN",
    },

    // 首屏
    hero: {
      badge: "👋 Hello, I'm",
      name: "Palemoky",
      // 一句话定位
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
      { label: "区块链", items: ["Bitcoin", "Ethereum"] },
      { label: "工具链", items: ["Neovim", "Git", "Docker", "CI/CD"] },
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
            name: "DNS Pick",
            description: "选出适合你的 DNS",
            href: "https://github.com/palemoky/dnspick",
          },
          {
            name: "斗地主",
            description: "让斗地主回归纯粹",
            href: "https://github.com/palemoky/fight-the-landlord",
          },
          {
            name: "检测中国用户特征",
            description: "你来自中国吗？",
            href: "https://github.com/palemoky/china-access-check",
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
          {
            name: "名人堂",
            description: "铭记那些影响人类的科学家",
            href: "https://atlas.palemoky.com",
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
  },

  en: {
    meta: {
      name: "Palemoky",
      title: "Palemoky · Developer & Open Source",
      description: "Developer & open-source enthusiast, focused on engineering craft, productivity tools, and sharing what I learn.",
      url: "https://palemoky.com",
      lang: "en",
    },

    hero: {
      badge: "👋 Hello, I'm",
      name: "Palemoky",
      tagline: "It works on my machine! 😠",
      bio: "I've worked at Xiaomi and DiDi, writing Go, PHP and Python; now I'm learning Rust and English (so I can stop switching input methods while coding), and I live in Neovim. I care about product, enjoy history and science, and my head is full of odd ideas (luckily AI helps me turn them into reality fast). I've built a few small open-source projects, hope to take part in more, and want to explore embedded development and smart hardware.",
      actions: [],
    },

    social: [
      { label: "GitHub", href: "https://github.com/palemoky", icon: "github" },
    ],

    skills: [
      // { label: "Languages", items: ["Chinese", "English"] },
      { label: "Programming", items: ["Go", "Python", "Rust", "PHP"] },
      { label: "OS", items: ["Linux", "macOS", "Windows"] },
      { label: "Network", items: ["TCP/IP", "HTTP(S)", "DNS"] },
      { label: "Databases", items: ["MySQL", "PostgreSQL", "SQLite", "Redis"] },
      { label: "Blockchain", items: ["Bitcoin", "Ethereum"] },
      { label: "Toolbox", items: ["Neovim", "Git", "Docker", "CI/CD"] },
    ],

    groups: [
      {
        title: "Notes",
        icon: "✍️",
        items: [
          {
            name: "Blog",
            description: "Tech & life",
            href: "https://blog.palemoky.com",
          },
          {
            name: "Reading Notes",
            description: "Resonating with brilliant minds",
            href: "https://readings.palemoky.com",
          },
          {
            name: "Algorithm Notes",
            description: "Algorithms & data structures",
            href: "https://algo.palemoky.com",
          },
        ],
      },
      {
        title: "Open Source",
        icon: "🛠️",
        items: [
          {
            name: "Poetry API",
            description: "A free, open-source Chinese classical poetry API",
            href: "https://poetry.palemoky.com",
          },
          {
            name: "Paper Pi",
            description: "An e-ink dashboard powered by Raspberry Pi",
            href: "https://github.com/palemoky/paper-pi",
          },
          {
            name: "DNS Pick",
            description: "Pick the DNS that fits you",
            href: "https://github.com/palemoky/dnspick",
          },
          {
            name: "Fight the Landlord",
            description: "Dou Dizhu made pure and fair",
            href: "https://github.com/palemoky/fight-the-landlord",
          },
          {
            name: "China Access Check",
            description: "Are you from China?",
            href: "https://github.com/palemoky/china-access-check",
          },
        ],
      },
      {
        title: "Toys",
        icon: "🎈",
        items: [
          {
            name: "Fun WiFi",
            description: "A collection of fun WiFi names",
            href: "https://wifi.palemoky.com",
          },
          {
            name: "Hall of Fame",
            description: "Remembering the scientists who have shaped humanity",
            href: "https://atlas.palemoky.com",
          },
        ],
      },
    ],

    sponsor: {
      enabled: false,
      title: "Buy me a coffee ☕",
      intro: "If these projects help you, a little support keeps me going!",
      methods: [
        { label: "WeChat Pay", qr: "assets/img/wechat_pay.png" },
        { label: "Alipay", qr: "assets/img/alipay.png" },
      ],
    },

    footer: {
      copyright: "Palemoky",
      note: "Built with ❤️ · Hosted on Cloudflare Pages",
    },
  },
};
