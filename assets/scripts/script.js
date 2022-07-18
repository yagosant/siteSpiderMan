//verifica se o mouse está sobre o card
function handleMouseEnter() {
  this.classList.add('s-card--hovered');//faz uma modificação na classe, ao passar o card receberá a classe nova
  document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave() {
  this.classList.remove('s-card--hovered');
  document.body.id = '';
}


function addEventListenersToCards() {
  //recebe os elementos HTML dos cards getElementsByClassName - recebe a classe que vai ser trabalhada
  const cardElements = document.getElementsByClassName('s-card');

  //vamos aplicar no for para add uma classe quando o mouse for passado (for do estilo do phyton)
  for (let index = 0; index < cardElements.length; index++) {
    const card = cardElements[index]; //pega o indice do card
    card.addEventListener('mouseenter', handleMouseEnter); // adicionando o evento do card quando o user passar o mouse
    card.addEventListener('mouseleave', handleMouseLeave);
  }
}

//ele spo vai rodar quando houver um evento na pagina HTML, quando o evento acontecer ele roda a função criada
document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);

function selectCarouselItem(selectedButtonElement) {
  const selectedItem = selectedButtonElement.id;
  const carousel = document.querySelector('.s-cards-carousel');
  const transform = carousel.style.transform;
  const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
  const rotateYDeg = -120 * (Number(selectedItem) - 1);
  const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);

  carousel.style.transform = newTransform;

  const activeButtonElement = document.querySelector('.s-controller__button--active');
  activeButtonElement.classList.remove('s-controller__button--active');
  selectedButtonElement.classList.add('s-controller__button--active');
}