本项目用到的技术栈：
    1.JSX、State、事件处理等必备知识
    2.状态提升、组件解耦、组合
    3.Refs转发
    4.高阶组件
    5.Runder Props
    6.错误边界（Error Boundaries）
技术栈-其他
    Hooks+Context/Redux Toolkit管理客户端全局状态
    React Query管理服务端全局状态
    性能优化、性能监控、性能报告
    自动化测试：单元测试、集成测试、e2e测试
    CSS-in-JS、Grid、Flexbox
    React Router6

    创建项目：
        npx create-react-app Jira --template typescript
        public/robots文件：里面的Disallow:/sectet设置的是不允许爬虫访问的文件
        gitignore:设置的是不允许长传git的文件
    文件配置：
        tsconfig.json里面配置："baseUrl": "./src",//默认会在src下面的目录寻找文件
        Prettier格式化文档：
            安装依赖：npm install --save-dev --save-exact prettier
            新建配置文件：echo {}> .prettierrc.json
            再新建一个 .prettierignore的文件//不需要格式化的文件 文件里面
                build
                coverage
            提交代码之前自动进行格式化：npx mrm@2 lint-staged
            安装eslint:npm install eslint-plugin-prettier
                package.json的eslintConfig里面添加上"prettier"
                安装commitlint的依赖//作用就是每次commit之前格式化代码
                npm install --save-dev @commitlint/config-conventional @commitlint/cli
                在package.json文件里添加
                    "husky": {
                        "hooks": {
                        "pre-commit": "lint-staged",
                        "commit-msg": "commitlint -E HUSKY_GIT_PRAMS"
                        }
                    },
                