import _ from 'lodash';
import './style.css';
import dining from './dining'

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
        main.removeChild(dining.diningContent())
        // main.removeChild(dining.contactContent())
        // main.appendChild(dining.menuContent())
      })
      Menu.addEventListener('click', ()=>{
        // main.removeChild(dining.diningContent())
        // main.removeChild(dining.contactContent())
        // main.appendChild(dining.menuContent())
      })
      Contact.addEventListener('click', ()=>{
        // main.removeChild(dining.diningContent())
        // main.removeChild(dining.menuContent())
        // main.appendChild(dining.contactContent())
      })
    }

  function AppendElement(){
    main.appendChild(header);
    main.appendChild(list);
    main.appendChild(dining.diningContent())
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