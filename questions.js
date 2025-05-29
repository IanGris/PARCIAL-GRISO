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
    // Mostrar respuestas en el DOM
    const responsesDiv = document.getElementById('responses');
    responsesDiv.innerHTML = `
        <p><strong>Nacionalidad:</strong> ${answers[0]}</p>
        <p><strong>Color favorito:</strong> ${answers[1]}</p>
        <p><strong>Nombre de tu mascota:</strong> ${answers[2]}</p>
    `;
    document.getElementById('questionsContainer').classList.remove('hidden');
}