$('#submit').on('click', function(){
  event.preventDefault();
  // debugger;
  var data = {
  username: $("username").val(),
  title: $("#title").val(),
  image: $("#image").val(),
  url: $("#url").val()
  }

  $.ajax({
  method: "POST",
  url: "http://192.168.1.107:8080/articles",
  data: data
})
.done(function( msg ) {
    alert( "Data Saved: " + msg );
  });
})
