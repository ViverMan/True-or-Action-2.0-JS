import data from "../data/db.json"
function modalRules() {
    const rulesGame1 = data.modal.game1.rules;
    const rulesGame2 = data.modal.game2.rules;

    const modalRules = document.createElement('div');
    modalRules.classList.add('modal-rules');
    modalRules.setAttribute('id', 'modalRules');

    const modalRulesContentWrapper = document.createElement('div');
    modalRulesContentWrapper.classList.add('modal-rules__content-wrapper');
    modalRules.appendChild(modalRulesContentWrapper);

    const modalRulesNavigateGame1 = document.createElement('ul');
    modalRulesNavigateGame1.classList.add('modal-rules__navigate');
    modalRulesContentWrapper.appendChild(modalRulesNavigateGame1);

    for (let i = 0; i < rulesGame1.length; i++) {
        const modalRulesItem = document.createElement('li');
        modalRulesItem.classList.add('modal-rules__item');
        modalRulesItem.textContent = rulesGame1[i];
        modalRulesNavigateGame1.appendChild(modalRulesItem);
    }

    const modalRulesNavigateGame2 = document.createElement('ul');
    modalRulesNavigateGame2.classList.add('modal-rules__navigate');
    modalRulesContentWrapper.appendChild(modalRulesNavigateGame2);

    for (let i = 0; i < rulesGame2.length; i++) {
        const modalRulesItem = document.createElement('li');
        modalRulesItem.classList.add('modal-rules__item');
        modalRulesItem.textContent = rulesGame2[i];
        modalRulesNavigateGame2.appendChild(modalRulesItem);
    }

    // --- по клику открытие модалки --- //
    const modalBtn = document.querySelector('.header__rules');
    modalBtn.addEventListener('click', () => {
        modalRules.classList.toggle('modal-rules__open');
    })
    // --- /по клику открытие модалки --- //

    return modalRules;
}

export default modalRules