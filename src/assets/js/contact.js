const contact = (() => {
  function createTag(type) {
    const element = document.createElement(type);

    return element;
  }
  const contactDiv = createTag('div');

  const form = createTag('form');
  const subHeader = createTag('h3');
  const name = createTag('input');
  const mail = createTag('input');
  const food = createTag('input');
  const address = createTag('input');
  const button = createTag('input');

  subHeader.textContent = '...Place your Order now';

  name.setAttribute('type', 'text');
  name.setAttribute('placeholder', 'Username');

  mail.setAttribute('type', 'email');
  mail.setAttribute('placeholder', 'example@gmail.com');

  food.setAttribute('type', 'text');
  food.setAttribute('placeholder', 'Food');

  address.setAttribute('type', 'address');
  address.setAttribute('placeholder', 'Address');

  button.setAttribute('value', 'Submit');
  button.setAttribute('type', 'submit');
  button.classList.add('button');

  form.appendChild(subHeader);
  form.appendChild(name);
  form.appendChild(mail);
  form.appendChild(food);
  form.appendChild(address);
  form.appendChild(button);

  contactDiv.classList.add('diningDiv', 'menu-div');

  function contactContent() {
    contactDiv.appendChild(form);
    // contactDiv.classList.add('contactDiv');

    return contactDiv;
  }

  return { contactContent };
})();

export default contact;