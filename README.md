# MoldemeChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.8.

## Instalação e execução

Primeiramente, executar o comando `npm i` para realizar o download das dependências do projeto, após isso, executar o comando `npm start-server` para subir o servidor da aplicação no endereço `http://localhost:4200/`. 

## Dependências utilizadas

* Bootstrap 4
* ngx-yazou-sidenav (Sidenav utilizado no cadastro de tecidos)
* Angular Material
* Express (Para utilização no Heroku)

## Demais considerações

* Angular interceptor baseado no artigo: https://medium.com/matheus-bizutti/introdu%C3%A7%C3%A3o-ao-angular-httpinterceptor-1b06a95a0089
* Auth guard baseado no artigo: https://medium.com/@ryanchenkie_40935/angular-authentication-using-route-guards-bf7a4ca13ae3

## Pendências

* Desenvolvimento dos testes;
* Dropdown do header em resoluções baixas não está abrindo;
* Implantação das funções de Edição e visualização de tecido;
* Implantação do JEST na execução dos testes.

-----------------------------------

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
