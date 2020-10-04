import {TextBlock, TitleBlock} from "./blocks" 

export class Sidebar{
  constructor(selector, update){
    this.$el = document.querySelector(selector);

    this.update = update
    this.init()
  }

  init(){
    this.$el.addEventListener('submit', this.addBlock.bind(this)) ////<<<<<<<<<=========Вот решение которое не работает, только у меня он просто bind-ит и всё                               Не работает сломано опять 
    this.$el.innerHTML = this.template
  }

  get template(){
    return[
      block('text'),
      block('title')
    ].join('')
  }

  addBlock(event){
    event.preventDefault()
    console.log(event)

    // const type = event.target.name
    // const value = event.target.value.value
    // const styles = event.target.styles.styles

    // debugger /////////<<<<<<<<<< В этом месте тоже выдаёт ошибку "DevTools failed to load SourceMap: Could not load content for webpack:///node_modules/sockjs-client/dist/sockjs.js.map: HTTP error: status code 404, net::ERR_UNKNOWN_URL_SCHEME"

    const type = event.target.name;
    const value = event.target.value.value;
    const styles = event.target.styles.styles;
    debugger
    const Constructor = type === "text" ? TextBlock : TitleBlock;

    const newBlock = new Constructor(value,{styles})
    console.log(newBlock);

    this.update(newBlock)////<<<<<<<<<<<<<<<<<========================= Вот строка в которой возникает ошибка 

    event.target.value.value = ''
    event.target.styles.value = ''

    

  }
}

function block(type){
  return `
  <form name = "${type}">
  <h5>${type}</h5>
  <div class="form-group">
    <input  class="form-control form-control-sm" name = "value" placeholder="value">
  </div>
  <div class="form-group">
    <input  class="form-control form-control-sm" name = "styles" placeholder="styles">
  </div>
  <button type="submit" class="btn btn-primary btn-sm">Create</button>
</form>
<hr />
  `
}