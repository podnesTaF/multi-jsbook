/** @format */

import React, { useRef, useEffect } from 'react';
import './preview.css';

interface PreviewProps {
  code: string;
  err: string;
}

const html = `
<html>
  <head></head>
  <body>
    <div id='root'></div>
    <script>
      const handleError = (err) => {
        const root = document.getElementById('root')
        root.innerHTML = '<div style="color: red;"><h4>Runtime error</h4>' + err + '</div>'
        console.error(err)
      }

      window.addEventListener('error', (event) => {
        event.preventDefault()
        handleError(event.error)
      })

      window.addEventListener('message', (e) => {
        try {
          eval(e.data)
        } catch(err) {
          handleError(err)
        }
      }, false)
    </script>
  </body>
</html>
`;

const Preview: React.FC<PreviewProps> = ({ code, err }) => {
  const iframe = useRef<any>();

  useEffect(() => {
    iframe.current.srcdoc = html;
    setTimeout(() => {
      iframe.current.contentWindow.postMessage(code, '*');
    }, 50);
  }, [code]);

  return (
    <div className="preview-wrapper">
      <iframe
        title="preview"
        ref={iframe}
        sandbox="allow-scripts"
        srcDoc={html}
      />
      {err && <div className="preview-err">{err}</div>}
    </div>
  );
};

export default Preview;
