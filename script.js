const products = [
    {
        name: "Whiskas",
        description: "Whiskas is a popular grocery brand and if you shop carefully to take advantage of in-store promotions, it can be exceptionally good value, as well as offering tasty food that your cat will enjoy.",
        category: "food",
        image: "boy.jpeg"
    },

        {
        name: "Wet Food",
        description: "Wet food is a nutritious and delicious option for your cat. It is a good source of protein, vitamins, and minerals. It is also a good source of fiber, which can help keep your cat feeling full and satisfied. Wet food is a good source of protein, vitamins, and minerals. It is also a good source of fiber, which can help keep your cat feeling full and satisfied.",
        category: "food",
        image: "boy.jpeg"
    },

    {
        name: "Scratching Toy",
        description: "Scratching is vital to your cat's health and essential to wellbeing. It is an important way in which cats communicate and how they speak to each other by using both scent and visual clues. Scratching helps them stretch their muscles and it feels good too. It is a natural and normal behavior that cats enjoy engaging in.",
        category: "toys",
        image: "boy.jpeg"
    },

    {
        name: "Feather Wand",
        description: "It's a toy for cats, all cats love it.",
        category: "toys",
        image: "boy.jpeg"
    },

    {
        name: "Vitamin Supplements",
        description: "Vitamin keeps cats healthy and strong",
        category: "medicine",
        image: "boy.jpeg",
    },

    {
        name: "Flea Medicine",
        description: "Flea medicine for cats is available in various forms, including topical treatments, oral medications, and collars. Some popular options include Advantage II, Frontline Plus, and Seresto collars.",
        category: "medicine",
        image: "boy.jpeg"
    }
];

function displayProducts(filteredProducts) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    if (filteredProducts.length === 0) {
        productList.innerHTML = "<p class='text-center'>No products found.</p>";
        return;
    }

    filteredProducts.forEach(product => {
        const col = document.createElement("div");
        col.className = "col-sm-6 col-md-4";

        const card = document.createElement("div");
        card.className = "card product-card";

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.name;
        img.className = "card-img-top product-image";

        const title = document.createElement("h5");
        title.className = "card-title text-center";
        title.textContent = product.name;

        const desc = document.createElement("p")
        desc.className = "card-text";
        desc.textContent = product.description;

        cardBody.appendChild(title);
        cardBody.appendChild(desc);
        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);
        productList.appendChild(col);
    });
}

function filterProducts(category) {
    const buttons = document.querySelectorAll(".filter-btns button");
    buttons.forEach(btn => {
        if (btn.textContent.toLowerCase() === category || (category === "all" && btn.textContent.toLowerCase() === "all")) {
            btn.classList.remove("btn-outline-info");
            btn.classList.add("btn-info");
        } else {
            btn.classList.remove("btn-info");
            btn.classList.add("btn-outline-info");
        }
    });

    if (category === "all") {
        displayProducts(products);
    } else{
        const filtered = products.filter(p => p.category === category);
        displayProducts(filtered);
    }
}

filterProducts("all");