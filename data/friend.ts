export const Friends: Friend[] = [
  {
    title: 'Pincman',
    description: '中年老码农,专注于全栈开发与教学',
    website: 'https://pincman.com',
    avatar: '/img/friend/pincman.png',
  },
  {
    title: '峰华前端工程师',
    description: '致力于帮助你以最直观、最快速的方式学会前端开发',
    website: 'https://zxuqian.cn',
    avatar: '/img/friend/zxuqian.png',
  },
  {
    title: '鲸落',
    description: '心中无女人，代码自然神',
    website: 'http://www.xiaojunnan.cn/',
    avatar: '/img/friend/xiaojunnan.png',
  },
  {
    title: '尚宇',
    description: '心怀理想，仰望星空，埋头苦干',
    website: 'https://www.disnox.top/',
    avatar: '/img/friend/disnox.png',
  },
  {
    title: '前端老怪兽',
    description: '一只会敲代码的怪兽',
    website: 'https://zswei.xyz',
    avatar: '/img/friend/old_monster.png',
  },
]

export type Friend = {
  title: string
  description: string
  website: string
  avatar?: string
}
