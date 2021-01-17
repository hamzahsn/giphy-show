import { IMinimizedGif } from '@typings/'
import React, { useState } from 'react'
import { searchTrendingGif } from '../../services/giphy'
import styles from './Trending.scss'

export default function TrendingGifs() {
  const [searchedGifs, setSearchedGifs] = useState<IMinimizedGif[]>([])

  React.useEffect(() => {
    searchTrendingGif().then(trendings => {
      setSearchedGifs(trendings)
    })
  }, [])

  return <div className={styles.trendingContainer}>aloha from tendings{console.table(searchedGifs)}</div>
}
