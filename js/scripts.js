$('#article-selection').on('change', function(){
  
    $('#stories').empty();
  
    var selectVal = $('#article-selection').val();
  
    var url = 'https://api.nytimes.com/svc/topstories/v2/' + selectVal + '.json';
    url += '?' + $.param({
      'api-key': "80315f98187c49169c887403d2c3f766"
    });
   
    $.ajax({url: url,method: 'GET', 
  }).done(function (data) {

    console.log(data);

      var articlesArray = data.results;

      if(articlesArray.lenth !== 0){
        
        var title

        $.each(articlesArray, function(index, value){


          console.log('stories', index, value.title);
          var title1 = value.title
          title += '<h2 class="' + title1 + '">' + title1 + '</h2>'     
        
        });
        $('#stories').append(title);

      } else {

      }


  // $('#stories').append('<li>' + data.results[5].title + '</li>');

    }).fail(function (err) {
  
      throw err;
  
    });
  });
