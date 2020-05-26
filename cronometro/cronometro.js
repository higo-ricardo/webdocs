var tempo = new Number();
04
// Tempo em segundos
05
tempo = 300;
06
 
07
function startCountdown(){
08
 
09
    // Se o tempo não for zerado
10
    if((tempo - 1) >= 0){
11
 
12
        // Pega a parte inteira dos minutos
13
        var min = parseInt(tempo/60);
14
        // Calcula os segundos restantes
15
        var seg = tempo%60;
16
 
17
        // Formata o número menor que dez, ex: 08, 07, ...
18
        if(min < 10){
19
            min = "0"+min;
20
            min = min.substr(0, 2);
21
        }
22
        if(seg <=9){
23
            seg = "0"+seg;
24
        }
25
 
26
        // Cria a variável para formatar no estilo hora/cronômetro
27
        horaImprimivel = '00:' + min + ':' + seg;
28
        //JQuery pra setar o valor
29
        $("#sessao").html(horaImprimivel);
30
 
31
        // Define que a função será executada novamente em 1000ms = 1 segundo
32
        setTimeout('startCountdown()',1000);
33
 
34
        // diminui o tempo
35
        tempo--;
36
 
37
    // Quando o contador chegar a zero faz esta ação
38
    } else {
39
        window.open('../controllers/logout.php', '_self');
40
    }
41
 
42
}
43
 
44
// Chama a função ao carregar a tela
45
startCountdown();
46
 
