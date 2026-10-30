
// ==================================
// ERASTUS MALEL MEMORIAL WEBSITE
// JAVASCRIPT
// ==================================


// 1. PHOTO GALLERY

const galleryPhotos = [
    "photos/photo1.jpg",
    "photos/photo2.jpg",
    "photos/photo3.jpg",
    "photos/photo4.jpg",
    "photos/photo5.jpg",
    "photos/photo6.jpg",
    "photos/photo7.jpg",
    "photos/photo8.jpg",
    "photos/photo9.jpg",
    "photos/photo10.jpg"
];

const galleryGrid = document.getElementById("galleryGrid");

if (galleryGrid) {

    galleryPhotos.forEach((src, index) => {

        const img = document.createElement("img");

        img.src = src;
        img.alt = `Memory of Erastus Malel ${index + 1}`;
        img.loading = "lazy";

        // Open photo when clicked
        img.addEventListener("click", () => {
            window.open(src, "_blank");
        });

        // Hide photo if file does not exist
        img.addEventListener("error", () => {
            img.remove();
        });

        galleryGrid.appendChild(img);

    });

}


// 2. MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");

const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {

    menuToggle.addEventListener("click", () => {
        navigation.classList.toggle("open");
    });

    document.querySelectorAll("#navigation a").forEach(link => {

        link.addEventListener("click", () => {
            navigation.classList.remove("open");
        });

    });

}


// ==================================
// END OF MEMORIAL WEBSITE JAVASCRIPT
// ==================================
