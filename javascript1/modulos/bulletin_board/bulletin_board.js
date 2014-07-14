
$(document).ready(function(){

	$('#listaSubcategorias').mixitup({
		targetSelector: '.mix',
	    filterSelector: '.filter',	
	});

	//$('#listaSubcategorias').sortable();

	config = {};
	config.grid = $( '#listaFiltros' );

	Grid.init(config);

	$(".contenedorListaCategorias").bind("mouseenter", function(){
		$(this).find(".tituloCategoria").css("margin-top", "-1px");

	}).bind("mouseleave", function(){
		$(this).find(".tituloCategoria").css("margin-top", "0px");
		
	});

	$(".subcategoria_bb").bind("click", function(){
		var id = $(this).data("id");

        var form    = $('<form action="/items_bb" method="post" target="_self">' +
          '<input type="text" name="filter" value="'+id+'" />' +
          '</form>');

        $('body').append(form);

        $(form).submit();  		

	});


});