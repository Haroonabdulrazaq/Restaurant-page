const dining = (() => {
  function createTag(type) {
    const element = document.createElement(type);

    return element;
  }
  const diningDiv = createTag('div');

  const para = createTag('p');
  para.textContent = `Oslo Diner is the best Dining in the world, 
    we have been rated by bater-rater 9 times in the last decades as the best,
    We deliver all kind of delicacies to your door steps for no added charges.
    Check out our menu and place your order today.
    Oslo Diner is the best Dining in the world, 
    we have been rated by bater rater 9 times in the last decades as the best,
    We deliver all kind of delicacies to your door steps for no added charges.
    Check out our menu and place your order today.`;

  diningDiv.classList.add('diningDiv');

  function diningContent() {
    diningDiv.appendChild(para);

    return diningDiv;
  }

  return { diningContent };
})();

export default dining;