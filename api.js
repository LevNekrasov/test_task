var btnForm = document.getElementsByClassName('banner__button')[0];
var hiddenElement = document.getElementsByClassName("footer__form")[0];
var supportFaqLink = document.querySelectorAll(".support__faq-link");

// функция кнопки "к форме"
function handleButtonClick() {
  hiddenElement.scrollIntoView({ block: "center", behavior: "smooth" });
}

btnForm.addEventListener("click", handleButtonClick);


// Развертка "ОТветы на вопросы"

supportFaqLink.forEach(item =>
  item.addEventListener (
    'click', function () {
			item.querySelector(".support__faq-hidden-text").classList.toggle("active")
			item.querySelector(".support__button-svg").classList.toggle("active")
    }
))

// Закрытие меню при клике на ссылку //

document.querySelectorAll(".header__link").forEach(item =>
  item.addEventListener (
    "click", function () {
      document.getElementById("toggle").checked = false;
    }
  ))

