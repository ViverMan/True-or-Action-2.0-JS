import container from "./container.js"
import data from "../data/db.json"
import logo from "../img/logo/logo.png"

function header() {
    const title = data.header.title
    const rules = data.header.rules
    const alt = data.header.logo.alt
    // const imgUrl = data.header.logo.img
    const link = data.header.linkText

    const header = document.createElement('header');
    header.classList.add('header');
    header.setAttribute('id', 'header');

    const headerContainer = container();
    header.appendChild(headerContainer);

    const headerRow = document.createElement('div');
    headerRow.classList.add('header__row');
    headerContainer.appendChild(headerRow);

    const headerLink = document.createElement('a');
    headerLink.setAttribute('href', link);
    headerLink.classList.add('header__link');
    headerRow.appendChild(headerLink);

    const headerLogo = document.createElement('img');
    headerLogo.classList.add('header__logo');
    headerLogo.setAttribute('src', logo);
    headerLogo.setAttribute('alt', alt);
    headerLink.appendChild(headerLogo);

    const headerTitle = document.createElement('a');
    headerTitle.setAttribute('href', link);
    headerTitle.classList.add('header__title');
    headerTitle.textContent = title;
    headerRow.appendChild(headerTitle);

    const headerRules = document.createElement('button');
    headerRules.classList.add('header__rules');
    headerRules.textContent = rules;
    headerRow.appendChild(headerRules);

    return header
}

export default header
