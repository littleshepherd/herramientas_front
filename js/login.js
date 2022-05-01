const form = document.getElementById('form-login');
window.onload = () => {
    // login
    const login = async (jsonSend) => {
        const response = await fetch('https://projectherramientas.herokuapp.com/project_herramientas/login', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(jsonSend)
        });
        console.log(response.status)
        if (response.status == 201) {
            window.location.href = 'panel.html';
        }
    }

    form.onsubmit = (e) => {
        e.preventDefault();
        let email = document.getElementById('email')
        let password = document.getElementById('password')
        email = email.value
        password = password.value
        let jsonSend = {
            user: email,
            password: password
        }
        login(jsonSend);

    }

    // register
    const register = async (jsonSend) => {
        const response = await fetch('https://projectherramientas.herokuapp.com/project_herramientas/register', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(jsonSend)
        });
        console.log(response.status)
        if (response.status == 201) {
            window.location.href = 'panel.html';
        }
    }
    const formRegister = document.getElementById('form-register');
    formRegister.onsubmit = (e) => {
        e.preventDefault();
        let name = document.getElementById('name-register');
        let email = document.getElementById('email-register');
        let password = document.getElementById('password-register');
        name = name.value
        email = email.value
        password = password.value
        let jsonSend = {
            name: name,
            email: email,
            password: password
        }
    }

    // contact
    const contact = async (jsonSend) => {
        const response = await fetch('https://projectherramientas.herokuapp.com/project_herramientas/contact', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(jsonSend)
        });
        console.log(response.status)
        if (response.status == 201) {
            window.location.href = 'panel.html';
        }
    }
    const formContact = document.getElementById('form-contact');
    formContact.onsubmit = (e) => {
        e.preventDefault();
        let name = document.getElementById('contact-name');
        let email = document.getElementById('contact-email'); 
        let phone = document.getElementById('contact-phone');
        let message = document.getElementById('contact-message');
        name = name.value
        email = email.value
        phone = phone.value
        message = message.value
        let jsonSend = {
            name: name,
            email: email,
            phone: phone,
            message: message
        }
    }

}


