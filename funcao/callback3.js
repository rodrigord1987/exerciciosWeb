//exemplo callback pra utilizar no f12 da página html pra recuperar o body do DOM
document.getElementsByTagName('body')[0].onclick = function(e){
    console.log('O Evento callback ocorreu, quando clicou no body da pagina')
    
}