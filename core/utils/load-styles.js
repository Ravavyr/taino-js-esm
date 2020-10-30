export async function loadStyles(stylesheets) {
  let arr = await Promise.all(stylesheets.map((url) => fetch(url)));
  arr = await Promise.all(arr.map((url) => url.text()));
  const style = document.createElement("style");
  style.textContent = arr.reduce(
    (prev, fileContents) => prev + fileContents,
    ""
  );
  document.head.appendChild(style);
}
