import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';


const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item, index) => {
    const content = item.nextElementSibling;

    if (index === 0) {
        item.classList.add('open');
        if (content) {
            content.style.maxHeight = `${content.scrollHeight}px`;
        }
    } else {
        item.classList.remove('open');
        if (content) {
            content.style.maxHeight = '0';
        }
    }
});

accordionItems.forEach(item => {
    item.addEventListener('click', () => {
        accordionItems.forEach(el => {
            if (el !== item) {
                el.classList.remove('open');
                const content = el.nextElementSibling;
                if (content) content.style.maxHeight = '0';
            }
        });

        item.classList.toggle('open');
        const content = item.nextElementSibling;
        if (content) {
            if (item.classList.contains('open')) {
                content.style.maxHeight = `${content.scrollHeight}px`;
            } else {
                content.style.maxHeight = '0';
            }
        }
    });
});

const firstItem = document.querySelector('.accordion-item.open');
if (firstItem) {
    const firstContent = firstItem.nextElementSibling;
    if (firstContent) firstContent.style.maxHeight = `${firstContent.scrollHeight}px`;
}



/* ========================================================================================================================================================
Swiper
======================================================================================================================================================== */


document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll(".skill");
    const button = document.querySelector(".arrow-button");
    let currentIndex = 0;

    function getVisibleSkills() {
        return Array.from(skills).filter(skill => 
            getComputedStyle(skill).display !== "none"
        );
    }

    function updateActiveSkill() {
        const visibleSkills = getVisibleSkills();
        visibleSkills.forEach(skill => skill.classList.remove("active"));

        if (visibleSkills.length > 0) {
            visibleSkills[currentIndex % visibleSkills.length].classList.add("active");
        }
    }

    button.addEventListener("click", () => {
        const visibleSkills = getVisibleSkills();
        currentIndex = (currentIndex + 1) % visibleSkills.length;
        updateActiveSkill();
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight" || event.key === "Tab") {
            event.preventDefault();
            const visibleSkills = getVisibleSkills();
            currentIndex = (currentIndex + 1) % visibleSkills.length;
            updateActiveSkill();
        }
    });

    let startX = 0;
    document.addEventListener("touchstart", (event) => {
        startX = event.touches[0].clientX;
    });

    document.addEventListener("touchend", (event) => {
        const endX = event.changedTouches[0].clientX;
        if (startX < endX - 50) {
            const visibleSkills = getVisibleSkills();
            currentIndex = (currentIndex + 1) % visibleSkills.length;
            updateActiveSkill();
        }
    });

    window.addEventListener("resize", () => {
        currentIndex = 0;
        updateActiveSkill();
    });

    updateActiveSkill();
});




