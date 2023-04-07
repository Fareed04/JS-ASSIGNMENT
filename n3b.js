let catalogue = [
    {
        "item-name" : "plain tee",
        "price" : "300",
    },
    {
        "item-name" : "cap",
        "price" : "350",
    },
    {
        "item-name" : "plain cargo",
        "price" : "500",
    },
    {
        "item-name" : "graphic tee",
        "price" : "650",
    },
    {
        "item-name" : "suede cargo",
        "price" : "550",
    },
    {
        "item-name" : "rockstar cargo",
        "price" : "700",
    },
    {
        "item-name" : "leather jacket",
        "price" : "700",
    },
    {
        "item-name" : "sock",
        "price" : "200",
    },
    {
        "item-name" : "plain white tee",
        "price" : "300",
    },
    {
        "item-name" : "plain black tee",
        "price" : "400",
    },
]
function payForProduct(cash) {
    let payment = prompt("Pay for Product, enter cash amount")
    if (payment == 200 || payment == 500 || payment == 1000){
        if (payment > cash || payment == cash) {
            alert(`Purchase Complete, balance of ${payment - cash}`)
        }
        else{
            alert("Purchased Declined,Insufficient Amount")
        }
    }
}
function initaiteSearch() {
    let itemToSearch = prompt("What do you want to buy??").toLowerCase()
    for (i=0; i<=catalogue.length-1;i++){
        let item = catalogue[i]
        if(item["item-name"].includes(itemToSearch) || itemToSearch.includes(item["item-name"])){
            alert("wow")
            return item
        }
    }
}
function WelcomeToOurStore(){
    let available = initaiteSearch();
    if (typeof(available) == "object"){
        let proceede = confirm(`We have ${available["item-name"]}s!!, They go for #${available.price}\nProccede to Payment?`)
            if (proceede == true){
                    payForProduct(available.price)
            }
            else{
                WelcomeToOurStore
            }
        }
    else{
        let searchAgain = confirm("Item not currently available\nClick OK to search again or click CANCEL to leave")
        if(searchAgain == true){
            WelcomeToOurStore()
        }
        else{
            alert("Thanks for shopping with us!!\nWe anticipate your return\nHave a Nice day!!")
        }
    }
}
alert("Good Morning")
alert("Welcome to our store!, we sell merch!!!")
WelcomeToOurStore();
 