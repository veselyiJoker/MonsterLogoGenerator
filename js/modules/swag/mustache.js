'use strict';

const baseMustacheSVG = `
    <path class="swag mustache" fill="#020202" d="M255.8,345.9c-11.1-18.6-44.5,20.1-56.2-0.5c2.9,12.8,22.6,25.7,39.8,22c3.8-0.8,12.5-3.7,16.4-9.1
        c3.9,5.4,12.5,8.3,16.4,9.1c17.3,3.8,36.9-9.2,39.8-21.9C300.3,366,266.9,327.3,255.8,345.9z"/>
`;

const shieldMustacheSVG = `
    <path class="swag mustache" fill="#020202" d="M256.1,339.5c-12.1-20.4-48.8,22-61.7-0.5c3.2,14,24.8,28.2,43.6,24.1c4.2-0.9,13.7-4.1,18-10
        c4.3,5.9,13.7,9.1,18,10c18.9,4.1,40.4-10,43.6-24C304.9,361.6,268.2,319.1,256.1,339.5z"/>
`;

const rhombusMustacheSVG = `
    <path class="swag mustache" fill="#020202" d="M255.7,327.9c-9.5-15.9-38.2,17.2-48.3-0.4c2.5,11,19.4,22.1,34.2,18.9c3.3-0.7,10.7-3.2,14.1-7.8
        c3.4,4.6,10.8,7,14.1,7.8c14.8,3.2,31.7-7.9,34.2-18.8C293.9,345.1,265.2,311.9,255.7,327.9z"/>
`;

const wreathMustacheSVG = `
    <path class="swag mustache" fill="#020202" d="M256,331.2c-12.5-20.9-50,22.6-63.2-0.6c3.3,14.4,25.4,28.9,44.8,24.7c4.3-0.9,14.1-4.2,18.4-10.2
    c4.4,6.1,14.1,9.3,18.4,10.2c19.5,4.3,41.5-10.3,44.8-24.6C306,353.8,268.5,310.3,256,331.2z"/>
`;

const crossMustachSVG = `
    <path class="swag mustache" fill="#020202" d="M256,370.9c-11.9-20-47.8,21.6-60.4-0.5c3.2,13.8,24.3,27.7,42.8,23.6c4.1-0.9,13.4-4,17.7-9.8
        c4.2,5.8,13.5,8.9,17.7,9.8c18.6,4.1,39.6-9.8,42.8-23.5C303.8,392.6,267.9,351,256,370.9z"/>
`;

export const getMustache = (shapeName) => {
    switch (shapeName) { 

        case 'circle': return baseMustacheSVG;
        case 'wreath': return wreathMustacheSVG;
        case 'shield': return shieldMustacheSVG;
        case 'rhombus': return rhombusMustacheSVG;
        case 'cross': return crossMustachSVG;

        default: return baseMustacheSVG;
    }
}