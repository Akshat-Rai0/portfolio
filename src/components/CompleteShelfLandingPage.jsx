import { useEffect, useRef, useState } from "react";
import "./threeui.css";

export function CompleteShelfLandingPage({
  headingFont = "iowan-old-style",
  bodyFont = "inter",
  headingWeight = "400",
  bodyWeight = "400",
  primaryColor = "#c87046",
  headingSize = 60,
  bodySize = 12,
  headingLetterSpacing = -0.055,
  className = "",
}) {
  const iframeRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const customization = `
      <style>
        :root {
          --serif: "${headingFont}", "Baskerville", "Times New Roman", serif;
          --mono: "${bodyFont}", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
          --accent: ${primaryColor};
        }
        .identity__name {
          font-weight: ${headingWeight};
          font-size: ${headingSize / 16}rem;
          letter-spacing: ${headingLetterSpacing}em;
        }
        .identity__edition,
        .issue,
        .eyebrow,
        .microcopy,
        .counter,
        .meta-list dt,
        .folio {
          font-size: ${bodySize / 16}rem;
          font-weight: ${bodyWeight};
        }
      </style>
    `;

    const handleLoad = () => {
      setIsReady(true);
      try {
        const doc = iframe.contentDocument;
        if (doc) {
          const head = doc.head;
          const styleElement = doc.createElement("div");
          styleElement.innerHTML = customization;
          head.appendChild(styleElement);
        }
      } catch (error) {
        console.error("Failed to apply customization:", error);
      }
    };

    iframe.addEventListener("load", handleLoad);
    return () => iframe.removeEventListener("load", handleLoad);
  }, [headingFont, bodyFont, headingWeight, bodyWeight, primaryColor, headingSize, bodySize, headingLetterSpacing]);

  return (
    <div className={`bookshelf ${className}`}>
      <iframe
        ref={iframeRef}
        src="/landing-pages/complete-shelf-v2.html"
        title="Working Volumes — Seven Tools for Making"
        className={`bookshelf__canvas ${isReady ? "is-ready" : ""}`}
        sandbox="allow-downloads allow-forms allow-modals allow-popups allow-same-origin allow-scripts"
      />
    </div>
  );
}
