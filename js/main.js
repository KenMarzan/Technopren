document.addEventListener("DOMContentLoaded", function () {
  initSmoothScrolling();
  initHeaderScroll();
  initScrollAnimations();
  initMobileMenu();
  initFormValidation();
});

function initSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const headerHeight = document.querySelector("header").offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

function initHeaderScroll() {
  const header = document.querySelector("header");
  let lastScrollTop = 0;
  let ticking = false;

  function updateHeader() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      header.style.transform = "translateY(-100%)";
    } else {
      header.style.transform = "translateY(0)";
    }

    lastScrollTop = scrollTop;
    ticking = false;
  }

  window.addEventListener("scroll", function () {
    if (!ticking) {
      requestAnimationFrame(updateHeader);
      ticking = true;
    }
  });
}

function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll(".group, .fade-in");
  animatedElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(element);
  });
}

function initMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("show");

      const icon = mobileMenuBtn.querySelector("svg");
      if (mobileMenu.classList.contains("show")) {
        icon.innerHTML =
          '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
      } else {
        icon.innerHTML =
          '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
      }
    });

    const mobileLinks = mobileMenu.querySelectorAll("a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", function () {
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("show");

        const icon = mobileMenuBtn.querySelector("svg");
        icon.innerHTML =
          '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
      });
    });
  }
}

function initFormValidation() {
  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    const inputs = form.querySelectorAll("input, textarea");

    inputs.forEach((input) => {
      input.addEventListener("blur", function () {
        validateField(this);
      });

      input.addEventListener("input", function () {
        if (this.classList.contains("form-error")) {
          validateField(this);
        }
      });
    });
  });
}

function validateField(field) {
  const value = field.value.trim();
  const type = field.type;
  const required = field.hasAttribute("required");

  field.classList.remove("form-error", "form-success");

  if (required && !value) {
    field.classList.add("form-error");
    return false;
  }

  if (type === "email" && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      field.classList.add("form-error");
      return false;
    }
  }

  if (type === "tel" && value) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ""))) {
      field.classList.add("form-error");
      return false;
    }
  }

  if (value) {
    field.classList.add("form-success");
  }

  return true;
}

function showMessage(message, type = "success") {
  const messagesContainer = document.getElementById("form-messages");

  if (messagesContainer) {
    messagesContainer.innerHTML = `
            <div class="message message-${type}">
                ${message}
            </div>
        `;
    messagesContainer.classList.remove("hidden");

    messagesContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });

    if (type === "success") {
      setTimeout(() => {
        messagesContainer.classList.add("hidden");
      }, 5000);
    }
  }
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function setButtonLoading(button, loading = true) {
  if (loading) {
    button.classList.add("loading");
    button.disabled = true;
    button.dataset.originalText = button.textContent;
    button.textContent = "Sending...";
  } else {
    button.classList.remove("loading");
    button.disabled = false;
    button.textContent = button.dataset.originalText || "Send Message";
  }
}

window.AgriGrow = {
  validateField,
  showMessage,
  setButtonLoading,
  debounce,
};
