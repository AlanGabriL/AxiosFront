//link do servidor do node
const url = 'http://localhost:5000/api';
//lista do usuario ( é adicionado dinamicamente)
const newUser = {
  name: 'Alan top',
  avatar: 'https://picsum.photos/200/300',
  city: 'Medianeira',
};

//pega todos
function getUser() {
  axios //usa o url
    .get(url)
    //espera a resposta do servidor
    .then((response) => {
      //pega o response.data; sem isso viria mais informações
      const data = response.data;
      //coloca iso na div em formato de json
      renderResults.textContent = JSON.stringify(data);
    })
    //se der erro
    .catch((error) => console.log(error));
}
getUser();

//pegar um usuario
function getOnUser() {
  //pega a url concatenada com o numero ( vai ser adicionado dinamicamente)
  axios
    .get(`${url}/1`)
    .then((response) => {
      const data = response.data;
      //pega apenas item com id 1
      //e mostra isso
      renderResults.textContent = data;
    })
    .catch((error) => console.log(error));
  //caso queira mostrar apenas um item faça isso:
  //const data = response.data.{o item do json Ex: city}
  //renderResults.textContent = data
}
getOnUser();

//adiciona
function addNewUser() {
  //pega a url e os dados
  axios
    .post(url, newUser)
    .then((response) => {
      //aguarda uma resposta
      alert(JSON.stringify(response.data));
    })
    .catch((error) => console.log(error));
}

// addNewUser();

//atualiza
//lista
const updateuser = {
  name: 'vamo ser feliz',
  avatar: 'sonic',
  city: 'brasilia',
};

function updateUser() {
  axios
    //adiciona a url concatenada e adiciona a lista atualizada
    .put(`${url}/1`, updateuser)
    .then((response) => alert('mudou'))
    .catch((error) => console.log(error));
}

// updateUser();

function deleteUser() {
  axios
    .delete(`${url}/8`)
    .then((response) => alert('deletou'))
    .catch((error) => console.log(error));
}
// deleteUser();
