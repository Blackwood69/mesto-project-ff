(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-11",headers:{authorization:"e6c162f3-390b-4ee4-adf5-c00ed65f45ca","Content-Type":"application/json"}};function t(e){return e.ok?e.json():Promise.reject("HTTP error! Status: ".concat(e.status))}function n(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:e.headers}).then(t)}function r(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:e.headers}).then(t)}var o=document.querySelector("#card-template").content;function c(e,t,n,r,o,c){var a=e.querySelector(".card").cloneNode(!0),i=a.querySelector(".card__delete-button"),u=a.querySelector(".card__like-button"),l=a.querySelector(".card__image"),s=a.querySelector(".card__like-number"),d=t._id;return l.src=t.link,l.alt=t.name,a.querySelector(".card__title").textContent=t.name,t.owner._id===c?i.addEventListener("click",(function(e){return n(e,d)})):i.style.display="none",t.likes.some((function(e){return e._id===c}))&&u.classList.add("card__like-button_is-active"),s.textContent=t.likes.length,u.addEventListener("click",(function(e){r(e,d,s)})),l.addEventListener("click",(function(){o(t.name,t.link)})),a}function a(e,t,o){var c=e.target;(c.classList.contains("card__like-button_is-active")?r:n)(t).then((function(e){c.classList.toggle("card__like-button_is-active"),o.textContent=e.likes.length})).catch((function(e){console.error("Ошибка при обработке лайка:",e)}))}function i(n,r){var o;Promise.all([(o=r,fetch("".concat(e.baseUrl,"/cards/").concat(o),{method:"DELETE",headers:e.headers}).then(t))]).then((function(){n.target.closest(".places__item").remove()})).catch((function(e){console.log(e)}))}function u(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",d),e.addEventListener("mousedown",s)}function l(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",d),e.removeEventListener("mousedown",s)}function s(e){e.target===e.currentTarget&&l(e.currentTarget)}function d(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");t&&l(t)}}var f=function(e,t,n){var r=e.querySelector("#".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""},p=function(e,t){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?y(t):v(t)};function m(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){f(e,n,t)})),v(r)}var v=function(e){e.disabled=!0,e.classList.add(config.inactiveButtonClass)},y=function(e){e.disabled=!1,e.classList.remove(config.inactiveButtonClass)};function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var h,S={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_inactive",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"},b=document.querySelector(".places__list"),g=document.querySelector(".profile__edit-button"),E=document.querySelector(".popup_type_edit"),q=document.querySelector(".profile__add-button"),k=document.querySelector(".popup_type_new-card"),C=document.forms["edit-profile"],L=C.elements.name,A=C.elements.description,w=document.querySelector(".profile__title"),x=document.querySelector(".profile__description"),T=C.querySelector(".popup__button"),U=document.forms["new-place"],j=U.elements["place-name"],O=U.elements.link,P=U.querySelector(".popup__button"),B=document.querySelector(".popup_type_image"),D=B.querySelector(".popup__image"),I=B.querySelector(".popup__caption"),M=document.querySelector(".popup_type_avatar"),N=document.querySelector(".profile__image"),H=document.forms["new-avatar"],J=H.elements.link,V=H.querySelector(".popup__button"),z=document.querySelector(".profile__image_cover"),$=document.querySelectorAll(".popup__close");function F(e,t){u(B),D.src=t,D.alt=e,I.textContent=e}function G(e,t){t.textContent=e?"Сохранение...":"Сохранить"}Promise.all([fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then(t),fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then(t)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,i=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=r[0],l=r[1];x.textContent=l.about,w.textContent=l.name,N.style.backgroundImage="url('".concat(l.avatar,"')"),h=l._id,u.forEach((function(e){b.append(c(o,e,i,a,F,h))}))})).catch((function(e){console.error("Error in server! Status: ".concat(e))})),C.addEventListener("submit",(function(n){var r,o;n.preventDefault(),G(!0,T),(r=L.value,o=A.value,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:r,about:o})}).then(t)).then((function(e){w.textContent=e.name,x.textContent=e.about,l(E)})).catch((function(e){console.log("Error in edit profile! Status: ".concat(e))})).finally((function(){G(!1,T)}))})),U.addEventListener("submit",(function(n){var r,u;n.preventDefault(),G(!0,P),(r=j.value,u=O.value,fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:r,link:u})}).then(t)).then((function(e){var t=c(o,e,i,a,F,h);b.prepend(t),m(U,S),l(k),U.reset()})).catch((function(e){console.log("Error in new place! Status: ".concat(e))})).finally((function(){G(!1,P)}))})),H.addEventListener("submit",(function(n){var r;n.preventDefault(),G(!0,V),(r=J.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then(t)).then((function(e){N.style.backgroundImage="url('".concat(e.avatar,"')"),l(M)})).catch((function(e){console.log("Error in edit avatar! Status: ".concat(e))})).finally((function(){G(!1,V)}))})),g.addEventListener("click",(function(){m(C,S),L.value=w.textContent,A.value=x.textContent,m(C,S),u(E)})),q.addEventListener("click",(function(){u(k)})),z.addEventListener("click",(function(){m(C,S),u(M),H.reset()})),$.forEach((function(e){e.addEventListener("click",(function(){l(e.closest(".popup"))}))})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);p(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?f(e,t,n):function(e,t,n,r){var o=e.querySelector("#".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),p(n,r,t)}))}))}(t,e)}))}(S)})();