$(document).ready(function() {

	//Click Add Store button\\
	$('#store-input').on('click', 'button', function(){

		//Hide Add Store Form\\
		$(this).closest('#store-input').css('display','none');

		//Add store name to title\\
		var storeName = $("#store-field").val();
		$('.store').text(storeName +' List')
		.hide().slideDown(300);
		
		//Show Add Item Form\\
		$('#list-item').slideDown(800);

		//Show Shopping List
		$('.shopping-list').slideDown(800);
	});

$('#store-input').keyup(function(event){
		if(event.keyCode == 13) {
			event.preventDefault();
			$('#store-add').click();
		};
	});	

//Add items to shopping list\\
	$('#item-add').on('click', function(){
		
		//Get to Pass
		var item = $('<li></li>');
		var image = $('<img class="delete" src="images/delete.png">');
		var itemText = $('#list-item input').val();

		//Sets values to li
		item.text(itemText);

		//Adds it to list
		$(item).appendTo(".shopping-list ul.list")
		.hide().slideDown(300);		

		$(image).appendTo(item)

		//Clears item from form
		$('#list-item input').val('');
	
	});

$('#list-item input').keyup(function(event){
		if(event.keyCode == 13) {
			event.preventDefault();
			$('#item-add').click();
		};
	});

//Check off items
		$('.list').on('click', 'li', function(){
			$(this).toggleClass('strike');
	});

//Delete Items
		$('.list').on('click', '.delete', function(){
			$(this).parent().fadeOut(500);
	});
});