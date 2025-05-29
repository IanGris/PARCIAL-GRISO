export function validateLastName(lastName) {
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/;
    return regex.test(lastName);
}

export function validateFirstName(firstName) {
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/;
    return regex.test(firstName);
}

export function validateDNI(dni) {
    const regex = /^\d{8}$/;
    return regex.test(dni);
}

export function validateDateOfBirth(dateOfBirth) {
    const date = new Date(dateOfBirth);
    return date.getFullYear() > 2006;
}

export function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

export function validateForm() {
    const lastName = document.getElementById('lastName').value.trim();
    const firstName = document.getElementById('firstName').value.trim();
    const dni = document.getElementById('dni').value.trim();
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value.trim();

    if (!validateLastName(lastName)) {
        alert('Apellido inválido. Solo letras.');
        return false;
    }
    if (!validateFirstName(firstName)) {
        alert('Nombre inválido. Solo letras.');
        return false;
    }
    if (!validateDNI(dni)) {
        alert('DNI inválido. Deben ser 8 números.');
        return false;
    }
    if (!validateDateOfBirth(dob)) {
        alert('Fecha de nacimiento inválida. Debe ser posterior a 2006.');
        return false;
    }
    if (!validateEmail(email)) {
        alert('Email inválido.');
        return false;
    }
    return true;
}
