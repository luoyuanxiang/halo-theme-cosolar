// Links page — 实时搜索 + 分组筛选（纯前端，无整页跳转）
(function () {
  "use strict";

  const filterNav = document.getElementById("linkFilters");
  if (!filterNav) return;

  const searchInput = document.getElementById("linksSearchInput") as HTMLInputElement | null;
  const searchEmpty = document.getElementById("linksSearchEmpty");
  const linkGroups = Array.from(document.querySelectorAll<HTMLElement>("[data-link-group]"));

  // "__all__" 表示显示全部分组
  let activeGroup = "__all__";
  let query = "";

  function applyFilter() {
    const q = query.trim().toLowerCase();
    let visibleCount = 0;

    linkGroups.forEach((group) => {
      const groupName = group.getAttribute("data-group-name") || "";
      const groupMatches = activeGroup === "__all__" || groupName === activeGroup;

      const items = group.querySelectorAll<HTMLElement>("[data-link-item]");
      let visibleInGroup = 0;

      items.forEach((item) => {
        const name = (item.getAttribute("data-name") || "").toLowerCase();
        const desc = (item.getAttribute("data-desc") || "").toLowerCase();
        const url = (item.getAttribute("data-url") || "").toLowerCase();
        const matchesQuery = !q || name.includes(q) || desc.includes(q) || url.includes(q);

        const show = groupMatches && matchesQuery;
        item.style.display = show ? "" : "none";
        if (show) {
          visibleInGroup++;
          visibleCount++;
        }
      });

      // 分组整体是否显示：被选中且至少有一条可见链接
      group.style.display = groupMatches && visibleInGroup > 0 ? "" : "none";
    });

    // 搜索无结果提示（仅在输入了关键词时）
    if (searchEmpty) {
      searchEmpty.style.display = visibleCount === 0 && q !== "" ? "block" : "none";
    }
  }

  // 分组筛选：前端切换，不跳转
  filterNav.querySelectorAll<HTMLButtonElement>(".link-filter").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeGroup = btn.getAttribute("data-group") || "__all__";
      filterNav.querySelectorAll(".link-filter").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      applyFilter();
    });
  });

  // 实时搜索
  if (searchInput) {
    let debounceTimer: number | undefined;
    searchInput.addEventListener("input", function () {
      if (debounceTimer) clearTimeout(debounceTimer);
      debounceTimer = window.setTimeout(() => {
        query = searchInput.value;
        applyFilter();
      }, 150);
    });

    // Esc 清空搜索
    searchInput.addEventListener("keydown", function (e: KeyboardEvent) {
      if (e.key === "Escape") {
        searchInput.value = "";
        query = "";
        applyFilter();
        searchInput.blur();
      }
    });
  }
})();
