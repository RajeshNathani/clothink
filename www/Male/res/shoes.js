if(localStorage['price'] == 300 || localStorage['price'] == 500){
  fetch("https://cors-anywhere.herokuapp.com/https://fashionxapi.herokuapp.com/api/men/shoes/900")
  .then(res=>res.json())
  .then((out)=>{
    for(i=0; i<out.length; i++){
      document.getElementById("grid").innerHTML += "<div class= 'uk-card uk-card-default uk-card-body' id='t"+ i + "'>"
      +"<img src= '" + out[i].image + "'>"
      +"<p>"+out[i].price
      +"<br><a onclick=window.open('"+out[i].links+"','_self','location=no,hidden=yes,closebuttoncaption=Done,toolbar=no') style='color: #1e87f0; text-align:centre; padding: 2%; width:2vw;'>Shop Now on "+out[i].seller +"</a>"
      "</div>"
    }
  })
}
else if(localStorage['price'] == "Max"){
  fetch("https://cors-anywhere.herokuapp.com/https://fashionxapi.herokuapp.com/api/men/shoes/max")
  .then(res=>res.json())
  .then((out)=>{
    for(i=0; i<out.length; i++){
      document.getElementById("grid").innerHTML += "<div class= 'uk-card uk-card-default uk-card-body' id='t"+ i + "'>"
      +"<img src= '" + out[i].image + "'>"
      +"<p>"+out[i].price
      +"<br><a onclick=window.open('"+out[i].links+"','_self','location=no,hidden=yes,closebuttoncaption=Done,toolbar=no') style='color: #1e87f0; text-align:centre; padding: 2%; width:2vw;'>Shop Now on "+out[i].seller +"</a>"
      "</div>"
    }
  })
}