/**
 * 测试模块
 * 包含用于测试的函数
 * @module test
 */
/**
 * 生成问候语
 * @param {string} name - 用户姓名
 * @returns {string} 格式化的问候语
 * @example
 * // 返回 '你好, 张三! 欢迎学习 JavaScript!'
 * greet('张三');
 */
function greet(name) {
  return `你好, ${name}! 欢迎学习 JavaScript!`;
}

// 导出函数供其他模块使用（模块应尽量避免在导入时产生副作用）
export { greet };
