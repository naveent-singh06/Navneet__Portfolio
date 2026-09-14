import './AIAssistant.css';
import AIChat from './AIChat';
import AIInput from './AIInput';
import QuickCommands from './QuickCommands';
import { useAIAssistant } from '../../hooks/useAIAssistant';

/** Floating AI bubble + expandable chat panel — Navneet's AI Assistant. */
export default function AIAssistant() {
  const { open, openPanel, closePanel, messages, send } = useAIAssistant();

  return (
    <>
      <button id="ai-bubble" aria-label="Open Navneet's AI Assistant" onClick={openPanel}>
        <span className="ping" />
        🤖
      </button>
      <div id="ai-panel" className={open ? 'open' : ''}>
        <div className="ap-head">
          <div className="av">🤖</div>
          <div>
            <div className="ai-title">Navneet's AI Assistant</div>
            <div className="ai-status">
              <span className="d" /> Online
            </div>
          </div>
          <button className="ap-close" id="apClose" aria-label="Close assistant" onClick={closePanel}>
            ✕
          </button>
        </div>
        <AIChat messages={messages} />
        <QuickCommands onSelect={send} />
        <AIInput onSend={send} />
      </div>
    </>
  );
}
