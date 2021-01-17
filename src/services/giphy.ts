import { IGif } from '@typings/'
const limit = 5

export const searchTrendingGif = (offset = 10) => {
  return fetch(
    `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.GIPHY_KEY}&limit=${limit}&offset=${offset}`
  )
    .then(gifs => gifs.json())
    .then((gifs: any) => {
      return gifs.data.reduce((acc: IGif[], gifies: IGif) => {
        return [
          ...acc,
          {
            id: gifies.id,
            source: gifies.images?.fixed_height_downsampled?.webp,
            title: gifies.title,
            width: gifies.images?.fixed_height_downsampled?.width,
            heigth: gifies?.images?.fixed_height_downsampled?.height,
            thumb: gifies?.images?.preview_gif?.url
          }
        ]
      }, [] as IGif[])
    })
    .catch(err => {
      console.log(err)
    })
}

export const searchGif = (searchTerm: string, offset?: number) => {
  return fetch(
    `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${process.env.GIPHY_KEY}&limit=${limit}&offset=${offset}`
  )
    .then(gifs => gifs.json())
    .then((gifs: any) => {
      return gifs.data.reduce((acc: IGif[], gifies: IGif) => {
        return [
          ...acc,
          {
            id: gifies.id,
            source: gifies.images?.fixed_height_downsampled?.webp,
            title: gifies.title,
            width: gifies.images?.fixed_height_downsampled?.width,
            heigth: gifies?.images?.fixed_height_downsampled?.height
          }
        ]
      }, [] as IGif[])
    })
    .catch(err => {
      console.log(err)
    })
}
