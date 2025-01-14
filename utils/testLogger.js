// cypress/support/utils/testLogger.js
// No imports needed - using global TAGS and LOG_STYLES

class TestLogger {
  static logTestStart(testTitle) {
    const tags = this.extractTags(testTitle);
    console.log(
      "%c🎯 Starting Test: %c" + testTitle,
      LOG_STYLES.INFO,
      "color: black"
    );

    if (tags.length > 0) {
      console.log(
        "%c🏷️ Test Tags: %c" + tags.join(", "),
        LOG_STYLES.TAG,
        "color: black"
      );
    } else {
      console.log("%c💡 Running as E2E test (no tags)", LOG_STYLES.INFO);
    }
  }

  static logTestEnd(testTitle, status) {
    const emoji = status === "passed" ? "✅" : "❌";
    const style = status === "passed" ? LOG_STYLES.SUCCESS : LOG_STYLES.ERROR;

    console.log(
      `%c${emoji} Test ${status.toUpperCase()}: %c${testTitle}`,
      style,
      "color: black"
    );
  }

  static extractTags(testTitle) {
    return Object.values(TAGS).filter((tag) => testTitle.includes(tag));
  }

  static suggestTags() {
    console.log("%c📝 Available Tags:", LOG_STYLES.INFO);
    Object.entries(TAGS).forEach(([key, value]) => {
      console.log(
        `%c${value}: %c${this.getTagEmoji(key)} ${this.getTagDescription(key)}`,
        LOG_STYLES.TAG,
        "color: black"
      );
    });
  }

  static getTagEmoji(tagKey) {
    const emojiMap = {
      SMOKE: "🚬",
      REGRESSION: "🔄",
      SANITY: "✅",
      P0: "🚨",
      P1: "⚠️",
      P2: "ℹ️",
      FLAKY: "⚡",
      SKIP: "⏭️",
      LF: "🆕",
    };
    return emojiMap[tagKey] || "🏷️";
  }

  static getTagDescription(tagKey) {
    const descMap = {
      SMOKE: "Basic functionality tests",
      REGRESSION: "Full regression suite",
      SANITY: "Quick sanity checks",
      P0: "Critical priority",
      P1: "High priority",
      P2: "Medium priority",
      FLAKY: "Known flaky tests",
      SKIP: "Skipped tests",
      LF: "Latest Feature",
    };
    return descMap[tagKey] || "Custom tag";
  }
}

export default TestLogger;
