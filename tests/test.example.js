/**
 * 测试示例文件
 * 展示如何为JavaScript代码编写测试
 * @module test-example
 */

// 导入需要测试的函数
import { greet } from '../src/test.js';
import { App } from '../src/main.js';

// 简单的测试框架示例
/**
 * 执行测试用例
 * @param {string} description - 测试描述
 * @param {Function} testFunction - 测试函数
 */
function test(description, testFunction) {
  try {
    testFunction();
    console.log(`✓ ${description}`);
  } catch (error) {
    console.error(`✗ ${description}: ${error.message}`);
  }
}

/**
 * 断言两个值是否相等
 * @param {*} actual - 实际值
 * @param {*} expected - 期望值
 * @param {string} message - 错误消息
 */
function assertEquals(actual, expected, message = '') {
  if (actual !== expected) {
    throw new Error(`期望值: ${expected}, 实际值: ${actual}. ${message}`);
  }
}

// 测试greet函数
test('greet函数应该返回正确的问候语', () => {
  const result = greet('张三');

  assertEquals(result, '你好, 张三! 欢迎学习 JavaScript!');
});

test('greet函数应该处理特殊字符', () => {
  const result = greet('José');

  assertEquals(result, '你好, José! 欢迎学习 JavaScript!');
});

// 测试App类
test('App类应该正确初始化', () => {
  const app = new App('测试应用');

  assertEquals(app.name, '测试应用');
});

test('App.showMessage应该返回Promise', () => {
  const app = new App('测试应用');
  const result = app.showMessage();

  assertEquals(typeof result.then, 'function');
});

console.log('测试完成');
