var addedData = JSON.parse(localStorage.getItem("data")) 

console.log(addedData)

addedData.map(function(elem,index){
    var box = document.createElement("div")

    var Imageurl = document.createElement("img")
    Imageurl.src = elem.Image

    var Type = document.createElement("p")
    Type.textContent = elem.Type;

    var Description = document.createElement("p")
    Description.textContent = elem.Description;

    var Price = document.createElement("p")
    Price.textContent = elem.Price;

    var btn = document.createElement("button")
    btn.setAttribute = "remove_product"
    btn.innerText = "Remove"
    btn.addEventListener= ("click",function(){
        removeItem(elem,index)
    })
    box.append(Imageurl,Type,Description,Price,btn)
    document.querySelector("#products_data").append(box)
    
})
function removeItem(elem,index){
    //console.log(elem,index)
    addedData.splice(index,1)
    //console.log(addedData)
    localStorage.setItem("data",JSON.stringify(addedData))
     window.location.reload();
}

