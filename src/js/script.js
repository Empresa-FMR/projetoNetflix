//ARRAY DE OBJETOS COM AS IMAGENS E INFORMAÇÕES

const bannerItems =[
{
    imagem:"../assets/Game1.jpg",
    titulo: "titulo do filme 1",
    descricao: "Filme 1"
},

{
    imagem:"../assets/Game2.jpg",
    titulo: "titulo do filme 2",
    descricao: "Filme 2"
},

{
    imagem:"../assets/Game3.jpg",
    titulo: "titulo do filme 3",
    descricao: "Filme 3"
},
];

// DECLARANDO AS VARIAVEIS E ELEMENTOS COM DOM 
const tempo = 5000; // tempo em milisegundos
const elementoBanner = document.querySelector (".banner");
const elementoTitulo = document.querySelector (".banner-titulo");
const elementoDescricao = document.querySelector (".banner-descricao");
let i=0; // inicio da contagem das imagens

// FUNÇÃO PARA O SLIDESSHOW

function slideShow(){
    // altera a imagem de fundo do banner
    // `` - Template Strings ou Strings Literais
    elementoBanner.style.backgroundImage = `url(${bannerItems}[i].imagem)`
    // ALTERA O TÍTULO DO BANNER
    elementoTitulo.textContent = bannerItems[i].titulo;
    elementoDescricao.textContent = bannerItems[i].descricao;

    // INCREMENTA O ÍNDICE (I) E REINICIA QUANDO CHEGAR NO FINAL DO ARRAY

    // Se o I for maior que a quantidade de imagens volta para o início

    i++;
    if ( i > bannerItems.lenght){
        i = 0; 
    }
    // chama a função novamente após um tempo definido
    setTimeout(slideShow, tempo);
}

//inicia o slideshow da função
slideshow();
