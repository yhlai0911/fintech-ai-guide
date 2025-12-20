import { memo } from 'react';

const SampleTab = memo(function SampleTab() {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <span className="text-3xl">📖</span> 報告範例：台灣行動支付市場分析
          </h2>
          <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium">
            ⭐ 優良範例
          </span>
        </div>

        {/* Sample Report Header */}
        <div className="bg-white/10 rounded-2xl p-6 mb-6 text-center">
          <h3 className="text-xl font-bold mb-2">台灣行動支付市場競爭分析與 AI 應用</h3>
          <p className="text-white/60">王小明｜財金系一年級｜學號：41012345</p>
          <p className="text-white/40 text-sm mt-1">金融科技應用期末報告｜2024 年 1 月</p>
        </div>

        {/* Section 1 */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-cyan-400">
            <span className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center text-sm">1</span>
            緒論
            <span className="text-xs font-normal text-white/40 ml-2">佔 10%</span>
          </h3>
          <div className="bg-white/5 rounded-xl p-5 text-white/80 leading-relaxed space-y-3">
            <p>近年來，台灣行動支付市場快速成長。根據金管會統計，2023 年行動支付交易金額突破 8,000 億元，年成長率超過 30%。LINE Pay、街口支付、台灣 Pay 等業者競爭激烈，各自以不同策略搶攻市場。</p>
            <p>本報告選擇研究<strong>台灣行動支付市場</strong>，探討主要業者的競爭策略、商業模式差異，並透過 AI 工具協助蒐集資料與分析市場趨勢。</p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-purple-400">
            <span className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center text-sm">2</span>
            文獻探討
            <span className="text-xs font-normal text-white/40 ml-2">佔 20%</span>
          </h3>
          <div className="bg-white/5 rounded-xl p-5 text-white/80 leading-relaxed space-y-4">
            <div>
              <h4 className="font-bold text-purple-300 mb-2">【行動支付的定義與類型】</h4>
              <p>根據金管會定義，行動支付指使用者透過行動裝置進行付款的方式，包括：手機信用卡、電子票證、第三方支付等。台灣市場以第三方支付（LINE Pay、街口）和手機信用卡綁定為主流。</p>
            </div>
            <div>
              <h4 className="font-bold text-purple-300 mb-2">【台灣市場現況】</h4>
              <p>根據資策會 MIC 調查，2023 年台灣行動支付普及率達 65%，其中 LINE Pay 市佔率約 35%、街口支付約 25%、台灣 Pay 約 15%。消費者選擇行動支付的主因為：優惠回饋（68%）、便利性（55%）、安全性（42%）。</p>
            </div>
            <div>
              <h4 className="font-bold text-purple-300 mb-2">【競爭策略文獻】</h4>
              <p>Porter (1980) 提出競爭策略三種基本型態：成本領導、差異化、聚焦。台灣行動支付業者多採用差異化策略，透過獨特的優惠方案、使用體驗、或特定場景服務來建立競爭優勢。</p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-pink-400">
            <span className="w-8 h-8 bg-pink-500/20 rounded-lg flex items-center justify-center text-sm">3</span>
            案例分析
            <span className="text-xs font-normal text-white/40 ml-2">佔 25%｜重點段落</span>
          </h3>
          <div className="bg-white/5 rounded-xl p-5 text-white/80 leading-relaxed space-y-4">
            <div>
              <h4 className="font-bold text-pink-300 mb-2">【LINE Pay 案例分析】</h4>
              <p className="mb-2"><strong>商業模式：</strong>依附於 LINE 生態系，以 2,100 萬月活躍用戶為基礎，提供「點數回饋」吸引消費者。與銀行發行聯名卡，深化金融服務。</p>
              <p className="mb-2"><strong>競爭優勢：</strong>用戶基礎龐大、社群功能整合（好友轉帳）、品牌知名度高。</p>
              <p><strong>挑戰：</strong>回饋成本高、用戶黏著度需持續維護、純網銀 LINE Bank 推出後的整合問題。</p>
            </div>
            <div>
              <h4 className="font-bold text-pink-300 mb-2">【街口支付案例分析】</h4>
              <p className="mb-2"><strong>商業模式：</strong>專注於「小額支付」場景，深耕夜市、小吃攤等傳統商家。推出「街口幣」增加用戶黏著度。</p>
              <p className="mb-2"><strong>競爭優勢：</strong>小商家覆蓋率高、使用門檻低、社群行銷活躍。</p>
              <p><strong>挑戰：</strong>獲利模式尚未明確、品牌形象管理、監理合規成本。</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 mt-4">
              <h4 className="font-bold text-white mb-2">📊 兩大業者比較表</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-white/60 border-b border-white/20">
                      <th className="py-2 text-left">比較項目</th>
                      <th className="py-2 text-center">LINE Pay</th>
                      <th className="py-2 text-center">街口支付</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-2">市佔率</td>
                      <td className="py-2 text-center">約 35%</td>
                      <td className="py-2 text-center">約 25%</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2">主要場景</td>
                      <td className="py-2 text-center">百貨、連鎖店</td>
                      <td className="py-2 text-center">夜市、小商家</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2">回饋機制</td>
                      <td className="py-2 text-center">LINE POINTS</td>
                      <td className="py-2 text-center">街口幣</td>
                    </tr>
                    <tr>
                      <td className="py-2">特色功能</td>
                      <td className="py-2 text-center">好友轉帳</td>
                      <td className="py-2 text-center">發票載具整合</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-amber-400">
            <span className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center text-sm">4</span>
            結論與建議
            <span className="text-xs font-normal text-white/40 ml-2">佔 20%</span>
          </h3>
          <div className="bg-white/5 rounded-xl p-5 text-white/80 leading-relaxed space-y-3">
            <p>台灣行動支付市場已進入成熟競爭階段，LINE Pay 和街口支付各有優勢。LINE Pay 以生態系整合見長，街口支付則在小商家場景佔優。</p>
            <p><strong>我的觀點：</strong>未來競爭關鍵不在於回饋多寡，而在於「場景深耕」和「用戶體驗」。能夠提供一站式金融服務（支付+借貸+投資）的業者將更具競爭力。</p>
            <p><strong>建議：</strong>消費者應根據自己的使用場景選擇，不必執著於單一品牌。業者則應思考如何從「支付工具」升級為「金融生態系」。</p>
          </div>
        </div>

        {/* Section 5 - AI Reflection */}
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-emerald-400">
            <span className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center text-sm">5</span>
            AI 使用反思
            <span className="text-xs font-normal text-white/40 ml-2">佔 20%｜必寫</span>
          </h3>
          <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 rounded-xl p-5 border border-emerald-500/20 text-white/80 leading-relaxed space-y-4">
            <div>
              <h4 className="font-bold text-emerald-300 mb-2">【使用的工具】</h4>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><strong>NotebookLM Deep Research：</strong>搜尋「台灣行動支付市場分析」，取得市佔率、用戶數等數據</li>
                <li><strong>Gemini：</strong>搜尋最新的行動支付新聞和優惠活動</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-emerald-300 mb-2">【發現 AI 的限制】⭐ 加分重點</h4>
              <p className="mb-2">1. <strong>數據可能過時：</strong>NotebookLM 搜尋到的市佔率數據是 2023 年的，我另外查了金管會官網確認最新數據。</p>
              <p>2. <strong>優惠資訊不準確：</strong>Gemini 提到的某些優惠活動已經結束，我必須到官網確認。</p>
            </div>
            <div>
              <h4 className="font-bold text-emerald-300 mb-2">【心得】</h4>
              <p>這次報告讓我學到 AI 工具的強大與限制。NotebookLM 的 Deep Research 功能大幅縮短了蒐集資料的時間，但 AI 給的數據不一定準確，需要交叉驗證。透過實際使用這些工具完成報告，讓我更了解如何善用 AI 輔助學習！</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 mt-4">
              <p className="font-bold text-white/60 mb-2">📸 對話截圖（實際報告需附上）</p>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-white/5 rounded-lg p-4 text-center text-sm text-white/40">
                  [截圖1]<br />NotebookLM<br />Deep Research
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center text-sm text-white/40">
                  [截圖2]<br />Gemini<br />搜尋新聞
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center text-sm text-white/40">
                  [截圖3]<br />發現 AI<br />數據過時
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="mt-6 p-5 bg-amber-500/20 rounded-2xl border border-amber-500/30">
          <p className="font-bold text-amber-300 flex items-center gap-2">
            <span className="text-xl">💡</span> 範例重點提示
          </p>
          <ul className="text-white/70 mt-2 space-y-1 text-sm">
            <li>• 文獻探討有引用具體數據來源（金管會、資策會 MIC）</li>
            <li>• 案例分析有比較表，讓讀者一目了然</li>
            <li>• AI 反思有指出「數據可能過時」、「優惠資訊不準確」，展現批判思考</li>
            <li>• 結論有提出自己的觀點，不只是複述資料</li>
          </ul>
        </div>
      </div>
    </div>
  );
});

export default SampleTab;
