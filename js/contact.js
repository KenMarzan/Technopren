document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", handleContactFormSubmit);
  }
});

async function handleContactFormSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const submitButton = form.querySelector('button[type="submit"]');
  const formData = new FormData(form);

  const isValid = validateContactForm(form);

  if (!isValid) {
    AgriGrow.showMessage("Please correct the errors in the form.", "error");
    return;
  }

  AgriGrow.setButtonLoading(submitButton, true);

  try {
    await simulateFormSubmission(formData);

    AgriGrow.showMessage(
      "Thank you for your message! We'll get back to you soon.",
      "success"
    );

    form.reset();

    const fields = form.querySelectorAll("input, textarea");
    fields.forEach((field) => {
      field.classList.remove("form-error", "form-success");
    });
  } catch (error) {
    console.error("Form submission error:", error);
    AgriGrow.showMessage(
      "Sorry, there was an error sending your message. Please try again.",
      "error"
    );
  } finally {
    AgriGrow.setButtonLoading(submitButton, false);
  }
}

function validateContactForm(form) {
  const fields = form.querySelectorAll("input[required], textarea[required]");
  let isValid = true;

  fields.forEach((field) => {
    if (!AgriGrow.validateField(field)) {
      isValid = false;
    }
  });

  return isValid;
}

function simulateFormSubmission(formData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.1;

      if (success) {
        console.log("Form data:", Object.fromEntries(formData));
        resolve();
      } else {
        reject(new Error("Simulated network error"));
      }
    }, 1500);
  });
}

function validateEmail(email) {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email);
}

function formatPhoneNumber(phoneNumber) {
  const cleaned = phoneNumber.replace(/\D/g, "");

  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(
      6
    )}`;
  }

  return phoneNumber;
}

document.addEventListener("DOMContentLoaded", function () {
  const phoneInput = document.getElementById("phone");

  if (phoneInput) {
    phoneInput.addEventListener("input", function (e) {
      const formatted = formatPhoneNumber(e.target.value);
      if (formatted !== e.target.value) {
        e.target.value = formatted;
      }
    });
  }
});
