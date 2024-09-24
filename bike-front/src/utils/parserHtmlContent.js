export function parserHtmlContent(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const headings = Array.from(doc.querySelectorAll("h3")).map((heading) =>
    heading.textContent.trim()
  );
  const descriptions = Array.from(
    doc.querySelectorAll("p.has-small-font-size")
  ).map((p) => p.textContent.trim());
  const images = Array.from(doc.querySelectorAll("img")).map((image) => {
    const src = image.getAttribute("src") || "";
    const alt = image.getAttribute("alt") || "image";
    return { src, alt };
  });

  const data = [];
  for (let i = 0; i < headings.length; i++) {
    data.push({ type: "heading", content: headings[i] });
    data.push({ type: "description", content: [descriptions[i], images[i]] });
  }

  return data;
}
