

function verificarFormulario(){
    let inputs = document.querySelectorAll(".cadastro")

    console.log(inputs);

    for (let i = 0; i < inputs.length; i++){

        if (inputs[i].value == ""){
            alert("preencha os campos obrigatorios");
            inputs[i].focus();
        }
        else{
            location.href="home-empresa.html"
        }
        
    }
}
