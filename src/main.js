/**
 * 主应用文件
 * 展示现代JavaScript特性和最佳实践
 * @module App
 */

// 导入其他模块
import { greet } from './test.js';

/**
 * 应用主类
 * @class
 */
class App {
  /**
   * 创建一个应用实例
   * @param {string} name - 应用名称
   */
  constructor(name) {
    /**
     * 应用名称
     * @type {string}
     */
    this.name = name;
    // 将箭头函数方法绑定到实例上
    this.init = this.init.bind(this);
    this.showMessage = this.showMessage.bind(this);
  }

  /**
   * 初始化应用
   * @returns {void}
   */
  init() {
    console.log(`应用 ${this.name} 已初始化`);
    this.showMessage();
  }

  /**
   * 显示消息
   * @returns {Promise<string>} 返回包含消息的 Promise
   */
  showMessage() {
    // 使用模板字符串
    const message = greet(this.name);

    console.log(message);

    // 返回Promise以便链式调用
    return Promise.resolve(message);
  }

  /**
   * 处理数据（异步示例）
   * @returns {Promise<Object>} 处理后的数据
   */
  async processData() {
    try {
      const data = await this.fetchData();

      console.log('处理后的数据:', data);

      return data;
    } catch (error) {
      console.error('处理数据时出错:', error);
      throw error;
    }
  }

  /**
   * 模拟异步数据获取
   * @returns {Promise<Object>} 返回模拟的数据对象
   */
  fetchData() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          id: 1,
          name: this.name,
          timestamp: new Date().toISOString(),
        });
      }, 1000);
    });
  }
}

// 使用应用
const app = new App('WebAI');

app.init();

// 导出应用类供其他模块使用
export { App };

// 默认导出应用实例
export default app;
