let inputs = document.querySelectorAll('input');

let errors = {
     "ime_prezime": [],
     "korisnicko_ime": [],
     "email": [],
     "lozinka": [],
     "ponovi_lozinku": []
};

inputs.forEach(element => {
    element.addEventListener('change', e => {
     let currentInput = e.target;
     let inputVlue = currentInput.value;
     let inputName = currentInput.getAttribute('name');

     if(inputVlue.length > 4) {
     	errors[inputName] = [];
     	   switch(inputName) {
     	   	case 'ime_prezime':
     	   	let validation = inputVlue.trim();
     	   	 validation = validation.split(" ");
     	   	 if(validation.length < 2 ) {
                 errors[inputName].push('moras i ime i prezime');
             
     	   	 }
     	   	 break;

     	   	 case 'email':
     	   	 if(!validateEmail(inputVlue)) {
                errors[inputName].push('mora biti dobra email');
     	   	 }
     	   	 break;

     	   	 case 'ponovi_lozinku':
     	   	 let lozinka = document.querySelector('input[name=lozinka"]').value;

     	   	 if(inputVlue !=== lozinka ) {
     	   	 	errors[inputName].push('Lozinka se ne poklaplja');
     	   	 }

     	   	 



     	   }


     }else {
     	  errors[inputName] = ['Polje ne moze imati manje od 5 '];

     }


     document.querySelector('div').innerHTML = `<ul><li>${errors[inputName][0]}</li></ul>`;




            populateErrors();



    });
});

const populateErrors = () => {

	for(let elem of document.querySelectorAll('ul')) {
		elem.remove();
	}

	for (let key of Object.keys(errors)) {
		let input = document.querySelector(`input[name="${key}]`);
		let parentElement = input.parentElement;
		let errorel = document.createElement('ul');
		parentElement.appendChild(errorel);

		errors[key].forEach(error => {
			let li = document.createElement('li');

			li.innerText = error;

			errorel.appendChild(li);
		})
	}


}
