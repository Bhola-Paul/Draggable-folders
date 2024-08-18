let lists=document.querySelectorAll(".list");
let left=document.querySelector(".left");
let right=document.querySelector(".right");
// console.log(lists);
// console.log(left);
// console.log(right);
for (const list of lists) {
    // console.log(list);
    list.addEventListener("dragstart",(e)=>{
        selected=e.target;
        right.addEventListener("dragover",(e)=>{
            e.preventDefault();
        })
        right.addEventListener("drop",(e)=>{
            right.appendChild(selected);
            selected=null;
        })
        left.addEventListener("dragover",(e)=>{
            e.preventDefault();
        })
        left.addEventListener("drop",(e)=>{
            left.appendChild(selected);
            selected=null;
        })
    })
}


