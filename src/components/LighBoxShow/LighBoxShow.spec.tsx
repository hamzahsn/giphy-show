import React from 'react'
import { screen, act, render, fireEvent, waitFor } from '@testing-library/react'
import { LighBoxShow } from './LighBoxShow'

const image = {
  heigth: '200',
  id: '26ufdipQqU2lhNA4g',
  source:
    'https://media2.giphy.com/media/26ufdipQqU2lhNA4g/200_d.webp?cid=9f0f64257ipwykdmxa7tksk9u1higl5i75fn66m8xq53th6s&rid=200_d.webp',
  title: 'Blow Your Mind Wow GIF by Product Hunt',
  width: '200'
}

const images = [
  {
    id: '3M9AG06mB46fkkLuAF',
    source: 'https://media0.giphy.com/media/3M9AG06mB46fkkLuAF/…dmxa7tksk9u1higl5i75fn66m8xq53th6s&rid=200_d.webp',
    title: 'text wow GIF by Omer',
    width: '286',
    heigth: '200'
  },
  {
    id: 'l3q2SaisWTeZnV9wk',
    source: 'https://media4.giphy.com/media/l3q2SaisWTeZnV9wk/2…dmxa7tksk9u1higl5i75fn66m8xq53th6s&rid=200_d.webp',
    title: 'Oh Yeah Reaction GIF by NBA',
    width: '356',
    heigth: '200'
  },
  {
    id: 'l1J9FiGxR61OcF2mI',
    source: 'https://media2.giphy.com/media/l1J9FiGxR61OcF2mI/2…dmxa7tksk9u1higl5i75fn66m8xq53th6s&rid=200_d.webp',
    title: 'Heidi Klum Wow GIF by Lifetime',
    width: '200',
    heigth: '200'
  },
  {
    id: '3kFg2CD3uSTnopcbns',
    source: 'https://media3.giphy.com/media/3kFg2CD3uSTnopcbns/…dmxa7tksk9u1higl5i75fn66m8xq53th6s&rid=200_d.webp',
    title: "pop tv wow GIF by Schitt's Creek",
    width: '200',
    heigth: '200'
  },
  {
    id: 'QXPmPdudTz4So2P4OQ',
    source: 'https://media0.giphy.com/media/QXPmPdudTz4So2P4OQ/…dmxa7tksk9u1higl5i75fn66m8xq53th6s&rid=200_d.webp',
    title: 'The Kid Mero Wow GIF by Desus & Mero',
    width: '200',
    heigth: '200'
  },
  {
    id: '26ufdipQqU2lhNA4g',
    source: 'https://media2.giphy.com/media/26ufdipQqU2lhNA4g/2…dmxa7tksk9u1higl5i75fn66m8xq53th6s&rid=200_d.webp',
    title: 'Blow Your Mind Wow GIF by Product Hunt',
    width: '200',
    heigth: '200'
  },
  {
    id: '3oriO13KTkzPwTykp2',
    source: 'https://media0.giphy.com/media/3oriO13KTkzPwTykp2/…dmxa7tksk9u1higl5i75fn66m8xq53th6s&rid=200_d.webp',
    title: 'x-men wow GIF by 20th Century Fox Home Entertainment',
    width: '200',
    heigth: '200'
  },
  {
    id: 'l3q2K5jinAlChoCLS',
    source: 'https://media1.giphy.com/media/l3q2K5jinAlChoCLS/2…dmxa7tksk9u1higl5i75fn66m8xq53th6s&rid=200_d.webp',
    title: 'Excuse Me Reaction GIF by Mashable',
    width: '170',
    heigth: '200'
  },
  {
    id: '7ziO8WTeXJCGZlq4mm',
    source: 'https://media3.giphy.com/media/7ziO8WTeXJCGZlq4mm/…dmxa7tksk9u1higl5i75fn66m8xq53th6s&rid=200_d.webp',
    title: 'The Daily Show Wow GIF by The Daily Show with Trevor Noah',
    width: '356',
    heigth: '200'
  },
  {
    id: 'Qa97lmqC43yIyOEzwT',
    source: 'https://media3.giphy.com/media/Qa97lmqC43yIyOEzwT/…dmxa7tksk9u1higl5i75fn66m8xq53th6s&rid=200_d.webp',
    title: 'Season 7 Wow GIF by The Office',
    width: '240',
    heigth: '200'
  },
  {
    id: 'l3q2SaisWTeZnV9wk',
    source: 'https://media4.giphy.com/media/l3q2SaisWTeZnV9wk/2…980mpe4o98t4hclcohd12beeydybl7try2&rid=200_d.webp',
    title: 'Oh Yeah Reaction GIF by NBA',
    width: '356',
    heigth: '200'
  }
]

const toggleLightBoxFn = jest.fn().mockReturnValue(true)

describe('Add Todo component', () => {
  beforeEach(() => {
    act(() => {
      render(<LighBoxShow images={images} image={image} toggleLightBox={toggleLightBoxFn} />)
    })
  })
  test('render the input and button', async () => {
    expect(screen.getByTestId('image-lightbox')).toBeInTheDocument()
    expect(screen.getByTestId('prev-navigation')).toBeInTheDocument()
    expect(screen.getByTestId('next-navigation')).toBeInTheDocument()
    expect(screen.getByTestId('close-lightbox')).toBeInTheDocument()
    expect(screen.getByTestId('lightBox')).toBeInTheDocument()
  })

  test('Our input should react with input onCHange handler', () => {
    expect(screen.getByTestId('image-lightbox')).toBeTruthy()
    const closeLightBox = screen.getByTestId('close-lightbox')
    const lightBox = screen.getByTestId('lightBox')
    fireEvent.click(closeLightBox)
    fireEvent.click(lightBox)
    waitFor(() => {
      expect(closeLightBox).toHaveBeenCalledTimes(1)
      expect(closeLightBox).toBeFalsy()
      expect(lightBox).toHaveBeenCalledTimes(1)
      expect(lightBox).toBeFalsy()
    })
  })
})
