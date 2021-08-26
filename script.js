const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('.good')
const cheap = document.querySelector('.cheap')
const fast = document.querySelector('.fast')
const message = document.querySelector('.message')
toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(theClickedOne){
    if (good.checked && cheap.checked && fast.checked){

       
        if (good === theClickedOne){
            fast.checked = false
    
            message.innerHTML = `Uh uh you can only have <span>Good</span> &  <span>Cheap</span> !`

        }
        if (cheap === theClickedOne){
            good.checked = false
            
            message.innerHTML = `Uh uh you can only have <span>Cheap</span> & <span>Fast</span> !`

        }
        if (fast === theClickedOne){
            cheap.checked = false
           
            message.innerHTML = `Uh uh you can only have <span>Fast</span> & <span>Good</span> !`

        }
    }
}

