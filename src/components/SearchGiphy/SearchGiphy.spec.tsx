import React from 'react'
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react'
import SearchGiphy from './SearchGiphy'

describe('Add Todo component', () => {
  beforeEach(() => {
    act(() => {
      render(<SearchGiphy />)
    })
  })
  test('Render the input and button', async () => {
    expect(screen.getByTestId('search')).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveTextContent('Get some Giphies!')
  })

  test('Our input should react with input onCHange handler', () => {
    const searchInput = screen.getByTestId('search') as HTMLInputElement
    fireEvent.change(searchInput, { target: { value: 'aloha' } })
    expect(searchInput.value).toBe('aloha')
  })

  test('it should render images after searching', async () => {
    const searchInput = screen.getByTestId('search') as HTMLInputElement
    await waitFor(() => {
      fireEvent.change(searchInput, { target: { value: 'hello' } })
      fireEvent.click(screen.getByTestId('search-button'))
    })
    waitFor(() => {
      const images = screen.getByTestId('gif')
      expect(images).toBeInTheDocument()
    })
  })
})
