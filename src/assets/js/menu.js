import saladPic from '../img/salad.jpg';
import fryPic from '../img/pie.jpeg';
import piePic from '../img/fry.jpeg';

const menu = (() => {
  const createTag = (type) => {
    const element = document.createElement(type);

    return element;
  };

  const recipeType = (text) => {
    const name = createTag('h3');
    name.textContent = text;
    name.classList.add('price-text');

    return name;
  };
  const menuDiv = createTag('div');

  const subHeader = createTag('h3');

  subHeader.textContent = 'Menu';

  const menulist = createTag('div');
  menulist.classList.add('menu-list');

  const salad = createTag('div');
  salad.classList.add('delicacy', 'recipe-style');

  const priceOrder = () => {
    const priceOrder = createTag('div');

    const order = createTag('button');
    order.classList.add('order-btn');
    order.textContent = 'Order now!';

    const price = createTag('p');
    price.textContent = '$4.04';
    price.classList.add('price-text');

    priceOrder.appendChild(price);
    priceOrder.appendChild(order);

    return priceOrder;
  };


  const saladImg = new Image();
  saladImg.src = saladPic;
  salad.appendChild(saladImg);
  salad.appendChild(recipeType('Salad'));
  salad.appendChild(priceOrder());


  // Pie
  const pie = createTag('div');
  pie.classList.add('delicacy', 'recipe-style');
  const pieImg = new Image();
  pieImg.src = piePic;
  pie.appendChild(pieImg);
  pie.appendChild(recipeType('Pie'));
  pie.appendChild(priceOrder());


  // Fry
  const fry = createTag('div');
  fry.classList.add('delicacy', 'recipe-style');
  const fryImg = new Image();
  fryImg.src = fryPic;
  fry.appendChild(fryImg);
  fry.appendChild(recipeType('Fries'));
  fry.appendChild(priceOrder());

  menulist.appendChild(salad);
  menulist.appendChild(pie);
  menulist.appendChild(fry);

  menuDiv.classList.add('diningDiv', 'menu-div');

  function menuContent() {
    menuDiv.appendChild(subHeader);
    menuDiv.appendChild(menulist);

    return menuDiv;
  }

  return { menuContent };
})();


export default menu;