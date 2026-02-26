# 🔐 Smart Login System  

A simple client-side authentication system built using **HTML, CSS, Bootstrap, and JavaScript**.

This project was created to demonstrate my front-end development skills, including form validation, DOM manipulation, Local Storage handling, and responsive UI design.

> ⚠️ Important: This project is for learning and showcasing front-end skills only. It does NOT include a backend or real authentication security.

---

## 🚀 Features

- User Registration (Sign Up)
- User Login (Sign In)
- Input Validation using Regular Expressions
- Email duplication check
- Password validation (minimum length)
- Store users in Local Storage
- Display logged-in user's name
- Logout functionality
- Responsive modern UI

---

## 🛠️ Technologies Used

- HTML5  
- CSS3  
- JavaScript (Vanilla JS)  
- Bootstrap 4  
- Local Storage API  

---

## 📂 Project Structure

```
Smart-Login-System/
│
├── index.html        (Sign In Page)
├── signUp.html       (Sign Up Page)
├── welcome.html      (Welcome Page)
│
├── css/
│   ├── bootstrap.min.css
│   └── style.css
│
└── js/
    ├── script.js
    ├── jquery-3.5.1.min.js
    └── popper.min.js
```

---

## 🧠 How It Works

### 🔹 Registration
1. User enters name, email, and password.
2. Data is validated using Regular Expressions.
3. If valid and email does not exist → user is stored in `localStorage`.
4. User is redirected to the Sign In page.

### 🔹 Login
1. User enters email and password.
2. System checks stored users in `localStorage`.
3. If match is found → user name is saved as `currentUser`.
4. User is redirected to the welcome page.

### 🔹 Welcome Page
- Displays:
```
Welcome {User Name}
```
- User can logout and return to login page.

---

## ⚠️ Limitations

- Uses Local Storage (not secure for production)
- No backend or database
- No password encryption
- Client-side validation only

This project is built for educational and portfolio purposes only.

---

## 👩‍💻 Author

**Mira Elbasha**  
Front-End Developer  

---

⭐ If you like this project, feel free to star the repository!
