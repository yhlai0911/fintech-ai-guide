import { memo, useState } from 'react';
import { topics } from '../../data/topics';

const QuestTab = memo(function QuestTab() {
  const [expandedTopic, setExpandedTopic] = useState(null);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Mission Card */}
      <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <span className="text-3xl">🎯</span> 主線任務：金融科技應用分析報告
        </h2>
        <p className="text-white/70 text-lg leading-relaxed mb-6">
          選擇一個<span className="text-cyan-400 font-semibold">金融科技領域</span>，
          分析其應用案例與發展趨勢，
          並透過 <span className="text-purple-400 font-semibold">Google AI 工具</span>協助完成 PDF 報告。
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 rounded-2xl p-5 border border-cyan-500/20">
            <div className="text-3xl mb-2">🌐</div>
            <h3 className="font-bold mb-1">資料來源</h3>
            <p className="text-sm text-white/60">網路搜尋 + Deep Research</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-2xl p-5 border border-purple-500/20">
            <div className="text-3xl mb-2">📝</div>
            <h3 className="font-bold mb-1">報告長度</h3>
            <p className="text-sm text-white/60">2000-2500 字 + 圖表</p>
          </div>
          <div className="bg-gradient-to-br from-pink-500/20 to-pink-500/5 rounded-2xl p-5 border border-pink-500/20">
            <div className="text-3xl mb-2">⏰</div>
            <h3 className="font-bold mb-1">任務時間</h3>
            <p className="text-sm text-white/60">兩週（第一週交大綱）</p>
          </div>
        </div>
      </div>

      {/* Topic Selection */}
      <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-3">
          <span className="text-3xl">🎪</span> 選擇你的冒險主題
        </h2>
        <p className="text-white/50 mb-6">點擊主題查看詳細說明與關鍵字</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {topics.map((topic, idx) => (
            <div
              key={idx}
              onClick={() => setExpandedTopic(expandedTopic === idx ? null : idx)}
              className={`bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-5 transform hover:scale-[1.02] transition-all duration-300 cursor-pointer shadow-lg border border-white/10 ${expandedTopic === idx ? 'ring-2 ring-purple-400' : ''}`}
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-3xl">{topic.icon}</span>
                <span className={`text-sm transition-transform duration-300 ${expandedTopic === idx ? 'rotate-180' : ''}`}>▼</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{topic.title}</h3>

              {expandedTopic === idx && (
                <div className="mt-4 pt-4 border-t border-white/20 animate-fadeIn">
                  <div className="mb-3">
                    <h4 className="text-sm font-bold text-cyan-400 mb-2">📋 研究方向</h4>
                    <ul className="text-sm text-white/70 space-y-1">
                      {topic.examples.map((ex, i) => (
                        <li key={i}>• {ex}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-purple-400 mb-2">🏷️ 關鍵字</h4>
                    <div className="flex flex-wrap gap-1">
                      {topic.keywords.map((kw, i) => (
                        <span key={i} className="text-xs bg-white/10 px-2 py-1 rounded-full">{kw}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl p-8 border border-white/10">
        <h2 className="text-2xl font-bold mb-4 text-center">🚀 快速傳送門</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 flex-wrap">
          <a href="https://notebooklm.google.com" target="_blank" rel="noopener noreferrer"
            className="w-full md:w-auto px-6 py-4 bg-white/10 hover:bg-white/20 rounded-xl font-medium transition-all flex items-center justify-center gap-3 group">
            <span className="text-2xl">📘</span>
            <div className="text-left">
              <div>NotebookLM</div>
              <div className="text-xs text-white/50">Deep Research 搜尋</div>
            </div>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </a>
          <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer"
            className="w-full md:w-auto px-6 py-4 bg-white/10 hover:bg-white/20 rounded-xl font-medium transition-all flex items-center justify-center gap-3 group">
            <span className="text-2xl">✨</span>
            <div className="text-left">
              <div>Gemini</div>
              <div className="text-xs text-white/50">搜尋新聞、分析議題</div>
            </div>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </a>
          <a href="https://tronclass.dyu.edu.tw/course/8036/content#/" target="_blank" rel="noopener noreferrer"
            className="w-full md:w-auto px-6 py-4 bg-white/10 hover:bg-white/20 rounded-xl font-medium transition-all flex items-center justify-center gap-3 group">
            <span className="text-2xl">📤</span>
            <div className="text-left">
              <div>Tronclass</div>
              <div className="text-xs text-white/50">繳交作業</div>
            </div>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </a>
        </div>
      </div>
    </div>
  );
});

export default QuestTab;
