'use strict';

import { resultLogo } from './modules/common.js';
import { initStages } from './modules/stages.js';
import { initShapeList } from './modules/shapesStage.js';

initShapeList();
initStages();

const downloadBtn = document.querySelector('.download-btn');

const onDownloadBtnClick = () => {
    const svgData = resultLogo.outerHTML;
    const svgBlob = new Blob([svgData], {type:"image/svg+xml;charset=utf-8"});
    const svgUrl = URL.createObjectURL(svgBlob);
    const downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = "monsterLogo.svg";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
};


downloadBtn.addEventListener('click', onDownloadBtnClick);