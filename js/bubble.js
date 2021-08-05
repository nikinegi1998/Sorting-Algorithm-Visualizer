
async function bubble(){
	
	const elem = document.querySelectorAll('.bar')	
	let size = elem.length;

	for(let i =0; i<size-1; i++){
		
		for(let j=0; j<size-i-1; j++){
			elem[j].style.background = 'red'
			elem[j+1].style.background = 'red'
			
			if(parseInt(elem[j].style.height)>parseInt(elem[j+1].style.height)){
				
				await waitforme(delay);
				let temp = elem[j].style.height;
				elem[j].style.height = elem[j+1].style.height;
				elem[j+1].style.height = temp;
			}
			elem[j].style.background = 'black'
			elem[j+1].style.background = 'black'			
		}
		
		elem[size-i-1].style.background = 'green'		
	}

	elem[0].style.background = 'green'
}


const bubbleBtn = document.querySelector(".bubblesort")


bubbleBtn.addEventListener('click', async()=>{
	// disable buttons and slider
	// disableAll()

	// call sorting method
	await bubble()
	
	// enable btns and slider
	// enableAll()
})
