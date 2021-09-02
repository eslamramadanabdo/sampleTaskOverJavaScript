
//=================style task=======================

let w = document.getElementById('wid');
let h = document.getElementById('high');
let bg = document.getElementById('bg');
let btn2 = document.getElementById('btn');
let div3 = document.getElementById('div');

var addStyle = ()=>{
    div3.style.width = w.value + "px";
    div3.style.height = h.value + "px";
    div3.style.backgroundColor = bg.value;
}


btn2.addEventListener('click' , addStyle);


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


