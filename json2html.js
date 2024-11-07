export default function json2html(data) {
  let table = `<table data-user="anishreddy56789@gmail.com">`;
  
  // Create table header
  table += `<thead><tr>`;
  const headers = ["Name", "Age", "Gender"];
  headers.forEach(header => table += `<th>${header}</th>`);
  table += `</tr></thead>`;
  
  // Create table body
  table += `<tbody>`;
  data.forEach(row => {
    table += `<tr>`;
    headers.forEach(header => {
      table += `<td>${row[header] || ""}</td>`;
    });
    table += `</tr>`;
  });
  table += `</tbody></table>`;
  
  return table;
}
