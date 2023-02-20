function carregar() {

    function addZero(i) {
        if (i < 10) {i = "0" + i}
        return i;
      }

    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = addZero(data.getMinutes())
    var dia = data.getDate()
    var meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
    var mes = meses[data.getMonth()]
    var ano = data.getFullYear()
    var diasem = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
    var semana = diasem[data.getDay()]
    msg.innerHTML += `<p>agora são ${hora}:${minuto} Horas</p>`

    if (semana == 'Sábado' || semana == 'Domingo') {
        msg.innerHTML += `<p>Hoje é dia ${dia}, estamos em um ${semana}, do mês de ${mes} do ano de ${ano}</p>`
    }

    else{
        msg.innerHTML += `<p>Hoje é dia ${dia}, estamos em uma ${semana}, do mês de ${mes} do ano de ${ano}</p>`
    }

    if(hora >= 0 && hora < 12) {
        //BOM DIA
        foto.src = 'imagens/morning.jpg'
        document.body.style.background = '#e2cd9f'
    }

    else if (hora >= 12 && hora <18) {
        //BOA TARDE
        foto.src = 'imagens/afternoon.jpg'
        document.body.style.background = '#b9846f'
        

    }

    else{
        //BOA NOITE
        foto.src = 'imagens/night.jpg'
        document.body.style.background = '#515154'
    }

}




