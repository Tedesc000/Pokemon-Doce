let tam_skin=20;
let id_skin=1;
let skin_select=personagem.skin;
function troca_esquerda_skin(){
    let conteudo=`a`
    let div_conteudo=document.getElementById("conteudo_skin")
    if(id_skin==1){
        id_skin=tam_skin;
        conteudo=`
        <h1 id="h1_skin" class="locais tistulo">Escolha sua skin:<br><br>${skin[id_skin-1].nome}</h1>
        <img id="img_skins" src=${skin[id_skin-1].imagem} alt="${skin[id_skin-1].nome}">
        `
    }
    else{
        id_skin--;
        conteudo=`
        <h1 id="h1_skin" class="locais tistulo">Escolha sua skin:<br><br>${skin[id_skin-1].nome}</h1>
        <img id="img_skins" src=${skin[id_skin-1].imagem} alt="${skin[id_skin-1].nome}">
        `
    }
    div_conteudo.innerHTML=conteudo;
    if(id_skin==skin_select){
        document.getElementById("skin_select").style.display="none";
    }
    else{
        document.getElementById("skin_select").style.display="inline";
    }
}

function troca_direita_skin(){
    let conteudo=`a`
    let div_conteudo=document.getElementById("conteudo_skin")
    if(id_skin==tam_skin){
        id_skin=1;
        conteudo=`
        <h1 id="h1_skin" class="locais tistulo">Escolha sua skin:<br><br>${skin[id_skin-1].nome}</h1>
        <img id="img_skins" src=${skin[id_skin-1].imagem} alt="${skin[id_skin-1].nome}">
        `
    }
    else{
        id_skin++;
        conteudo=`
        <h1 id="h1_skin" class="locais tistulo">Escolha sua skin:<br><br>${skin[id_skin-1].nome}</h1>
        <img id="img_skins" src=${skin[id_skin-1].imagem} alt="${skin[id_skin-1].nome}">
        `
    }
    div_conteudo.innerHTML=conteudo;
    if(id_skin==skin_select){
        document.getElementById("skin_select").style.display="none";
    }
    else{
        document.getElementById("skin_select").style.display="inline";
    }
}

function troca_skin(){
    personagem.skin=id_skin;
    skin_select=id_skin;
    document.getElementById("barralateral").innerHTML=`
    <h1 id="nome_barra" class="locais tistulo">${personagem.nome}</h1>
    <img id="img_skin_user" src=${skin[personagem.skin-1].imagem} alt="${skin[personagem.skin-1].nome}">`;
    document.getElementById("skin_select").style.display="none";
    historico(personagem.nome+" escolheu a skin: "+skin[personagem.skin-1].nome)
}

const skin = [
    {id:1,nome:"Ash",imagem:"personagens/Ash.png"},
    {id:2,nome:"Red",imagem:"personagens/Red.png"},
    {id:3,nome:"Giovanni",imagem:"personagens/Giovanni.png"},
    {id:4,nome:"N",imagem:"personagens/N.png"},
    {id:5,nome:"Cynthia",imagem:"personagens/Cynthia.png"},
    {id:6,nome:"Nessa",imagem:"personagens/Nessa.png"},
    {id:7,nome:"Hilda",imagem:"personagens/Hilda.png"},
    {id:8,nome:"Miku",imagem:"personagens/Miku.png"},
    {id:9,nome:"Erik",imagem:"personagens/Erik.png"},
    {id:10,nome:"Festa do peixe",imagem:"personagens/Festadopeixe.png"},
    {id:11,nome:"Gojo",imagem:"personagens/Gojo.png"},
    {id:12,nome:"Johnny Sins",imagem:"personagens/Johnnysins.jpg"},
    {id:13,nome:"Cabana de Goblins",imagem:"personagens/Cabanadegoblins.png"},
    {id:14,nome:"Mclovin",imagem:"personagens/Mclovin.jpg"},
    {id:15,nome:"Urubu do Pix",imagem:"personagens/Urubudopix.jpg"},
    {id:16,nome:"Vitor",imagem:"personagens/Vitor.webp"},
    {id:17,nome:"Mondongo",imagem:"personagens/Mondongo.jpeg"},
    {id:18,nome:"Marcio Bigolin",imagem:"personagens/Marciobigolin.jpg"},
    {id:19,nome:"Chitaozinho e Xororó",imagem:"personagens/Chitaozinhoexororo.webp"},
    {id:20,nome:"Ricardo Milos",imagem:"personagens/Ricardomilos.jpg"},
    {id:21,nome:"Mark",imagem:"personagens/Mark.webp"},
]
