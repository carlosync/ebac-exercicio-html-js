const form = document.getElementById('form-validacao');

const numero1 = document.getElementById('numero1');
const numero2 = document.getElementById('numero2');

function containerMensagemFormularioValido(){
    const valido = 'Formulário Válido';
    const containerValido = document.querySelector('.valido');
    containerValido.innerHTML = valido;
    containerValido.style.display = 'block'
}

function containerMensagemFormularioInValido(){
    const invalido = 'Formulário Inválido';
    const containerInValido = document.querySelector('.invalido');
    containerInValido.innerHTML = invalido;
    containerInValido.style.display = 'block'
}

function validaFormulario(){
    if(numero2.value > numero1.value){
       containerMensagemFormularioValido();
    }else {
        containerMensagemFormularioInValido();
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    validaFormulario();
})
