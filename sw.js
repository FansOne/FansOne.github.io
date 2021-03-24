/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2017/11/11/Css Modules 小试/index.html","15703db352aa2ed521724efca407c321"],["/2017/12/11/微信视频H5开发小结/index.html","9bf40c34d5ee27faf703805922dfb60f"],["/2018/07/27/关于VUE的路由权限管理/index.html","07e1a3f1a35b355a888a1b3d2ab126e5"],["/2018/08/12/30s代码片段翻译/index.html","8dc89e90148d157f4277686eb2eee330"],["/2018/09/27/使用 Css 获取用户密码/index.html","8172d619c307ebda382b0c24817fdce8"],["/2018/10/13/微信小程序wepy框架-minui踩坑之路/index.html","80d9c9268524b208e95b00b92706df3f"],["/2019/01/05/2018年个人总结/index.html","a088ed5bba24624d04714d88b830b27d"],["/2019/01/12/关于Javascript正则的'反向引用'/index.html","5f0fd5b7881285378416139be15fb3d6"],["/2019/01/12/基于Inline-Block布局+vertical-Align的研究/index.html","69830ded8c90c961b98e34d42bb87407"],["/2019/02/12/50 行代码实现一个简单的 WEB 服务器/index.html","f545f9176cf0b7ff9ec5ba1a34da7d08"],["/2019/03/21/浅谈 HTTP 和 HTTPS/index.html","300bfa1144925951d1ff777c9f3324b3"],["/2019/04/23/vue3.0初体验有哪些实用新功能/index.html","e5c56e5ed97eca172a4e9f4c887fe1ce"],["/2019/07/21/微信小程序接入腾讯云IM即时通讯/index.html","f29c9ae4a1662726c4cfcc864d64e464"],["/2021/02/24/webRTC/index.html","2935e282a391ecf9dee8d715a1de4f9d"],["/404.html","1e6013b0a6e6ca0e6e2efef04acd3811"],["/about/index.html","e5e717c1c3a71ad63b9efdc4a19c076e"],["/archives/2017/11/index.html","8fe8f954ab93b9e077060614637d0ffb"],["/archives/2017/12/index.html","a3ce45386164c983a5aa67926e15b746"],["/archives/2017/index.html","a67161ec1a25a79dc89073e61affc211"],["/archives/2018/07/index.html","a5de234d9b32d7ada588ae8131bb3c5c"],["/archives/2018/08/index.html","61582c1335d5c2a309b4a70960facf52"],["/archives/2018/09/index.html","13b9077eea1c97d2638950a2032d5f6f"],["/archives/2018/10/index.html","005756d5f040c4633577efac1f98f7a5"],["/archives/2018/index.html","5e0f33cbd288758124ee1620254ba620"],["/archives/2019/01/index.html","97a46a7864a26de3ce8e963e293b5a49"],["/archives/2019/02/index.html","cf97efed13fcc2df7e8d685b1616a863"],["/archives/2019/03/index.html","97e0dd51f650a8813a4b1b2e07635c1b"],["/archives/2019/04/index.html","9541562fd2cb941f1c30c16229bf9826"],["/archives/2019/07/index.html","829f0540678a7ec862914e6c9d57489c"],["/archives/2019/index.html","146c7cc35aa4cff3937bbb90637ecb74"],["/archives/2021/02/index.html","9792ff117bc9133e0cdbc837e87a7101"],["/archives/2021/index.html","8f1c2e0ac54cb9033715beac7ed5a996"],["/archives/index.html","0c7751d979f63273f0eb190bc6dffe10"],["/archives/page/2/index.html","0c7751d979f63273f0eb190bc6dffe10"],["/categories/index.html","c2ca34eff606672b8166c877d0d4df61"],["/categories/日常学习/index.html","6b8179e9b5d378e04d2cbd038b9ee34d"],["/categories/经验总结/index.html","cbbe55f85c438732cbd654eff06abcf7"],["/categories/随笔/index.html","bc67dee8f16d8b6b3d7cf46591f7d680"],["/css/first.css","65cc26bb835962f7d37e2b3f29e8b696"],["/css/style.css","898e17ccd17ef2fd17c585e6f6bb1b54"],["/friends/index.html","9caad480b9cd6b0178ea46ffbb1e56e0"],["/index.html","a9e0a550ef7454ad2d5eeca3bac32400"],["/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["/js/app.js","0274f82132f4aedd65734ce8b90fe8f0"],["/js/click_show_text.js","3f21190297a9c6f32964a0de12212006"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/js/wrapImage.js","7c0d45f9939b249e26a1aa74f4d6e3b1"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","d4c93d3e6f644a5936f77cc613e75db0"],["/sw-register.js","46eda32dc6dc75001f77147f9c481fb6"],["/tags/Css-Modules/index.html","c6ff499cdf66a9c48a0b66b1e304966e"],["/tags/JavaScript/index.html","aebaf1d776ba234c0ef7a6c420fdd2d8"],["/tags/WeChat/index.html","99bd0741956f8e393887d091af437382"],["/tags/css/index.html","5ee6ea7a7ae7752716c4b21c633678f1"],["/tags/http/index.html","99c417ee7b4d7ad792e8d0ee4bb8793d"],["/tags/index.html","7bfcb71c04dfd40da287876a21e15282"],["/tags/minUI/index.html","d437b84f7ac0286035edb5fa953c7bc5"],["/tags/vue/index.html","7459373b8c00f991d0b0dd1b070b4747"],["/tags/web/index.html","9cdc792ff44eb89b7ec6493e36e7ee83"],["/tags/webRTC/index.html","42aba42624627eac23481e393b270544"],["/tags/wepy/index.html","ae87b39b074703d3839b9f40954a3ac9"],["/tags/即时通讯/index.html","3ecab94a21ae6743c346bac6e9e92a1e"],["/tags/学习/index.html","36a1dc700a4e01fa0626c1c607327846"],["/tags/安全/index.html","bb59bb5d76da74f2eb09e1cbe9586a24"],["/tags/实时音视频/index.html","676b3b9924204d5105e6a822caa9032f"],["/tags/小程序/index.html","bba1117ee37bee07d5eca1ad5fdf8088"],["/tags/总结/index.html","8caab2f7a855f1ce7457d81cb1a36dc7"],["/tags/服务器/index.html","3f3c74af8a4b12416f260da62c748345"],["/tags/权限管理/index.html","f7cd63d450470a69a80259fdb49e186b"],["/tags/百度Ife/index.html","b4b008fd5a3d38a6b8d45bd68851768c"],["/tags/网络协议/index.html","f7260fb89f991dfe4c0be7ce30c575d4"],["/tags/翻译/index.html","8cafe8888ad2a7e8e109a0b25f3f54a6"]];
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
