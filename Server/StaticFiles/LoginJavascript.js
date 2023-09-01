    // Function to toggle password visibility
    function togglePasswordVisibility() {
      const passwordInput = document.getElementById("password");
      const passwordToggle = document.getElementById("passwordToggle");

      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordToggle.innerHTML = "&#128064;"; // Show the eye slash icon
      } else {
        passwordInput.type = "password";
        passwordToggle.innerHTML = "&#128065;"; // Show the eye icon
      }
    }

     // // JavaScript to add event listeners to track visited (focused) textboxes
 // const textboxes = document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');
 // textboxes.forEach((textbox) => {
 //   textbox.addEventListener('focus', () => {
 //     textbox.classList.add('visited');
 //   });

 //   textbox.addEventListener('blur', () => {
 //     textbox.classList.remove('visited');
 //     if (!textbox.value.trim()) {
 //       textbox.classList.add('highlight-visited');
 //     }
 //   });
 // });


