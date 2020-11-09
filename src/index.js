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

  //Header tag
  let header = createTag('h1')
  header.textContent = "Oslo Dinert";
  header.classList.add('header');

  //Unordered List
  let list = createTag('ul');

  let Dining = createTag('li')
      Dining.textContent = "Dining";
      Dining.classList.remove("listItem")

  let Menu = createTag('li');
      Menu.textContent = "Menu";
      Menu.classList.remove("listItem")

  let Contact = createTag('li');
      Contact.textContent = "Contact";
      Contact.classList.remove("listItem")

    list.appendChild(Dining)
    list.appendChild(Menu)
    list.appendChild(Contact)

    function Events(){
      Dining.addEventListener('click', ()=>{
        //  alert("Dining is working")
        Dining.classList.add('listItem')
        Menu.classList.remove('listItem')
        Contact.classList.remove('listItem')

        main.appendChild(dining.diningContent())
        main.removeChild(contact.contactContent())
        main.removeChild(menu.menuContent())
      })

        Contact.addEventListener('click', ()=>{
          // alert("Contact is working")
        Dining.classList.remove('listItem')
        Menu.classList.remove('listItem')
        Contact.classList.add('listItem')

        main.appendChild(contact.contactContent())
        main.removeChild(dining.diningContent())
        main.removeChild(menu.menuContent())   
      })

      Menu.addEventListener('click', ()=>{
          //  alert("Menu is working")
        Dining.classList.remove('listItem')
        Menu.classList.add('listItem')
        Contact.classList.remove('listItem')

        main.removeChild(contact.contactContent())
        main.removeChild(dining.diningContent())
        main.appendChild(menu.menuContent())  
      })
    }

  function AppendElement(){
    main.appendChild(header);
    main.appendChild(list);
    main.appendChild(dining.diningContent());

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