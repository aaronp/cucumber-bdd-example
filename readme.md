# BDD example

A basic example off BDD (gherkin) style tests which you can run with:

```
npm run test
```

which produces ouput to ./reports.

## Building
A `Dockerfile` is added if you wanted to package this up and run repeatedly, then run:

```
docker run -v ${PWD}/fool:/app/reports <your container>  
```