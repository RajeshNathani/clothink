if(localStorage['price'] == 300){
    fetch("https://cors-anywhere.herokuapp.com/https://fashionxapi.herokuapp.com/api/men/shoes/900")
    .then(res=>res.json())
    .then((out)=>{
      for(i=0;i<out.length;i++){
          document.getElementById("sh-im1").src = out[i].image 
          document.getElementById("sh-name1").innerHTML = out[i].name     
          document.getElementById("sh-price1").innerHTML = out[i].price 
          document.getElementById("sh-link1").innerHTML= "<a onclick=window.open('"+out[i].links+"','_self','location=no,hidden=yes,closebuttoncaption=Done,toolbar=no') style='color: #1e87f0; text-align:centre; padding: 2%; width:2vw;'>Shop Now on "+out[i].seller +"</a>"
        }})}
else {
    fetch("https://cors-anywhere.herokuapp.com/https://fashionxapi.herokuapp.com/api/men/shoes/max")
    .then(res=>res.json())
    .then((out)=>{
      for(i=0;i<out.length;i++){
        
          document.getElementById("sh-im1").src = out[i].image 
          document.getElementById("sh-name1").innerHTML = out[i].name      
          document.getElementById("sh-price1").innerHTML = out[i].price 
          document.getElementById("sh-link1").innerHTML= "<a onclick=window.open('"+out[i].links+"','_self','location=no,hidden=yes,closebuttoncaption=Done,toolbar=no') style='color: #1e87f0; text-align:centre; padding: 2%; width:2vw;'>Shop Now on "+out[i].seller +"</a>"

    }})}