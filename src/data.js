import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'
import tour5 from './images/tour-5.jpeg'
import tour6 from './images/tour-6.jpeg'

const idGen = (arr) => {
  let id = 1
  arr.forEach((obj) => (obj.id = id++))
}

export const pageLinks = [
  { link: '#home', name: 'home' },
  { link: '#about', name: 'about' },
  { link: '#services', name: 'services' },
  { link: '#tours', name: 'tours' },
]
idGen(pageLinks)

export const socialLinks = [
  { link: 'https://www.facebook.com', icon: 'fab fa-facebook' },
  { link: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { link: 'https://www.squarespace.com', icon: 'fab fa-squarespace' },
]
idGen(socialLinks)

export const services = [
  {
    title: 'saving money',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    title: 'endless hiking',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    title: 'amazing comfort',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
]
idGen(services)

export const tours = [
  {
    img: tour1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'china',
    duration: 6,
    cost: 2100,
  },
  {
    img: tour2,
    date: 'october 1th, 2020',
    title: 'best of java',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'china',
    duration: 11,
    cost: 1400,
  },
  {
    img: tour3,
    date: 'september 15th, 2020',
    title: 'explore hong kong',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'china',
    duration: 8,
    cost: 5000,
  },
  {
    img: tour4,
    date: 'december 5th, 2020',
    title: 'kenya highlights',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'china',
    duration: 20,
    cost: 3300,
  },
  {
    img: tour5,
    date: 'february 10th, 2021',
    title: 'african safari',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'south-africa',
    duration: 35,
    cost: 6200,
  },
  {
    img: tour6,
    date: 'march 15th, 2021',
    title: 'incredible india',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'india',
    duration: 30,
    cost: 4200,
  },
]
idGen(tours)
