console.log('1-inicio');

const getUsers = async () => {
    console.log('inicio-getUsers');
    let response = await fetch('https://jsonplaceholder.typicode.com/users/1')
    let data = await response.json();
    console.log('meio-data', data);
    console.log('fim-getUsers');
}

getUsers();

console.log('4-fim');