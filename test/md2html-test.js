const assert = require("assert");
const fs = require("fs")
const path = require("path");
const md2html = require("../md2html");

it("convert Markdown to HTML (GFM=false)", () => {
    const sample = fs.readFileSync(path.resolve(__dirname, "./fixtures/sample.md"), { encoding: "utf-8" });
    const expected = fs.readFileSync(path.resolve(__dirname, "./fixtures/expected.html"), { encoding: "utf-8" });
    // 末尾の改行の有無の違いを無視するため、変換後のHTMLのスペースをtrimメソッドで削除後に比較
    assert.strictEqual(md2html(sample, { gfm: false }).trimEnd(), expected.trimEnd());
});

it("converts Markdown to HTML (GFM=true)", () => {
    const sample = fs.readFileSync(path.resolve(__dirname, "fixtures/sample.md"), { encoding: "utf-8" });
    const expected = fs.readFileSync(path.resolve(__dirname, "./fixtures/expected-gfm.html"), { encoding: "utf-8" });
    assert.strictEqual(md2html(sample, { gfm: true }).trimEnd(), expected.trimEnd());
});