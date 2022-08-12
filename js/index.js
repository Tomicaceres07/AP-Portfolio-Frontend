document.addEventListener("DOMContentLoaded", function(){

    // let scroll = window.pageYOffset;
    let nav = document.getElementById('nav');

    // window.addEventListener('scroll', function() {
    //     let actual_scroll = window.pageYOffset;

    //     console.log("Scroll")
    //     if (scroll >= actual_scroll) {
    //         console.log("TRUE")
    //         document.getElementById('nav').style.top = '0';
    //         // document.getElementById('nav').classList.add("")
    //         // document.getElementById('nav').classList.remove("")
    //     }else{
    //         console.log("FALSE")
    //         document.getElementById('nav').style.top = '-100px';
    //         // document.getElementById('nav').classList.add("")
    //         // document.getElementById('nav').classList.remove("")
    //         // $("#toggle").attr("aria-expanded","false");
    //     }

    //     scroll = actual_scroll;
    // });

    
    // HTML, CSS, JS
    let number_s1 = document.getElementById("number_s1");
    // Angular, React
    let number_s2 = document.getElementById("number_s2");
    // Python, Java
    let number_s3 = document.getElementById("number_s3");
    // MySQL
    let number_s4 = document.getElementById("number_s4");
    // Trabajo en equipo
    let number_s5 = document.getElementById("number_s5");
    // Inglés
    let number_s6 = document.getElementById("number_s6");

    const addNumber = (element, number, time) => {
        let counter = 0;
        setInterval(() => {
            if(counter == number) {
                clearInterval();
            } else {
                counter += 1;
                element.innerHTML = counter + "%";
            }
        }, time);
    }


    // HTML, CSS, JS
    addNumber(number_s1, 80, 23);
    // Angular, React
    addNumber(number_s2, 75, 24.5);
    // Python, Java
    addNumber(number_s3, 70, 26.5);
    // MySQL
    addNumber(number_s4, 80, 23);
    // Trabajo en equipo
    addNumber(number_s5, 90, 21);
    // Inglés
    addNumber(number_s6, 80, 23);


}); 