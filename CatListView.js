'use strict';

var catListView = {
  init: function() {
    this.cats = CatClickerController.getAllCats();
    catListView.render();

    $('.cats-list > *').click(function() {
      CatClickerController.setCurrentCat($(this).attr('id'));
    });
  },
  render: function() {
    $('.cats-list').html('');

    for (var i = 0; i < this.cats.length; i++) {
      $('.cats-list').append('<img id="' + i + '" src="' + this.cats[i].picture + '" style="float: left; max-height:100px;" />');
    }
  }
};
