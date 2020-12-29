// When size is submitted by the user, call makeGrid()
function makeGrid() {
// Your code goes here!
    let tbl = document.createElement('table');
    let h = document.querySelector("#inputHeight").value;
    let w = document.querySelector("#inputWidth").value;
    // console.log(h+w);
    for(let r = 0; r < h; r++){
        let tr = document.createElement('tr');
        for (let c = 0; c < w; c++){
            let tc = document.createElement('td');
            tr.appendChild(tc);
        }
        tbl.appendChild(tr);
    }
    tbl.setAttribute('border','1');
    return tbl;
}

// change its background color
function changeColor(cell) {
    cell.style.backgroundColor = document.querySelector("#colorPicker").value;
}

// make grid when click submit
document.addEventListener('submit', function (a) {
    a.preventDefault();
    tbl = makeGrid();
    let t = document.querySelector("table");
    t.textContent = '';
    t.appendChild(tbl);
});

// change cell color when click cell
const t = document.querySelector("table");
t.addEventListener('click', function(a){
    let td = a.target;
    a.preventDefault();
    if (td.tagName !== 'TD'){
        return;
    } else{
        changeColor(td);
    }
});

