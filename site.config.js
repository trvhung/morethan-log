const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Gamehot",
    image: "/gamehot.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Boost Your Server with GameHot Today",
    bio: "Hey bro, let’s cut the fluff—running a server is HARD. You’re out here juggling mod roles, hyping events, and begging your IRL friends to join… only to hear crickets. 🦗 Meanwhile, your “community” feels deader than a loot box with socks inside. Real talk: It’s not your fault. Building a lit server takes more than passion—it takes stupid-easy tools and a squad that’s actually down to game.",
    email: "noreply@gamehot.net",
    linkedin: "https://www.linkedin.com/company/gamehotnet",
    github: "gamehotnet",
    instagram: "gamehot_net",
  },
  projects: [
    {
      name: `Gamehot Vercel`,
      href: "https://github.com/gamehotnet",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Boost Your Server with GameHot Today",
    description: "We’re not just another “discord server list” full of bots and fake hype. Nah. Think of us like your cheat code for turning that empty lobby into a chaotic, hype-fueled party. 🎮💥",
    scheme: "dark", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://gamehot.vercel.app",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
