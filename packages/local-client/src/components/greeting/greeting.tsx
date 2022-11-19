/** @format */

import React, { useState, useEffect } from 'react';
import './greeting.css';

const Greeting = () => {
  const [isDocs, setIsDocs] = useState(false);

  useEffect(() => {
    window.addEventListener('click', () => {
      setIsDocs(false);
    });
  }, [isDocs]);

  const openDocs = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setIsDocs(true);
  };

  const scrollToCode = () => {
    document.querySelector('#started')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section className="greeting-wrapper">
      <header className="header">
        <div className="logo">
          <img
            src="https://cdn1.iconfinder.com/data/icons/black-round-web-icons/100/round-web-icons-black-40-512.png"
            alt="logo"
          />
          <h1>Maxbook multi-editor</h1>
        </div>
      </header>
      <div className="btn-container">
        <button type="button" onClick={scrollToCode}>
          Get started
        </button>
        <button type="button" onClick={openDocs}>
          Read docs
        </button>
      </div>
      <article
        className={`docs ${isDocs ? 'active' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Docs for editors</h2>
        <div className="lists_wrapper">
          <ul className="docs-list">
            <li className="docs-item">npm commands</li>
            <li className="docs-item">
              <span className="code">
                npx multi-jsbook serve [-p || --port] [number] [filename]
              </span>
              <br />- to start working. Default values: 4050, notebook.js
            </li>
            <li className="docs-item">
              <span className="code">npm i -g multi-jsbook</span> - to download
              it localy
            </li>
            <li className="docs-item">
              <span className="code">multi-jsbook serve</span>- if allready
              installed
            </li>
            <li className="docs-item">
              After <span className="code">serve</span> command you will see the
              .js, in directory where you run the command, all changes in the
              cell will be saved there automaticly.
            </li>
          </ul>
          <ul className="docs-list">
            <li className="docs-item">code cell features</li>
            <li className="docs-item">
              Our editor provides you access to all npm packages, you can just
              import them, example:{' '}
              <span className="code">import axios from 'axios'</span>
            </li>
            <li className="docs-item">
              React components - <br /> you can build a react app, components
              etc. You will see the result in the preview window
            </li>
            <li className="docs-item">
              <span className="code">show()</span> funciton accept every type of
              data to the preview window
            </li>
            <li className="docs-item">
              every{' '}
              <span className="code">variable/functuion/react component</span>{' '}
              will share its values with other code cells
            </li>
          </ul>
          <ul className="docs-list">
            <li className="docs-item">Code editor</li>
            <li className="docs-item">
              It's a Markdown text editor, so use can use all features from the
              markdown
            </li>
            <li className="docs-item">
              There is a{' '}
              <a target="_blank" href="https://www.markdownguide.org/">
                guide
              </a>{' '}
              of syntaxys
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Greeting;
