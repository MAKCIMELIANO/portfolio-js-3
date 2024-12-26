import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css'; // Импортируем все стили Swiper
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css/navigation'; // Импортируем стили для модуля Navigation
import 'swiper/css/pagination'; // Импортируем стили для модуля Pagination
import 'swiper/css/keyboard';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const API_URL = 'https://portfolio-js.b.goit.study/api/reviews';

const reviewsList = document.querySelector('.reviews-list');

async function fetchReviews() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    renderReviews(data);
    initializeSwiper();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch reviews',
    });
  }
}

function renderReviews(reviews) {
  const reviewsHtml = reviews
    .map(
      review => `
        <div class="swiper-slide review-slide">
          <li class="review-item" id="${review._id}">
            <div class="review-author">
              <img src="${review.avatar_url}" alt="Avatar of ${review.author}" class="review-avatar"/>
              <h2 class="review-author-name">${review.author}</h2>
            </div>
            <p class="review-text">${review.review}</p>
          </li>
        </div>
      `
    )
    .join('');
  reviewsList.innerHTML = reviewsHtml;
}

function initializeSwiper() {
  const swiper = new Swiper('.swiper-container', {
    // modules: [Navigation, Pagination, Keyboard],
    speed: 500,
    loop: false, // Отключаем бесконечный цикл
    slidesPerView: 1, // По умолчанию показывать 1 слайд
    slidesPerGroup: 1, // Переключаем по одному слайду
    spaceBetween: 16, // Расстояние между слайдами
    navigation: {
      nextEl: '.reviews-swiper-button-next',
      prevEl: '.reviews-swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    breakpoints: {
      // when window width is >= 1440px
      1440: {
        slidesPerView: 4,
        slidesPerGroup: 1, // Переключаем по одному слайду
        spaceBetween: 16,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        slidesPerGroup: 1, // Переключаем по одному слайду
        spaceBetween: 16,
      },
      // when window width is >= 375px
      375: {
        slidesPerView: 1,
        slidesPerGroup: 1, // Переключаем по одному слайду
        spaceBetween: 16,
      },
    },
    on: {
      slideChange: function () {
        updateNavigationButtons(swiper);
        // updateSlideVisibility(swiper);
      },
      resize: function () {
        // updateSlideVisibility(swiper);
      },
    },
  });

  // Обновляем состояние кнопок навигации и видимость слайдов при инициализации
  updateNavigationButtons(swiper);
  // updateSlideVisibility(swiper);
}

// function updateSlideVisibility(swiper) {
//   const slides = swiper.slides;
//   const activeIndex = swiper.activeIndex;
//   const slidesPerView = swiper.params.slidesPerView;

//   slides.forEach((slide, index) => {
//     if (index >= activeIndex && index < activeIndex + slidesPerView) {
//       // Отображаем слайды, которые входят в текущий slidesPerView
//       slide.classList.remove('hidden-slide');
//     } else {
//       // Скрываем слайды, которые выходят за рамки текущего slidesPerView
//       slide.classList.add('hidden-slide');
//     }
//   });
// }

function updateNavigationButtons(swiper) {
  const nextButton = document.querySelector('.reviews-swiper-button-next');
  const prevButton = document.querySelector('.reviews-swiper-button-prev');

  if (swiper.isEnd) {
    nextButton.classList.remove('active');
    nextButton.classList.add('disabled');
  } else {
    nextButton.classList.remove('disabled');
    nextButton.classList.add('active');
  }

  if (swiper.isBeginning) {
    prevButton.classList.remove('active');
    prevButton.classList.add('disabled');
  } else {
    prevButton.classList.remove('disabled');
    prevButton.classList.add('active');
  }
}

document.addEventListener('DOMContentLoaded', fetchReviews);
