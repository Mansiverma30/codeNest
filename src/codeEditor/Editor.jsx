import { useState } from "react";
import { project } from "./content";

function Editor() {
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [activeTab, setActiveTab] = useState("html");

  const resetCode = () => {
    setHtmlCode("");
    setCssCode("");
  };

  const downloadCode = () => {
    const blob = new Blob(
      [
        `<html>\n  <head>\n    <style>\n${cssCode}\n    </style>\n  </head>\n  <body>\n${htmlCode}\n  </body>\n</html>`,
      ],
      { type: "text/html" }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "index.html";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0f172a] text-white">
      {/* ⚙️ Controls */}
      <div className="flex justify-end space-x-4 px-4 py-3 bg-[#1e1f2a] border-t border-gray-600">
        <button
          onClick={resetCode}
          className="bg-red-500 px-4 py-1 rounded hover:bg-red-600"
        >
          Reset
        </button>
        <button
          onClick={downloadCode}
          className="bg-green-500 px-4 py-1 rounded hover:bg-green-600"
        >
          Download
        </button>
      </div>
      {/* 🔻Top Panel: Tabs on small screen */}
      <div className="md:hidden flex justify-center space-x-4 py-3 bg-[#1a1b2e]">
        <button
          onClick={() => setActiveTab("html")}
          className={`px-4 py-1 rounded ${
            activeTab === "html" ? "bg-teal-600" : "bg-gray-700"
          }`}
        >
          HTML
        </button>
        <button
          onClick={() => setActiveTab("css")}
          className={`px-4 py-1 rounded ${
            activeTab === "css" ? "bg-teal-600" : "bg-gray-700"
          }`}
        >
          CSS
        </button>
      </div>
      {/* 🔳 Main Grid */}
      <div className="grid md:grid-cols-4 grid-cols-1 flex-grow">
        {/* 📘 Content */}
        <aside
          className="bg-gradient-to-r from-[#0f172a] to-[#334155] text-gray-100 p-4 space-y-2 
                         h-full overflow-auto border-r border-gray-700 hidden md:block
                         [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-gray-500 
                         [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-700"
          dangerouslySetInnerHTML={{ __html: project.join("") }}
        />

        {/* 🧾 HTML Editor */}
        <div
          className={`bg-[#1a1b2e] p-2 border-r border-[#2c2c3c] ${
            activeTab !== "html" && "hidden md:block"
          }`}
        >
          <textarea
            value={htmlCode}
            onChange={(e) => setHtmlCode(e.target.value)}
            placeholder="Write HTML here..."
            className="w-full h-full bg-transparent resize-none p-4 font-mono rounded-lg focus:outline-none"
          />
        </div>

        {/* 🎨 CSS Editor */}
        <div
          className={`bg-[#1a1b2e] p-2 ${
            activeTab !== "css" && "hidden md:block"
          }`}
        >
          <textarea
            value={cssCode}
            onChange={(e) => setCssCode(e.target.value)}
            placeholder="Write CSS here..."
            className="w-full h-full bg-transparent resize-none p-4 font-mono rounded-lg focus:outline-none"
          />
        </div>

        {/* 🌸 Preview */}
        <div className="bg-gradient-to-bl bg-white text-black p-2 overflow-auto border-l border-pink-300 rounded-sm">
          <iframe
            title="preview"
            srcDoc={`<html><style>${cssCode}</style><body>${htmlCode}</body></html>`}
            className="w-full h-full min-h-[40vh] border border-gray-300 rounded"
          />
        </div>
      </div>
    </div>
  );
}

export default Editor;

/* Make changes in content in last like add the line about no need to use the head,html,body tag etc, add some gaps and just make the UI changes where codes are there otherwise no need for UI changes bg is enough */
