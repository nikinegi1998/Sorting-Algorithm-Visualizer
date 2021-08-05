
async function insertion(){
    const elem = document.querySelectorAll('.bar')	
	let size = elem.length;
    elem[0].style.background = 'green'

	for(let i =1; i<size; i++){
		
        let j=i;
        elem[i].style.background = 'red'
		await waitforme(delay)
        
        while(j>0 && parseInt(elem[j].style.height)<parseInt(elem[j-1].style.height)){
            
            let temp = elem[j].style.height;
            elem[j].style.height =elem[j-1].style.height;
            elem[j-1].style.height= temp;
            j--;            
                    
        }
        for(let k=i; k>=0; k--)
            elem[k].style.background = 'green'
            
        
        // elem[i].style.background = 'green'
	}

}


const insertionBtn = document.querySelector(".insertionsort")

insertionBtn.addEventListener('click', async()=>{
	// disable buttons and slider
	// disableAll()

	// call sorting method
	await insertion()
	
	// enable btns and slider
	// enableAll()
})
