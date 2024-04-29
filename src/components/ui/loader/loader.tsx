import clsx from 'clsx'

import s from './loader.module.scss'
export const Loader = () => {
  const classNames = {
    root: clsx(s.root),
  }

  return <div className={classNames.root} />
}
