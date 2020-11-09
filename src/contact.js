const contact =(()=>{

  function createTag(type){
    let element = document.createElement(type);

    return element;
  }
  let contactDiv = createTag('div');

  let form = createTag('form');


  function contactContent(){
    contactDiv.appendChild(form);
    // contactDiv.classList.add('contactDiv');

    return contactDiv;
  }

  return {contactContent}


})();

export default contact