const fs = require("node:fs");
const path = require("node:path");
const sharp = require("sharp");

const root = path.resolve(__dirname, "..");
const imageDirectory = path.join(root, "imagens");
const responsive = [
    "idosos-acolhimento.jpg",
    "doacao-impacto.jpg",
    "reencontro-familiar.jpg",
    "oficina-memorias.jpg",
    "volta-convivio.jpg",
    "ilustracao-quem-somos.png",
    "ilustracao-o-que-fazemos.png"
];

async function convert(file, width) {
    const source = path.join(imageDirectory, file);
    const name = path.parse(file).name;
    const destination = path.join(imageDirectory, `${name}-${width}.webp`);
    await sharp(source)
        .rotate()
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 78, effort: 5 })
        .toFile(destination);
}

async function optimize() {
    await Promise.all(responsive.flatMap((file) => [480, 960, 1440].map((width) => convert(file, width))));
    await Promise.all([
        convert("simbolo-header-colorido.png", 128),
        convert("logo-instituto-tempo-tranquilo.png", 160)
    ]);
    console.log("Imagens WebP responsivas atualizadas em imagens/");
}

optimize().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
