import { IMinimizedGif } from '@typings/'
import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import { Image } from '@styles/Image/Image'
import { searchTrendingGif } from '../../services/giphy'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import styles from './Trending.scss'

export default function Trending() {
  const [offset, setOffset] = useState(1)
  const [searchedGifs, setSearchedGifs] = useState<IMinimizedGif[]>([])

  const searchedGif = useIntersectionObserver(
    visible => {
      if (visible) {
        searchTrendingGif(offset).then(newGifs => {
          setOffset(offset => offset + 10)
          setSearchedGifs([...new Set([...searchedGifs, ...newGifs])])
        })
      }
    },
    [offset, searchedGifs]
  )

  React.useEffect(() => {
    searchTrendingGif().then(trendings => {
      setSearchedGifs(trendings)
    })
  }, [])

  return (
    <div className={styles.trendingContainer}>
      {searchedGifs &&
        searchedGifs.map((trendingGif: IMinimizedGif) => (
          <Image
            key={nanoid()}
            thumb={trendingGif.thumb}
            source={trendingGif.source}
            ref={searchedGif}
            width={trendingGif.width}
            height={trendingGif.height}
          />
        ))}
    </div>
  )
}
