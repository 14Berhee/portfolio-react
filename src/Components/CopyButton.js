import { useState } from "react";

const CopyButton = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div>
      <button
        onClick={handleCopy}
        className="btn bg-slate-500 text-white py-1 px-2 sm:py-2 sm:px-4 rounded-md"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};

export default CopyButton;
