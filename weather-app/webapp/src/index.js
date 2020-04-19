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

const api = 'https://webapi19sa-1.course.tamk.cloud/v1/weather'; // API josta haetaan
const signal = "temperature";


const getData = async(url) => {
    const response = await fetch(url);
    console.log("waitink");
    return await response.json();
};
const data = getData(`${api}/${signal}`)
  .then((data) => {
    const table = document.getElementById("thetable");
    data.forEach((row) => {
        const tr = document.createElement("tr");
        Object.values(row).forEach((item) => {
            const td = document.createElement("td");
            td.innerHTML = item;
            tr.appendChild(td);
        });
        table.appendChild(tr);
    }); 
  })
  .catch((error) => {
    console.error('Error:', error);
  });