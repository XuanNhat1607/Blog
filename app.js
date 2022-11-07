let btnReadmore = document.getElementById('btnReadmore');
let txtReadmore = document.getElementById('txtReadmore');


btnReadmore.addEventListener("click", function () {
    console.log("click");
    if (btnReadmore.innerHTML === "Read More") {
        txtReadmore.innerHTML = "What is UX Design? UX design (user experience design) is a digital product design methodology to solve a human problem. This human-centered design approach ensures"
        btnReadmore.innerHTML = "Read Less"
    }
    else {
        txtReadmore.innerHTML = "What is UX Design? UX design (user experience design) is a digital product..."
        btnReadmore.innerHTML = "Read More"
    }

})