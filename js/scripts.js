$(document).ready(function() {
  $("#form").submit(function(event){
    event.preventDefault();

    const fav1 = $("#favorites1").val();
    const words = fav1.split(' ');
    const result = words.filter(word =>word.length >= 3);
    const reversed = result.reverse();
    let joinedUp = reversed.join(" ");

    

    console.log(joinedUp);


    $("p").append(joinedUp);

  });
}); 


// The quick brown fox jumps over the lazy dog
