let container = document.querySelector('#container')

let button1 = document.querySelector('.grid1')
button1.addEventListener('click', () => {
    defaultGrid(16,16)

})

let button2 = document.querySelector('.grid2')
button2.addEventListener('click', () => {
    defaultGrid(32,32)

})

let button3 = document.querySelector('.grid3')
button3.addEventListener('click', () => {
    defaultGrid(20,64)

})

//Default grid that spawns when page is open

function defaultGrid(r,c){
    while(container.firstChild){
        container.removeChild(container.firstChild)

    }

    
   
   for(let i = 0; i < r; i++){
        let rows = document.createElement('div')
        rows.classList.add('rows')

        for(let j = 0; j < c; j++){
            let columns = document.createElement('div')
            columns.classList.add('columns')
 
            columns.addEventListener('mouseenter', (e) => {
            e.target.classList.add('paintedCell');
        
    })
            rows.appendChild(columns)
        }
        container.appendChild(rows)
    }
}

defaultGrid(16,16)
//END

//Colors the grid to shitty green 



  
  //END
  
