// Centro Oasiz - Validación de formulario

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const email = document.getElementById("email");
    const confirmEmail = document.getElementById("confirmEmail");
  
    form.addEventListener("submit", function (e) {
      if (email.value !== confirmEmail.value) {
        e.preventDefault(); // Detiene el envío del formulario
        alert("Los correos electrónicos no coinciden.");
        confirmEmail.focus();
      }
    });
  });
  