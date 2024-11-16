const btnElement = document.querySelector('.btnElement');

const responseElement = document.querySelector('.res');

const fetchCepData = async () => {
    
    const cep = document.getElementById('cep').value;

    if (!/^\d{8}$/.test(cep)) {
        responseElement.innerHTML = "insira um CEP válido.";
        return;
    }
    
    const API_URL = `https://viacep.com.br/ws/${cep}/json/`;

    const options = {
        method: "GET",
        mode: "cors",
        headers: {
            'content-type': 'application/json;charset=utf-8',
        }
    };


    try {
        
        const response = await fetch(API_URL, options);
        
        const data = await response.json();

        if (data.erro) {
        
            responseElement.innerHTML = "CEP não encontrado.";
        
        } else {
            responseElement.innerHTML = `
                <p><span> CEP:</span> ${data.cep}</p>
                <p><span> Logradouro:</span> ${data.logradouro}</p>
                <p><span> Bairro:</span> ${data.bairro}</p>
                <p><span> Cidade:</span> ${data.localidade}</p>
                <p><span> Estado:</span> ${data.uf}</p>
            `;
        }
        
    } catch (error) {
        responseElement.innerHTML = "Erro ao buscar o CEP.";
    }

};

btnElement.addEventListener('click', fetchCepData);