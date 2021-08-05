function disableAll(){
    // document.querySelector('bubblesort').disabled = true
	// document.querySelector('.selectionsort').disabled = true
	// document.querySelector('.insertionsort').disabled = true
	// document.querySelector('.mergesort').disabled = true
	// document.querySelector('.quicksort').disabled = true
	// document.querySelector('.generate').disabled = true
	// document.querySelector('#size').disabled = true
	// document.querySelector('#speed').disabled = true
}
function enableAll(){
    // document.querySelector('bubblesort').disabled = false
	// document.querySelector('.selectionsort').disabled = false
	// document.querySelector('.insertionsort').disabled = false
	// document.querySelector('.mergesort').disabled = false
	// document.querySelector('.quicksort').disabled = false
	// document.querySelector('.generate').disabled = false
	// document.querySelector('#size').disabled = false
	// document.querySelector('#speed').disabled = false
}

let arrSize =document.querySelector('#size')

arrSize.addEventListener('input', ()=>{
    createNewArr(parseInt(arrSize.value))
})

let arr=[]
createNewArr();

function createNewArr(numberOfBars =60){
    const b = document.querySelector('#bars')
    b.innerHTML = ''

    arr=[]
    for(let i =0; i<numberOfBars; i++){
        arr[i] = Math.ceil(Math.random()*100+1)
    }

    const bars = document.querySelector('#bars')
    for(let i=0; i<numberOfBars; i++){
        const bar = document.createElement("div")
        bar.style.height = `${arr[i]*3}px`
        bar.classList.add('bar')
        bar.classList.add('flex-item')
        bar.classList.add(`barNo${i}`)
        bars.appendChild(bar)
    }
}


const generateNewArr = document.querySelector('.generate')
generateNewArr.addEventListener('click', ()=>{
    createNewArr(arrSize.value)
})


function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

let delay = 200;
