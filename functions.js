      $(document).ready(function () {
        $('#tabelle').DataTable();
    });


    function search(){
      let textToSearch = document.getElementById("search").value;
      let paragraph = document.getElementById("paragraph");
      textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
  
      let pattern = new RegExp(`${textToSearch}`,"gi");
  
      paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `<mark>${match}</mark>`)
  }

