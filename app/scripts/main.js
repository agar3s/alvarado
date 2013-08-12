$('#submit').on('click', function sendForm(){
  console.log("voy a enviar el fom");
  var name = $('#name').val();
  var telefono = $('#phone').val();
  var email = $('#email').val();
  var comentario = $('#comment').val();
  $.ajax({
    url: "https://docs.google.com/forms/d/1kQubYt_8_x4XXZqfxYmdP0jqXKXzLVs1T0uKeWc0pds/formResponse",
    data: { formkey: "1kQubYt_8_x4XXZqfxYmdP0jqXKXzLVs1T0uKeWc0pds",
            "entry.1294671675": name,
            "entry.822641919": telefono,
            "entry.572721681": email,
            "entry.1497264339": comentario},
    type: "POST",
    dataType: "xml",
    success: function(data, textStatus, XMLHttpRequest) {
      alert("Gracias por tu sugerencia, te contactaremos cuanto antes");
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
    },
  })
});