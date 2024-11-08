//store the reference  ...box ... droppable
const draggableElement = document.querySelectorAll('.box');
const droppableElement = document.querySelectorAll('.droppable');
let score = 0;
//DRAG START
draggableElement.forEach(element=>{
    
    element.addEventListener('dragstart', (drgStart)=>{
        drgStart.dataTransfer.setData('text', drgStart.target.id);
        //apply the css draggableFormat       ---CSS CLASS---
        drgStart.currentTarget.classList.add('draggableFormat');
        //console.log('dragstart event is activated!');
       // console.log(drgStart); //to check if data transfer is working

    });//end of dragstart    
});


//DROP EVENT
droppableElement.forEach(element=>{
    element.addEventListener('drop', drpEvt=>{
        drpEvt.preventDefault();
        const droppedElementId = drpEvt.dataTransfer.getData('text'); //BOX1
        const dropZoneId = drpEvt.target.getAttribute('data-draggable-id');
        const draggableElement = document.getElementById(droppedElementId);

        drpEvt.target.appendChild(document.getElementById(droppedElementId));
        //drpEvt.target.appendChild(draggableElement.cloneNode(true));
        //console.log(dropZoneId);
        if(droppedElementId===dropZoneId){
            //console.log('Right');
            element.classList.add('correct');
            // document.getElementById('correct').innerText = "";
            score+=1;
            document.getElementById('remarks').innerText = "Correct!";
            document.getElementById('scores').innerText = score;
        }else{
            //console.log('Wrong');
            element.classList.add('wrong');
            document.getElementById('remarks').innerText = "Wrong!";
        }//end of if else

    });//end of add eventListener

    //DRAG OVER
    element.addEventListener('dragover', (drgOverEvt)=>{
        drgOverEvt.preventDefault();
    });//end of drag over
});

//DRAG END
draggableElement.forEach(element=>{
    element.addEventListener('dragend', drgendEvt=>{
        //drgendEvt.currentTarget.classList.remove('draggableFormat');
    });
});