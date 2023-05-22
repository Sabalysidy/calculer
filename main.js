function calculer() {
    // Somme
    var number1 = parseFloat(document.getElementById("number1").value);
    console.log("test", number1);
    var number2 = parseFloat(document.getElementById("number2").value);
    //Afficher le resultat
    const somme = number1 + number2;
    document.getElementById("somme").value = somme;
    // Soustration
    var number1 = parseFloat(document.getElementById("number3").value);
    var number2 = parseFloat(document.getElementById("number4").value);
    //Afficher le resultat
    const soustraction = number1 - number2;
    document.getElementById("soustraction").value = soustraction;
    // Multiplication
    var number1 = parseFloat(document.getElementById("number5").value);
    var number2 = parseFloat(document.getElementById("number6").value);
    //Afficher le resultat
    const multiplication = number1 * number2;
    document.getElementById("multiplication").value = multiplication;
    // Division
    var number1 = parseFloat(document.getElementById("number7").value);
    var number2 = parseFloat(document.getElementById("number8").value);
    //Afficher le resultat
    const division = number1 / number2;
    document.getElementById("division").value = division;
}