//store the products array in localstorage as "data"
document.querySelector("#product_form").addEventListener("submit",submitFunction)
var Data = JSON.parse(localStorage.getItem("data")) || []

function ProductData (T,D,P,I){
    this.Type = T;
    this.Description = D;
    this.Price = P;
    this.Image = I
}

function submitFunction (){
    event.preventDefault()
    var Type = document.querySelector("#product_brand").value
    var Description = document.querySelector("#product_name").value
    var Price = document.querySelector("#product_price").value
    var Image = document.querySelector("#product_image").value

    let dataobj = new ProductData(Type,Description,Price,Image)

    Data.push(dataobj)

    localStorage.setItem("data",JSON.stringify(Data))
    alert("data added")

    Type.value = ""
    Description.value = ""
    Price.value = ""
    Image.value = ""
    
}