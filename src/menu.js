const menu = (()=> {

  function createTag(type){
    let element = document.createElement(type);

    return element;
  }
  let menuDiv = createTag('div');

  let subHeader = createTag('h3');

  subHeader.textContent = "Menu"
  
  let list = createTag('div');

  let salad = createTag('p');
  salad.textContent = "Salad"

  let pie = createTag('p');
  pie.textContent = "Pies"

  let fry = createTag('p');
  fry.textContent = "Fries"

  list.appendChild(salad);
  list.appendChild(pie);
  list.appendChild(fry);

  menuDiv.classList.add('diningDiv');

  function menuContent(){
    menuDiv.appendChild(subHeader)
    menuDiv.appendChild(list);

    return menuDiv;
  }

  return {menuContent}


})();



export default menu