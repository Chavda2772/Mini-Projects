var container = document.querySelector('.container');
var projectList = [
  {
    hyperLink: '#',
    previewImg: 'images/t1.jpeg',
    imgAltText: 'T1',
    title: 'Title tutorial 1',
    description: 'Description Tutorial 1',
  },
  {
    hyperLink: '#',
    previewImg: 'images/t2.jpeg',
    imgAltText: 'T2',
    title: 'Title tutorial 2',
    description: 'Description Tutorial 2',
  },
  {
    hyperLink: '#',
    previewImg: 'images/t3.jpeg',
    imgAltText: 'T3',
    title: 'Title tutorial 3',
    description: 'Description Tutorial 3',
  },
  {
    hyperLink: '#',
    previewImg: 'images/t4.jpeg',
    imgAltText: 'T4',
    title: 'Title tutorial 4',
    description: 'Description Tutorial 4',
  },
  {
    hyperLink: '#',
    previewImg: 'images/t5.jpeg',
    imgAltText: 'T5',
    title: 'Title tutorial 5',
    description: 'Description Tutorial 5',
  },
  {
    hyperLink: '#',
    previewImg: 'images/t6.jpeg',
    imgAltText: 'T6',
    title: 'Title tutorial 6',
    description: 'Description Tutorial 6',
  },
  {
    hyperLink: '#',
    previewImg: 'images/t7.jpeg',
    imgAltText: 'T7',
    title: 'Title tutorial 7',
    description: 'Description Tutorial 7',
  },
  {
    hyperLink: '#',
    previewImg: 'images/t8.jpeg',
    imgAltText: 'T8',
    title: 'Title tutorial 8',
    description: 'Description Tutorial 8',
  }
];

function createCard() {
  projectList.forEach((card, index) => {
    var cardEl = document.createElement('a');
    cardEl.href = card.hyperLink;
    cardEl.innerHTML = `
          <div class='card'>
              <div class='imgBox'>
                  <img src='${card.previewImg}' alt='${card.imgAltText}' />
              </div>
              <div class='content'>
                  <h2>${card.title}</h2>
                  <p>${card.description}</p>
              </div>
          </div>`;
    container.appendChild(cardEl);
  });
}

createCard();
