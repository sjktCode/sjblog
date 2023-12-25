export const projects: Project[] = [
  {
    title: '三金的小站',
    description: '🦖 基于 Docusaurus 静态网站生成器实现个人博客',
    preview: '/img/project/blog.png',
    website: 'https://blog.vercel.app/',
    source: 'https://github.com/kuizuo/blog',
    tags: ['opensource', 'design', 'favorite'],
    type: 'web',
  },
  {
    title: '水滴在线教育平台手机端',
    description: 'React18+TS+NestJS+GraphQL 编写的一款在线教育平台管理系统',
    preview: '/img/project/sjkt-water-mobile.png',
    website: 'https://sjkt-water-mobile.vercel.app/',
    source: 'https://github.com/sjktCode/sjkt-water-mobile',
    tags: ['opensource', 'favorite', 'product', 'large'],
    type: 'commerce',
  },
  {
    title: '水滴在线教育平台PC端',
    description: 'React18+TS+NestJS+GraphQL 编写的一款在线教育平台管理系统',
    preview: '/img/project/sjkt-water-drop.png',
    website: 'https://sjkt-water-pc.vercel.app/',
    source: 'https://github.com/sjktCode/sjkt-water-pc',
    tags: ['opensource', 'favorite', 'product', 'large'],
    type: 'commerce',
  },
  {
    title: '水滴在线教育平台服务端端',
    description: 'React18+TS+NestJS+GraphQL 编写的一款在线教育平台管理系统',
    preview: '/img/project/sjkt-water-drop.png',
    website: 'https://sjkt-water-pc.vercel.app/',
    source: 'https://github.com/sjktCode/sjkt-water-server',
    tags: ['opensource', 'favorite', 'product', 'large'],
    type: 'commerce',
  },
  {
    title: '水滴折扣网Web端',
    description: '这是一个来自美国的折扣网站，使用nextjs+nestjs+antd pro开发',
    preview: '/img/project/water-drop-web.png',
    website: 'https://water-drop-web.vercel.app/',
    tags: ['opensource', 'favorite', 'product', 'large'],
    type: 'commerce',
  },
  {
    title: 'kuromi移民网',
    description: '这是一个来自加拿大的移民咨询网站，使用nextjs+nestjs+antd pro开发',
    preview: '/img/project/kuromi-web-logo.png',
    website: 'https://kuromi-web.vercel.app/',
    tags: ['opensource', 'favorite', 'product', 'large'],
    type: 'commerce',
  },
  {
    title: 'nest-sjktcode-admin',
    description: '这是一个NestJs + Vben Admin 编写的一款前后端分离的权限管理系统',
    preview: '/img/project/nest-sjktcode-admin.png',
    website: 'https://nest-sjktcode-admin.vercel.app/',
    source: 'https://github.com/sjktCode/nest-sjktcode-admin',
    tags: ['opensource', 'favorite', 'product', 'large'],
    type: 'commerce',
  },
]

export type Tag = {
  label: string
  description: string
  color: string
}

export type TagType = 'favorite' | 'opensource' | 'product' | 'design' | 'large' | 'personal'

export type ProjectType = 'web' | 'app' | 'commerce' | 'personal' | 'toy' | 'other'

export const projectTypeMap = {
  web: '网站',
  app: '应用',
  commerce: '商业项目',
  personal: '个人',
  toy: '玩具',
  other: '其他',
}

export type Project = {
  title: string
  description: string
  preview?: string
  website: string
  source?: string | null
  tags: TagType[]
  type: ProjectType
}

export const Tags: Record<TagType, Tag> = {
  favorite: {
    label: '喜爱',
    description: '我最喜欢的网站，一定要去看看!',
    color: '#e9669e',
  },
  opensource: {
    label: '开源',
    description: '开源项目可以提供灵感!',
    color: '#39ca30',
  },
  product: {
    label: '产品',
    description: '与产品相关的项目!',
    color: '#dfd545',
  },
  design: {
    label: '设计',
    description: '设计漂亮的网站!',
    color: '#a44fb7',
  },
  large: {
    label: '大型',
    description: '大型项目，原多于平均数的页面',
    color: '#8c2f00',
  },
  personal: {
    label: '个人',
    description: '个人项目',
    color: '#12affa',
  },
}

export const TagList = Object.keys(Tags) as TagType[]

export const groupByProjects = projects.reduce(
  (group, project) => {
    const { type } = project
    group[type] = group[type] ?? []
    group[type].push(project)
    return group
  },
  {} as Record<ProjectType, Project[]>,
)
