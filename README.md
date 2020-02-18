# TossMusic

| Id | Method | Path | Description |
|----|--------|------|-------------|
| 1 | get | / | Muestra la página inicial sin estar logueado|
| 2 | get | /signup | Muestra el formulario para crear una nueva cuenta |
| 3 | post| /signup | Guarda en la base de datos el nuevo usuario |
| 4 | get | /login | Muestra el formulario para que el usuario se loguee |
| 5 | post| /login | Busca en la base de datos el usuario que se quiere loguear |
| 6 | get | /profile | Muestra el perfil del usuario una vez logueado |
| 7 | get | /playlist| Muestra el formulario para crear una nueva playlist (campo nombre y género)|
|8  |post |/playlist|Muestra la playlist creada en el profile|
|9  |get  |/h|Muestra la página principal de la aplicación una vez logueado|
|10 |get  |/search|Muestra dependiendo de los parámetros la información solicitada|
|11 | post| /playlist/song/:id | Añade las canciones a la playlist creada que hemos indicado por Id (nombre de la canción, imagen, género, artista, fecha, descarga y player)|
|12 |put  | /playlist/:id|Editar la playlist|
|13 | delete| /playlist/:id |Borrar la playlist
|14 | delete| /playlist/song/:id |Borrar canción|
|15 | get   | /logout | Desconectar usuario|

