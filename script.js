const filters = {
    brightness: {
        value: 100, 
        min: 0, 
        max: 200,
        unit: "%"
    },
    contrast: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    exposure: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    saturation: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    hueRotation: {
        value: 0,
        min: 0,
        max: 360,
        unit: "deg"
    },
    blur: {
        value: 0,
        min: 0,
        max: 20,
        unit: "px"
    },
    grayscale: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%"
    },
    sepia: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%"
    },
    invert: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%"
    },
    opacity: {
        value: 100,
        min: 0,
        max: 100,
        unit: "%"
    },
}

const filtersContainer = document.querySelector('.filters');

function createFilterElement(name, unit = "%", min, max, value) {

    const div = document.createElement('div');
    div.classList.add('filter');

    const input = document.createElement('input');
    input.type = 'range';
    input.name = name;
    input.min = min;
    input.max = max;
    input.value = value;
    input.classList.add('input');

    const p = document.createElement('p');
    p.innerText = name 

    div.appendChild(p);
    div.appendChild(input);
    
    return div;
}

Object.keys(filters).forEach(key => {

    const filterElemnt = createFilterElement(
        key, 
        filters[key].unit, 
        filters[key].min, 
        filters[key].max, 
        filters[key].value
    );

    filtersContainer.appendChild(filterElemnt);

});