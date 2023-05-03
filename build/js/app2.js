// ========> Form <=============
const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const expresiones = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    affair: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    messange: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	phone: /^\d{7,14}$/ // 7 a 14 numeros.
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "name":
			validarCampo(expresiones.name, e.target, e.target.name);
		break;
		case "email":
			validarCampo(expresiones.email, e.target, e.target.name);
		break;
		case "phone":
			validarCampo(expresiones.phone, e.target, e.target.name);
		break;

        case "affair":
			validarCampo(expresiones.affair, e.target, e.target.name);
		break;

        case "messange":
			validarCampo(expresiones.messange, e.target, e.target.name);  
		break;
	}
} 

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.querySelector(`#grupo__${campo} i`).classList.add('icon_corect');
        document.querySelector(`#grupo__${campo} i`).classList.remove('icon_incorect');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle'); 
		campos[campo] = true;
	} else {
		document.querySelector(`#grupo__${campo} i`).classList.add('icon_incorect');
        document.querySelector(`#grupo__${campo} i`).classList.remove('icon_corect');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		campos[campo] = false;
	}
}




inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

form.addEventListener('submit', (e) => {
    
});