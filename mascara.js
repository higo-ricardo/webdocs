/**
 * @desc	Mascasras para ser usadas em inputs
 * 
 * @example <input type="text" onkeypress="mascara(this,cpf)"> 
 * NOTE: 	http://elcio.com.br/ajax/mascara/
 * */


function mascara(o,f){
    v_obj=o;
    v_fun=f;
    setTimeout("execmascara()",1);
   // return true;
}

function execmascara(){
    v_obj.value=v_fun(v_obj.value);
}

function soNumeros(v){
    return v.replace(/\D/g,"");
}

function cpfMask(v){
    v=v.replace(/\D/g,"");                 //Remove tudo o que não é dígito
    v=v.replace(/(\d{3})(\d)/,"$1.$2");       //Coloca um ponto entre o terceiro e o quarto dígitos
    v=v.replace(/(\d{3})(\d)/,"$1.$2");       //Coloca um ponto entre o terceiro e o quarto dígitos
                                             //de novo (para o segundo bloco de números)
    v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2"); //Coloca um hífen entre o terceiro e o quarto dígitos
    return v;
}

function decimal(v){
	v=v.replace(/\D/g,"");
	v=v.replace(/(\d{1,2})(\d{2})/,"$1,$2");
    return v;
}

function pesoMask(v){
	//v=v.replace(/\D/g,"");
	//v=v.replace(/(\d{1,2,3})(\d{2})/,"$1,$2");
    return v;
}

function soDezMask(v){
	v=v.replace(/\D/g,"");
	if(v > 10) {  v=v.replace(/(\d{1})(\d)/,"$1"); }
	
    return v;
}

function dataMask(v){
	v=v.replace(/\D/g,"");
	v=v.replace(/(\d{2})(\d)/,"$1/$2");    //Coloca barra entre o 2 e 3 primeiro bloco
	v=v.replace(/(\d{2})(\d)/,"$1/$2");    //Coloca barra entre o 2 e 3	 segundo bloco
    return v;
}

function cepMask(v){
    v=v.replace(/D/g,"");                //Remove tudo o que não é dígito
    v=v.replace(/^(\d{5})(\d)/,"$1-$2"); //Esse é tão fácil que não merece explicações
    return v;
}

function cnpjMask(v){
    v=v.replace(/\D/g,"");                           //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/,"$1.$2");             //Coloca ponto entre o segundo e o terceiro dígitos
    v=v.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3"); //Coloca ponto entre o quinto e o sexto dígitos
    v=v.replace(/\.(\d{3})(\d)/,".$1/$2");           //Coloca uma barra entre o oitavo e o nono dígitos
    v=v.replace(/(\d{4})(\d)/,"$1-$2");              //Coloca um hífen depois do bloco de quatro dígitos
    return v;
}