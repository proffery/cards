import { IconProps, IconWrapper } from '@/assets/IconWrapper'

export const EyeOutline = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg
          fill={'currentColorL'}
          height={'24'}
          viewBox={'0 0 24 24'}
          width={'24'}
          xmlns={'http://www.w3.org/2000/svg'}
          {...props}
        >
          <g id={'eye-outline'}>
            <path
              d={
                'M21.87 11.5C21.23 10.39 17.71 4.81999 11.73 4.99999C6.2 5.13999 3 9.99999 2.13 11.5C2.04223 11.652 1.99603 11.8245 1.99603 12C1.99603 12.1755 2.04223 12.348 2.13 12.5C2.76 13.59 6.13 19 12.02 19H12.27C17.8 18.86 21.01 14 21.87 12.5C21.9578 12.348 22.004 12.1755 22.004 12C22.004 11.8245 21.9578 11.652 21.87 11.5ZM12.22 17C7.91 17.1 5.1 13.41 4.22 12C5.22 10.39 7.83 7.09999 11.83 6.99999C16.12 6.88999 18.94 10.59 19.83 12C18.8 13.61 16.22 16.9 12.22 17Z'
              }
            />
            <path
              d={
                'M12 8.5C11.3078 8.5 10.6311 8.70527 10.0555 9.08986C9.47993 9.47444 9.03133 10.0211 8.76642 10.6606C8.50152 11.3001 8.4322 12.0039 8.56725 12.6828C8.7023 13.3618 9.03564 13.9854 9.52513 14.4749C10.0146 14.9644 10.6383 15.2977 11.3172 15.4327C11.9961 15.5678 12.6999 15.4985 13.3394 15.2336C13.9789 14.9687 14.5256 14.5201 14.9101 13.9445C15.2947 13.3689 15.5 12.6922 15.5 12C15.5 11.0717 15.1313 10.1815 14.4749 9.52513C13.8185 8.86875 12.9283 8.5 12 8.5ZM12 13.5C11.7033 13.5 11.4133 13.412 11.1666 13.2472C10.92 13.0824 10.7277 12.8481 10.6142 12.574C10.5007 12.2999 10.4709 11.9983 10.5288 11.7074C10.5867 11.4164 10.7296 11.1491 10.9393 10.9393C11.1491 10.7296 11.4164 10.5867 11.7074 10.5288C11.9983 10.4709 12.2999 10.5006 12.574 10.6142C12.8481 10.7277 13.0824 10.92 13.2472 11.1666C13.412 11.4133 13.5 11.7033 13.5 12C13.5 12.3978 13.342 12.7794 13.0607 13.0607C12.7794 13.342 12.3978 13.5 12 13.5Z'
              }
            />
          </g>
        </svg>
      }
      {...restProps}
    />
  )
}
