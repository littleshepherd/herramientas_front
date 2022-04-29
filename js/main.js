
let games= [];
const container = document.getElementById('row-container');
const request = async () => {
    const response = await fetch('http://localhost/project_herramientas/games');

    const data  = await response.json();
    console.log(data);
    
    const games = data.map(({id,name,description,total,price,category,image}) =>   
  
    `<div class="col-sm-3 ">
        <div class="card w-100 card-border mb-5">
            <img src="${image}" class="card-img-top" alt="...">
            <div class="card-body bg-secondary">
                <h5 class="card-title text-light">${name}</h5>
                <p class="card-text text-light">${description}.</p>
           
            </div>
            
        </div>
    </div>`)
   
 return games
    
  };
const render = async ()=> {
    games = await request();
    container.innerHTML = games.join('');
}
 render();




    
        
