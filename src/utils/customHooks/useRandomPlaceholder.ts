import { useEffect, useState } from 'react'

const DELAY = 500
const PLACEHOLDERS = [
  'Famous Writers',
  'Historical Events',
  'Animal Kingdom',
  'World Landmarks',
  'Scientific Discoveries',
  'Musical Instruments',
  'Sports Legends',
  'Mythical Creatures',
  'Space Exploration',
  'Art Masterpieces',
  'Ancient Civilizations',
  'Movie Genres',
  'Natural Disasters',
  'Inventions and Inventors',
  'Political Leaders',
  'Culinary Delights',
  'Literary Classics',
  'Marvel and DC Characters',
  'Famous Painters',
  'Exploration and Adventurers',
  'Sports Championships',
  'Greatest Scientists',
  'Religions of the World',
  'Modern Technologies',
  'Fashion Icons',
  'Famous Architects',
  'Environmental Issues',
  'World Religions',
  'Human Anatomy',
  'Financial Markets',
  'Cultural Festivals',
  'Historical Monuments',
  'Psychological Concepts',
  'Great Philosophers',
  'World Records',
  'Astrological Signs',
  'Car Brands',
  'Ancient Mythology',
  'Business Tycoons',
  'Astronomy Phenomena',
  'Popular Magazines',
  'Political Movements',
  'Music Genres',
  'Sports Stadiums',
  'Influential Books',
  'Medical Breakthroughs',
  'Art Movements',
]

export const useRandomPlaceholder = () => {
  const [randomString, setRandomString] = useState('')

  useEffect(() => {
    const interval = setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * PLACEHOLDERS.length)
      const randomItem = PLACEHOLDERS[randomIndex]

      setRandomString(randomItem)
    }, DELAY)

    return () => clearTimeout(interval)
  }, [])

  return randomString
}
