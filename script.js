function generateResume() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;

    const resumeOutput = document.getElementById('resumeOutput');
    
    // Create a simple output
    const outputHTML = `
        <h2>${fullName}</h2>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <h3>Education:</h3>
        <p>${education}</p>
        <h3>Work Experience:</h3>
        <p>${experience}</p>
    `;

    resumeOutput.innerHTML = outputHTML;
}