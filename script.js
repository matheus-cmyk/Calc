document.getElementById('descontoForm').addEventListener('submit', function(event) {
    event.preventDefault()

    const nomeProduto = document.getElementById('nomeProduto').value
    const valorOriginal = parseFloat(document.getElementById('valorOriginal').value)
    const percentualDesconto = parseFloat(document.getElementById('percentualDesconto').value)

    if (isNaN(valorOriginal) || isNaN(percentualDesconto) || percentualDesconto < 0 || percentualDesconto > 100) {
        alert('Por favor, insira valores válidos.')
        return
    }

    const valorDesconto = (valorOriginal * percentualDesconto / 100).toFixed(2);
    const valorFinal = (valorOriginal - valorDesconto).toFixed(2);

    document.getElementById('resultado').innerHTML = `
        <p>Nome do Produto: ${nomeProduto}</p>
        <p>Valor do Desconto: R$ ${valorDesconto}</p>
        <p>Valor Final do Produto: R$ ${valorFinal}</p>
    `
})

document.getElementById('reiniciarBtn').addEventListener('click', function() {
    document.getElementById('descontoForm').reset()
    document.getElementById('resultado').innerHTML = ''
})