
/*Footer Code*/
document.getElementById("foot01").innerHTML =
"<p>&copy;  " + new Date().getFullYear() + " Oubaid. All rights reserved.</p>";

/*Navigation Code*/
document.getElementById("nav01").innerHTML =
"<ul id='menu'>" +
"<li><a href='index.html'>Home</a></li>" +
"<li><a href='aboutus.html'>About</a></li>" +
"</ul>";

var apikey = "345f6wv756gk6wp8cugvuqcu";
var baseUrl = "http://api.rottentomatoes.com/api/public/v1.0";

// construct the uri with our apikey
var moviesSearchUrl = baseUrl + '/movies.json?apikey=' + apikey;

var query;
function complete(q)
{
	
	query=q.value;
	$.ajax({
    url: moviesSearchUrl + '&q=' + encodeURI(query),
    dataType: "jsonp",
    success: searchCallback
  });
}


// callback for when we get back the results
function searchCallback(data) {
	var counter = 0;
 $("#result").html('Found ' + data.total + ' results for ' + query+'<br/>');
 var movies = data.movies;
var out = "";
 $.each(movies, function(index, movie) {
	 if(counter%2==0){
		 
   out+='<div id="result1"><img class="filmImg" src="' + movie.posters.thumbnail + '" width="100px" height="120px;" />'+
   '<h3 class="flimTitle">Title : ' + movie.title + '</h3><br/>'+
    '<h4 class="filmYear">Year : '+ movie.year+' ID : '+
	+movie.id+'</h4><br/><h4>Cast : ';
	if(movie.abridged_cast.length>1){
	out+= movie.abridged_cast[0].name+','+movie.abridged_cast[1].name+', etc.,';
	}
	out+='</h4><br/><b>Rating</b><br/>Audience : '+
	movie.ratings.audience_rating+'||Audience score : '+movie.ratings.audience_score+'||Critics score : '+movie.ratings.critics_score+'</div>';
	
	 }
	 else{
	 out += '<div id="result2"><img class="filmImg" src="' + movie.posters.thumbnail + '" width="100px" height="120px;" />'+
	 '<h3 class="flimTitle">Title : ' + movie.title + '</h3><br/>'+
    '<h4 class="filmYear">Year : '+ movie.year+' ID : '+
	+movie.id+'</h4><br/><h4>Cast : ';
	if(movie.abridged_cast.length>1){
	out+= movie.abridged_cast[0].name+','+movie.abridged_cast[1].name+', etc.,';
	}
	out+='</h4><br/><b>Rating</b><br/>Audience : '+
	movie.ratings.audience_rating+'||Audience score : '+movie.ratings.audience_score+'||Critics score : '+movie.ratings.critics_score+'</div>';
	
	 
	/* '<h3 class="flimTitle">Title : ' + movie.title + '</h3><br/>'+
    '<h4 class="filmYear">Year : '+ movie.year+' ID : '+
	+movie.id+'</h4><br/><h4>Cast : '+ movie.abridged_cast[0].name+','+movie.abridged_cast[1].name+', etc.,</h4><br/><b>Rating</b><br/>Audience : '+
	movie.ratings.audience_rating+'||Audience score : '+movie.ratings.audience_score+'||Critics score : '+movie.ratings.critics_score+'</div>';
	*/
	 }
	 counter++;
	 
 });
 $("#result").append(out);

}
// callback for when we get back the results
/*function searchCallback(data) {
un a6049401 
pw mom

 //$(document.body).append('Found ' + data.total + ' results for ' + query);
	var movies = data.movies;
   //$(document.body).append('<h1>' + movies[0].title + '</h1>');
  // $(document.body).append('<img src="' + movies[0].posters.thumbnail + '" />');
   //$(document.body).append('<h3>'+ movies[0].year+'</h3>')
       //var arr = obj.records;
    
    var out = "";
   
        out += "<h2>Movie Title :" + 
        movies[0].title + 
        "</h2>" +'<img src="'+
        movies[0].posters.thumbnail +
        '" />Year :' +
        movies[0].year +
        "";
    
    //document.getElementById("result").append = out;
	$( ".result" ).append(out);
   count=1;
}
*/
