import{S as f,N as m}from"./assets/vendor-Dw3l7aHi.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();const g=document.querySelector(".header-menu__link"),a=document.querySelector(".header-menu__list");g.addEventListener("click",s=>{s.stopPropagation(),a.classList.toggle("show")});document.addEventListener("click",function(s){!s.target.classList.contains("header-menu__link")&&!s.target.closest(".header-menu__list")&&a.classList.remove("show")});const p=document.querySelector(".header"),n=document.querySelector(".hero");n.insertBefore(p,n.firstChild);document.querySelector(".header-burger").addEventListener("click",()=>{document.querySelector(".header-burger").classList.toggle("active"),document.querySelector(".header-menu").classList.toggle("show")});console.log("Hello from hero.js");console.log("Hello from about.js");console.log("Hello from benefits.js");const o=document.querySelector(".next-slide"),r=document.querySelector(".prev-slide"),d=new f(".mySwiper",{direction:"horizontal",loop:!1,modules:[m],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},slidesPerView:1,spaceBetween:32,on:{reachEnd(){o.disabled=!0,o.classList.remove("active"),r.classList.add("active")},reachBeginning(){r.disabled=!0,r.classList.remove("active"),o.classList.add("active")},fromEdge(){o.disabled=!1,o.classList.add("active"),r.disabled=!1,r.classList.add("active")}}});o.classList.add("active");o.addEventListener("click",()=>{d.slideNext()});r.addEventListener("click",()=>{d.slidePrev()});console.log("Hello from faq.js");console.log("Hello from covers.js");console.log("Hello from reviews.js");console.log("Hello from footer.js");
//# sourceMappingURL=index.js.map
