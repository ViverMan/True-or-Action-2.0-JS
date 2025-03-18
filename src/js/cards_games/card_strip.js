import data from "../../data/db.json"
import imgUrl from "../../img/cards/strip.jpg"

function cardStrip() {
    const title = data.basic.games.game2.title
    const alt = data.basic.games.game2.alt
    // const imgUrl = data.basic.games.game2.img
    const link = data.basic.games.game2.link

    const cardStrip = document.createElement('a');
    cardStrip.classList.add('basic__card');
    cardStrip.setAttribute('id', 'cardStrip');
    cardStrip.setAttribute('href', link);

    const cardStripImg = document.createElement('img');
    cardStripImg.classList.add('basic__card-img');
    cardStripImg.setAttribute('src', imgUrl);
    cardStripImg.setAttribute('alt', alt);
    cardStrip.appendChild(cardStripImg);

    const cardStripTitle = document.createElement('h3');
    cardStripTitle.classList.add('basic__card-title');
    cardStripTitle.textContent = title;
    cardStrip.appendChild(cardStripTitle);

    return cardStrip
}

export default cardStrip