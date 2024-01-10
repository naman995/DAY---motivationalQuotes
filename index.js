function fetchQuote() {
  fetch(" https://api.quotable.io/random?tags=technology")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("result").innerHTML =
        `<code class = "text-white">&#8220</code>` +
        data.content +
        `<code class = "text-white">&#8221 </code>`;

      document.getElementById("author").innerHTML =
        `<code class="text-white">&#8212; </code>` +
        data.author +
        `<code class="text-white"> &#8212; </code>`;
    });
}
fetchQuote();
setInterval(fetchQuote, 30000);
