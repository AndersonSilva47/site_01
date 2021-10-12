
let frase1 = document.querySelector('.textFavorite span');
let imgFavorite = document.querySelector('.imgFavorite');
let descritionImg = document.querySelector('.imgFavorite span');
let textConfirm = document.querySelector('.textConfirm span');
let voteNumbers = document.querySelector('.numbers');

//Ambiente e Config padrão;
let divNumber = '<div class="numbSlot"></div>';
let imgReset = 'url(/img/winner.jpg)';
let qtdNumber = '';
let numberCandidato = '';
let votoFinalizado = false;

let etapaAtual = 0;

function clicou(n) {
    let displayNumber = document.querySelector('.numbSlot.piscar');

    if (displayNumber !== null) {
        displayNumber.innerText = n;
        numberCandidato = `${numberCandidato}${n}`

        displayNumber.classList.remove('piscar')

        if (displayNumber.nextElementSibling !== null) {
            displayNumber.nextElementSibling.classList.add('piscar');
        } else {
            atualizaTela();
        }
    }
    
    if(votoFinalizado === true) console.log('teste');

}

function votacao() {
    let candit = candidatos[etapaAtual];
    qtdNumber = '';
    numberCandidato = '';

    for (let i = 0; i < candit.digitos; i++) {
        if (i === 0) {
            qtdNumber += '<div class="numbSlot piscar"></div>';
        } else {
            qtdNumber += divNumber;
        }
    }

    //Resets;
    frase1.style.display = 'none';
    imgFavorite.style.backgroundImage = imgReset;
    descritionImg.style.display = 'none';
    textConfirm.style.display = 'none';
    voteNumbers.innerHTML = qtdNumber;
}

function atualizaTela() {
    let candit = candidatos[etapaAtual];

    let candidato = candit.opcoes.filter(opcoes => {
        if (opcoes.numero === numberCandidato) {
            console.log('true');
            return true;
        } else {
            return false;
        }
    })

    if (candidato.length > 0) {
        console.log('deu certo');
        candidato = candidato[0];
        candidatoImg = candidato.foto

        frase1.style.display = 'block';
        imgFavorite.style.backgroundImage = `url(/img/${candidatoImg}.jpg)`;
        console.log(candidato.foto);

        descritionImg.innerText = `${candidato.nome}`;
        descritionImg.style.display = 'block';
        textConfirm.style.display = 'block';
    } else {
        frase1.style.display = 'block';
        imgFavorite.style.backgroundImage = `url(/img/slider6.jpg)`;
        descritionImg.innerText = `Número inexistente`;
        descritionImg.style.display = 'block';
        textConfirm.style.display = 'block';
    }


}

function corrige() {
    votacao();
    if (votoFinalizado) alert('Voto Finalizado');
}

function confirmar() {
    let candit = candidatos[etapaAtual];
    let votoConfirmado = false;

    if (numberCandidato.length === candit.digitos) {
        votoConfirmado = true;
    }

    if (votoConfirmado) {
        etapaAtual++;
        if (candidatos[etapaAtual] !== undefined) {
            votacao()
        } else {
            document.querySelector('.visor').innerHTML = '<div class="finalVoto piscar">FIM</div>';
            votoFinalizado = true;
        }
    }

    if (votoFinalizado) console.log('Voto Finalizado');

}

votacao();