const dist_name = "orderedLogit";

const dist_type = "discrete";

const params = [ 0, .5,.5,.5,.5 ];    // set initial params (phi, bars_prob)

const xRange = [1, 4];
const yRange = [0, 0.55];

const slider_config = "5-sliders";

const slider_0 = document.getElementById('slider_0');
const slider_1 = document.getElementById('slider_1');
const slider_2 = document.getElementById('slider_2');
const slider_3 = document.getElementById('slider_3');
const slider_4 = document.getElementById('slider_4');

noUiSlider.create(slider_0, {
    start: params[0],
    step: 0.05,
    tooltips: true,
    range: {
        'min': -6,
        'max': 6
    }
});

noUiSlider.create(slider_1, {
    orientation: 'vertical',
    direction: 'rtl',
    start: params[1],
    step: .05,
    tooltips: false,
    range: {
        'min': 0,
        'max': 1
    }
});

noUiSlider.create(slider_2, {
    orientation: 'vertical',
    direction: 'rtl',
    start: params[2],
    step: .05,
    tooltips: false,
    range: {
        'min': 0,
        'max': 1
    }
});

noUiSlider.create(slider_3, {
    orientation: 'vertical',
    direction: 'rtl',
    start: params[3],
    step: .05,
    tooltips: false,
    range: {
        'min': 0,
        'max': 1
    }
});

noUiSlider.create(slider_4, {
    orientation: 'vertical',
    direction: 'rtl',
    start: params[4],
    step: .05,
    tooltips: false,
    range: {
        'min': 0,
        'max': 1
    }
});
