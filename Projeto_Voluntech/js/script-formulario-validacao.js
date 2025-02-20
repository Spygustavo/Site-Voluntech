
    function abrirPopupRegistro(){
    let popupRegistro = document.getElementById('registro-popup'); 
    let inputs = document.querySelectorAll(".campo");

    for (let i = 0; i < inputs.length; i++) {
    
        if(inputs[i].value == "") {
            alert("preencha o campo" + " " + inputs[i].id);
            inputs[i].focus();
        } else {
            popupRegistro.classList.add("popup-ativo");
        }  
    }

}

function fecharPopupRegistro(){
    let popupRegistro = document.getElementById('registro-popup');
    popupRegistro.classList.remove("popup-ativo");
}

function adicionarArquivo(target) {
	document.getElementById("nome-arquivo").innerHTML = target.files[0].name;
}