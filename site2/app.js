const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')


 item.addEventListener('dragstart', dragstart) 
 item.addEventListener('dragend', dragend) 



 for (const placeholder of placeholders){
   placeholder.addEventListener('dragover', dragover)
   placeholder.addEventListener('dragenter',dragenter)
   placeholder.addEventListener('drop', dragdrop)
   placeholder.addEventListener('dragleave', dragleave)
 }
 
 function dragover(event){
   event.preventDefault()
 }

 function dragenter(event){
event.target.classList.add('hoverd')

 }

function dragleave(event){
event.target.classList.remove('hoverd')

}

function dragdrop(event){
   event.target.classList.remove('hoverd')
   event.target.append(item)
 
}

 function dragstart(event) {
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0 )
    
 }

 function dragend(event){
    event.target.classList.remove('hold', 'hide')
    // event.target.className = 'item'

 } 


 var colorchagne = document.getElementById("manycolors");

 colorchagne.style.width = "100%";
 colorchagne.style.height = '100%';

 var color = 0;

setInterval(function () {
    color = color + 1 % 360;
    colorchagne.style.backgroundColor = "hsl(" + color + ", 100%, 50%)";
}, 50);


 


