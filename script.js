

const calculo= document.getElementById('calculo');

function imc () {
    const altura= document.getElementById('altura').value;
    const nome= document.getElementById('nome').value;
    const peso= document.getElementById('peso').value;
    const resultado= document.getElementById('resultado');
   
    if (nome !=='' && altura !== '' && peso !=='')
    {
    const calculo= (peso / (altura*altura)).toFixed(2);
  if (calculo < 17 ){ 
    resultado.textContent= `${nome}, o resultado do seu IMC é ${calculo} e você está Muito abaixo do peso.`;
}
else if (calculo < 18.49 ){
    resultado.textContent= `${nome}, o resultado do seu IMC é ${calculo} e você está Abaixo do Peso.`;
}

else if (calculo < 24.99 ){
    resultado.textContent= `${nome}, o resultado do seu IMC é ${calculo} e você está com Peso Normal.`;
}

else if (calculo < 29.99 ){
    resultado.textContent= `${nome}, o resultado do seu IMC é ${calculo} e você está com Sobrepeso.`;
}

else if (calculo < 34.99 ){
    resultado.textContent= `${nome}, o resultado do seu IMC é ${calculo} e você está com Obesidade Grau I.`;
}
else if (calculo < 39.99 ){
    resultado.textContent= `${nome}, o resultado do seu IMC é ${calculo} e você está com Obesidade Grau II (severa).`;
}

else if (calculo > 40 ){
    resultado.textContent= `${nome}, o resultado do seu IMC é ${calculo} e você está com Obesidade Grau III (mórbida).`;
}
else{
    alert ('Preencha todos os campos');
}

}
}
calcular.addEventListener ('click', imc);
