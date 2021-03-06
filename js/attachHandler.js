const attachInput = document.getElementById('attach');
const attachStyler = document.getElementById('attach-style');
attachInput.addEventListener('change', (event) => {
    const filePath = event.target.value;
    const fileHasBeenAttached = () => filePath != "";
    if(fileHasBeenAttached()) {
        attachStyler.innerText = 'File attached!';
    } else {
        attachStyler.innerText = 'Attach a file';
    }
});

const select = document.querySelector('select[name="subject"]');
select.addEventListener('change', (event) => {
    select.classList.add('selected');
})