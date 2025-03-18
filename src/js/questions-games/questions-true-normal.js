import phrasesTrueNormal from '../../data/question-true-normal.json'
import phrasesActionNormal from '../../data/question-action-normal.json'
function phrasesGame() {
    let phrase = document.querySelector('.questionsTrue__text');
    let phrase2 = document.querySelector('.questionsTrue__text2');
    const phraseBtnTrueNormal = document.querySelector('#questionsTrueBtnTrue');
    const phraseBtnActionNormal = document.querySelector('#questionsTrueBtnAction');

    if (phraseBtnTrueNormal, phraseBtnActionNormal) {

        phraseBtnTrueNormal.addEventListener('click', function () {
            phrase.classList.add('dispNone')
            phrase2.classList.add('active-on')

            setTimeout(() => {
                phrase2.classList.remove('active-on')
            }, 800)

            let rand = Math.floor(Math.random() * phrasesTrueNormal.length);
            phrase2.textContent = phrasesTrueNormal[rand];

            if (phrase2.textContent === '') {
                phrase2.textContent = 'Все вопросы закончились, пожалуйста, перезагрузите страницу';
            }
        })

        phraseBtnActionNormal.addEventListener('click', function () {
            phrase.classList.add('dispNone')
            phrase2.classList.add('active-on')

            setTimeout(() => {
                phrase2.classList.remove('active-on')
            }, 800)

            let rand = Math.floor(Math.random() * phrasesActionNormal.length);
            phrase2.textContent = phrasesActionNormal[rand];

            if (phrase2.textContent === '') {
                phrase2.textContent = 'Все вопросы закончились, пожалуйста, перезагрузите страницу';
            }
        })
    }
}

export default phrasesGame