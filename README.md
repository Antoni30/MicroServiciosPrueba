
# Aplicacion Web con Tres Microservicios y MongoDB

La aplicacion web realiza operaciones CRUD en tres microservicios diferentes. Los tres microservicios son alumnos, materias y tareas que busca ser una aplicación web para un sistema educativo.

## Indicaciones

El aplicativo está dividido en frontend y en backend con sus respectivas carpetas. Para inicializar el backend se debe agregar el archivo ```.env ``` dentro de la carpeta backend o asegurarse de que este archivo esté dentro de la carpeta. Luego, ingresamos a la carpeta backend desde la terminal y ejectuamos el siguiente comando:

```http
  npm install
```

Con esto, se cargarán las carpetas ```node_modules```. Finalmente, ejectuamos el siguiente comando en la terminal:

```http
  npm run dev
```

Con esto ya deben estar corriendo los tres microservicios con las siguientes URLs:

Alumnos: ```http://localhost:2024/api/alumnos```

Tareas: ```http://localhost:2000/api/tareas```

Materias: ```http://localhost:3000/api/materias```

Con estas URLs se pueden realizar las peticiones GET, POST, PUT y DELETE para cada microservicio.

A continuación vamos a correr el fronted. Para esto entramos a la carpeta fronted y ejectuamos el comando:

```http
  npm install
```

Luego corremos el siguiente comando:

```http
  npm run dev
```

Listo! En este punto tendremos el backend y el froented corriendo simultáneamente y listo ejecutar el aplicativo. La idea principal es que a través del fronted se pueda realizar todas las operaciones CRUD de cada microservicio.



## Authors

- [@Cristian Tello](https://github.com/TelloCristian98)
- [@Camila Morales](https://github.com/TelloCristian98)
- [@Antoni Toapanta](https://github.com/TelloCristian98)
