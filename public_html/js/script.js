//Получение элементов первого вопроса
const firstQuestionSection = document.getElementById("firstQuestionSection");
const firstQuestionVisibility = document.getElementById(
  "firstQuestionVisibility"
);
const firstQuestionIcon = document.getElementById("firstQuestionIcon");
let firstVisibility = false;

//Получение элементов второго вопроса
const secondQuestionSection = document.getElementById("secondQuestionSection");
const secondQuestionVisibility = document.getElementById(
  "secondQuestionVisibility"
);
const secondQuestionIcon = document.getElementById("secondQuestionIcon");
let secondVisibility = false;

//Получение элементов третьего вопроса
const thirdQuestionSection = document.getElementById("thirdQuestionSection");
const thirdQuestionVisibility = document.getElementById(
  "thirdQuestionVisibility"
);
const thirdQuestionIcon = document.getElementById("thirdQuestionIcon");
let thirdVisibility = false;

//Получение элемнтов четвертого вопроса
const fourQuestionSection = document.getElementById("fourQuestionSection");
const fourQuestionVisibility = document.getElementById(
  "fourQuestionVisibility"
);
const fourQuestionIcon = document.getElementById("fourQuestionIcon");
let fourVisibility = false;

//Отображение вопросов

let changeVisibilityFirst = () => {
  if (firstVisibility) {
    firstQuestionIcon.classList.remove("switch-icon");
    firstQuestionVisibility.innerHTML = `
      <div id="firstQuestionVisibility">
      </div>
    `;
    firstVisibility = false;
  } else {
    firstQuestionIcon.classList.add("switch-icon");
    firstQuestionVisibility.innerHTML = `
      <div class="question__visibility">
        <span>При чистке зубной нитью вы удаляете зубной налет и частички пищи в таких участках полости рта, куда зубной щетке не добраться между зубами и под пришеечной частью десны и между зубами</span>
      </div>
    `;
    firstVisibility = true;
  }
};

let changeVisibilitySecond = () => {
  if (secondVisibility) {
    secondQuestionIcon.classList.remove("switch-icon");
    secondQuestionVisibility.innerHTML = `
      <div id="secondQuestionVisibility">
      </div>
    `;
    secondVisibility = false;
  } else {
    secondQuestionIcon.classList.add("switch-icon");
    secondQuestionVisibility.innerHTML = `
      <div class="question__visibility">
        <span>Видов травм бывает много, даже в случае сломанного зуба встает вопрос, какая часть была сломана: коронковая часть или корень. Мог произойти не перелом, а подвывих. Или, может быть, вас беспокоит подвижность зуба. В любом случае надо прийти на прием к лучшим стоматологам нашей клиники</span>
      </div>
    `;
    secondVisibility = true;
  }
};

let changeVisibilityThird = () => {
  if (thirdVisibility) {
    thirdQuestionIcon.classList.remove("switch-icon");
    thirdQuestionVisibility.innerHTML = `
      <div id="thirdQuestionVisibility">
      </div>
    `;
    thirdVisibility = false;
  } else {
    thirdQuestionIcon.classList.add("switch-icon");
    thirdQuestionVisibility.innerHTML = `
      <div class="question__visibility">
        <span>
          Однозначного ответа на этот вопрос дать, к сожалению, нельзя – все зависит от ситуации:
          <br>
          <br>
          Чаще всего, разумеется, за один раз удаляется только один зуб. В некоторых стоматологиях больше одного зуба вам не удалят никогда
        </span>
      </div>
    `;
    thirdVisibility = true;
  }
};

let changeVisibilityFour = () => {
  if (fourVisibility) {
    fourQuestionIcon.classList.remove("switch-icon");
    fourQuestionVisibility.innerHTML = `
      <div id="fourQuestionVisibility">
      </div>
    `;
    fourVisibility = false;
  } else {
    fourQuestionIcon.classList.add("switch-icon");
    fourQuestionVisibility.innerHTML = `
      <div class="question__visibility">
        <span>
          Сегодня не существует технологии, позволяющей отбелить коронку или протез из любого материала. Это обусловлено самой структурой искусственных конструкций, которая отличается от структуры живой эмали. Поэтому перед тем, как подбирать цвет коронок, следует отбелить свои зубы, и затем уже изготавливать коронки под цвет отбеленных зубов
        </span>
      </div>
    `;
    fourVisibility = true;
  }
};

firstQuestionSection.addEventListener("click", changeVisibilityFirst);
secondQuestionSection.addEventListener("click", changeVisibilitySecond);
thirdQuestionSection.addEventListener("click", changeVisibilityThird);
fourQuestionSection.addEventListener("click", changeVisibilityFour);

/* TIMER */
const year = document.querySelector("#year");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

const nextDate = new Date(`August 1 2023 00:00:00`);

const updateTimer = () => {
  const currentTime = new Date();
  const diff = nextDate - currentTime;

  const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
  const secondsLeft = Math.floor(diff / 1000) % 60;

  days.innerText = daysLeft < 10 ? "0" + daysLeft : daysLeft;
  hours.innerText = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
  minutes.innerText = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
  seconds.innerText = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;
};

updateTimer();

setInterval(updateTimer, 1000);

//Открытие меню на мобиле

const burgerOpen = document.getElementById("burgerOpen");
const burgerClose = document.getElementById("burgerClose");
const navMobileWrapper = document.getElementById("navMobileWrapper");
const elemsNav = document.querySelectorAll(".mobile-nav__list > .nav__item");

burgerOpen.addEventListener("click", () => {
  navMobileWrapper.classList.remove("close__visibility");
});

burgerClose.addEventListener("click", () => {
  navMobileWrapper.classList.add("close__visibility");
});

for (let i = 0; i <= elemsNav.length; i++) {
  elemsNav[i].addEventListener("click", () => {
    navMobileWrapper.classList.add("close__visibility");
  });
}
