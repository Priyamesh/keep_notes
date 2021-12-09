console.log("Welcome.. ");
update();

//fucntion to delelet the note card
function dlt(index) {
    let notejsonArrayStr = localStorage.getItem('notesjson')
    let notejsonArray = JSON.parse(notejsonArrayStr);

    notejsonArray.splice(index, 1);
    localStorage.setItem('notesjson', JSON.stringify(notejsonArray));

    update();
}

//function to populate the note cards
function update() {

    let notesdiv = document.getElementById('notes');

    if (localStorage.getItem('notesjson') != null) {
        let notejsonArrayStr = localStorage.getItem('notesjson')
        let notejsonArray = JSON.parse(notejsonArrayStr);

        let res = "";

        if (notejsonArray.length != 0) {
            notejsonArray.forEach((element, index) => {
                res += `<div class="my-2 mx-2 card noteCard" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Note ${index + 1}</h5>
                    <p class="card-text">${element}</p>
                    <button class="btn btn-primary my-2" onclick="dlt(${index})">Delete</button>
                </div>
            </div>`
            });
            notesdiv.innerHTML = res;
        }
        else {
            notesdiv.innerHTML = `<h5>Nothing to show here!! Please use "Put a Note" Section</h5>`;
        }
    }
    else {
        notesdiv.innerHTML = `<h5>Nothing to show here!! Please use "Put a Note" Section</h5>`;
    }
}

//function to get data from add section
function getandupdate() {
    let note = document.getElementById("addtext").value;
    let notejsonArray = [];

    if (localStorage.getItem('notesjson') == null) {
        notejsonArray.push([note]);
        localStorage.setItem('notesjson', JSON.stringify(notejsonArray));
    }
    else {
        notejsonArrayStr = localStorage.getItem('notesjson');
        notejsonArray = JSON.parse(notejsonArrayStr);
        notejsonArray.push([note]);
        localStorage.setItem('notesjson', JSON.stringify(notejsonArray));
    }
    document.getElementById("addtext").value = ""; //to disappear the written text
    update();
}

//searching the cards which are matching to given input
function search() {

    let searchVal = searchtxt.value;
    let cards = document.getElementsByClassName("noteCard");

    Array.from(cards).forEach(element => {
        notevalue = element.getElementsByTagName("p")[0].innerText;
        if (notevalue.includes(searchVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    });
}

let addbtn = document.getElementById("addbtn");
addbtn.addEventListener('click', getandupdate)

let searchtxt = document.getElementById("searchtext")
searchtxt.addEventListener("input", search);