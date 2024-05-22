const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
 },
 grabCursor: true,
 speed: 1300,
 slidesPerView: 2,
 // Бесконечность
 loop: true,
 // Количество прокручиваемых слайдов
 slidesPerGroup: 2,
 spaceBetween: 10,
 breakpoints: {
    // when window width is >= 320px
    320: {
       slidesPerView: 1,
       slidesPerGroup: 1
    },
    // when window width is >= 480px
    480: {
       slidesPerView: 1,
       slidesPerGroup: 1
    },
    // when window width is >= 767px
    767: {
       slidesPerView: 2
    }
 }
  })

  const slidesTextArr = [
    'Реконструкция ограждения для нужд филиал ГУП &laquo;Пассажиравтотранс&raquo;',
    'Выполнение проектно-изыскательных работ по&nbsp;адресу: г. Псков, для филиала &laquo;Северо-Западный&raquo; АО&nbsp;&laquo;Оборонэнерго&raquo;. Фундамент прожекторной мачты ПМС- 24.0.',
    'Амфитеатр с&nbsp;малыми архитектурными формами и&nbsp;ограждениями. МФК Лахта-центр',
    'Сигнальные столбики со&nbsp;светоотражающим элементом',
    'Сборный косоур&nbsp;ЛБ лестничных сходов.&nbsp;г. Псков',
    '&laquo;Многофункциональный оптово-логистический складской комплекс&raquo; Столбчатый фундамент ФСт-3.2',
    'Строительство детского спортивного комплекса&nbsp;г. Колпино',
    'ПАО &laquo;Северсталь&raquo;, Россия,Волгоградская область, Шекснинский район, Индустриальный парк &laquo;Шексна&raquo;',
    'Выполнение проектно-изыскательных работ по&nbsp;адресу: г. Псков, для филиала &laquo;Северо-Западный&raquo; АО&nbsp;&laquo;Оборонэнерго&raquo;. Фундамент прожекторной мачты ПМС- 24.0.'
  ]

  const slideText = document.querySelector('.swiper__text')
  let indexText = 0
  slideText.innerHTML = slidesTextArr[indexText]

  swiper.on('transitionEnd', function() {
    let activeSlide = document.querySelector('.swiper-slide-active')

    if (+activeSlide.dataset.id !== indexText) {
      slideText.classList.add('swiper__text--black')
      setTimeout(() => {
        slideText.innerHTML = slidesTextArr[activeSlide.dataset.id]
        slideText.classList.remove('swiper__text--black')
     }, 1000)
     indexText = +activeSlide.dataset.id
    }
  })
