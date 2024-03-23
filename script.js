function validateForm() {
 const firstName = document.getElementById('firstName').value;
 const lastName = document.getElementById('lastName').value;
 const email = document.getElementById('email').value;
 const company = document.getElementById('company').value;
 const interestedIn = document.getElementById('interestedIn').value;
 const jobTitle = document.getElementById('jobTitle').value;
 const hearAbout = document.getElementById('hearAbout').value;
 if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || company.trim() === ''
|| interestedIn.trim() === '' || jobTitle.trim() === '' || hearAbout.trim() === '') {
 alert('Please fill out all required fields.');
 return false;
 }
 return true;
}
