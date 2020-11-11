//  import { orderBy } from 'lodash';
  import saladImg from './salad.jpg';

const menu =(()=>{

  function createTag(type){
    let element = document.createElement(type);

    return element;
  }
  let menuDiv = createTag('div');

  let subHeader = createTag('h3');

  subHeader.textContent = "Menu"
  
  let menulist = createTag('div');
  menulist.classList.add('menu-list')

  let salad = createTag('div');
  salad.classList.add('delicacy');
  salad.classList.add('recipe-style');
  let priceOrder = createTag('div')
  let order = createTag('button');
  order.textContent = "Order now!"
  let price = createTag('p');
  price.textContent = "$4.04"
  priceOrder.appendChild(price);
  priceOrder.appendChild(order);

  const saladImg = new Image();
  saladImg.src = saladImg;
  salad.appendChild(saladImg);
  salad.appendChild(priceOrder);
  

  let pie = createTag('div');
  pie.classList.add('delicacy');
  pie.textContent = "Pies"

  let fry = createTag('div');
  fry.classList.add('delicacy');
  fry.textContent = "Fries"

  menulist.appendChild(salad);
  menulist.appendChild(pie);
  menulist.appendChild(fry);

  menuDiv.classList.add('diningDiv','menu-div');

  function menuContent(){
    menuDiv.appendChild(subHeader)
    menuDiv.appendChild(menulist);

    return menuDiv;
  }

  return {menuContent}


})();



export default menu