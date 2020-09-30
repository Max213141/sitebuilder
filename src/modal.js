import image from './assets/image1.png'
import {TitleBlock, TextBlock, TextColumnsBlock, ImageBlock} from './classes/blocks'

let sentence = 'This text supose to be very special, but i dont know what i should wrire and how much sentencice'

console.log(image)
export const modal = [
  new TitleBlock ( 'Test title',
  
  {styles: 'font-size: 1.5 rem; text-align: center; background: rgb(2,0,36); background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 30%, rgba(0,212,255,1) 100%); color: #fff'}
  ),

  new TextBlock( sentence,{
    styles: 'font-size: 1.5 rem; background: rgb(2,0,36); background: linear-gradient(90deg, rgba(2,0,36,1) 3%, rgba(214,16,67,1) 49%, rgba(0,0,0,1) 100%); color: white;text-align: center' }),
  
  new TextColumnsBlock ([
    'First column text about freedom in your choices',
    'Second column text about love and actions in relationships',
    'Third column text about freedom in your choices'
  ],{
    styles: 'font-size: 1.5rem; text-align: center; background: rgb(33,164,166); background: linear-gradient(0deg, rgba(33,164,166,1) 15%, rgba(253,187,45,1)100%); color: white'
  }),

  new ImageBlock( image, {
    styles: 'padding: 2rem 0; display: flex; justify-content:center',
    alt: 'my fucking image',
    imagewStyles: 'width:500px; hight: auto'
  })
]

