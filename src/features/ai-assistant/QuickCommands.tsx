import { quickCommands } from '../../data/aiKnowledge';

interface QuickCommandsProps {
  onSelect: (cmd: string) => void;
}

/** Row of quick-command chips (/intro, /skills, ...). */
export default function QuickCommands({ onSelect }: QuickCommandsProps) {
  return (
    <div className="ap-cmds">
      {quickCommands.map((c) => (
        <button key={c.cmd} className="ap-chip" data-cmd={c.cmd} onClick={() => onSelect(c.cmd)}>
          {c.emoji} {c.cmd}
        </button>
      ))}
    </div>
  );
}
