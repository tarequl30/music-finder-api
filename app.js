document.getElementById("searchButton").addEventListener("click", function(){
    const serachSong = document.getElementById("searchSong").value;
    loadData(serachSong);
})

function loadData(song){
        fetch( `https://api.lyrics.ovh/suggest/${song}`)
        .then( res => res.json())
        .then( data => displayData(data.data))
}
const displayData = songName =>{
    songName.forEach(songs => console.log(songs.title))
}