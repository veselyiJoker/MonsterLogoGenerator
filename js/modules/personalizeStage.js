'use strict';

import {activeLogosDataItem, clearDOMItem, generateDOMItem, personalizationPopup, resultLogo} from "./common.js";

const personalizationList = document.querySelector('.personalize-list');
const personalizationPopupFields = personalizationPopup.querySelector('.personalize-popup-fields-list');

let targetPersonalizeBtn;
let personalizationType;
let activePopupField;

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
    activePopupField = e.currentTarget.dataset.popupField;
    if (activePopupField === 'text') {
        resultLogo.querySelector('.result-logo-text').textContent = e.currentTarget.querySelector('input').value;
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
                        activeLogosDataItemPopup[key].contentType === 'text' ?
                        'type="text" placeholder="MLG"' : 
                        'type="number" min="1" placeholder="16"' 
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


const generatePersonalizationText = (personalizationText) => {
    const template = `
        <text class="result-logo-text" x="50%" y="50%">${personalizationText}</text>
    `;
    return template;
}


const changePersonalizationType = (personalizationType, activeLogosDataItem) => {
    personalizationPopupFields.appendChild(generatePersonalizationPopupFields(activeLogosDataItem.personalize[personalizationType].popupFields));

    switch (personalizationType) {
        case 'singleLine':
            activePopupField = 'text';
        break;
        case 'xLetters':
            activePopupField = 'textTop';
        break;
    }

    if (personalizationType !== 'none') {
        if (!resultLogo.querySelector('.result-logo-text')) {
            resultLogo.innerHTML += generatePersonalizationText(activeLogosDataItem.personalize[personalizationType].popupFields[activePopupField].content);
        }
        personalizationPopup.classList.add('personalize-popup-active');
    } else {
        if (resultLogo.querySelector('.result-logo-text')) resultLogo.querySelector('.result-logo-text').remove();
        personalizationPopup.classList.remove('personalize-popup-active');
    }
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