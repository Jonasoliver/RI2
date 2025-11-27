// Função construtora para TelefoneCelular
function TelefoneCelular(ddd, numero) {
    this.ddd = ddd;
    this.numero = numero;

    // Getter para DDD em caixa alta
    this.getDDDCaixaAlta = function() {
        return this.ddd.toString().toUpperCase();
    };

    // Getter para DDD em caixa baixa
    this.getDDDCaixaBaixa = function() {
        return this.ddd.toString().toLowerCase();
    };

    // Setter para DDD
    this.setDDD = function(novoDDD) {
        this.ddd = novoDDD;
    };

    // Getter para número em caixa alta
    this.getNumeroCaixaAlta = function() {
        return this.numero.toString().toUpperCase();
    };

    // Getter para número em caixa baixa
    this.getNumeroCaixaBaixa = function() {
        return this.numero.toString().toLowerCase();
    };

    // Setter para número
    this.setNumero = function(novoNumero) {
        this.numero = novoNumero;
    };
}

// Função construtora para Endereco
function Endereco(estado, cidade, rua, numero) {
    this.estado = estado;
    this.cidade = cidade;
    this.rua = rua;
    this.numero = numero;

    // Getter para estado em caixa alta
    this.getEstadoCaixaAlta = function() {
        return this.estado.toUpperCase();
    };

    // Getter para estado em caixa baixa
    this.getEstadoCaixaBaixa = function() {
        return this.estado.toLowerCase();
    };

    // Setter para estado
    this.setEstado = function(novoEstado) {
        this.estado = novoEstado;
    };

    // Getter para cidade em caixa alta
    this.getCidadeCaixaAlta = function() {
        return this.cidade.toUpperCase();
    };

    // Getter para cidade em caixa baixa
    this.getCidadeCaixaBaixa = function() {
        return this.cidade.toLowerCase();
    };

    // Setter para cidade
    this.setCidade = function(novaCidade) {
        this.cidade = novaCidade;
    };

    // Getter para rua em caixa alta
    this.getRuaCaixaAlta = function() {
        return this.rua.toUpperCase();
    };

    // Getter para rua em caixa baixa
    this.getRuaCaixaBaixa = function() {
        return this.rua.toLowerCase();
    };

    // Setter para rua
    this.setRua = function(novaRua) {
        this.rua = novaRua;
    };

    // Getter para número em caixa alta
    this.getNumeroCaixaAlta = function() {
        return this.numero.toString().toUpperCase();
    };

    // Getter para número em caixa baixa
    this.getNumeroCaixaBaixa = function() {
        return this.numero.toString().toLowerCase();
    };

    // Setter para número
    this.setNumero = function(novoNumero) {
        this.numero = novoNumero;
    };
}

// Função construtora para Cliente
function Cliente(nome, telefoneCelular, email, endereco) {
    this.nome = nome;
    this.telefoneCelular = telefoneCelular;
    this.email = email;
    this.endereco = endereco;

    // Getter para nome em caixa alta
    this.getNomeCaixaAlta = function() {
        return this.nome.toUpperCase();
    };

    // Getter para nome em caixa baixa
    this.getNomeCaixaBaixa = function() {
        return this.nome.toLowerCase();
    };

    // Setter para nome
    this.setNome = function(novoNome) {
        this.nome = novoNome;
    };

    // Getter para telefone em caixa alta
    this.getTelefoneCelularCaixaAlta = function() {
        return this.telefoneCelular;
    };

    // Getter para telefone em caixa baixa
    this.getTelefoneCelularCaixaBaixa = function() {
        return this.telefoneCelular;
    };

    // Setter para telefone
    this.setTelefoneCelular = function(novoTelefone) {
        this.telefoneCelular = novoTelefone;
    };

    // Getter para email em caixa alta
    this.getEmailCaixaAlta = function() {
        return this.email.toUpperCase();
    };

    // Getter para email em caixa baixa
    this.getEmailCaixaBaixa = function() {
        return this.email.toLowerCase();
    };

    // Setter para email
    this.setEmail = function(novoEmail) {
        this.email = novoEmail;
    };

    // Getter para endereco em caixa alta
    this.getEnderecoCaixaAlta = function() {
        return this.endereco;
    };

    // Getter para endereco em caixa baixa
    this.getEnderecoCaixaBaixa = function() {
        return this.endereco;
    };

    // Setter para endereco
    this.setEndereco = function(novoEndereco) {
        this.endereco = novoEndereco;
    };

    // Método descricao que retorna informações formatadas
    this.descricao = function() {
        let resultado = '';
        resultado += '---------------\n';
        resultado += 'Informações do Cliente:\n';
        resultado += this.nome + '\n';
        resultado += '---------------\n';
        resultado += '---------------\n';
        resultado += 'Telefone:\n';
        resultado += 'DDD: ' + this.telefoneCelular.ddd + '\n';
        resultado += 'Número: ' + this.telefoneCelular.numero + '\n';
        resultado += '---------------\n';
        resultado += 'Endereço:\n';
        resultado += 'Rua: ' + this.endereco.rua + '\n';
        resultado += 'Número: ' + this.endereco.numero + '\n';
        resultado += 'Cidade: ' + this.endereco.cidade + '\n';
        resultado += 'Estado: ' + this.endereco.estado + '\n';
        resultado += '---------------\n';
        return resultado;
    };
}

// Função para ordenar clientes por nome
function ordenarClientesPorNome(clientes) {
    return clientes.sort(function(a, b) {
        return a.nome.localeCompare(b.nome);
    });
}

// Testando o código
let telefone1 = new TelefoneCelular('11', '999999999');
let endereco1 = new Endereco('SP', 'São Paulo', 'Av. Paulista', '987');
let cliente1 = new Cliente('Carlos Conrado Heinz', telefone1, 'carlos.conrado@app.com', endereco1);

let telefone2 = new TelefoneCelular('21', '988888888');
let endereco2 = new Endereco('RJ', 'Rio de Janeiro', 'Rua das Flores', '123');
let cliente2 = new Cliente('Ana Paula Silva', telefone2, 'ana.silva@app.com', endereco2);

let telefone3 = new TelefoneCelular('47', '977777777');
let endereco3 = new Endereco('SC', 'Florianópolis', 'Av. Beira Mar', '456');
let cliente3 = new Cliente('Bruno Santos Costa', telefone3, 'bruno.santos@app.com', endereco3);

// Exibindo descrição do primeiro cliente
console.log(cliente1.descricao());

// Criando array de clientes e ordenando por nome
let clientes = [cliente1, cliente2, cliente3];
console.log('Clientes antes da ordenação:');
clientes.forEach(function(cliente) {
    console.log('- ' + cliente.nome);
});

let clientesOrdenados = ordenarClientesPorNome(clientes);
console.log('\nClientes após ordenação alfabética:');
clientesOrdenados.forEach(function(cliente) {
    console.log('- ' + cliente.nome);
});
