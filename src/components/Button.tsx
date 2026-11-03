import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { IconName } from '@/types'
import { Icon } from '@/components/Icon'

type ButtonProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'text'
  icon?: IconName
  onClick?: () => void
  to?: string
  href?: string
  download?: boolean
  external?: boolean
  type?: 'button' | 'submit'
}

export function Button({ children, variant = 'primary', icon, onClick, to, href, download, external, type = 'button' }: ButtonProps) {
  const content = <>{children}{icon && <Icon name={icon} size={16} />}</>
  if (to) {
    return <Link className={`button ${variant}`} to={to}>{content}</Link>
  }
  if (href) {
    return (
      <a
        className={`button ${variant}`}
        href={href}
        download={download}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
      >
        {content}
      </a>
    )
  }
  return <button className={`button ${variant}`} onClick={onClick} type={type}>{content}</button>
}
