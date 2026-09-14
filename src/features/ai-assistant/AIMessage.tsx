import type { AIMessage as AIMessageType } from '../../hooks/useAIAssistant';

/** A single chat bubble (assistant 🤖 or user 🙂). */
export default function AIMessage({ text, user }: AIMessageType) {
  return (
    <div className={`ap-row${user ? ' user' : ''}`}>
      <div className="ap-av-sm">{user ? '🙂' : '🤖'}</div>
      <div className="ap-msg">{text}</div>
    </div>
  );
}
