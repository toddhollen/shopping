$(document).ready(function() {

	//Click Add Store button\\
	$('#store-input').on('click', 'button', function(){

		//Hide Add Store Form\\
		$(this).closest('#store-input').css('display','none');

		//Add Store name entered to title\\
		
		
		//Show Add Item Form\\
		$('#list-item').slideDown(800);

		//Show Shopping List
		$('.shopping-list').slideDown(800);


	});


//Add items to shopping list\\
	$('#item-add').on('click', function(){
		alert('item-add clicked');
		//add item to .list\\

	});


});