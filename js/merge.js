
async function merge(elem, start, m, high){
    let lLength = m-start+1
    let rLength = high-m

    let left = new Array(lLength);
    let right = new Array(rLength);

    for(let i=0; i<lLength; i++){
        await waitforme(delay)
        elem[i+start].style.background = 'orange';
    
        left[i] = elem[i+start].style.height;
    }
    for(let i=0; i<rLength; i++){
        await waitforme(delay)
        elem[m+1+i].style.background = 'red';
        right[i] = elem[m+1+i].style.height;
    }

    let i=0, j=0, k=start;
    await waitforme(delay)
    while(i<lLength && j<rLength){
        await waitforme(delay)
    
        if(parseInt(left[i])<=parseInt(right[j])){
            elem[k].style.height = left[i]
            i++;
        }
        else{
            elem[k].style.height = right[j]
            j++;
        }
        k++;
        elem[k].style.background ='green'
    }

    while(i<lLength){
        await waitforme(delay)
        elem[k].style.height = left[i];
        elem[k].style.background ='green'
        i++; k++;
    }
    while(j<rLength){
        await waitforme(delay)
        elem[k].style.height = right[j];
        elem[k].style.background = 'green'
        j++; k++;
    }
    elem[0].style.background = 'green'
}

async function mergesort(elem, start, high){
	if(start<high){
        const mid  = start + Math.floor((high - start) / 2);
        await mergesort(elem, start, mid)
        await mergesort(elem, mid+1, high)
        await merge(elem, start, mid, high)
    }
}

const mergeBtn = document.querySelector(".mergesorting")

mergeBtn.addEventListener('click', async()=>{
    const elem = document.querySelectorAll('.bar')	
    const size = parseInt(elem.length);
    const start =0

    await mergesort(elem, start, (size-1))
})