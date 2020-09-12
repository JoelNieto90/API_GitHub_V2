const searchAPI = () => {
    //Almacenamos la url de la API de GitHub
    const API_URL = "https://api.github.com/users/"
    //Obtenemos el valor del input
    let userName = document.getElementById("UserNameInput").value
    //Creamos la solicitud utilizando el constructor Request()
    let require = new Request(`${API_URL}${userName}/repos?page=1$per_page=100`)

    fetch(require)
        .then(response => response.json())
        .then(data => {
            tableData(data)
        })

        .catch(err => console.log(err))
}

const tableData = (data) => {
    //Le indicamos que queremos solo los repos de JavaScript 
    const wordJS = (data) => data.language == "JavaScript"

    //Filtramos aquellos repos que cumplan con la especificación
    let filterJS = data.filter(wordJS)

    //Declaramos un arreglo vacio, que contendra cada nombre de repo que sea de JS
    let arrayNames = []

    //Este array servira para ir agregando cada id del arreglo
    let arrayID = []

    //Ciclo que recorre aquellos repos que cumplan la condicion 
    //y los va anexando al arreglo con el metodo push
    for (let i in filterJS){
        //Va agregando los nombres de los repos
        arrayNames.push(filterJS[i].name)
        //Agrega los id de cada repo en el array
        arrayID.push(filterJS[i].id)

        //console.log(arrayNames[i])
        //console.log(data)
        console.log(arrayID[i])
        console.log(arrayNames[i])

        //Aqui estoy indicandole que me pegue en el HTMl los valores de id y el name del repo
        repos.innerHTML += `
        <tr>
            <th scope="row">${arrayID[i]}</th>
            <td>${arrayNames[i]}</td>
        </tr>
        `
    }
}