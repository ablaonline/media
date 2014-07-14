
$(document).ready(function(){

	$("#listaSeleccionaSubCategoria").bind("change", function(){
		var id = $(this).val();

        var form    = $('<form action="/items_bb" method="post" target="_self">' +
          '<input type="text" name="filter" value="'+id+'" />' +
          '</form>');

        $('body').append(form);

        $(form).submit();  		

	});


});