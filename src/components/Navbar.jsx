import React from "react";

export default function Navbar() {
  return (
    <header className="navbar">
      <div>
        <h1>OpenAI Image Generator</h1>
      </div>
      <div>
        <ul>
          <li>
            <h3>
              <a href="https://beta.openai.com/docs" target="_blank">
                OpenAI API Docs
              </a>
            </h3>
          </li>
        </ul>
      </div>
    </header>
  );
}
