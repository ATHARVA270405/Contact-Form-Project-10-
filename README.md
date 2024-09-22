# Contact Form Project
## Project Overview
This is a responsive **Contact Form** web application designed to allow users to submit their contact information, including their name, email, phone number, and a message. Upon form submission, the data is stored temporarily in the browser's `localStorage`, and the user is redirected to a submission success page.
## Features
- **Responsive Design:** The contact form is fully responsive and works well on both desktop and mobile devices.
- **Form Validation:** The form ensures that all fields are filled before allowing submission.
- **LocalStorage:** The user's form data is temporarily stored in `localStorage` to simulate the behavior of saving data.
- **Redirection:** After successful submission, the user is redirected to a "Submission Successful" page with a confirmation message.
- **Clear UI/UX:** Clean and simple design that provides an easy and intuitive user experience.
- ## Technologies Used
- **HTML5**
- **CSS3**
- **JavaScript (ES6)**
- ## Project Structure
The project consists of two main pages:
**Contact Form Page (contact.html)**
   - Contains the contact form with fields for Name, Email, Phone, and Message.
   - Submits data and checks if all fields are filled.
   - Stores the form data into `localStorage` and redirects to the success page.
   
2. **Submission Successful Page (submitted.html)**
   - Displays a message confirming that the form submission was successful.
   - Includes a button to navigate back to the contact form.

## Code Explanation
### 1. Contact Form Page
The contact form is built using HTML and styled with CSS to ensure responsiveness. A simple JavaScript function captures the input data and stores it in the browser's `localStorage`. It then redirects to the submission success page.
