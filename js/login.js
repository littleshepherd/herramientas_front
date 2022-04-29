const form = document.getElementById('form-login');
window.onload = ()=>{

const login = async (jsonSend) => {
    const response = await fetch('http://localhost/project_herramientas/login', {
        method: 'POST',
        headers: { 'content-type': 'application/json'},
        body: JSON.stringify(jsonSend)
    });
    console.log(response.status)
    if (response.status== 201){
        window.location.href ='other.html';
    }
}

form.onsubmit= (e)=>{
    e.preventDefault();
    let email = document.getElementById('email')
    let password = document.getElementById('password')
    email = email.value
    password = password.value
    const jsonSend = {
        user: email,
        password: password
    }
    login(jsonSend);

}
}