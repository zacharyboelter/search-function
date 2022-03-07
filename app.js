//event listener
document.querySelector('#searchInput').addEventListener('keyup', function(e){
    let searchQuery = e.target.value.toLowerCase();
    let allNames = document.getElementsByClassName('name');
//for loop iterating over all names
    for (let counter = 0; counter < allNames.length; counter++){
        //set them to var
        const currentName = allNames[counter].textContent.toLowerCase();
        
        //conditional checking the input against array of names. change style depending on match
        if (currentName.includes(searchQuery)) {
            allNames[counter].style.display = "block";
        } else {
            allNames[counter].style.display = "none";
        }
    }
    searchQuery.textContent = '';
});
