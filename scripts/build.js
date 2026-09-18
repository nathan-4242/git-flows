const fs = require("node:fs");
const path = require("node:path");
const esbuild = require("esbuild");
const { minify } = require("html-minifier-terser");

const root = path.resolve(__dirname, "..");
const output = path.join(root, "dist");
const scripts = ["script.js", "templates.js", "newsletter.js", "cadastro.js", "router.js"];

if (path.dirname(output) !== root || path.basename(output) !== "dist") {
    throw new Error("Diretório de saída fora do projeto.");
}

async function build() {
    const sources = scripts.map((name) =>
        fs.readFileSync(path.join(root, "js", name), "utf8").replaceAll("../imagens/", "./imagens/")
    );
    const js = await esbuild.build({
        stdin: {
            contents: sources.join("\n;\n"),
            resolveDir: root,
            sourcefile: "site.js",
            loader: "js"
        },
        bundle: true,
        minify: true,
        format: "iife",
        target: "es2019",
        write: false,
        outfile: path.join(output, "js", "app.min.js")
    });

    const css = await esbuild.build({
        entryPoints: [path.join(root, "css", "main.css")],
        bundle: true,
        minify: true,
        write: false,
        outfile: path.join(output, "css", "main.css")
    });

    let html = fs.readFileSync(path.join(root, "html", "index.html"), "utf8");
    const firstTag = `    <script src="../js/${scripts[0]}"></script>`;
    const lastTag = `    <script src="../js/${scripts.at(-1)}"></script>`;
    const start = html.indexOf(firstTag);
    const end = html.indexOf(lastTag);
    if (start < 0 || end < start) throw new Error("Scripts da página não encontrados na ordem esperada.");
    const originalTags = html.slice(start, end + lastTag.length);
    const found = [...originalTags.matchAll(/<script src="\.\.\/js\/([^"]+)"><\/script>/g)].map((match) => match[1]);
    if (found.join(",") !== scripts.join(",")) throw new Error("A ordem dos scripts mudou; revise a build.");
    html = html.slice(0, start) + '    <script src="../js/app.min.js"></script>' + html.slice(end + lastTag.length);
    html = html.replaceAll("../imagens/", "./imagens/")
        .replace('../css/main.css', './css/main.css')
        .replace('../js/app.min.js', './js/app.min.js');
    html = await minify(html, {
        collapseWhitespace: true,
        removeComments: true,
        removeAttributeQuotes: false,
        removeEmptyAttributes: false
    });

    fs.rmSync(output, { recursive: true, force: true });
    fs.mkdirSync(output, { recursive: true });
    fs.mkdirSync(path.join(output, "css"), { recursive: true });
    fs.mkdirSync(path.join(output, "js"), { recursive: true });
    fs.writeFileSync(path.join(output, "index.html"), html);
    fs.writeFileSync(path.join(output, "js", "app.min.js"), js.outputFiles[0].contents);
    fs.writeFileSync(path.join(output, "css", "main.css"), css.outputFiles[0].contents);
    fs.cpSync(path.join(root, "imagens"), path.join(output, "imagens"), { recursive: true });

    console.log("Build criada em dist/");
}

build().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
