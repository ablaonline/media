/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


function validarFormaEvento(){ //funcion para validar el formulario para registrar o modificar eventos


       $("#formaEvento").validate({
        
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
            'datos[titulo]':{
                required: true

            },'datos[resumen]':{
                required: true                                     

            },'datos[ciudad]':{
                required: true                                     

            },'datos[centro]':{
                required: true                                     

            },'datos[lugar]':{
                required: true

            },'datos[fecha_inicio]':{
                required: true                                    

            },'datos[hora_inicio]':{
                required: true                                    

            },'datos[fecha_fin]':{
                required: true                                    

            },'datos[hora_fin]':{
                required: true                                    

            }  
        },
         messages: {
             'datos[titulo]':{
                required: "Please enter the title"

             },'datos[resumen]':{
                required: "Please enter the short description"

             },'datos[ciudad]':{
                required: "Please enter the city"

             },'datos[centro]':{
                required: "Please enter the center"                                     

            },'datos[lugar]':{
                required: "Please enter the place"                                     

            },'datos[fecha_inicio]':{
                required: "Please enter the starting date"

            },'datos[hora_inicio]':{
                required: "Please enter the starting hour"

            },'datos[fecha_fin]':{
                required: "Please enter the ending date"

            },'datos[hora_fin]':{
                required: "Please enter the ending hour"

            }
           
         }

    });
    
    
}


$(document).ready(function(){
        // Load the classic theme
        var galerias = $("#contenedorGalerias");
        
        if(galerias.length > 0){
            
            Galleria.loadTheme('http://media.ablaonline.org/javascript1/galeria/galleria.classic.min.js');    
            Galleria.run('.contenedorGaleria');
            Galleria.configure({
            transition: 'fadeslide',
            imageCrop: false,
            showInfo: true,
            lightbox: true,
            trueFullscreen: true
            });
            
        }
        
        
        

    //Calendario
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
		
    $('#eventsCalendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        editable: true,
        events: '/ajax/home/cargarFechasEventos'
    });        
    
    
    
    setTimeout(function(){
        $("#eventsCalendar").fadeIn("slow");
        $("#eventsCalendar").fullCalendar("render");
        
    }, 1000);
    
        
        
});



    
