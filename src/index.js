
import {modal} from './modal'
import {Site} from './classes/site'
import {Sidebar} from './classes/sidebar'
// import {templates} from './tamplates'
import './styles/main.css'

const updateCallback = newBLock => {
   modal.push(newBlock);
   site.render(modal)
}

const site = new Site('#site');

new Sidebar('#panel',updateCallback)

site.render(modal)



// let site = document.querySelector('#site');
// modal.forEach(block => {
//    // console.log (block.toHTML())
//    site.insertAdjacentHTML('beforeend', block.toHTML())
  
// }) Было раньше до создания метода render

