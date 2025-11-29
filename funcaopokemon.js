
// 1. Cria o objeto
// Machamp
const machamp = {
    nome: "Machamp",
    id: "machamp",
    tipo: "Lutador",
    vida: 90,
    ataque: 130,
    defesa: 80,
    velocidade: 55,
    fome: 70,
    mult: 86,
    preferencia: "amargo",
    frases: {
        pokemon: [
            "Oi, quem é você?", "Ah, legal te conhecer!", "Vamos Lá!",
            "Sai daqui!", "Não tô com paciência pra falar com frango!", "Quer brigar, é?",
            "Interessante...", "Acho que posso te ajudar!", "Iremos longe juntos!"
        ],
        user: [
            "Oi Machamp!", "Sou um novo treinador da cidade!", "Quer ir nessa jornada comigo, tenho algumas berries!",
            "Eai, ta se achando o machão né?", "Pra que tanta raiva?", "Relaxa um pouco, toma umas berries frangote.",
            "Sou novo na cidade!", "Quero aprender sobre esse lugar!", "Vamos ser amigos! Tenho umas berries aqui para você."
        ]
    },
};


// Gardevoir
const gardevoir = {
    nome: "Gardevoir",
    id: "gardevoir",
    tipo: "Fada/Psíquico",
    vida: 68,
    ataque: 125,
    defesa: 65,
    velocidade: 80,
    fome: 70,
    mult: 87,
    preferencia: "doce",
    frases: {
        pokemon: [
            "Olá, humano gentil.", "Sinto uma aura boa em você.", "Vamos proteger uns aos outros.",
            "Não se aproxime tanto, você parece estar buscando confusão.", "Sua energia está... confusa.", "Hm...obrigada!",
            "Sinto algo poderoso em você...", "Você busca conhecimento, certo?", "Vamos lá amigo!"
        ],
        user: [
            "Oi Gardevoir, é uma honra te conhecer!", "Você parece tão calma.", "Vamos lutar juntos!",
            "Oi moça, sai do meu caminho!", "Eu só queria passar!", "Toma umas berries pra nos acalmarmos!",
            "Oi Gardevoir!", "Quero aprender com você!", "Sim, se eu te der umas berries, pode me ensinar sobre o poder psíquico?"
        ]
    }
};

// Butterfree
const butterfree = {
    nome: "Butterfree",
    id: "butterfree",
    tipo: "Inseto/Voador",
    vida: 60,
    ataque: 90,
    defesa: 50,
    velocidade: 70,
    fome: 70,
    mult: 88,
    preferencia: "doce",
    frases: {
        pokemon: [
            "Oi oi! Que dia bonito pra voar!", "Você tem comida por acaso?", "Vamos explorar juntos!",
            "Ei! Cuidado com minhas asas!", "Me desculpe, não vi essa cabeça minúscula!", "Não gosto de gente descuidada, mas vamos lá!",
            "Você parece curioso...", "Está procurando Pokémon também?", "Posso te mostrar o caminho, vamos juntos!"
        ],
        user: [
            "Oi Butterfree!", "Que lindas asas!", "Tenho sim, vamos voar juntos!",
            "Ei, você quase me acertou voando!", "Foi voce que quase me acertou!", "Toma umas berries e me acompanha!",
            "Oi Butterfree!", "Sim, estou explorando a região!", "Me mostra por onde começar?"
        ]
    }
};

// Charizard
const charizard = {
    nome: "Charizard",
    id: "charizard",
    tipo: "Fogo/Voador",
    vida: 78,
    ataque: 109,
    defesa: 78,
    velocidade: 100,
    fome: 70,
    mult: 89,
    preferencia: "picante",
    frases: {
        pokemon: [
            "Fogo e coragem andam juntos!", "Você parece determinado, gosto disso, me dê comida e vamos lá!.", "Vamos aquecer essa jornada!",
            "Fique longe da minha chama!", "Não sou de conversas, só de batalhas!", "Vamos ver do que você é capaz!",
            "Você tem espírito de luta...", "Estou vendo, me dê algo para comer!", "Posso te ajudar a ficar mais forte."
        ],
        user: [
            "Oi Charizard!", "Você é incrível, me acompanha na minha jornada!", "Vamos lutar lado a lado!",
            "Ei, abaixa esse fogo no rabo que ta muito forte!", "Só quero atravessar!", "Aqui, algumas berries pra esfriar os ânimos, vem batalhar junto comigo então!",
            "Oi Charizard!", "Eu treino bastante!", "Agora podemos treinar juntos?"
        ]
    }
};

// Garchomp
const garchomp = {
    nome: "Garchomp",
    id: "garchomp",
    tipo: "Dragão/Terra",
    vida: 108,
    ataque: 130,
    defesa: 95,
    velocidade: 102,
    fome: 70,
    mult: 90,
    preferencia: "salgado",
    frases: {
        pokemon: [
            "Hmph... vejo que é corajoso.", "Sou rápido como o vento do deserto, quero algo picante para comer!.", "Prove seu valor, treinador.",
            "Você ousa se aproximar de mim, sai daqui canalha!", "Você tem coragem e eu gostei disso, quero comida!", "Minha lâmina pode te ensinar respeito.",
            "Olá, quer alguma ajuda?", "Me dê umas berries e te ajudo!", "Vamos lá fracote!"
        ],
        user: [
            "Oi Garchomp!", "Você é poderoso, quer entrar na minha equipe?", "Vamos formar uma equipe imbatível!",
            "Ei bobalhão, ta com esse chifre grande por ai!", "Não precisa ficar brabinho, entra na minha equipe cabeção!", "Toma umas berries, campeão!",
            "Oi Garchomp, sou um novo treinador aqui!", "Entra na minha equipe por favor!!!", "Vamos enfrentar desafios juntos!"
        ]
    }
};

// Tyranitar
const tyranitar = {
    nome: "Tyranitar",
    id: "tyranitar",
    tipo: "Pedra/Sombrio",
    vida: 100,
    ataque: 134,
    defesa: 110,
    velocidade: 61,
    fome: 70,
    mult: 91,
    preferencia: "amargo",
    frases: {
        pokemon: [
            "Hah... você é corajoso por se aproximar.", "Poucos aguentam meu poder, se me der algo picante eu vou junto!.", "Você parece digno, VAMOS!!!",
            "Saia da minha frente formiguinha!", "Não me chame assim de novo!", "Quer ver o que um terremoto faz, vamos juntos e você vai ver!",
            "Sinto sua determinação...", "Interessante... talvez sirva pra algo.", "Fique por perto, mas não me atrapalhe."
        ],
        user: [
            "Oi Tyranitar!", "Você parece um dinossauro, vai ser o mais forte da minha equipe!", "Vamos lá então!",
            "Eita, tiranossauro da shopee feio demais!", "Eu só quero conversar, toma umas berries e se acalma!", "Desculpa escamoso!",
            "Oi Tyranitar!", "Gosto da sua força, coma algo salgado e vem comigo na jornada!", "Posso aprender muito com você!"
        ]
    }
};

// Krookodile
const krookodile = {
    nome: "Krookodile",
    id: "krookodile",
    tipo: "Terra/Sombrio",
    vida: 95,
    ataque: 117,
    defesa: 80,
    velocidade: 92,
    fome: 70,
    mult: 92,
    preferencia: "azedo",
    frases: {
        pokemon: [
            "Heh, o que temos aqui?", "Você parece esperto...me dê algo amargo pra comer!", "Gosto de gente ousada, vamos!!!",
            "Não me encara assim! ta querendo brigar?", "Grrrr, obrigado, quer ser meu amigo?", "Vamos lá sr doce!",
            "Você tem estilo...", "Hmmmmmm, eu estava bem tranquilo aqui, mas por você eu vou!", "Vamos fazer uma boa dupla."
        ],
        user: [
            "Oi Krookodile!", "Gosto do seu jeito confiante, entra na minha equipe por comida!", "Vamos juntos nessa!",
            "Ei lacoste, sai daí!", "Seu bafo me irrita, toma uma berrie doce!", "Quero sim, vamos nessa!",
            "Oi Krookodile!", "Sou estrategista também, quer entrar na minha equipe?", "Podemos lutar lado a lado!"
        ]
    }
};

// Gyarados
const gyarados = {
    nome: "Gyarados",
    id: "gyarados",
    tipo: "Água/Voador",
    vida: 95,
    ataque: 125,
    defesa: 79,
    velocidade: 81,
    fome: 70,
    mult: 93,
    preferencia: "picante",
    frases: {
        pokemon: [
            "ROOOAR! Quem ousa se aproximar?", "Você não teme nada, né, estou morrendo de fome!", "Hmph, gostei da sua coragem, muito obrigado!",
            "Sai daqui antes que eu te engula, meu nome é Gyarados!", "Me dê logo isso!", "Grrrrr... Vamos nessa então!",
            "Você tem um olhar firme...", "Talvez você saiba lidar com monstros, estou com um pouco de fome!.", "Vamos lá juntos!"
        ],
        user: [
            "Oi Gyarados!", "Não quero brigar, só conversar, tenho comida comigo!", "Você é incrível, vem junto comigo na minha jornada!",
            "Meu deus! uma minhoca azul!", "Eu te dou umas berries se você não me comer!", "Vamos com calma, quer me acompanhar agora que se acalmou?",
            "Oi Gyarados!", "Sou corajoso sim e quero que você se torne meu aliado!", "Eu te dou umas berries, vamos nessa!"
        ]
    }
};

// Swampert
const swampert = {
    nome: "Swampert",
    id: "swampert",
    tipo: "Água/Terra",
    vida: 100,
    ataque: 110,
    defesa: 90,
    velocidade: 60,
    fome: 70,
    mult: 94,
    preferencia: "salgado",
    frases: {
        pokemon: [
            "Ei, prazer em te ver por aqui!", "E você parece confiável, quero ser seu amigo!", "Vamos lá!",
            "Heh, ta falando mal do meu pântano!", "Não gosto de gente folgada... mas obrigado!", "Quero ir junto sim!",
            "Você observa bastante...", "Procurando aliados? eu vou sim, adoro aventuras!", "Eu topo, se tiver coragem."
        ],
        user: [
            "Oi Swampert!", "Você parece forte, tenho umas berries doces para você!", "Vamos explorar juntos então!",
            "Eca, está tudo sujo aqui!", "Toma umas berries como desculpa, não sabia que você morava aqui!", "Quer entrar no meu time?",
            "Oi Swampert, vi que você mora nesse pântano!", "Sim, toma umas berries amargas e vem comigo!", "Vamos trabalhar em equipe!"
        ]
    }
};

// Gengar
const gengar = {
    nome: "Gengar",
    id: "gengar",
    tipo: "Fantasma/Veneno",
    vida: 60,
    ataque: 130,
    defesa: 60,
    velocidade: 110,
    fome: 70,
    mult: 95,
    preferencia: "azedo",
    frases: {
        pokemon: [
            "Hehehe... Boo!", "Não se assusta fácil né menino, você é corajoso!", "Gostosuras ou travessuaras? HEHEHE!",
            "BOOOOOOOOOOOOO!!!, vou te pegar menino!", "HAHAHAHAAH, não me chame assim, me da todas as suas frutas que eu entro sim!", "HAHAHHAHAH, vamos nessa então!",
            "Você é curioso demais...", "HAHAHAHAHA, obrigado! me dê todas as sus berries que eu entro!", "Vamos treinador!!!"
        ],
        user: [
            "Haha! Oi Gengar!", "Você é engraçado, come umas berries azedas e entra na minha equipe!", "Vamos assustar uns treinadores juntos!",
            "AAAAAAAAAAAH, sai daqui bicho roxo", "Quase me mata do coração!, me mijei todo, entra na minha equipe Gasparzinho!", "Comilão!, pode pegar minhas berries e vamos nessa!",
            "Oi Gengar!", "Eu gosto de mistérios, você parece ser muito assustador, quer entrar na minha equipe?", "Agora sim vamos lá!!!"
        ]
    }
};




function exibirPokemon(pokemon, elementoId) {
    const elemento = document.getElementById(elementoId);
    const conteudo = `
        <div class="status">
            <h2>${pokemon.nome}</h2>
            <p><strong>Tipo:</strong> ${pokemon.tipo}</p>
            <p><strong>HP:</strong> ${pokemon.vida}</p>
            <p><strong>Ataque:</strong> ${pokemon.ataque}</p>
            <p><strong>Defesa:</strong> ${pokemon.defesa}</p>
            <p><strong>Velocidade:</strong> ${pokemon.velocidade}</p>
            <p><strong>Fome:</strong> ${pokemon.fome}</p>
            <p><strong>Preferência:</strong> ${pokemon.preferencia}</p>
        </div>
    `;

    elemento.innerHTML = conteudo;
}


exibirPokemon(machamp, "status-machamp");
exibirPokemon(gardevoir, "status-gardevoir");
exibirPokemon(butterfree, "status-butterfree");
exibirPokemon(charizard, "status-charizard");
exibirPokemon(garchomp, "status-garchomp");
exibirPokemon(tyranitar, "status-tyranitar");
exibirPokemon(krookodile, "status-krookodile");
exibirPokemon(gyarados, "status-gyarados");
exibirPokemon(swampert, "status-swampert");
exibirPokemon(gengar, "status-gengar");




// DIALOGO

const estadosDialogo = {};

let historicoDialogo = "";
let pokemonAtual = null;
let caminhoAtual = 1;
let caminho = '';
let contadores = [0, 0, 0];
let limites = [3, 3, 3];
let lateral = document.getElementById('barralateral');
let pokemonsumir = null;
let botaoAtual = null;
let statusAtual = null;
let dialogo = null;



function iniciarDialogo(pokemon) {
    pokemonAtual = pokemon;
    const id = pokemon.id;
    if (!estadosDialogo[id]) {
        estadosDialogo[id] = { 
            contadores: [0, 0, 0], 
            caminhoAtual: null, 
            historicoHTML: "", 
            faseFinalAtiva: false 
        };
    }
    botaoAtual = document.getElementById('btn-' + id);
    pokemonsumir = document.getElementById('pokemon-' + id);
    statusAtual = document.getElementById('status-' + id);
    dialogo = document.getElementById('frases-' + id);
    lateral.style.display = 'none';
    botaoAtual.style.display = "none";
    dialogo.className = "caixadialogo-inline";
    dialogo.style.visibility = "visible";

    lateral.style.display = "none";


    historico(personagem.nome + ' iniciou diálogo com o pokémon: ' + pokemonAtual.nome);

    let mensagensHTML = (estadosDialogo[id].historicoHTML) || "";
    dialogo.innerHTML = `
        <div id="mensagens">${mensagensHTML}</div>
        <div id="opcoes">
            <button class="botao" id="btn_amg" onclick="escolherCaminho(0, '${dialogo.id}', 'btn_amg')">Amigável</button>
            <button class="botao" id="btn_irr" onclick="escolherCaminho(1, '${dialogo.id}', 'btn_irr')">Irritado</button>
            <button class="botao" id="btn_cur" onclick="escolherCaminho(2, '${dialogo.id}', 'btn_cur')">Curioso</button>
            <button class="botao" onclick="fecharDialogo('${dialogo.id}', 'btn-${id}')">Fechar</button>
        </div>
    `;

    const estado = estadosDialogo[id];

    const btn_Amg = dialogo.querySelector('#btn_amg');
    const btn_Irr = dialogo.querySelector('#btn_irr');
    const btn_Cur = dialogo.querySelector('#btn_cur');
    if (estado.caminhoAtual !== null) {
        if (estado.caminhoAtual === 0) {
            btn_Irr.style.display = 'none'; 
            btn_Cur.style.display = 'none'; }
        if (estado.caminhoAtual === 1) {
            btn_Amg.style.display = 'none'; 
            btn_Cur.style.display = 'none'; }
        if (estado.caminhoAtual === 2) {
            btn_Amg.style.display = 'none'; 
            btn_Irr.style.display = 'none'; }
    }

    if (estado.faseFinalAtiva) {
        const opcoes = dialogo.querySelector('#opcoes');
        if (pokemonAtual.fome > 0) {
            opcoes.innerHTML = `
            <button class="botao" id="btn_frutas" onclick="div_usar_fruta_display()">Frutas</button>
            <button class="botao" onclick="fecharDialogo('${dialogo.id}', 'btn-${id}')">Fechar</button>
        `;
        } else {
            opcoes.innerHTML = `
            <button class="botao" id="btn_pokebola" onclick="div_usar_pokebola_display()">Pokébola</button>
            <button class="botao" onclick="fecharDialogo('${dialogo.id}', 'btn-${id}')">Fechar</button>
        `;
        }
    }

}
function exibirDialogo(pokemon) {
    document.getElementById('frases-' + pokemon.id).style.visibility = "visible";
}
function avancarpokemon() {
    let avancar = document.getElementById('avancar-' + pokemonAtual.id);
    avancar.style.display = 'flex';
}

function fecharDialogo(dialogoId, botaoId) {
    const dialogodiv = document.getElementById(dialogoId);
    const botaodiv = document.getElementById(botaoId);
    const mensagensdiv = dialogodiv.querySelector("#mensagens");
    if (mensagensdiv) {
        historicoDialogo = mensagensdiv.innerHTML;
        estadosDialogo[pokemonAtual.id].historicoHTML = mensagensdiv.innerHTML;
    }
    dialogodiv.style.visibility = "hidden";
    botaodiv.style.display = "flex";
    lateral.style.display = "flex";
}

function escolherCaminho(num, idDialogo, caminho_esc) {
    caminhoAtual = num;
    caminho = caminho_esc;
    const dialogo = document.getElementById(idDialogo);
    const mensagens = dialogo.querySelector("#mensagens");
    const statuspokemon = statusAtual;

    const estado = estadosDialogo[pokemonAtual.id];

    let indice = estado.contadores[num];
    let limite = limites[num];
    let base = num * 3;
    let indiceReal = base + indice;

    const btnAmg = dialogo.querySelector('#btn_amg');
    const btnIrr = dialogo.querySelector('#btn_irr');
    const btnCur = dialogo.querySelector('#btn_cur');

    if (caminho == 'btn_amg') {
        if (btnIrr) btnIrr.style.display = 'none';
        if (btnCur) btnCur.style.display = 'none';
    }
    else if (caminho == 'btn_irr') {
        if (btnAmg) btnAmg.style.display = 'none';
        if (btnCur) btnCur.style.display = 'none';
    }
    else {
        if (btnAmg) btnAmg.style.display = 'none';
        if (btnIrr) btnIrr.style.display = 'none';
    }

    if (estado.caminhoAtual === null) { 
        estado.caminhoAtual = num; 
    }



    if (indice >= limite) {
        document.getElementById('bloqueio').style.display = 'flex'
        mensagens.innerHTML += `<p><em>${pokemonAtual.nome} entrou na sua equipe!</em></p>`;
        setTimeout(() => {
            dialogo.style.visibility = "hidden";
            lateral.style.display = 'flex'
            statuspokemon.style.display = 'none'
            apagar('btn-' + pokemonAtual.id)
            avancarpokemon();
            document.getElementById('bloqueio').style.display = 'none'
        },
            3000);
        return;
    }

    mensagens.innerHTML += `<p><strong>Você:</strong> ${pokemonAtual.frases.user[indiceReal]}</p>`;
    const resposta = pokemonAtual.frases.pokemon[indiceReal];

    if (indice >= limite - 1) {
        const botaoCaminho = dialogo.querySelector(`#${caminho}`);
        botaoCaminho.style.display = 'none';
        const opcoes = dialogo.querySelector("#opcoes");
        opcoes.innerHTML = `
            <button class="botao" id="btn_frutas" onclick="div_usar_fruta_display()">Frutas</button>
            <button class="botao" onclick="fecharDialogo('${dialogo.id}', 'btn-${pokemonAtual.id}')">Fechar</button>
        `;
        estado.faseFinalAtiva = true;
        estado.historicoHTML = mensagens.innerHTML;
    }
    else {
        setTimeout(() => {
            mostrarResposta(resposta, mensagens);
        }, 1000);
    }



    estado.contadores[num]++;
    estadosDialogo[pokemonAtual.id].historicoHTML = mensagens.innerHTML;

}

function mostrarResposta(resposta, mensagens) {
    mensagens.innerHTML += `<p><strong>${pokemonAtual.nome}:</strong> ${resposta}</p>`;
}

// funcao escolher pokemon

function adicionaesc() {
    const botoes = document.querySelector('.botoesescolher');
    botoes.style.display = 'block';
}



const todosPokemon = [machamp, gardevoir, butterfree, charizard, garchomp, tyranitar, krookodile, gyarados, swampert, gengar];
let indicePokemonEscolha = 0;

function esquerda() {
    indicePokemonEscolha--;

    if (indicePokemonEscolha < 0) {
        indicePokemonEscolha = todosPokemon.length - 1;
    }

    atualizarPokemonEscolha();
}

function direita() {
    indicePokemonEscolha++;

    if (indicePokemonEscolha >= todosPokemon.length) {
        indicePokemonEscolha = 0;
    }

    atualizarPokemonEscolha();
}

function atualizarPokemonEscolha() {
    const pokemonAtual = todosPokemon[indicePokemonEscolha];

    const img = document.getElementById("pokemon-escolhido");
    img.src = `pokemons/${pokemonAtual.nome.toLowerCase()}.png`;
    img.alt = pokemonAtual.nome;

    const titulo = document.querySelector("#escolher h1");
    titulo.textContent = pokemonAtual.nome;
}

atualizarPokemonEscolha();

function escolha() {
    const pokemonEscolhido = todosPokemon[indicePokemonEscolha];
    const escolhidodiv = document.getElementById('pk-escolhido');
    const titulo = document.querySelector("#escolher h1");
    titulo.style.display = 'none';
    historico(personagem.nome + ' escolheu como seu pokémon definitivo o(a): ' + pokemonEscolhido.nome);


    escolhidodiv.innerHTML = `
            <div class="info-pop">
                <h1 id="h1_esco" class="locais mnh1">Parabéns, você completou o jogo <br> "Pokémon doce"</h1><br><br><p>O pokémon 
                escolhido por você para ser o seu companheiro definitivo foi: ${pokemonEscolhido.nome}</p>
                <img src="pokemons/${pokemonEscolhido.nome.toLowerCase()}.png" alt="${pokemonEscolhido.nome}" width="150px">
                <img src=${skin[personagem.skin - 1].imagem} alt=${skin[personagem.skin - 1].nome} width="150px">
                <p>Obrigado por jogar!, para saber o seu histórico no jogo, clique no botão abaixo:</p>
                <button class="botao" id="btn-hist" onclick="goTo('historico')">Historico</button>
            </div>
    `;
    escolhidodiv.style.display = "block"
}
function div_usar_fruta_display() {
    document.getElementById("usar").style.display = "flex"
    document.getElementById("inventario-fruta").style.display = "flex"
}
function div_usar_pokebola_display() {
    document.getElementById("usar").style.display = "flex"
    document.getElementById("inventario-pokebola").style.display = "flex"
}
function div_usar(id) {
    let div_uso = document.getElementById("usar");
    let conteudo = `a`
    if (items[id - 1].qtd == 0) {
        alert("Você não tem esse item")
        return;
    }
    else if (id < 5) {
        conteudo = `
        <div id="usar-pop" class="info-pop">
            <h1 id="h1_usar" class="locais mnh1">Deseja usar o item ${items[id - 1].nome}?<br>Quantidade: ${items[id - 1].qtd}</h1>
                <img src="Items_loja/item${id}.webp" alt="${items[id - 1].nome}">
                <div id="descricao-items">
                    <span>
                        <h2><strong>Nome: </strong>${items[id - 1].nome}</h2>
                        <h3><strong>Descrição: </strong>${items[id - 1].desc}<h3>
                        <p><strong>Multiplicador: <strong>${items[id - 1].mult}x</p>
                    </span>
                </div>
                <button type="button" class="botao" onclick="usar_pokebola(${id})">Usar</button>
                <button type="button" class="botao" onclick="voltar(1)">Voltar</button>
        </div>`
    }
    else {
        conteudo = `
        <div id="usar-pop" class="info-pop">
            <h1 id="h1_usar" class="locais mnh1">Deseja usar o item ${items[id - 1].nome}?<br>Quantidade: ${items[id - 1].qtd}</h1>
                <img src="Items_loja/item${id}.webp" alt="${items[id - 1].nome}">
                <div id="descricao-items">
                    <span>
                        <h2><strong>Nome: </strong>${items[id - 1].nome}</h2>
                        <h3><strong>Descrição: </strong>${items[id - 1].desc}<h3>
                        <p><strong>Salgado: </strong>${items[id - 1].salgado}</p>
                        <p><strong>Doce: </strong>${items[id - 1].doce}</p>
                        <p><strong>Amargo: </strong>${items[id - 1].amargo}</p>
                        <p><strong>Azedo: </strong>${items[id - 1].azedo}</p>
                        <p><strong>Picante: </strong>${items[id - 1].picante}</p>
                    </span>
                </div>
                <button type="button" class="botao" onclick="usar_fruta(${id});">Usar</button>
                <button type="button" class="botao" onclick="voltar(2)">Voltar</button>
        </div>`
    }
    div_uso.innerHTML = conteudo;
    div_uso.style.display = "flex"
    document.getElementById("inventario-fruta").style.display = "none"
    document.getElementById("inventario-pokebola").style.display = "none"
}
function usar_fruta(id) {
    const dialogo = document.getElementById('frases-' + pokemonAtual.id);
    const opcoes = dialogo.querySelector("#opcoes");
    const mensagensEl = dialogo.querySelector('#mensagens');
    let fruta = items[id - 1];
    let saciedade = 0;
    if (fruta[pokemonAtual.preferencia] > 5) {
        if (fruta.amargo > 0) {
            saciedade += fruta.amargo - 5
        }
        if (fruta.azedo > 0) {
            saciedade += fruta.azedo - 5
        }
        if (fruta.picante > 0) {
            saciedade += fruta.picante - 5
        }
        if (fruta.doce > 0) {
            saciedade += fruta.doce - 5
        }
        if (fruta.salgado > 0) {
            saciedade += fruta.salgado - 5
        }
        pokemonAtual.fome -= saciedade
        if (pokemonAtual.fome < 0) {
            pokemonAtual.fome = 0;
        }
        exibirPokemon(pokemonAtual, 'status-' + pokemonAtual.id)
        fruta.qtd--;
        historico(personagem.nome + " deu uma fruta correta para: " + pokemonAtual.nome)
    }
    else {
        alert(`Parece que ${pokemonAtual.nome} não gostou da fruta, Sua fome não baixou!!!`)
        historico(personagem.nome + " deu uma fruta incorreta para: " + pokemonAtual.nome)
        fruta.qtd--;
    }
    apagar('usar')
    apagar('inventario-fruta')
    apagar('inventario-pokebola')
    apagar('usar-pop')
    if (pokemonAtual.fome == 0) {
        opcoes.innerHTML = `
        <button class="botao" id="btn_pokebola" onclick="div_usar_pokebola_display()">Pokébola</button>
        <button class="botao" onclick="fecharDialogo('${dialogo.id}', 'btn-${pokemonAtual.id}')">Fechar</button>
        `
    }
    const estado = estadosDialogo[pokemonAtual.id];
    if (estado) {
        if (pokemonAtual.fome == 0) { estado.faseFinalAtiva = true; }
        if (mensagensEl) { estado.historicoHTML = mensagensEl.innerHTML; }
    }
}
function usar_pokebola(id) {
    let pokebola = items[id - 1];
    items[id - 1].qtd--;
    let img = document.getElementById("pokemon-" + pokemonAtual.id)
    const opcoes = dialogo.querySelector("#opcoes");
    let chance = (100 - pokemonAtual.mult) * pokebola.mult / 100;
    let rand = Math.random();
    console.log(document.getElementById('bloqueio'))
    document.getElementById('bloqueio').style.display = 'flex'
    apagar('inventario-pokebola')
    apagar('usar')
    apagar('usar-pop')
    historico(personagem.nome + " usou uma " + items[id - 1].nome + " para capturar um(a): " + pokemonAtual.nome)
    img.style.height = '10vh'
    img.style.width = '10vh'
    img.innerHTML = `
    <img src="Items_loja/item${id}.webp" alt="${pokebola.nome}">
    `
    setTimeout(function () {
        if (chance >= rand) {
            alert('CAPTUROU')
            img.innerHTML = ``
            opcoes.innerHTML = `
            <button class="botao" id="${caminho}" onclick="escolherCaminho(${caminhoAtual}, '${dialogo.id}', '${caminho}'), historico(personagem.nome + ' capturou o pokémon: ' + pokemonAtual.nome);">Pegar de volta a pokebola</button>
        `;
        }
        else {
            img.style.height = '65%'
            img.style.width = '65%'
            img.innerHTML = `
            <img src="pokemons/${pokemonAtual.id}.png" alt="${pokemonAtual.nome}">
            `
            alert(`O ${pokemonAtual.nome} fugiu da ${pokebola.nome}, Talvez se você tentar denovo ele entre`)
        }
        document.getElementById("bloqueio").style.display = "none"
    }, 2000);
}
function voltar(n) {
    if (n == 1) {
        apagar('usar-pop')
        document.getElementById('inventario-pokebola').style.display = "flex"
    }
    else {
        apagar('usar-pop')
        document.getElementById('inventario-fruta').style.display = "flex"
    }
}

function historico(texto) {
    let div = document.getElementById("hist-p");
    div.innerHTML += texto + `<br>`;
}

