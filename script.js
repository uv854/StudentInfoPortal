function showData() {
    var name = document.getElementById("name").value;
    var roll = document.getElementById("roll").value;
    var branch = document.getElementById("branch").value;
    var year = document.getElementById("year").value;

    document.getElementById("output").innerHTML =
        "Name: " + name + "<br>" +
        "Roll No: " + roll + "<br>" +
        "Branch: " + branch + "<br>" +
        "Year: " + year;
}
