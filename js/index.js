const input = document.getElementById("input")
const add = document.getElementById("add")
const clear = document.getElementById("clear")
const list = document.getElementById("list")
    const tasks = ["Faire du sport","Jouer de la guitare","Manger","Dormir"]

    // creer des listes 
    function taskToDOM(task) {
        if (typeof task === 'string' && task) {
            const li = document.createElement('li')
            const remove = document.createElement('button')
            li.textContent = task;
            remove.textContent = 'Supprimer'
            remove.className = 'closeBtn' 
            li.appendChild(remove)
            list.insertBefore(li,list.firstChild)

    // supprimer une liste  grâce au boutton REMOVE
            remove.addEventListener("click", () => {
            list.removeChild(remove.parentNode)
    } )

    
        }
    }

    // Ajouter une nouvelle tâche
        function newTask(params) {
            
            taskToDOM(input.value)
            input.value = ""
           
        }

        
    add.addEventListener('click', newTask);
    input.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
            newTask()
        }
    })

   //Executer la fonction taskToDOM (initialiser la tâche)
   tasks.forEach(task => taskToDOM(task))
    
    // on supprime la liste du DOM
    clear.addEventListener("click",() => {
        list.innerHTML =''
    })

    //Marquer une tâche comme complet
    li.addEventListener('click', () => {
        li.className = "TaskCompleted"
    } )
  