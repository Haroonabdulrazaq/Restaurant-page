import _ from 'lodash';
import './style.css';
import dining from './dining';
import contact from './contact';
import menu from './menu';

const content = document.querySelector('.content');
 

const component = (() => {

  function createTag(type){
    let element = document.createElement(type);

    return element;
  }
  let main = createTag('main');
  let display = createTag('div');
  let welcome = createTag('div');
  welcome.classList.add('diningDiv');
  welcome.innerHTML = `<h3>Welcome to Oslo diner</h3>
  <p> Click on our Menu to see varieties of delicacies avaliable and Order now</p>
  <p> You can also contact us by clicking on contact </p>`


  //Header tag
  let header = createTag('h1')
  header.textContent = "Oslo Diner";
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
        welcome.classList.add('display-none')
        
        display.innerHTML = ''
        display.appendChild(dining.diningContent())
      })

        Contact.addEventListener('click', ()=>{
        //  alert("Contact is working")
        Dining.classList.remove('listItem')
        Menu.classList.remove('listItem')
        Contact.classList.add('listItem')
        welcome.classList.add('display-none')

        display.innerHTML = ''
        display.appendChild(contact.contactContent())
      })

      Menu.addEventListener('click', ()=>{
        //  alert("Menu is working")
        Dining.classList.remove('listItem')
        Menu.classList.add('listItem')
        Contact.classList.remove('listItem')
        welcome.classList.add('display-none')

        display.innerHTML = '';
        display.appendChild(menu.menuContent());
      })
    }

  function AppendElement(){   
    main.appendChild(list);
    main.appendChild(header);
    main.appendChild(welcome);
    main.appendChild(display);

    return main;
  }


  return {AppendElement, Events}

  // element.innerHTML = _.join(['Hello', 'webpackery'], ' ');
  // const myIcon = new Image();

})();

content.appendChild(component.AppendElement());
content.appendChild(component.Events())