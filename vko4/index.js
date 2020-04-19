const titleDiv = document.getElementById("title-div");
const dataDiv = document.getElementById("data-div");

const loaded = () => {
    titleDiv.innerHTML = "<h1>TERVETULOA SÄÄASEMALLE</h1>";
    dataDiv.innerHTML = "MILTÄS SÄÄ NÄYTTÄÄ?";
}

const updateView = elem => {
    const action = elem.id;

    if(action == "wind") 
        titleDiv.innerHTML = "<h1>TUULEN NOPEUS</h1>";
    else if(action == "temp") 
        titleDiv.innerHTML = "<h1>LÄMPÖTILA</h1>";

    dataDiv.innerHTML = `${new Date().toLocaleString()}`;
}

loaded();