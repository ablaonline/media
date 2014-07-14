
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

function activarFuncionesComentar(item){
	$(".botonComentariosItemsAzul").addClass("botonComentariosItemsGris");
	$(".botonComentariosItemsGris").removeClass("botonComentariosItemsAzul");
  	item.prev().find("#contenedorBotonComentariosItems").removeClass("botonComentariosItemsGris");
	item.prev().find("#contenedorBotonComentariosItems").addClass("botonComentariosItemsAzul");
}


$(document).ready(function(){    
   var arregloCanciones = $("#listadoAudios").val();    
   if(arregloCanciones != ""){
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
   

   
   
        
});



