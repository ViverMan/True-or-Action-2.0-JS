import data from "../../data/db.json"
import difficulty from "../difficulty/difficulty";
import bg from "../../img/bg/bg-main.jpg"
function questionsTrue() {
    const questionsTrue = document.createElement('div');
    questionsTrue.classList.add('questionsTrue', 'questions__wrapper');
    questionsTrue.setAttribute('id', 'questionsTrue');
    document.getElementById('basic').appendChild(questionsTrue);

    const questionsTrueTextWrapper = document.createElement('div');
    questionsTrueTextWrapper.classList.add('questionsTrue__text-wrapper');
    questionsTrue.appendChild(questionsTrueTextWrapper);

    const questionsTrueText = document.createElement('p');
    questionsTrueText.classList.add('questionsTrue__text', 'questions-text');
    questionsTrueText.setAttribute('id', 'questionsTrueText');
    questionsTrueTextWrapper.appendChild(questionsTrueText);
    questionsTrueText.textContent = data.gameTrue.title;

    const questionsTrueText2 = document.createElement('p');
    questionsTrueText2.classList.add('questionsTrue__text2', 'questions-text');
    questionsTrueText2.setAttribute('id', 'questionsTrueText2');
    questionsTrueTextWrapper.appendChild(questionsTrueText2);

    const questionsTrueBtnWrapper = document.createElement('div');
    questionsTrueBtnWrapper.classList.add('questionsTrue__btn-wrapper');
    questionsTrue.appendChild(questionsTrueBtnWrapper);

    const questionsTrueBtnTrue = document.createElement('button');
    questionsTrueBtnTrue.classList.add('questionsTrue__btn-true', 'btn-game');
    questionsTrueBtnTrue.setAttribute('id', 'questionsTrueBtnTrue');
    questionsTrueBtnWrapper.appendChild(questionsTrueBtnTrue);
    questionsTrueBtnTrue.textContent = data.gameTrue.btnText1;

    const questionsTrueBtnAction = document.createElement('button');
    questionsTrueBtnAction.classList.add('questionsTrue__btn-action', 'btn-game');
    questionsTrueBtnAction.setAttribute('id', 'questionsTrueBtnAction');
    questionsTrueBtnWrapper.appendChild(questionsTrueBtnAction);
    questionsTrueBtnAction.textContent = data.gameTrue.btnText2;

    const questionsTrueBtnBack = document.createElement('button');
    questionsTrueBtnBack.classList.add('questionsTrue__btn-back', 'btn-back');
    questionsTrueBtnBack.setAttribute('id', 'questionsTrueBtnBack');
    questionsTrue.appendChild(questionsTrueBtnBack);
    questionsTrueBtnBack.textContent = 'назад';

    document.querySelector('#questionsTrueBtnBack').addEventListener('click', () => {

        document.querySelector('#questionsTrue').remove();
        document.querySelector('#basicBg').src = bg;
        document.querySelector('#difficulty').style.display = 'flex';
        difficulty();
        return
    })

    return questionsTrue
}

export default questionsTrue