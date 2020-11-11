const menu =(()=>{

  function createTag(type){
    let element = document.createElement(type);

    return element;
  }
  let menuDiv = createTag('div');

  let subHeader = createTag('h3');

  subHeader.textContent = "Menu"
  
  let list = createTag('div');
  let salad = createTag('div');
  salad.textContent = "Salad"

  let pie = createTag('div');
  pie.textContent = "Pies"

  let fry = createTag('div');
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