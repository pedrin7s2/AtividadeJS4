    idade = [ 16, 48, 23, 22, 45, 8,12]

    let filtro = idade.filter((idade)=>{
        return idade > 18
    })

    idade.forEach((idade) => {
        console.log(`Sua idade é: ${idade}`);
    });
     console.log(`Pessoas maiores de 18: ${filtro}`);


