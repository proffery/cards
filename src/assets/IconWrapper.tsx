import { CSSProperties, FC, HTMLProps, ReactNode, SVGProps } from 'react'

export type IconProps = {
  /** Set icon fill color from design system */
  color?: string
  /** Set width and height of icon in pixels */
  size?: number
  /** Props to pass directly to svg element */
  svgProps?: SVGProps<SVGSVGElement>
} & Omit<HTMLProps<HTMLSpanElement>, 'color' | 'size'>

export const IconWrapper: FC<{ icon: ReactNode } & IconProps> = ({
  color: colorProp,
  icon,
  size: sizeProp,
  ...restProps
}) => {
  const color = colorProp ? colorProp : 'currentColor'
  const size = sizeProp ? `${sizeProp}px` : '24px'

  return (
    <span
      aria-hidden={'true'}
      role={'img'}
      style={
        {
          color: color,
          display: 'inline-flex',
          fontSize: 'inherit',
          height: size,
          width: size,
        } as CSSProperties
      }
      {...restProps}
    >
      {icon}
    </span>
  )
}
