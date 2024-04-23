function getUsers() {
    const BASE_URL = 'http://localhost/proyectos/api'
    fetch(`${BASE_URL}/user.php?id=1`)
    .then( data1 => {
        console.log(data1)
        return fetch(`${BASE_URL}/user.php?id=2`)
    })
    .then( data2 => {
        console.log(data2)
        return fetch(`${BASE_URL}/user.php?id=3`)
    })
    .then( data3 => {
        console.log(data3)
        return fetch(`${BASE_URL}/user.php?id=4`)
    })
    .catch( err => console.log('ERROR!', err))
}

getUsers()