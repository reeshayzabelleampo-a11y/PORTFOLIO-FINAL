// Toggle for section titles
document.querySelectorAll('.section-title').forEach(title => {
    title.addEventListener('click', () => {
        const content = title.nextElementSibling;

        // Toggle visible/hidden
        content.style.display = 
            content.style.display === 'block' ? 'none' : 'block';
    });
});

// Toggle for favorite buttons
document.querySelectorAll('.fav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;

        content.style.display =
            content.style.display === 'block' ? 'none' : 'block';
    });
});

// Sign out
document.getElementById("signOut").addEventListener("click", function () {
    localStorage.removeItem("loggedIn");
    window.location.href = "signin.html";
});

