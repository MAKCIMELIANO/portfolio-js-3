import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.accordion-container');

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
    const btn = item.querySelector('.faq-accordion-btn');
    const iconDown = item.querySelector('.faq-icon-down');
    const iconUp = item.querySelector('.faq-icon-upp');

    btn.addEventListener('click', () => {

        faqItems.forEach((otherItem) => {
            const otherIconDown = otherItem.querySelector('.faq-icon-down');
            const otherIconUp = otherItem.querySelector('.faq-icon-upp');
            
            if (otherItem !== item) {
                otherIconDown.classList.remove('visually-hidden');
                otherIconUp.classList.add('visually-hidden');
            }
        });

        const isOpen = item.classList.contains('is-active');

        if (isOpen) {
            iconDown.classList.add('visually-hidden');
            iconUp.classList.remove('visually-hidden');
        } else {
            iconDown.classList.remove('visually-hidden');
            iconUp.classList.add('visually-hidden');
        }
    }); 
});