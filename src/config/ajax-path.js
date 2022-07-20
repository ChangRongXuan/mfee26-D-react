// 讓fetch路徑統一集中在一個檔案管理
// 因為測試時的localhost代碼可能都不一樣，這樣方便修改

export const SERVER =  'http://localhost:3600' ;

// 檔名界定 GET/POST 方法
export const Event_List_GET =  `${SERVER}/events `;

