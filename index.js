const getInfoBtn = document.querySelector('.get-info');
const blackOut = document.querySelector('.black-out');
const popUp = document.querySelector('.pop-up');
const popUpCloseBtn = document.querySelector('.pop-up__close-btn');

const showPopUp = (e) => {
  const name = document.querySelector('#name');
  const eMail = document.querySelector('#e-mail');
  const message = document.querySelector('#message');

  blackOut.classList.add('black-out_show');
  popUp.classList.add('pop-up_show');
  name.focus();
  name.value = '';
  eMail.value = '';
  message.value = '';
}

const closePopUp = (e) => {
  blackOut.classList.remove('black-out_show');
  popUp.classList.remove('pop-up_show');
}

const submitPopUp = (e) => {
  const formElems = e.target.elements;

  e.preventDefault();
  console.log(`Sent:\nName = ${formElems.name.value}\nE-Mail = ${formElems['e-mail'].value}\nMessage = ${formElems.message.value}`);
  closePopUp();
}

getInfoBtn.addEventListener('click', showPopUp);
popUpCloseBtn.addEventListener('click', closePopUp);
popUp.addEventListener('submit', submitPopUp)