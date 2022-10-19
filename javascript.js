class Client {
    constructor() {
        this.pessoas = [];
        this.pessoa = {};
        this.form = document.getElementById('form');
        this.user = document.getElementById('nome');
        this.email = document.getElementById('email');
        this.telefone = document.getElementById('telefone');
        this.body =  document.getElementById('tbody');
    }


    btnSalvar() {
        this.pessoa = { nome: this.user.value, email: this.email.value, telefone: parseInt(this.telefone.value) }
        if (this.pessoas.length < 1) 
            this.pessoas[0] = this.pessoa;
        else this.pessoas[this.pessoas.length] = this.pessoa;
        this.atualizaTabela(this.user.value, this.email.value, this.telefone.value);
    }

    atualizaTabela(user, email, telefone) {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');

        td1.appendChild(document.createTextNode(user));
        td2.appendChild(document.createTextNode(email));
        td3.appendChild(document.createTextNode(telefone));
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        this.body.appendChild(tr);
    }
    

    salvarApi() {
        this.pessoas.forEach((i) => {
            console.log(JSON.stringify(i))
            fetch('https://63154a085b85ba9b11ddfafe.mockapi.io/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(i)
            })
        })
        this.pessoas = [];
    }
}

const Main = new Client();
