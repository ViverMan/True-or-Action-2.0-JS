import phrasesTrueHot from '../../data/question-true-hot.json'
import phrasesActionHot from '../../data/question-action-hot.json'
function phrasesGame() {
    let phrase = document.querySelector('.questionsTrue__text');
    let phrase2 = document.querySelector('.questionsTrue__text2');
    const phraseBtnTrueHot = document.querySelector('#questionsTrueBtnTrue');
    const phraseBtnActionHot = document.querySelector('#questionsTrueBtnAction');

    if (phraseBtnTrueHot, phraseBtnActionHot) {

        phraseBtnTrueHot.addEventListener('click', function () {
            phrase.classList.add('dispNone')
            phrase2.classList.add('active-on')

            setTimeout(() => {
                phrase2.classList.remove('active-on')
            }, 800)

            let rand = Math.floor(Math.random() * phrasesTrueHot.length);
            phrase2.textContent = phrasesTrueHot[rand];

            if (phrase2.textContent === '') {
                phrase2.textContent = 'Все вопросы закончились, пожалуйста, перезагрузите страницу';
            }
        })

        phraseBtnActionHot.addEventListener('click', function () {
            phrase.classList.add('dispNone')
            phrase2.classList.add('active-on')

            setTimeout(() => {
                phrase2.classList.remove('active-on')
            }, 800)

            let rand = Math.floor(Math.random() * phrasesActionHot.length);
            phrase2.textContent = phrasesActionHot[rand];

            if (phrase2.textContent === '') {
                phrase2.textContent = 'Все вопросы закончились, пожалуйста, перезагрузите страницу';
            }
        })
    }
}

export default phrasesGame