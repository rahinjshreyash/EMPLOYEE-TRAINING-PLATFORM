import { useRef, useState } from "react";

export default function OtpInput({ length = 4, onComplete = () => {} }) {
  
  const [values, setValues] = useState(Array(length).fill(""));
  const inputsRef = useRef([]);

  const focusInput = (index) => {
    const el = inputsRef.current[index];
    if (el) el.focus();
  };

  const updateValues = (next) => {
    setValues(next);
    const code = next.join("");
    if (code.length === length && next.every((d) => d !== "")) {
      onComplete(code);
    }
  };

  const handleChange = (e, index) => {
    const digit = e.target.value.replace(/[^0-9]/g, "").slice(-1);
    const next = [...values];
    next[index] = digit;
    updateValues(next);

    if (digit && index < length - 1) {
      focusInput(index + 1);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      const next = [...values];
      if (next[index]) {
        next[index] = "";
        updateValues(next);
      } else if (index > 0) {
        next[index - 1] = "";
        updateValues(next);
        focusInput(index - 1);
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      focusInput(index - 1);
    } else if (e.key === "ArrowRight" && index < length - 1) {
      focusInput(index + 1);
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/[^0-9]/g, "").slice(0, length);
    if (!pasted) return;
    const next = Array(length).fill("");
    pasted.split("").forEach((d, i) => (next[i] = d));
    updateValues(next);
    focusInput(Math.min(pasted.length, length - 1));
  };

  return (
    <div style={{ display: "flex", gap: "12px" }}>
      {values.map((val, i) => (
        <input
          key={i}
          ref={(el) => (inputsRef.current[i] = el)}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={val}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          onPaste={handlePaste}
          style={{
            width: "48px",
            height: "56px",
            textAlign: "center",
            fontSize: "24px",
            fontWeight: 600,
            border: "2px solid #d1d5db",
            borderRadius: "8px",
            outline: "none",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#4f46e5")}
          onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
        />
      ))}
    </div>
  );
}