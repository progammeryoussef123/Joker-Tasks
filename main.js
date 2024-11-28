let inp = document.getElementById("inp");
let add = document.getElementById("add");
let boxs = document.querySelectorAll(".box");
let drag = null;


/*add item when onclick add ?!*/
add.onclick = ()=>{
    if(inp.value != ''){
        boxs[0].innerHTML += `
        <p draggable="true" class="item" >${inp.value}</p>
        `;
        inp.value = '';
    }
    dragItem();
}

function dragItem(){
    let items = document.querySelectorAll(".item");
    items.forEach(item=>{
        item.addEventListener('dragstart', function(){
            drag = this;
            this.style.opacity = '0.5';
        })


        item.addEventListener('dragend', function(){
           drag = null;
           this.style.opacity = '1';
        })


        boxs.forEach(box=>{
            box.addEventListener('dragover' , function(e){
                e.preventDefault();
                this.style.background = '#101336';
            })


            box.addEventListener('dragleave', function(){
                this.style.background = '#333';
            })


            box.addEventListener('drop', function(){
                this.append(drag);
                this.style.background = '#333';
            })
        })
    })
}