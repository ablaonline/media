/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 * 
 * 4 mayo salon 205 Lewis sahger, videobean equipo. 9 am listo a las 10 am. * 
 * 
 * 4 de mayo antes de las 11:30 am en la biblioteca Sergio Osejo.(No tengo que poner nada)
 * 
 * 4 de mayo, 3:30 biblioteca Hernando Escobar Mejia.
 * 
 * Sabado 5 de Mayo:
 * 
 * Salon 206 PC + Videobean con el profesor Sergio Mesa Padilla
 * 
 * Salon 206 Videobean + Pc Holben Raffan
 * 
 * 
 * Sabado 5 mayo 3:30 
 * 
 * 
 */


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
});
