import React from 'react'
import { Trendings, SearchGiphy } from './components/index'
import { Wrapper } from '@styles/Wrapper/Wrapper'
import './App.scss'

export function App() {
  return (
    <>
      <SearchGiphy />
      <Wrapper title="Trending" />
      <Trendings />
    </>
  )
}
