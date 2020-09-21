if(localStorage['price'] == 300){
    fetch("https://cors-anywhere.herokuapp.com/https://fashionxapi.herokuapp.com/api/men/trouser/500")
    .then(res=>res.json())
    .then((out)=>{
          document.getElementById("t-im1").src = out[0].image 
          document.getElementById("t-name1").innerHTML = out[0].name
          document.getElementById("t-price1").innerHTML = out[i].price
          document.getElementById("t-link1").innerHTML= "<a onclick=window.open('"+out[i].links+"','_self','location=no,hidden=yes,closebuttoncaption=Done,toolbar=no') style='color: #1e87f0; text-align:centre; padding: 2%; width:2vw;'>Shop Now on "+out[i].seller +"</a>"
    })}

else{
        fetch("https://cors-anywhere.herokuapp.com/https://fashionxapi.herokuapp.com/api/men/trouser/500")
        .then(res=>res.json())
        .then((out)=>{
              document.getElementById("t-im1").src = out[0].image 
              document.getElementById("t-name1").innerHTML = out[0].name
              document.getElementById("t-price1").innerHTML = out[i].price
              document.getElementById("t-link1").innerHTML= "<a onclick=window.open('"+out[i].links+"','_self','location=no,hidden=yes,closebuttoncaption=Done,toolbar=no') style='color: #1e87f0; text-align:centre; padding: 2%; width:2vw;'>Shop Now on "+out[i].seller +"</a>"

        })}