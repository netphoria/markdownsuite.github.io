const markdownInput = document.getElementById('markdown-input');
const markdownPreview = document.getElementById('markdown-preview');

function updatePreview() {
    const markdownText = markdownInput.value;
    const htmlText = marked(markdownText);
    markdownPreview.innerHTML = htmlText;
}

// Initial preview update
updatePreview();

// Update preview when the user types
markdownInput.addEventListener('input', updatePreview);
