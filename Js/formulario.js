
class ValidarFormulario {
    constructor() {
        this.formulario = document.querySelector('.form');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.fazerSubmit(e);
        })
    }

    fazerSubmit(e) {
        e.preventDefault();

        const camposValidos = this.validadorCampos();
        const senhaValida = this.validarSenhas();

        if (camposValidos && senhaValida) {
            alert('Formulário enviado.');
            this.formulario.submit();
        }
    }

    validadorCampos() {
        let valid = true;

        for (let errors of this.formulario.querySelectorAll('.error-text')) {
            errors.remove();
        }

        for (let i of this.formulario.querySelectorAll('.campoInput')) {
            let labels = i.previousElementSibling.innerText;


            if (!i.value) {
                this.criaErro(i, `O campo "${labels}" não pode estar vazio.`)
                valid = false;
            }

            if (i.classList.contains('usuario')) {
                if (!this.validaUsuario(i)) {
                    valid = false;
                }
            }

            if(i.classList.contains('email')) {
                if(!this.validateEmail(i.value)) {
                    this.criaErro(i, `Digite um e-mail valido.`)
                }
            }
        }


        return valid;
    }


    validateEmail(email) {
        let re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    validaUsuario(i) {
        let usuario = i.value;
        let valid = true;

        if (usuario.length < 4 || usuario.length > 12) {
            valid = false;
            this.criaErro(i, "O nome de usuário deve conter entre 4 a 12 caracteres.");
        }

        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            valid = false;
            this.criaErro(i, "O nome de usuário só deve conter letras e/ou números.");
        }


        return valid;
    }

    validarSenhas() {
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.senha2');

        if (senha.value !== repetirSenha.value) {
            valid = false;
            this.criaErro(senha, 'Os campos "senhas" e "repetir senha" precisam ser iguais.');
            this.criaErro(repetirSenha, 'Os campos "senhas" e "repetir senha" precisam ser iguais.');
        }

        if (senha.value.length < 6 || senha.value.length > 10) {
            valid = false;
            this.criaErro(senha, 'Sua senha precisa ter entre 6 a 10 caracteres.');
        }

        return valid;
    }

    criaErro(i, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        i.insertAdjacentElement('afterend', div);
    }

}



const valida = new ValidarFormulario();

//genero:



