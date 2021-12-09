console.log("hello");

// function dlt(index)
// {
//     console.log("dlt button pressed");

//     let notejsonArrayStr=localStorage.getItem('notesjson')
//     let notejsonArray=JSON.parse(notejsonArrayStr);

//     notejsonArray.splice(index,1);
//     localStorage.setItem('notesjson',notejsonArray);
//     update();

    

// }

function update(){
    
    let notesdiv=document.getElementById('notes');

    if(localStorage.getItem('notesjson')!=null)
    {

        let notejsonArrayStr=localStorage.getItem('notesjson')
        let notejsonArray=JSON.parse(notejsonArrayStr);
        
        let res="";

        notejsonArray.forEach((element,index) => {
            res+=`<div class="my-2 mx-2 card noteCard" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Note</h5>
                <p class="card-text">${element}</p>
                <button class="btn btn-primary my-2" onclick="dlt(${index})">Delete</button>
            </div>
        </div>`
        });

        notesdiv.innerHTML=res;

    }
    else
    {
        notesdiv.innerHTML=res;
    }

}

function getandupdate(){
    let note=document.getElementById("addtext").value;
    console.log(note); 

    let notejsonArray=[];

    if(localStorage.getItem('notesjson')==null)
    {
        notejsonArray.push([note]);
        localStorage.setItem('notesjson',JSON.stringify(notejsonArray));
    }
    else
    {
        notejsonArrayStr=localStorage.getItem('notesjson');
        notejsonArray=JSON.parse(notejsonArrayStr);
        notejsonArray.push([note]);
        localStorage.setItem('notesjson',JSON.stringify(notejsonArray));
    }
    update();
}


let addbtn=document.getElementById("addbtn");
addbtn.addEventListener('click',getandupdate)