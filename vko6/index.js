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
