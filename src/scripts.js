import "../src/sass/style.scss";

$('.select-section').on('change', () => {
  
    // $(function() {
    //   $('#article-selection').selectric();
    // });
  
    // $('large-logo-container').switchClass("large-logo-container", "small-logo-container", 1000, "easeOutQuad");
    // $('large-top-image').switchClass("large-top-image", "small-top-image", 1000, "easeOutQuad");  
  
    $('.stories').empty();
    $('.loading').show();
  
    const selectVal = $('.select-section').val();
  
    let url = `https://api.nytimes.com/svc/topstories/v2/${selectVal}.json`;
    url += `?${$.param({
    'api-key': "80315f98187c49169c887403d2c3f766"
  })}`;
  
    // if (selectVal === 'stories'){
    //   $('.loading').hide();  
    //   return true;
    // }
  
    $.ajax({
      url, method: 'GET',
    }).done(data => {
  
      data.results.filter(item => {
        if (item.multimedia.length !== 0) {
          return item;
        }
      }).splice(0, 12).forEach(item => {
        const title = item.abstract;
        const image = item.multimedia[item.multimedia.length - 1].url;
        const url = item.url;
        $('.stories').append(`<a class="images" style="background-image: url(${image})" href="${url}"><div class="select-section">${title}</div></a>`);
  
      })
      $('#loading').hide(); 
  
    }).fail(err => {
      throw err;
  
    }).always(() => {
      $('.loading').hide();
  
    });
  });
