import{S as g,N as q,A as k,i as x}from"./assets/vendor-BbduMKI4.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".header-menu__link"),o=document.querySelector(".header-menu__list"),t=document.querySelector(".header-burger"),i=document.querySelectorAll(".header-menu__item a"),s=document.querySelector(".header-menu");e==null||e.addEventListener("click",n=>{n.stopPropagation(),o.classList.toggle("show")}),document.addEventListener("click",function(n){!n.target.classList.contains("header-menu__link")&&!n.target.closest(".header-menu__list")&&o.classList.remove("show")}),t.addEventListener("click",()=>{t.classList.toggle("active"),s.classList.toggle("show")}),i.forEach(n=>{n.addEventListener("click",()=>{s.classList.remove("show"),t.classList.remove("active")})});const r=document.createElement("a");r.classList.add("header-button__mobile"),r.href="#footer",r.textContent="Order the project",s.appendChild(r),r.addEventListener("click",()=>{o.classList.remove("show"),t.classList.remove("active"),s.classList.remove("show")})});const p=document.querySelectorAll(".accordion-item");p.forEach((e,o)=>{const t=e.nextElementSibling;o===0?(e.classList.add("open"),t&&(t.style.maxHeight=`${t.scrollHeight}px`)):(e.classList.remove("open"),t&&(t.style.maxHeight="0"))});p.forEach(e=>{e.addEventListener("click",()=>{p.forEach(t=>{if(t!==e){t.classList.remove("open");const i=t.nextElementSibling;i&&(i.style.maxHeight="0")}}),e.classList.toggle("open");const o=e.nextElementSibling;o&&(e.classList.contains("open")?o.style.maxHeight=`${o.scrollHeight}px`:o.style.maxHeight="0")})});const L=document.querySelector(".accordion-item.open");if(L){const e=L.nextElementSibling;e&&(e.style.maxHeight=`${e.scrollHeight}px`)}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".skill"),o=document.querySelector(".arrow-button");let t=0;function i(){return Array.from(e).filter(n=>getComputedStyle(n).display!=="none")}function s(){const n=i();n.forEach(c=>c.classList.remove("active")),n.length>0&&n[t%n.length].classList.add("active")}o.addEventListener("click",()=>{const n=i();t=(t+1)%n.length,s()}),document.addEventListener("keydown",n=>{if(n.key==="ArrowRight"||n.key==="Tab"){n.preventDefault();const c=i();t=(t+1)%c.length,s()}});let r=0;document.addEventListener("touchstart",n=>{r=n.touches[0].clientX}),document.addEventListener("touchend",n=>{const c=n.changedTouches[0].clientX;if(r<c-50){const S=i();t=(t+1)%S.length,s()}}),window.addEventListener("resize",()=>{t=0,s()}),s()});const a=document.querySelector(".next-slide"),l=document.querySelector(".prev-slide"),u=document.querySelector(".arrow-narrow-next"),m=document.querySelector(".arrow-narrow-prev"),b=new g(".mySwiper",{direction:"horizontal",loop:!1,modules:[q],navigation:{nextEl:".swiper-button-next",prevEl:".wiper-button-prev"},slidesPerView:1,spaceBetween:16,keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{spaceBetween:768,allowTouchMove:!0},1440:{spaceBetween:1440,allowTouchMove:!0}},centeredSlides:!0,on:{reachEnd(){a.disabled=!0,a.classList.remove("active"),u.classList.remove("active-arrow"),l.classList.add("active"),m.classList.add("active-arrow")},reachBeginning(){l.disabled=!0,l.classList.remove("active"),m.classList.remove("active-arrow"),a.classList.add("active"),u.classList.add("active-arrow")},fromEdge(){a.disabled=!1,a.classList.add("active"),u.classList.add("active-arrow"),l.disabled=!1,l.classList.add("active"),m.classList.add("active-arrow")}}});a.classList.add("active");u.classList.add("active-arrow");a.addEventListener("click",()=>{b.slideNext()});l.addEventListener("click",()=>{b.slidePrev()});new k(".accordion-container");const w=document.querySelectorAll(".faq-item");w.forEach(e=>{const o=e.querySelector(".faq-accordion-btn"),t=e.querySelector(".faq-icon-down"),i=e.querySelector(".faq-icon-upp");o.addEventListener("click",()=>{w.forEach(r=>{const n=r.querySelector(".faq-icon-down"),c=r.querySelector(".faq-icon-upp");r!==e&&(n.classList.remove("visually-hidden"),c.classList.add("visually-hidden"))}),e.classList.contains("is-active")?(t.classList.add("visually-hidden"),i.classList.remove("visually-hidden")):(t.classList.remove("visually-hidden"),i.classList.add("visually-hidden"))})});const h=document.querySelector(".covers"),f=h.querySelectorAll(".covers-item");h.addEventListener("click",O);function O(){f.forEach(e=>{e.classList.contains("start")?e.classList.remove("start"):e.classList.add("start")})}function P(){const e={root:null,rootMargin:"0px",threshold:.2};new IntersectionObserver((t,i)=>{t.forEach(s=>{s.target,s.isIntersecting?f.forEach(r=>{r.classList.add("start")}):f.forEach(r=>{r.classList.remove("start")})})},e).observe(h)}document.addEventListener("DOMContentLoaded",P);const _="https://portfolio-js.b.goit.study/api/reviews",A=document.querySelector(".reviews-list");async function B(){try{const e=await fetch(_);if(!e.ok)throw new Error("Network response was not ok");const o=await e.json();C(o),I()}catch{x.error({title:"Error",message:"Failed to fetch reviews"})}}function C(e){const o=e.map(t=>`
        <li class="review-item swiper-slide" id="${t._id}">
          <div class="review-author">
            <img src="${t.avatar_url}" alt="Avatar of ${t.author}" class="review-avatar"/>
            <h2 class="review-author-name">${t.author}</h2>
          </div>
          <p class="review-text">${t.review}</p>
        </li>
      `).join("");A.innerHTML=o}function y(e){const o=document.querySelector(".reviews-swiper-button-next"),t=document.querySelector(".reviews-swiper-button-prev");e.isEnd?(o.classList.remove("active"),o.classList.add("disabled")):(o.classList.remove("disabled"),o.classList.add("active")),e.isBeginning?(t.classList.remove("active"),t.classList.add("disabled")):(t.classList.remove("disabled"),t.classList.add("active"))}function I(){const e=new g(".swiper",{loop:!1,slidesPerView:1,loopedSlides:6,slidesPerGroup:1,spaceBetween:16,navigation:{nextEl:".reviews-swiper-button-next",prevEl:".reviews-swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:16},768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},375:{slidesPerView:1,slidesPerGroup:1,spaceBetween:16}},on:{slideChange:function(){y(e)}}});y(e)}document.addEventListener("DOMContentLoaded",B);const M=document.querySelectorAll(".footer-input"),v=document.querySelector(".footer-form");document.querySelector(".footer-btn-send");document.querySelector(".footer-modal");const H=document.querySelector(".footer-close"),d=document.querySelector(".footer-back-modal"),N=v.querySelector('input[type="email"]'),D=v.querySelector('input[type="text"]');M.forEach(e=>{e.addEventListener("input",()=>{const o=Math.floor(e.offsetWidth/9),t=e.value;t.length>o&&(e.value=t.slice(0,o-3)+"..."),e.title=t})});H.addEventListener("click",E);function T(){d.style.display="block",d.classList.add("is-open")}function E(){d.style.display="none",d.classList.remove("is-open")}d.addEventListener("click",e=>{e.target===d&&E()});v.addEventListener("submit",async e=>{e.preventDefault();const o=N.value.trim(),t=D.value.trim(),i={email:o,comment:t};try{const s=await fetch("https://portfolio-js.b.goit.study/api-docs/#/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!s.ok){const r=await s.json();throw new Error(r.message||"Unknown error occurred")}T(),v.reset()}catch(s){$(s.message)}});function $(e){console.error(e)}
//# sourceMappingURL=index.js.map
