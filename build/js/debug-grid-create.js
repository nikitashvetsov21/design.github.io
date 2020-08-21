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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJkZWJ1Zy1ncmlkLWNyZWF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBkaXZDcmVhdGluZyhwYXJhbSkge1xuICAgIHZhciBkZWJ1Z0dyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmFtKTtcbiAgICBsZXQgZGl2Q3JlYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVidWdHcmlkLmFwcGVuZENoaWxkKGRpdkNyZWF0ZSk7XG5cbiAgICBsZXQgcGFyYW1zID0gJy5kZWJ1Z0dyaWQgZGl2JztcbiAgICBsZXQgZGVidWdHcmlkRGl2QWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChwYXJhbXMpO1xuICAgIGlmIChkZWJ1Z0dyaWREaXZBbGwubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgZGl2Q3JlYXRpbmcocGFyYW1zKTtcbiAgICB9XG5cbiAgICBpZiAoZGVidWdHcmlkRGl2QWxsLmxlbmd0aCA+PSAyICYmIGRlYnVnR3JpZERpdkFsbC5sZW5ndGggPD0gMTMpIHtcbiAgICAgICAgbGV0IHBhcmFtcyA9ICcuZGVidWdHcmlkIGRpdiBkaXYnO1xuICAgICAgICBsZXQgZGVidWdHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChwYXJhbXMpO1xuICAgICAgICBpZiAoZGVidWdHcmlkLmxlbmd0aCA8PSAxMikge1xuICAgICAgICAgICAgZGl2Q3JlYXRpbmcocGFyYW1zKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZGVidWdHcmlkQ3JlYXRlKCkge1xuICAgIGxldCBkZWJ1Z0dyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVidWdHcmlkJyk7XG4gICAgbGV0IGRlYnVnR3JpZEJ0bkNyZWF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWJ1Z0dyaWQtYnRuY3JlYXRlJyk7XG4gICAgbGV0IGRlYnVnR3JpZEJ0blJlbW92ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWJ1Z0dyaWQtYnRucmVtb3ZlJyk7XG4gICAgZGVidWdHcmlkQnRuQ3JlYXRlLmNsYXNzTGlzdC5hZGQoXCJkZWJ1Z0dyaWQtYnRuaGlkZGVuXCIpO1xuICAgIGRlYnVnR3JpZEJ0blJlbW92ZS5jbGFzc0xpc3QucmVtb3ZlKFwiZGVidWdHcmlkLWJ0bmhpZGRlblwiKTtcbiAgICBkZWJ1Z0dyaWQuY2xhc3NMaXN0LnJlbW92ZShcImRlYnVnR3JpZHotaW5kZXgtbmVnYXRpdmVcIik7XG4gICAgZGl2Q3JlYXRpbmcoJy5kZWJ1Z0dyaWQnKTtcbn1cblxuZnVuY3Rpb24gZGVidWdHcmlkUmVtb3ZlKCkge1xuICAgIGxldCBkZWJ1Z0dyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVidWdHcmlkJyk7XG4gICAgbGV0IGRlYnVnR3JpZEJ0bkNyZWF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWJ1Z0dyaWQtYnRuY3JlYXRlJyk7XG4gICAgbGV0IGRlYnVnR3JpZEJ0blJlbW92ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWJ1Z0dyaWQtYnRucmVtb3ZlJyk7XG4gICAgZGVidWdHcmlkQnRuQ3JlYXRlLmNsYXNzTGlzdC5yZW1vdmUoXCJkZWJ1Z0dyaWQtYnRuaGlkZGVuXCIpO1xuICAgIGRlYnVnR3JpZEJ0blJlbW92ZS5jbGFzc0xpc3QuYWRkKFwiZGVidWdHcmlkLWJ0bmhpZGRlblwiKTtcbiAgICBkZWJ1Z0dyaWQuY2xhc3NMaXN0LmFkZChcImRlYnVnR3JpZHotaW5kZXgtbmVnYXRpdmVcIik7XG4gICAgZGVidWdHcmlkLmlubmVySFRNTCA9ICcnO1xufSJdLCJmaWxlIjoiZGVidWctZ3JpZC1jcmVhdGUuanMifQ==
