$('#canvas_picker').click(function(event){
                  var x = event.pageX - $(this).offset().left;
                  var y = event.pageY - $(this).offset().top;
                  var img_data = context.getImageData(x,y , 1, 1).data;
                  var R = img_data[0];
                  var G = img_data[1];
                  var B = img_data[2]; 
                  var rgb = R + ',' + G + ',' + B ;
                  var hex = rgbToHex(R,G,B);
                  $('#rgb input').val( rgb );
                  $('#hex input').val('#' + hex);
                  $picked.append("<span data-value='#"+hex+"' class='span-value-copy' contenteditable='true' style='background:#"+hex+"'>#"+hex+"</span>");

                    function copyTextToClipboard(text) {
                      var textArea = document.createElement("textarea");
                      textArea.value = text;
                      document.body.appendChild(textArea);
                      textArea.select();
                      document.execCommand('copy');
                      document.body.removeChild(textArea);
                    }

                    var copyBobBtn = document.querySelector('.span-value-copy');

                    copyBobBtn.addEventListener('click', function() {
                      var currentHex =  $(this).data('value');
                      copyTextToClipboard(currentHex);
                    });

                });
