const container = document.querySelector(".container");
const btnSignIn = document.getElementById("btn-sign-in");
const btnSignUp = document.getElementById("btn-sign-up");

btnSignIn.addEventListener("click", ()=>{
    container.classList.remove("toggle");
});

btnSignUp.addEventListener("click", ()=>{
    container.classList.add("toggle");
});


// validacion del formulario registro
// const addForm = document.getElementById("form-validation");
// addForm.addEventListener("submit", (e)=>{
//     if (addForm.checkValidity() ===false){
//         e.preventDefault();
//         e.stopImmediatePropagation();
//         addForm.classList.add('was-validate');
//         return false
//     }
// })

document.getElementById('form-validation').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario
            
            // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
            
            // Validar nombre (al menos 2 caracteres, solo letras y espacios)
    if (nombre === '') {
        alert('Por favor ingrese su nombre');
        return;
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,}$/.test(nombre)) {
        alert('El nombre debe contener al menos 2 caracteres y solo letras');
        return;
    }
            
            // Validar email
    if (email === '') {
        alert('Por favor ingrese su email');
        return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Por favor ingrese un email válido (ejemplo: usuario@dominio.com)');
        return;
    }
            
            // Validar contraseña (al menos 6 caracteres)
    if (password === '') {
        alert('Por favor ingrese su contraseña');
        return;
    } else if (password.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres');
        return;
    }
            
            // Si todo está correcto, se puede enviar el formulario
    alert('Registro exitoso!');
    this.submit(); // Envía el formulario
});