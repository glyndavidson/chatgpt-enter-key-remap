// ---------------------------------------------------------------------------
// ChatGPT Enter Key Remap
// ---------------------------------------------------------------------------
// This script modifies ChatGPT's default keboard behaviour:
//
//   • Enter        → inserts a newline (Shift+Enter behaviour)
//   • Ctrl+Enter   → sends the message

(function() {
  'use strict';
  // console.log("🔄 Remap: Enter → Shift+Enter, Ctrl+Enter → Send");

   // Finds the active ChatGPT editor (contenteditable div or textbox role)
  function getEditor(target) {
    return target?.closest?.('div[contenteditable="true"], [role="textbox"]');
  }

   // Sends the ChatGPT message by clicking the real send button
  function clickSend(fromEl) {
    const form = fromEl.closest("form");
    const btn = form?.querySelector('button[data-testid="send-button"], button[aria-label="Send"]');
    if (btn) {
      btn.click();
      // console.log("✅ Ctrl+Enter → send");
    }
  }

  document.addEventListener("keydown", function(e) {
    const editor = getEditor(e.target);
    if (!editor) return;

    // Remap Enter Key to New Line by listening for Enter Key Press and replacing it with Shift+Enter (ChatGPT Default behavior)
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

    // Remap Ctrl+Enter to Submit Message
    if (e.key === "Enter" && e.ctrlKey) {
      e.preventDefault();
      e.stopImmediatePropagation();
      clickSend(editor);
    }
  }, true);

})();
