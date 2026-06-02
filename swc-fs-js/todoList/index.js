const input=document.getElementById('in');
const output=document.getElementById('tasks');
const completed=document.getElementById('completed');

let queue=[];
const add=document.getElementById('addBtn');
add.addEventListener('click',()=>{
    let string=input.value;
    if(string.length===0) return;
    const box=document.createElement('div');
    const check=document.createElement('input');
    check.type='checkbox';
    const task=document.createElement('span');
    task.textContent=string;
    box.appendChild(check);
    box.appendChild(task);
    output.appendChild(box);
    check.addEventListener('change',()=>{
        if(box.parentElement===output)
            {
                check.checked = false;
                queue.push(box);
                completed.appendChild(box);
                if(queue.length>5) {
                    queue[0].remove();
                    queue.shift();
                }
            }
        else
        {
            check.checked=false;
            queue.splice(queue.indexOf(box), 1);
            output.appendChild(box);
        }
    })
    string="";
    input.value=string;
})