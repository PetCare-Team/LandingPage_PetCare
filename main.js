function showRegistrationForm() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
      <h2 class="welcome">Regístrate gratis</h2>
      <div class="input-container">
        <input type="text" placeholder="Nombres" class="input-field">
        <input type="text" placeholder="Apellidos" class="input-field">
      </div>
      <input type="text" placeholder="Correo electrónico" class="input-field">
      <input type="text" placeholder="Crear contraseña" class="input-field">
      <button class="submit-btn">Registrarse</button>
    `;
    mainContent.classList.remove('login-content');
    mainContent.classList.remove('password-recovery-content');
    mainContent.classList.add('registration-content');
  }
  

