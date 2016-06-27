/*jshint esversion: 6 */

let codeMirrorOpts = {
    mode: "gfm",
    matchBrackets: true,
    theme: "3024-day",
    lineNumbers: true,
    scrollbarStyle: "simple",
    extraKeys: {
        "Alt-F": "findPersistent"
    }
};

// Initialize CodeMirror editor
let cmEditor = CodeMirror.fromTextArea($("#cm-editor")[0], codeMirrorOpts);