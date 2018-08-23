var v, d, t, variavel;
function calcular(){
	    v=document.getElementById('val1').value;
		d=document.getElementById('val2').value;
		t=document.getElementById('val3').value;
	if(checkVazio(v)==true&&checkVazio(d)==true&&checkVazio(t)==false||checkVazio(v)==true&&checkVazio(d)==false&&checkVazio(t)==true||checkVazio(v)==false&&checkVazio(d)==true&&checkVazio(t)==true){
		calculos();
		print();
		document.getElementById("inform").innerHTML="Calculo realizado com sucesso"
    }else{
    	document.getElementById("inform").innerHTML="Digite dois campos pelo menos"
    }
}
function checkVazio(variavel){
	var vazio="", check=false;
	var letras=["0","1","2","3","4","5","6","7","8","9","."];
	for(var i=0; i<variavel.length; i++){
		vazio=vazio+" ";
		for(var x=0; x<letras.length; x++){
			if(variavel[i]==letras[x]){
				check=true;
			}
		}
	}
			
	if(vazio!=variavel&&check==true){
		return true;
	}else{
		return false;
	}
}
function calculos(){
	v=document.getElementById('val1').value;
	d=document.getElementById('val2').value;
	t=document.getElementById('val3').value;
	if(checkVazio(v)==true&&checkVazio(d)==true){
		t=d/v;
	}
	if(checkVazio(d)==true&&checkVazio(t)==true){
		v=d/t;
	}
	if(checkVazio(v)==true&&checkVazio(t)==true){
		d=v*t;
	}
}	
function print(){
	document.getElementById("val1").value=v;
	document.getElementById("val2").value=d;
	document.getElementById("val3").value=t;
}	
function replayy(){
	document.getElementById("val1").value="";
	document.getElementById("val2").value="";
	document.getElementById("val3").value="";
		location.reload(); 
}