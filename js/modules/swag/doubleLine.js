const baseDoubleLineSVG = `
    <g class="swag doubleLine" fill="#FFFFFF" stroke="#000000" stroke-width="3" stroke-miterlimit="10">
        <line x1="147.1" y1="303" x2="372" y2="303"/>
        <line x1="144.3" y1="208" x2="369.1" y2="208"/>
    </g>
`;

const shieldDoubleLineSVG = `
    <g class="swag doubleLine" fill="#FFFFFF" stroke="#000000" stroke-width="3" stroke-miterlimit="10">
        <line x1="151.4" y1="303" x2="360.2" y2="303"/>
        <line x1="148.8" y1="208" x2="362.3" y2="208"/>
    </g>
`;

const rhombusDoubleLineSVG = `
    <g class="swag doubleLine" fill="#FFFFFF" stroke="#000000" stroke-width="3" stroke-miterlimit="10">
        <line x1="142.9" y1="303" x2="372" y2="303"/>
        <line x1="140.1" y1="208" x2="369" y2="208"/>
    </g>
`;

export const getDoubleLine = (shapeName) => {
    switch (shapeName) { 
        case 'shield': return shieldDoubleLineSVG;
        case 'rhombus': return rhombusDoubleLineSVG;
        default: return baseDoubleLineSVG;
    }
}