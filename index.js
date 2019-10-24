$(document).ready(function(){
    //alert('dksaodksadksa')
    var quantidadeSticker = $('#quantidadeSticker').val()
    quantidadeSticker = parseInt(quantidadeSticker)

    //botão que incrementa o valor do input "id = quantidadeSticker"
    $('#botaoMais').click(function(){
        quantidadeSticker++
        $('#quantidadeSticker').val(quantidadeSticker)
    })

    //botão que decrementa o valor do input "id = quantidadeSticker"
    $('#botaoMenos').click(function(){
        quantidadeSticker--
        if(quantidadeSticker < 0){quantidadeSticker = 0}        
        $('#quantidadeSticker').val(quantidadeSticker)
    })


    /*
        Validar Formulário, válida se todos os checkbox estão selecionados,
        se o valor de quantos sticker está zerado ou  campo observação em branco.
    */
    $('#enviarDados').click(function(){
        if($('#stickerReact').is(":checked") || $('#stickerVue').is(":checked") || $('#stickerAngular').is(":checked")){
           console.log('OK1')
            $('#exibirMSG').html('Formulário enviado com Sucesso!')
        }
        if($('#blocoMSG').val() != '' || quantidadeSticker > 0){
           console.log('OK2')
            $('#exibirMSG').html('Formulário enviado com Sucesso!')
        }else{
            $('#exibirMSG').html('Preencher Formulario!')
        }
    })
})
