var nome, email, rg, cidade, cpf, cep, telefone, celular, linkedin, github;

function processaEtapa1() {
	nome = document.getElementById("nome").value;
	email = document.getElementById("email").value;
	if (nome.length > 2 && email.length > 2) {
		document.getElementById("etapa1").style.display = "none";
		document.getElementById("passo1").className = "";
		document.getElementById("etapa2").style.display = "block";
		document.getElementById("passo2").className = "ativo";
	} else {
		alert("Digite dados válidos.");
	}
}

function processaEtapa2() {
	rg = document.getElementById("rg").value;
	cidade = document.getElementById("cidade").value;
	cpf = document.getElementById("cpf").value;
	cep = document.getElementById("cep").value;
	if (rg.length > 2 && cidade.length > 2 && cpf.length > 2 && cep.length > 2) {
		document.getElementById("etapa2").style.display = "none";
		document.getElementById("passo2").className = "";
		document.getElementById("etapa3").style.display = "block";
		document.getElementById("passo3").className = "ativo";
	} else {
		alert("Digite dados válidos.")
	}
}

function processaEtapa3() {
	telefone = document.getElementById("telefone").value;
	celular = document.getElementById("celular").value;
	linkedin = document.getElementById("linkedin").value;
	github = document.getElementById("github").value;
	if (telefone.length > 2 && celular.length > 2 && linkedin.length > 2 && github.length > 2) {
		document.getElementById("etapa3").style.display = "none";
		document.getElementById("passo3").className = "";
		document.getElementById("etapa4").style.display = "block";
		document.getElementById("passo4").className = "ativo";
		document.getElementById("mostraNome").innerHTML = nome;
		document.getElementById("mostraEmail").innerHTML = email;
		document.getElementById("mostraRG").innerHTML = rg;
		document.getElementById("mostraCPF").innerHTML = cpf;
		document.getElementById("mostraCidade").innerHTML = cidade;
		document.getElementById("mostraCEP").innerHTML = cep;
		document.getElementById("mostraTelefone").innerHTML = telefone;
		document.getElementById("mostraCelular").innerHTML = celular;
		document.getElementById("mostraLinkedin").innerHTML = linkedin;
		document.getElementById("mostraGithub").innerHTML = github;
	} else {
		alert("Digite dados válidos.")
	}
}

function enviarForm(){
	document.getElementById("formulario").method = "post";
	document.getElementById("formulario").action = "sucesso.html";
	document.getElementById("formulario").submit();
}