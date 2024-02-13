
const imgSrcAfterYes = 'https://media.tenor.com/WXjpEaRaK54AAAAM/heart.gif';
const titleTextAfterYes = 'Ура!!! Спасибо ❤️❤️❤️';

const img = document.querySelector('.img');
const title = document.querySelector('.title');
const btnsContainer = document.querySelector('.buttons_container');
const btnNo = document.querySelector('.btn_no');
const btnYes = document.querySelector('.btn_yes');

btnNo.addEventListener('mouseover', () => {
  btnNo.style.position = 'absolute';
  const left = Math.floor(Math.random() * (document.documentElement.clientWidth - btnNo.clientWidth - btnNo.clientWidth));
  const top = Math.floor(Math.random() * (document.documentElement.clientHeight - btnNo.clientHeight));
  btnNo.style.top = `${top}px`;
  btnNo.style.left = `${left}px`;
})

btnYes.addEventListener('click', () => {
  btnsContainer.remove()
  img.src = imgSrcAfterYes;
  title.innerHTML = titleTextAfterYes;
})