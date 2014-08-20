$(document).ready(function() {

	//Click Add Store button\\
	$('#store-input').on('click', 'button', function(){

		//Hide Add Store Form\\
		$(this).closest('#store-input').css('display','none');

		//Add store name to title\\
		var storeName = $("#store-field").val();
		$('.store').text(storeName)
		
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
		var itemText = $('#list-item input').val();

		//Sets values to li
		item.text(itemText);

		//Adds it to list
		$(".shopping-list ul.list").append(item);
	});

$('#list-item input').keyup(function(event){
		if(event.keyCode == 13) {
			event.preventDefault();
			$('#item-add').click();
		};
	});	

});