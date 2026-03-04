function loadHTML(id, file) {
  fetch(file)
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to load " + file);
      }
      return response.text();
    })
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(error => {
      console.error(error);
    });
}
function toggleGradeTable() {
    const table = document.getElementById("gradeTable");
    table.style.display = table.style.display === "none" ? "block" : "none";
}

function calculateCGPA() {
    const gradeSelect = document.querySelector(".grade");
    const creditInput = document.querySelector(".credit");

    if (!gradeSelect.value || !creditInput.value) {
        alert("Please select grade and enter credit");
        return;
    }

    const gradePoints = {
        "AA": 10,
        "AB": 9,
        "BB": 8,
        "BC": 7,
        "CC": 6,
        "CD": 5,
        "DD": 4,
        "FF": 0
    };

    const grade = gradeSelect.value;
    const credit = parseFloat(creditInput.value);
    const gp = gradePoints[grade];

    const cgpa = (gp * credit) / credit;

    document.getElementById("cgpaValue").innerText =
        `Grade: ${grade} | Credit: ${credit} | CGPA: ${cgpa.toFixed(2)}`;

    document.getElementById("cgpaResult").style.display = "block";
}
// Unit Conversions

function kmToM() {
  let km = document.getElementById("km").value;
  document.getElementById("kmResult").innerText =
    km + " km = " + (km * 1000) + " meters";
}

function kgToG() {
  let kg = document.getElementById("kg").value;
  document.getElementById("kgResult").innerText =
    kg + " kg = " + (kg * 1000) + " grams";
}

function cToF() {
  let c = document.getElementById("celsius").value;
  let f = (c * 9/5) + 32;
  document.getElementById("tempResult").innerText =
    c + " °C = " + f.toFixed(2) + " °F";
}


