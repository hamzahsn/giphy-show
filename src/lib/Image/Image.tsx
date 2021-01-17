import React from 'react'
import cs from 'classnames'
import styles from './Image.scss'

interface IImage {
  ref?: React.Ref<HTMLImageElement>
  thumb?: string
  source: string
  width?: number
  height?: number
}

export const Image: React.ForwardRefExoticComponent<IImage> = React.forwardRef(
  ({ thumb, source, width, height }, ref: React.Ref<HTMLImageElement>) => {
    const [isLoaded, setIsLoaded] = React.useState(false)
    return (
      <div>
        {!isLoaded && (
          <img
            className={cs(styles.image, styles.thumb)}
            width={width}
            height={height}
            src={thumb}
            style={{ visibility: isLoaded ? 'hidden' : 'visible' }}
          />
        )}
        <img
          loading="lazy"
          onLoad={() => {
            setIsLoaded(true)
          }}
          width={width}
          height={height}
          className={cs(styles.image, styles.full)}
          style={{ opacity: isLoaded ? 1 : 0 }}
          ref={ref}
          src={source}
        />
      </div>
    )
  }
)
