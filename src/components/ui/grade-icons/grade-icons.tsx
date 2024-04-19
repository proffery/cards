import { Star, StarOutline } from '@/assets/icons'

import s from './grade-icons.module.scss'
type GradeProps = {
  from: number
  grade: number
}

export const GradeIcons = ({ from, grade }: GradeProps) => {
  const icons = Array.from({ length: from }, (_, index) => index)

  return (
    <div className={s.iconContainer}>
      {icons.map(icon =>
        icon < grade ? (
          <Star className={s.icon} key={icon} size={16} />
        ) : (
          <StarOutline className={s.iconContainer} key={icon} size={16} />
        )
      )}
    </div>
  )
}
