import { useState } from "react";


export default function Language() {
  const [lang, setLang] = useState("hu");


  return (
    <select value={lang} onChange={(e) => setLang(e.target.value)}>
      <option value="hu">Magyar</option>
      <option value="en">English</option>
    </select>
  );
}
