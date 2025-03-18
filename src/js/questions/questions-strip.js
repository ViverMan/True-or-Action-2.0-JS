import data from "../../data/db.json"
import difficulty from "../difficulty/difficulty";
import bg from "../../img/bg/bg-main.jpg"
function questionsStrip() {
    const questionsStrip = document.createElement('div');
    questionsStrip.classList.add('questionsStrip', 'questions__wrapper');
    questionsStrip.setAttribute('id', 'questionsStrip');
    document.getElementById('basic').appendChild(questionsStrip);

    const questionsStripTextWrapper = document.createElement('div');
    questionsStripTextWrapper.classList.add('questionsTrue__text-wrapper');
    questionsStrip.appendChild(questionsStripTextWrapper);

    const questionsStripText = document.createElement('p');
    questionsStripText.classList.add('questionsStrip__text', 'questions-text');
    questionsStripText.setAttribute('id', 'questionsStripText');
    questionsStripTextWrapper.appendChild(questionsStripText);
    questionsStripText.textContent = data.gameStrip.title;

    const questionsStripText2 = document.createElement('p');
    questionsStripText2.classList.add('questionsStrip__text2', 'questions-text');
    questionsStripText2.setAttribute('id', 'questionsStripText2');
    questionsStripTextWrapper.appendChild(questionsStripText2);

    const questionsStripBtnTrue = document.createElement('button');
    questionsStripBtnTrue.classList.add('questionsStrip__btn', 'btn-game');
    questionsStripBtnTrue.setAttribute('id', 'questionsStripBtn');
    questionsStrip.appendChild(questionsStripBtnTrue);
    questionsStripBtnTrue.textContent = data.gameStrip.btnText1;

    const questionsStripBtnBack = document.createElement('button');
    questionsStripBtnBack.classList.add('questionsStrip__btn', 'btn-back');
    questionsStripBtnBack.setAttribute('id', 'questionsStripBtnBack');
    questionsStrip.appendChild(questionsStripBtnBack);
    questionsStripBtnBack.textContent = 'Назад';

    document.querySelector('#questionsStripBtnBack').addEventListener('click', () => {

        document.querySelector('#questionsStrip').remove();
        document.querySelector('#basicBg').src = bg;
        document.querySelector('#difficulty').style.display = 'flex';
        difficulty();
        return
    })

    return questionsStrip
}

export default questionsStrip