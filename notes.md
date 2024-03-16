# Curso docker campusmvp

## Comandos basicos

### Imagenes
* pull				// descargar imagen

* images			// listar imagenes
	* -q				// lista solo identificadores
	* -f				// usar filtro

* rmi 				// borrar imagenes
	* <nombre>			// elimina imagen si no hay contenedor en marcha
		* -f			// elimina nombre de la imagen
	* -f <id>			// elimina imagen si no hay contenedor 

### Contenedores
* run				// iniciar contenedor
	* -d				// modo detach. No se envia ni stdout ni stderr a nuestra consola
	* -p <host_p>:<container_p>	// mapear puertos

* ps				// listar contenedores en ejecucion
	* -a				// listar todos los contenedores
	* -name	<name>			// especificar nombre de un contenedor
	* -q				// lista solo identificadores
	* -n	<number>		// lista los ultimos n contenedores

* stop				// detener contenedor en ejecucion

* kill				// detener proceso en ejecucion en contenedor

* start				// iniciar contenedor parado

* rm				// borrar contenedor (solo si esta parado)
	* -f 				// parar contenedor y borrar

## Creacion de imagenes

¿Que se necesita para crear una imagen Docker? se necesita un fichero Dockerfile.

¿Que es im Dockerfile? Es un fichero de texto donde cada linea es una instruccion que Docker ejecuta para crear la imagen

### ¿ Qué elementos contiene un Dockerfile? 

* Un conjunto de archivos: realmente un filesystem completo
* Un conjunto de puertos expuesto: los puertos internos
* Una configuracion en forma de variables de entorno
* Un comando inicial que ejecutaran todos los contenedores creados a partir de esa imagen.

### Imagenes base

Para no complicarnos la vida usamos las "imagenes base", que aportan un entorno funcional de node, python...

`FROM node`

#### Dangling images

Si en nuestra lista de imagenes vemos <none>:<none> es una imagen colgante, no referenciada. Nos la podemos cargar con

`docker rmi $(docker images -f "dangling=true" -q)` o el equivalente `docker image prune`
