/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2017/11/11/Css Modules 小试/index.html","f51cff66560dd1906d8814ef09c6e1ce"],["/2017/12/11/微信视频H5开发小结/index.html","43afaa426ad40d270e756bd4a9e12530"],["/2018/07/27/关于VUE的路由权限管理/index.html","a12d9043bea418e97d09a3276ddca555"],["/2018/08/12/30s代码片段翻译/index.html","d17afa235d3f514b51111a16b727f3aa"],["/2018/09/27/使用 Css 获取用户密码/index.html","a07acbe7911bf6da6a29651fd892053a"],["/2018/10/13/微信小程序wepy框架-minui踩坑之路/index.html","c6068c349ae83b24031d72221c0b94e9"],["/2019/01/05/2018年个人总结/index.html","bb5613b16146175d55f5b6d91d9ae9de"],["/2019/01/12/关于Javascript正则的'反向引用'/index.html","3de560b7131aab4d724daefbb65f20c0"],["/2019/02/12/50 行代码实现一个简单的 WEB 服务器/index.html","2b6aecb101c9c88ebc08be322556a8e3"],["/2019/03/21/浅谈 HTTP 和 HTTPS/index.html","307d288402566862df99a54d1ce7b0a9"],["/2019/04/23/vue3.0初体验有哪些实用新功能/index.html","7992a69f19e7014e05b328878e5c50f9"],["/2019/07/21/微信小程序接入腾讯云IM即时通讯/index.html","08866f21ec63890a7972c6b06d8773fa"],["/2021/02/24/webRTC/index.html","394e3042e79946c7d066f172b53499ce"],["/404.html","06f253b16038947e0c3e5bac0d748225"],["/about/index.html","091e84ae50d023a065577bd58cc3cbce"],["/archives/2017/11/index.html","2ef521ae5f71b8544dafd2ec796e5043"],["/archives/2017/12/index.html","a8409e88b02d73c377502abcfe912d20"],["/archives/2017/index.html","6dda4a857aed8cb402925c1136a85c21"],["/archives/2018/07/index.html","702c94c90eb48d7937a5c324192cd748"],["/archives/2018/08/index.html","8916e6014d30ac789e2f24a303add971"],["/archives/2018/09/index.html","b1af0eda32e380b2814da17c8dc3385c"],["/archives/2018/10/index.html","8757d69d8a57141392459827073596a7"],["/archives/2018/index.html","e2a69e9922dcb8115d773cecf77bc6b3"],["/archives/2019/01/index.html","a7367013a61e434d348137a2941bc230"],["/archives/2019/02/index.html","33d18e801bd7a28c6ff97136aa1671e2"],["/archives/2019/03/index.html","2f48041e0f76a89eaf1fda7d40931176"],["/archives/2019/04/index.html","c397870ad3c1bd6b251408e1acc69d59"],["/archives/2019/07/index.html","0cfe75edf978ee1f9bf43ecfd248fd5d"],["/archives/2019/index.html","d26e3eddc7a391bcb7c9858e4f4e1a9f"],["/archives/2021/02/index.html","cd711b657c34ae440665f5c1550a97c1"],["/archives/2021/index.html","9fd38255669a6e44b63c8a0d043b8a62"],["/archives/index.html","d3d94ba04be67f3d632d9d36a27bbb15"],["/archives/page/2/index.html","d3d94ba04be67f3d632d9d36a27bbb15"],["/categories/index.html","e7729980297005c10cefd5b5389eb742"],["/categories/日常学习/index.html","400fe15cc06947b1befb18d551944665"],["/categories/经验总结/index.html","9dc29077ea11cd9229fdf1073eac6878"],["/categories/随笔/index.html","1177490c5df0dda6ac9544c87dca5489"],["/css/first.css","65cc26bb835962f7d37e2b3f29e8b696"],["/css/style.css","49f53d3f19c9fec3331bf253f0b3823a"],["/friends/index.html","5652ebe0a8cceb5eacaa7991bc5aa447"],["/index.html","d28a16bdea0bfe33d7004e025aebee02"],["/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["/js/app.js","0274f82132f4aedd65734ce8b90fe8f0"],["/js/click_show_text.js","3f21190297a9c6f32964a0de12212006"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/js/wrapImage.js","7c0d45f9939b249e26a1aa74f4d6e3b1"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","29493ab40669c02bd00b967f8f472dc6"],["/sw-register.js","8759d11838d925c489cd5211c566177f"],["/tags/Css-Modules/index.html","9e0f76997461ea993cd0a6dedd448487"],["/tags/JavaScript/index.html","c558e37e47d0653c1cf4b4999e68d772"],["/tags/WeChat/index.html","14b5bada4c926a6cf5f55b37c661eb67"],["/tags/css/index.html","bc0cd87f059fa22edbf82324b770ef56"],["/tags/http/index.html","00ad61598218b9e530f5b77779e96fda"],["/tags/index.html","42628d0bd3ca823f76930cef67940090"],["/tags/minUI/index.html","0886f655f7e357df722a7731249bcb40"],["/tags/vue/index.html","2884ff2a56fdd6cd02ec462d703ec36e"],["/tags/web/index.html","df7a59913ce386c5dc80f1e132def2d5"],["/tags/webRTC/index.html","996ada9b734ad225993cdab532c88d9f"],["/tags/wepy/index.html","0424b6f22e28f0ead7e2ff4daaa8d817"],["/tags/即时通讯/index.html","b7a0fe8220ca3918a9428a781abb12ac"],["/tags/学习/index.html","fd471375a65244dbcd37779205b92aab"],["/tags/安全/index.html","7bb89e6b77604d2d7e5032bf68549952"],["/tags/实时音视频/index.html","8d3de1ad5a818580f58ab3d1c6479f40"],["/tags/小程序/index.html","00ec6774302b9edabe8e41e767e79969"],["/tags/总结/index.html","4dca7c394b5b098f86003cd854cac4e2"],["/tags/服务器/index.html","86eaa3edb47feb3c6dfc7cccf4aea587"],["/tags/权限管理/index.html","aed917c568500c5a2ff238ad9dd44ed2"],["/tags/网络协议/index.html","0fae093299564f79aa85fbfc9f093b93"],["/tags/翻译/index.html","b2a3588addb10327156cfdb804db565b"]];
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
