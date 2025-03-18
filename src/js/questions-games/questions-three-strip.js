import phrasesStripThree from '../../data/question-strip-three.json'
function questionsGame() {
    let phrase = document.querySelector('.questionsStrip__text');
    let phrase2 = document.querySelector('.questionsStrip__text2');
    const phraseBtnStripThree = document.querySelector('#questionsStripBtn');

    if (phraseBtnStripThree) {

        phraseBtnStripThree.addEventListener('click', function () {
            phrase.classList.add('dispNone')
            phrase2.classList.add('active-on')

            setTimeout(() => {
                phrase2.classList.remove('active-on')
            }, 800)

            let rand = Math.floor(Math.random() * phrasesStripThree.length);
            phrase2.textContent = phrasesStripThree[rand];

            if (phrase2.textContent === '') {
                phrase2.textContent = 'Все вопросы закончились, пожалуйста, перезагрузите страницу';
            }
        });
    }
}

export default questionsGame