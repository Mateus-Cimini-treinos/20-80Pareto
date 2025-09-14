$(function() {
  // selecionando com id
  $('#botao1').click(function() {
    alert(`Opa clicou`)
  });

  // selecionando com classe
  $('.mensagem').hover(function() {
    $(this).css("color", "red");
  },
    function() {
      $(this).css("color", "black");
    }
  );

  // selecionando com tag
  $("input").click(function() {
    $(this).attr("placeholder", "voce clicou agora escreve")
  });

  // selecionando combinando e hierarquicos
  $('ul li').click(function() {
    $(this).text("alterou o texto")
  });

  // selecionando somente um elemento entre varios com mesmo seletor
  $('ul li').eq(1).click(function() {
    $(this).text("esse é especial")
  })



});
