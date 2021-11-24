'use strict';

import {activeLogosDataItem, clearDOMItem, generateDOMItem, resultLogo} from "../common.js";

const swagList = document.querySelector('.swag-list');

const chooseKeyIcon = (key) => {
    return key === 'none' ? 'none' : `<svg><use href="#${key}-icon"></use></svg>`;
}


const generateSwagList = () => {
    const fragment = document.createDocumentFragment();
    
    clearDOMItem(swagList);

    for (let key in activeLogosDataItem.swag) {
        const template = ` 
            <li class="stages-item swag-item">
                <button class="stages-btn swag-btn" data-swag="${key}">
                    ${chooseKeyIcon(key)}
                </button>
            </li>
        `;
        fragment.append(generateDOMItem(template));
    };
    return fragment;
}


const onSwagListClick = (e) => {

    if (e.target.closest('.swag-btn')) {

        if (!(e.target.closest('.swag-btn').dataset.swag === 'none')) {

            if (!(e.target.closest('.swag-btn').classList.contains('stages-btn-active'))) {
                changeSwag(e.target.closest('.swag-btn').dataset.swag);
                e.target.closest('.swag-btn').classList.add('stages-btn-active');
            } else {
                e.target.closest('.swag-btn').classList.remove('stages-btn-active');
                if (resultLogo.querySelector(`.${e.target.closest('.swag-btn').dataset.swag}`)) {
                    resultLogo.querySelector(`.${e.target.closest('.swag-btn').dataset.swag}`).remove();
                } else {
                    changeSwag(e.target.closest('.swag-btn').dataset.swag);
                }
            }

        } else {
            swagList.querySelectorAll('.swag-btn').forEach(elem => {
                elem.classList.remove('stages-btn-active');
            });
            changeSwag(e.target.closest('.swag-btn').dataset.swag);
        }


    }

}


const changeSwag = (shapeName) => {
    switch (shapeName) {
        case 'mustache':
            resultLogo.innerHTML += activeLogosDataItem.swag.mustache.shape;
        break;
        case 'coffeeCap':
            resultLogo.innerHTML += activeLogosDataItem.swag.coffeeCap.shape;
        break;
        case 'anchor':
            resultLogo.innerHTML += activeLogosDataItem.swag.anchor.shape;
        break;
        case 'innerCircle':
            resultLogo.innerHTML += activeLogosDataItem.swag.innerCircle.shape;
        break;
        default:
            resultLogo.querySelectorAll('.swag').forEach(elem => {
                elem.remove();
            });
        break;
    }
}

export const initSwagList = () => {
    swagList.append(generateSwagList());
    swagList.addEventListener('click', onSwagListClick)
}