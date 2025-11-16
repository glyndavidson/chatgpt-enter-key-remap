
(function() {
  'use strict';
  console.log("🔄 Remap: Enter → Shift+Enter, Ctrl+Enter → Send");

  function getEditor(target) {
    return target?.closest?.('div[contenteditable="true"], [role="textbox"]');
  }

  function clickSend(fromEl) {
    const form = fromEl.closest("form");
    const btn = form?.querySelector('button[data-testid="send-button"], button[aria-label="Send"]');
    if (btn) {
      btn.click();
      console.log("✅ Ctrl+Enter → send");
    }
  }

  document.addEventListener("keydown", function(e) {
    const editor = getEditor(e.target);
    if (!editor) return;

    // Enter → simulate real Shift+Enter (newline)
    if (e.key === "Enter" && !e.shiftKey && !e.ctrlKey) {
      e.preventDefault();
      e.stopImmediatePropagation();

      const evt = new KeyboardEvent("keydown", {
        key: "Enter",
        code: "Enter",
        keyCode: 13,
        which: 13,
        bubbles: true,
        cancelable: true,
        shiftKey: true // force Shift!
      });
      Object.defineProperty(evt, "target", { value: editor });
      editor.dispatchEvent(evt);

      console.log("↩️ Enter remapped to Shift+Enter (newline)");
    }

    // Ctrl+Enter → send via button
    if (e.key === "Enter" && e.ctrlKey) {
      e.preventDefault();
      e.stopImmediatePropagation();
      clickSend(editor);
    }
  }, true);
})();