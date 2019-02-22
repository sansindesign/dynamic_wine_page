const template = document.querySelector("#myTemp").content;
let vh = window.innerHeight * 0.01;

const productListLink = "https://spreadsheets.google.com/feeds/list/1s4CkxsGQ93Ro5fkyjGdEvRgaVLmF0CYVSIldWqDIcv0/od6/public/values?alt=json";

function loadJSON(link) {
    console.log(link);
    fetch(link).then(e=>e.json()).then(data=>data.feed.entry.forEach(displayWineData))
}

function displayWineData(product) {
    console.log(product)
    //const section = document.querySelector("#" + product.category)
    let clone = template.cloneNode(true);
    clone.querySelector(".wineImage").src = product.gsx$wineimage.$t;
    //clone.querySelector("img").alt = product.image;
    clone.querySelector(".name").textContent = product.gsx$name.$t;
    clone.querySelector(".wineHouse").textContent = product.gsx$house.$t;
    clone.querySelector(".area").textContent = product.gsx$region.$t;
    clone.querySelector(".rating").textContent = product.gsx$rating.$t;
    clone.querySelector(".ratingImage").src = product.gsx$ratingimage.$t;
    document.querySelector("#winegrid").appendChild(clone)
};

loadJSON(productListLink)


// Here I set the height for the gloabal --vh to match each vieport height
document.documentElement.style.setProperty('--vh', `${vh}px`);
