import phrasesStripCouple from '../../data/question-strip-couple.json'
function questionsGame() {
    let phrase = document.querySelector('.questionsStrip__text');
    let phrase2 = document.querySelector('.questionsStrip__text2');
    const phraseBtnStripCouple = document.querySelector('#questionsStripBtn');

    if (phraseBtnStripCouple) {

        phraseBtnStripCouple.addEventListener('click', function () {
            phrase.classList.add('dispNone')
            phrase2.classList.add('active-on')

            setTimeout(() => {
                phrase2.classList.remove('active-on')
            }, 800)

            let rand = Math.floor(Math.random() * phrasesStripCouple.length);
            phrase2.textContent = phrasesStripCouple[rand];

            if (phrase2.textContent === '') {
                phrase2.textContent = 'Все вопросы закончились, пожалуйста, перезагрузите страницу';
            }
        });
    }
}

export default questionsGame