//voltar ao topo da página

document.getElementById('arrow-up').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth'});
});

//FUNCIONAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AHHHHHHHHHHHHHHHHH

var ativoCategorias = 0;
var ativador1 = 0;

document.addEventListener("click", function(event) {
    var cateiguar = document.getElementById('categorias');
    var barras = document.getElementById('botao-categorias');
    var fechar = document.getElementById('fechar-categorias');

    var deuClick1 = cateiguar.contains(event.target);
    var deuClick2 = barras.contains(event.target);
    var deuClick3 = fechar.contains(event.target);

    if (!deuClick1 && ativoCategorias == 1) {
        cateiguar.style.animation = "fecharCategorias 0.5s forwards";
        ativoCategorias = 0;
        ativador1 = 1;
    }

    if (deuClick3 && ativoCategorias == 1) {
        cateiguar.style.animation = "fecharCategorias 0.5s forwards";
        ativoCategorias = 0;
        ativador1 = 1;
    }

    if (deuClick2 && ativoCategorias == 0 && ativador1 == 0) {
        cateiguar.style.animation = "abrirCategorias 0.5s forwards";
        ativoCategorias = 1;
    }
    ativador1 = 0;
});


var ativo = 0;
var ativo2 = 0;
var ativo3 = 0;
var ativo4 = 0;
var ativo5 = 0;
var ativo6 = 0;

function gaveta1() {
    var gaveta = document.getElementById('gaveta');
    if (ativo == 0) {
        gaveta.style.animation = 'gaveta-inciar 0.5s forwards';
    } else {
        gaveta.style.animation = 'gaveta-terminar 0.5s forwards';
        ativo = ativo-2;
    }
    ativo++;
}

function gaveta2() {
    var gaveta = document.getElementById('gaveta2');
    if (ativo2 == 0) {
        gaveta.style.animation = 'gaveta-inciar 0.5s forwards';
    } else {
        gaveta.style.animation = 'gaveta-terminar 0.5s forwards';
        ativo2 = ativo2-2;
    }
    ativo2++;
}

function gaveta3() {
    var gaveta = document.getElementById('gaveta3');
    if (ativo3 == 0) {
        gaveta.style.animation = 'gaveta-inciar 0.5s forwards';
    } else {
        gaveta.style.animation = 'gaveta-terminar 0.5s forwards';
        ativo3 = ativo3-2;
    }
    ativo3++;
}

function gaveta4() {
    var gaveta = document.getElementById('gaveta4');
    if (ativo4 == 0) {
        gaveta.style.animation = 'gaveta-inciar 0.5s forwards';
    } else {
        gaveta.style.animation = 'gaveta-terminar 0.5s forwards';
        ativo4 = ativo4-2;
    }
    ativo4++;
}

function gaveta5() {
    var gaveta = document.getElementById('gaveta5');
    if (ativo5 == 0) {
        gaveta.style.animation = 'gaveta-inciar 0.5s forwards';
    } else {
        gaveta.style.animation = 'gaveta-terminar 0.5s forwards';
        ativo5 = ativo5-2;
    }
    ativo5++;
}

function gaveta6() {
    var gaveta = document.getElementById('gaveta6');
    if (ativo6 == 0) {
        gaveta.style.animation = 'gaveta-inciar 0.5s forwards';
    } else {
        gaveta.style.animation = 'gaveta-terminar 0.5s forwards';
        ativo6 = ativo6-2;
    }
    ativo6++;
}