document.addEventListener('DOMContentLoaded', () => {

  // 1. SELECTOR DE MODO CLARO / OSCURO (LOCALSTORAGE)
  const themeToggleBtn = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const htmlElement = document.documentElement;

  const savedTheme = localStorage.getItem('theme') || 'light';
  htmlElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      
      htmlElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeIcon) return;
    if (theme === 'dark') {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    } else {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
    }
  }

  // 2. CUENTA REGRESIVA DINÁMICA
  const eventDate = new Date("2026-11-25T09:00:00").getTime();
  const daysEl = document.getElementById("cd-days");
  const hoursEl = document.getElementById("cd-hours");
  const minutesEl = document.getElementById("cd-minutes");
  const secondsEl = document.getElementById("cd-seconds");

  if (daysEl && hoursEl && minutesEl && secondsEl) {
    const countdown = setInterval(function() {
      const now = new Date().getTime();
      const distance = eventDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const formatTime = (time) => time < 10 ? `0${time}` : time;

      daysEl.innerText = formatTime(days);
      hoursEl.innerText = formatTime(hours);
      minutesEl.innerText = formatTime(minutes);
      secondsEl.innerText = formatTime(seconds);

      if (distance < 0) {
        clearInterval(countdown);
        daysEl.innerText = "00";
        hoursEl.innerText = "00";
        minutesEl.innerText = "00";
        secondsEl.innerText = "00";
        const title = document.querySelector(".countdown-section h2");
        if (title) title.innerText = "¡El evento ha comenzado!";
      }
    }, 1000);
  }

  // 3. CATÁLOGO INTERACTIVO CON FILTROS (MANIPULACIÓN DEL DOM)
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      projectItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // 4. VALIDACIÓN DE FORMULARIO EN TIEMPO REAL
  const form = document.getElementById('projectForm');
  const nameInput = document.getElementById('studentName');
  const emailInput = document.getElementById('studentEmail');
  const projectInput = document.getElementById('projectName');
  const categorySelect = document.getElementById('projectCategory');
  const descInput = document.getElementById('projectDescription');
  const successAlert = document.getElementById('formSuccessAlert');

  const institutionalEmailRegex = /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)*(?:tecmm|edu)\.mx$/i;

  function validateField(input, condition, errorElementId) {
    const errorElem = document.getElementById(errorElementId);
    if (!input || !errorElem) return false;

    if (condition) {
      input.classList.remove('is-invalid-custom');
      input.classList.add('is-valid-custom');
      errorElem.classList.add('d-none');
      return true;
    } else {
      input.classList.remove('is-valid-custom');
      input.classList.add('is-invalid-custom');
      errorElem.classList.remove('d-none');
      return false;
    }
  }

  if (form) {
    nameInput.addEventListener('input', () => {
      validateField(nameInput, nameInput.value.trim().length >= 3, 'nameError');
    });

    emailInput.addEventListener('input', () => {
      validateField(emailInput, institutionalEmailRegex.test(emailInput.value.trim()), 'emailError');
    });

    projectInput.addEventListener('input', () => {
      validateField(projectInput, projectInput.value.trim().length >= 4, 'projectError');
    });

    categorySelect.addEventListener('change', () => {
      validateField(categorySelect, categorySelect.value !== "", 'categoryError');
    });

    descInput.addEventListener('input', () => {
      validateField(descInput, descInput.value.trim().length >= 20, 'descError');
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const isNameValid = validateField(nameInput, nameInput.value.trim().length >= 3, 'nameError');
      const isEmailValid = validateField(emailInput, institutionalEmailRegex.test(emailInput.value.trim()), 'emailError');
      const isProjectValid = validateField(projectInput, projectInput.value.trim().length >= 4, 'projectError');
      const isCategoryValid = validateField(categorySelect, categorySelect.value !== "", 'categoryError');
      const isDescValid = validateField(descInput, descInput.value.trim().length >= 20, 'descError');

      if (isNameValid && isEmailValid && isProjectValid && isCategoryValid && isDescValid) {
        successAlert.classList.remove('d-none');
        form.reset();
        
        [nameInput, emailInput, projectInput, categorySelect, descInput].forEach(elem => {
          elem.classList.remove('is-valid-custom');
        });

        setTimeout(() => {
          successAlert.classList.add('d-none');
        }, 5000);
      }
    });
  }

});