let containerEmpty = document.getElementById('container-empty')
let containerInput = document.getElementById('container-input')
let containerTareas = document.getElementById('container-tareas')
let btnTarea = document.getElementById('btn-tarea')
let btnAdd = document.getElementById('btn-add')
let btnTarea1 = document.getElementById('btn-tarea1')
let entrada = document.getElementById('entrada')
let tareaCard = document.getElementById('tareas-card')
let containerImg = document.getElementById('container-img')
let btnImg = document.getElementById('btn-img')


//al hacer click en agregar tarea 1er pantalla oculta COntainer empty y muestra input tarea
btnTarea.addEventListener('click', (e) =>{
    e.preventDefault;
    containerEmpty.style.display='none'
    containerTareas.style.display='none'
    containerInput.style.display='block'

})

// al hacer click en agregar tarea en la lista de tarea oculta Container tarea y muestra input tarea
btnTarea1.addEventListener('click', () =>{
    containerEmpty.style.display='none'
    containerInput.style.display='block'
    containerTareas.style.display='none'


})
//abre lista de imagenes
btnImg.addEventListener('click', () =>{
    containerImg.style.display = 'block'
})
// agrega tarea en tareaCard, muetra lista de tareas.

btnAdd.addEventListener('click',() =>{
    if (entrada.value !='') {
        
    let tarea = entrada.value
    var task = document.createElement('h3')
    var txt = document.createTextNode(tarea)

    task.appendChild(txt)
    tareaCard.appendChild(task)

    containerTareas.style.display ='block'
    containerInput.style.display ='none'
    containerImg.style.display ='none'
    }

    else {
        alert('Ingrese una tarea y elija una imagen')
    }




    

})

