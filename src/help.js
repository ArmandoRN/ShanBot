const help = (prefix) => {
	return `
⌜ *ArmandBot 🤖 * ⌟  

◉ *INFORMACION*
   ○ Comando: ⌜ ${prefix} ⌟

◉ *CREAR STICKERS*
  ║
  ╠ ○ ${prefix}sticker
  ╠ Hacer sticker desde una imagen
  ╠ ○ ${prefix}attp (mas texto)
  ╠ Hacer sticker de un texto
  ╠ ○ ${prefix}stickergif
  ╠ Hacer sticker de video (6 segundos)
  ╠ ○ ${prefix}toimg
  ╠ De sticker a JPG
  ╠
  ╠ ○ ${prefix}ytmp4 (mas link)
  ╠ Descarga videos de Youtube
  ╠ ○ ${prefix}tomp3
  ╚ De video a MP3

◉ *VOZ*
  ╚ ○ ${prefix}tts es (mas texto)
`
}

exports.help = help
