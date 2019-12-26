document.body.addEventListener('click', function (e) {
    let x = e.clientX;
    let y = e.clientY;
    console.log(e.clientX, e.clientY);
    if (x % 2 == 0 && y % 2 == 0) {
        document.body.style.backgroundColor = "red";
    } else if (x % 2 != 0 && y % 2 != 0) {
        document.body.style.backgroundColor = "green";
    } else {
        document.body.style.backgroundColor = "blue";
    }
})