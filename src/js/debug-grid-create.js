function divCreating(param) {
    var debugGrid = document.querySelector(param);
    let divCreate = document.createElement('div');
    debugGrid.appendChild(divCreate);

    let params = '.debugGrid div';
    let debugGridDivAll = document.querySelectorAll(params);
    if (debugGridDivAll.length <= 1) {
        divCreating(params);
    }

    if (debugGridDivAll.length >= 2 && debugGridDivAll.length <= 13) {
        let params = '.debugGrid div div';
        let debugGrid = document.querySelectorAll(params);
        if (debugGrid.length <= 12) {
            divCreating(params);
        }
    }
}

function debugGridCreate() {
    let debugGrid = document.querySelector('.debugGrid');
    let debugGridBtnCreate = document.querySelector('.debugGrid-btncreate');
    let debugGridBtnRemove = document.querySelector('.debugGrid-btnremove');
    debugGridBtnCreate.classList.add("debugGrid-btnhidden");
    debugGridBtnRemove.classList.remove("debugGrid-btnhidden");
    debugGrid.classList.remove("debugGridz-index-negative");
    divCreating('.debugGrid');
}

function debugGridRemove() {
    let debugGrid = document.querySelector('.debugGrid');
    let debugGridBtnCreate = document.querySelector('.debugGrid-btncreate');
    let debugGridBtnRemove = document.querySelector('.debugGrid-btnremove');
    debugGridBtnCreate.classList.remove("debugGrid-btnhidden");
    debugGridBtnRemove.classList.add("debugGrid-btnhidden");
    debugGrid.classList.add("debugGridz-index-negative");
    debugGrid.innerHTML = '';
}