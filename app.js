
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
                resSection.append(result);
            })
            .catch(err => console.log(err))


    });
});


// "use strict"

// $(document).ready(function () {
//     console.log("Doc loaded");
//     $('#Searchbtn').click(function (e) {
//         e.preventDefault();
//         console.log("Clicked");

//         let inputTxt = $('#formInput').val().trim().replace(/[^a-z0-9áéíóúñü \.,_-]/gim, "");

//         $('#result').html("");

//         fetch(`./superheroes.php?query=${inputTxt}`)
//             .then(response => response.text())
//             .then(data => {
//                 $('#result').append(data);
//             })
//             .catch(err => console.error(err))

//     });
// });