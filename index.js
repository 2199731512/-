const dayjs = require('dayjs');

// 每秒执行一次
setInterval(() => {
  // 清空终端，让时间"刷新"的感觉
  console.clear();
  
  // 用 dayjs 格式化当前时间
  const now = dayjs().format('YYYY年MM月DD日  HH:mm:ss');
  console.log('🕐 当前时间：' + now);
}, 1000);