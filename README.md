# Introduction

This test will assess your capabilities within the Angular Framework. As this test is mainly focused on Angular, you are provided with everything else (predefined css, html). The test has been made with Angular 6. You are free to code however you like, but you will be graded based on the requirements below. Each requirement has points totalling 80. Part marks may be given per a requirement. If your application fails to launch, you will automatically fail and not be considered further. No points will be awarded for any features outside of the requirements. You have 48 hours.

# Startup

Make sure your versions are these or higher: 

node version: >= 9.8.0
npm version: >= 6.2.0

## Run these commands to get started:

npm i
npm run mock-server
npm start

The mock server endpoints include '/products' which will return you a json of all the products, and '/products/:id', which will return you a json of that specific product.

# Instructions

You have been allocated to a project already in progress. Some of the boilerplate for this project has already been done for you. It contains AppModule, CoreModule, SharedModule, and three other Modules that are lazy loaded with routes (/product:id and /products and /landing). The landing page for the app contains a list of links to various products and does not need to be modified. The ProductsModule (/products) is only there for demonstration purposes (think of it as your mocks) and contains the template code complete with CSS for each product and it’s variation, which corresponds to the data found in db.json. The ProductModule is your main concern and it is where most of your changes will go.

# Hints
- Although The test is graded out of 70 marks, just passing may not be enough. It will depend on the role you are applying for. A 50% is considered Junior, ~70% is considered Intermediate, ~85% is considered Senior.
- Almost half the marks come from the Rxjs / Ngrx section.
- Although it is possible to get all products in one shot via products endpoint, this way will get you less marks in the end. It is better to make use of the products/:id endpoint.
- In the Rxjs / Ngrx section, there are two methods you can use for dispatching your main 'get' action. The first and easier method implements dispatching your 'get' action unconditionally from ngOnInit, but will get you less marks. The second method implements dispatching your 'get' action conditionally in a "tap" operator from the observable depending on if the product does or doesn't already exist in state.


# Requirements

1. Route has been configured correctly so that when a user clicks on a product link from the landing page, user is navigated to that product with the corresponding route (ie. product/1731002618) (5)
3. Creation of a service to fetch product from /products/:id endpoint using HTTP Client and return as an observable (half marks for using /products endpoint) (10)
4. Implements at least one dumb or presentational component that does not make use of services for displaying product (5)
5. Makes use of at least two structural directives (ie. ngIf) to form the DOM (5)
6. Makes use of string interpolation to display the data (5)
7. Formatting (5)

Rxjs / Ngrx / Observables
10. Implements an observable in the product page with the "select" operator to retrieve product from state (half marks for not specifying a product id in selector) (5)
11. Implements the "tap" operator in the observable from #10 to dispatch the GET action (5)
12. Implements one more additional operator in the observable from #10 (5)
13. Implements at least one NGRX reducer (5)
12. Implements at least two NGRX actions (5)
14. Implements at least one NGRX effect (makes use of created service from #3) (5)
11. Implements async pipe for consuming observable (5)
15. Implements NGRX entity for state creation and management (5)
