import React, { memo } from 'react';

const GRADING_CRITERIA = [
  { id: 'background', name: '緒論與動機', weight: 10, icon: '📝', description: '研究動機清楚、主題選擇合理' },
  { id: 'literature', name: '文獻探討', weight: 20, icon: '📚', description: '文獻整理完整、來源可靠' },
  { id: 'analysis', name: '案例分析', weight: 30, icon: '🔍', description: '分析深入、有洞察力' },
  { id: 'conclusion', name: '結論與建議', weight: 20, icon: '💡', description: '有自己觀點、建議可行' },
  { id: 'reflection', name: 'AI 使用反思', weight: 20, icon: '🤔', description: '說明具體、有批判思考' },
];

// Keep grading offline until an authenticated, quota-enforced service is ready.
// A browser bundle cannot safely hold a provider credential.
const GradeTab = memo(function GradeTab() {
  return (
    <div className="space-y-6 animate-fadeIn">
      <section role="status" aria-labelledby="grading-status" className="bg-gradient-to-r from-amber-500/30 to-orange-500/30 rounded-2xl p-5 border border-amber-500/50">
        <h2 id="grading-status" className="font-bold text-amber-300 text-lg">
          ⚠️ AI 評分暫時無法使用
        </h2>
        <p className="text-white/80 mt-2">
          目前暫停線上 AI 評分。請依下方評分標準自行檢查報告，最終成績以老師批改為準。
        </p>
      </section>

      <section aria-labelledby="grading-criteria" className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/10">
        <h2 id="grading-criteria" className="text-2xl font-bold mb-4">🎯 報告評分標準</h2>
        <p className="text-white/60 text-sm mb-6">各項配分合計 100 分，可作為繳交前的自我檢查清單。</p>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <caption className="sr-only">報告評分項目、配分與檢查重點</caption>
            <thead className="bg-white/10 text-white/80">
              <tr>
                <th scope="col" className="p-3">評分項目</th>
                <th scope="col" className="p-3 whitespace-nowrap">配分</th>
                <th scope="col" className="p-3">檢查重點</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {GRADING_CRITERIA.map((criterion) => (
                <tr key={criterion.id}>
                  <th scope="row" className="p-3 font-medium">
                    <span aria-hidden="true">{criterion.icon} </span>{criterion.name}
                  </th>
                  <td className="p-3 whitespace-nowrap">{criterion.weight} 分</td>
                  <td className="p-3 text-white/70">{criterion.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="p-5 bg-white/5 rounded-2xl border border-white/10 text-amber-300">
        📤 完成後請將 PDF 報告上傳至<strong>創課系統</strong>繳交。
      </div>
    </div>
  );
});

export default GradeTab;
