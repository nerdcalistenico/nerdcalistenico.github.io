"use strict";var CACHE_NAME="nerdcalistenico-5.39.0",CACHED_URLS=["/assets/js/site/scripts.js?v=23.0","/assets/scss/site/style.css?v=23.0","/assets/scss/site/styleguide.css?v=23.0","/hemersonvianna/assets/js/site/scripts.js?v=23.0","/hemersonvianna/assets/scss/site/style.css?v=23.0","/imhomovies/assets/js/site/scripts.js?v=23.0","/imhomovies/assets/scss/site/style.css?v=23.0","/zamenhof/assets/js/site/scripts.js?v=23.0","/zamenhof/assets/scss/site/style.css?v=23.0","/saborinstintivo/assets/js/site/scripts.js?v=23.0","/saborinstintivo/assets/scss/site/style.css?v=23.0","/foconocapital/assets/js/site/scripts.js?v=23.0","/foconocapital/assets/scss/site/style.css?v=23.0","/jornadarelevante/assets/js/site/scripts.js?v=23.0","/jornadarelevante/assets/scss/site/style.css?v=23.0","/sonusetrhythmus/assets/js/site/scripts.js?v=23.0","/sonusetrhythmus/assets/scss/site/style.css?v=23.0","/foradabolha/assets/js/site/scripts.js?v=23.0","/foradabolha/assets/scss/site/style.css?v=23.0","/noobdaera8bits/assets/js/site/scripts.js?v=23.0","/noobdaera8bits/assets/scss/site/style.css?v=23.0","/seguindo/assets/js/site/scripts.js?v=23.0","/seguindo/assets/scss/site/style.css?v=23.0","/perfil/assets/js/site/scripts.js?v=23.0","/perfil/assets/scss/site/style.css?v=23.0","/github/assets/js/site/scripts.js?v=23.0","/github/assets/scss/site/style.css?v=23.0","/videos/assets/js/site/scripts.js?v=23.0","/videos/assets/scss/site/style.css?v=23.0","/arte-e-design/assets/js/site/scripts.js?v=23.0","/arte-e-design/assets/scss/site/style.css?v=23.0","https://fonts.googleapis.com/css2?family=Fira+Sans+Extra+Condensed:wght@400;700&amp;display=swap","/icon-512x512.png","/assets/img/site/global/favicon.ico","/assets/img/site/global/transparent.png","/assets/img/site/global/loading.gif","/offline/index.html","/offline/image.gif","/404/index.html","/404/image.jpg","/500/index.html","/500/image.jpg","/hemersonvianna/artigos/personal/o-ano-que-mudou-a-minha-vida/","/imhomovies/opinioes/em-cartaz/aladdin/","/imhomovies/assets/img/site/articles/large/aladdin.jpg","/zamenhof/idiomas/global/metodologias-para-aprender-um-novo-idioma/","/saborinstintivo/receitas/doce-e-sobremesa/doce-de-banana-com-creme-ingles/","/saborinstintivo/assets/img/site/articles/large/doce-de-banana-com-creme-ingles.jpg","/foconocapital/artigos/trade/a-modalidade-day-trade/","/jornadarelevante/jornadas/eventos/bauernfest-2019/","/jornadarelevante/assets/img/site/artigos/bauernfest/programacao-palacio-de-cristal.jpg","/jornadarelevante/assets/img/site/artigos/bauernfest/programacao-praca-da-liberdade.jpg","/jornadarelevante/assets/img/site/artigos/bauernfest/foto-0.jpg","/jornadarelevante/assets/img/site/artigos/bauernfest/foto-1.jpg","/jornadarelevante/assets/img/site/artigos/bauernfest/foto-2.jpg","/jornadarelevante/assets/img/site/artigos/bauernfest/foto-3.jpg","/sonusetrhythmus/artistas/brasil/cachorro-grande/","/sonusetrhythmus/assets/img/site/articles/large/cachorro-grande.jpg","/foradabolha/artigos/cultura/manner-hands-um-sinal-de-respeito-na-coreia/","/foradabolha/assets/img/site/articles/large/manner-hands-sinal-de-respeito-na-coreia.jpg","/foradabolha/assets/img/site/extras/manner-hands/foto-1.jpg","/foradabolha/assets/img/site/extras/manner-hands/foto-2.jpg","/foradabolha/assets/img/site/extras/manner-hands/foto-3.jpg","/noobdaera8bits/jogos/estrategia/guns-of-glory/","/noobdaera8bits/assets/img/site/articles/large/guns-of-glory.jpg","/assets/img/site/global/hemerson-vianna.jpg","/assets/img/site/instagram/hemerson-vianna-1.jpg","/assets/img/site/instagram/hemerson-vianna-2.jpg","/assets/img/site/instagram/hemerson-vianna-3.jpg","/assets/img/site/global/hemerson.vianna.dev.jpg","/assets/img/site/instagram/hemerson-vianna-dev-1.jpg","/assets/img/site/instagram/hemerson-vianna-dev-2.jpg","/assets/img/site/instagram/hemerson-vianna-dev-3.jpg","/assets/img/site/global/hemerson.vianna.design.jpg","/assets/img/site/instagram/hemerson-vianna-design-1.jpg","/assets/img/site/instagram/hemerson-vianna-design-2.jpg","/assets/img/site/instagram/hemerson-vianna-design-3.jpg","/assets/img/site/global/imho.movies.jpg","/assets/img/site/instagram/imho-movies-1.jpg","/assets/img/site/instagram/imho-movies-2.jpg","/assets/img/site/instagram/imho-movies-3.jpg","/assets/img/site/global/sonus.et.rhythmus.jpg","/assets/img/site/instagram/sonus-et-rhythmus-1.jpg","/assets/img/site/instagram/sonus-et-rhythmus-2.jpg","/assets/img/site/instagram/sonus-et-rhythmus-3.jpg","/assets/img/site/global/jornada.relevante.jpg","/assets/img/site/instagram/jornada-relevante-1.jpg","/assets/img/site/instagram/jornada-relevante-2.jpg","/assets/img/site/instagram/jornada-relevante-3.jpg","/assets/img/site/global/nerdcalistenico.jpg","/assets/img/site/instagram/nerd-calistenico-1.jpg","/assets/img/site/instagram/nerd-calistenico-2.jpg","/assets/img/site/instagram/nerd-calistenico-3.jpg"];// Cache on install
// Clear cache on activate
// Serve from Cache
self.addEventListener("beforeinstallprompt",function(a){a.userChoice.then(function(a){"dismissed"==a.outcome})}),self.addEventListener("install",function(a){self.skipWaiting(),a.waitUntil(caches.open(CACHE_NAME).then(function(a){return a.addAll(CACHED_URLS)}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(a){a.waitUntil(caches.keys().then(function(a){return Promise.all(a.filter(function(a){return a.includes("nerdcalistenico")&&a!==CACHE_NAME}).map(function(a){return caches["delete"](a)}))}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){a.respondWith(caches.match(a.request).then(function(b){return b?b:fetch(a.request).then(function(a){return 404===a.status?caches.match("/404/index.html"):a})})["catch"](function(){return caches.match("/offline/index.html")}))});
