let games= [];
const table  = document.getElementById('tbody');
const request = async () => {
    const response = await fetch('http://projectherramientas.herokuapp.com/project_herramientas/games');

    const data  = await response.json();
    console.log(data);
    
    
 return data
    
  };
const render = async ()=> {
    const data = await request();
     games = data.map(({id,name,description,total,price,category}) =>   {

    
        table.innerHTML += `<tr>
        <td>${id}</td>
        <td>${name}</td>
        <td>${description}</td>
        <td>${total}</td>
        <td>${price}</td>
        <td>${category}</td>
        <td> <button type="submit" class="btn btn-danger btn-sm" id="delete">Eliminar</button></td>
        <td><button class="btn btn-primary btn-sm">Actualizar</button></td>
        </tr>`;
        
      
  
    })
      
    const row = document.querySelector('#tbody tr')
    console.log(row.children)
        
    
}
 render();

 const form = document.getElementById('form-register');
 form.onsubmit = (e) => {
    e.preventDefault()

    let name = document.getElementById('name-register');
    let description = document.getElementById('description-register');
    let total = document.getElementById('total-register');
    let price = document.getElementById('price-register');
    let category = document.getElementById('category-register');
    let image = document.getElementById('image-register');

    name = name.value
    description = description.value
    total = total.value
    price = price.value
    category = category.value
    image = image.value
    let jsonSend = {
        name: name,
        description: description,
        total: total,
        price: price,
        category: category,
        image: image
    }
    return registerGame(jsonSend)
    }

 

 const registerGame = async (jsonSend) => {
    const response = await fetch('http://projectherramientas.herokuapp.com/project_herramientas/games', {
        method: 'POST',
        headers: { 'content-type': 'application/json'},
        body: JSON.stringify(jsonSend)
    });
    console.log(response.status)
    if (response.status== 201){
        window.location.href ='panel.html';
    }
}