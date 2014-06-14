(function(){
  $('form').addClass('json');
  var Form = {
    idform: $('form.json'),
    start: function(){
      $('input').on('click',this.popit);
    },
    popit: function(){
      Form.addClose();
      Form.idform.slideDown(300);
    },
    addClose: function(){
      $('<h4></h4>',{text:'(Close)',class: 'close'}).appendTo(Form.idform).on('click',function(){
        Form.idform.slideUp(300);
      });
    }
  };
  Form.start();
})();