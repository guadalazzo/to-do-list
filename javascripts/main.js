$(function () {
	$(".date").change(
		function (e) {
			guardar("date" , $(this).val())
		})
	$(".date").val(
		cargar ("date")
		);
	function guardar(key,value) {
		localStorage.setItem(key, value);
	}
	$(".note-input").change(
		function(e){
			guardar("item-" + $(this).attr("data-id"), { 
				content:$(this).val(),
				checked:true}
				)
		})

	for (var i = 1; i <= $(".note-input").length; i++) {
		if (cargar("item-"+i)==null) {
			guardar("item-"+i,{content:"",
				checked:false})
		}
		$(".note-input[data-id=" + i + "]").val(
			cargar("item-"+ i).content
			)
	}

	function cargar (key){

		return localStorage.getItem(key);
	}
});