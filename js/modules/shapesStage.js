'use strict';

import { allowNextStage, changeActiveLogosDataItem, clearDOMItem, logosData, resultLogo } from './common.js';
import { generateDOMItem } from './common.js';

const shapesList = document.querySelector('.shapes-list');


const generateShapeList = () => {
    const fragment = document.createDocumentFragment();
    
    clearDOMItem(shapesList);

    for (let key in logosData) {
        const template = ` 
            <li class="stages-item shape-item">
                <button class="stages-btn shape-btn" data-shape="${key}">
                    <svg>
                        <use href="${logosData[key].iconLink}"></use>
                    </svg>
                </button>
            </li>
        `;
        fragment.append(generateDOMItem(template));
    };
    return fragment;
}


const changeShape = (shapeName) => {
    switch (shapeName) {
        case 'circle':
            resultLogo.innerHTML = logosData.circle.shape;
        break;
        case 'shield': 
            resultLogo.innerHTML = logosData.shield.shape;          
        break;
        case 'rhombus':
            resultLogo.innerHTML = logosData.rhombus.shape;
        break;
        case 'cross':
            resultLogo.innerHTML = logosData.cross.shape;
        break;
        case 'wreath': 
            resultLogo.innerHTML = logosData.wreath.shape;
        break;
        default:
        break;
    }
}


let targetShapeBtn;

const onShapeListClick = (e) => {
    if (e.target.closest('.shape-btn')) {
        if (targetShapeBtn) targetShapeBtn.classList.remove('stages-btn-active');

        targetShapeBtn = e.target.closest('.shape-btn');
        targetShapeBtn.classList.add('stages-btn-active');
        
        changeActiveLogosDataItem(targetShapeBtn.dataset.shape);

        changeShape(targetShapeBtn.dataset.shape);
    
        allowNextStage();
    }
}


export const initShapeList = () => {
    shapesList.append(generateShapeList());
    shapesList.addEventListener('click', onShapeListClick);    
}

