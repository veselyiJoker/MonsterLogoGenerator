const baseInnerCircleSVG = `
    <circle class="swag innerСircle" fill="none" stroke="#000000" stroke-width="5" stroke-miterlimit="10" cx="256.7" cy="259" r="154.4"/>
`;

const wreathCircleSVG = `
    <circle class="swag innerСircle" fill="none" stroke="#000000" stroke-width="5" stroke-miterlimit="10" cx="256.7" cy="249" r="154.4"/>
`;

export const getInnerCircle = (shapeName) => {
    switch (shapeName) { 
        case 'wreath': return wreathCircleSVG;
        default: return baseInnerCircleSVG;
    }
}