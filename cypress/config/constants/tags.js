// cypress/support/constants/tags.js
export const TAGS = Object.freeze({
  // Test Types
  SMOKE: "@smoke", // 🚬 Smoke Tests
  REGRESSION: "@reg", // 🔄 Regression Tests
  SANITY: "@sanity", // ✅ Sanity Tests
  E2E: "@e2e", // 🔚 End to End Tests

  // Priority
  P0: "@p0", // 🚨 Critical Priority
  P1: "@p1", // ⚠️ High Priority
  P2: "@p2", // ℹ️ Medium Priority

  // Special Tags
  FLAKY: "@flaky", // ⚡ Known Flaky Tests
  SKIP: "@skip", // ⏭️ Tests to Skip
  LF: "@lf", // 🆕 Latest Feature
});

// Constants for colored console logs
export const LOG_STYLES = {
  ERROR: "color: #FF6B6B; font-weight: bold", // Red
  SUCCESS: "color: #51CF66; font-weight: bold", // Green
  INFO: "color: #339AF0; font-weight: bold", // Blue
  WARNING: "color: #FCC419; font-weight: bold", // Yellow
  TAG: "color: #845EF7; font-weight: bold", // Purple
};
