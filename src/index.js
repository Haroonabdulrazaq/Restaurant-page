import _ from 'lodash';
import './style.css';
// import Icon from './Oslo.jpeg';
const content = document.querySelector('.content');
 

const component = (() => {

  function createTag(type){
    let element = document.createElement(type);

    return element;
  }
  let main = createTag('main');

  //Header tag
  let header = createTag('h1')
  header.textContent = "Oslo Diner";
  header.classList.add('header');

  //Unordered List
  let list = createTag('ul');
  let Dining = createTag('li')
      Dining.textContent = "Dining";

  let Menu = createTag('li');
      Menu.textContent = "Menu";

  let Contact = createTag('li');
      Contact.textContent = "Contact";

    list.appendChild(Dining)
    list.appendChild(Menu)
    list.appendChild(Contact)

    function Events(){
      Dining.addEventListener('click', ()=>{
        alert("Its working")
      })
      Menu.addEventListener('click', ()=>{
        alert("Menu Is working")
      })
      Contact.addEventListener('click', ()=>{
        alert("Contact Is working")
      })
    }

  function AppendElement(){
    main.appendChild(header);
    main.appendChild(list);
    return main;
  }


  return {AppendElement, Events}

  // element.innerHTML = _.join(['Hello', 'webpackery'], ' ');
  // const myIcon = new Image();
  // myIcon.src = Icon;
  // element.appendChild(myIcon);
})();

content.appendChild(component.AppendElement());
component.Events()