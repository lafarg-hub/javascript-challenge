var tableData = data;

// create columns to house data
var columns =["datetime","city","state","country","shape","durationMinutes","comments"];

var filter_btn = d3.select("#filter-btn");
var full_btn = d3.select("#full-btn");
var	tbody = d3.select('tbody');

var rows = tbody.selectAll('tr')
              .data(tableData)
              .enter()
              .append('tr');
        
// create a cell in each row for each column
var cells = rows.selectAll('td')
              .data(function (row) {
                return columns.map(function (column) {
                  return {column: column, value: row[column]};
                });
              })
              .enter()
              .append('td')
              .text(function (d) { return d.value; });

// update the table
function update_table(data){
    tbody.selectAll('tr').remove();
    var rows = tbody.selectAll('tr')
             .data(data)
             .enter()
             .append('tr');
       
 // create a cell in each row for each column
    var cells = rows.selectAll('td')
             .data(function (row) {
               return columns.map(function (column) {
                 return {column: column, value: row[column]};
               });
             })
             .enter()
             .append('td')
             .text(function (d) { return d.value; });
}

// update table when filter button is clicked
filter_btn.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = tableData.filter(record => record.datetime === inputValue);

  update_table(filteredData);
});