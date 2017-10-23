$('#article-selection').on('change', function(){
  
    $('#stories').empty();
    $('.loading').show();
  
    var selectVal = $('#article-selection').val();
  
    var url = 'https://api.nytimes.com/svc/topstories/v2/' + selectVal + '.json';
    url += '?' + $.param({
      'api-key': "80315f98187c49169c887403d2c3f766"
    });
   
    $.ajax({url: url,method: 'GET', 
  }).done(function (data) {

    console.log(data);

      var articlesArray = data.results;

      if(articlesArray.length !== 0){
        
        var title

        $.each(articlesArray, function(index, value){

          console.log('stories', index, value.title);
          var title1 = value.title
          title += '<h2 class="' + title1 + '">' + title1 + '</h2>';
          title += '<img src=' + value.multimedia[2].url + '>'; 

          // var articlesArray = data.results.filter(function(item,index){
          //   return item.multimedia.length;
          // }).slice(0, 12).forEach(function (item) {
          //   $('#stories').append(

          
          // });
    
          

      
        });
        $('#stories').append(title);

      } else {


      }


    }).fail(function (err) {
      throw err;
    }).always(function () {
      $('.loading').hide();
  
    });
  });
