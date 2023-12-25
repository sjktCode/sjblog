import React from 'react'
import { useThemeConfig } from '@docusaurus/theme-common'
import { ThemeConfig } from '@docusaurus/preset-classic'
import { Icon } from '@iconify/react'
import JuejinIcon from '@site/static/svg/juejin.svg'

import styles from './styles.module.scss'

function SocialLink({
  href,
  icon,
  title,
  ...prop
}: {
  href: string
  title: string
  icon: string | JSX.Element
}) {
  return (
    <a href={href} target="_blank" {...prop} title={title}>
      {typeof icon === 'string' ? <Icon icon={icon} /> : icon}
    </a>
  )
}

export default function SocialLinks({ ...prop }) {
  const themeConfig = useThemeConfig() as ThemeConfig

  const socials = themeConfig.socials as {
    github: string
  }

  return (
    <div className={styles.social__links} {...prop}>
      <SocialLink href={socials.github} title="gitub" icon="ri:github-line" />
    </div>
  )
}
