if(localStorage['price'] == 300){
    fetch("https://cors-anywhere.herokuapp.com/https://fashionxapi.herokuapp.com/api/men/shirts/500")
    .then(res=>res.json())
    .then((out)=>{
      for(i=0;i<out.length;i++){
        if(out[i].name.includes(localStorage['color'])){
          document.getElementById("s-im1").src = out[i].image 
          document.getElementById("s-name1").innerHTML = out[i].name    
          document.getElementById("s-price1").innerHTML = out[i].price
          document.getElementById("s-link1").innerHTML= "<a onclick=window.open('"+out[i].links+"','_self','location=no,hidden=yes,closebuttoncaption=Done,toolbar=no') style='color: #1e87f0; text-align:centre; padding: 2%; width:2vw;'>Shop Now on "+out[i].seller +"</a>"

          break;
        }
      else{
        document.getElementById("s-im1").src = out[0].image 
        document.getElementById("s-name1").innerHTML = out[0].name       
        document.getElementById("s-price1").innerHTML = out[i].price
        document.getElementById("s-link1").innerHTML= "<a onclick=window.open('"+out[i].links+"','_self','location=no,hidden=yes,closebuttoncaption=Done,toolbar=no') style='color: #1e87f0; text-align:centre; padding: 2%; width:2vw;'>Shop Now on "+out[i].seller +"</a>"

      }
      }})}

else{
    fetch("https://cors-anywhere.herokuapp.com/https://fashionxapi.herokuapp.com/api/men/shirts/max")
    .then(res=>res.json())
    .then((out)=>{
      for(i=0;i<out.length;i++){
        if(out[i].name.includes(localStorage['color'])){
          document.getElementById("s-im1").src = out[i].image 
          document.getElementById("s-name1").innerHTML = out[i].name       
          document.getElementById("s-price1").innerHTML = out[i].price
          document.getElementById("s-link1").innerHTML= "<a onclick=window.open('"+out[i].links+"','_self','location=no,hidden=yes,closebuttoncaption=Done,toolbar=no') style='color: #1e87f0; text-align:centre; padding: 2%; width:2vw;'>Shop Now on "+out[i].seller +"</a>"

          break;
     }
     else{
      document.getElementById("s-im1").src = out[0].image 
          document.getElementById("s-name1").innerHTML = out[0].name       
          document.getElementById("s-price1").innerHTML = out[i].price 
          document.getElementById("s-link1").innerHTML= "<a onclick=window.open('"+out[i].links+"','_self','location=no,hidden=yes,closebuttoncaption=Done,toolbar=no') style='color: #1e87f0; text-align:centre; padding: 2%; width:2vw;'>Shop Now on "+out[i].seller +"</a>"

    }
    }
   })}