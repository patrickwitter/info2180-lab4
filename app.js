$(document).ready(function () {
    // console.log("Doc loaded");
    $('#Searchbtn').click(function () {

        fetch('./superheroes.php')
            .then(response => response.text())
            .then(data => {
                alert(data);
            })
            .catch(err => console.log(err))

    });
});
