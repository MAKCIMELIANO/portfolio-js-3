import{S as b,N as E,A as q,i as k}from"./assets/vendor-4vKh-7fm.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".header-menu__link"),o=document.querySelector(".header-menu__list"),t=document.querySelector(".header-burger"),n=document.querySelectorAll(".header-menu__item a"),r=document.querySelector(".header-menu");e==null||e.addEventListener("click",a=>{a.stopPropagation(),o.classList.toggle("show")}),document.addEventListener("click",function(a){!a.target.classList.contains("header-menu__link")&&!a.target.closest(".header-menu__list")&&o.classList.remove("show")});const s=document.querySelector(".header"),i=document.querySelector(".hero");i.insertBefore(s,i.firstChild),t.addEventListener("click",()=>{t.classList.toggle("active"),r.classList.toggle("show")}),n.forEach(a=>{a.addEventListener("click",()=>{r.classList.remove("show"),t.classList.remove("active")})});const v=document.createElement("a");v.classList.add("header-button__mobile"),v.href="#footer",v.textContent="Order the project",r.appendChild(v),v.addEventListener("click",()=>{o.classList.remove("show"),t.classList.remove("active"),r.classList.remove("show")})});console.log("Hello from hero.js");const w=document.querySelectorAll(".accordion-item");w.forEach((e,o)=>{const t=e.nextElementSibling;o===0?(e.classList.add("open"),t&&(t.style.display="block")):(e.classList.remove("open"),t&&(t.style.display="none"))});w.forEach(e=>{e.addEventListener("click",()=>{w.forEach(t=>{if(t!==e){t.classList.remove("open");const n=t.nextElementSibling;n&&(n.style.display="none")}}),e.classList.toggle("open");const o=e.nextElementSibling;o&&(o.style.display=e.classList.contains("open")?"block":"none")})});const g=document.querySelector(".accordion-item.open");if(g){const e=g.nextElementSibling;e&&(e.style.display="block")}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".skill"),o=document.querySelector(".arrow-button");let t=0;function n(){e.forEach((s,i)=>{s.classList.toggle("active",i===t)})}o.addEventListener("click",()=>{t=(t+1)%e.length,n()}),document.addEventListener("keydown",s=>{s.key==="ArrowRight"?(t=(t+1)%e.length,n()):s.key==="Tab"&&(s.preventDefault(),t=(t+1)%e.length,n())});let r=0;document.addEventListener("touchstart",s=>{r=s.touches[0].clientX}),document.addEventListener("touchend",s=>{const i=s.changedTouches[0].clientX;r<i-50&&(t=(t+1)%e.length,n())}),n()});console.log("Hello from benefits.js");const c=document.querySelector(".next-slide"),u=document.querySelector(".prev-slide"),m=document.querySelector(".arrow-narrow-next"),p=document.querySelector(".arrow-narrow-prev"),S=new b(".mySwiper",{direction:"horizontal",loop:!1,modules:[E],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},slidesPerView:1,spaceBetween:32,on:{reachEnd(){c.disabled=!0,c.classList.remove("active"),m.classList.remove("active-arrow"),u.classList.add("active"),p.classList.add("active-arrow")},reachBeginning(){u.disabled=!0,u.classList.remove("active"),p.classList.remove("active-arrow"),c.classList.add("active"),m.classList.add("active-arrow")},fromEdge(){c.disabled=!1,c.classList.add("active"),m.classList.add("active-arrow"),u.disabled=!1,u.classList.add("active"),p.classList.add("active-arrow")}}});c.classList.add("active");m.classList.add("active-arrow");c.addEventListener("click",()=>{S.slideNext()});u.addEventListener("click",()=>{S.slidePrev()});new q(".accordion-container");const x=document.querySelector(".covers"),y=x.querySelectorAll(".covers-item");function A(){const e={root:null,rootMargin:"0px",threshold:.1};new IntersectionObserver((t,n)=>{t.forEach(r=>{r.target,r.isIntersecting?y.forEach(s=>{s.classList.add("start")}):y.forEach(s=>{s.classList.remove("start")})})},e).observe(x)}document.addEventListener("DOMContentLoaded",A);const f=document.querySelector(".reviews-wrapper"),l=document.querySelector(".reviews-swiper-button-prev"),d=document.querySelector(".reviews-swiper-button-next"),L=document.querySelector(".reviews-arrow-prev"),h=document.querySelector(".reviews-arrow-next"),P="https://portfolio-js.b.goit.study/api/reviews";async function M(){try{const e=await fetch(P);if(!e.ok)throw new Error(e.statusText);const o=await e.json();_(o),console.log(o)}catch(e){console.log(e.message),k.error({title:"Error",message:"Failed to fetch reviews",position:"topRight",color:"#e74c3c"})}}function _(e){if(!e||e.length===0){f.innerHTML='<li class="not-found">Not found</li>';return}f.innerHTML="",e.forEach(o=>{const t=`
        <li class='reviews-item swiper-slide swiper-backface-hidden'>
        <img class='reviews-img'src='${o.avatar_url}' alt ='${o.author}' width='48px' height='48px'>
        <h3 class='reviews-name'>${o.author}</h3>
        <p class='reviews-text'>${o.review}</p>
        </li>
        `;f.insertAdjacentHTML("beforeend",t)}),document.querySelectorAll(".swiper-slide"),setTimeout(()=>{O()},0)}function O(){const e=new b(".swiper",{modules:[E],slidesPerView:1,slidesPerGroup:1,allowTouchMove:!0,navigation:{nextEl:".reviews-swiper-button-next",prevEl:".reviews-swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16,allowTouchMove:!0},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:16}},on:{reachEnd(){d.disabled=!0,d.classList.remove("active"),h.classList.remove("active-arr"),l.classList.add("active"),L.classList.add("active-arr")},reachBeginning(){l.disabled=!0,l.classList.remove("active"),L.classList.remove("active-arr"),d.classList.add("active"),h.classList.add("active-arr")},fromEdge(){d.disabled=!1,d.classList.add("active"),h.classList.add("active-arr"),l.disabled=!1,l.classList.add("active"),L.classList.add("active-arr")}}});d.classList.add("active"),nextArroe.classList.add("active-arr"),l.disabled=!0,e.update()}document.addEventListener("DOMContentLoaded",()=>{M()});console.log("Hello from footer.js");
//# sourceMappingURL=index.js.map