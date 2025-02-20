

function verificarFormulario(){
    let inputs = document.querySelectorAll(".cadastroUsuario")

    console.log(inputs);

    for (let i = 0; i < inputs.length; i++){

        if (inputs[i].value == ""){
            alert("preencha os campos obrigatorios");
            inputs[i].focus();
        }
        else{
            location.href="home-individuo.html"
        }
        
    }
}
