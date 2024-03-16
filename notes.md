# Curso docker campusmvp

## Comandos basicos

## Comandos con Imagenes
* pull				// descargar imagen

* images			// listar imagenes
	* -q				// lista solo identificadores
	* -f				// usar filtro

* rmi 				// borrar imagenes
	* <nombre>			// elimina imagen si no hay contenedor en marcha
		* -f			// elimina nombre de la imagen
	* -f <id>			// elimina imagen si no hay contenedor 

## Contenedores
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


## ¿Que se necesita para crear una imagen Docker? 

se necesita un fichero Dockerfile.

## ¿Que es um Dockerfile? 

Es un fichero de texto donde cada linea es una instruccion que Docker ejecuta para crear la imagen

## ¿ Qué elementos contiene un Dockerfile? 

* Un conjunto de archivos: realmente un filesystem completo
* Un conjunto de puertos expuesto: los puertos internos
* Una configuracion en forma de variables de entorno
* Un comando inicial que ejecutaran todos los contenedores creados a partir de esa imagen.


## ¿Cómo es posible que dos imágenes tengan el mismo ID?

En Docker, dos imágenes pueden tener el mismo ID si se construyen a partir de la misma imagen base y no se realizan cambios significativos en el Dockerfile. Esto ocurre porque Docker considera que son la misma imagen, ya que comparten la misma base y configuración.

## ¿Qué función cumple la instrucción ENV en un Dockerfile?

La instrucción ENV se utiliza en un Dockerfile para definir variables de entorno que estarán disponibles para todos los contenedores creados a partir de la imagen. Esta instrucción tiene la sintaxis `ENV variable=valor` y permite configurar el entorno del contenedor.

## ¿Cómo gestiona Docker el tamaño en disco de las imágenes?

Docker utiliza un sistema de "capas" para gestionar el tamaño en disco de las imágenes. Cada instrucción en un Dockerfile agrega una capa adicional sobre la imagen base, y Docker intenta reutilizar estas capas para minimizar el espacio en disco. Por lo tanto, las imágenes comparten las capas comunes, lo que reduce el espacio ocupado en disco.

## ¿Qué comando se utiliza para exportar una imagen de Docker a un archivo?

El comando utilizado para exportar una imagen de Docker a un archivo es `docker save`. Por ejemplo, para exportar una imagen llamada `myfirstimage` a un archivo `myfirstimage.tar`, se utiliza el comando `docker save myfirstimage -o myfirstimage.tar`.

## ¿Qué son las imágenes colgantes en Docker?

Las imágenes colgantes, también conocidas como dangling images en inglés, son aquellas imágenes que ya no están referenciadas (utilizadas) por ninguna otra imagen. Estas imágenes ocupan espacio en disco y pueden ser eliminadas para liberar espacio.

## ¿Cómo se generan las imágenes colgantes en Docker?

Las imágenes colgantes suelen aparecer al construir nuevas versiones de una imagen propia sin cambiar el nombre o el tag. Si se construye una nueva versión de una imagen con el mismo nombre y tag, la nueva imagen reemplaza a la anterior y la anterior se convierte en una imagen colgante.

## ¿Cómo se pueden eliminar las imágenes colgantes en Docker?

Para eliminar las imágenes colgantes en Docker, se puede utilizar el comando `docker rmi $(docker images -f "dangling=true" -q)` en bash o PowerShell en Windows. También se puede utilizar el comando `docker image prune`, que realiza la misma tarea.

## ¿Qué son las imágenes intermedias en Docker?

Las imágenes intermedias en Docker son aquellas que tienen el nombre y tag <none>:<none> y no aparecen listadas con el comando `docker images`. Estas imágenes contienen capas intermedias utilizadas por otras imágenes y no suponen un problema, por lo que no es necesario eliminarlas.

## ¿Cómo gestiona Docker el tamaño en disco de las imágenes?

Docker utiliza un sistema de "capas" para gestionar el tamaño en disco de las imágenes. Cada instrucción en un Dockerfile agrega una capa adicional sobre la imagen base, y Docker intenta reutilizar estas capas para minimizar el espacio en disco. Las imágenes comparten las capas comunes, lo que reduce el espacio ocupado en disco.

## ¿Qué cambios introduce BuildKit en la gestión de imágenes en Docker?

BuildKit no elimina automáticamente las imágenes anteriores al reconstruir una imagen con el mismo nombre y tag. Esto puede resultar en la generación de imágenes colgantes. Sin embargo, permite volver a la imagen anterior en cualquier momento si se desea, lo que aumenta la flexibilidad en el desarrollo.

## ¿Qué cambios introdujo Docker 1.10 en la relación entre imágenes y capas?

A partir de Docker 1.10, imágenes y capas ya no son sinónimos. Las capas se identifican mediante un hash (SHA256) del contenido de la capa, lo que garantiza que una capa tendrá siempre el mismo id mientras su contenido no cambie. Ahora, una imagen es un objeto de configuración que contiene los ids de todas las capas que la conforman.

## ¿Cómo se compone una imagen en Docker?

Una imagen en Docker se compone de varias capas. Cada capa tiene un id único que depende del contenido de dicha capa. El id de la imagen es un hash (SHA256) calculado a partir de los ids de todas las capas que conforman la imagen.

## ¿Cómo se pueden obtener los ids de las capas de una imagen en Docker?

Para obtener los ids de las capas de una imagen en Docker, se puede utilizar el comando `docker inspect` con el parámetro `--format`. Este comando devuelve información sobre un objeto de Docker y con el formato adecuado se pueden extraer los ids de las capas de una imagen.

## ¿Por qué puede haber diferencias en el número de capas al usar `docker inspect` y `docker history`?

La diferencia en el número de capas entre `docker inspect` y `docker history` se debe a cómo se calcula el id de una capa. Si una capa no modifica el sistema de ficheros, su id será el mismo que el de la capa anterior. `docker inspect` muestra solo los distintos ids de las capas, mientras que `docker history` muestra todas las capas, incluso aquellas que tienen el mismo id que la capa anterior.

## ¿Cómo se puede obtener el id completo de una imagen en Docker?

Para obtener el id completo de una imagen en Docker, se puede utilizar el comando `docker inspect` con el formato adecuado para extraer el id completo de la imagen. También se puede utilizar el modificador `--no-trunc` con el comando `docker images` para mostrar los ids completos de las imágenes listadas.

## ¿Cómo se puede añadir contenido a una imagen en Docker?

Para añadir contenido a una imagen en Docker, se pueden seguir los siguientes pasos:

1. Descargar el contenido que se desea añadir a la imagen, por ejemplo, desde un archivo ZIP.
2. Crear un Dockerfile que parta de una imagen base adecuada, como en el caso de una aplicación en Node.js se puede partir de la imagen `node`.
3. Establecer un directorio en el que se va a desplegar la aplicación dentro de la imagen, utilizando el comando `WORKDIR`.
4. Copiar todo el contenido de la aplicación al sistema de archivos de la imagen mediante el comando `COPY`.
5. Ejecutar los comandos necesarios para configurar la aplicación dentro de la imagen, como por ejemplo, instalar las dependencias con `npm install`, utilizando el comando `RUN`.
6. Especificar el comando que debe ejecutarse al iniciar el contenedor, utilizando el comando `CMD`.

## ¿Cuáles son los pasos para crear una imagen de Node.js en Docker?

Los pasos para crear una imagen de Node.js en Docker son los siguientes:

1. Partir de la imagen base `node`.
2. Establecer un directorio de trabajo en la imagen usando `WORKDIR`.
3. Copiar el contenido de la aplicación al directorio de trabajo de la imagen con `COPY`.
4. Ejecutar `npm install` para instalar las dependencias de la aplicación dentro de la imagen usando `RUN`.
5. Especificar el comando para ejecutar la aplicación al iniciar el contenedor con `CMD`.

## ¿Qué función cumple el comando WORKDIR en un Dockerfile?

El comando `WORKDIR` en un Dockerfile se utiliza para establecer el directorio de trabajo dentro de la imagen donde se van a ejecutar los comandos siguientes. Es similar al comando `cd` en sistemas Unix y sirve para cambiar el directorio dentro de la imagen.

## ¿Cuál es la diferencia entre los comandos RUN y CMD en un Dockerfile?

La diferencia entre los comandos `RUN` y `CMD` en un Dockerfile es que `RUN` se utiliza para ejecutar comandos durante la construcción de la imagen, mientras que `CMD` se utiliza para especificar el comando que se ejecutará al iniciar un contenedor creado a partir de la imagen. `RUN` se ejecuta durante la construcción de la imagen, mientras que `CMD` se ejecuta dentro del contenedor.

## ¿Cuáles son los pasos para añadir contenido a una imagen en Docker?

Los pasos para añadir contenido a una imagen en Docker son los siguientes:

1. Descargar el contenido que se desea añadir a la imagen, por ejemplo, desde un archivo ZIP.
2. Crear un Dockerfile que parta de una imagen base adecuada, como en el caso de una aplicación en Node.js se puede partir de la imagen `node`.
3. Establecer un directorio en el que se va a desplegar la aplicación dentro de la imagen, utilizando el comando `WORKDIR`.
4. Copiar todo el contenido de la aplicación al sistema de archivos de la imagen mediante el comando `COPY`.
5. Ejecutar los comandos necesarios para configurar la aplicación dentro de la imagen, como por ejemplo, instalar las dependencias con `npm install`, utilizando el comando `RUN`.
6. Especificar el comando que debe ejecutarse al iniciar el contenedor, utilizando el comando

## ENTRYPOINT o CMD en Docker: ¿Cuál es la diferencia entre `ENTRYPOINT` y `CMD` en Docker?

La principal diferencia entre `ENTRYPOINT` y `CMD` en Docker radica en cómo se comportan al ejecutar un contenedor y cómo se pueden sobrescribir al lanzar el contenedor con un comando adicional.

- `CMD`: Especifica el comando que se ejecutará cuando se inicie el contenedor. Puede ser sobrescrito fácilmente al lanzar el contenedor proporcionando un comando adicional en la línea de comandos.

- `ENTRYPOINT`: Define el comando que se ejecutará cuando se inicie el contenedor de forma predeterminada. Se comporta de manera similar a `CMD`, pero es más rígido y menos propenso a ser redefinido por comandos adicionales al lanzar el contenedor.

En resumen, mientras que `CMD` es más flexible y puede ser redefinido fácilmente, `ENTRYPOINT` proporciona una forma más rígida de definir el comando inicial del contenedor.


## ¿Qué significa "Shell vs Exec" en el contexto de `CMD` y `ENTRYPOINT` en Docker?

"Shell vs Exec" se refiere a dos formas en las que se pueden especificar comandos en Docker. La forma "Shell" ejecuta el comando dentro de un shell, mientras que la forma "Exec" lanza un nuevo proceso. Esto significa que cuando se usa la forma "Shell", el comando especificado se ejecuta dentro de un shell como /bin/sh -c en Linux, mientras que la forma "Exec" ejecuta el comando directamente sin involucrar un shell adicional.

## ¿Cuál es la diferencia entre la forma "Shell" y "Exec" al definir `CMD` y `ENTRYPOINT` en Docker?

La diferencia radica en cómo se ejecuta el comando especificado. Con la forma "Shell", el comando se ejecuta dentro de un shell, lo que puede tener implicaciones en cómo se propagan las señales y la disponibilidad del shell en la imagen base. Por otro lado, la forma "Exec" lanza un nuevo proceso sin usar un shell adicional, lo que puede ser más eficiente y más predecible.

## ¿Por qué se recomienda preferir `ENTRYPOINT` sobre `CMD` en ciertos casos?

Se recomienda preferir `ENTRYPOINT` sobre `CMD` en casos en los que no se espera que el proceso inicial del contenedor sea modificado con frecuencia. Esto se debe a que `ENTRYPOINT` proporciona una forma más rígida de definir el proceso inicial, lo que puede ser útil para aplicaciones críticas o servicios que deben ejecutarse de manera consistente.

## ¿Cómo se comportan `ENTRYPOINT` y `CMD` al redefinir el comando al ejecutar un contenedor en Docker?

Cuando se ejecuta un contenedor y se proporciona un comando adicional, este comando reemplaza tanto a `CMD` como a `ENTRYPOINT`. Si solo se define `CMD`, el comando proporcionado al ejecutar el contenedor reemplazará a `CMD`. Si tanto `ENTRYPOINT` como `CMD` están definidos, el comando proporcionado se tomará como parámetros para `ENTRYPOINT`, siempre que `ENTRYPOINT` se use en su forma "Exec".

## ¿Es posible definir `ENTRYPOINT` y `CMD` simultáneamente en Docker? ¿Cuál es el comportamiento en este caso?

Sí, es posible definir tanto `ENTRYPOINT` como `CMD` simultáneamente en Docker. En este caso, el comportamiento es que `ENTRYPOINT` determina el proceso inicial del contenedor, y `CMD` se utiliza como si fueran argumentos para `ENTRYPOINT`. Sin embargo, esto solo se aplica si `ENTRYPOINT` se utiliza en su forma "Exec".

## ¿Cuáles son los problemas potenciales al usar la forma shell al definir `ENTRYPOINT` y `CMD` en Docker?

Al usar la forma shell para definir `ENTRYPOINT` y `CMD`, puede haber problemas al ejecutar comandos adicionales al iniciar el contenedor. Esto se debe a que el comando final generado puede ser inválido, especialmente si se proporcionan parámetros adicionales al ejecutar el contenedor.

## 1. ¿Qué indica la columna PORTS en la salida de `docker ps` y por qué está vacía en el ejemplo dado?
La columna PORTS en la salida de `docker ps` indica los puertos que están expuestos y mapeados desde el contenedor al host. En el ejemplo dado, la columna PORTS está vacía porque no se ha indicado explícitamente que el contenedor exponga algún puerto mediante la sentencia `EXPOSE` en el Dockerfile.

## 2. ¿Cuál es el propósito de la sentencia `EXPOSE` en un Dockerfile?
La sentencia `EXPOSE` en un Dockerfile se utiliza para informar a Docker sobre los puertos en los que el contenedor está escuchando servicios. Es puramente informativa y documenta la intención del contenedor de escuchar en esos puertos.

## 3. ¿Cómo se utiliza la sentencia `EXPOSE` en un Dockerfile y cuál es su sintaxis?
La sintaxis de la sentencia `EXPOSE` es simple: `EXPOSE puerto`. Se usa para especificar los puertos en los que el contenedor debe escuchar. Por ejemplo, `EXPOSE 3000` indicaría que el contenedor escucha en el puerto 3000.

## 4. ¿Qué significa que `EXPOSE` es puramente informativo y no tiene impacto en la gestión de red de Docker?
Significa que aunque se especifiquen los puertos con `EXPOSE`, no se abren ni se mapean automáticamente al host. Docker no abre puertos por sí mismo; este es un comportamiento que debe especificarse al ejecutar el contenedor utilizando el modificador `-p` en `docker run`.

## 5. ¿Por qué se recomienda utilizar la sentencia `EXPOSE` incluso si no tiene un impacto directo en el funcionamiento del contenedor?
Se recomienda utilizar `EXPOSE` para documentar claramente los puertos en los que el contenedor está diseñado para escuchar. Además, otras herramientas en el ecosistema de contenedores pueden aprovechar esta información para su funcionalidad.

## 6. ¿Cuál es la diferencia entre indicar un puerto con `EXPOSE` en el Dockerfile y realizar el mapeo de puertos al host con `-p` al ejecutar `docker run`?
Indicar un puerto con `EXPOSE` en el Dockerfile documenta la intención del contenedor de escuchar en ese puerto, pero no lo abre ni lo mapea automáticamente. Por otro lado, utilizar `-p` al ejecutar `docker run` permite mapear un puerto del contenedor al host, lo que hace qu

## ¿Cómo se inicia el proceso de construcción de una imagen en Docker?

El proceso de construcción de una imagen en Docker comienza con la definición de un Dockerfile. Este archivo debe comenzar con la instrucción `FROM`, que especifica la imagen base a utilizar. Docker luego crea un contenedor temporal a partir de esta imagen base.

## ¿Qué ocurre después de crear el contenedor temporal durante el proceso de construcción de una imagen?

Una vez que se crea el contenedor temporal, Docker ejecuta las instrucciones del Dockerfile en este contenedor. Cada instrucción agrega una nueva capa a la imagen en construcción. Si una instrucción implica la ejecución de un comando, Docker crea un nuevo contenedor temporal para ejecutar esa instrucción.

## ¿Qué función cumple la instrucción `FROM` en un Dockerfile?

La instrucción `FROM` en un Dockerfile especifica la imagen base que se utilizará para construir la nueva imagen. Docker descarga esta imagen base si no está presente localmente y crea un contenedor temporal a partir de ella para continuar con el proceso de construcción.

## ¿Cuál es el propósito de utilizar capas en Docker durante el proceso de construcción de una imagen?

Docker utiliza un sistema de "capas" durante el proceso de construcción de una imagen para optimizar el almacenamiento y la reutilización de recursos. Cada instrucción en el Dockerfile agrega una capa adicional a la imagen, y Docker intenta reutilizar estas capas para minimizar el espacio en disco y acelerar el proceso de construcción.

## ¿Por qué se generan varios contenedores temporales durante el proceso de construcción de una imagen en Docker?

Durante el proceso de construcción de una imagen en Docker, se pueden generar varios contenedores temporales. Esto ocurre porque cada instrucción en el Dockerfile se ejecuta en un contenedor temporal separado. Algunas instrucciones, como `RUN` o `CMD`, implican la creación de un nuevo contenedor temporal para su ejecución.

