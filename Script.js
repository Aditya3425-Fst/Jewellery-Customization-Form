document.getElementById('outfitImage').addEventListener('change', function (event) {
    const preview = document.getElementById('outfitPreview');
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        preview.src = e.target.result;
        preview.style.display = 'block';
    }

    if (file) {
        reader.readAsDataURL(file);
    }
});

document.getElementById('jewelleryForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // Add form validation logic here if needed
    alert('Form submitted successfully!');
});
