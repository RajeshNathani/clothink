if(localStorage['price'] == 300){
    fetch("https://cors-anywhere.herokuapp.com/https://fashionxapi.herokuapp.com/api/women/footwear")
    .then(res=>res.json())
    .then((out)=>{
      for(i=0;i<out.length;i++){
        if(out[i].name.includes(localStorage['color']) && parseInt(out[i].price.slice(1))<=300){
          document.getElementById("sh-im1").src = out[i].image 
          document.getElementById("sh-name1").innerHTML = out[i].name       
          document.getElementById("sh-price1").innerHTML = out[i].price
          document.getElementById("sh-link1").innerHTML= "<a onclick=window.open('"+out[i].links+"','_self','location=no,hidden=yes,closebuttoncaption=Done,toolbar=no') style='color: #1e87f0; text-align:centre; padding: 2%; width:2vw;'>Shop Now on "+out[i].seller +"</a>"

          break;
     }
     else{
      document.getElementById("sh-im1").src = out[0].image 
          document.getElementById("sh-name1").innerHTML = out[0].name       
          document.getElementById("sh-price1").innerHTML = out[i].price 
          document.getElementById("sh-link1").innerHTML= "<a onclick=window.open('"+out[i].links+"','_self','location=no,hidden=yes,closebuttoncaption=Done,toolbar=no') style='color: #1e87f0; text-align:centre; padding: 2%; width:2vw;'>Shop Now on "+out[i].seller +"</a>"

    }
    }
   })
}
if(localStorage['price'] == 500){
  fetch("https://cors-anywhere.herokuapp.com/https://fashionxapi.herokuapp.com/api/women/footwear")
  .then(res=>res.json())
  .then((out)=>{
    for(i=0;i<out.length;i++){
      if(out[i].name.includes(localStorage['color']) && parseInt(out[i].price.slice(1))<=500){
        document.getElementById("sh-im1").src = out[i].image 
        document.getElementById("sh-name1").innerHTML = out[i].name       
        document.getElementById("sh-price1").innerHTML = out[i].price
        document.getElementById("sh-link1").innerHTML= "<a onclick=window.open('"+out[i].links+"','_self','location=no,hidden=yes,closebuttoncaption=Done,toolbar=no') style='color: #1e87f0; text-align:centre; padding: 2%; width:2vw;'>Shop Now on "+out[i].seller +"</a>"

        break;
   }
   else{
    document.getElementById("sh-im1").src = out[0].image 
        document.getElementById("sh-name1").innerHTML = out[0].name       
        document.getElementById("sh-price1").innerHTML = out[i].price 
        document.getElementById("sh-link1").innerHTML= "<a onclick=window.open('"+out[i].links+"','_self','location=no,hidden=yes,closebuttoncaption=Done,toolbar=no') style='color: #1e87f0; text-align:centre; padding: 2%; width:2vw;'>Shop Now on "+out[i].seller +"</a>"

  }
  }
 })
}
else{
    fetch("https://cors-anywhere.herokuapp.com/https://fashionxapi.herokuapp.com/api/women/footwear")
    .then(res=>res.json())
    .then((out)=>{
      for(i=0;i<out.length;i++){
        if(out[i].name.includes(localStorage['color']) && parseInt(out[i].price.slice(1))>=500){
          document.getElementById("sh-im1").src = out[i].image 
          document.getElementById("sh-name1").innerHTML = out[i].name       
          document.getElementById("sh-price1").innerHTML = out[i].price
          document.getElementById("sh-link1").innerHTML= "<a onclick=window.open('"+out[i].links+"','_self','location=no,hidden=yes,closebuttoncaption=Done,toolbar=no') style='color: #1e87f0; text-align:centre; padding: 2%; width:2vw;'>Shop Now on "+out[i].seller +"</a>"

          break;
     }
     else{
      if(out[i].name.includes(localStorage['color']) || parseInt(out[i].price.slice(1))>=500){
      document.getElementById("sh-im1").src = out[0].image 
          document.getElementById("sh-name1").innerHTML = out[0].name       
          document.getElementById("sh-price1").innerHTML = out[i].price 
          document.getElementById("sh-link1").innerHTML= "<a onclick=window.open('"+out[i].links+"','_self','location=no,hidden=yes,closebuttoncaption=Done,toolbar=no') style='color: #1e87f0; text-align:centre; padding: 2%; width:2vw;'>Shop Now on "+out[i].seller +"</a>"

    }}
    }
   })

}