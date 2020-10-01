# Micro frontend實驗專案

## 目標

使用Angular作為micro frontend的主體APP載入其他的Angular子應用。

## 使用技術

1. Angular & CLI
2. single-spa
3. single-spa-angular
4. Webpack

## 目錄說明

```
/container: 容器APP
/child1: 子應用1
```

## 操作紀錄

```
ng new container --routing --prefix xpy-container
ng new child1 --routing --prefix xpp-child1

cd child1
npm i -D @angular-builders/custom-webpack
npm i single-spa
ng add single-spa-angular

cd ../container
npm i -D @angular-builders/custom-webpack
npm i single-spa
npm i single-spa-angular
npm i systemjs
// eiit routing
```