<div align="center">

<img src="https://oss.towao.com/proxy/plain/img/2026/983f2475d8fff92d91499ac752062e30.png" width="150" height="100" alt="Cosolar Logo" />

# halo-theme-cosolar

### 极简不简单 — 面向开发者的现代 Halo 博客主题

**青绿美学** · **暗色模式** · **精选轮播** · **分类导航** · **全局搜索** · **完美移动端适配**

[![Halo >=2.20](https://img.shields.io/badge/Halo-%3E%3D2.20-10B981?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xMiAyTDIgN2wxMCA1IDEwLTV6Ii8+PC9zdmc+)](https://halo.run)
[![License GPL-3.0](https://img.shields.io/badge/License-GPL--3.0-10B981?style=flat-square)](LICENSE)
[![Version 1.0.0](https://img.shields.io/badge/Version-1.0.0-10B981?style=flat-square)](https://github.com/cosolar/halo-theme-cosolar/releases)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-Next-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)

**🚀 [在线预览 →](https://note.minims.cn)**

</div>

---

## ✨ 为什么选择 theme-cosolar？

> 把「内容」放回舞台中央 —— 干净的排版、克制的动效、合理的留白，让代码与文字都能舒适呼吸。

市面上 Halo 主题很多，但专为**技术写作者**量身打造的却很少。Cosolar 从开发者的真实阅读场景出发，打磨了每一个交互细节：

| 🤔 痛点 | ✅ theme-cosolar 的解法 |
|---|---|
| 长文阅读找不到方向 | 阅读进度条 + 悬浮目录（TOC），随时知道"在哪、还有多远" |
| 代码块在暗色模式下刺眼 | 三档配色切换 + 毛玻璃导航栏，深夜码字也舒适 |
| 手机阅读体验割裂 | 贴底毛玻璃操作栏、抽屉式目录、自动隐藏侧边栏 |
| 精选好文淹没在列表里 | 首页精选轮播卡片，手动指定 / 自动播放 / 置顶回退 |
| 想换个颜色又怕改坏 | 后台一键换色，全站按钮 / 链接 / 标签 / 进度条联动 |
| 文章图片太小看不清 | 零依赖图片查看器，滚轮缩放 / 拖动 / 双击复位 / ESC 关闭 |

---

## 🎯 功能全览

### 🎨 视觉与主题
- **青绿美学** — 默认主色 `#10B981`，后台一键换色，全站联动
- **暗色模式** — 跟随系统 / 强制浅色 / 强制暗色三档可切
- **毛玻璃风格** — 导航栏与操作栏 `backdrop-filter` 毛玻璃质感
- **CSS 变量驱动** — 无 Tailwind 依赖，原生 CSS + 变量体系，轻量可控

### 🖼️ 首页体验
- **精选轮播** — 首页顶部卡片轮播，手动指定文章、自动播放、置顶回退
- **文章卡片** — 封面图 + 标题 + 摘要 + 分类标签 + 时间，信息密度恰到好处
- **侧边栏** — 热门标签 / 分类导航 / 近期更新 / 全局搜索，模块化可单独开关

### 📖 阅读体验
- **文章目录（TOC）** — 桌面端右侧悬浮跟随，移动端抽屉式弹出，1px 极细滚动条
- **阅读进度条** — 顶部 2px 彩色渐变，实时反映阅读位置
- **图片查看器** — 点击放大，滚轮缩放 / 拖动 / 双击复位 / ESC 关闭，零依赖
- **点赞 / 评论 / 分享 / 回顶** — 文章页底部贴底毛玻璃横条，5 按钮平分宽度

### 📱 移动端适配
- **≤768px** — 侧边栏自动隐藏，导航收起为汉堡菜单，操作栏贴底
- **≤480px** — 小屏进一步紧凑，按钮间距收窄
- **769–1024px** — 平板隐藏 TOC 列，保留内容 + 侧边栏双栏

### ⚡ 工程化
- **Vite 构建** — TypeScript + `vite-plugin-halo-theme`，产物精简，按模板分块
- **Thymeleaf 3.1** — Halo 原生模板引擎，无额外运行时依赖
- **FormKit 配置** — 后台设置表单全部 FormKit 声明式定义

---

## 📸 预览

**🚀 演示站点：** [https://note.minims.cn](https://note.minims.cn)

<table>
<tr>
<td><img src="https://oss.towao.com/proxy/plain/img/2026/e298d593380afee655b78d9c754e88c4.png" alt="首页" /></td>
<td><img src="https://oss.towao.com/proxy/plain/img/2026/f172b5437e47aa91f20dc6a77b0632fe.png" alt="暗色模式" /></td>
</tr>
<tr>
<td>
  <img src="https://oss.towao.com/proxy/plain/img/2026/f3b0d6a6b6771f3f061bd47327b2ec41.png" alt="f3b0d6a6b6771f3f061bd47327b2ec41.png">
</td>
<td><img src="https://oss.towao.com/proxy/plain/img/2026/6c0b7a3d95b9450d5c3fed86d0b51bc6.png" alt="文章页" /></td>
</tr>
<tr>
<td><img src="https://oss.towao.com/proxy/plain/img/2026/0a5adf875585795d1a77ad82fe3a1d20.png" alt="暗色模式" /></td>
<td><img src="https://oss.towao.com/proxy/plain/img/2026/2e2014d86ce40843710eb172947c0cd1.png" alt="移动端" /></td>
</tr>
</table>

---

## 🚀 快速开始

### 环境要求

| 项目 | 版本 |
|---|---|
| Halo | `>=2.20.0` |
| Node.js | `>=18`（仅构建时需要） |
| pnpm | `10+`（仅构建时需要） |

### 方式一：直接安装（推荐）

1. 前往 [Releases](https://github.com/cosolar/halo-theme-cosolar/releases) 下载最新 `cosolar-<version>.zip`
2. 进入 **Halo Console → 主题管理 → 安装主题** → 上传 ZIP
3. 安装完成后点击 **启用** 🎉

### 方式二：从源码构建

```bash
git clone https://github.com/cosolar/halo-theme-cosolar.git
cd halo-theme-cosolar
pnpm install
pnpm build            # 产物：templates/ + cosolar-<version>.zip
```

将生成的 ZIP 上传到 Halo，或将整个目录放入 Halo 工作目录的 `themes/cosolar/` 下（目录名须与 `theme.yaml` 中 `metadata.name` 一致）。

---

## 🛠️ 开发

```bash
pnpm install
pnpm dev              # 监听文件变化，实时构建到 templates/
pnpm check            # 检查模板与配置
pnpm build-only       # 仅构建（不打 ZIP），用于本地联调
```

> 💡 开发时建议关闭 Halo 模板缓存：
> - **Docker**：环境变量 `SPRING_THYMELEAF_CACHE=false`
> - **源码**：`application.yaml` 设 `spring.thymeleaf.cache: false`

---

## ⚙️ 配置项

主题安装后，在 **Halo Console → 主题管理 → Cosolar → 设置** 中配置，共 7 个分组：

### 基础设置 (`basic`)

| 字段 | 说明 | 默认值 |
|---|---|---|
| `logo_image` | Logo 图片，留空显示默认代码图标 | — |
| `logo_image_size` | Logo 显示尺寸 | `36` |
| `logo_text` | 头部站点名称 | `码迹志` |
| `tagline` | Logo 下方副标题 | `记录技术成长，分享解决方案` |
| `footer_text` | 页脚版权文字（支持 HTML） | — |
| `icp` | ICP 备案号 | — |

### 样式设置 (`style`)

| 字段 | 说明 | 默认值 |
|---|---|---|
| `primary_color` | 主题色 | `#10B981` |
| `color_scheme` | 默认配色：跟随系统 / 浅色 / 暗色 | `auto` |
| `posts_per_page` | 每页文章数 | `10` |
| `content_width` | 内容最大宽度 | `1200` |
| `sidebar_width` | 侧边栏宽度 | `320` |
| `content_gap` | 内容区与侧边栏间距 | `24` |
| `toc_width` | 文章目录宽度 | `240` |
| `excerpt_length` | 文章卡片摘要字数 | `120` |

> 💡 代码高亮主题由 Halo `plugin-shiki` 插件后台统一配置（亮色/暗色），主题不再单独提供该选项。

### 精选文章 (`featured`)

| 字段 | 说明 | 默认值 |
|---|---|---|
| `show_featured` | 启用首页轮播 | `true` |
| `featured_posts` | 指定精选文章（可拖拽排序） | `[]` |
| `autoplay` | 自动轮播 | `true` |
| `interval` | 轮播间隔（ms） | `5000` |
| `fallback` | 未配置时回退：最新 / 置顶 / 不显示 | `latest` |

### 侧边栏设置 (`sidebar`)

| 字段 | 说明 | 默认值 |
|---|---|---|
| `show_sidebar` | 显示侧边栏（≤768px 自动隐藏） | `true` |
| `show_search` | 显示搜索 | `true` |
| `show_hot_tags` | 显示热门标签 | `true` |
| `show_categories` | 显示分类导航 | `true` |
| `show_recent` | 显示近期更新 | `true` |

### 分类页设置 (`category`)

| 字段 | 说明 | 默认值 |
|---|---|---|
| `categories_cover` | 分类列表页封面图 | — |
| `category_cover` | 分类详情页封面图 | — |
| `category_cover_fallback` | 优先使用分类自带封面 | `true` |

### 归档页设置 (`archive`)

| 字段 | 说明 | 默认值 |
|---|---|---|
| `archives_cover` | 归档页封面图 | — |

### 社交链接 (`social`)

| 字段 | 说明 | 默认值 |
|---|---|---|
| `author_name` / `author_avatar` / `author_bio` | 页脚博主卡片 | — |
| `github` / `email` / `juejin` / `rss` | 社交链接 | — |

---

## 📐 响应式断点

| 断点 | 布局 | 行为 |
|---|---|---|
| `> 1024px` | 三栏 | 内容 + 侧边栏 + TOC |
| `769–1024px` | 双栏 | 内容 + 侧边栏（隐藏 TOC） |
| `≤ 768px` | 单栏 | 侧边栏隐藏，汉堡菜单，操作栏贴底 |
| `≤ 480px` | 紧凑单栏 | 按钮间距进一步收窄 |

---

## 📂 目录结构

```
halo-theme-cosolar/
├── theme.yaml                 # 主题元数据
├── settings.yaml              # 后台配置表单（FormKit）
├── annotation-setting.yaml    # 菜单/分类/文章自定义注解字段
├── package.json               # 构建脚本与依赖
├── src/                       # 源码（开发目录）
│   ├── index.html             # 首页：精选轮播 + 文章列表 + 侧边栏
│   ├── post.html              # 文章页：正文 + TOC + 底部操作栏
│   ├── page.html              # 自定义页面
│   ├── archives.html          # 归档页
│   ├── categories.html        # 分类汇总
│   ├── category.html          # 分类列表（带侧边栏）
│   ├── tags.html              # 标签云
│   ├── tag.html               # 标签列表（带侧边栏）
│   ├── partials/              # 复用片段
│   │   ├── layout.html        # 全局布局：head / nav / footer / CSS 变量注入
│   │   ├── sidebar.html       # 侧边栏组件
│   │   ├── post-card.html     # 文章卡片
│   │   └── pagination.html    # 分页
│   ├── css/main.css           # 全局样式 + 响应式断点
│   └── js/                    # TypeScript 入口
│       ├── main.ts            # 全局交互（汉堡菜单 / 主题切换 / 滚动阴影 / 导航激活）
│       ├── index.ts           # 首页轮播逻辑
│       └── post.ts            # TOC / 点赞 / 评论 / 分享 / 回顶 / 阅读进度 / 图片查看器
└── templates/                 # 构建产物（提交时被 .gitignore 忽略，发布包内含）
```

---

## 🔌 兼容的 Halo API

主题使用以下 Finder / 全局变量，均已对齐 Halo 2.20+ 接口：

- **Finder**：`postFinder` / `categoryFinder` / `tagFinder` / `singlePageFinder` / `menuFinder`
- **点赞**：`POST /apis/api.halo.run/v1alpha1/trackers/upvote`，body `{group, plural, name}`
- **评论**：渲染后挂载 `<halo-comment-widget>` 自定义元素
- **全局变量**：`site`、`theme`、`theme.config.*`

---

## 🗺️ 路线图

- [ ] 主题管理页首屏截图
- [ ] i18n 多语言（中 / 英）
- [ ] 搜索结果页模板
- [ ] 404 / 500 错误页美化
- [ ] 文章系列/专栏支持
- [ ] 首页布局模式切换（列表 / 瀑布流）

---

## 🤝 贡献

欢迎提 Issue 与 PR！无论是 Bug 反馈、功能建议还是代码贡献，都让 Cosolar 变得更好。

1. Fork 本仓库
2. 新建分支：`git checkout -b feat/your-feature`
3. 提交：`git commit -m "feat: ..."`（遵循 [Conventional Commits](https://www.conventionalcommits.org/)）
4. 推送并提交 Pull Request

> 开发前请先 `pnpm install && pnpm dev` 跑通本地构建。

---

## 📄 许可证

[GPL-3.0](LICENSE)

---

## 💝 致谢

- [Halo](https://halo.run) — 强大易用的开源建站平台
- 所有为本主题提过 Issue 与建议的用户

---

<div align="center">

**如果 Cosolar 对你有帮助，给个 ⭐ Star 吧！**

</div>