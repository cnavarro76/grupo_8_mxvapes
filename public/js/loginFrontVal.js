window.addEventListener("load", function(){

    function validar_email(valor){
        var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(valor) ? true : false;
    }

    let errores = [];

    let correo = document.querySelector("#email");
    let errorCorreo = document.querySelector("#emailError");
    let errorPass = document.querySelector("#passError");

    correo.addEventListener("change", function(){
        correo.style.color="black";
        correo.style.borderColor="black";
        if(validar_email(correo.value) == false){
            errores.push("Correo invalido");
            correo.style.borderColor="red";
            correo.style.color="red";
            errorCorreo.hidden = false;
            errorCorreo.innerHTML = "Correo invalido";
            errorCorreo.style.color ="red";
        }else{
            errorCorreo.style.color ="black";
            errorCorreo.hidden=true;
            errores = [];
        }
    })

    let pass = document.querySelector("#pass");
    pass.addEventListener("change", function(){
        pass.style.borderColor="black";
        pass.style.color="black";
        if(pass.value.length < 8){
            errores.push("Contraseña invalida");
            pass.style.borderColor="red";
            pass.style.color="red";
            errorPass.hidden = false;
            errorPass.innerHTML = "Contraseña invalida";
            errorPass.style.color ="red";
        }else{
            errorPass.style.color ="black";
            errorPass.hidden=true;
            errores = [];
        }
    })
    

    let form = document.querySelector(".formulario");
    form.addEventListener("submit", function(e){
        if(correo.value == ""){
            errores.push("Correo obligatorio");
            correo.style.borderColor="red";
            errorCorreo.hidden = false;
            errorCorreo.innerHTML = "Correo requerido";
            errorCorreo.style.color ="red";
        }else{
            errorCorreo.style.color ="black";
            errorCorreo.hidden=true;
        }

        if(pass.value == ""){
            errores.push("Contraseña obligatoria");
            pass.style.borderColor="red";
            errorPass.hidden = false;
            errorPass.innerHTML = "Contraseña requerida";
            errorPass.style.color ="red";
        }else{
            errorPass.style.color ="black";
            errorPass.hidden=true;
        }

        if(errores.length >0){
            e.preventDefault();
        }
    })
})
