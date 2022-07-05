// Llegir i invertir el contingut d'un fitxer en un directori.

const {
    readdir,
    readFile,
    writeFile
  } = require("fs/promises");

  const {
    join
  } = require("path");
  const inbox = join(__dirname, "inbox");
  const outbox = join(__dirname, "outbox");
  
  const invertirText = str =>
    str
    .split("")
    .reverse()
    .join("");

    async function llegiriInvertir () {
        try {
          const files = await readdir(inbox);
          for (const file of files) {
            const data = await readFile(join(inbox, file), "utf8");
            await writeFile(join(outbox, file), invertirText(data));
            console.log(`Fet!!! El contingut del fitxer original ${file} ubicat a la carpeta 'inbox' s'ha invertit correctament i s'ha desat a la carpeta 'outbox'!`);
          } 
        } catch(err){
          console.error(err);
        }
      }
      llegiriInvertir();