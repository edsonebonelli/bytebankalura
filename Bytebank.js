import { Clientes } from "./Clientes/Clientes.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { Sistemaautenticação } from "./ByteBank/Sistemaautenticacao.js";

//import { ContaCorrente } from "./Conta/ContaCorrente.js";
//import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
//import { ContaSalario } from "./Conta/ContaSalario.js";


//const cliente1 = new Cliente("Ricardo", 39729950840);

//const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
//const contapoupanca = new ContaPoupanca(50, cliente1, 1001);
//const contasalario = new ContaSalario(cliente1);
//contasalario.depositar(500);
//contasalario.sacar(250);

//console.log(contaCorrenteRicardo);
//console.log(contapoupanca);
//console.log(contasalario);

const cliente = new Clientes("Lais", 39729950860);
cliente.cadastrarsenha("1234");

const diretor = new Diretor("Rodrigo", 10000, 39729950840);
diretor.cadastrarsenha("123456789");

const gerente = new Gerente("Ricardo", 5000, 39729950850);
gerente.cadastrarsenha("123456");

const estalogadodiretor = Sistemaautenticação.login(diretor, 123456789);
const estalogadogerente = Sistemaautenticação.login(gerente, 123456);
const estalogadocliente = Sistemaautenticação.login(cliente, 1234);

console.log(estalogadodiretor, estalogadogerente, estalogadocliente);