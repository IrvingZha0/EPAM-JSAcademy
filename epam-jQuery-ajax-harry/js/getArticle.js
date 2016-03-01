$.ajax({
  url: "http://192.168.1.107:8080/articles"
}).done(function(data){
  // console.log(data);
  $.each(data, function(i, value){

     var image = value.image;
     var title = value.title;
     var date = value.date;
     var url = value.url;

     var myDate = new Date(date);
     var imageTag = '<div>'+'<img src="'+image+'">'+'</div>';
     var titleTag = '<h4>' + title + '</h4>';
     // var dateTag = '<div>'+ date + '</div>';
     var dateTag = '<div>'+ myDate.getDate() + '-' + (myDate.getMonth()+1) + '-' + myDate.getFullYear() + '</div>';
     var urlTag = '<a href="'+url+'"></a>';
     $("#articles .article-"+i).append(imageTag);
     $("#articles .article-"+i).append(titleTag);
     $("#articles .article-"+i).append(dateTag);
     $("#articles .article-"+i).wrapAll(urlTag);
  });
});