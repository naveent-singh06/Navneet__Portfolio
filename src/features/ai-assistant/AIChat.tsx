import { useEffect, useRef } from 'react';
import AIMessage from './AIMessage';
import type { AIMessage as AIMessageType } from '../../hooks/useAIAssistant';

interface AIChatProps {
  messages: AIMessageType[];
}

/** Scrollable chat log, auto-scrolling to the newest message. */
export default function AIChat({ messages }: AIChatProps) {
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const body = bodyRef.current;
    if (body) body.scrollTop = body.scrollHeight;
  }, [messages]);

  return (
    <div className="ap-body" id="apBody" ref={bodyRef}>
      {messages.map((m) => (
        <AIMessage key={m.id} {...m} />
      ))}
    </div>
  );
}
