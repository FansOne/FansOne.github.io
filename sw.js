/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2017/11/11/Css Modules 小试/index.html","ec3ac691f444812d11d7c0077655e12d"],["/2017/12/11/微信视频H5开发小结/index.html","50df3d0be0807c5c16f2b5700597a7e3"],["/2018/07/27/关于VUE的路由权限管理/index.html","3f083c14244057413aef18cb0b133dae"],["/2018/08/12/30s代码片段翻译/index.html","ce92da67af99d25287edf5d54c310710"],["/2018/09/27/使用 Css 获取用户密码/index.html","4411c98e7f6f56dd7dff394760c70b25"],["/2018/10/13/微信小程序wepy框架-minui踩坑之路/index.html","5eda777963eaf00544511cfa52861dc8"],["/2019/01/05/2018年个人总结/index.html","cd648ffa01a21c761d20cadc64e0e92f"],["/2019/01/12/关于Javascript正则的'反向引用'/index.html","06b44f7bd6d715466252a85d0959b6b8"],["/2019/02/12/50 行代码实现一个简单的 WEB 服务器/index.html","c4ea649d6877f2e55722db77aa0a4e46"],["/2019/03/21/浅谈 HTTP 和 HTTPS/index.html","eef14279c7a7fa0002c07d9feaa81bf8"],["/2019/04/23/vue3.0初体验有哪些实用新功能/index.html","8d811b61dccc042ed9232b63f3c9b821"],["/2019/07/21/微信小程序接入腾讯云IM即时通讯/index.html","7eb0cb2e2c05769d81a0a636af1d1a4b"],["/2021/02/24/webRTC/index.html","fdd1f2a279856adcfbae8caad7c93e0e"],["/404.html","6b8e10b015d47bf6ab925dd5ce622f60"],["/about/index.html","3da43c83bb520a7799b9addc379d8777"],["/archives/2017/11/index.html","42f4d739ab5c6f25dccf17e709554584"],["/archives/2017/12/index.html","7cd189a69bd2c749c2db1acd46c22826"],["/archives/2017/index.html","e3c6aec097de87ab49affc950f5794af"],["/archives/2018/07/index.html","7e8814f513c0ecc6786b68401de561ef"],["/archives/2018/08/index.html","f7ee10dbc541c6c17ab19699d3890390"],["/archives/2018/09/index.html","41a07febb6e4a52f1caad8f11aae6e15"],["/archives/2018/10/index.html","94d2709015fcfab23944d18c9d97209f"],["/archives/2018/index.html","8cc7b85fd16a9663b399a51f0b27ed8a"],["/archives/2019/01/index.html","2eeed61a386379abb8a591a9a67ea887"],["/archives/2019/02/index.html","649fbc22d8ef9b9effef1acf75919e0c"],["/archives/2019/03/index.html","fcce5909c700a1897c36967ca60747ff"],["/archives/2019/04/index.html","c7b3b1164109a1028817c1b2012b4efa"],["/archives/2019/07/index.html","1ca618e7fda9fdee5ee6e4ff6b7af7f1"],["/archives/2019/index.html","46a7bfe65c226c1c507b6ab481d0c098"],["/archives/2021/02/index.html","4c6d6b38dc1c04aed627d9cbc99d6a3f"],["/archives/2021/index.html","0d5590685d8199e23dd6f2d3d21ad515"],["/archives/index.html","d31cfeffe2926e62b8510a8af631e27a"],["/archives/page/2/index.html","d31cfeffe2926e62b8510a8af631e27a"],["/categories/index.html","22050605382d28ecc3d94a1a937bdc17"],["/categories/日常学习/index.html","f6c292760deec5fd21e8d6565eac52a1"],["/categories/经验总结/index.html","4a3823db3848e43c4817986eb632119a"],["/categories/随笔/index.html","94b88ccf2890951d0f60888bb1781163"],["/css/first.css","65cc26bb835962f7d37e2b3f29e8b696"],["/css/style.css","49f53d3f19c9fec3331bf253f0b3823a"],["/friends/index.html","76df43e03df589358fd16e9fc5af2d68"],["/index.html","01813168a5d16f5180221750a61bb555"],["/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["/js/app.js","0274f82132f4aedd65734ce8b90fe8f0"],["/js/click_show_text.js","3f21190297a9c6f32964a0de12212006"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/js/wrapImage.js","7c0d45f9939b249e26a1aa74f4d6e3b1"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","6fb15edc266cecbb5acbbe7dcc0b0e9c"],["/sw-register.js","563ca5c03cf9de11282a09b675a29e01"],["/tags/Css-Modules/index.html","924dd041c4c93161249b2b70f543f37b"],["/tags/JavaScript/index.html","e0723e34e846196abb2d9e864ea0e578"],["/tags/css/index.html","efe7aae9fcea4fcdd27de0bc247cbb8b"],["/tags/http/index.html","b8d2050d5f9d74596fc0874748f4dd04"],["/tags/index.html","a35ff5bfadabdf72df86528e44f573ad"],["/tags/minUI/index.html","d6f5a95b55f1ace2d6ebc042557b1743"],["/tags/vue/index.html","76fa723519a9a88dd8f54fa2a9be9cb1"],["/tags/weChat/index.html","f359e115072b98108fb78c1a2e2dbbc6"],["/tags/web/index.html","88e0b5ad79f9a90b48ee119b888937d4"],["/tags/webRTC/index.html","40a54610d447848a81d53a3c824bda1d"],["/tags/wepy/index.html","f5b8e79e02a9ca3dc0a39140dca3bd7a"],["/tags/即时通讯/index.html","d68a85112b534587a5cf0d9ab1776284"],["/tags/学习/index.html","adb6613579e6916ced31519915201b17"],["/tags/安全/index.html","05beab00593e52c038bb9134a4c41cc8"],["/tags/实时音视频/index.html","2c6d61a0c036eb4a6f85a848f1149544"],["/tags/小程序/index.html","4e911366dcb46ab4674e8e231155a08e"],["/tags/总结/index.html","4df7afba38204f8430d3d7ce3b1775cb"],["/tags/服务器/index.html","c4f5c510447e490fa94fe463c501662c"],["/tags/权限管理/index.html","f59e93e4842c88c03f447c84bb10fe1a"],["/tags/网络协议/index.html","7682b9f86ab35a5fbeb18612dd7fa391"],["/tags/翻译/index.html","d0f715e75227612393357611c11fabf4"]];
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
