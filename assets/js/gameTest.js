$(document).ready(function(){
    const demarrer = document.getElementById('demarrer');
    const nextButton = document.getElementById('question-suivante');

    demarrer.addEventListener('click', (e) => {
        e.preventDefault;
        showQestions();
        $.ajax({
            url: 'https://batman-api.sayna.space/questions',
            datatype: 'json',
            success: function(quizz){
                for (let i = 0; i < quizz.length; i++) {
                    console.log(quizz[i].response);
                }
            },
            error: function(){
                console.log('Probleme au niveau du serveur _ L\'API ');
            },
        });
    });
});

function showQestions() {
    const question = document.getElementById('question');
    question.style.display = 'block';
    const demarrer = decument.getElementById('entete');
    demarrer.style.display = 'none';
    $('#question-suivante').show();
}