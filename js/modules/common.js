'use strict';

import { circleSVG } from './shapes/circle.js';
import { crossSVG } from './shapes/cross.js';
import { rhombusSVG } from './shapes/rhombus.js';
import { shieldSVG } from  './shapes/shield.js';
import { wreathSVG } from './shapes/wreath.js';
import { getAnchor } from './swag/anchor.js';
import { getInnerCircle } from './swag/innerCircle.js';
import { getCoffeeCap } from './swag/coffeeCap.js';
import { getMustache } from './swag/mustache.js';
import { getDoubleLine } from './swag/doubleLine.js';

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
            none: 'none',
            mustache: {
                shape: getMustache('circle'),
            },
            coffeeCap: {
                shape: getCoffeeCap('circle'),
            },
            anchor: {
                shape: getAnchor('circle'),
            },
            innerCircle: {
                shape: getInnerCircle('circle'),
            },
            doubleLine: {
                shape: getDoubleLine('circle'),
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
            none: 'none',
            mustache: {
                shape: getMustache('shield'),
            },
            coffeeCap: {
                shape: getCoffeeCap('shield'),
            },
            anchor: {
                shape: getAnchor('shield'),
            },
            doubleLine: {
                shape: getDoubleLine('shield'),
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
            none: 'none',
            mustache: {
                shape: getMustache('rhombus'),
            },
            coffeeCap: {
                shape: getCoffeeCap('rhombus'),
            },
            anchor: {
                shape: getAnchor('rhombus'),
            },
            doubleLine: {
                shape: getDoubleLine('rhombus'),
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
            none: 'none',
            mustache: {
                shape: getMustache('wreath'),
            },
            coffeeCap: {
                shape: getCoffeeCap('wreath'),
            },
            anchor: {
                shape: getAnchor('wreath'),
            },
            innerCircle: {
                shape: getInnerCircle('wreath'),
            },
            doubleLine: {
                shape: getDoubleLine('wreath'),
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
            none: 'none',
            mustache: {
                shape: getMustache('cross'),
            },
            coffeeCap: {
                shape: getCoffeeCap('cross'),
            },
            anchor: {
                shape: getAnchor('cross'),
            },
            doubleLine: {
                shape: getDoubleLine('cross'),
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