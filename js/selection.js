
async function selection(){
	const elem = document.querySelectorAll('.bar')	
	let size = elem.length;

	for(let i =0; i<size-1; i++){
		let index=i;
        elem[i].style.background = 'blue';

        await waitforme(delay);
        for(let j=i+1; j<size; j++){
            elem[j].style.background = 'red'
            await waitforme(delay);
            let curr = index
            if(parseInt(elem[index].style.height)>parseInt(elem[j].style.height)){
                index=j;
            }   
            else
                elem[j].style.background = 'black'

        }

        let temp = elem[i].style.height;
        elem[i].style.height = elem[index].style.height;
        elem[index].style.height = temp;

        elem[index].style.background = 'black'
        elem[i].style.background = 'green'
	}
    elem[size-1].style.background = 'green'
}

const selectionbtn = document.querySelector('.selectionsort')

selectionbtn.addEventListener('click', async ()=>{
    await selection()
})