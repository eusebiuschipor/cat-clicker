'use strict';

var CatClickerController = {
  init: function() {
    catListView.init();
    catView.init();
  },
  getAllCats: function() {
    return CatClickerModel.cats;
  },
  setCurrentCat: function(id) {
    CatClickerModel.currentCat = id;
    catView.render();
  },
  getCat: function(id) {
    return CatClickerModel.cats[id];
  },
  getCurrentCatId: function() {
    return CatClickerModel.currentCat;
  },
  incrementClicks: function(id) {
    CatClickerModel.cats[id].clicks++;
  },
  saveCat: function(name, picture, clicks) {
    CatClickerModel.cats[CatClickerModel.currentCat].name = name;
    CatClickerModel.cats[CatClickerModel.currentCat].picture = picture;
    CatClickerModel.cats[CatClickerModel.currentCat].clicks = clicks;
  }
};
