import { IconProps, IconWrapper } from '@/assets/IconWrapper'

export const MoreVertical = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg
          height={'25'}
          viewBox={'0 0 25 25'}
          width={'25'}
          xmlns={'http://www.w3.org/2000/svg'}
          {...props}
        >
          <circle
            cx={12.5}
            cy={12.5}
            r={12}
            style={{
              fill: 'none',
              stroke: 'currentColor',
            }}
          />
          <g id={'MoreVertical'}>
            <path
              d={
                'm12.5, 13.91c.78, 0, 1.41-.63, 1.41-1.41s-.63-1.41-1.41-1.41-1.41.63-1.41, 1.41.63, 1.41, 1.41, 1.41Z'
              }
              style={{
                fill: 'currentColor',
                stroke: 'currentColor',
              }}
            />
            <path
              d={
                'm12.5,8.97c.78,0,1.41-.63,1.41-1.41s-.63-1.41-1.41-1.41-1.41.63-1.41,1.41.63,1.41,1.41,1.41Z'
              }
              style={{
                fill: 'currentColor',
                stroke: 'currentColor',
              }}
            />
            <path
              d={
                'm12.5,18.85c.78,0,1.41-.63,1.41-1.41s-.63-1.41-1.41-1.41-1.41.63-1.41,1.41.63,1.41,1.41,1.41Z'
              }
              style={{
                fill: 'currentColor',
                stroke: 'currentColor',
              }}
            />
          </g>
        </svg>
      }
      {...restProps}
    />
  )
}
