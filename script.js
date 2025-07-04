document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault(); // prevent form reload

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !email) {
    alert("Error: Both fields are required.");
  } else if (!email.includes("@")) {
    alert("Error: Invalid email.");
  } else {
    alert(`Success! Name: ${name}, Email: ${email}`);
  }
});
