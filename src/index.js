import _ from 'lodash';
import './style.css';
import dining from './dining';
import contact from './contact';
import menu from './menu';

// import Icon from './Oslo.jpeg';
const content = document.querySelector('.content');
 

const component = (() => {

  function createTag(type){
    let element = document.createElement(type);

    return element;
  }
  let main = createTag('main');
  let display = createTag('div');


  //Header tag
  let header = createTag('h1')
  header.textContent = "Oslo Dinery";
  header.classList.add('header');

  //Navigation Unordered List
  let list = createTag('ul');

  let Dining = createTag('li')
      Dining.textContent = "Dining";
      Dining.classList.add("listItem")

  let Menu = createTag('li');
      Menu.textContent = "Menu";

  let Contact = createTag('li');
      Contact.textContent = "Contact";

    list.appendChild(Dining)
    list.appendChild(Menu)
    list.appendChild(Contact)



    function Events(){
      Dining.addEventListener('click', ()=>{
        //  alert("Dining is working")
        Dining.classList.add('listItem')
        Menu.classList.remove('listItem')
        Contact.classList.remove('listItem')
        
        display.innerHTML = ''
        display.appendChild(dining.diningContent())
      })

        Contact.addEventListener('click', ()=>{
        //  alert("Contact is working")
        Dining.classList.remove('listItem')
        Menu.classList.remove('listItem')
        Contact.classList.add('listItem')

        display.innerHTML = ''
        display.appendChild(contact.contactContent())
      })

      Menu.addEventListener('click', ()=>{
        //  alert("Menu is working")
        Dining.classList.remove('listItem')
        Menu.classList.add('listItem')
        Contact.classList.remove('listItem')

        display.innerHTML = '';
        display.appendChild(menu.menuContent());
      })
    }

  function AppendElement(){   
    main.appendChild(list);
    main.appendChild(header);
    main.appendChild(dining.diningContent());
    main.appendChild(display);

    return main;
  }


  return {AppendElement, Events}

  // element.innerHTML = _.join(['Hello', 'webpackery'], ' ');
  // const myIcon = new Image();
  // myIcon.src = Icon;
  // element.appendChild(myIcon);
})();

content.appendChild(component.AppendElement());
content.appendChild(component.Events())