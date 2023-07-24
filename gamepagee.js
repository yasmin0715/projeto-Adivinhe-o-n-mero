// geração do valor aleatório

// contagem de tentativas
// até acerto    
  
// função para o número enviado pelo usuário
var y = Math.floor(Math.random() * 10 + 1);

var x = document.getElementById("guessField").value;

if(x == y)
{
    alert("PAREBÉNS!!!"+playername+", você acertou em "
              + guess + "tentativa(s)! ");
     guess= 1;
}

else if(x > y)
{
    gues++;
    alert("Opa, resposta errada!!! Tente um número menor");
}
else
{
    guess++;
    alert("Opa, resposta errada!!! Tente um número maior")
}
function playAigain(){
    y = Math.floor(Math.random() * 10 + 1);
}
