import Icon from './Oslo.jpeg';

const menu =(()=>{

  function createTag(type){
    let element = document.createElement(type);

    return element;
  }

  list = createTag('ul');
  listItem = createTag('li')
  listItem = createTag('li')
  listItem = createTag('li')


  function contactContent(){
    menuDiv.appendChild(list);
    // contactDiv.classList.add('contactDiv');

    return contactDiv;
  }

  return {menuContent}


})();



export default menu