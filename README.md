# WebAI JavaScript Project

这是一个规范化的 JavaScript 项目模板，集成了现代前端开发的最佳实践。

## 项目特点

- 使用 ESLint 进行代码质量检查
- 使用 Prettier 进行代码格式化
- 使用 Husky 和 lint-staged 实现 Git 提交前检查
- 遵循现代 JavaScript 标准 (ES6+)
- 支持 ES Modules
- 包含基础测试示例

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发

```bash
# 运行代码检查
npm run lint

# 自动修复代码问题
npm run lint:fix

# 格式化代码
npm run format

# 检查代码格式
npm run format:check

# 验证代码质量和格式
npm run validate

# 运行测试
npm test

# 开发服务器
npm run dev
```

### 构建

```bash
# 清理构建目录
npm run clean

# 构建生产版本
npm run build
```

## 项目结构

```
.
├── src/              # 源代码目录
├── docs/             # 文档目录
├── tests/            # 测试文件目录
├── dist/             # 构建输出目录
├── .husky/           # Git hooks 配置
├── .vscode/          # VSCode 配置
├── package.json      # 项目配置文件
├── eslint.config.js  # ESLint 配置
├── .prettierrc       # Prettier 配置
├── .prettierignore   # Prettier 忽略配置
├── .eslintignore     # ESLint 忽略配置
├── .editorconfig     # 编辑器配置
└── .gitignore        # Git 忽略配置
```

## 代码规范

本项目遵循以下代码规范：

1. 使用 2 个空格缩进
2. 使用单引号
3. 语句末尾使用分号
4. 使用 Unix 换行符
5. 使用 const/let，不使用 var
6. 优先使用箭头函数和简写语法
7. 使用 camelCase 命名变量和函数
8. 类名使用 PascalCase
9. 私有属性使用下划线前缀
10. 文件名使用 kebab-case

代码会在每次 Git 提交时自动检查和格式化。

## Git 提交规范

为了保持提交历史的清晰和规范化，我们遵循 conventional commits 规范：

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

常见的提交类型:

- feat: 新功能
- fix: 修复 bug
- chore: 构建过程或辅助工具的变动
- docs: 文档更新
- refactor: 重构代码
- style: 代码格式调整（不影响代码运行的变动）
- test: 增加测试或修正现有测试

示例:

```
feat: 添加用户登录功能
fix: 修复数据加载问题
docs: 更新 API 文档
```

## 环境要求

- Node.js >= 14.0.0

## 许可证

MIT
