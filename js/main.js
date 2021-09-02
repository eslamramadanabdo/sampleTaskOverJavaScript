
//=================style task=======================

let w = document.getElementById('wid');
let h = document.getElementById('high');
let bg = document.getElementById('bg');
let btn = document.getElementById('btn');
let div = document.getElementById('div');

var addStyle = ()=>{
    div.style.width = w.value + "px";
    div.style.height = h.value + "px";
    div.style.backgroundColor = bg.value;
}


btn.addEventListener('click' , addStyle);


//==============================================================




// ==============dark and light================================================
 let btn = document.getElementById('button');
 let div = document.getElementById('div');



 btn.onclick= function(){
    if(btn.classList.contains('dark')){
        btn.classList.remove('dark');
        btn.classList.add('light');
        btn.innerText = "Light Mood"

        div.classList.remove('light');
        div.classList.add('dark');
        document.body.style.backgroundColor = "white";
        
    }
    else{
        btn.classList.remove('light');
        btn.classList.add('dark');
        btn.innerText = "Dark Mood"
        div.classList.remove('dark');
        div.classList.add('light');
        document.body.style.backgroundColor = "gray";
    }
  }


// ========================================================================


