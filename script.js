let tb = [
    {
        "name" : "High-Back Bench",
        "price" : 9.99,
        "chemin" : "img/product-1.jpeg",
        "type" : "ikea"
    },
    {
        "name" : "Albany Table",
        "price" : 79.99,
        "chemin" : "img/product-2.jpeg",
        "type" : "marcos"
    },
    {
        "name" : "Accent Chair",
        "price" : 25.99,
        "chemin" : "img/product-3.jpeg",
        "type" : "caressa"
    },
    {
        "name" : "Wooden Table",
        "price" : 45.99,
        "chemin" : "img/product-4.jpeg",
        "type" : "caressa"
    },
    {
        "name" : "Dinning Table",
        "price" : 6.99,
        "chemin" : "img/product-5.jpeg",
        "type" : "caressa"
    },
    {
        "name" : "Sofa Set",
        "price" : 69.99,
        "chemin" : "img/product-6.jpeg",
        "type" : "liddy"
    },
    {
        "name" : "Modern Bookshelf",
        "price" : 8.99,
        "chemin" : "img/product-7.jpeg",
        "type" : "marcos"
    },
    {
        "name" : "Emperor Bed",
        "price" : 21.99,
        "chemin" : "img/product-8.jpeg",
        "type" : "liddy"
    },
    {
        "name" : "Utopia Soda",
        "price" : 39.95,
        "chemin" : "img/product-9.jpeg",
        "type" : "marcos"
    },
    {
        "name" : "Entertainment Center",
        "price" : 29.98,
        "chemin" : "img/product-10.jpeg",
        "type" : "liddy"
    },
    {
        "name" : "Albany Sectional",
        "price" : 10.99,
        "chemin" : "img/product-11.jpeg",
        "type" : "ikea"
    },
    {
        "name" : "Leather Sofa",
        "price" : 9.99,
        "chemin" : "img/product-12.jpeg",
        "type" : "liddy"
    }
]

let contenu = document.querySelector(".contenu");

let allMenu = document.querySelectorAll(".menu p");
let ikea = document.querySelector("#ikea");
let rechercher = document.querySelector("#chercher");




let i = 0;

window.addEventListener("load", function () {
    debut(tb);
})

function debut(change){
    let display = change.map(function (value) {
        return `
           <div class="image">
                    <div class="img">
                        <img src=${value.chemin} alt="img1">
                    </div>
                 <div class="description">
                     <h2>${value.name}</h2>
                     <h4>${value.price}</h4>
                 </div>
           </div>   `
    })

    display = display.join("");
    contenu.innerHTML = display;
}


allMenu.forEach(function (x) {
    x.addEventListener("click", function (val) {
        let categorie = val.currentTarget.dataset.id;
        let menuCategorie = tb.filter(function (y) {
            if (y.type === categorie){
                return y;
            }
        });

        if (categorie === "all"){
            debut(tb);
        }
        else {
            debut(menuCategorie);
        }

    })
})










// function tout(){
//     while (i<=(tb.length - 1)){
//         let cont = document.createElement("div");
//         cont.innerHTML = `
//          <div class="image">
//                 <div class="img">
//                     <img src="${tb[i].chemin}" alt="img1">
//                 </div>
//                 <div class="description">
//                     <h2>${tb[i].name}</h2>
//                     <h4>${tb[i].price}</h4>
//                 </div>
//             </div>   `;
//
//
//         contenu.appendChild(cont);
//         i++;
//     }
// }
//
// window.addEventListener("load", tout);
//
// all.addEventListener('click', tout);
//
// ikea.addEventListener("click", function () {
//
// })


