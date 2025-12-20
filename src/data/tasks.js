export const tasks = [
  { id: 1, day: '第1天', title: '選定金融科技主題', desc: '從支付、借貸、投資、保險、區塊鏈中選一個方向' },
  { id: 2, day: '第2天', title: '用 NotebookLM 搜尋資料', desc: '使用 Discover + Deep Research 蒐集網路資源' },
  { id: 3, day: '第3天', title: '整理文獻與案例', desc: '整理 3-5 個金融科技應用案例' },
  { id: 4, day: '第4天', title: '用 Google AI Studio 實作', desc: '建立一個簡單的 AI 應用原型' },
  { id: 5, day: '第5天', title: '撰寫報告架構', desc: '用 Gemini 協助規劃報告大綱' },
  { id: 6, day: '第6-7天', title: '撰寫正文', desc: '完成緒論、文獻探討、案例分析' },
  { id: 7, day: '第8天', title: '加入 AI 實作說明', desc: '說明 Google AI Studio 的應用過程' },
  { id: 8, day: '第9天', title: '製作圖表', desc: '用試算表製作市場數據圖表' },
  { id: 9, day: '第10-11天', title: '潤飾文章', desc: '請 Gemini 協助潤飾，檢查邏輯與格式' },
  { id: 10, day: '第12天', title: '匯出 PDF 繳交', desc: '最終檢查並匯出 PDF' },
];

export const week1Tasks = [
  {
    id: 1,
    day: 'Day 1',
    emoji: '🎯',
    task: '選定金融科技主題',
    where: 'NotebookLM Discover',
    link: 'https://notebooklm.google.com',
    reward: '+10 靈感值',
  },
  {
    id: 2,
    day: 'Day 2',
    emoji: '🔍',
    task: '用 NotebookLM Deep Research 蒐集資料',
    where: 'NotebookLM',
    link: 'https://notebooklm.google.com',
    reward: '+15 知識值',
  },
  {
    id: 3,
    day: 'Day 3',
    emoji: '📚',
    task: '整理 3-5 個金融科技案例',
    where: 'Gemini',
    link: 'https://gemini.google.com',
    reward: '+15 素材值',
  },
  {
    id: 4,
    day: 'Day 4',
    emoji: '🤖',
    task: '用 Google AI Studio 建立 AI 原型',
    where: 'AI Studio',
    link: 'https://aistudio.google.com',
    reward: '+20 技術值',
  },
  {
    id: 5,
    day: 'Day 5',
    emoji: '📝',
    task: '撰寫報告大綱',
    where: 'Google Docs',
    link: 'https://docs.google.com',
    reward: '+10 架構值',
    isCheckpoint: true,
  },
];

export const week2Tasks = [
  {
    id: 6,
    day: 'Day 6-7',
    emoji: '✍️',
    task: '撰寫緒論 + 文獻探討',
    where: 'Google Docs',
    link: 'https://docs.google.com',
    reward: '+20 文筆值',
  },
  {
    id: 7,
    day: 'Day 8',
    emoji: '🔧',
    task: '加入 AI Studio 實作說明與截圖',
    where: 'Google Docs',
    link: 'https://docs.google.com',
    reward: '+15 實作值',
  },
  {
    id: 8,
    day: 'Day 9',
    emoji: '📊',
    task: '製作市場數據圖表',
    where: 'Google 試算表',
    link: 'https://sheets.google.com',
    reward: '+15 視覺值',
  },
  {
    id: 9,
    day: 'Day 10-11',
    emoji: '✨',
    task: '用 Gemini 潤飾文章',
    where: 'Gemini',
    link: 'https://gemini.google.com',
    reward: '+15 品質值',
  },
  {
    id: 10,
    day: 'Day 12',
    emoji: '📤',
    task: '匯出 PDF 並繳交至 Tronclass',
    where: 'Tronclass',
    link: 'https://tronclass.dyu.edu.tw/course/8036/content#/',
    reward: '🏆 任務完成！',
    isCheckpoint: true,
  },
];

export const reportStructure = [
  { section: '封面 + 目錄', desc: '標題、姓名、學號、日期', weight: '-', words: '1 頁' },
  { section: '一、緒論', desc: '說明為何選這個金融科技主題、研究動機', weight: '10%', words: '約 300 字' },
  { section: '二、文獻探討', desc: '整理 3-5 篇相關文獻或案例', weight: '20%', words: '約 500 字' },
  { section: '三、案例分析', desc: '深入分析 1-2 個金融科技應用案例', weight: '25%', words: '約 600 字' },
  { section: '四、AI 實作說明', desc: '說明 Google AI Studio 的應用過程與截圖', weight: '20%', words: '約 400 字' },
  { section: '五、結論與建議', desc: '總結發現、提出你的觀點與建議', weight: '15%', words: '約 300 字' },
  { section: '六、AI 使用反思', desc: '說明使用哪些 AI 工具、如何驗證 AI 回答', weight: '10%', words: '約 200 字 + 截圖' },
];

export const faqs = [
  {
    q: '這門課沒有講義，要怎麼找資料？',
    a: '使用 NotebookLM 的「Discover」功能，輸入主題關鍵字（如「台灣行動支付」），AI 會自動搜尋網路上的相關資源。也可以用 Deep Research 功能進行深度研究，3-5 分鐘就能產出一份完整的研究報告！',
  },
  {
    q: 'Google AI Studio 要怎麼用？',
    a: '登入 aistudio.google.com → 點「Create new prompt」→ 在 System Instructions 寫角色設定（如：你是金融科技顧問）→ 在對話框測試你的 AI 應用 → 調整參數優化輸出 → 截圖放進報告。',
  },
  {
    q: 'AI Studio 實作可以做什麼？',
    a: '建議的方向有：金融問答機器人、投資風險評估助手、金融新聞摘要生成器、信用評分解釋器、FinTech 名詞解釋工具等。選一個你有興趣的方向，設計合理的 Prompt 即可！',
  },
  {
    q: 'AI Studio 的 System Instructions 要怎麼寫？',
    a: '基本格式：「你是一個[角色]，專門[做什麼事]。你的回答要[風格要求]，並且[其他限制]。」例如：「你是一個金融科技顧問，專門解答關於行動支付的問題。你的回答要簡潔易懂，並且引用台灣市場的實例。」',
  },
  {
    q: '報告可以大量使用 AI 生成的內容嗎？',
    a: '可以用 AI 幫你蒐集資料、整理文獻、潤飾文句，但分析和觀點要有自己的思考。記得在「AI 使用反思」說明你怎麼用、有沒有發現 AI 的錯誤。照抄 AI 內容但沒有自己想法會影響分數。',
  },
  {
    q: '什麼是 Deep Research？',
    a: 'NotebookLM 的深度研究功能！輸入研究問題後，AI 會自動瀏覽數百個網頁，3-5 分鐘後產出一份完整的研究報告，並附上所有來源。你可以直接把來源匯入筆記本，非常適合蒐集金融科技的最新資訊！',
  },
  {
    q: '圖表一定要自己做嗎？',
    a: '是的，用 Google 試算表製作。可以做：市場規模成長圖、用戶數比較、市佔率圓餅圖等。AI 可以幫你找數據，但圖表要自己做，並在報告中說明圖表的意義。',
  },
  {
    q: 'AI 使用反思要寫什麼？',
    a: '1. 用了哪些工具（NotebookLM、Gemini、AI Studio）2. 各工具用在哪裡 3. AI 有沒有給錯誤或不適合的答案 4. 你怎麼驗證和修正。記得附上 2-3 張對話截圖！',
  },
  {
    q: '第一週大綱要交什麼？',
    a: '報告大綱，包含：1. 選定的主題 2. 預計使用的 AI 工具 3. AI Studio 要做什麼應用 4. 報告的章節規劃。不用太長，一頁 A4 即可。',
  },
  {
    q: '可以寫跟同學一樣的主題嗎？',
    a: '主題方向可以一樣（如都寫行動支付），但案例和切入角度要不同。例如一人寫 LINE Pay，另一人寫街口支付。AI Studio 的應用也要有自己的設計。完全相同的報告會被視為抄襲。',
  },
];
