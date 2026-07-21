# 发布说明 · halo-theme-cosolar

## v1.0.8 更新内容

本次更新对**导航栏字体**做了一次轻量化与体验优化。

### ✨ 变更亮点

- **导航栏字体更换为小米 MiSans**
  - 原先使用本地自托管的圆体黑 `ChillRoundGothic`，现已改为通过 CDN 引入小米 **MiSans**（Regular 400）。
  - 导航栏与下拉菜单的 `font-family` 字体栈统一指向 `MiSans`，并保留「思源黑体 / 系统字体」作为兜底。
  - 导航栏中 `font-weight:600` 的菜单项由浏览器合成粗体（faux bold），与之前圆体黑的处理方式一致。

- **主题包体积大幅下降**
  - 移除了打包进主题的本地字体文件 `ChillRoundGothic_Normal.woff`（约 7MB）。
  - 主题包体积由 **9.73MB 降至约 2.6MB**，安装与加载更轻快。

### 🔧 技术细节

- 在 `src/partials/layout.html` 中通过 `<link>` 异步引入（不阻塞渲染）：
  ```html
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/misans-webfont@4.3.1/misans/misans-regular/result.min.css"
    media="print"
    onload="this.media = 'all'"
  />
  ```
- `src/css/main.css` 删除本地 `@font-face`，三处导航相关 `font-family` 中的 `ChillRoundGothic` → `MiSans`。
- 删除了不再引用的本地字体文件 `src/assets/fonts/ChillRoundGothic_Normal.woff`。

### ⚠️ 注意事项

1. **CDN 选择**：小米 MiSans 字体通过 `cdn.jsdelivr.net` 引入（已验证可用）。
   - 早期方案尝试过 `npm.elemecdn.com`，但该镜像**未同步 `misans-webfont` 包**（连 `package.json` 都返回 404），故放弃。
   - 若在中国大陆访问 `cdn.jsdelivr.net` 偏慢，可把域名替换为镜像 `fastly.jsdelivr.net` 或 `gcore.jsdelivr.net`，路径不变。
2. **应用范围**：MiSans 仅应用于**导航栏与下拉菜单**，正文仍使用 LXGW 霞鹜文楷（通过原有 CDN 引入）。
3. **首次加载依赖外网**：字体走 CDN，首次访问需联网获取；如需整站改用 MiSans 或改回自托管，可联系维护者调整。

### 📦 安装 / 升级

1. 下载 `dist/halo-theme-cosolar.zip`。
2. 在 Halo 后台「主题」→「安装主题」上传并启用。
3. 浏览器 **Ctrl+F5** 强制刷新以加载新字体。
4. F12 → Network 过滤 `misans`，确认 `result.min.css` 与 `.woff2` 分片返回 200。

---

主题仓库：https://github.com/cosolar/halo-theme-cosolar
问题反馈：https://github.com/cosolar/halo-theme-cosolar/issues
