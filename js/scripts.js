$('.selectopt').on('change', function(){
  
    $('.stories').empty();
    $('.loading').show();
  
    var selectVal = $('.selectopt').val();
  
    var url = 'https://api.nytimes.com/svc/topstories/v2/' + selectVal + '.json';
    url += '?' + $.param({
      'api-key': "80315f98187c49169c887403d2c3f766"
    });
   
    $.ajax({url: url,method: 'GET', 
  }).done(function (data) {
    
    data.results.filter(function (item) {
              if (item.multimedia.length !== 0) {
                return item;
              }
            }).splice(0, 12).forEach(function (item) {
              var title = item.abstract;
              var image = item.multimedia[item.multimedia.length - 1].url;
              var url = item.url;
              $('.stories').append('<a class="images" style="background-image: url(' + image + ')" href="' + url + '"' + '>' + '<div class="selectopt">' + title + '</div></a>');
     
      })

    }).fail(function (err) {
      throw err;
   
    }).always(function () {
      $('.loading').hide();
  
    });
  });
