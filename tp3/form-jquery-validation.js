



$(document).ready(function () {
 
   
    $("#button").click(function (event) {

        event.preventDefault();

    
        if (($("#nom").val() && $("#prenom").val() && $("#date").val() && $("#adresse").val() && $("#email").val()) != "") {


            $('#myModal').modal({ show: true })
            $(".modal-title").text("Bienvenue " + $("#prenom").val());

            var city = $("#adresse").val();
            var date = $("#date").val();

            $(".modal-body").html(`Vous êtes nés ${date} et vous habitez :
            <a class="link"  href="http://maps.google.com/maps?" > <img src="https://www.google.com/maps/place/Villetaneuse/@48.9573987,2.3265919,14z/data=!3m1!4b1!4m5!3m4!1s0x47e6691385571dad:0x7a8d68a0877a83f9!8m2!3d48.9609899!4d2.3459158"/> Lien </a>`);

        } else {

            $('#myModal').modal({ show: true })
            $(".modal-body").html('Veuillez remplir tous les champs svp');

        }
    });