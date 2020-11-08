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
  let listItem1 = createTag('li')
      listItem1.textContent = "Dining";

  let listItem2 = createTag('li');
      listItem2.textContent = "Menu";

  let listItem3 = createTag('li');
      listItem3.textContent = "Contact";

    list.appendChild(listItem1)
    list.appendChild(listItem2)
    list.appendChild(listItem3)

  function AppendElement(){
    main.appendChild(header);
    main.appendChild(list);
    return main;
  }


  return {AppendElement}

  // element.innerHTML = _.join(['Hello', 'webpackery'], ' ');
  // const myIcon = new Image();
  // myIcon.src = Icon;
  // element.appendChild(myIcon);
})();

content.appendChild(component.AppendElement());