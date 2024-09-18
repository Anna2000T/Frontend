// const nev =  document.getElementById("nev").value;

async function getData(){
    let nev =  document.getElementById("nev").value;
    console.log("Név: " + nev)
    const url = `https://www.codewars.com/api/v1/users/${nev}`;

    try{
        const response = await fetch(url)
        if(!response.ok)
        {
            throw new Error(`Response status: ${response.status}`);

        }
        const json = await response.json();
        console.log(json);

    } catch(error)
    {
        console.log("Thats not good :(");
    }
}
