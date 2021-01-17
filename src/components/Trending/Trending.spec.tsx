import React from 'react'
import { render, screen, act, waitFor } from '@testing-library/react'
import Trending from './Trending'

beforeEach(() => {
  act(() => {
    render(<Trending />)
  })
  const mockIntersectionObserver = jest.fn()
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null
  })
  window.IntersectionObserver = mockIntersectionObserver
})

describe('Trending component', () => {
  test('Render the gifs once component mounted', async () => {
    waitFor(() => {
      expect(screen.getByTestId('trendings')).toBeInTheDocument()
    })
  })
})
