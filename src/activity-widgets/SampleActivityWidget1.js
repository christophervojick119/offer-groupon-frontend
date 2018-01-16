import React from 'react'
import ActivityWidget1 from './ActivityWidget1'

let items = [
  {
    badge: 'success',
    type: 'sale',
    title: 'Michael Smith upgraded to the $50 plan',
    date: '4 minutes ago',
    img: 'm1.png'
  },
  {
    badge: 'danger',
    type: 'return',
    title: 'Lucas Johnson cancelled the $50 plan',
    date: '34 minutes ago',
    img: 'm2.png'
  },
  {
    badge: 'warning',
    type: 'refund',
    title: 'Jane Smith is asking for a refund',
    date: '2 hours ago',
    img: 'w1.png'
  },
  {
    badge: 'success',
    type: 'sale',
    title: 'George Lucas upgraded to the $25 plan',
    date: '3 hours ago',
    img: 'm3.png'
  },
  {
    badge: 'primary',
    type: 'new',
    title: 'Andrew Peters is looking for a new plan',
    date: '4 hours ago',
    img: 'm4.png'
  },
  {
    badge: 'info',
    type: 'new',
    title: 'Gladys Doe is looking for a new plan',
    date: '5 hours ago',
    img: 'w2.png'
  },
  {
    badge: 'success',
    type: 'sale',
    title: 'John Smith upgraded to the $100 plan',
    date: '7 hours ago',
    img: 'm5.png'
  },
  {
    badge: 'warning',
    type: 'refund',
    title: 'Peter Jackson is asking for a refund',
    date: '8 hours ago',
    img: 'm6.png'
  },
  {
    badge: 'danger',
    type: 'return',
    title: 'Melvin White is asking for a refund',
    date: '10 hours ago',
    img: 'm7.png'
  },
  {
    badge: 'info',
    type: 'new',
    title: 'James Peters is looking for a new plan',
    date: 'Yesterday',
    img: 'm8.png'
  }
]

const SampleActivityWidget1 = () => (
  <ActivityWidget1 items={items} amount={10} />
)

export default SampleActivityWidget1
