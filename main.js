(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-11",headers:{authorization:"e6c162f3-390b-4ee4-adf5-c00ed65f45ca","Content-Type":"application/json"}};function t(e){return e.ok?e.json():Promise.reject("HTTP error! Status: ".concat(e.status))}function n(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:e.headers}).then(t)}function r(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:e.headers}).then(t)}var o=document.querySelector("#card-template").content;function c(e,t,n,r,o,c){var a=e.querySelector(".card").cloneNode(!0),i=a.querySelector(".card__delete-button"),u=a.querySelector(".card__like-button"),l=a.querySelector(".card__image"),s=a.querySelector(".card__like-number"),d=t._id;return l.src=t.link,l.alt=t.name,a.querySelector(".card__title").textContent=t.name,t.owner._id===c?i.addEventListener("click",(function(e){return n(e,d)})):i.style.display="none",t.like.some((function(e){return e._id===c}))&&u.classList.add("card__like-button_is-active"),s.textContent=t.likes.lenght,u.addEventListener("click",(function(e){r(e,d,s)})),l.addEventListener("click",(function(){o(t.name,t.link)})),a}function a(e,t,o){(e.target.classList.toggle("card__like-button_is-active")?r:n)(t).then((function(t){e.target.classList.toggle("card__like-button_is-active"),o.textContent=t.likes.lenght})).catch((function(e){console.log(e)}))}function i(n,o){var c;Promise.all([(c=o,fetch("".concat(e.baseUrl,"/cards/").concat(c),{method:"DELETE",headers:e.headers}).then(t)),r(o)]).then((function(){n.target.closest(".places__item").remove()})).catch((function(e){console.log(e)}))}function u(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",d),e.addEventListener("mousedown",s)}function l(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",d),e.removeEventListener("mousedown",s)}function s(e){e.target===e.currentTarget&&l(e.currentTarget)}function d(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");t&&l(t)}}var f=function(e,t,n){var r=e.querySelector("#".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""},p=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))};function m(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=Array.from(e.querySelectorAll(t.errorClass)),o=e.querySelector(t.submitButtonSelector);n.forEach((function(n){f(e,n,t)})),r.forEach((function(e){e.textContent=""})),p(n,o,t)}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var v,_={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"button_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"},h=document.querySelector(".places__list"),S=document.querySelector(".profile__edit-button"),b=document.querySelector(".popup_type_edit"),g=document.querySelector(".profile__add-button"),E=document.querySelector(".popup_type_new-card"),q=document.forms["edit-profile"],C=q.elements.name,L=q.elements.description,k=document.querySelector(".profile__title"),A=document.querySelector(".profile__description"),x=q.querySelector(".popup__button"),w=document.forms["new-place"],T=w.elements["place-name"],U=w.elements.link,j=w.querySelector(".popup__button"),O=document.querySelector(".popup_type_image"),P=O.querySelector(".popup__image"),B=O.querySelector(".popup__caption"),D=document.querySelector(".popup_type_avatar"),I=document.querySelector(".profile__image"),M=document.forms["new-avatar"],N=M.elements.link,H=M.querySelector(".popup__button"),J=document.querySelector(".profile__image_cover"),V=document.querySelector('form[name="edit-profile"]'),z=document.querySelectorAll(".popup__close");function $(e,t){u(O),P.src=t,P.alt=e,B.textContent=e}function F(e,t){t.textContent=e?"Сохранение...":"Сохранить"}Promise.all([fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then(t),fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then(t)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,i=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=r[0],l=r[1];A.textContent=l.about,k.textContent=l.name,I.style="background-image: url('".concat(l.avatar,"')"),v=l._id,u.forEach((function(e){h.append(c(o,e,i,a,$,v))}))})).catch((function(e){console.error("Error in server! Status: ".concat(e))})),q.addEventListener("submit",(function(n){var r,o;n.preventDefault(),F(!0,x),(r=C.value,o=L.value,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:r,about:o})}).then(t)).then((function(e){k.textContent=e.name,A.textContent=e.about,l(b)})).catch((function(e){console.log("Error in edit profile! Status: ".concat(e))})).finally((function(){F(!1,x)}))})),w.addEventListener("submit",(function(n){var r,u;n.preventDefault(),F(!0,j),(r=T.value,u=U.value,fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:r,link:u})}).then(t)).then((function(e){var t=c(o,e,i,a,$,v);h.prepend(t),m(w,_),l(E),w.reset()})).catch((function(e){console.log("Error in new place! Status: ".concat(e))})).finally((function(){F(!1,j)}))})),M.addEventListener("submit",(function(n){var r;n.preventDefault(),F(!0,H),(r=N.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then(t)).then((function(e){I.style.backgroundImage="url('".concat(e.avatar,"')"),l(D)})).catch((function(e){console.log("Error in edit avatar! Status: ".concat(e))})).finally((function(){F(!1,H)}))})),S.addEventListener("click",(function(){m(q,_),C.value=k.textContent,L.value=A.textContent,m(q,_),u(b)})),g.addEventListener("click",(function(){m(w,_),u(E)})),J.addEventListener("click",(function(){m(V,_),u(D),M.reset()})),z.forEach((function(e){e.addEventListener("click",(function(){l(e.closest(".popup"))}))})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);p(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?f(e,t,n):function(e,t,n,r){var o=e.querySelector("#".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),p(n,r,t)}))}))}(t,e)}))}(_)})();