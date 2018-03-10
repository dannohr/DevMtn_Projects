$(document).ready(function() {

    $('.box').on('click', function() {
        $(this).addClass('white');
      })

      $('.box').on('dblclick', function() {
        $(this).removeClass('white');
      })

      $('#reset').on('click', function() {
        $('.box').removeClass('white')
      })


      var color = 'white'


      $('#red').on('click', function() {
        color = 'red';
      })
    
      $('#blue').on('click', function() {
        color = 'blue';
      })
    
      $('#green').on('click', function() {
        color = 'green';
      })
    
      $('#yellow').on('click', function() {
        color = 'yellow';
      })
    
      $('#white').on('click', function() {
        color = 'white';
      })

      //added my own color
      $('#purple').on('click', function() {
        color = 'purple';
      })




      $('.box').on('click', function() {
        $(this).addClass(color);
      })
    
      $('.box').on('dblclick', function() {
        $(this).removeClass(color);
      })
    
      $('#reset').on('click', function() {
        $('.box').removeClass(color)
      })


      var colors = 'white green red blue yellow purple'
      
        $('.box').on('dblclick', function() {
          $(this).removeClass(colors);
        })
      
        $('#reset').on('click', function() {
          $('.box').removeClass(colors)
        })


    })