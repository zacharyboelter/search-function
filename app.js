document.querySelector('#searchInput').addEventListener('keyup', function(e){
    let searchQuery = e.target.value.toLowerCase();
    console.log(searchQuery);
})