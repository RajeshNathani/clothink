if(localStorage['price'] == 300){
    fetch("https://cors-anywhere.herokuapp.com/https://fashionxapi.herokuapp.com/api/men/tshirts/300")
    .then(res=>res.json())
    .then((out)=>{
        for(i=0;i<out.length;i++){
        if(out[i].name.includes(localStorage['color'])){
          document.getElementById("im1").src = out[i].image
          document.getElementById("name1").innerHTML = out[i].name
          document.getElementById("price1").innerHTML = out[i].price
          document.getElementById("link1").innerHTML= "<a onclick=window.open('"+out[i].links+"','_self','location=no,hidden=yes,closebuttoncaption=Done,toolbar=no') style='color: #1e87f0; text-align:centre; padding: 2%; width:2vw;'>Shop Now on "+out[i].seller +"</a>"
          break;
    }
    else{
        document.getElementById("im1").src = out[i].image
          document.getElementById("name1").innerHTML = out[i].name
          document.getElementById("price1").innerHTML = out[i].price
          document.getElementById("link1").innerHTML= "<a onclick=window.open('"+out[i].links+"','_self','location=no,hidden=yes,closebuttoncaption=Done,toolbar=no') style='color: #1e87f0; text-align:centre; padding: 2%; width:2vw;'>Shop Now on "+out[i].seller +"</a>"
 
    }
}})
}
else if(localStorage['price'] == 500){
    fetch("https://cors-anywhere.herokuapp.com/https://fashionxapi.herokuapp.com/api/men/tshirts/500")
    .then(res=>res.json())
    .then((out)=>{
        for(i=0;i<out.length;i++){
            if(out[i].name.includes(localStorage['color'])){
          document.getElementById("im1").src = out[i].image
          document.getElementById("name1").innerHTML = out[i].name
          document.getElementById("price1").innerHTML = out[i].price
          document.getElementById("link1").innerHTML= "<a onclick=window.open('"+out[i].links+"','_self','location=no,hidden=yes,closebuttoncaption=Done,toolbar=no') style='color: #1e87f0; text-align:centre; padding: 2%; width:2vw;'>Shop Now on "+out[i].seller +"</a>"

        break;
         }
        else{
            document.getElementById("im1").src = out[i].image
          document.getElementById("name1").innerHTML = out[i].name
          document.getElementById("price1").innerHTML = out[i].price 
          document.getElementById("link1").innerHTML= "<a onclick=window.open('"+out[i].links+"','_self','location=no,hidden=yes,closebuttoncaption=Done,toolbar=no') style='color: #1e87f0; text-align:centre; padding: 2%; width:2vw;'>Shop Now on "+out[i].seller +"</a>"

        }
        } })
}
else if(localStorage['price'] == 'Max'){
    fetch("https://cors-anywhere.herokuapp.com/https://fashionxapi.herokuapp.com/api/men/tshirts/max")
    .then(res=>res.json())
    .then((out)=>{
        for(i=0;i<out.length;i++){
            if(out[i].name.includes(localStorage['color'])){
          document.getElementById("im1").src = out[i].image
          document.getElementById("name1").innerHTML = out[i].name
          document.getElementById("price1").innerHTML = out[i].price
          document.getElementById("link1").innerHTML= "<a onclick=window.open('"+out[i].links+"','_self','location=no,hidden=yes,closebuttoncaption=Done,toolbar=no') style='color: #1e87f0; text-align:centre; padding: 2%; width:2vw;'>Shop Now on "+out[i].seller +"</a>"

                break;
    }
else{
    document.getElementById("im1").src = out[i].image
          document.getElementById("name1").innerHTML = out[i].name
          document.getElementById("price1").innerHTML = out[i].price 
          document.getElementById("link1").innerHTML= "<a onclick=window.open('"+out[i].links+"','_self','location=no,hidden=yes,closebuttoncaption=Done,toolbar=no') style='color: #1e87f0; text-align:centre; padding: 2%; width:2vw;'>Shop Now on "+out[i].seller +"</a>"

}
}})
}