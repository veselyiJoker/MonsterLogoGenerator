'use strict';

import {activeLogosDataItem, clearDOMItem, generateDOMItem, personalizationPopup, resultLogo} from "./common.js";

const personalizationList = document.querySelector('.personalize-list');
const personalizationPopupFields = personalizationPopup.querySelector('.personalize-popup-fields-list');

let targetPersonalizeBtn;
let personalizationType;

const generatePersonalizationList = () => {
    const fragment = document.createDocumentFragment();

    clearDOMItem(personalizationList);

    for (let key in activeLogosDataItem.personalize) {
        const template = `
            <li class="stages-item personalize-item">
                <button class="stages-btn personalize-btn" data-personalize="${key}">
                    ${activeLogosDataItem.personalize[key].name}
                </button>
            </li>
        `;
        fragment.appendChild(generateDOMItem(template));
    };
    
    return fragment;
}


const onPersonalizationPopupFieldInput = (e) => {
    const activePopupField = e.currentTarget.dataset.popupField;

    const alignTextX = (elem) => {
        const textWidth = elem.getComputedTextLength();
        elem.setAttribute('x', `${256 - textWidth / 2}px`);
    }

    const alignTextY = (elem) => {
        const textHeight = window.getComputedStyle(elem).lineHeight.substr(0, window.getComputedStyle(elem).lineHeight.length - 2);
        elem.setAttribute('y', `${256 + (textHeight / 2) - (textHeight * 0.197530864)}px`);
    }

    switch (activePopupField) {
        case 'font size':
            resultLogo.querySelectorAll('.result-logo-text').forEach(elem => {
                elem.style.fontSize = `${e.currentTarget.querySelector('input').value >= 8 && e.currentTarget.querySelector('input').value <= 512 ? e.currentTarget.querySelector('input').value : 8}px`;
                if (elem.classList.contains('result-logo-text-top')) {
                    alignTextX(elem);
                    const textTHeight = window.getComputedStyle(elem).lineHeight.substr(0, window.getComputedStyle(elem).lineHeight.length - 2);
                    elem.setAttribute('y', `${122 + (textTHeight / 2) - (textTHeight * 0.197530864)}px`);
                } else if (elem.classList.contains('result-logo-text-right')) {
                    alignTextY(elem);
                    const textRWidth = elem.getComputedTextLength();
                    elem.setAttribute('x', `${388 - textRWidth / 2}px`);
                } else if (elem.classList.contains('result-logo-text-bottom')) {
                    alignTextX(elem);
                    const textBHeight = window.getComputedStyle(elem).lineHeight.substr(0, window.getComputedStyle(elem).lineHeight.length - 2);
                    elem.setAttribute('y', `${390 + (textBHeight / 2) - (textBHeight * 0.197530864)}`);
                } else if (elem.classList.contains('result-logo-text-left')) {
                    alignTextY(elem);
                    const textLWidth = elem.getComputedTextLength();
                    elem.setAttribute('x', `${125 - textLWidth / 2}px`);
                } else {
                    alignTextX(elem);
                    alignTextY(elem);
                }
            });
        break;
        case 'text':
            resultLogo.querySelector('.result-logo-text').textContent = e.currentTarget.querySelector('input').value;
            alignTextX(resultLogo.querySelector('.result-logo-text'));
            alignTextY(resultLogo.querySelector('.result-logo-text'));
        break;
        case 'text top': 
            resultLogo.querySelector('.result-logo-text-top').textContent = e.currentTarget.querySelector('input').value;
            alignTextX(resultLogo.querySelector('.result-logo-text-top'));
        break;
        case 'text right': 
            resultLogo.querySelector('.result-logo-text-right').textContent = e.currentTarget.querySelector('input').value;
            const textRWidth = resultLogo.querySelector('.result-logo-text-right').getComputedTextLength();
            resultLogo.querySelector('.result-logo-text-right').setAttribute('x', `${388 - textRWidth / 2}px`);
        break;
        case 'text bottom': 
            resultLogo.querySelector('.result-logo-text-bottom').textContent = e.currentTarget.querySelector('input').value;
            alignTextX(resultLogo.querySelector('.result-logo-text-bottom'));
        break;
        case 'text left': 
            resultLogo.querySelector('.result-logo-text-left').textContent = e.currentTarget.querySelector('input').value;
            alignTextY(resultLogo.querySelector('.result-logo-text-left'));

            const textLWidth = resultLogo.querySelector('.result-logo-text-left').getComputedTextLength();
            resultLogo.querySelector('.result-logo-text-left').setAttribute('x', `${125 - textLWidth / 2}px`);
        break;
    } 

}


const generatePersonalizationPopupFields = (activeLogosDataItemPopup) => {
    const fragment = document.createDocumentFragment();

    clearDOMItem(personalizationPopupFields);

    for (let key in activeLogosDataItemPopup) {

        const template = `
            <li data-popup-field="${activeLogosDataItemPopup[key].name}">
                ${activeLogosDataItemPopup[key].name}
                <input
                    ${
                        activeLogosDataItemPopup[key].contentType === 'text' 
                        ? `type="text" placeholder="${activeLogosDataItemPopup[key].content}"` 
                        : `type="number" min="8" max="512" placeholder="${activeLogosDataItemPopup[key].content}"`
                    }
                    value="${activeLogosDataItemPopup[key].content}"
                >
            </li>
        `;

        const newPopupField = generateDOMItem(template);
        newPopupField.addEventListener('input', onPersonalizationPopupFieldInput);

        fragment.appendChild(newPopupField);
    }

    return fragment;
}


const generatePersonalizationText = (personalizationClass, personalizationText, posX, posY) => {
    const template = `
        <text class="${personalizationClass}" x="${posX}px" y="${posY}px" style="font-size: 70px;">${personalizationText}</text>
    `;
    return template;
}


const changePersonalizationType = (personalizationType, activeLogosDataItem) => {
    personalizationPopupFields.appendChild(generatePersonalizationPopupFields(activeLogosDataItem.personalize[personalizationType].popupFields));

    if (resultLogo.querySelectorAll('text')) {
        resultLogo.querySelectorAll('text').forEach(elem => {
            elem.remove();
        });
    }

    switch (personalizationType) {
        case 'singleLine':
            resultLogo.innerHTML += generatePersonalizationText('result-logo-text', activeLogosDataItem.personalize[personalizationType].popupFields['text'].content, 148, 280);
            personalizationPopup.classList.add('personalize-popup-active');
        break;
        case 'xLetters':
            resultLogo.innerHTML += generatePersonalizationText('result-logo-text result-logo-text-top', activeLogosDataItem.personalize[personalizationType].popupFields['textTop'].content, 239, 145);
            resultLogo.innerHTML += generatePersonalizationText('result-logo-text result-logo-text-right', activeLogosDataItem.personalize[personalizationType].popupFields['textRight'].content, 371, 280);
            resultLogo.innerHTML += generatePersonalizationText('result-logo-text result-logo-text-bottom', activeLogosDataItem.personalize[personalizationType].popupFields['textBottom'].content, 239, 415);
            resultLogo.innerHTML += generatePersonalizationText('result-logo-text result-logo-text-left', activeLogosDataItem.personalize[personalizationType].popupFields['textLeft'].content, 108, 280);
            personalizationPopup.classList.add('personalize-popup-active');

        break;
        default:
            personalizationPopup.classList.remove('personalize-popup-active');
        break;
    }

}

personalizationPopup.querySelector('.personalize-popup-clear-btn').onclick = () => {
    personalizationType = targetPersonalizeBtn.dataset.personalize;
    changePersonalizationType(personalizationType, activeLogosDataItem);
}

const onPersonalizationListClick = (e) => {
    if (e.target.closest('.personalize-btn')) {
        if (targetPersonalizeBtn) targetPersonalizeBtn.classList.remove('stages-btn-active');

        targetPersonalizeBtn = e.target.closest('.personalize-btn');
        personalizationType = targetPersonalizeBtn.dataset.personalize;
        targetPersonalizeBtn.classList.add('stages-btn-active');

        changePersonalizationType(personalizationType, activeLogosDataItem);
    }
}

export const initPersonalizationList = () => {
    personalizationList.append(generatePersonalizationList());
    personalizationList.addEventListener('click', onPersonalizationListClick);  
}