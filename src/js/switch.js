import data from "../data/db.json"
import questionsStrip from "./questions/questions-strip.js"
import questionsTrue from "./questions/questions-true.js"
import questionsTrueNormal from "./questions-games/questions-true-normal.js"
import questionsTrueHot from "./questions-games/questions-true-hot.js"
import questionsStripCouple from "./questions-games/questions-couple-strip.js"
import questionsStripThree from "./questions-games/questions-three-strip.js"
import bgNormal from "../img/normal/bg-normal.jpg"
import bgHot from "../img/hot/bg-hot.jpg"
function switcher() {
    const titleTrue = data.difficulty.true.title
    const btnText1True = data.difficulty.true.btnText1
    const btnText2True = data.difficulty.true.btnText2

    const titleStrip = data.difficulty.strip.title
    const btnText1Strip = data.difficulty.strip.btnText1
    const btnText2Strip = data.difficulty.strip.btnText2

    // const bgNormal = data.gameTrue.bgNormal
    // const bgHot = data.gameTrue.bgHot
    //--- выбор игры, подставляю в кнопки и тайтл нужное---//
    document.querySelector('#cardTrueAndAction').addEventListener('click', () => {
        document.querySelector('#difficulty').style.display = 'flex';
        document.querySelector('#basicRow').style.display = 'none';

        document.querySelector('#difficultyTitle').textContent = titleTrue;
        document.querySelector('#btnNormal').textContent = btnText1True;
        document.querySelector('#btnHot').textContent = btnText2True;
    });

    document.querySelector('#cardStrip').addEventListener('click', () => {
        document.querySelector('#difficulty').style.display = 'flex';
        document.querySelector('#basicRow').style.display = 'none';

        document.querySelector('#difficultyTitle').textContent = titleStrip;
        document.querySelector('#btnNormal').textContent = btnText1Strip;
        document.querySelector('#btnHot').textContent = btnText2Strip;
    });
    //-----------------------------------------------------//
    //------------------ при клике "На главную" -----------//
    document.querySelector('#difficultyLink').addEventListener('click', () => {
        document.querySelector('#difficulty').style.display = 'none';
        document.querySelector('#basicRow').style.display = 'block';
    });
    //-----------------------------------------------------//

    //---при клике на кнопку "сложности" подставляю нужный BG---//
    let el = document.getElementsByClassName('difficulty__btn');

    for (let i = 0; i < el.length; i++) {
        el[i].addEventListener('click', () => {
            switch (el[i].id) {
                case 'btnNormal':
                    document.querySelector('#basicBg').src = bgNormal;
                    break;
                case 'btnHot':
                    document.querySelector('#basicBg').src = bgHot;
                    break;
            }
            if (el[i].id === 'btnNormal' && el[i].textContent === data.difficulty.true.btnText1) {
                questionsTrue();
                questionsTrueNormal();
                questionsTrueHot();
            }
            else if (el[i].id === 'btnNormal' && el[i].textContent === data.difficulty.strip.btnText1) {
                questionsStrip();
                questionsStripCouple();
            }
            if (el[i].id === 'btnHot' && el[i].textContent === data.difficulty.true.btnText2) {
                questionsTrue();
                questionsTrueNormal();
                questionsTrueHot();
            }
            else if (el[i].id === 'btnHot' && el[i].textContent === data.difficulty.strip.btnText2) {
                questionsStrip();
                questionsStripThree();
            }
            document.querySelector('#difficulty').style.display = 'none';
        });
    }
    //-----------------------------------------------------//
    return switcher
}

export default switcher