const tam_mn=27;
let cont_mn=0;

function sacar(id){
    const div=document.getElementById(id);
    const pontos=document.getElementById("pontos").innerHTML;
    const divpt=document.getElementById("pontos");
    const pontos_int=parseFloat(pontos)
    personagem.dinheiro+=pontos_int;
    historico(personagem.nome+" sacou R$"+pontos_int+" no minigame!")
    att_dinheiro();
    divpt.innerHTML=`0`;
    div.style.display='none';
    
}

function rand_pk(){
    let bool_fim=false;
    let conteudo=`a`;
    const div_img=document.getElementById('poke-mn');
    if(cont_mn>=tam_mn){
        reset_bool();
        cont_mn=0;
    }
    do{
        let num=Math.floor(Math.random() * (tam_mn)) + 1;
        if(!pks_mn[num-1].bool){
            conteudo=`
            <h1 id="tt-minigame" class="locais tistulo">Quem é esse pokemon!?</h1>
            <img src="${pks_mn[num-1].imagem}" alt="${pks_mn[num-1].resposta}" id="img-pk-mn">
            `
            pks_mn[num-1].bool=true;
            cont_mn++;
            bool_fim=true;
        }
    }while(!bool_fim);
    div_img.innerHTML=conteudo;
}

function reset_bool(){
    for(i=0;i<tam_mn;i++){
        pks_mn[i].bool=false;
    }
}

function advinhar(){
    let resp_user=document.getElementById("input-resposta").value;
    let resp=document.getElementById("img-pk-mn").alt;
    let div_pontos=document.getElementById("pontos");
    let div_pontos_continuar=document.getElementById("pontos_saque");
    let div_continuar=document.getElementById("continuar-minigame");
    let pontos=document.getElementById("pontos").innerHTML;
    if(resp_user==resp){
        if(pontos==0){
            pontos=150;
        }
        else{
            pontos=pontos*2;
        }
        div_continuar.style.display="flex";
        historico(personagem.nome+" acertou o nome: "+ resp)
    }
    else{
        pontos=0;
        reset_bool();
        historico(personagem.nome+" errou o nome: "+ resp)
    }
    rand_pk();
    div_pontos.innerHTML=pontos;
    div_pontos_continuar.innerHTML=pontos;
}

const pks_mn = [
    {id:1,resposta:"absol",imagem:"pokemons/absol.png",bool:false},
    {id:2,resposta:"arcanine",imagem:"pokemons/arcanine.png",bool:false},
    {id:3,resposta:"arceus",imagem:"pokemons/arceus.png",bool:false},
    {id:4,resposta:"blaziken",imagem:"pokemons/blaziken.png",bool:false},
    {id:5,resposta:"butterfree",imagem:"pokemons/butterfree.png",bool:false},
    {id:6,resposta:"charizard",imagem:"pokemons/charizard.png",bool:false},
    {id:7,resposta:"dragonite",imagem:"pokemons/dragonite.png",bool:false},
    {id:8,resposta:"eevee",imagem:"pokemons/eevee.png",bool:false},
    {id:9,resposta:"flygon",imagem:"pokemons/flygon.png",bool:false},
    {id:10,resposta:"garchomp",imagem:"pokemons/garchomp.png",bool:false},
    {id:11,resposta:"gardevoir",imagem:"pokemons/gardevoir.png",bool:false},
    {id:12,resposta:"gengar",imagem:"pokemons/gengar.png",bool:false},
    {id:13,resposta:"gyarados",imagem:"pokemons/gyarados.png",bool:false},
    {id:14,resposta:"infernape",imagem:"pokemons/infernape.png",bool:false},
    {id:15,resposta:"krookodile",imagem:"pokemons/krookodile.png",bool:false},
    {id:16,resposta:"lucario",imagem:"pokemons/lucario.png",bool:false},
    {id:17,resposta:"luxray",imagem:"pokemons/luxray.png",bool:false},
    {id:18,resposta:"machamp",imagem:"pokemons/machamp.png",bool:false},
    {id:19,resposta:"mew",imagem:"pokemons/mew.png",bool:false},
    {id:20,resposta:"mewtwo",imagem:"pokemons/mewtwo.png",bool:false},
    {id:21,resposta:"pikachu",imagem:"pokemons/pikachu.png",bool:false},
    {id:22,resposta:"rayquaza",imagem:"pokemons/rayquaza.png",bool:false},
    {id:23,resposta:"scizor",imagem:"pokemons/scizor.png",bool:false},
    {id:24,resposta:"snorlax",imagem:"pokemons/snorlax.png",bool:false},
    {id:25,resposta:"swampert",imagem:"pokemons/swampert.png",bool:false},
    {id:26,resposta:"tyranitar",imagem:"pokemons/tyranitar.png",bool:false},
    {id:27,resposta:"umbreon",imagem:"pokemons/umbreon.png",bool:false}
]