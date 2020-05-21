'use strict';

// import "@babel/polyfill";
// import 'nodelist-foreach-polyfill';
// import "es6-promise";
// // import "fetch-polyfill";
// import elementClosest from 'element-closest';
// elementClosest(window);
// require('formdata-polyfill');
// import 'whatwg-fetch';




import popupCall from './modules/popupCall';
import sendForm from './modules/sendForm';
import accordion from './modules/accordion';
import popUpDiscount from './modules/popUpDiscount';
import popupCheck from './modules/popupCheck';
import popupConsultation from './modules/popupConsultation';
import calc from './modules/calc';

popupCall();
sendForm();
accordion();
popUpDiscount();
popupCheck();
popupConsultation();
calc();