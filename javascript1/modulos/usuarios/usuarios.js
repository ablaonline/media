/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


function validarFormaEditarUsuario(){   

       $("#formaEditarUsuario").validate({
        
        invalidHandler: function(form, validator) {
            var errors = validator.numberOfInvalids();
            if (errors) {
                var invalidPanels = $(validator.invalidElements()).closest(".ui-tabs-panel", form);
                if (invalidPanels.size() > 0) {
                    $.each($.unique(invalidPanels.get()), function(){
                        $(this).siblings(".ui-tabs-nav")
                        .find("a[href='#" + this.id + "']").parent().not(".ui-tabs-selected")
                        .addClass("ui-state-error")
                        .show("pulsate",{
                            times: 3
                        });
                        
                        $(this).siblings(".ui-tabs-nav")
                        .find("a[href='#" + this.id + "']").parent().not(".ui-tabs-selected")
                        .find("a").trigger("click");
                        
                    });
                }
            }
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).removeClass(errorClass);
            $(element.form).find("label[for=" + element.id + "]").removeClass(errorClass);
            var $panel = $(element).closest(".ui-tabs-panel", element.form);
            if ($panel.size() > 0) {
                if ($panel.find("." + errorClass + ":visible").size() == 0) {
                    $panel.siblings(".ui-tabs-nav").find("a[href='#" + $panel[0].id + "']")
                    .parent().removeClass("ui-state-error");
                }
            }
        },  
        rules:{
            'datos[nombre]':{
                required: true

            },'datos[apellidos]':{
                required: true                                     

            },'datos[sobrenombre]':{
                required: true

            },'datos[fechaNacimiento]':{
                required: true                                     

            },'datos[id_ciudad_residencia]':{
                required: true                                     

            },'datos[correo]':{
                required: true,
                email: true

            },'datos[contrasena2]':{
                equalTo: '#contrasena1'                                     

            } 
        },
         messages: {
             'datos[nombre]':{
                required: "Please enter your name"

             },'datos[apellidos]':{
                required: "Please enter your lastname"

             },'datos[sobrenombre]':{
                required: "Please enter your nickname"

             },'datos[fechaNacimiento]':{
                required: "Please select your birthday"                                     

            },'datos[id_ciudad_residencia]':{
                required: "Please select your city of residence"                                     

            },'datos[correo]':{
                required: "Please introduce your email",
                email:    "Please enter a valid email address"

            }
           
         }

    });
    
    
}

 
function eliminarAudio(idAudio){    $("#indicadorEspera").css("display","block");
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
   if(arregloCanciones != ""){
        var arreglo = arregloCanciones.split("|");    
        var cadena = new Array();

        $.each(arreglo, function(id, titulo){        
            var datos  = new Array();
            var arreglo2 = titulo.split("�");
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

function activarFuncionesComentar(item){
    $(".botonComentariosItemsAzul").addClass("botonComentariosItemsGris");
    $(".botonComentariosItemsGris").removeClass("botonComentariosItemsAzul");
    item.prev().find("#contenedorBotonComentariosItems").removeClass("botonComentariosItemsGris");
    item.prev().find("#contenedorBotonComentariosItems").addClass("botonComentariosItemsAzul");
}