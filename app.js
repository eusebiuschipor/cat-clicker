'use strict';

(function() {

	var model = {
		currentCat: 0,
		cats: [
			{
				name: 'cat1',
				picture: 'cat_picture1.jpg',
				clicks: 0
			},
			{
				name: 'cat2',
				picture: 'cat_picture2.jpeg',
				clicks: 0
			},
			{
				name: 'cat3',
				picture: 'cat_picture3.jpeg',
				clicks: 0
			},
			{
				name: 'cat4',
				picture: 'cat_picture4.jpeg',
				clicks: 0
			},
			{
				name: 'cat5',
				picture: 'cat_picture5.jpeg',
				clicks: 0
			},
		]
	};

	var controller = {
		init: function() {
			catListView.init();
			catView.init();
		},
		getAllCats: function() {
			return model.cats;
		},
		setCurrentCat: function(id) {
			model.currentCat = id;
			catView.render();
		},
		getCat: function(id) {
			return model.cats[id];
		},
		getCurrentCatId: function() {
			return model.currentCat;
		},
		incrementClicks: function(id) {
			model.cats[id].clicks++;
		},
		saveCat: function(name, picture, clicks) {
			model.cats[model.currentCat].name = name;
			model.cats[model.currentCat].picture = picture;
			model.cats[model.currentCat].clicks = clicks;
		}
	};

	var catListView = {
		init: function() {
			this.cats = controller.getAllCats();
			catListView.render();

			$('.cats-list > *').click(function() {
				controller.setCurrentCat($(this).attr('id'));
			});
		},
		render: function() {
			$('.cats-list').html('');

			for (var i = 0; i < this.cats.length; i++) {
				$('.cats-list').append('<img id="' + i + '" src="' + this.cats[i].picture + '" style="float: left; max-height:100px;" />');
			}
		}
	};

	var catView = {
		init: function() {
			this.render();

			$('.selected-cat .picture').click(function() {
				controller.incrementClicks(controller.getCurrentCatId());
				catView.render();
			});

			$('#admin-button').click(function() {
				$('#admin').css('display', 'block');
				$('input[name="name"]').val(controller.getCat(controller.getCurrentCatId()).name);
				$('input[name="picture"]').val(controller.getCat(controller.getCurrentCatId()).picture);
				$('input[name="clicks"]').val(controller.getCat(controller.getCurrentCatId()).clicks);
			});

			$('#save').click(function() {
				controller.saveCat($('input[name="name"]').val(), $('input[name="picture"]').val(), $('input[name="clicks"]').val());
				catView.render();
				catListView.init();
			});

			$('#cancel').click(function() {
				catView.hideAdmin();
			});
		},
		render: function() {
			catView.hideAdmin();
			$('.selected-cat .name').text(controller.getCat(controller.getCurrentCatId()).name);
			$('.selected-cat .picture').html('<img src="' + controller.getCat(controller.getCurrentCatId()).picture + '" style="float: left; max-height:100px;" />');
			$('.selected-cat .clicks').text(controller.getCat(controller.getCurrentCatId()).clicks);
		},
		hideAdmin: function() {
			$('#admin').css('display', 'none');
		}
	};

	controller.init();

})();
