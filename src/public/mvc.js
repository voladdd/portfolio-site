// Animations
const CardInProgressAnimation = (title) => {
  const cardsCaptions = document.querySelectorAll(
    "#card__in_progress-animation"
  );
  const states = [
    `${title}`,
    `${title}.`,
    `${title}..`,
    `${title}...`,
    `${title}..`,
    `${title}.`,
  ];
  let stateCount = 0;
  let statesLength = states.length;
  setInterval(() => {
    cardsCaptions.forEach((caption) => {
      caption.textContent = states[stateCount];
    });
    stateCount = (stateCount + 1) % statesLength;
  }, 300);
};

// Model

const cardTypes = {
  livecode: "livecode",
  code: "code",
  techFullstack: "FullStack",
  techGeneral: "General",
};

const categories = {
  frontendBackend: "Frontend + Backend",
  frontend: "Frontend",
  backend: "Backend",
};

const model = {
  currentCategory: null,
  categories: [
    {
      id: 0,
      categoryTitle: categories.frontendBackend,
      works: [
        {
          type: cardTypes.code,
          techType: cardTypes.techFullstack,
          src: "./assets/images/preview_product-bakery-store.jpg",
          codeLink: "https://github.com/voladdd/bakery-store",
          title: "Bakery store",
          body: "E-commerce application for bakery store, with different roles such as User, Seller, Admin, and specific functionalites for each one",
          techFrontend: "Typescript, React, Bootstrap, Axios",
          techBackend: "Typescript, Nestjs, Sequelize, PostgreSQL",
          date: "november/2022 -",
          dateContinued: "in progress...",
        },
        {
          type: cardTypes.code,
          techType: cardTypes.techFullstack,
          src: "./assets/images/preview_product-store-moderation.png",
          codeLink: "https://github.com/voladdd/spring-crud-app",
          title: "Product store moderation",
          body: "Mini-dashboard panel for product store moderator, using basic CRUD operations",
          techFrontend: "Typescript, React, Bootstrap, Axios",
          techBackend: "Java, Spring Boot, PostgreSQL",
          date: "december/2022",
          dateContinued: "",
        },
        {
          type: cardTypes.code,
          techType: cardTypes.techFullstack,
          src: "./assets/images/preview_paint-online.png",
          codeLink: "https://github.com/voladdd/paint-online",
          title: "Paint online",
          body: "Online version of paint with ability to chat and draw with someone simultaneously",
          techFrontend: "Typescript, React, Socket.IO",
          techBackend: "Typescript, Nestjs",
          date: "november/2022",
          dateContinued: "",
        },
      ],
    },
    {
      id: 1,
      categoryTitle: categories.frontend,
      works: [
        {
          type: cardTypes.livecode,
          techType: cardTypes.techGeneral,
          src: "./assets/images/preview_ashley-co.png",
          codeLink: "https://github.com/voladdd/lgp-ashley-co",
          liveLink: "https://voladdd.github.io/lgp-ashley-co/",
          title: "ASHLEY&CO",
          body: "Landing page for parfume store",
          tech: "HTML, SCSS",
          date: "october/2022",
          dateContinued: "",
        },
        {
          type: cardTypes.livecode,
          techType: cardTypes.techGeneral,
          src: "./assets/images/preview_base-apparel-coming-soon.png",
          codeLink: "https://github.com/voladdd/lgp-base-apparel-coming-soon",
          liveLink: "https://voladdd.github.io/lgp-base-apparel-coming-soon/",
          title: "Base Apparel",
          body: "Frontend Mentor, Coming soon page solution",
          tech: "HTML, CSS",
          date: "september/2022",
          dateContinued: "",
        },
        {
          type: cardTypes.livecode,
          techType: cardTypes.techGeneral,
          src: "./assets/images/preview_weather-forecast.png",
          codeLink: "https://github.com/voladdd/weather-forecast",
          liveLink: "https://voladdd.github.io/weather-forecast/",
          title: "Weather Forecast",
          body: "SPA for forecasting weather in any city in the world, every forecast have unique icon & background",
          tech: "HTML, CSS, JS",
          date: "june/2021",
          dateContinued: "",
        },
        {
          type: cardTypes.livecode,
          techType: cardTypes.techGeneral,
          src: "./assets/images/preview_haus-alcohol.png",
          codeLink: "https://github.com/voladdd/lgp-haus-alcohol",
          liveLink: "https://voladdd.github.io/lgp-haus-alcohol/",
          title: "HAUS ALCOHOL",
          body: "Landing page for alcoholic beverage store",
          tech: "HTML, SCSS",
          date: "october/2021",
          dateContinued: "",
        },
      ],
    },
    {
      id: 2,
      categoryTitle: categories.backend,
      works: [
        {
          type: cardTypes.code,
          techType: cardTypes.techGeneral,
          src: "./assets/images/preview_automation-testing.png",
          codeLink: "https://github.com/voladdd/selenium-webdriver-ecommerce",
          title: "Automation testing",
          body: "Automation of functional test scripts for login form",
          tech: "Typescript, Selenium Webdriver, Mocha, Chai",
          date: "june/2022",
          dateContinued: "",
        },
      ],
    },
  ],
};

// View

const view = {
  init() {
    this.categoriesListElem = document.getElementById("categoriesList");
    this.render();
  },

  render() {
    let category;
    const currentCategory = controller.getCurrentCategory();
    const categories = controller.getCategories();
    let isActive = false;
    this.categoriesListElem.innerHTML = "";

    for (let i = 0; i < categories.length; i++) {
      category = categories[i];
      let worksHTML = "";
      isActive = category.id === currentCategory.id;
      if (isActive) {
        category.works.forEach((work) => {
          if (work.type === cardTypes.code) {
            worksHTML += `<figure>
              <div class="card-code">
                <a href="${work.codeLink}">#CODE</a>
                <img src="${work.src}"/>
              </div>
              <figcaption>
                <h2>${work.title}</h2>
                <p>${work.body}</p>
                ${
                  work.techType === cardTypes.techFullstack
                    ? `<p><span>Frontend:</span> ${work.techFrontend}</p> <p><span>Backend:</span> ${work.techBackend}</p>`
                    : `<p>
                      <span>Tech:</span> ${work.tech}
                    </p>`
                }
                <p>${work.date}
                ${
                  work.dateContinued.length > 0
                    ? `<span id="card__in_progress-animation">${work.dateContinued}</span></p>`
                    : ""
                }
              </figcaption>
            </figure>`;
          } else if (work.type === cardTypes.livecode) {
            worksHTML += `<figure>
                <div class="card">
                  <a href="${work.liveLink}">#LIVE</a>
                  <a href="${work.codeLink}">#CODE</a>
                  <img src="${work.src}"/>
                </div>
                <figcaption>
                  <h2>${work.title}</h2>
                  <p>${work.body}</p>
                  <p><span>Tech:</span> ${work.tech}</p>
                  <p>${work.date}
                  ${
                    work.dateContinued.length > 0
                      ? `<span id="card__in_progress-animation">${work.dateContinued}</span></p>`
                      : ""
                  }
                </figcaption>
              </figure>`;
          }
        });
      }
      this.categoriesListElem.innerHTML += `<h2 onclick="(() => {
        controller.setCurrentCategory(${i});
        let contentHint = document.getElementsByClassName('content__hint')[0];
        let contentHintRect = contentHint.getBoundingClientRect();
        controller.scrollToY(contentHintRect.top + contentHintRect.y + window.scrollY);
      })(this)" class="content__categoryTitle ${isActive ? "active" : ""}">${
        category.categoryTitle
      }</h2>${
        worksHTML.length > 0 ? `<div class="works">${worksHTML}</div>` : ""
      }`;
    }

    //RENDER ANIMATIONS
    CardInProgressAnimation("in progress");
  },
};

// Controller

const controller = {
  init() {
    model.currentCategory = model.categories[0];
    view.init();
  },
  getCurrentCategory() {
    return model.currentCategory;
  },
  getCategories() {
    return model.categories;
  },
  scrollToY(y) {
    scrollTo({ top: y, behavior: "smooth" });
  },
  setCurrentCategory(categoryId) {
    if (categoryId === model.currentCategory.id) {
      model.currentCategory = "";
    } else {
      model.currentCategory = model.categories[categoryId];
    }
    view.render();
  },
};

controller.init();
