$(function(){
  // .show()
  $('#mostrar').on('click', function(){
    $('#caixa').show(1000);
  });

  // .hide()
  $('#esconder').on('click', function(){
    $('#caixa').hide(1000);
  });

  // .toggle()
  $('#alternar').on('click', function() {
    $('#caixa').toggle(1000)
  })

  // .fadeIn()
  $('#fadeIn').on('click', function() {
    $('#caixa').fadeIn(1000);
  });

  // .fadeOut()
  $('#fadeOut').on('click', function() {
    $('#caixa').fadeOut(1000);
  });

  // .slideDown()
  $('#slideDown').on('click', function() {
    $('#caixa').slideDown(1000);
  });

  // .slideUp()
  $("#slideUp").on("click", function() {
    $('#caixa').slideUp(1000);
  });

  // .animate()
  $("#animar").on("click", function() {
    $('#caixa').animate({width: '300px', height: '400px', opacity: '0.5'})
  })
})
