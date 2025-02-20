function realizarLogin(){

    let inputs = document.querySelectorAll(".campo");

    let loginEmpresa = "admin@empresa.com";
    let senhaEmpresa = "123";
    let loginUsuario = "login@usuario.com";
    let senhaUsuario = "123";

    console.log(inputs);
    
    for (let i = 0; i < inputs.length; i++) {
   
        if(inputs[i].value == ""){
            //let labelCampo = document.querySelector("label[for='"+inputs[i].id+"']");
            //labelCampo.style="color:red;";
            alert("preencha o campo" + " " + inputs[i].id);
            inputs[i].focus();
        }else if((inputs[0].value == loginEmpresa && inputs[1].value == senhaEmpresa) || (inputs[0].value == loginUsuario && inputs[1].value == senhaUsuario) ) {
            if(inputs[0].value == loginEmpresa && inputs[1].value == senhaEmpresa) {
                location.href = "home-empresa.html";
            }else if(inputs[0].value == loginUsuario && inputs[1].value == senhaUsuario){
                location.href = "home-Individuo.html";
            }
            
        }
        else {
            alert("login ou senha incorretos!");
    

        }  
    }
};