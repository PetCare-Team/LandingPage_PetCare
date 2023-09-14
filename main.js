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
  

function showLoginForm() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
      <h2 class="welcome">Iniciar sesión</h2>
      <input type="text" placeholder="Correo electrónico" class="input-field">
      <input type="text" placeholder="Contraseña" class="input-field">
      <a href="#" class="forgot-password" onclick="showPasswordRecoveryForm()">¿Olvidó su contraseña?</a>
      <a href="#" class="register-link" onclick="showRegistrationForm()">¿Aún no posee una cuenta? Crear una.</a>
      <button class="submit-btn">Iniciar sesión</button>
    `;
    mainContent.classList.remove('registration-content');
    mainContent.classList.remove('password-recovery-content');
    mainContent.classList.add('login-content');
}
  


function showPasswordRecoveryForm() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
      <h2 class="welcome">Recuperar Contraseña</h2>
      <p class="recovery-instructions">Escriba su correo electrónico para enviarle un código y pueda recuperar su contraseña</p>
      <input type="text" placeholder="Correo electrónico" class="input-field" id="recovery-email" oninput="toggleSendButton()">
      <button class="send-btn" id="send-btn" disabled>Enviar</button>
    `;
    mainContent.classList.add('password-recovery-content');
}
  
function toggleSendButton() {
    const emailInput = document.getElementById('recovery-email');
    const sendButton = document.getElementById('send-btn');
  
    if (emailInput.value) {
      sendButton.disabled = false;
      sendButton.classList.add('send-btn-enabled');
    } else {
      sendButton.disabled = true;
      sendButton.classList.remove('send-btn-enabled');
    }
}
