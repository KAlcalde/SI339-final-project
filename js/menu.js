let adding_sandwich = false;

document.querySelector("#add-sandwich").addEventListener("click", function() {
    console.log("Add Sandwhich Button Clicked!");

    if(this.clicked){
        adding_sandwich = !adding_sandwich;
    }

    if (!adding_sandwich){
        console.log("adding-sandwich" + adding_sandwich)
        document.querySelector("#sandwich-form").style.display = "block";
        this.value = "Hide Sandwich"
        adding_sandwich = true;
    }
    else{
        console.log("adding-sandwich" + adding_sandwich)
        adding_sandwich = false;
        document.querySelector("#sandwich-form").style.display = "none";
        this.value = "Add Sandwich"
    }

});
