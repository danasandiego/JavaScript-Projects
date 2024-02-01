function my_Dictionary(){
    var Cake = {
        Flavor: "Chocolate",
        Icing: "Buttercream",
        Color: "Pink",
        Layers: 5,
        Theme: "Barbie"
    };
    delete Cake.Flavor; //deletes the Flavor KVP before it is displayed.
    document.getElementById("Dictionary").innerHTML = Cake.Flavor;
}