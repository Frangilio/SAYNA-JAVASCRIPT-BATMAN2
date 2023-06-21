
$(document).ready(function () {

    //DEFINITION DES INDEPENDANTE AU QUIZZ

    //Click sur le bouton demarrer le quizz
    $('#demarrer').click(function () {
        $('#quiz-box').slideDown(1000);
        $('#entete').slideUp(2000);



        $.ajax({
            url: './assets/json/questions.json',
            datatype: 'json',
            success: (questions) => {

                //DECLARATION DES VARIABLES LOCALE
                let totalPoint = 0;
                let currentQuiz = 0;
                let totalQuiz = questions.length;

                $('#total').text(totalQuiz);

                $('#img-illustrate').attr("src", "./assets/Illustrations_game/Batgame_" + (3 + currentQuiz) + ".png");
                $('#current-question').text(currentQuiz + 1);
                $('#question-quizz').empty();
                $('#question-quizz').append("<p class='question' id='question'></p>");
                $('#question').text(questions[currentQuiz].question);
                console.log(questions)
                for (let i = 0; i < questions[currentQuiz].response.length; i++) {
                    $('#choisirReponse').append("<div class='qcm' id='qcm"+ i + "'></div>");
                    $('#qcm'+i).append("<input type='checkbox' name='choix' id='checkbox" + i + "'>");
                    $('#qcm'+i).append("<label for='checkbox" + i + "' class='response' id='" + i + "'>"+ questions[currentQuiz].response[i].text + "</label>");
        
                    // $('#' + i).append("<p id='response" + i + "'>" + questions[currentQuiz].response[i].text + "</p>");
                }
                $('#qcm').append("<span id='error-message'></span>");

            },
            error: function (questions) {
                console.log(questions);
            }
        });

    });

    function setFormulaire(question, response, nbreQuiz) {
        $('#img-illustrate').attr("src", "./assets/Illustrations_game/Batgame_" + (3 + nbreQuiz) + ".png");
        $('#current-question').text(nbreQuiz);
        $('#question-quizz').empty();
        $('#question-quizz').append("<p class='question' id='question'></p>");
        $('#question').text(question);
        for (let i = 0; i < response.length; i++) {
            $('#qcm').append("<label for='checkbox" + i + "' class='response' id='" + i + "'></label>");
            $('#' + i).append("<input type='checkbox' name='choix' id='checkbox" + i + "'>");
            $('#' + i).append("<p id='response" + i + "'>" + response[i].text + "</p>");
        }
        $('#qcm').append("<span id='error-message'></span>");
    }

    function isChooseResponse(questions, currentQuiz) {
        //Variable Locale
        let notChoose = true;
        let userResponse = false;

        for (let i = 0; i < questions[currentQuiz].response.length; i++) {
            if ($('#checkbox' + i).is(":checked")) {
                notChoose = false;
                userResponse = questions[currentQuiz].response[i].isGood;
                console.log(questions[currentQuiz].response[i].isGood);
            }
        }

        if (notChoose) {
            $('#error-message').css("color", "red").text("Choisissez une reponse");
            return [false, userResponse];
        } else {
            return [true, userResponse];
        }
    }

    //Fin bouton demarrer

    //Effet scroll
    $('#top-arrow').click(function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    $('#down-arrow').click(function () {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });




});


