// src/code/alertCodes.js

export const alertCodes = {
  SimpleSuccessAlert: `
import { CircleCheckBig } from "lucide-react";
import React from "react";

export const SimpleSuccessAlert = () => {
  return (
    <div className="absolute top-5 right-5 bg-[#171717] z-50 border border-green-600 px-5 py-3 rounded-xl flex justify-center items-center gap-5 shadow-lg shadow-green-600/20">
      <CircleCheckBig color="#1AA44A" size={40} />
      <div>
        <h1 className="text-white font-semibold text-lg">Success</h1>
        <p className="text-white/70 text-sm">Your action was successful!</p>
      </div>
    </div>
  );
};
`,

  SimpleErrorAlert: `
import { CircleX } from "lucide-react";
import React from "react";

export const SimpleErrorAlert = () => {
  return (
    <div className="absolute top-5 right-5 bg-[#171717] z-50 border border-red-600 px-5 py-3 rounded-xl flex justify-center items-center gap-5 shadow-lg shadow-red-600/20">
      <CircleX color="#FF4E4E" size={40} />
      <div>
        <h1 className="text-white font-semibold text-lg">Error</h1>
        <p className="text-white/70 text-sm">Something went wrong!</p>
      </div>
    </div>
  );
};
`,
};
