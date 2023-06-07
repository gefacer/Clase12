function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var animal = document.getElementById('animal').value;
    var message = document.getElementById('message').value;

    if (name === '' || email === '' || phone === '' || animal === '' || message === '') {
        alert('Por favor, complete todos los campos del formulario.');
        return false;
    }

    return true;
}

function submitForm() {
    if (validateForm()) {
        // Aquí puedes agregar el código para enviar el formulario, por ejemplo, usando AJAX o fetch
        alert('¡El formulario se ha enviado exitosamente!');
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('animal').value = '';
        document.getElementById('message').value = '';
    }
}
