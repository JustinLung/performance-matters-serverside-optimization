> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# 🎉 Performance Matters Scrollbook
Server Side Performance voor Scrollbook

## 🍿 Serverside Performance Optimalisatie
Voor deze deeltaak, heb ik de website van de Scrollbook Bookshelf geoptimaliseerd die gemaakt is met behulp van Three.js EJS, NodeJS en Express. Hierbij heb ik een performance audit gedaan met behulp van Lighthouse en heb ik ook gekeken naar het network tabje hoe groot mijn project is.

**Before**
![Lighthouse Scrollbook Before](https://github.com/JustinLung/performance-matters-serverside-optimization/blob/main/docs/lighthouse-performance.png?raw=true)

![Network Tab Before](https://github.com/JustinLung/performance-matters-serverside-optimization/blob/main/docs/network-tab.png?raw=true)

**After**
![Lighthouse Scrollbook After](https://github.com/JustinLung/performance-matters-serverside-optimization/blob/main/docs/lighthouse-performance-after.png?raw=true)

![Network Tab After](https://github.com/JustinLung/performance-matters-serverside-optimization/blob/main/docs/network-tab-after.png?raw=true)

### 🙊 Minifying
Met behulp van [🪄 PostCSS](https://postcss.org/), heb ik de CSS geminified, zodat mijn applicatie sneller werkt.

### 🦈 Code splitting
Zelf heb ik niet in mijn client-side Javascript ge-code split, omdat er geen dode code is die wij niet gebruiken. Echter heb ik wel in mijn HTML een code-split gedaan. Aangezien libraries zoals three.js en GSAP niet in worden geladen op de detail page, worden deze nu alleen maar op de index ingeladen.

### 😺 Caching
Zelf heb ik de cache-control methode gebruikt, zodat er niet elke keer een request gedaan wordt naar de server en hierdoor maar om de 5 minuten een request wordt gedaan. 

### 🍊 Compressie
Met behulp van de [🚄 express compression](http://expressjs.com/en/resources/middleware/compression.html) package, omdat het erg makkelijk is te gebruiken.

## 🌲 Bronnen
- [PostCSS](https://postcss.org/)
- [Cache headers in Express](https://regbrain.com/article/cache-headers-express-js)
- [Express Compression](http://expressjs.com/en/resources/middleware/compression.html)

## 🚀 Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
