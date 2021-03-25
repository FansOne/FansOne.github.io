/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2017/11/11/Css Modules 小试/index.html","04d872df9357442423d70b40e9693d1d"],["/2017/12/11/微信视频H5开发小结/index.html","037074c44af192f8f0884e39ff0679ca"],["/2018/07/27/关于VUE的路由权限管理/index.html","4e2f8698cfc90a5ececb298075cc55eb"],["/2018/08/12/30s代码片段翻译/index.html","b0063ecbe89ab184323dcc5e0112e443"],["/2018/09/27/使用 Css 获取用户密码/index.html","ef93aee657f314fa6bcfa7667b0e3d2b"],["/2018/10/13/微信小程序wepy框架-minui踩坑之路/index.html","84b144b95abc377f9bcb3c60665f4c27"],["/2019/01/05/2018年个人总结/index.html","e997397052f2f1ac498711c026cc5f0e"],["/2019/01/12/关于Javascript正则的'反向引用'/index.html","ee023b95d2fd1f91aa7cb90cbb87ca17"],["/2019/01/12/基于Inline-Block布局+vertical-Align的研究/index.html","88615ea17756dc92cb5fb649189e86cd"],["/2019/02/12/50 行代码实现一个简单的 WEB 服务器/index.html","75664c1b518ea9b3e63d8d6b3deed4f4"],["/2019/03/21/浅谈 HTTP 和 HTTPS/index.html","86442a7e2acc70aa820a8dd4a5341ae5"],["/2019/04/23/vue3.0初体验有哪些实用新功能/index.html","6b0c55fb74abf712bc4f0b1407b783fb"],["/2019/07/21/微信小程序接入腾讯云IM即时通讯/index.html","41806abfa1fc5d56cf44418b2aad5245"],["/2021/02/24/webRTC/index.html","39fa9e5a1732683f616d77e5606b1036"],["/404.html","af11c7ac94688f7c8e8323b8fd73f9f2"],["/about/index.html","18b1b5976d22e92e784e2d75de720fa8"],["/archives/2017/11/index.html","3ba84c5613f340d6d263eb96ccd9c704"],["/archives/2017/12/index.html","228fe30e27f2b97f9be26b452af32c0b"],["/archives/2017/index.html","68b8c77868b972a529bed8c89b3c0319"],["/archives/2018/07/index.html","41155825955e335e23bd040624e42752"],["/archives/2018/08/index.html","7af23ac01049a2f396dee27bf002f1e5"],["/archives/2018/09/index.html","630253c9e88faa79685d7ef3e6d010f8"],["/archives/2018/10/index.html","df32bf01ae53825f6f9213f4fc728176"],["/archives/2018/index.html","4b18a3f3cffa71b9c9f95628deddb157"],["/archives/2019/01/index.html","3de0e800bc5d8eb418d44e7e90b90e69"],["/archives/2019/02/index.html","dfe29792313dc4f2082eeb1ea9aa2eb7"],["/archives/2019/03/index.html","588f3ba74e334f74f17d95e3a635fb69"],["/archives/2019/04/index.html","0147d4cf6eaf94e531f1882880e81cf5"],["/archives/2019/07/index.html","904be628b935de7164b046044d4ec1f8"],["/archives/2019/index.html","cfe2eaa1a00c0bb3afb981f2ce0f0d51"],["/archives/2021/02/index.html","1b2b4ab79500bc6ae24716062f7dc637"],["/archives/2021/index.html","dea4549b7bb954442c9a041674ebd953"],["/archives/index.html","1145f52c274ed006f72144e5c9877ad6"],["/archives/page/2/index.html","1145f52c274ed006f72144e5c9877ad6"],["/categories/index.html","ec0277c9fec1b31a2fb257a0bbf62597"],["/categories/日常学习/index.html","77e3cf41eaba34ff11ddfc6fd65a92f0"],["/categories/经验总结/index.html","5aa69be93dae67290bdc91639e572103"],["/categories/随笔/index.html","d4217385b8a9697462fb3f837361bf22"],["/css/first.css","65cc26bb835962f7d37e2b3f29e8b696"],["/css/style.css","898e17ccd17ef2fd17c585e6f6bb1b54"],["/friends/index.html","4142306d92f64d74d8707248ee5e3989"],["/index.html","8ef6ab55c0f5fd1991131b098bb213d3"],["/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["/js/app.js","0274f82132f4aedd65734ce8b90fe8f0"],["/js/click_show_text.js","3f21190297a9c6f32964a0de12212006"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/js/wrapImage.js","7c0d45f9939b249e26a1aa74f4d6e3b1"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","bf3d59c20127391fe944dc534cfee5a6"],["/sw-register.js","fc211c1b34d9e2472dead9271bfdea5b"],["/tags/Css-Modules/index.html","54ed87c5080d828004cc07cc57d38ba3"],["/tags/JavaScript/index.html","5c4bfedb1ec24d8041801f16838e1f39"],["/tags/WeChat/index.html","55f5672c6b2ea0a4e52ec6cb5270f557"],["/tags/css/index.html","e9018082e2c35e31a0720cdf1e923abf"],["/tags/http/index.html","bc4255024cd3d1682a6ac206104e92e1"],["/tags/index.html","25578092b238446ca9072d0b153e5049"],["/tags/minUI/index.html","68f089cb1441cc28b903dc8cbc848854"],["/tags/vue/index.html","ab0858b58296616829090f2b4db714bb"],["/tags/web/index.html","ccac6784259401c2c4f90904c115d8ca"],["/tags/webRTC/index.html","ab5302fa29ad06c28a9c21ced2c13841"],["/tags/wepy/index.html","cd3cc970b1ccacb1464336a55f6c5dea"],["/tags/即时通讯/index.html","6c985e1caa47404cc08c910f3b9baa3d"],["/tags/学习/index.html","d0b35ec88fcf6a25941d38cf8c139b84"],["/tags/安全/index.html","62cf60c81e673531e0bd94602093d52c"],["/tags/实时音视频/index.html","e7f20948ff1f5c50fd4a67a1baa0c02c"],["/tags/小程序/index.html","8de6d588d54076229f091a61c280e354"],["/tags/总结/index.html","8b0ba86874de7c1eeeb86a8e48fefc7d"],["/tags/服务器/index.html","d1a9cdfcf9134cb3fda8e051d38807da"],["/tags/权限管理/index.html","bf9e790a7b857eda604423a9219e8190"],["/tags/百度Ife/index.html","3d6b00763ed55d7eff74839d3af58940"],["/tags/网络协议/index.html","6bb11cd94cb947dcf5d1b441563590a5"],["/tags/翻译/index.html","96e3a21b03a30c161e3b0cefc235dc46"]];
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
