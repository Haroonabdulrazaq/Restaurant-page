const contact =(()=>{

  function createTag(type){
    let element = document.createElement(type);

    return element;
  }
  let contactDiv = createTag('div');

  let form = createTag('form');
  let subHeader = createTag('h3');
  let name = createTag('input');
  let mail = createTag('input');
  let food = createTag('input');
  let address = createTag('input');
  let button = createTag('input');

  subHeader.textContent="...Place your Order now"

  name.setAttribute('type', 'text' );
  name.setAttribute('placeholder', 'Username' );

  mail.setAttribute('type', 'email' );
  mail.setAttribute('placeholder', 'example@gmail.com' );

  food.setAttribute('type', 'text' );
  food.setAttribute('placeholder', 'Food' );

  address.setAttribute('type', 'address');
  address.setAttribute('placeholder', 'Address' );

  button.setAttribute('value', 'Submit');
  button.setAttribute('type', 'submit');
  button.classList.add('button')

  form.appendChild(subHeader)
  form.appendChild(name)
  form.appendChild(mail)
  form.appendChild(food)
  form.appendChild(address)
  form.appendChild(button)

  contactDiv.classList.add('diningDiv')

  function contactContent(){
    contactDiv.appendChild(form);
    // contactDiv.classList.add('contactDiv');

    return contactDiv;
  }

  return {contactContent}


})();

export default contact