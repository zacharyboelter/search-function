document.querySelector('#searchInput').addEventListener('keyup', function(e){
    let searchQuery = e.target.value.toLowerCase();
    let allNames = document.getElementsByClassName('name');

    for (let counter = 0; counter < allNames.length; counter++){
        const currentName = allNames[counter].textContent.toLowerCase();
        
        if (currentName.includes(searchQuery)) {
            allNames[counter].style.display = "block";
        } else {
            allNames[counter].style.display = "none";
        }
    }
    searchQuery.textContent = '';
});
