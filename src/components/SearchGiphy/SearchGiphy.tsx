import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import { useForm } from 'react-hook-form'
import { Button, LabelInput, Wrapper } from '@styles/index'
import { IMinimizedGif } from '@typings/'
import { searchGif } from '@services/giphy'
import styles from './SearchGiphy.scss'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

export default function SearchGiphy() {
  const [value, setValue] = useState<string>('')
  const [offset, setOffset] = useState(1)
  const [searchedGifs, setsearchedGifs] = useState<IMinimizedGif[]>([])
  const { register, errors, handleSubmit, reset } = useForm()

  const searchedGif = useIntersectionObserver(
    visible => {
      if (visible) {
        searchGif(value, offset).then(newGifs => {
          setOffset(offset => offset + 10)
          setsearchedGifs([...searchedGifs, ...newGifs])
        })
      }
    },
    [value, offset, searchedGifs]
  )

  const handleSubmitSearch = () => {
    searchGif(value).then(newGifs => {
      setsearchedGifs(newGifs)
    })
    reset(searchedGifs)
  }

  return (
    <>
      <Wrapper>
        <form className={styles.searchContainer} onSubmit={handleSubmit(handleSubmitSearch)}>
          <LabelInput
            id="search"
            type="text"
            name="search"
            labelText="Search"
            variant="primary"
            placeholder="try out"
            data-testid="search"
            value={value}
            register={register({
              required: 'your search field is required',
              pattern: {
                value: /^[a-z ,.'-]+$/i,
                message: 'Invalid search format'
              }
            })}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
          />
          {errors.search && <p>wow</p>}
          <Button data-testid="search-button" type="submit" variant="secondary">
            Get some Giphies!
          </Button>
        </form>
      </Wrapper>
      <div className={styles.imagesContainer}>
        {searchedGifs &&
          searchedGifs.map(data => (
            <img
              loading="lazy"
              data-testid="gif"
              ref={searchedGif}
              key={nanoid()}
              src={data.source}
              title={data.title}
              width={data.width}
              height={data.height}
            />
          ))}
      </div>
    </>
  )
}
