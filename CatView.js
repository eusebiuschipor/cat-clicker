'use strict';

var catView = {
  init: function() {
    this.render();

    $('.selected-cat .picture').click(function() {
      CatClickerController.incrementClicks(CatClickerController.getCurrentCatId());
      catView.render();
    });

    $('#admin-button').click(function() {
      $('#admin').css('display', 'block');
      $('input[name="name"]').val(CatClickerController.getCat(CatClickerController.getCurrentCatId()).name);
      $('input[name="picture"]').val(CatClickerController.getCat(CatClickerController.getCurrentCatId()).picture);
      $('input[name="clicks"]').val(CatClickerController.getCat(CatClickerController.getCurrentCatId()).clicks);
    });

    $('#save').click(function() {
      CatClickerController.saveCat($('input[name="name"]').val(), $('input[name="picture"]').val(), $('input[name="clicks"]').val());
      catView.render();
      catListView.init();
    });

    $('#cancel').click(function() {
      catView.hideAdmin();
    });
  },
  render: function() {
    catView.hideAdmin();
    $('.selected-cat .name').text(CatClickerController.getCat(CatClickerController.getCurrentCatId()).name);
    $('.selected-cat .picture').html('<img src="' + CatClickerController.getCat(CatClickerController.getCurrentCatId()).picture + '" style="float: left; max-height:100px;" />');
    $('.selected-cat .clicks').text(CatClickerController.getCat(CatClickerController.getCurrentCatId()).clicks);
  },
  hideAdmin: function() {
    $('#admin').css('display', 'none');
  }
};

CatClickerController.init();
