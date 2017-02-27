$(function () {
	$(".date").change(
		function (e) {
			guardar("date" , $(this).val())
		})
	function guardar(key,value) {
		localStorage.setItem(key, value);
	}
	$(".note-input").change(
		function(e){
			guardar("item-" + $(this).attr("data-id"), $(this).val())
		})

	for (var i = 1; i <= $(".note-input").length; i++) {
		
		$(".note-input[data-id=" + i + "]").val(
			cargar("item-"+ i) 
			)
	}

	function cargar (key){
		localStorage.getItem(key)
		return key;
	}
});
