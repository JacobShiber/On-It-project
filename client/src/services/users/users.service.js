const basic_url = 'http://localhost:6500/users';


const userLogin = async (userData) => {
    return await fetch(`${basic_url}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    })
    .then(response => console.log(response))
    .catch(err => console.log(err));
}


const userRegister = async (userData) => {
    return await fetch(`${basic_url}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    })
    .then(response => console.log(response))
    .catch(err => console.log(err));
}