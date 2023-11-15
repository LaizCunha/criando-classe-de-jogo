function onFormSubmit(evt) {
    evt.preventDefault();

    const form = evt.target;
    const formData = new FormData(form);

    const name = formData.get('name');
    const vocacao = formData.get('vocacao');

    console.log(name)
    console.log(vocacao)  

    if (vocacao === 'monge') {
        document.querySelector('#resultado').innerHTML = `O herói ${name} do tipo ${vocacao} atacou usando artes marciais!`
    } else if (vocacao === 'mago') {
        document.querySelector('#resultado').innerHTML = `O herói ${name} do tipo ${vocacao} atacou usando magia!`
    } else if (vocacao === 'ninja') {
        document.querySelector('#resultado').innerHTML = `O herói ${name} do tipo ${vocacao} atacou usando shuriken!`
    } else if (vocacao === 'guerreiro') {
        document.querySelector('#resultado').innerHTML = `O herói ${name} do tipo ${vocacao} atacou usando sua espada!`
    } else {
        document.querySelector('#resultado').innerHTML = `Para saber seu ataque, preencha os dados corretamente!`
    }

}