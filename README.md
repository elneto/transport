# transport website
### Installing

```
npm install
```
To test with autoreloading on save:
```
npm run start
```
Go to http://localhost:8080/
Get a UN looking website
![Website screenshot](https://raw.githubusercontent.com/elneto/transport/7171681cb7d4cddc804a48444d159a18c82ce654/screenshot.png)

To minify and prepare for production, customize your assets path, change "/content/transport/" for your relative assets path in webpack.config.prod.js and:
```
npm run build
```
