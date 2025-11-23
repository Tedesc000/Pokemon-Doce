let cont = 1
let tam = 12
function troca_esquerda() {
    let bool = false
    let item = items[0];
    let botao = `a`
    let imagem = `<img class="img-item" src="Items_loja/item1.webp" alt=Pokebola>`
    let exibir = `a`
    const desc = document.getElementById('descricao-loja');
    const img = document.getElementById('caixa-loja');
    const btn = document.getElementById('btn-loja-compra');
    if (cont === 1) {
        cont = tam;
    }
    else {
        cont--;
    }
    for (i = 0; i < tam; i++) {
        if (items[i].id == cont) {
            item = items[i];
            imagem = `<img class="img-item" src="Items_loja/item${i + 1}.webp" alt=${item.nome}>`
            botao = `<button class="botao" type="button" onclick="comprar(${i + 1})">Comprar</button>`
            i = 20;
            bool = true;
        }
    }
    if (bool) {
        if (item.id < 5) {
            exibir = `
            <h2><strong>Nome: </strong>${item.nome}</h2>
            <h3><strong>Descrição: </strong>${item.desc}</h3>
            <p><strong>Multiplicador: </strong>${item.mult}x</p>
            <p><strong>Preço: </strong>${item.preco} R$</p>
            `
        }
        else {
            exibir = `
            <h2><strong>Nome: </strong>${item.nome}</h2>
            <h3><strong>Descrição: </strong>${item.desc}</h3>
            <p><strong>Salgado: </strong>${item.salgado}</p>
            <p><strong>Doce: </strong>${item.doce}</p>
            <p><strong>Amargo: </strong>${item.amargo}</p>
            <p><strong>Azedo: </strong>${item.azedo}</p>
            <p><strong>Picante: </strong>${item.picante}</p>
            <p><strong>Preço: </strong>${item.preco} R$</p>
            `
        }

    }
    else {
        console.log('nao deu bom');
    }
    desc.innerHTML = exibir;
    img.innerHTML = imagem;
    btn.innerHTML = botao;
}

function troca_direita() {
    let bool = false
    let item = items[0];
    let imagem = `<img class="img-item" src="Items_loja/item1.webp" alt=Pokebola>`
    let botao = `a`
    let exibir = `a`
    const desc = document.getElementById('descricao-loja');
    const img = document.getElementById('caixa-loja');
    const btn = document.getElementById('btn-loja-compra');
    if (cont === tam) {
        cont = 1;
    }
    else {
        cont++;
    }
    for (i = 0; i < tam; i++) {
        if (items[i].id == cont) {
            item = items[i];
            imagem = `<img class="img-item" src="Items_loja/item${i + 1}.webp" alt=${item.nome}>`
            botao = `<button class="botao" type="button" onclick="comprar(${i + 1})">Comprar</button>`
            i = 20;
            bool = true;
        }
    }
    if (bool) {
        if (item.id < 5) {
            exibir = `
            <h2><strong>Nome: </strong>${item.nome}</h2>
            <h3><strong>Descrição: </strong>${item.desc}</h3>
            <p><strong>Multiplicador: </strong>${item.mult}x</p>
            <p><strong>Preço: </strong>${item.preco} R$</p>
            `
        }
        else {
            exibir = `
            <h2><strong>Nome: </strong>${item.nome}</h2>
            <h3><strong>Descrição: </strong>${item.desc}</h3>
            <p><strong>Salgado: </strong>${item.salgado}</p>
            <p><strong>Doce: </strong>${item.doce}</p>
            <p><strong>Amargo: </strong>${item.amargo}</p>
            <p><strong>Azedo: </strong>${item.azedo}</p>
            <p><strong>Picante: </strong>${item.picante}</p>
            <p><strong>Preço: </strong>${item.preco} R$</p>
            `
        }

    }
    else {
        console.log('nao deu bom');
    }
    desc.innerHTML = exibir;
    img.innerHTML = imagem;
    btn.innerHTML = botao;
}

const items = [
    { id: 1, nome: "Pokebola", mult: 1.0, desc: "Uma pokebola comum, sem nenhum fator especial, que nem você kk.", preco: 100, qtd: 0 },
    { id: 2, nome: "Pokebola Boa", mult: 2.0, desc: "Uma pokebola mediana, aumenta sua chance de captura.", preco: 250, qtd: 0 },
    { id: 3, nome: "Pokebola Ultra", mult: 3.0, desc: "Uma pokebola de qualidade superior, aumenta bastante sua chance de captura.", preco: 400, qtd: 0 },
    { id: 4, nome: "Pokebola Mestra", mult: 10.0, desc: "A melhor pokebola que o dinheiro pode comprar(mas não o teu dinheiro).", preco: 999999, qtd: 0 },
    { id: 5, nome: "Mago Berry", desc: "Amarga como a vida", preco: 50, doce: 0, salgado: 0, azedo: 0, amargo: 25, picante: 0, qtd: 0 },
    { id: 6, nome: "Cheri Berry", desc: "Picante como pimenta('-' sla)", preco: 50, doce: 0, salgado: 0, azedo: 0, amargo: 0, picante: 25, qtd: 0 },
    { id: 7, nome: "Pecha Berry", desc: "Doce como mel", preco: 50, doce: 25, salgado: 0, azedo: 0, amargo: 0, picante: 0, qtd: 0 },
    { id: 8, nome: "Chesto Berry", desc: "Salgada como água do mar", preco: 50, doce: 0, salgado: 25, azedo: 0, amargo: 0, picante: 0, qtd: 0 },
    { id: 9, nome: "Pinap Berry", desc: "Azeda como limão", preco: 50, doce: 0, salgado: 0, azedo: 25, amargo: 0, picante: 0, qtd: 0 },
    { id: 10, nome: "Leppa Berry", desc: "Uma mistura bizarra de sabor", preco: 50, doce: 0, salgado: 15, azedo: 15, amargo: 0, picante: 15, qtd: 0 },
    { id: 11, nome: "Nanab Berry", desc: "Fruta amarga e doce", preco: 50, doce: 20, salgado: 0, azedo: 0, amargo: 20, picante: 0, qtd: 0 },
    { id: 12, nome: "Oran Berry", desc: "Serve pra tudo, mas não é boa em nada", preco: 100, doce: 8, salgado: 8, azedo: 8, amargo: 8, picante: 8, qtd: 0 }
];

function mostra_info(id) {
    const info = document.getElementById('info');
    if (id < 5) {
        info.innerHTML = `
        <h2><strong>Nome: </strong>${items[id - 1].nome}</h2>
            <h3><strong>Descrição: </strong>${items[id - 1].desc}<h3>
            <p><strong>Multiplicador: </strong>${items[id - 1].mult}x</p>
            <p><strong>Quantidade: </strong>${items[id - 1].qtd}</p>
        `;

    }
    else {
        info.innerHTML = `
        <h2><strong>Nome: </strong>${items[id - 1].nome}</h2>
            <h3><strong>Descrição: </strong>${items[id - 1].desc}<h3>
            <p><strong>Salgado: </strong>${items[id - 1].salgado}</p>
            <p><strong>Doce: </strong>${items[id - 1].doce}</p>
            <p><strong>Amargo: </strong>${items[id - 1].amargo}</p>
            <p><strong>Azedo: </strong>${items[id - 1].azedo}</p>
            <p><strong>Picante: </strong>${items[id - 1].picante}</p>
            <p><strong>Quantidade: </strong>${items[id - 1].qtd}</p>
        `;
    }
    info.style.display = 'block';
}

function comprar(id) {
    if (personagem.dinheiro < items[id - 1].preco) {
        alert("Você é pobre e não consegue comprar o item, parabéns pela mediocridade!!!");
    }
    else {
        personagem.dinheiro -= items[id - 1].preco;
        items[id - 1].qtd++;
        att_dinheiro();
        historico(personagem.nome + " comprou uma " + items[id - 1].nome)
    }
}

function att_dinheiro() {
    let local = document.getElementById("dinheiro");
    local.innerHTML = personagem.dinheiro;
}

function apagar(id) {
    let div = document.getElementById(id);
    div.style.display = 'none';
}

function tirarperfil() {
    const info = document.getElementById('info-user');
    const interfaceEl = document.getElementById('interface');
    const barralateral = document.getElementById('barralateral');
    if (barralateral) {
        barralateral.style.display = 'none';
    }
    if (interfaceEl) {
        interfaceEl.style.display = 'none';
    }
    if (info) {
        info.style.display = 'none';
    }
}

function tirarbarralateral() {
    const barralateral = document.getElementById('barralateral');
    if (barralateral) {
        barralateral.style.display = 'none';
    }
}

function login() {
    const divlogin = document.getElementById('info_inicio');
    divlogin.innerHTML = `
            <div class="info-pop">
                <h3 id="h3_login" class="locais mnh1">Faça o seu login<br></h3><br><br>
                Nome do treinador:<input type="text" placeholder="Marcio Bigolin" id="nomejogador"> </input><br>
                <button type="button" class="botao" id="botaologin" onclick="cadastrar()">Login</button>
            </div>
    `;
    divlogin.style.display = 'block';
}

function cadastrar() {
    personagem.nome = document.getElementById('nomejogador').value;
    document.getElementById('fundo_inicio').style.display = 'none';
    document.getElementById("barralateral").innerHTML = `
    <h1 id="nome_barra" class="locais tistulo">${personagem.nome}</h1>
    <img id="img_skin_user" src=${skin[20].imagem} alt="${skin[20].nome}">`;
    document.getElementById("nome_perfil").innerHTML = `${personagem.nome}`
    historico('O jogador cadastrou seu nome como: ' + personagem.nome);
}
