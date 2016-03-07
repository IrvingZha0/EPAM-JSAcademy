$('#search').keyup(function(){

var url = "http://192.168.1.107:8080/search"+$this.val();
    $.ajax({
    method: "GET",
    url: url,
    success: function(data) {
      console.log(data);
    }
  });
});