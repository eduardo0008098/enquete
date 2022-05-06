let sim = 0;
let nao = 0;
function aumentar(time) {
	if (time == 'sim') {
		sim += 1;
		document.getElementById('rst1').style.width = (sim*10)+'px';
        document.getElementById('rst1').innerHTML = sim;
	}else if(time == 'nao'){
       nao += 1;
		document.getElementById('rst2').style.width = (nao*10)+'px';
        document.getElementById('rst2').innerHTML = nao;
	}
}