document.getElementById('homeworkForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const middleInitial = document.getElementById('middleInitial').value;
    const lastName = document.getElementById('lastName').value;
    const matriculation = document.getElementById('matriculation').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;

    const namePattern = /^[A-Za-z]+$/;
    const matriculationPattern = /^\d+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!namePattern.test(firstName) || !namePattern.test(lastName) || (middleInitial && !namePattern.test(middleInitial))) {
        alert('Name fields must contain only alphabetic characters.');
        return;
    }

    if (!matriculationPattern.test(matriculation)) {
        alert('Matriculation number must contain only digits.');
        return;
    }

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!feedback.trim()) {
        alert('Feedback cannot be empty.');
        return;
    }

    alert('Form submitted successfully!');
    this.submit();
});
