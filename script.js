const text = "Abang...";

let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 170);
    }
}

typing();

// Tombol Buka Hadiah
document.getElementById("start").onclick = function () {

    document.getElementById("page1").classList.add("fadeOut");

    setTimeout(() => {
        document.getElementById("page1").style.display = "none";

        document.getElementById("page2").classList.remove("hidden");
        document.getElementById("page2").classList.add("fadeIn");
    }, 500);

};

// Tombol Lanjut
document.getElementById("nextBtn").onclick = function () {

    document.getElementById("page2").classList.add("fadeOut");

    setTimeout(() => {

        document.getElementById("page2").style.display = "none";

        document.getElementById("page3").classList.remove("hidden");
        document.getElementById("page3").classList.add("fadeIn");

    }, 500);

};
// Tombol Peluk Virtual
document.getElementById("hugBtn").onclick = function () {

    document.getElementById("page3").classList.add("fadeOut");

    setTimeout(() => {

        document.getElementById("page3").style.display = "none";

        document.getElementById("page4").classList.remove("hidden");
        document.getElementById("page4").classList.add("fadeIn");

    }, 500);

};
document.getElementById("finishBtn").onclick = function () {

    document.body.innerHTML = `
        <div style="
            height:100vh;
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
            background:radial-gradient(circle at top,#243B6B,#081221 70%);
            color:white;
            font-family:Poppins,sans-serif;
            text-align:center;
        ">
            <h1 style="font-size:70px;">🤍</h1>

            <h2>Made with Love</h2>

            <p>by<br>Adek</p>
        </div>
    `;

};
// Slideshow
const images = [
    "assets/anime1.jpeg",
    "assets/anime2.jpeg",
    "assets/anime3.jpeg",
    "assets/anime4.jpeg",
    "assets/anime5.jpeg"
];

let current = 0;

const slideShow = setInterval(() => {

    const img = document.getElementById("animeImage");

    if (!img) return;

    current++;

    if (current >= images.length) {

        clearInterval(slideShow);

        document.getElementById("page3").classList.add("fadeOut");

        setTimeout(() => {

            document.getElementById("page3").style.display = "none";

            document.getElementById("page4").classList.remove("hidden");
            document.getElementById("page4").classList.add("fadeIn");

        }, 500);

        return;
    }

    img.src = images[current];

}, 1500);