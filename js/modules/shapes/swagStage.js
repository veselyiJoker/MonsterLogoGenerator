'use strict';

import {activeLogosDataItem, clearDOMItem, generateDOMItem, resultLogo} from "../common.js";

const swagList = document.querySelector('.swag-list');

const generateSwagList = () => {
    const fragment = document.createDocumentFragment();
    
    clearDOMItem(swagList);

    for (let key in activeLogosDataItem.swag) {
        const template = ` 
            <li class="stages-item swag-item">
                <button class="stages-btn swag-btn" data-swag="${key}">
                    <svg>
                        <use href="#mustache-icon"></use>
                    </svg>
                </button>
            </li>
        `;
        fragment.append(generateDOMItem(template));
    };
    return fragment;
}


const onSwagListClick = (e) => {
    if (e.target.closest('.swag-btn')) {
        resultLogo.innerHTML += activeLogosDataItem.swag.mustache.shape;
    }
}


const changeSwag = (shapeName) => {
    switch (shapeName) {
        case 'mustache':
            resultLogo.innerHTML += activeLogosDataItem.swag.mustache.shape;
        break;
        default:
        break;
    }
}

export const initSwagList = () => {
    swagList.append(generateSwagList());
    swagList.addEventListener('click', onSwagListClick)
}