$('#article-selection').on('change', function(){
  
    $('#stories').empty();
  
    var selectVal = $('#article-selection').val();
  
    var url = "https://api.nytimes.com/svc/topstories/v2/" + selectVal + ".json";
    url += '?' + $.param({
      'api-key': "80315f98187c49169c887403d2c3f766"
    });
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function (data) {
  
      console.log(data.results);
  
      $.each(data.results, function(index, object){
        console.log(object.title);
  
        $('#stories').append(object.title);
  
      });
  
    }).fail(function (err) {
  
      throw err;
  
    });
  
    
  });