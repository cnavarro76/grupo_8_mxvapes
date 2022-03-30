window.addEventListener("load", function(){
    
    let errores = [];

    let name = document.querySelector("#name");
    let nameE = document.querySelector("#nameE");
    let cat = document.querySelector("#categoria");
    let catE = document.querySelector("#catE");
    let desc = document.querySelector("#desc");
    let descE = document.querySelector("#descE");
    let price = document.querySelector("#price");
    let priceE = document.querySelector("#priceE");
    let disc = document.querySelector("#disc");
    let discE = document.querySelector("#discE");
    let image = document.querySelector("#image");


    name.addEventListener("change", function(){
        name.style.color="black";
        name.style.borderColor="black";
        if(name.value.length < 5){
            errores.push("Nombre invalido");
            name.style.borderColor="red";
            name.style.color="red";
            nameE.hidden = false;
            nameE.innerHTML = "Nombre invalido";
            nameE.style.color ="red";
            }else{
                nameE.style.color ="black";
                nameE.hidden=true;
                errores = [];
            }
    })

    cat.addEventListener("change", function(){
        cat.style.color="black";
        cat.style.borderColor="black";
        if(cat.value == ""){
            errores.push("Categoria invalida");
            cat.style.borderColor="red";
            cat.style.color="red";
            catE.hidden = false;
            catE.innerHTML = "Categoria invalida";
            catE.style.color ="red";
            }else{
                catE.style.color ="black";
                catE.hidden=true;
                errores = [];
            }
    })
    
    desc.addEventListener("change", function(){
        desc.style.color="black";
        desc.style.borderColor="black";
        if(desc.value.length < 20){
            errores.push("Descripcion invalida");
            desc.style.borderColor="red";
            desc.style.color="red";
            descE.hidden = false;
            descE.innerHTML = "Descripción invalida";
            descE.style.color ="red";
            }else{
                descE.style.color ="black";
                descE.hidden=true;
                errores = [];
            }
    })

    price.addEventListener("change", function(){
        price.style.color="black";
        price.style.borderColor="black";
        if(price.value == ""){
            errores.push("Precio invalido");
            price.style.borderColor="red";
            price.style.color="red";
            priceE.hidden = false;
            priceE.innerHTML = "Precio invalido";
            priceE.style.color ="red";
            }else{
                priceE.style.color ="black";
                priceE.hidden=true;
                errores = [];
            }
    })

    disc.addEventListener("change", function(){
        disc.style.color="black";
        disc.style.borderColor="black";
        if(disc.value == ""){
            errores.push("Descuento invalido");
            disc.style.borderColor="red";
            disc.style.color="red";
            discE.hidden = false;
            discE.innerHTML = "Descuento invalido";
            discE.style.color ="red";
            }else{
                discE.style.color ="black";
                discE.hidden=true;
                errores = [];
            }
    })


    let form = document.querySelector(".formulario");
    form.addEventListener("submit", function(e){
        if(name.value == ""){
            errores.push("Nombre invalido");
            name.style.borderColor="red";
            name.style.color="red";
            nameE.hidden = false;
            nameE.innerHTML = "Nombre invalido";
            nameE.style.color ="red";
            }else{
                nameE.style.color ="black";
                nameE.hidden=true;
            }

        if(cat.value == ""){
            errores.push("Categoria invalida");
            cat.style.borderColor="red";
            cat.style.color="red";
            catE.hidden = false;
            catE.innerHTML = "Categpria invalida";
            catE.style.color ="red";
            }else{
                catE.style.color ="black";
                catE.hidden=true;
            }

        if(desc.value == "50"){
            errores.push("Descripcion invalida");
            desc.style.borderColor="red";
            desc.style.color="red";
            descE.hidden = false;
            descE.innerHTML = "Descripción invalida";
            descE.style.color ="red";
            }else{
                descE.style.color ="black";
                descE.hidden=true;
            }
        if(price.value == ""){
            errores.push("Precio invalido");
            price.style.borderColor="red";
            price.style.color="red";
            priceE.hidden = false;
            priceE.innerHTML = "Precio invalido";
            priceE.style.color ="red";
            }else{
                priceE.style.color ="black";
                priceE.hidden=true;
            }
        if(disc.value == ""){
            errores.push("Descuento invalido");
            disc.style.borderColor="red";
            disc.style.color="red";
            discE.hidden = false;
            discE.innerHTML = "Descuento invalido";
            discE.style.color ="red";
        }else{
                discE.style.color ="black";
                discE.hidden=true;
            }
       if(errores.length > 0){
            e.preventDefault();
        }
    })
    image.accept=".jpg, .jpeg, .png, .gif";
})