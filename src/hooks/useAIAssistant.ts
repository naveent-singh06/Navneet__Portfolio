import { useCallback, useState } from 'react';
import { resolveAiResponse, welcomeMessage } from '../data/aiKnowledge';

export interface AIMessage {
  id: number;
  text: string;
  user: boolean;
}

let nextId = 1;

/** Chat state + send logic for Navneet's AI Assistant, matching the
 * original 380ms "typing" delay before the assistant replies. */
export function useAIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<AIMessage[]>([
    { id: nextId++, text: welcomeMessage, user: false },
  ]);

  const openPanel = useCallback(() => setOpen(true), []);
  const closePanel = useCallback(() => setOpen(false), []);

  const send = useCallback((raw: string) => {
    const q = raw.trim();
    if (!q) return;
    setMessages((prev) => [...prev, { id: nextId++, text: q, user: true }]);
    setTimeout(() => {
      const reply = resolveAiResponse(q);
      setMessages((prev) => [...prev, { id: nextId++, text: reply, user: false }]);
    }, 380);
  }, []);

  return { open, openPanel, closePanel, messages, send };
}
