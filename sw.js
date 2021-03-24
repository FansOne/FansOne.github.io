/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2017/11/11/Css Modules 小试/index.html","ec3ac691f444812d11d7c0077655e12d"],["/2017/12/11/微信视频H5开发小结/index.html","50df3d0be0807c5c16f2b5700597a7e3"],["/2018/07/27/关于VUE的路由权限管理/index.html","3f083c14244057413aef18cb0b133dae"],["/2018/08/12/30s代码片段翻译/index.html","ce92da67af99d25287edf5d54c310710"],["/2018/09/27/使用 Css 获取用户密码/index.html","4411c98e7f6f56dd7dff394760c70b25"],["/2018/10/13/微信小程序wepy框架-minui踩坑之路/index.html","5eda777963eaf00544511cfa52861dc8"],["/2019/01/05/2018年个人总结/index.html","56c8e6486ce5a4f7f3af20c804a99465"],["/2019/01/12/关于Javascript正则的'反向引用'/index.html","77f6afe12496045079e29790c891e9c4"],["/2019/01/12/基于Inline-Block布局+vertical-Align的研究/index.html","04727858fb728d9d25d6f52c2be9fbfc"],["/2019/02/12/50 行代码实现一个简单的 WEB 服务器/index.html","c4ea649d6877f2e55722db77aa0a4e46"],["/2019/03/21/浅谈 HTTP 和 HTTPS/index.html","eef14279c7a7fa0002c07d9feaa81bf8"],["/2019/04/23/vue3.0初体验有哪些实用新功能/index.html","d9123a1a4dced293fe02dc20e491a518"],["/2019/07/21/微信小程序接入腾讯云IM即时通讯/index.html","1d94ae7a9369c175cbd6d0742fca5dc7"],["/2021/02/24/webRTC/index.html","fdd1f2a279856adcfbae8caad7c93e0e"],["/404.html","6b8e10b015d47bf6ab925dd5ce622f60"],["/about/index.html","4d2d694364e729105d2940a274c3db71"],["/archives/2017/11/index.html","916d98cc009f032c42847711f6c5c910"],["/archives/2017/12/index.html","15a4b40528ae2667fce2bd8774f49785"],["/archives/2017/index.html","5b756e21289691e7756a1c24fd9134a5"],["/archives/2018/07/index.html","537e95cc8c3b0aebec48a1473918da97"],["/archives/2018/08/index.html","9244267a828393227e9de43dfd976659"],["/archives/2018/09/index.html","6af41a7fc8858005a5f97ed844e04b91"],["/archives/2018/10/index.html","9cd643728c7f113be7f8da87aa2e880b"],["/archives/2018/index.html","19734d2dac37297d60601a1c3985e719"],["/archives/2019/01/index.html","30e7241b1b4c6ba0ba3164e7f8318b5f"],["/archives/2019/02/index.html","0523f38fa7f091f7e40030edffc50a68"],["/archives/2019/03/index.html","f0bc3954b0ee31b49632d8db1472ff0a"],["/archives/2019/04/index.html","f7d2aa80835d6c80beafe6cd864406e6"],["/archives/2019/07/index.html","9dbf86f5223a12d17b448098f8d9d052"],["/archives/2019/index.html","d6382fc09563f4053d25354f327ca330"],["/archives/2021/02/index.html","790ec5e6b9b2fff64a74f28a55eb3ddc"],["/archives/2021/index.html","2437d9ff44023347f1ad2fc2364168b6"],["/archives/index.html","5de86df2587768a449f727939109c291"],["/archives/page/2/index.html","5de86df2587768a449f727939109c291"],["/categories/index.html","a312e9f429d5f42538054d1c4b44ca8c"],["/categories/日常学习/index.html","b7e964360f47d746c4d6d6b154d94948"],["/categories/经验总结/index.html","15eb083071f8e47846da5dc9952840e1"],["/categories/随笔/index.html","6bb084749d771384f564b0ad1d45930a"],["/css/first.css","65cc26bb835962f7d37e2b3f29e8b696"],["/css/style.css","49f53d3f19c9fec3331bf253f0b3823a"],["/friends/index.html","76df43e03df589358fd16e9fc5af2d68"],["/index.html","badd0d1c3ccfbc974849ab4a1a7a2a3d"],["/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["/js/app.js","0274f82132f4aedd65734ce8b90fe8f0"],["/js/click_show_text.js","3f21190297a9c6f32964a0de12212006"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/js/wrapImage.js","7c0d45f9939b249e26a1aa74f4d6e3b1"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","04c20bcea712a4e2271bb29f8ad1b4ae"],["/sw-register.js","0661c1980824fd8f626f40e52957cf84"],["/tags/Css-Modules/index.html","50f680f6726111c6cfec3aed222e8fe1"],["/tags/JavaScript/index.html","56c58a6ae5781d4b99b25d8ff52aa028"],["/tags/WeChat/index.html","831f05551932028c8333295bf01504d1"],["/tags/css/index.html","dd0b474db23bc781d21392bb60abee67"],["/tags/http/index.html","da2aeedf95c6d39487b4c553b6b5f350"],["/tags/index.html","f0c89beebaa27bd3cc1f0be1fd168554"],["/tags/minUI/index.html","c0c134aee98884e60ea92c86776d3b81"],["/tags/vue/index.html","c4ba8f9d4750061746de508571cd0b1a"],["/tags/web/index.html","3d12107051e898a78d0ccaec24cb0ac0"],["/tags/webRTC/index.html","205422e090f8bb119db394e5d751c44d"],["/tags/wepy/index.html","b8a94a26295ee829fcf4f22f43dee52f"],["/tags/即时通讯/index.html","2cef8e04c272a366b3a479da19b238d3"],["/tags/学习/index.html","fdb4c06e2186d17773061b4bd6d1db2c"],["/tags/安全/index.html","b4afa5a0dc26917a2c3c011117225aba"],["/tags/实时音视频/index.html","48cc1a4c50d2375c0c3f76733822be7d"],["/tags/小程序/index.html","9028f68d22908d0750ddd0245b6629fb"],["/tags/总结/index.html","3b80cc42bc9ec0887e5ea8cb262e2d07"],["/tags/服务器/index.html","f12946430b42335b4163c9a145600d5a"],["/tags/权限管理/index.html","45bc4da9575ade70db4b93703bef3286"],["/tags/百度Ife/index.html","fa34a7978138f220585ff3e71695b2c3"],["/tags/网络协议/index.html","f9caadb5b8b8dabe4948bbc5679b767d"],["/tags/翻译/index.html","25076d351af6a398900781a00a5b9173"]];
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
