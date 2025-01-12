document.getElementById('firstName').addEventListener('input', function () {
    const namePattern = /^[A-Za-z]*$/; // Allows only alphabetic characters
    const firstNameError = document.getElementById('firstNameError');
    
    if (!namePattern.test(this.value)) {
      firstNameError.style.display = 'inline';
    } else {
      firstNameError.style.display = 'none';
    }
  });
  
  document.getElementById('lastName').addEventListener('input', function () {
    const namePattern = /^[A-Za-z]*$/; // Allows only alphabetic characters
    const lastNameError = document.getElementById('lastNameError');
    
    if (!namePattern.test(this.value)) {
      lastNameError.style.display = 'inline';
    } else {
      lastNameError.style.display = 'none';
    }
  });
  
  
  document.getElementById('matriculation').addEventListener('input', function () {
    const matriculationPattern = /^\d+$/;  // Only digits allowed
    const matriculationPatternError = document.getElementById('matriculationPatternError');
    
    // Show error only if the input contains non-numeric characters
    if (this.value !== '' && !matriculationPattern.test(this.value)) {
      matriculationPatternError.style.display = 'inline';
    } else {
      matriculationPatternError.style.display = 'none';
    }
  });

  document.getElementById('email').addEventListener('input', function () {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern
    const emailPatternError = document.getElementById('emailPattern');
    
    // Show error only if the input contains an invalid email format
    if (this.value !== '' && !emailPattern.test(this.value)) {
      emailPatternError.style.display = 'inline';
    } else {
      emailPatternError.style.display = 'none';
    }
  });
