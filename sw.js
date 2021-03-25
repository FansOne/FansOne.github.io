/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2017/11/11/Css Modules 小试/index.html","04d872df9357442423d70b40e9693d1d"],["/2017/12/11/微信视频H5开发小结/index.html","037074c44af192f8f0884e39ff0679ca"],["/2018/07/27/关于VUE的路由权限管理/index.html","4e2f8698cfc90a5ececb298075cc55eb"],["/2018/08/12/30s代码片段翻译/index.html","b0063ecbe89ab184323dcc5e0112e443"],["/2018/09/27/使用 Css 获取用户密码/index.html","ef93aee657f314fa6bcfa7667b0e3d2b"],["/2018/10/13/微信小程序wepy框架-minui踩坑之路/index.html","84b144b95abc377f9bcb3c60665f4c27"],["/2019/01/05/2018年个人总结/index.html","e997397052f2f1ac498711c026cc5f0e"],["/2019/01/12/关于Javascript正则的'反向引用'/index.html","ee023b95d2fd1f91aa7cb90cbb87ca17"],["/2019/01/12/基于Inline-Block布局+vertical-Align的研究/index.html","88615ea17756dc92cb5fb649189e86cd"],["/2019/02/12/50 行代码实现一个简单的 WEB 服务器/index.html","75664c1b518ea9b3e63d8d6b3deed4f4"],["/2019/03/21/浅谈 HTTP 和 HTTPS/index.html","86442a7e2acc70aa820a8dd4a5341ae5"],["/2019/04/23/vue3.0初体验有哪些实用新功能/index.html","6b0c55fb74abf712bc4f0b1407b783fb"],["/2019/07/21/微信小程序接入腾讯云IM即时通讯/index.html","41806abfa1fc5d56cf44418b2aad5245"],["/2021/02/24/webRTC/index.html","39fa9e5a1732683f616d77e5606b1036"],["/404.html","af11c7ac94688f7c8e8323b8fd73f9f2"],["/about/index.html","881f4c8e1a3a679ab32939a37c06db39"],["/archives/2017/11/index.html","d7feabc5286f4cc628dd81c022d8a1ff"],["/archives/2017/12/index.html","003aec87bdbfc71cfba7df20c5525d27"],["/archives/2017/index.html","33931ae5caa634ae7aff08a3b3f0deff"],["/archives/2018/07/index.html","cc4f8fd1f175b5314a300ff828e9e2ea"],["/archives/2018/08/index.html","f54a07f2c47937606b285bd760e98a83"],["/archives/2018/09/index.html","36927ee2e158b32c0101946fba453589"],["/archives/2018/10/index.html","8629f5a75e54370dbdbac57901bd4acc"],["/archives/2018/index.html","6fd20a39f282beff9d4ed2490407f8f0"],["/archives/2019/01/index.html","38a51d03a10949ad40a05a57cc71e287"],["/archives/2019/02/index.html","c5443928aea6efbb99962437f6c0c6db"],["/archives/2019/03/index.html","8936bf380457891e93eb1a013c0778ea"],["/archives/2019/04/index.html","c62c8c38f26c134996cd3c1c7a9898bd"],["/archives/2019/07/index.html","a15fab4a9f6bbfdf9bf5aca85f110990"],["/archives/2019/index.html","56e7f8febd33b264a8cbcb721e8928bb"],["/archives/2021/02/index.html","1a922c5d22e582297af275fc695ee96f"],["/archives/2021/index.html","aafe65eaee0e0ddb9c9ad0c447997512"],["/archives/index.html","ed33d10144ebf00bbb59365dc4fd5a8f"],["/archives/page/2/index.html","ed33d10144ebf00bbb59365dc4fd5a8f"],["/categories/index.html","ec0277c9fec1b31a2fb257a0bbf62597"],["/categories/日常学习/index.html","2f8c0fed4733ac5fb856956fd9769537"],["/categories/经验总结/index.html","7aabeb463feb471c13a903c29e4c1c67"],["/categories/随笔/index.html","239b9db85c36719f217a0be9e8488fde"],["/css/first.css","65cc26bb835962f7d37e2b3f29e8b696"],["/css/style.css","898e17ccd17ef2fd17c585e6f6bb1b54"],["/friends/index.html","4142306d92f64d74d8707248ee5e3989"],["/index.html","c09ebdb0add67005deae3dcab9c7829e"],["/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["/js/app.js","0274f82132f4aedd65734ce8b90fe8f0"],["/js/click_show_text.js","54865d28716f00b8e924c6de895c7ad4"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/js/wrapImage.js","7c0d45f9939b249e26a1aa74f4d6e3b1"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","69107910bbaf20c5b64c7b6f043cfe97"],["/sw-register.js","8b4c24de3d6b8a595cf9136d912615d0"],["/tags/Css-Modules/index.html","52ea4c99f16d8b607e849b14b3eb3079"],["/tags/JavaScript/index.html","9dff7a404c37451314393d660a4b74f2"],["/tags/WeChat/index.html","4dd842f8251dc356eb1e2da3350e055c"],["/tags/css/index.html","837036e7176607645548a2e02f00ad9f"],["/tags/http/index.html","8656df81caa3672583cc4ee1943fdcd2"],["/tags/index.html","25578092b238446ca9072d0b153e5049"],["/tags/minUI/index.html","c5cc77de0e3cb07f470657592ff0c4d4"],["/tags/vue/index.html","1e6ceb3b4a6121866f6f58c17f2578c6"],["/tags/web/index.html","c7cad641a3493d008c6e122060540d89"],["/tags/webRTC/index.html","23f7aba99f0524159190f08c859e9a06"],["/tags/wepy/index.html","e70e912ca2332e8abe29e4df8353d3c4"],["/tags/即时通讯/index.html","d7790fd4d94820fc6a8c15fd2f6d8fdc"],["/tags/学习/index.html","92ed053b2f3cea5589cb3240059d1311"],["/tags/安全/index.html","8bd61e9a4fb50caebe085f92579fb662"],["/tags/实时音视频/index.html","e194f717482aa84fa8b744709e8a4d79"],["/tags/小程序/index.html","2838d266744a265dabcdbb0a11a4a117"],["/tags/总结/index.html","ee2f859db501e7825e1c3f53eb30725d"],["/tags/服务器/index.html","4c9e614cd1bdc03620ee00c79d3e2b49"],["/tags/权限管理/index.html","31567d004e553b55ae6a6f841622dc01"],["/tags/百度Ife/index.html","73ee4d1ba47680211ca1676d6ff1484d"],["/tags/网络协议/index.html","732ba6bda93c1864b87f20a7352f250e"],["/tags/翻译/index.html","cb05e168d1f36f58644a332948d0d117"]];
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
