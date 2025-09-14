$(document).ready(function() {
  // .text
  $('#mudarTexto').on('click', function() {
    $('#titulo').text('Novo titulo');
  }); 

  // .html
  $('#adicionarItem').on('click', function() {
    $('.container').html(`<p>Novo paragrafo</p>`);
  });

  $('#removerItem').on('click', function() {
    $('.container').html('');
  })

  // .removeClass, .addClass e .toggleClass
  $('#mudarCor').on('click', function() {
    $('#titulo').removeClass("green").addClass("red")
    $('#paragrafo').toggleClass("green")
  });

  $('#mudarCor').on('dblclick', function() {
    $("#titulo").removeClass("red").addClass('green');
  });

  // .val e .attr
  $('#mostraMensagem').on('click', function() {
    alert(`${$('#campoTexto').val()}`);
    $('#campoTexto').attr('placeholder', 'Mudou o placeholder');
  });

  // .removeAttr
  $('#removePlaceholder').on('click',function() {
    $('#campoTexto').removeAttr('placeholder');
  });

  // .append
  $('#addLista').on('click', function() {
    $('#lista').append("<li>mais um item</li>");
  });

  // .prepend 
  $('#addInicio').on('click', function() {
    $('#lista').prepend("<li>item no inicio da lista</li>");
  });

  // .remove
  $('#removeLista').on('click', function() {
    $('#lista li:last').remove()
  })

  // .after
  $('#addLinha').on('click', function() {
    $('li').after('<hr></hr>');
  });

  // .before
  $('#addEspaco').on('click', function() {
    $('li').before('<br></br>');
  });

})
