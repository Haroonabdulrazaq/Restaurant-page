import './assets/stylesheet/style.css';
import dining from './assets/js/dining';
import contact from './assets/js/contact';
import menu from './assets/js/menu';

const content = document.querySelector('.content');


const component = (() => {
  function createTag(type) {
    const element = document.createElement(type);

    return element;
  }
  const main = createTag('main');
  const display = createTag('div');
  const welcome = createTag('div');
  welcome.classList.add('diningDiv');
  welcome.innerHTML = `<h3>Welcome to Oslo diner</h3>
  <p> Click on our Menu to see varieties of delicacies avaliable and Order now</p>
  <p> You can also contact us by clicking on contact </p>`;


  // Header tag
  const header = createTag('h1');
  header.textContent = 'Oslo Diner';
  header.classList.add('header');

  // Navigation Unordered List
  const list = createTag('ul');

  const Dining = createTag('li');
  Dining.textContent = 'Dining';

  const Menu = createTag('li');
  Menu.textContent = 'Menu';

  const Contact = createTag('li');
  Contact.textContent = 'Contact';

  list.appendChild(Dining);
  list.appendChild(Menu);
  list.appendChild(Contact);


  const Events=() =>{
    Dining.addEventListener('click', () => {
      Dining.classList.add('listItem');
      Menu.classList.remove('listItem');
      Contact.classList.remove('listItem');
      welcome.classList.add('display-none');

      display.innerHTML = '';
      display.appendChild(dining.diningContent());
    });

    Contact.addEventListener('click', () => {
      Dining.classList.remove('listItem');
      Menu.classList.remove('listItem');
      Contact.classList.add('listItem');
      welcome.classList.add('display-none');

      display.innerHTML = '';
      display.appendChild(contact.contactContent());
    });

    Menu.addEventListener('click', () => {
      Dining.classList.remove('listItem');
      Menu.classList.add('listItem');
      Contact.classList.remove('listItem');
      welcome.classList.add('display-none');

      display.innerHTML = '';
      display.appendChild(menu.menuContent());
    });
  }

  const AppendElement=()=> {
    main.appendChild(list);
    main.appendChild(header);
    main.appendChild(welcome);
    main.appendChild(display);

    return main;
  }


  return { AppendElement, Events };
})();

content.appendChild(component.AppendElement());
content.appendChild(component.Events());