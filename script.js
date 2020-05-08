
function run() {

    var artist = document.getElementById("artist").value;

    var numOfTopSongs = document.getElementById("number").value;

    if (artist == ""){
        document.getElementById('output').innerHTML = ("no input provided, please type artist name")
    }else{
        $.ajax({
            url: 'http://itunes.apple.com/search?term=' + artist + "&limit=" + numOfTopSongs,
            dataType: "json",
            success: process
        });
    }


}

function process(data) {
    console.log(data);
    var songs = data.results;
    var o = "";


    for(var p = 0;p<songs.length;p++) {
        o += "<tr>";
        //song rank---
        var img = $('<img />',
            {src : songs[p].artworkUrl60 });
        o += "<td>" + songs[p].artistName + "</td>";
        o += "<td>" + songs[p].trackName + "</td>";
        o += "<td>" + songs[p].previewUrl + "</td>";
        o += "<td>" + songs[p].collectionName + "</td>";
        o += "<td>" + img.appendTo('body')+ "</td>";
        o += "</tr>";
    }
    var table = document.getElementById("output");
    table.innerHTML = o;
    table.style.display = "block";

}


/*
function image(data){
    console.log(data);
    var image = new Image();
    var url= "";
    var songs = data.results;
       for(var i=0;i<songs.length; i++){
           url += songs[i].artworkUrl60;
       }
       image.src = url;
       return image.src;
}
*/


/*
function image(URL){
    var x = document.createElement("IMG");
    x.setAttribute = ("href", "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/89/93/5f/89935f10-015a-a45c-5b6a-c15910063cc4/source/60x60bb.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "The Pulpit Rock");
    document.body.appendChild(x);

}
 */