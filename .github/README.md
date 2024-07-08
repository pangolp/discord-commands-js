# Discord Commands

Este bot, esta desarrollado utilizando `discord.js`, siguiendo el tutorial del [siguiente enlace](https://www.youtube.com/watch?v=FqfzCqnc1Bk).

Cuenta con la estructura básica, que necesita un bot para su funcionamiento.

Los comandos, son añadidos dentro de la carpeta `commands`.

## Estructura basica del bot

```
discord-commands-js/
`-- commands
|   `-- avatar.js
|   `-- bienvenido.js
`-- config.json
`-- index.js
`-- package-lock.json
`-- package.json
```

## ¿Como utilizarlo?

1. Descarga o clona el repositorio.
2. Completa los datos dentro del `config.json`
3. Ejecuta `npm install` para instalar las dependencias necesarias.
4. Ejecuta `node index.js` o `node .`

```json
{
    "token": "",        // el token de tu bot, aqui.
    "channelId": ""     // el canal donde queres que se muestre el mensaje de bienvenida.
}
```

## Commandos disponibles

- `!avatar`: muestra el avatar de un usuario o el del propio usuario que ejecuta el bot.
- `!bienvenido`: responde, "Buenos dias"

Tambien añadimos la funcion de saludar cuando alguien entra al discord, y configurar un boton para que las personas puedan interactuar.
