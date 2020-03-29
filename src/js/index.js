// JS Goes here - ES6 supported
var AOS = require('aos');
AOS.init({
    duration: 1200,
});

window.addEventListener('load', AOS.refresh);

/**
 * Lazy load form validators
 */

 //contact form first
var formSelector = "form#contact"
var form = document.querySelector(formSelector);
if (form) {
    import( /* webpackChunkName: "validate-contact-form" */ './validate-contact-form').then(module => {
        module.validate(form);
    });

}

import "./validate-contact-form.js"

import "../css/fonts.css";
import "../css/main.css";
