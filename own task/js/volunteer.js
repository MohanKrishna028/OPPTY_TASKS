const sheetId = "19HRkanx4u1HF4IlAOPhxp8IV60wPZHUgaOBBEIgrCT8";
const sheetName = "Form Responses 1";

const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${sheetName}`;

fetch(url)
    .then(res => res.text())
    .then(data => {
        const json = JSON.parse(data.substring(47).slice(0, -2));
        const rows = json.table.rows;

        const tbody = document.querySelector("#donorTable tbody");

        rows.forEach(row => {
            const tr = document.createElement("tr");

            // 👉 FETCH ONLY FIRST 6 COLUMNS (UP TO BLOOD GROUP)
            for (let i = 0; i < 6; i++) {
                const td = document.createElement("td");
                td.textContent = row.c[i] ? row.c[i].v : "";
                tr.appendChild(td);
            }

            tbody.appendChild(tr);
        });
    })
    .catch(err => console.error("Error fetching data:", err));
