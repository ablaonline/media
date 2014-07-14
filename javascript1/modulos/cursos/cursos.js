
function eliminarAudio(idAudio){
    // alert(idAudio);
    $("#indicadorEspera").css("display","block");
    destino= "/ajax/audios/deleteAudio";
    $.ajax({
        type:"POST",
        url:destino,
        data: "id="+idAudio,
        dataType:"json",
        success:procesaRespuesta
    });  
}

$(document).ready(function(){    
    var arregloCanciones = $("#listadoAudios").val();

    if(arregloCanciones !== undefined){
        var arreglo = arregloCanciones.split("|");    
        var cadena = new Array();

        $.each(arreglo, function(id, titulo){        
            var datos  = new Array();
            var arreglo2 = titulo.split("¬");
            datos ['mp3']   = arreglo2[0];
            datos ['title'] = arreglo2[2]+"~"+arreglo2[1]+"~"+arreglo2[3]+"~"+arreglo2[4]+"~"+arreglo2[5];       
            cadena.push(datos);  
        });
        // console.log(cadena);
        new jPlayerPlaylist({
            jPlayer: "#jquery_jplayer_1",
            cssSelectorAncestor: "#jp_container_1"
        },
        cadena
        , {
            playlistOptions: {
                enableRemoveControls: true
            },
            swfPath: "/media",
            solution: "flash, html",
            supplied: "oga, mp3",
            wmode: "window"
        });

    }
   
    // Load the classic theme
    var galerias = $("#contenedorGalerias");
        
    if(galerias.length > 0){
            
        Galleria.loadTheme('/media/javascript1/galeria/galleria.classic.min.js');    
        Galleria.run('.contenedorGaleria');
        Galleria.configure({
            transition: 'fadeslide',
            imageCrop: false,
            showInfo: true,
            lightbox: true,
            trueFullscreen: true
        });
            
    }


    //funciones para ocultar y mostrar los campos o de archivo, o el campo de texto para la url del video en actividades
    $("#rbtnOtroArchivo").live("click", function(){
        $("#campoVideoRecurso1").slideUp("fast", function(){
            $("#campoArchivoRecurso1").slideDown("fast");
        });
    });

    $("#rbtnVideo").live("click", function(){
        $("#campoArchivoRecurso1").slideUp("fast", function(){
            $("#campoVideoRecurso1").slideDown("fast");
        });
    });

    $("#rbtnOtroArchivo2").live("click", function(){
        $("#campoVideoRecurso2").slideUp("fast", function(){
            $("#campoArchivoRecurso2").slideDown("fast");
        });
    });

    $("#rbtnVideo2").live("click", function(){
        $("#campoArchivoRecurso2").slideUp("fast", function(){
            $("#campoVideoRecurso2").slideDown("fast");
        });
    });



    $(".verActividad").live("click", function(){
        $("#indicadorEspera").css("display","block");
        destino = "/ajax/activities/see";
        var id = $(this).attr('idactividad');
        $.ajax({
            type:"POST",
            url:destino,
            data: "idActividad="+id,
            dataType:"json",
            success: procesaRespuesta
        });                                    
        return false;
    });
    
    
    
    /**
     * Funcion que se encarga de llamar al metodo listar respuesta si se hace click en el enlace
     * que muestra lña cantidad de respuestas
     */
    $("#enlaceCantidadRespuestas").live("click", function(){
        $("#indicadorEspera").css("display","block");

        destino = $(this).attr('ruta');

        var id = $(this).attr('id_actividad');

        $.ajax({
            type:"POST",
            url:destino,
            data: "id_actividad="+id,
            dataType:"json",
            success: procesaRespuesta
        });            

        return false;

    });
    
    
    /**
     * Funcion para consultar la calificacion por parte de un estudiante
     */
    $(".consultarCalificacion").live("click", function(){
        $("#indicadorEspera").css("display","block");
        destino = $(this).attr('ruta');
        var id = $(this).attr('idRespuesta');
        $.ajax({
            type:"POST",
            url:destino,
            data: "idRespuesta="+id,
            dataType:"json",
            success: procesaRespuesta
        });                                    
        return false;
    });
    
    
    $("#selectorTipoCalificacion").live("change", function(){
        var tipo =  $("#selectorTipoCalificacion").val();
        
        if(tipo == '1'){
            $(".explicacionCalificacion").fadeOut('fast');
            $("#explicacionCalificacion1").fadeIn('fast');

        } else if(tipo == '2'){
            $(".explicacionCalificacion").fadeOut('fast');
            $("#explicacionCalificacion2").fadeIn('fast');

           
        } else if(tipo == '3'){
            $(".explicacionCalificacion").fadeOut('fast');
            $("#explicacionCalificacion3").fadeIn('fast');

           
        }
        
    });
    
    
        $(".verRespuestaActividad").live("click", function(){
        $("#indicadorEspera").css("display","block");
        destino = "/ajax/activities/seeResponse";
        var id = $(this).attr('idRespuesta');
        $.ajax({
            type:"POST",
            url:destino,
            data: "idRespuesta="+id,
            dataType:"json",
            success: procesaRespuesta
        });                                    
        return false;
    });

});


function activarFuncionesComentar(item){
    $(".botonComentariosItemsAzul").addClass("botonComentariosItemsGris");
    $(".botonComentariosItemsGris").removeClass("botonComentariosItemsAzul");
    item.prev().find("#contenedorBotonComentariosItems").removeClass("botonComentariosItemsGris");
    item.prev().find("#contenedorBotonComentariosItems").addClass("botonComentariosItemsAzul");
}