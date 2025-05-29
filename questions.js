// This file contains the JavaScript function to handle progressive questions for the registration form.

export function askQuestions() {
    const questions = [
        '¿Cuál es tu nacionalidad?',
        '¿Cuál es tu color favorito?',
        '¿Cómo se llama tu mascota?'
    ];
    const answers = [];
    for (let i = 0; i < questions.length; i++) {
        const answer = prompt(questions[i]);
        answers.push(answer);
    }
    const responsesDiv = document.getElementById('responses');
    responsesDiv.innerHTML = `
        <div class="form-group"><label>Nacionalidad:</label><input type="text" value="${answers[0] || ''}" readonly></div>
        <div class="form-group"><label>Color favorito:</label><input type="text" value="${answers[1] || ''}" readonly></div>
        <div class="form-group"><label>Nombre de tu mascota:</label><input type="text" value="${answers[2] || ''}" readonly></div>
    `;
    document.getElementById('questionsContainer').style.display = 'block';
}
