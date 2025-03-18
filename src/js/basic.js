import data from "../data/db.json"
import cardTrueAndAction from "./cards_games/card_true-and-action.js"
import cardStrip from "./cards_games/card_strip.js"
import bg from "../img/bg/bg-main.jpg"

function basic() {
    const title = data.basic.title
    // const bg = data.basic.bg

    const basic = document.createElement('main');
    basic.classList.add('basic');
    basic.setAttribute('id', 'basic');

    const basicBg = document.createElement('img');
    basicBg.classList.add('basic__bg');
    basicBg.setAttribute('id', 'basicBg');
    basicBg.setAttribute('src', bg);
    // basicBg.setAttribute('loading', 'lazy');
    basic.appendChild(basicBg);

    const basicRow = document.createElement('div');
    basicRow.classList.add('basic__row');
    basicRow.setAttribute('id', 'basicRow');
    basic.appendChild(basicRow);

    const basicTitle = document.createElement('h2');
    basicTitle.classList.add('basic__title');
    basicTitle.textContent = title;
    basicRow.appendChild(basicTitle);

    const basicCardsWrapper = document.createElement('div');
    basicCardsWrapper.classList.add('basic__cards-wrapper');
    basicRow.appendChild(basicCardsWrapper);

    basicCardsWrapper.appendChild(cardTrueAndAction());
    basicCardsWrapper.appendChild(cardStrip());

    return basic
}

export default basic