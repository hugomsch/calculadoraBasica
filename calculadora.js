const calc = document.querySelector("calc");

var x,y;
function botao(num){
    var salvo = document.calc.visor.value;
    document.calc.visor.value = salvo + num;
    
    reset();
}

function reset(){
    
    document.calc.visor.reset;

}

function calculate(){
    
    resultado = eval(document.calc.visor.value);
    
    
  
    alert(resultado);
}
