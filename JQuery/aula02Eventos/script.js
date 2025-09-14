$(function() {
  // click
  $('#botao1').on('click', function() {
    alert(`Opa clicou`)
  });

  // mouseenter
  $('#mensagem').on('mouseenter',  function() {
    $(this).css("color", "red");
  });

  // mouseleave
  $('#mensagem').on('mouseleave', function() {
      $(this).css("color", "black");
  });

  $('#caixa1').on('dblclick', function() {
    $(this).text('deu 2 clique aqui')
  })


});
