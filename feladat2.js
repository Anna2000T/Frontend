
function igen(){
    event.preventDefault();

    let nev =  document.getElementById("vezetek").value;
    let utonev =  document.getElementById("kereszt").value;
    let kedvencszam =  document.getElementById("kedvencszam").value;
    let van = "Van jogosítványa!"; 

    // let adatok = [nev, email,jelszo];
    let adatok = {
        nev,
        utonev,
        kedvencszam,
        van,
        



    };


    console.log(adatok);
    
}

function nem(){
    event.preventDefault();

    let nev =  document.getElementById("vezetek").value;
    let utonev =  document.getElementById("kereszt").value;
    let kedvencszam =  document.getElementById("kedvencszam").value;
    let nincs = "Nincs jogosítványa!";

    // let adatok = [nev, email,jelszo];
    let adatok = {
        nev,
        utonev,
        kedvencszam,
        nincs,
    


    };


    console.log(adatok);
    
}

