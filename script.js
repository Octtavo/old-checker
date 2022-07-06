function processar(){
    const nome = document.getElementById('txt1')
    const anoNasc = document.getElementById('txtnum')
    const result = document.getElementById('result')
    const name = String(nome.value)
    const age = Number(anoNasc.value)
    const anoAtual = 2022

    if(name.length == 0 || age == 0){
        alert('[ERRO] Preencha todos os campos vazios e tente novamente')
    }else{
        if( anoAtual - age  >= 18 && anoAtual - age <= 69){
            idade = anoAtual - age
            result.innerHTML = `Olá ${name}, vejo que você já tem ${idade} de idade e que já pode votar`
        }else{
            if(anoAtual - age  >= 16 && age - anoAtual <= 17){
                idade = anoAtual - age
                result.innerHTML = `Olá ${name}, vejo que já completou ${idade} de idade, sabia que ja pode ter voto facultativo?`
            }else{
                if(anoAtual - age <= 15){
                    idade = anoAtual - age
                    result.innerHTML = `Olá ${name}, vejo que infelizmente ainda tem ${idade} de idade e não pode votar`
                }else{
                    if(anoAtual - age >= 70){
                        idade = anoAtual - age 
                        result.innerHTML = `Olá senhor(a) ${name}, vejo que tem ${idade} de idade e que possui voto facultativo`
                    }
                }
            }
        }
    }
    nome.val = ''
    anoNasc.val = ''
    result.val = ''
}
