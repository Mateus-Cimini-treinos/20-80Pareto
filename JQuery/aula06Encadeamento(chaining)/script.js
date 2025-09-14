$(function() {
  $('#executar').on('click', function() {
    $('#caixa')
      .show(1000)
      .css('background-color', 'tomato')
      .css({width: '200px', height: '200px'})
      .text('Pronto')
  })
})
