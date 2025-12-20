import { memo, useCallback } from 'react';
import { week1Tasks, week2Tasks } from '../../data/tasks';

const TaskCard = memo(function TaskCard({ task, isCompleted, onToggle }) {
  return (
    <div
      className={`relative p-4 rounded-2xl border transition-all duration-300 ${
        task.isCheckpoint
          ? 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 border-amber-500/30'
          : isCompleted
            ? 'bg-emerald-500/20 border-emerald-500/30'
            : 'bg-white/5 border-white/10 hover:bg-white/10'
      }`}
    >
      <div className="flex items-start gap-4">
        <button
          onClick={() => onToggle(task.id)}
          className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${
            isCompleted
              ? 'bg-emerald-500 text-white'
              : 'bg-white/10 hover:bg-white/20'
          }`}
        >
          {isCompleted ? '✓' : task.emoji}
        </button>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold text-white/50">{task.day}</span>
            {task.isCheckpoint && (
              <span className="text-xs bg-amber-500/30 text-amber-300 px-2 py-0.5 rounded-full">必繳</span>
            )}
          </div>
          <p className={`font-medium ${isCompleted ? 'line-through text-white/50' : ''}`}>
            {task.task}
          </p>
          <div className="flex items-center gap-2 mt-2 text-sm">
            <a
              href={task.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              {task.where} →
            </a>
            <span className="text-white/40">|</span>
            <span className="text-emerald-400">{task.reward}</span>
          </div>
        </div>
      </div>
    </div>
  );
});

const MapTab = memo(function MapTab({ activeWeek, setActiveWeek, completedTasks, toggleTask }) {
  const handleToggle = useCallback((taskId) => {
    toggleTask(taskId);
  }, [toggleTask]);

  const currentTasks = activeWeek === 1 ? week1Tasks : week2Tasks;

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Week Selector */}
      <div className="flex justify-center gap-4">
        {[1, 2].map(week => (
          <button
            key={week}
            onClick={() => setActiveWeek(week)}
            className={`px-8 py-4 rounded-2xl font-bold transition-all ${
              activeWeek === week
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/25'
                : 'bg-white/5 hover:bg-white/10'
            }`}
          >
            <span className="text-2xl mr-2">{week === 1 ? '📋' : '📝'}</span>
            第 {week} 週
            <div className="text-xs font-normal opacity-60 mt-1">
              {week === 1 ? '搜尋 + 實作 + 大綱' : '撰寫 + 繳交'}
            </div>
          </button>
        ))}
      </div>

      {/* Task List */}
      <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <span className="text-3xl">{activeWeek === 1 ? '🗺️' : '⚔️'}</span>
          第 {activeWeek} 週任務清單
        </h2>

        <div className="space-y-4">
          {currentTasks.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              isCompleted={completedTasks.includes(task.id)}
              onToggle={handleToggle}
            />
          ))}
        </div>

        {/* Week Summary */}
        <div className="mt-6 p-5 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl border border-white/10">
          <p className="font-bold flex items-center gap-2">
            <span className="text-xl">💡</span>
            {activeWeek === 1 ? '第一週重點' : '第二週重點'}
          </p>
          <p className="text-white/60 mt-2 text-sm">
            {activeWeek === 1
              ? '用 NotebookLM Deep Research 蒐集資料，開始規劃報告架構。記得準時繳交大綱！'
              : '完成正文撰寫、加入 AI 使用反思與截圖。最後匯出 PDF 繳交！'}
          </p>
        </div>
      </div>
    </div>
  );
});

export default MapTab;
