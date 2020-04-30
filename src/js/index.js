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


import "./validate-contact-form.js"

import "../css/fonts.css";
import "../css/main.css";
