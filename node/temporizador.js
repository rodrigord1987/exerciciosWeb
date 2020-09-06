// temporizador para execução de tarefas agendadas
// pré requisito baixar a dependencia npm i node-schedule

const schedule = require('node-schedule')
//passar como parametro o tempo (segundo, minuto, hora, dia do mes, mes, dia da semana sendo que zero é domingo)
const tarefa1 = schedule.scheduleJob('*/5 * 19 * * 6', function(){
    console.log('Executando a Tarefa 1', new Date().getSeconds())
})

 setTimeout(function(){ //executar a tarefa de cancelamento quando chegar a 20 segundos
    tarefa1.cancel()
    console.log('Cancelamento Tarefa 1!')
},20000)

//setImmediate , pra executar de imediato
//setInterval, dentro de um intervalo

//inserindo uma regra definida
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,6)]
regra.hour = 19
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})
