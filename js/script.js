divImg.style.display = 'none';
document.getElementById("card-1").addEventListener("click", function() {
    document.getElementById("textomudando").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("card-2").addEventListener("click", function() {
    document.getElementById("textomudando").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("card-3").addEventListener("click", function() {
    document.getElementById("textomudando").scrollIntoView({ behavior: "smooth" });
});

function conteudo (opc) {
    divImg.style.display = 'block';
    
    if(opc == 1 ) {
        imagem = "url('IMG/img-2.jpeg')";
        document.getElementById('divImg').style.backgroundPosition = "center"; 
    }
    else if (opc == 2) {
        imagem = "url('IMG/img-1.jpeg')";
        document.getElementById('divImg').style.backgroundPosition = "left"; 
    }
    else if (opc == 3) {
        imagem = "url(IMG/img-3.jpeg)";
        document.getElementById('divImg').style.backgroundPosition = "center"; 
    }
    
    document.getElementById('divImg').style.backgroundImage = imagem;
    document.getElementById('divImg').style.backgroundSize = "cover";

    
}