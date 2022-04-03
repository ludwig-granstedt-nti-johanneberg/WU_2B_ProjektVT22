const form = document.getElementById('contact-form') as HTMLFormElement;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title-input') as HTMLInputElement;
    const email = document.getElementById('email-input') as HTMLInputElement;
    const message = document.getElementById('message-input') as HTMLTextAreaElement;

    title.value = '';
    email.value = '';
    message.value = '';

    alert("Message sent!");
});