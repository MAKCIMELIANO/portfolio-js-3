import{S as L,N as g,A as E,i as S,P as q}from"./assets/vendor-DcY471xM.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".header-menu__link"),o=document.querySelector(".header-menu__list"),e=document.querySelector(".header-burger"),n=document.querySelectorAll(".header-menu__item a"),s=document.querySelector(".header-menu");t==null||t.addEventListener("click",a=>{a.stopPropagation(),o.classList.toggle("show")}),document.addEventListener("click",function(a){!a.target.classList.contains("header-menu__link")&&!a.target.closest(".header-menu__list")&&o.classList.remove("show")});const r=document.querySelector(".header"),i=document.querySelector(".hero");i.insertBefore(r,i.firstChild),e.addEventListener("click",()=>{e.classList.toggle("active"),s.classList.toggle("show")}),n.forEach(a=>{a.addEventListener("click",()=>{s.classList.remove("show"),e.classList.remove("active")})});const c=document.createElement("a");c.classList.add("header-button__mobile"),c.href="#footer",c.textContent="Order the project",s.appendChild(c),c.addEventListener("click",()=>{o.classList.remove("show"),e.classList.remove("active"),s.classList.remove("show")})});console.log("Hello from hero.js");const m=document.querySelectorAll(".accordion-item");m.forEach((t,o)=>{const e=t.nextElementSibling;o===0?(t.classList.add("open"),e&&(e.style.maxHeight=`${e.scrollHeight}px`)):(t.classList.remove("open"),e&&(e.style.maxHeight="0"))});m.forEach(t=>{t.addEventListener("click",()=>{m.forEach(e=>{if(e!==t){e.classList.remove("open");const n=e.nextElementSibling;n&&(n.style.maxHeight="0")}}),t.classList.toggle("open");const o=t.nextElementSibling;o&&(t.classList.contains("open")?o.style.maxHeight=`${o.scrollHeight}px`:o.style.maxHeight="0")})});const f=document.querySelector(".accordion-item.open");if(f){const t=f.nextElementSibling;t&&(t.style.maxHeight=`${t.scrollHeight}px`)}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelectorAll(".skill"),o=document.querySelector(".arrow-button");let e=0;function n(){return Array.from(t).filter(i=>getComputedStyle(i).display!=="none")}function s(){const i=n();i.forEach(c=>c.classList.remove("active")),i.length>0&&i[e%i.length].classList.add("active")}o.addEventListener("click",()=>{const i=n();e=(e+1)%i.length,s()}),document.addEventListener("keydown",i=>{if(i.key==="ArrowRight"||i.key==="Tab"){i.preventDefault();const c=n();e=(e+1)%c.length,s()}});let r=0;document.addEventListener("touchstart",i=>{r=i.touches[0].clientX}),document.addEventListener("touchend",i=>{const c=i.changedTouches[0].clientX;if(r<c-50){const a=n();e=(e+1)%a.length,s()}}),window.addEventListener("resize",()=>{e=0,s()}),s()});console.log("Hello from benefits.js");const l=document.querySelector(".next-slide"),d=document.querySelector(".prev-slide"),u=document.querySelector(".arrow-narrow-next"),v=document.querySelector(".arrow-narrow-prev"),y=new L(".mySwiper",{direction:"horizontal",loop:!1,modules:[g],navigation:{nextEl:".swiper-button-next",prevEl:".wiper-button-prev"},slidesPerView:1,spaceBetween:16,keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{spaceBetween:768,allowTouchMove:!0},1440:{spaceBetween:1440}},on:{reachEnd(){l.disabled=!0,l.classList.remove("active"),u.classList.remove("active-arrow"),d.classList.add("active"),v.classList.add("active-arrow")},reachBeginning(){d.disabled=!0,d.classList.remove("active"),v.classList.remove("active-arrow"),l.classList.add("active"),u.classList.add("active-arrow")},fromEdge(){l.disabled=!1,l.classList.add("active"),u.classList.add("active-arrow"),d.disabled=!1,d.classList.add("active"),v.classList.add("active-arrow")}}});l.classList.add("active");u.classList.add("active-arrow");l.addEventListener("click",()=>{y.slideNext()});d.addEventListener("click",()=>{y.slidePrev()});new E(".accordion-container");const p=document.querySelectorAll(".faq-item");p.forEach(t=>{const o=t.querySelector(".faq-accordion-btn"),e=t.querySelector(".faq-icon-down"),n=t.querySelector(".faq-icon-upp");o.addEventListener("click",()=>{p.forEach(r=>{const i=r.querySelector(".faq-icon-down"),c=r.querySelector(".faq-icon-upp");r!==t&&(i.classList.remove("visually-hidden"),c.classList.add("visually-hidden"))}),t.classList.contains("is-active")?(e.classList.add("visually-hidden"),n.classList.remove("visually-hidden")):(e.classList.remove("visually-hidden"),n.classList.add("visually-hidden"))})});const b=document.querySelector(".covers"),h=b.querySelectorAll(".covers-item");function x(){const t={root:null,rootMargin:"0px",threshold:.1};new IntersectionObserver((e,n)=>{e.forEach(s=>{s.target,s.isIntersecting?h.forEach(r=>{r.classList.add("start")}):h.forEach(r=>{r.classList.remove("start")})})},t).observe(b)}document.addEventListener("DOMContentLoaded",x);const k="https://portfolio-js.b.goit.study/api/reviews",O=document.querySelector(".reviews-list");async function P(){try{const t=await fetch(k);if(!t.ok)throw new Error("Network response was not ok");const o=await t.json();_(o),B()}catch{S.error({title:"Error",message:"Failed to fetch reviews"})}}function _(t){const o=t.map(e=>`
        <div class="swiper-slide">
          <li class="review-item" id="${e._id}">
            <div class="review-author">
              <img src="${e.avatar_url}" alt="Avatar of ${e.author}" class="review-avatar"/>
              <h2 class="review-author-name">${e.author}</h2>
            </div>
            <p class="review-text">${e.review}</p>
          </li>
        </div>
      `).join("");O.innerHTML=o}function B(){const t=new L(".swiper-container",{modules:[g,q],loop:!1,slidesPerView:4,spaceBetween:16,navigation:{nextEl:".reviews-swiper-button-next",prevEl:".reviews-swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{1440:{slidesPerView:4,spaceBetween:16},768:{slidesPerView:2,spaceBetween:16},375:{slidesPerView:1,spaceBetween:16}},on:{slideChange:function(){w(t)}}});w(t)}function w(t){const o=document.querySelector(".reviews-swiper-button-next"),e=document.querySelector(".reviews-swiper-button-prev");t.isEnd?(o.classList.remove("active"),o.classList.add("disabled")):(o.classList.remove("disabled"),o.classList.add("active")),t.isBeginning?(e.classList.remove("active"),e.classList.add("disabled")):(e.classList.remove("disabled"),e.classList.add("active"))}document.addEventListener("DOMContentLoaded",P);console.log("Hello from footer.js");
//# sourceMappingURL=index.js.map
