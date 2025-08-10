 
 function searchTable() {
  const input = document.getElementById("searchInput").value.trim().toUpperCase();
  const table = document.getElementById("resultsTable");
  const rows = table.getElementsByTagName("tr");

  let found = false;

  // Loop through rows starting from index 1 (skip header)
  for (let i = 1; i < rows.length; i++) {
    const rollCell = rows[i].getElementsByTagName("td")[0];

    if (rollCell) {
      const rollNumber = rollCell.textContent.trim().toUpperCase();

      if (rollNumber === input) {
        rows[i].style.display = "";
        found = true;
      } else {
        rows[i].style.display = "none";
      }
    }
  }
if (input === "") {
  alert("Please Enter your Roll Number");
  
}
    


  // Show table if result found, otherwise hide it
  table.style.display = found ? "table" : "none";

  

  
    if(!found && input !== "") {
    alert("No results found for Roll Number: " + input);
    }
    
    
  }   

