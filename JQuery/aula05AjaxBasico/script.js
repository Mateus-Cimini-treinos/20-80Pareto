$(function() {

  // .load()
  $('#carregarHtml').on('click', function() {
    $('#resultado').load('conteudo.html');
  });

  // .getJSON()
  $('#getJson').on('click', function() {
    $.getJSON('dados.json', function(dados) {
      let conteudo = '<ul>';
        conteudo += `<li>${dados.nome} - ${dados.idade} anos e esta cursando: ${dados.curso}</li>`
      conteudo+= '</ul>';
    $('#resultado').html(conteudo);
    });
  });

  // .post()
  $("#enviarDados").on('click', function() {
    // Dados que vamos enviar
    const novosDados = { nome: 'Eduardo', idade: 43};
    
    // Simulando envio para processa.php
    $.post('processa.php', novosDados)
    .done(function(resposta) {
      // Aqui você mostra a resposta no #resultado
      $('#resultado').html(`resposta recebida: ${resposta}`);
    })
    .fail(function() {
      $('#resultado').html(`Erro em enviar os dados. pq n tem backend`);
    });
  });


})
