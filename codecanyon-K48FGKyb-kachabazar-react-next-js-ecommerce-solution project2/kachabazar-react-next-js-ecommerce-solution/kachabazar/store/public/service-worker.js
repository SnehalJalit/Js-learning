if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const t=e=>a(e,c),d={module:{uri:c},exports:r,require:t};s[c]=Promise.all(n.map((e=>d[e]||t(e)))).then((e=>(i(...e),r)))}}define(["./workbox-6a1bf588"],(function(e){"use strict";importScripts("fallback-50CULHwq7B-fKF7SdCwQX.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/404.svg",revision:"d38ac435783a21f1956e5ca6c207228d"},{url:"/_next/static/50CULHwq7B-fKF7SdCwQX/_buildManifest.js",revision:"38dae33708366293b25e0373247a138b"},{url:"/_next/static/50CULHwq7B-fKF7SdCwQX/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/18-b5e967b5f987cbd9.js",revision:"b5e967b5f987cbd9"},{url:"/_next/static/chunks/1b8dab7b-dce97b277f2f0463.js",revision:"dce97b277f2f0463"},{url:"/_next/static/chunks/228771e0-5273cd4ee92e958b.js",revision:"5273cd4ee92e958b"},{url:"/_next/static/chunks/3-0ca16be18979ae4e.js",revision:"0ca16be18979ae4e"},{url:"/_next/static/chunks/313-d0d92ab9a5148d8c.js",revision:"d0d92ab9a5148d8c"},{url:"/_next/static/chunks/31664189-86708806381c5388.js",revision:"86708806381c5388"},{url:"/_next/static/chunks/330-e11f7f3a0a90e891.js",revision:"e11f7f3a0a90e891"},{url:"/_next/static/chunks/413-df36c8639a274ad6.js",revision:"df36c8639a274ad6"},{url:"/_next/static/chunks/464.61398e3c4dd7dd39.js",revision:"61398e3c4dd7dd39"},{url:"/_next/static/chunks/465-14aec23b5885f2af.js",revision:"14aec23b5885f2af"},{url:"/_next/static/chunks/478-0383f1fc03b6a04c.js",revision:"0383f1fc03b6a04c"},{url:"/_next/static/chunks/533-7c9ac584c11b1a46.js",revision:"7c9ac584c11b1a46"},{url:"/_next/static/chunks/545.b3af7e52ee1713fb.js",revision:"b3af7e52ee1713fb"},{url:"/_next/static/chunks/564-392bd9e85e991505.js",revision:"392bd9e85e991505"},{url:"/_next/static/chunks/65291039-a3512ead4a7ad460.js",revision:"a3512ead4a7ad460"},{url:"/_next/static/chunks/688-cd79707fbde49984.js",revision:"cd79707fbde49984"},{url:"/_next/static/chunks/711-23f394b8be5e0cbc.js",revision:"23f394b8be5e0cbc"},{url:"/_next/static/chunks/778-af528322b086315a.js",revision:"af528322b086315a"},{url:"/_next/static/chunks/949-0a7f432ab4f2c731.js",revision:"0a7f432ab4f2c731"},{url:"/_next/static/chunks/964-b1a5e834fe98f9e3.js",revision:"b1a5e834fe98f9e3"},{url:"/_next/static/chunks/ae51ba48-01187f522d66448a.js",revision:"01187f522d66448a"},{url:"/_next/static/chunks/c9184924-4d6450db75d886e6.js",revision:"4d6450db75d886e6"},{url:"/_next/static/chunks/d64684d8-5ef15111848b2259.js",revision:"5ef15111848b2259"},{url:"/_next/static/chunks/framework-89060607603ae9b9.js",revision:"89060607603ae9b9"},{url:"/_next/static/chunks/main-b8dbad2ed9af8d5d.js",revision:"b8dbad2ed9af8d5d"},{url:"/_next/static/chunks/pages/404-24736c5574b223b0.js",revision:"24736c5574b223b0"},{url:"/_next/static/chunks/pages/_app-b5f2f024a4f62d9f.js",revision:"b5f2f024a4f62d9f"},{url:"/_next/static/chunks/pages/_error-3ee352f08633342a.js",revision:"3ee352f08633342a"},{url:"/_next/static/chunks/pages/_offline-63f86af05c75b31e.js",revision:"63f86af05c75b31e"},{url:"/_next/static/chunks/pages/about-us-8ade5d375591c637.js",revision:"8ade5d375591c637"},{url:"/_next/static/chunks/pages/checkout-9325a23d1887c31c.js",revision:"9325a23d1887c31c"},{url:"/_next/static/chunks/pages/contact-us-25e944b7f3985ee9.js",revision:"25e944b7f3985ee9"},{url:"/_next/static/chunks/pages/faq-7d536512001f2017.js",revision:"7d536512001f2017"},{url:"/_next/static/chunks/pages/index-ce6a8d55540533cf.js",revision:"ce6a8d55540533cf"},{url:"/_next/static/chunks/pages/offer-6a6baf40b510b15c.js",revision:"6a6baf40b510b15c"},{url:"/_next/static/chunks/pages/order/%5Bid%5D-6adcc42b349e707b.js",revision:"6adcc42b349e707b"},{url:"/_next/static/chunks/pages/privacy-policy-99f096ccadc8f046.js",revision:"99f096ccadc8f046"},{url:"/_next/static/chunks/pages/product/%5Bslug%5D-9dc3e7c957d37d8b.js",revision:"9dc3e7c957d37d8b"},{url:"/_next/static/chunks/pages/search-61665bd85ac673f1.js",revision:"61665bd85ac673f1"},{url:"/_next/static/chunks/pages/terms-and-conditions-e160ba3b999d6e17.js",revision:"e160ba3b999d6e17"},{url:"/_next/static/chunks/pages/user/change-password-fecfab8ee9f431a9.js",revision:"fecfab8ee9f431a9"},{url:"/_next/static/chunks/pages/user/dashboard-798fa54bf5debb03.js",revision:"798fa54bf5debb03"},{url:"/_next/static/chunks/pages/user/email-verification/%5Btoken%5D-ff6fad1f902e373f.js",revision:"ff6fad1f902e373f"},{url:"/_next/static/chunks/pages/user/forget-password/%5Btoken%5D-1dc9fe0423514f9b.js",revision:"1dc9fe0423514f9b"},{url:"/_next/static/chunks/pages/user/my-orders-2d3404d4b66182e1.js",revision:"2d3404d4b66182e1"},{url:"/_next/static/chunks/pages/user/recent-order-901bd710882a2433.js",revision:"901bd710882a2433"},{url:"/_next/static/chunks/pages/user/update-profile-5de5b5457032ad5f.js",revision:"5de5b5457032ad5f"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-8b8aed3297354fa0.js",revision:"8b8aed3297354fa0"},{url:"/_offline",revision:"50CULHwq7B-fKF7SdCwQX"},{url:"/about-banner.jpg",revision:"79bcd14e1663eeb10fd2078a1b40a68a"},{url:"/about-us.jpg",revision:"a69c8f7c944c6dd9673e4e8407684ae9"},{url:"/app-download-img-left.png",revision:"72d8da82c11b9694f687e2b24711a82a"},{url:"/app-download-img.png",revision:"22ab424e74d09df11be0f6943a264856"},{url:"/app/app-store.svg",revision:"a717e97b14d37aa12c48a288bddf4bae"},{url:"/app/mastercard-icon.svg",revision:"2f3b7f6dc10d68bf74366ce0e4b39217"},{url:"/app/paypal-icon.svg",revision:"99025da84086629516e323641cdfd73b"},{url:"/app/play-store.svg",revision:"a2b0ad8b1000e23bf80ca9ef30b14b97"},{url:"/app/skrill-icon.svg",revision:"01cb261e1e28b74c3f51a379a63216d3"},{url:"/app/visa-icon.svg",revision:"58cb00fe42ab95ae26c5e7e429f04545"},{url:"/banner-1.jpg",revision:"96eaf5765f56f7574dc21db0424668f3"},{url:"/banner-2.jpg",revision:"d08fc088d9d75823e8259261e9208cf2"},{url:"/contact-us.png",revision:"1f0a34dcebe83884f7d986c29069cff0"},{url:"/cta-bg.png",revision:"0dd94ded00743cc74d0da8027b579b73"},{url:"/cta/cta-bg-1.jpg",revision:"45b3e432be8fc7f3eb09f2568a61d8c2"},{url:"/cta/cta-bg-2.jpg",revision:"83ca16fa37654fd7de5518d0f347a29c"},{url:"/cta/cta-bg-3.jpg",revision:"42c150e775ca1b35399b3428d5ee2e00"},{url:"/cta/delivery-boy.png",revision:"9914b651b1428467046e8b886166dac9"},{url:"/facebook-page.png",revision:"0a668853fee7423c27bb93b947a6fc1c"},{url:"/faq.svg",revision:"2979a7b97c0c5d96960e9558a389bbd4"},{url:"/favicon.png",revision:"0033e08ea1185a9ef4ddea787f470df5"},{url:"/flags/de.svg",revision:"a491da9c1549a36b293a6a391739dfda"},{url:"/flags/us.svg",revision:"8886b28b10e3ec0756a9935a216d5bba"},{url:"/icon-192x192.png",revision:"47e2812c3e78f1903ccd46f0545f5d48"},{url:"/icon-256x256.png",revision:"5cfadd2f4679b3d86f1d994297809226"},{url:"/icon-384x384.png",revision:"e793bffd9497800be7d461caa873b96b"},{url:"/icon-512x512.png",revision:"b9df59369ad910b5d3e338e9076fd944"},{url:"/kachabazar-store-min.png",revision:"6bf12cd3f0a8d7ccf8285ea0672bf182"},{url:"/loader/spinner.gif",revision:"9317b1364997865cda53478fb9302977"},{url:"/logo/bag-shoping.svg",revision:"54014870b794b613e62017decbe943d0"},{url:"/logo/logo-color.png",revision:"5935965ef93ee2a9eab4a1240699bc5f"},{url:"/logo/logo-color.svg",revision:"9cdfd2a1723ebe5d6fbfeb2a3a07765d"},{url:"/logo/logo-dark-2.svg",revision:"990e13afb1b79734e26b71f2fcc062d9"},{url:"/logo/logo-dark.svg",revision:"3d5619a9dd2312d20ee908259e95a635"},{url:"/logo/logo-light-2.svg",revision:"8e9e97fd3acd9a7aa3525e2c5eb93811"},{url:"/logo/logo-light.svg",revision:"a295f016c697789c084b023006b33ac5"},{url:"/manifest.json",revision:"1bdc898597594f46bcd9b0ae76e7c991"},{url:"/no-result.svg",revision:"508b2439b4b83ce579e826c9c625b675"},{url:"/page-header-bg.jpg",revision:"c7cf9224e6c1ae3add73d30c2ae7a8f8"},{url:"/payment-method/payment-logo.png",revision:"469911779f6463e5751cf5b7046384d2"},{url:"/robots.txt",revision:"61c27d2cd39a713f7829422c3d9edcc7"},{url:"/slider/slider-1.jpg",revision:"9611448d0a85493ee21c5317323cb601"},{url:"/slider/slider-2.jpg",revision:"fe98a6e4032332b05d52aa1254f085a7"},{url:"/slider/slider-3.jpg",revision:"06cef52491c3b8682d15596e784362bb"},{url:"/sw.js",revision:"3babca1d969f2ec8e3f712ae338713de"},{url:"/team/team-1.jpg",revision:"e318a12728d39d01c926be7fbbcd6876"},{url:"/team/team-2.jpg",revision:"ba945720d060272d028634a8729b7d2b"},{url:"/team/team-3.jpg",revision:"dfa429c7e964aa5a8ea01c3959710529"},{url:"/team/team-4.jpg",revision:"490ae645f676543ef728fc2548a6bd3f"},{url:"/team/team-5.jpg",revision:"a345363d59da88084c7fd6de76cc978c"},{url:"/team/team-6.jpg",revision:"39e8a23ea2ae4bc88316d1ddad73132c"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
