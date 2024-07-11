var cpf = "00000000000000";

var test = ""

function formataCPF(cpf){
  //retira os caracteres indesejados...
  cpf = cpf.replace(/[^\d]/g, "");

  //realizar a formatação...
  test = cpf.replace(/(\d{2})(\\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
	console.log("test", test)
}
formataCPF();
