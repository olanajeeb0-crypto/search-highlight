import React, { useState } from 'react';

// Sample data
const articles = [
  {
    id: 1,
    title: "Understanding the difference between grid-template and grid-auto",
    date: "Oct 09, 2018",
    content:
      "With all the new properties related to CSS Grid Layout, one of the distinctions that always confused me was the difference between the grid-template-* and grid-auto-* properties. Specifically the difference between grid-template-rows/columns and grid-auto-rows/columns. Although I knew they were to d...",
  },
  {
    id: 2,
    title: "Recreating the GitHub Contribution Graph with CSS Grid Layout",
    date: "Nov 12, 2018",
    content:
      "In this article, we’ll recreate the GitHub contribution graph using only CSS Grid Layout and a bit of JavaScript to make it dynamic...",
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox: When to Use Which",
    date: "Jan 20, 2019",
    content:
      "Both CSS Grid and Flexbox are powerful layout modules. In this article, we’ll discuss when you should use Grid and when Flexbox makes more sense...",
  },
];

// Function to highlight search term
function highlightText(text, query) {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, 'gi');
  return text.split(regex).map((part, i) =>
    regex.test(part) ? <mark key={i}>{part}</mark> : part
  );
}

const App = () => {
  const [search, setSearch] = useState("");

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(search.toLowerCase()) ||
      article.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ maxWidth: "800px", margin: "auto", fontFamily: "Arial" }}>
      <h2>Search</h2>
      <input
        type="text"
        placeholder="Type to search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "20px" }}
      />

      <p>{filteredArticles.length} posts were found.</p>

      {filteredArticles.map((article) => (
        <div key={article.id} style={{ marginBottom: "30px" }}>
          <h3>{highlightText(article.title, search)}</h3>
          <em>{article.date}</em>
          <p>{highlightText(article.content, search)}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
