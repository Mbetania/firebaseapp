# Firebase App
El objetivo del proyecto se basa en consumir y hacer peticiones a una base de datos real, en éste caso a Firebase.

## Welcome to MyAPP
Para instalar la aplicación se deben utilizar los comandos
```
-npm i
-npm start
```

## Cómo navegar en la aplicación?
En la primer página nos encontramos con un catálogo de películas de distintos géneros,se puede observa en la parte superior de la derecha un menú de navegación por categoria.

Cada card cuenta con un botón de 'ver detalle' que nos dirige a otra ruta donde podremos ver información sobre esa pelicula en especifico, también cuanta con un botón para añadir al carrito de compra.

La lógica de agregar productos al carrito no permite duplicados, se puede probar añadiendo mas cantidad de un mismo producto y del lado superior derecho aparecerá un icono que mostrará un 1.

Una vez agregado al carro aparecerán las opciones de seguir viendo más productos y de finalizar compra, seleccionando la opción de terminar con la compra nos vamos a dirigir a una nueva ruta donde podremos ver los productos añadidos y al finalizar un formulario para completar, éste nos generará una órden de compra con un único id

## Tecnologías utilizadas
- Lenguaje javascript.
- Libreria React Js.
- Base de datos utilizada: Firebase,El catálogo de stock y las peticiones se hicieron mediante funcionalidades y metodologías de la documentanción **Firestore**
- Para la estilización se utilizó:
  1. sass  
  2. bootstrap para dar formato y estilo a botones y la barra del buscador (hasta el momento no tiene funcionalidad).
- Los íconos son traídos de react-icon
- El spinner fue importado de react-spinners

<details><summary>Dependencias</summary>
<p>


```ruby
/*base de datos /*
npm install firebase
/* react-router /*
npm i react-router
/* router-dom /*
npm i react-router-dom
/* react-icons /*
npm i react-icons
/* react-spinners /*
npm i react-spinners
/* sass /*
npm i sass
/* bootstrap /*
npm i bootstrap
```

</p>
</details>
