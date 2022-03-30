window.addEventListener("load",function(){

    function validar_email(valor){
        var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(valor) ? true : false;
    }

    let errores = [];

    let name = document.querySelector("#name");
    let nameE = document.querySelector("#nameE");
    let lastname = document.querySelector("#lastname");
    let lnameE = document.querySelector("#lNameE");
    let email = document.querySelector("#email");
    let emailE = document.querySelector("#emailE");
    let password = document.querySelector("#password");
    let passwordE = document.querySelector("#passwordE");
    let cPassword = document.querySelector("#cPassword");
    let cpasswordE = document.querySelector("#cPasswordE");
    let uType = document.querySelector("#user_type");
    let uTypeE = document.querySelector("#user_typeE");
    let address = document.querySelector("#address");
    let addressE = document.querySelector("#addressE");
    let image = document.querySelector("#file");

    name.addEventListener("change", function(){
        name.style.color="black";
        name.style.borderColor="black";
        if(name.value.length < 2){
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

    lastname.addEventListener("change", function(){
        lastname.style.color="black";
        lastname.style.borderColor="black";
        if(lastname.value.length < 2){
            errores.push("Apellido invalido");
            lastname.style.borderColor="red";
            lastname.style.color="red";
            lnameE.hidden = false;
            lnameE.innerHTML = "Apellido invalido";
            lnameE.style.color ="red";
            }else{
                lnameE.style.color ="black";
                lnameE.hidden=true;
                errores = [];
            }
    })

    email.addEventListener("change", function(){
        email.style.color="black";
        email.style.borderColor="black";
        if(validar_email(email.value) == false){
            errores.push("Correo invalido");
            email.style.borderColor="red";
            email.style.color="red";
            emailE.hidden = false;
            emailE.innerHTML = "Correo invalido";
            emailE.style.color ="red";
        }else{
            emailE.style.color ="black";
            emailE.hidden=true;
            errores = [];
        }
    })

    password.addEventListener("change", function(){
        password.style.borderColor="black";
        password.style.color="black";
        if(password.value.length < 8){
            errores.push("Contraseña invalida");
            password.style.borderColor="red";
            password.style.color="red";
            passwordE.hidden = false;
            passwordE.innerHTML = "Contraseña invalida";
            passwordE.style.color ="red";
        }else{
            passwordE.style.color ="black";
            passwordE.hidden=true;
            errores = [];
        }
    })

    cPassword.addEventListener("change", function(){
        cPassword.style.borderColor="black";
        cPassword.style.color="black";
        if(cPassword.value != password.value){
            errores.push("Las contraseñas no coinciden");
            cPassword.style.borderColor="red";
            cPassword.style.color="red";
            cpasswordE.hidden = false;
            cpasswordE.innerHTML = "Las contraseñas no coinciden";
            cpasswordE.style.color ="red";
        }else{
            cpasswordE.style.color ="black";
            cpasswordE.hidden=true;
            errores = [];
        }
    })

    uType.addEventListener("change", function(){
        uType.style.color="black";
        uType.style.borderColor="black";
        if(uType.value == ""){
            errores.push("Usuario invalido");
            uType.style.borderColor="red";
            uType.style.color="red";
            uTypeE.hidden = false;
            uTypeE.innerHTML = "Usuario invalido";
            uTypeE.style.color ="red";
            }else{
                uTypeE.style.color ="black";
                uTypeE.hidden=true;
                errores = [];
            }
    })

    address.addEventListener("change", function(){
        address.style.color="black";
        address.style.borderColor="black";
        if(address.value == ""){
            errores.push("Dirección invalida");
            address.style.borderColor="red";
            address.style.color="red";
            addressE.hidden = false;
            addressE.innerHTML = "Dirección invalida";
            addressE.style.color ="red";
            }else{
                addressE.style.color ="black";
                addressE.hidden=true;
                errores = [];
            }
    })

    

    let form = document.querySelector(".formulario");
    form.addEventListener("submit", function(e){
        if(name.value == ""){
            errores.push("Nombre obligatorio");
            name.style.borderColor="red";
            name.style.color="red";
            nameE.hidden = false;
            nameE.innerHTML = "Nombre obligatorio";
            nameE.style.color ="red";
            }else{
                nameE.style.color ="black";
                nameE.hidden=true;
            }

        if(lastname.value == ""){
            errores.push("Apellido obligatorio");
            lastname.style.borderColor="red";
            lastname.style.color="red";
            lnameE.hidden = false;
            lnameE.innerHTML = "Apellido obligatorio";
            lnameE.style.color ="red";
            }else{
                lnameE.style.color ="black";
                lnameE.hidden=true;
            }

        if(email.value == ""){
            errores.push("Correo obligatorio");
            email.style.borderColor="red";
            email.style.color="red";
            emailE.hidden = false;
            emailE.innerHTML = "Correo obligatorio";
            emailE.style.color ="red";
        }else{
            emailE.style.color ="black";
            emailE.hidden=true;
        }

        if(password.value == ""){
            errores.push("Contraseña obligatoria");
            password.style.borderColor="red";
            password.style.color="red";
            passwordE.hidden = false;
            passwordE.innerHTML = "Contraseña obligatoria";
            passwordE.style.color ="red";
        }else{
            passwordE.style.color ="black";
            passwordE.hidden=true;
        }
        
        if(cPassword.value == ""){
            errores.push("Confirmación obligatoria");
            cPassword.style.borderColor="red";
            cPassword.style.color="red";
            cpasswordE.hidden = false;
            cpasswordE.innerHTML = "Confirmación obligatoria";
            cpasswordE.style.color ="red";
        }else{
            cpasswordE.style.color ="black";
            cpasswordE.hidden=true;
        }
        
        if(uType.value == ""){
            errores.push("Usuario obligatorio");
            uType.style.borderColor="red";
            uType.style.color="red";
            uTypeE.hidden = false;
            uTypeE.innerHTML = "Usuario obligatorio";
            uTypeE.style.color ="red";
            }else{
                uTypeE.style.color ="black";
                uTypeE.hidden=true;
            }

        if(address.value == ""){
            errores.push("Dirección obligatoria");
            address.style.borderColor="red";
            address.style.color="red";
            addressE.hidden = false;
            addressE.innerHTML = "Dirección obligatoria";
            addressE.style.color ="red";
        }else{
            addressE.style.color ="black";
            addressE.hidden=true;
        }
        
       if(errores.length > 0){
            e.preventDefault();
        }
    })
    image.accept=".jpg, .jpeg, .png, .gif";
})