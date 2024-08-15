import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRgenerator() {
  const [qrcode, setQrcode] = useState('');
  const [input, setInput] = useState('');

  function handleGenerate() {
    setQrcode(input);
  }

  return (
    <div>
      <h1>QR CODE GENERATOR</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr"
          placeholder="Enter your value"
        />
        <button
          disabled={input.trim() === ''}
          onClick={handleGenerate}
        >
          GENERATE
        </button>
      </div>
      {qrcode && (
        <QRCode
          id="qrcodevalue"
          value={qrcode}
          size={400}
          bgColor="#fff"
        />
      )}
    </div>
  );
}
