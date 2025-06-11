function contar() {
    var inicio = ducument.getqueryselector("inputinicio").value
    var fim = document.querySelector("inputfim").value
    var passo = document.queruselector("inputpasso").value

    for (var contagem = inicio; contagem <= fim; contagem += passo) {
        console.log(contagem);
    }




}