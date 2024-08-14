// скрипт для бургера-меню
const menu = document.getElementById("nav");
const blackWindow = document.getElementById("blackWindow");

function openMenu() {
    menu.style.marginLeft = "0%";
    blackWindow.style.display = "block";
}

function hideMenu() {
    menu.style.marginLeft = "-65%";
    blackWindow.style.display = "none";
}

// скрипт для кнопки "наверх"
const btnUp = {
  el: document.querySelector('.btn-up'),
  scrolling: false,
  show() {
    if (this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
      this.el.classList.remove('btn-up_hide');
      this.el.classList.add('btn-up_hiding');
      window.setTimeout(() => {
        this.el.classList.remove('btn-up_hiding');
      }, 300);
    }
  },
  hide() {
    if (!this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
      this.el.classList.add('btn-up_hiding');
      window.setTimeout(() => {
        this.el.classList.add('btn-up_hide');
        this.el.classList.remove('btn-up_hiding');
      }, 300);
    }
  },
  addEventListener() {
    // при прокрутке окна (window)
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (this.scrolling && scrollY > 0) {
        return;
      }
      this.scrolling = false;
      // если пользователь прокрутил страницу более чем на 200px
      if (scrollY > 400) {
        // сделаем кнопку .btn-up видимой
        this.show();
      } else {
        // иначе скроем кнопку .btn-up
        this.hide();
      }
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.btn-up').onclick = () => {
      this.scrolling = true;
      this.hide();
      // переместиться в верхнюю часть страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();

// Маска ввода номера телефона c помощью JQuery
$(function () {
  $('[data-phone-pattern]').on('input blur focus', (e) => {
      var el = e.target,
          clearVal = $(el).data('phoneClear'),
          pattern = $(el).data('phonePattern'),
          matrix = pattern ? pattern : matrix_def,
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = $(el).val().replace(/\D/g, "");
      if (clearVal !== 'false' && e.type === 'blur') {
          if (val.length < matrix.match(/([\_\d])/g).length) {
              $(el).val('');
              return;
          }
      }
      if (def.length >= val.length) val = def;
      $(el).val(matrix.replace(/./g, function (a) {
          return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
      }));
  });
});

// Карта
ymaps.ready(init); 
	var myMap;
	
	function init() {
	
		myMap = new ymaps.Map("map", {
			center: [53.699091, 23.839099],
			zoom: 13
		}); 
	
		myMap.controls.add(
			new ymaps.control.ZoomControl()
		); 
	
		myPlacemark = new ymaps.Placemark([53.699091, 23.839099], {
			balloonContent: "<div class='ya_map'>Мы здесь</div>"
		}, {
			preset: "twirl#redDotIcon"
		});
		
		myMap.geoObjects.add(myPlacemark);
		myPlacemark.balloon.open();
		
	};

// Прелоадер
window.onload = function() {
  var preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
  document.body.style.overflowY = 'auto';
};

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Останавливаем стандартное поведение формы
  const email = "grodno.lenin@ohrana.gov.by";
  const subject = document.getElementById('subjectInput').value;
  const body = `
      Имя: ${this.name.value}
      Телефон: ${this.phone.value}
      Комментарий: ${this.comment.value}
  `;
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
});