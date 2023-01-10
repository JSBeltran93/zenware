# Zenware

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Jest](https://jestjs.io/).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Peticiones de la api
Algunas peticiones de la api estan siendo bloqueadas por Cors, por tanto, en el archivo employee.service.ts en el método getEmployees() hay dos url, una realiza 
la petición a la api directamente (queda bloqueda por cors) y otra  la otra hace una petición a un json local con una copia de la respuesta de la api. 
De igual forma en algunas consultas GET, PUT o DELETED son bloqueadas, pero no es en todos los casos, el único json local es el del listado, el resto de métodos realizan la petición directamente a la api.
Las peticiones por postman funcionan correctamente pero en la ejecución del proyecto son bloqueas por el servidor.
![image](https://user-images.githubusercontent.com/60237802/211441769-08ddabc2-8edb-4184-bdf3-c019a6203bbc.png)

