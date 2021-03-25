/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2017/11/11/Css Modules 小试/index.html","50f67b7e8d38c6a458a7c838618c3e1e"],["/2017/12/11/微信视频H5开发小结/index.html","684f0ea510bad64a69b8a6d45ee7bdb5"],["/2018/07/27/关于VUE的路由权限管理/index.html","e92a8c4a564ea303b77854acfc2f213a"],["/2018/08/12/30s代码片段翻译/index.html","1c8e75a5d85a2f32d4d2a67b8f578c60"],["/2018/09/27/使用 Css 获取用户密码/index.html","50405315f3c349725e4ab10271c2d0cd"],["/2018/10/13/微信小程序wepy框架-minui踩坑之路/index.html","60a158d2388f714ced7c0506ae81b095"],["/2019/01/05/2018年个人总结/index.html","0bbde78e9365e03acb3a3141e7a5a685"],["/2019/01/12/关于Javascript正则的'反向引用'/index.html","c2236c463070eaad8a241fa37395a8a8"],["/2019/01/12/基于Inline-Block布局+vertical-Align的研究/index.html","cd58d30aedce15620b9b6f9dd3e7f4f9"],["/2019/02/12/50 行代码实现一个简单的 WEB 服务器/index.html","75664c1b518ea9b3e63d8d6b3deed4f4"],["/2019/03/21/浅谈 HTTP 和 HTTPS/index.html","0a356fee2c861d79fb5e0bcb2791b4a5"],["/2019/04/23/vue3.0初体验有哪些实用新功能/index.html","82e720db61509c9a5e90b3f0ee4e9e46"],["/2019/07/21/微信小程序接入腾讯云IM即时通讯/index.html","ec366495abf985b171a0162f0ee5068b"],["/2021/02/24/webRTC/index.html","5aaf0f61a357b9a5f6f8c91ccaed34ee"],["/404.html","af11c7ac94688f7c8e8323b8fd73f9f2"],["/about/index.html","be34cf54cd8b84e491e99cf8bd670dba"],["/archives/2017/11/index.html","aab7311477c5005dde050634c3c37027"],["/archives/2017/12/index.html","55e357c28840410c18bcc305816d7290"],["/archives/2017/index.html","e87d579bb951b6d96d6c97181f39407b"],["/archives/2018/07/index.html","4cec1ec252352099db81b6d44d8318d8"],["/archives/2018/08/index.html","918f7169a44db66dc6fcc30818d9985f"],["/archives/2018/09/index.html","56ae75aac277a9dcd79eac4015d970f2"],["/archives/2018/10/index.html","530c2e59de070f4b0f6789e433041575"],["/archives/2018/index.html","db729c38158d2a8213091b8ec522e7c1"],["/archives/2019/01/index.html","f4d9e44bf21330d56eb2500427ad4f91"],["/archives/2019/02/index.html","506a347951eb4ff82ff51c86cea8c264"],["/archives/2019/03/index.html","24f399a04edc78ab7df85046acbfb0f3"],["/archives/2019/04/index.html","3c9c49c7e948dfb6f616d5ced3da9347"],["/archives/2019/07/index.html","96af8ad1784b178fa5f26891717673e2"],["/archives/2019/index.html","bdc7f486c3e90e19f32975b305d97c82"],["/archives/2021/02/index.html","4320eb61d4e75f24bf5deeef2a155cd4"],["/archives/2021/index.html","a09e4d243d2c4ce193f1c1325fba60dd"],["/archives/index.html","4bca465cc7cb3f791e1fd50dc8ad651e"],["/archives/page/2/index.html","4bca465cc7cb3f791e1fd50dc8ad651e"],["/categories/index.html","ec0277c9fec1b31a2fb257a0bbf62597"],["/categories/日常学习/index.html","bc8a6e8aa12e441e156777c40d501ba9"],["/categories/经验总结/index.html","7e1dd72086220e706302b756189f4d96"],["/categories/随笔/index.html","bb34b22367147968672b3c6b811b0adf"],["/css/first.css","65cc26bb835962f7d37e2b3f29e8b696"],["/css/style.css","898e17ccd17ef2fd17c585e6f6bb1b54"],["/friends/index.html","4142306d92f64d74d8707248ee5e3989"],["/index.html","1a346faca875815a00848659bb81af9f"],["/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["/js/app.js","0274f82132f4aedd65734ce8b90fe8f0"],["/js/click_show_text.js","3f21190297a9c6f32964a0de12212006"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/js/wrapImage.js","7c0d45f9939b249e26a1aa74f4d6e3b1"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","05455526f2d5f73afbeed69c3f729e99"],["/sw-register.js","f475f2184c449541fec7a288a72aa036"],["/tags/Css-Modules/index.html","d777f5b8b92bc69a87eddf1a1f1b077c"],["/tags/JavaScript/index.html","4aeff927c10b5d453f24e4e3fec3b28b"],["/tags/WeChat/index.html","5573ebfe2361328652d3b32b4cf92bb7"],["/tags/css/index.html","28a2a6f88b415d002f9e1479f49efea7"],["/tags/http/index.html","45d8621273b5fe3a0b1e52d8e4d28b83"],["/tags/index.html","25578092b238446ca9072d0b153e5049"],["/tags/minUI/index.html","aea0a07b3722b9390f6327b9898fb7ac"],["/tags/vue/index.html","f0ee179db3158ddb0e04b8a2ebdf5e86"],["/tags/web/index.html","736d149a51933965bf5a3f9ac614051b"],["/tags/webRTC/index.html","c0a59a7987ab9e0bd2a067edcdffe9e7"],["/tags/wepy/index.html","65f24dfb7f3efb3e8a341e6e8ba470c2"],["/tags/即时通讯/index.html","fe98ae8508848f590eef4436c4fae1be"],["/tags/学习/index.html","420fdcdc8311bc7df8c5c7d09385ece3"],["/tags/安全/index.html","374dca2fc5d7a0be677f55128bcb3384"],["/tags/实时音视频/index.html","5ba679421be1406af498f8af193356b8"],["/tags/小程序/index.html","a23d63c7828edcebc53d588e7e4d6522"],["/tags/总结/index.html","2c6e8410c10bb961a9f72a204f3aeee8"],["/tags/服务器/index.html","6a85d551565c8d746c2e58462e4db8f1"],["/tags/权限管理/index.html","09ae99097b1226e4513fc24c1b3025c5"],["/tags/百度Ife/index.html","9258bbd011e1c97bce93167dac78fbde"],["/tags/网络协议/index.html","dd860ca6b0fe96e0106f71245009180c"],["/tags/翻译/index.html","22001e6938415a08e9b8463648c09f40"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
