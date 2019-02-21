//const template = document.querySelector("template").content;
//        const starter = document.querySelector("#starter");
//        const main = document.querySelector("#main");
//        const drinks = document.querySelector("#drinks");
//        const dessert = document.querySelector("#dessert");
//        const side = document.querySelector("#sideorders");
//        const button = document.querySelector("button");
//const productLink =
//
//        fetch("http://kea-alt-del.dk/t5/api/productlist").then(e => e.json()).then(data => data.forEach(showData))
//        let image_path = "https://kea-alt-del.dk/t5/site/imgs/";
//        let long_desc = "http://kea-alt-del.dk/t5/api/product?id=";
//
//        function showData(oneObject) {
//            let clone = template.cloneNode(true);
//            clone.querySelector("img").src = image_path + "small/" + oneObject.image + "-sm.jpg";
//            clone.querySelector("img").alt = oneObject.name;
//            clone.querySelector("h1").textContent = oneObject.name;
//            clone.querySelector("#price").textContent = oneObject.price + ",- kr";
//            if (oneObject.discount > 0) {
//                clone.querySelector("#newPrice").classList.remove("hide");
//                clone.querySelector("#newPrice").textContent = oneObject.discount + "% discount!";
//            } else {
//                clone.querySelector("#price").classList.remove("old");
//            };
//
//            if (oneObject.soldout) {
//                clone.querySelector("#soldOut").classList.remove("hide");
//                clone.querySelector("#price").classList.add("hide");
//                clone.querySelector("img").classList.add("lowOpacity");
//            }
//
//            if (oneObject.vegetarian) {
//                clone.querySelector("#vege").textContent = "Vegetarian";
//            } else {
//                clone.querySelector("#vege").classList.add("hide");
//            };
//
//            if (oneObject.alcohol > 1) {
//                clone.querySelector("#alco").textContent = "contains " + oneObject.alcohol + "% alcohol";
//            } else {
//                clone.querySelector("#alco").classList.add("hide");
//            };
//
//            clone.querySelector("#description").textContent = long_desc + oneObject.id;
//
//            clone.querySelector("#description").classList.remove("hide");
//
//            if (oneObject.category == "starter") {
//                starter.appendChild(clone);
//            };
//            if (oneObject.category == "main") {
//                main.appendChild(clone);
//            };
//            if (oneObject.category == "sideorders") {
//                side.appendChild(clone);
//            };
//            if (oneObject.category == "dessert") {
//                dessert.appendChild(clone);
//            };
//            if (oneObject.category == "drinks") {
//                drinks.appendChild(clone);
//            };
//        }

