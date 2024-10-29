
const url = "https://vvri.pythonanywhere.com/api/courses";

function ShowKurzus() {

    fetch(url)
    .then(response => response.json())
    .then(json => {
        let li = `<li>Kurzusok</li>`;
        json.forEach(user => {
            li += `<ul>
            <li>${user.name} </li>
            <li>${user.id}</li>
            <li>${user.students}</li>
            </ul>`;
        });
        document.getElementById("users").innerHTML = li;
     
        })
        .catch(error => console.log("Hiba történt: " + error));

}








function addKurzus() {

    const name = document.getElementById('ujkurzus').value
    console.log(name)

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name}),
    })
    .then(response => response.json())
    .then(data => {
        console.log("Új kurzus létrehozva:", data);
    })
    .catch(error => console.log("Hiba történt: " + error));

    




}


function newDiak() {
    const name = document.getElementById('diakneve').value
   


    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify({
            students: name,

            
            }),
    })
    .then(response => response.json())
    .then(data => {
        console.log("Új Diák hozzáadva:", data);
    })
    .catch(error => console.log("Hiba történt: " + error));


}

function RemoveKurzus(){
    const removenev = document.getElementById('RemoveNev').value
    const deleteUrl = `${url}/${removenev}`;
    fetch(url,{
      
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(response => {
            console.log(deleteUrl)
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
})
.then(json => console.log(json))
.catch(error => console.error('There was a problem with the fetch operation:', error));



    }









