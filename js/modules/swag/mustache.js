'use strict';

const baseMustacheSVG = `
<path class="swag mustache" d="M255.8,327.1c-15.8-26.6-63.6,28.7-80.4-0.7c4.2,18.3,32.3,36.8,56.9,31.4c5.5-1.2,17.8-5.3,23.5-13
	c5.6,7.7,17.9,11.8,23.5,13c24.7,5.4,52.7-13.1,56.9-31.3C319.4,355.9,271.6,300.6,255.8,327.1z"/>
`;

const shieldMustacheSVG = `
    <path class="swag mustache" fill="#020202" d="M255.7,318.5c-12.1-20.4-48.8,22-61.7-0.5c3.2,14,24.8,28.2,43.6,24.1c4.2-0.9,13.7-4.1,18-10
        c4.3,5.9,13.7,9.1,18,10c18.9,4.1,40.4-10,43.6-24C304.5,340.6,267.8,298.1,255.7,318.5z"/>
`;
 
const rhombusMustacheSVG = `
    <path class="swag mustache" fill="#020202" d="M255.8,303.3c-11.7-19.7-47.2,21.3-59.6-0.5c3.1,13.6,24,27.3,42.2,23.3c4.1-0.9,13.2-3.9,17.4-9.6
        c4.2,5.7,13.3,8.7,17.4,9.6c18.3,4,39.1-9.7,42.2-23.2C302.9,324.6,267.5,283.6,255.8,303.3z"/>
`;

const crossMustachSVG = `
    <path class="swag mustache" fill="#020202" d="M256,370.9c-11.9-20-47.8,21.6-60.4-0.5c3.2,13.8,24.3,27.7,42.8,23.6c4.1-0.9,13.4-4,17.7-9.8
    c4.2,5.8,13.5,8.9,17.7,9.8c18.6,4.1,39.6-9.8,42.8-23.5C303.8,392.6,267.9,351,256,370.9z"/>
`;

export const getMustache = (shapeName) => {
    switch (shapeName) { 

        case 'circle': return baseMustacheSVG;
        case 'wreath': return baseMustacheSVG;
        case 'shield': return shieldMustacheSVG;
        case 'rhombus': return rhombusMustacheSVG;
        case 'cross': return crossMustachSVG;

        default: return baseMustacheSVG;
    }
}