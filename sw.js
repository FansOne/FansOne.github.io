/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2017/11/11/Css Modules 小试/index.html","04d872df9357442423d70b40e9693d1d"],["/2017/12/11/微信视频H5开发小结/index.html","037074c44af192f8f0884e39ff0679ca"],["/2018/07/27/关于VUE的路由权限管理/index.html","4e2f8698cfc90a5ececb298075cc55eb"],["/2018/08/12/30s代码片段翻译/index.html","b0063ecbe89ab184323dcc5e0112e443"],["/2018/09/27/使用 Css 获取用户密码/index.html","a1ad89a474794deeb0ac3e7512f007ac"],["/2018/10/13/微信小程序wepy框架-minui踩坑之路/index.html","84b144b95abc377f9bcb3c60665f4c27"],["/2019/01/05/2018年个人总结/index.html","e997397052f2f1ac498711c026cc5f0e"],["/2019/01/12/关于Javascript正则的'反向引用'/index.html","ee023b95d2fd1f91aa7cb90cbb87ca17"],["/2019/01/12/基于Inline-Block布局+vertical-Align的研究/index.html","88615ea17756dc92cb5fb649189e86cd"],["/2019/02/12/50 行代码实现一个简单的 WEB 服务器/index.html","75664c1b518ea9b3e63d8d6b3deed4f4"],["/2019/03/21/浅谈 HTTP 和 HTTPS/index.html","86442a7e2acc70aa820a8dd4a5341ae5"],["/2019/04/23/vue3.0初体验有哪些实用新功能/index.html","6b0c55fb74abf712bc4f0b1407b783fb"],["/2019/07/21/微信小程序接入腾讯云IM即时通讯/index.html","41806abfa1fc5d56cf44418b2aad5245"],["/2021/02/24/webRTC/index.html","39fa9e5a1732683f616d77e5606b1036"],["/404.html","af11c7ac94688f7c8e8323b8fd73f9f2"],["/about/index.html","d22d3ef1b7bd48e8a275f160886eb984"],["/archives/2017/11/index.html","aebca579a07f64c2d5a0b8f992612fc6"],["/archives/2017/12/index.html","2794eb8da6031dc207aeeeec545767b0"],["/archives/2017/index.html","97e212ef06706b15b937a4224243f107"],["/archives/2018/07/index.html","0ac55900241c2456c22ba4b71d31d2be"],["/archives/2018/08/index.html","ee43ce07308baca586f218f34c957d94"],["/archives/2018/09/index.html","d6d41b4d5e270896a0adb302b5e28a8e"],["/archives/2018/10/index.html","ad711c80e903f657eec293eb6cfec4fa"],["/archives/2018/index.html","18c89735435c05454b676e31bff033e8"],["/archives/2019/01/index.html","2490d52775bbdb48fcba2ab3ed4a397c"],["/archives/2019/02/index.html","4c07cf60ea297bebe19b3ba978a3cb61"],["/archives/2019/03/index.html","907d57d9432b50b55d18cfac3157239c"],["/archives/2019/04/index.html","53b4fdebbde903bb5f7cf7feb7696b5e"],["/archives/2019/07/index.html","46b6911c1b1b712ac13fd5d761f327a4"],["/archives/2019/index.html","ea84def146d7ecea0f922313959e20e4"],["/archives/2021/02/index.html","2c8c230528a1a976b6eebc654e7955bc"],["/archives/2021/index.html","82b508ba9b426a4dc08e8821e4d76e6e"],["/archives/index.html","255944d65221c687cb4f5a3c8759066c"],["/archives/page/2/index.html","255944d65221c687cb4f5a3c8759066c"],["/categories/index.html","ec0277c9fec1b31a2fb257a0bbf62597"],["/categories/日常学习/index.html","f8f48a86b1682fc01652ac24332cf0a8"],["/categories/经验总结/index.html","75e8f3e2285240df0d35bf7916b352ce"],["/categories/随笔/index.html","acad3837648f92a9b177d861c4d6de95"],["/css/first.css","65cc26bb835962f7d37e2b3f29e8b696"],["/css/style.css","898e17ccd17ef2fd17c585e6f6bb1b54"],["/friends/index.html","4142306d92f64d74d8707248ee5e3989"],["/index.html","b9ca9e54dfc3c2449e91874dadecb67c"],["/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["/js/app.js","0274f82132f4aedd65734ce8b90fe8f0"],["/js/click_show_text.js","54865d28716f00b8e924c6de895c7ad4"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/js/wrapImage.js","7c0d45f9939b249e26a1aa74f4d6e3b1"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","e2211d7c59633adccb5a6121645fd05d"],["/sw-register.js","ea8e868cf3f20bb14409d1b60e2df118"],["/tags/Css-Modules/index.html","e22411687e2ba8284b5ae36eaf9e33ca"],["/tags/JavaScript/index.html","bf1b6b12f00b3245ef5c9c70c4ef091b"],["/tags/WeChat/index.html","a4f55d7a231c30dcc069d52ead40e35f"],["/tags/css/index.html","2365f22801951d9c0fbea4eef157d90e"],["/tags/http/index.html","3bce361e505ba668da24f0840cb07267"],["/tags/index.html","25578092b238446ca9072d0b153e5049"],["/tags/minUI/index.html","a9d55b740bbe2cd207ededddc9b31fe1"],["/tags/vue/index.html","6abca3c93361b28985302b017c093be9"],["/tags/web/index.html","998efb2ac7e88774d527e1738ae7c9a0"],["/tags/webRTC/index.html","89665346544cc2994be773e046ce89e6"],["/tags/wepy/index.html","9c309ac66bac9ddb5a0b3c5c5d59180f"],["/tags/即时通讯/index.html","de3bab635a2abad005ef076a81dc2f60"],["/tags/学习/index.html","d7a262f32261337aa3a4365262982656"],["/tags/安全/index.html","c6bb605c129c8d05dd0b50bd6411ca8b"],["/tags/实时音视频/index.html","0370d0b4846144d0f8c6d7d2062cb9e6"],["/tags/小程序/index.html","2e7d6c208faa0a8c1734facd96f06023"],["/tags/总结/index.html","e0b261fe668322366dfd5ff1187a1a4b"],["/tags/服务器/index.html","ed3860b37ce846125163dccf35a918c7"],["/tags/权限管理/index.html","3e7634cbc8dabc4af44620c617ec330b"],["/tags/百度Ife/index.html","806e2f404ca6491cd6bdf009efd24e0c"],["/tags/网络协议/index.html","d7805c5dea21acbcf5215b83faf505ec"],["/tags/翻译/index.html","b5c3a93d05eede79d439878d30d675f7"]];
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
