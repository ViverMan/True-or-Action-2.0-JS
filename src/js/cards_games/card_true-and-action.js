import data from "../../data/db.json"
import imgUrl from "../../img/cards/true.jpg"
function cardTrueAndAction() {
    const title = data.basic.games.game1.title
    const alt = data.basic.games.game1.alt
    // const imgUrl = data.basic.games.game1.img
    const link = data.basic.games.game1.link

    const cardTrueAndAction = document.createElement('a');
    cardTrueAndAction.classList.add('basic__card');
    cardTrueAndAction.setAttribute('id', 'cardTrueAndAction');
    cardTrueAndAction.setAttribute('href', link);

    const cardTrueAndActionImg = document.createElement('img');
    cardTrueAndActionImg.classList.add('basic__card-img');
    cardTrueAndActionImg.setAttribute('src', imgUrl);
    cardTrueAndActionImg.setAttribute('alt', alt);
    cardTrueAndAction.appendChild(cardTrueAndActionImg);

    const cardTrueAndActionTitle = document.createElement('h3');
    cardTrueAndActionTitle.classList.add('basic__card-title');
    cardTrueAndActionTitle.textContent = title;
    cardTrueAndAction.appendChild(cardTrueAndActionTitle);

    return cardTrueAndAction
}

export default cardTrueAndAction