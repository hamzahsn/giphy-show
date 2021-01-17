import React, { useState, useEffect } from 'react'
import { IGif } from '@typings/'
import styles from './LighBoxShow.scss'
import { faChevronCircleRight, faChevronCircleLeft, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IModal {
  images: IGif[]
  image?: IGif
  toggleLightBox: () => void
}

export const LighBoxShow = ({ images, image, toggleLightBox }: IModal) => {
  const [GifToDisplay, setGifToDisplay] = useState<any>({})

  useEffect(() => {
    setGifToDisplay(image)
  }, [])

  const showNext = (e: any) => {
    e.stopPropagation()
    const currentIndex = images.indexOf(GifToDisplay)
    if (currentIndex >= images.length - 1) {
      toggleLightBox()
    }
    const nextImage = images[currentIndex + 1]
    setGifToDisplay(nextImage)
  }

  const showPrev = (e: any) => {
    e.stopPropagation()
    const currentIndex = images.indexOf(GifToDisplay)
    if (currentIndex <= 0) {
      toggleLightBox()
    }
    const prev = images[currentIndex - 1]
    setGifToDisplay(prev)
  }

  return (
    <>
      <div className={styles.imageLightbox} data-testid="lightBox" onClick={() => toggleLightBox()}>
        <FontAwesomeIcon
          data-testid="close-lightbox"
          icon={faTimes}
          size="2x"
          color="white"
          className={styles.exitKey}
          onClick={() => toggleLightBox()}
        />
        <FontAwesomeIcon
          data-testid="prev-navigation"
          icon={faChevronCircleLeft}
          size="2x"
          color="white"
          className={styles.navigationArrow}
          onClick={showPrev}
        />
        <img
          data-testid="image-lightbox"
          src={GifToDisplay.source}
          className={styles.lightBoxImage}
          width={GifToDisplay.width}
          height={GifToDisplay.heigth}
        />
        <FontAwesomeIcon
          data-testid="next-navigation"
          icon={faChevronCircleRight}
          size="2x"
          color="white"
          className={styles.navigationArrow}
          onClick={showNext}
        />
      </div>
    </>
  )
}
