function abrirMenuLateral(){
    let menuLateral = document.getElementById('menu-lateral-usuario');
    menuLateral.classList.add("menu-lateral-ativo");
}

function fecharMenuLateral(){
    let menuLateral = document.getElementById('menu-lateral-usuario');
    menuLateral.classList.remove("menu-lateral-ativo"); 
}
