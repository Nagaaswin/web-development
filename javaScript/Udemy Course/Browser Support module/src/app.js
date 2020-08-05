const button = document.querySelector('button');
const textParagraph = document.querySelector('p');

button.addEventListener('click', () => {
  const promise = new Promise();
  if (navigator.clipboard) {
    const text = textParagraph.textContent;

    navigator.clipboard.writeText(text).then((result) => {
      console.log(result);
    });
  } else {
    alert('This is feature is not available ');
  }
});
