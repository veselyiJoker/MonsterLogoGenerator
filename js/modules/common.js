'use strict';

import { circleSVG } from './shapes/circle.js';
import { crossSVG } from './shapes/cross.js';
import { rhombusSVG } from './shapes/rhombus.js';
import { shieldSVG } from  './shapes/shield.js';
import { wreathSVG } from './shapes/wreath.js';
import { mustacheSVG } from './swag/mustache.js';

export const resultLogo = document.querySelector('.result-logo');
export const personalizationPopup = document.querySelector('.personalize-popup');

export let letNextStage = false;
export let activeLogosDataItem;
export let activeLogosDataItemKey = '';

export const logosData = {
    circle: {
        iconLink: '#circle-icon',
        shape: circleSVG,
        personalize: {
            none: {
                name: 'none',
            },
            singleLine: {
                name: 'single line',
                popupFields: {
                    fontSize: {
                        name: 'font size',
                        content: 70,
                        contentType: 'number',
                    },
                    text: {
                        name: 'text',
                        content: 'W.R.M.',
                        contentType: 'text',
                    },
                },
            },
        },
        swag: {
            mustache: {
                shape: mustacheSVG,
            },
        },
    },
    shield: {
        iconLink: '#shield-icon',
        shape: shieldSVG,
        personalize: {
            none: {
               name: 'none',
            },
            singleLine: {
                name: 'single line',
                popupFields: {
                    fontSize: {
                        name: 'font size',
                        content: 70,
                        contentType: 'number',
                    },
                    text: {
                        name: 'text',
                        content: 'W.R.M.',
                        contentType: 'text',
                    },
                },
            },
        },
        swag: {
            mustache: {
                shape: mustacheSVG,
            },
        },
    },
    rhombus: {
        iconLink: '#rhombus-icon',
        shape: rhombusSVG,
        personalize: {
            none: {
                name: 'none',
            },
            singleLine: {
                name: 'single line',
                popupFields: {
                    fontSize: {
                        name: 'font size',
                        content: 70,
                        contentType: 'number',
                    },
                    text: {
                        name: 'text',
                        content: 'W.R.M.',
                        contentType: 'text',
                    },
                },
            },
        },
        swag: {
            mustache: {
                shape: mustacheSVG,
            },
        },
    },
    wreath: {
        iconLink: '#wreath-icon',
        shape: wreathSVG,
        personalize: {
            none: {
                name: 'none',
            },
            singleLine: {
                name: 'single line',
                popupFields: {
                    fontSize: {
                        name: 'font size',
                        content: 70,
                        contentType: 'number',
                    },
                    text: {
                        name: 'text',
                        content: 'W.R.M.',
                        contentType: 'text',
                    },
                },
            },
        },
        swag: {
            mustache: {
                shape: mustacheSVG,
            },
        },
    },
    cross: {
        iconLink: '#cross-icon',
        shape: crossSVG,
        personalize: {
            none: {
                name: 'none',
            },
            xLetters: {
                name: 'x letters',
                popupFields: {
                    fontSize: {
                        name: 'font size',
                        content: 70,
                        contentType: 'number',
                    },
                    textTop: {
                        name: 'text top',
                        content: 'x',
                        contentType: 'text',
                    },
                    textRight: {
                        name: 'text right',
                        content: 'x',
                        contentType: 'text',
                    },
                    textBottom: {
                        name: 'text bottom',
                        content: 'x',
                        contentType: 'text',
                    },
                    textLeft: {
                        name: 'text left',
                        content: 'x',
                        contentType: 'text',
                    },
                },
            },
        },
        swag: {
            mustache: {
                shape: mustacheSVG,
            },
        },
    },
};


export const allowNextStage = () => {
    letNextStage = true;
}

export const changeActiveLogosDataItem = (itemKey) => {
    activeLogosDataItem = logosData[itemKey];
}

export const generateDOMItem = (template) => {
    const div = document.createElement('div');
    div.insertAdjacentHTML('beforeend', template);
    return div.firstElementChild;
}

export const clearDOMItem = (item) => {
    item.innerHTML = '';
}