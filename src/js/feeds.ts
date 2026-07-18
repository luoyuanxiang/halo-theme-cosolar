// Feeds page — Relative time display + AJAX load more
(function () {
  "use strict";

  /* ===== Relative Time ===== */
  function relativeTime(dateStr: string): string {
    const now = Date.now();
    const then = new Date(dateStr).getTime();
    if (isNaN(then)) return dateStr;
    const diff = now - then;
    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;
    const week = 7 * day;
    if (diff < minute) return "刚刚";
    if (diff < hour) return Math.floor(diff / minute) + " 分钟前";
    if (diff < day) return Math.floor(diff / hour) + " 小时前";
    if (diff < week) return Math.floor(diff / day) + " 天前";
    const d = new Date(then);
    return (
      d.getFullYear() +
      "-" +
      String(d.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(d.getDate()).padStart(2, "0")
    );
  }

  function updateRelativeTimes(): void {
    document.querySelectorAll<HTMLElement>("[data-relative-time]").forEach((el) => {
      const dt = el.getAttribute("datetime");
      if (dt) el.textContent = relativeTime(dt);
    });
  }
  updateRelativeTimes();
  setInterval(updateRelativeTimes, 60000);

  /* ===== AJAX Load More ===== */
  const loadMoreBtn = document.querySelector<HTMLElement>("[data-feed-load-more]");
  if (!loadMoreBtn) return;

  const feedList = document.getElementById("feedList");
  if (!feedList) return;

  let isLoading = false;

  loadMoreBtn.addEventListener("click", function (e: MouseEvent) {
    e.preventDefault();
    if (isLoading) return;
    isLoading = true;

    const btn = loadMoreBtn;
    btn.classList.add("loading");
    const spanEl = btn.querySelector("span");
    const originalText = spanEl ? spanEl.textContent : "";
    if (spanEl) spanEl.textContent = "加载中...";

    const nextUrl = btn.getAttribute("href") || "";

    fetch(nextUrl, { headers: { "X-Requested-With": "XMLHttpRequest" } })
      .then(function (res: Response) {
        if (!res.ok) throw new Error("Network error");
        return res.text();
      })
      .then(function (html: string) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        // Append new feed items
        const newItems = doc.querySelectorAll("#feedList .feed-item");
        newItems.forEach(function (item) {
          feedList.appendChild(item);
        });

        // Update relative times for new items
        updateRelativeTimes();

        // Update or remove load-more button
        const newBtn = doc.querySelector<HTMLElement>("[data-feed-load-more]");
        if (newBtn) {
          btn.setAttribute("href", newBtn.getAttribute("href") || "");
          if (spanEl) spanEl.textContent = originalText;
          btn.classList.remove("loading");
        } else {
          btn.style.display = "none";
        }
      })
      .catch(function () {
        // Fallback: navigate to the URL
        window.location.href = nextUrl;
      })
      .finally(function () {
        isLoading = false;
      });
  });
})();
