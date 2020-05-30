
// VARIÁVEL QUE ARMAZENA A DATA FUTURA
var countDownDate = new Date("Nov 27, 2020 00:00:00").getTime();
// VARIÁVEL QUE ATUALIZA O TIMER A CADA 1s
    var x = setInterval(function() {
// VARIÁVEL QUE RECEBE DATA E TEMPO ATUAIS
        var now = new Date().getTime();
            
// VARIÁVEL QUE O INTERVALO DE TEMPO RESTANTE
        var distance = countDownDate - now;
            
 //CALCULADORA DO TEMPO
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
          // RESULTADOS PARA INSERIR NA TAG H3"
        document.getElementById("dias").innerHTML = pad(days);
          document.getElementById("horas").innerHTML = pad(hours);
          document.getElementById("minutos").innerHTML = pad(minutes);
        document.getElementById("segundos").innerHTML = pad(seconds);
        
        document.getElementById("contador").innerHTML = days + "d" + hours + "h" + minutes + "m" + seconds + "s";

        function zero(n) {
            return (n < 10 ? '0' : '') + n;
          // If the count down is over, write some text 
        }
          if (distance < 0) {
            clearInterval(x);
            document.getElementById("dias").innerHTML = zero(days) + "EX";
              document.getElementById("horas").innerHTML = zero(hours) + "PI";
              document.getElementById("minutos").innerHTML = zero(minutes) + "RA";
            document.getElementById("segundos").innerHTML = zero(seconds) + "DO";
          }
        }, 1000);