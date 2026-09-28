const listaAgendados = [];
let agendamento = document.getElementById('btnAgendar');
let cadastrar = document.getElementById('btnCadastrar');

class Agendamento{
    constructor(nome, horario, observacao){
        this.nome = nome;
        this.horario = horario;
        this.observacao = observacao;
    }

    novoAgendamento(nome, horario, observacao){
        const nome = this.nome;
        let horario = this.horario;
        let observacao = this.observacao;
        listaAgendados.push(
            {
                nome: nome,
                horario: horario,
                obs: observacao
            }
        )
    }

    modAgendamento(nome){
        
    }
}


agendamento.addEventListener('click', () =>{
   let modal = document.getElementById('div modal').style.display = 'flex'
});