function myFunction() {
    var first_number = Number(document.getElementById("fnumber").value)
    var last_number = Number(document.getElementById("snumber").value)
    
    var sum = first_number + last_number
    document.getElementById("soma").innerHTML = sum
}