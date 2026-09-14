import { useState } from 'react';

interface AIInputProps {
  onSend: (value: string) => void;
}

/** Text input + send button for the AI assistant panel. */
export default function AIInput({ onSend }: AIInputProps) {
  const [value, setValue] = useState('');

  const submit = () => {
    onSend(value);
    setValue('');
  };

  return (
    <div className="ap-input-row">
      <input
        id="ap-input"
        type="text"
        placeholder="Type '/' for commands or ask a question…"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') submit();
        }}
      />
      <div className="ap-send" id="apSend" onClick={submit}>
        ➤
      </div>
    </div>
  );
}
