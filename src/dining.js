const dining =(()=>{

    function createTag(type){
      let element = document.createElement(type);
  
      return element;
    }
    let diningDiv = createTag('div');

    let para = createTag('p');
    para.textContent = `Oslo Diner is the best Dining in the world, 
    we have been rated by bater-rater 9 times in the last decades as the best,
    We deliver all kind of delicacies to your door steps for no added charges.
    Check out our menu and place your order today.
    Oslo Diner is the best Dining in the world, 
    we have been rated by bater rater 9 times in the last decades as the best,
    We deliver all kind of delicacies to your door steps for no added charges.
    Check out our menu and place your order today.`;

    function diningContent(){
      diningDiv.appendChild(para);
      diningDiv.classList.add('diningDiv');

      return diningDiv;
    }

    return {diningContent}

  
})();

 export default dining