


var fetch = function () {
    $.ajax({
      method: "GET",
      url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
   
      success: function(data) {
        console.log(data);
        addBook(data);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus);
      }
    }); 
  };




var addBook = function(data){
 
//create book
var bookPost = "<div class='display-book'><h2 class='book-title'>" + data.items[0].volumeInfo.title + "</h2><br><p class='description'>"  + data.items[0].volumeInfo.description + "</p><br>" +  "<h3>Written by: " +  data.items[0].volumeInfo.authors[0] + "</h3><br>" + "<img src='"  + data.items[0].volumeInfo.imageLinks.smallThumbnail + "'>" + "</div>"
//append book
$(".book-list").append(bookPost);
}



$('.add-isbn').on('click', fetch);



  //data.items[0].volumeInfo.title
  //data.items[0].volumeInfo.authors[0]
  //data.items[0].volumeData.description
  //data.items[0].volumeData.imageLinks