 $(document).ready(function(){
        corporateData();
         $('#play-pause').click(cambiarClasepp);
          $('#video').click(cambiarClasepp);
           $('#mute').click(cambiarClasem);

         function cambiarClasepp(){

        if($('#play-pause').html()== "play_arrow"){
             $('#play-pause').html("pause");

           }
           else{
            $('#play-pause').html("play_arrow");
           }
         }
        // var cambio= $('#play-pause').attr('class','icon-controller-paus');
          function cambiarClasem(){

        if($('#mute').html()== "volume_up"){
             $('#mute').html('volume_off');

           }
           else{
             $('#mute').html('volume_up');

           }
         }

       });

 function corporateData(){
            $.ajax({
                url: "http://localhost:8080/mireproductor/subt/word/document.xml",
                dataType: "xml",
                success: function(data) {

                 $("#transcripcion").val("");

                    $(data).find("w:document").each(function(){
                        var info = $(this).find("w:t").text();
                        $("#transcripcion").val(info);
                    })
                }
            });
        }
