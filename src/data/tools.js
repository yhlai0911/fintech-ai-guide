export const tools = {
  notebooklm: {
    name: 'NotebookLM',
    icon: '📘',
    color: 'from-blue-500 to-cyan-400',
    desc: '網路搜尋 + Deep Research → 快速掌握金融科技趨勢',
    url: 'https://notebooklm.google.com',
    steps: [
      { title: '1. 建立筆記本', content: '點「New Notebook」→ 取名「金融科技報告」' },
      { title: '2. 探索來源', content: '點「Discover」→ 輸入「台灣金融科技發展」搜尋網路資源' },
      { title: '3. Fast Research', content: '快速搜尋（30-45秒）→ 回傳 10-15 個來源供你挑選' },
      { title: '4. Deep Research', content: '深度研究（3-5分鐘）→ AI 瀏覽數百網頁，產出完整報告' },
      { title: '5. 匯入來源', content: '選擇有用的來源，一鍵匯入筆記本' },
      { title: '6. 開始提問', content: '根據所有來源，AI 幫你整理重點' },
    ],
    prompts: [
      '「台灣行動支付市場的現況和趨勢是什麼？」',
      '「純網銀和傳統銀行的差異有哪些？」',
      '「請整理台灣金管會對虛擬資產的監管政策」',
      '「搜尋 2024 年全球金融科技投資數據」',
    ],
  },
  gemini: {
    name: 'Gemini',
    icon: '✨',
    color: 'from-purple-500 to-pink-400',
    desc: '搜尋時事資料 → 分析議題 → 潤飾文句',
    url: 'https://gemini.google.com',
    steps: [
      { title: '1. 登入', content: '用學校 Google 帳號登入' },
      { title: '2. 蒐集資料', content: '問「台灣 2024 行動支付市佔率」取得背景' },
      { title: '3. 請 AI 分析', content: '問「分析 LINE Pay 和街口支付的競爭優勢」' },
      { title: '4. 潤飾文章', content: '貼草稿，請「修正通順度，保持學術風格」' },
    ],
    prompts: [
      '「請整理台灣金融科技的最新發展趨勢」',
      '「請比較台灣三家純網銀的經營策略」',
      '「請幫我潤飾這段文字，讓它更通順：[貼上草稿]」',
    ],
  },
  sheets: {
    name: 'Google 試算表',
    icon: '📊',
    color: 'from-emerald-500 to-teal-400',
    desc: '輸入數據 → 製作市場分析圖表',
    url: 'https://sheets.google.com',
    steps: [
      { title: '1. 輸入數據', content: 'A欄=年份, B欄=交易金額, C欄=用戶數' },
      { title: '2. 選取資料', content: '框選所有數據（含標題）' },
      { title: '3. 插入圖表', content: '「插入」→「圖表」→ 選「折線圖」或「長條圖」' },
      { title: '4. 美化圖表', content: '加標題、軸標籤、調整顏色' },
    ],
    prompts: [],
  },
  docs: {
    name: 'Google Docs',
    icon: '📄',
    color: 'from-sky-500 to-blue-400',
    desc: '撰寫報告 → 插入圖表 → 匯出 PDF',
    url: 'https://docs.google.com',
    steps: [
      { title: '1. 新增文件', content: '點「空白」→ 命名「金融科技報告_姓名」' },
      { title: '2. 套用格式', content: '標題用「標題1」，小標用「標題2」' },
      { title: '3. 插入圖表', content: '「插入」→「圖表」→「從試算表」' },
      { title: '4. 匯出 PDF', content: '「檔案」→「下載」→「PDF」' },
    ],
    prompts: [],
  },
};

export const navTabs = [
  { id: 'quest', label: '📜 主線任務', subtitle: '作業說明' },
  { id: 'map', label: '🗺️ 冒險地圖', subtitle: '每日進度' },
  { id: 'gear', label: '⚔️ 裝備指南', subtitle: '工具教學' },
  { id: 'boss', label: '🏆 通關條件', subtitle: '評分標準' },
  { id: 'grade', label: '🤖 AI 評分', subtitle: '上傳報告' },
  { id: 'sample', label: '📖 攻略範本', subtitle: '報告範例' },
  { id: 'npc', label: '💬 NPC 問答', subtitle: '常見問題' },
];
