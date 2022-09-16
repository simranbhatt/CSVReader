const urlHead = "http://localhost:3000/";

async function constructTable(url, selector) {
    clearTable();
    fetch(urlHead + url)
    .then((response) => response.json())
    .then((data) => { 
        if(!Array.isArray(data)) {
            var columns = processHeaderData(data, selector);
            processTableRows(data, columns, selector);
        } else {
           var columns = processHeaderData(data[0], selector);
           data.forEach((currentRow) => {
             processTableRows(currentRow, columns, selector);
         })}
    }

).catch((error) => {
    console.log(error)
})
};

async function processTableRows(currentRow, columns, selector) {
    var row = $('<tr/>');  
    columns.then(function(columnvals) {
    columnvals.map(function(val) {
        row.append($('<td/>').html(currentRow[val]));  
    })
    // Adding each row to the table
        $(selector).append(row);
    })
}
 

async function processHeaderData(row, selector) {
    var header = $('<tr/>');
    var columns = [];
    for (var name in row) {
            columns.push(name);
            header.append($('<th/>').html(name));
        }
        $(selector).append(header);
        return columns;
};

async function searchByISBN() {
    var isbn = document.getElementById("search").value;
    if(isbn.length > 0) {
    var url = 'findByISBN/'+ isbn
    constructTable(url, '#table')
    }
}


async function searchByAuthor() {
    var email = document.getElementById("search").value;
    if(email.length > 0) {
    var url = 'findByAuthor/'+ email
    constructTable(url, '#table')
    }
}

async function clearTable() {
    var tableLength = document.getElementById("table").rows.length;
    for(var i = 0; i < tableLength; i++) 
      document.getElementById("table").deleteRow(0);
};

