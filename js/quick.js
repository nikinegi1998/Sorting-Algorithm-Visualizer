

async function partition(elem, low, high){
    
    // const ran = Math.floor(Math.random()*high-low+1)+low
    // let pivot = elem[high].style.height;
    let i=low-1
    elem[high].style.background = 'red'

    for(let j=low; j<high; j++){
        elem[j].style.background = 'yellow'
        await waitforme(delay)

        if(parseInt(elem[j].style.height)<parseInt(elem[high].style.height)){
            i++
            
            let temp = elem[j].style.height
            elem[j].style.height = elem[i].style.height
            elem[i].style.height = temp
            elem[i].style.background = 'orange'
            await waitforme(delay)            
        }
        else
            elem[j].style.background = 'pink'
    }

    i++
    await waitforme(delay)
    let temp = elem[i].style.height;
    elem[i].style.height = elem[high].style.height;
    elem[high].style.height = temp

    elem[i].style.background = 'green'
    elem[high].style.background = 'pink'

    await waitforme(delay)

    for(let i=0; i<elem.length; i++){
        if(elem[i].style.background != 'green'){
            elem[i].style.background = 'black'
        }
    }

    return i;
}


async function quick(elem, low, high){
	if(low<high){
        let p = await partition(elem, low, high)
        await quick(elem, low, p-1)
        await quick(elem, p+1, high)
    }
    else{
        if(low >= 0 && high >= 0 && low <elem.length && high <elem.length){
            elem[high].style.background = 'green';
            elem[low].style.background = 'green';
            elem[high+1].style.background = 'green';
        }
    }
}

const quickBtn = document.querySelector(".quicksort")

quickBtn.addEventListener('click', async()=>{
    const elem = document.querySelectorAll('.bar')	
    const size = parseInt(elem.length);
    const start = 0

    await quick(elem, start, (size-1))
})