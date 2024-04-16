import clsx from 'clsx'

import s from './avatar.module.scss'

type Props = {
  className?: string
  name?: string
  size?: 'l' | 'm' | 's'
  url?: string
}

export const Avatar = ({ className, name, size = 's', url }: Props) => {
  const classNames = {
    container: clsx(s.container, s[size], className),
    image: clsx(s.image),
  }

  return (
    <div
      className={classNames.container}
      style={!url ? { border: '1px solid' } : { border: 'none' }}
    >
      {name && !url ? <span>{name[0].toUpperCase()}</span> : ''}
      {url && <img alt={'avatar'} className={classNames.image} src={url} />}
    </div>
  )
}
