$(function(){
  $('.course-description').hide();

  $('.course-title').click(function(){
    $(this).next().slideToggle({duration: 300});
  });
});
