'use strict';

import { letNextStage, personalizationPopup} from "./common.js";
import { initPersonalizationList } from "./personalizeStage.js";


const LAST_STAGE_NUM = 3;

const menuItems = document.querySelectorAll('.menu-item');
const stagesTitle = document.querySelector('.stages-title');
const stagesSlidesWrapper = document.querySelector('.stages-slides-wrapper');
const stagesSlides = stagesSlidesWrapper.querySelectorAll('.stages-slide');
const nextBtn = document.querySelector('.next-btn');

let activeStageNum = 0;

const updateStagesTitle = (stageNum) => {
    switch (stageNum) {
        case 1:
            stagesTitle.textContent = 'Lets Personalize This Shiz';
        break;
        case 2:
            stagesTitle.textContent = 'Add Some Swag';
        break;
        case 3:
            stagesTitle.textContent = 'Download Monster Logo';
        break;
    }
}


const updateStageSlide = (stageNum) => {
    stagesSlides.forEach(elem => {
        elem.classList.remove('stages-slide-active');
    });
    stagesSlides[stageNum].classList.add('stages-slide-active');

    menuItems.forEach(elem => {
        elem.classList.remove('menu-item-active');
    });
    menuItems[stageNum].classList.add('menu-item-active');
}


const nextStage = () => {
    if (activeStageNum < LAST_STAGE_NUM && letNextStage) {

        activeStageNum++;
        updateStageSlide(activeStageNum);

        switch (activeStageNum) {
            case 1: 
                initPersonalizationList();
            break;
            case LAST_STAGE_NUM :
                nextBtn.style.display = 'none';
            break;
        }

        updateStagesTitle(activeStageNum);
    }
}


const onNextBtnClick = () => {
    nextStage();
    personalizationPopup.classList.remove('personalize-popup-active');
}


export const initStages = () => {
    nextBtn.addEventListener('click', onNextBtnClick);
}