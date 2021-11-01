
"use strict"
$(document).ready(function () {

    let resSection = $("#result");
    resSection.html("");

    $('#Searchbtn').click(function (e) {
        e.preventDefault();
        let searchTxt = $('#formInput').val().trim().replace(/[^a-z0-9áéíóúñü \.,_-]/gim, "");
        console.log(searchTxt);

        fetch(`./superheroes.php?query=${searchTxt}`)
            .then(response => response.text())
            .then(result => {
                resSection.html("");
                resSection.append(result);
            })
            .catch(err => console.log(err))


    });
});

