function difficulty() {

    const difficulty = document.createElement('div');
    difficulty.classList.add('difficulty');
    difficulty.setAttribute('id', 'difficulty');

    const difficultyTitle = document.createElement('h4');
    difficultyTitle.classList.add('difficulty__title');
    difficultyTitle.setAttribute('id', 'difficultyTitle');
    difficulty.appendChild(difficultyTitle);

    const BtnWrapper = document.createElement('div');
    BtnWrapper.classList.add('difficulty__btn-wrapper');
    difficulty.appendChild(BtnWrapper);

    const btnNormal = document.createElement('button');
    btnNormal.classList.add('difficulty__btn');
    btnNormal.setAttribute('id', 'btnNormal');
    BtnWrapper.appendChild(btnNormal);

    const btnHard = document.createElement('button');
    btnHard.classList.add('difficulty__btn');
    btnHard.setAttribute('id', 'btnHot');
    BtnWrapper.appendChild(btnHard);

    const link = document.createElement('button');
    link.classList.add('difficulty__link');
    link.setAttribute('id', 'difficultyLink');
    link.textContent = 'на главную';
    difficulty.appendChild(link);

    return difficulty
}

export default difficulty