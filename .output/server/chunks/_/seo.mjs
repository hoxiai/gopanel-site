const GJK_TOOL_CATEGORIES = [
  {
    "slug": "dev",
    "name": "\u5F00\u53D1\u5DE5\u5177",
    "title": "\u5F00\u53D1\u5DE5\u5177_\u7A0B\u5E8F\u5458\u7684\u5728\u7EBF\u5DE5\u5177\u7BB1",
    "keywords": "\u5F00\u53D1\u5DE5\u5177,\u7A0B\u5E8F\u5458,\u5728\u7EBF\u5F00\u53D1",
    "description": "\u5F00\u53D1\u5DE5\u5177\uFF0C\u662F\u4E00\u4E2A\u7A0B\u5E8F\u5458\u7684\u5728\u7EBF\u5DE5\u5177\u7BB1\uFF0C\u4E0D\u8BBA\u60A8\u662F\u524D\u7AEF\u5F00\u53D1\u3001\u540E\u7AEF\u5F00\u53D1\u3001\u8FD8\u662F\u5176\u4ED6\u7684\u5404\u79CD\u5F00\u53D1\uFF0C\u90FD\u80FD\u4E3A\u60A8\u63D0\u4F9B\u9700\u8981\u7684\u5DE5\u5177\u3002",
    "icon": "code"
  },
  {
    "slug": "web",
    "name": "\u7AD9\u957F\u5DE5\u5177",
    "title": "\u7AD9\u957F\u5DE5\u5177_\u5E2E\u52A9\u7AD9\u957F\u63D0\u5347\u7F51\u7AD9\u6D41\u91CF",
    "keywords": "\u7AD9\u957F\u5DE5\u5177,seo\u5DE5\u5177,\u7F51\u7AD9\u5236\u4F5C\u5DE5\u5177",
    "description": "\u7AD9\u957F\u5DE5\u5177\u680F\u76EE\uFF0C\u4E3A\u7AD9\u957F\u63D0\u4F9B\u4E86\u5EFA\u7AD9\u975E\u5E38\u5B9E\u7528\u7684\u5DE5\u5177\uFF0C\u5982SEO\u4F18\u5316\u3001\u7F51\u7AD9\u6743\u91CD\u67E5\u8BE2\u3001\u57DF\u540D\u76F8\u5173\u7684\u67E5\u8BE2\u3001\u7F51\u7AD9\u5B89\u5168\u76D1\u6D4B\u7B49\u3002",
    "icon": "browsers"
  },
  {
    "slug": "work",
    "name": "\u63D0\u5347\u6548\u7387",
    "title": "\u63D0\u5347\u6548\u7387\u5DE5\u5177_\u5728\u7EBF\u63D0\u5347\u60A8\u7684\u5DE5\u4F5C\u6548\u7387",
    "keywords": "\u63D0\u5347\u6548\u7387,\u6587\u5B57\u5DE5\u5177,\u5728\u7EBF\u6392\u7248",
    "description": "\u6548\u7387\u63D0\u5347\u5DE5\u5177\uFF0C\u4E3A\u60A8\u63D0\u4F9B\u4F18\u8D28\u7684\u5DE5\u5177\uFF0C\u6765\u63D0\u5347\u60A8\u7684\u5DE5\u4F5C\u6548\u7387\uFF0C\u5982\u6587\u5B57\u6392\u7248\u5DE5\u5177\u3001\u6587\u5B57\u63D0\u53D6\u5DE5\u5177\u3001\u5728\u7EBF\u6392\u7248\u5DE5\u5177\u7B49\u7B49\uFF0C\u8BA9\u60A8\u7684\u5DE5\u4F5C\u53D8\u5F97\u7B80\u5355\u8F7B\u677E\u3002",
    "icon": "lightning"
  },
  {
    "slug": "query",
    "name": "\u4FBF\u6C11\u67E5\u8BE2",
    "title": "\u4FBF\u6C11\u67E5\u8BE2\u5DE5\u5177_\u4E3A\u60A8\u67E5\u8BE2\u771F\u5B9E\u6709\u6548\u7684\u4FE1\u606F",
    "keywords": "\u4FBF\u6C11\u67E5\u8BE2,\u5728\u7EBF\u67E5\u8BE2",
    "description": "\u4FBF\u6C11\u5DE5\u5177\uFF0C\u4E3A\u60A8\u63D0\u4F9B\u4E86\u65E5\u5E38\u751F\u6D3B\u4E2D\u5E38\u7528\u7684\u5DE5\u5177\uFF0C\u5982\u5728\u7EBF\u5B66\u4E60\u7684\u67E5\u8BE2\u3001\u5065\u5EB7\u517B\u8EAB\u7684\u4FE1\u606F\u67E5\u8BE2\u3001\u57CE\u5E02\u7684\u4FE1\u606F\u67E5\u8BE2\u7B49\u5DE5\u5177\uFF0C\u8BA9\u60A8\u67E5\u8BE2\u8D44\u6599\u66F4\u4FBF\u6377\u3002",
    "icon": "magnifying-glass"
  },
  {
    "slug": "media",
    "name": "\u5A92\u4F53\u5904\u7406",
    "title": "\u56FE\u7247\u5904\u7406_\u97F3\u89C6\u9891\u5904\u7406\u5DE5\u5177",
    "keywords": "\u56FE\u7247\u5904\u7406,\u97F3\u9891\u5904\u7406,\u89C6\u9891\u5904\u7406",
    "description": "\u5A92\u4F53\u5904\u7406\u680F\u76EE\uFF0C\u4E3A\u60A8\u63D0\u4F9B\u4E86\u4F18\u8D28\u7684\u5728\u7EBF\u5904\u7406\u5DE5\u5177\uFF0C\u5982\u56FE\u7247\u7684\u5904\u7406\u3001\u97F3\u9891\u7684\u5904\u7406\u3001\u89C6\u9891\u7684\u5904\u7406\u7B49\uFF0C\u8BA9\u60A8\u5FEB\u6377\u904D\u5386\u7684\u5904\u7406\u9700\u8981\u5B8C\u6210\u7684\u5A92\u4F53\u6587\u4EF6\u3002",
    "icon": "image"
  },
  {
    "slug": "ent",
    "name": "\u4F11\u95F2\u5A31\u4E50",
    "title": "\u4F11\u95F2\u5A31\u4E50\u5DE5\u5177_\u8BA9\u60A8\u80FD\u5728\u538B\u529B\u5927\u7684\u65F6\u5019\u653E\u677E\u5FC3\u60C5",
    "keywords": "\u4F11\u95F2\u5A31\u4E50,\u4F11\u95F2\u6E38\u620F,\u964D\u538B\u5DE5\u5177",
    "description": "\u4F11\u95F2\u5A31\u4E50\u5DE5\u5177\uFF0C\u4E3A\u60A8\u63D0\u4F9B\u7684\u975E\u5E38\u6709\u6548\u7684\u964D\u538B\u5DE5\u5177\uFF0C\u5982\u4E00\u4E9B\u964D\u538B\u5C0F\u6E38\u620F\uFF0C\u6709\u8DA3\u7684\u6D4B\u8BD5\u5DE5\u5177\u7B49\uFF0C\u8BA9\u60A8\u5728\u538B\u529B\u5F88\u5927\u7684\u65F6\u5019\uFF0C\u5F97\u5230\u5E94\u6709\u7684\u7F13\u89E3\u3002",
    "icon": "game-controller"
  }
];
const GJK_TOOLS = [
  {
    "slug": "zishu",
    "name": "\u5728\u7EBF\u5B57\u6570\u7EDF\u8BA1",
    "subtitle": "\u7528\u4E8E\u8BA1\u7B97\u6587\u672C\u4E2D\u7684\u6C49\u5B57\u3001\u6587\u5B57\u3001\u6570\u5B57\u3001\u5B57\u6BCD\u3001\u5B57\u8282\u7684\u6570\u91CF\u3002",
    "category": "work",
    "tags": [
      "\u5B57\u6570\u7EDF\u8BA1",
      "\u5B57\u7B26\u7EDF\u8BA1",
      "\u5B57\u8282\u7EDF\u8BA1",
      "\u5B57\u6570\u8BA1\u7B97"
    ],
    "badge": "FREE",
    "icon": "textbox",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202008/20200822233555_740.png",
    "views": 10403
  },
  {
    "slug": "paiban",
    "name": "\u5728\u7EBF\u6587\u5B57\u6392\u7248",
    "subtitle": "\u4E00\u952E\u6392\u7248\u6587\u672C\u3001word\u6587\u6863\uFF0C\u53EF\u6807\u70B9\u7B26\u53F7\u3001\u6BB5\u843D\u95F4\u9694\u3001\u7F29\u8FDB\u7B49\u3002",
    "category": "work",
    "tags": [
      "\u6587\u5B57\u6392\u7248",
      "\u6587\u5B57\u6392\u7248\u5DE5\u5177",
      "\u5728\u7EBF\u6392\u7248",
      "\u5728\u7EBF\u6392\u7248\u5DE5\u4F5C"
    ],
    "badge": "FREE",
    "icon": "text-align-left",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202008/20200822234154_921.png",
    "views": 15356
  },
  {
    "slug": "js",
    "name": "javascript\u5DE5\u5177",
    "subtitle": "\u5728\u7EBFjs\u7F8E\u5316\u3001\u89E3\u538B\u7F29\u3001\u6DF7\u6DC6\u3001\u538B\u7F29\u3001\u53BB\u9664\u65E0\u7528\u6CE8\u91CA\u7B49\u3002",
    "category": "dev",
    "tags": [
      "\u5728\u7EBFjs\u7F8E\u5316",
      "\u89E3\u538B\u7F29",
      "\u6DF7\u6DC6"
    ],
    "badge": "FREE",
    "icon": "file-js",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202008/20200825121433_726.png",
    "views": 33230
  },
  {
    "slug": "css",
    "name": "CSS\u5DE5\u5177",
    "subtitle": "CSS\u538B\u7F29\u3001\u89E3\u538B\u3001\u7F8E\u5316CSS\u4EE3\u7801\u3001\u5355\u4F4D\u6362\u7B97\u3001css\u7B80\u5199\u3002",
    "category": "dev",
    "tags": [
      "\u5728\u7EBF\u538B\u7F29",
      "\u89E3\u538B",
      "CSS\u4EE3\u7801"
    ],
    "badge": "FREE",
    "icon": "paint-brush-broad",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202008/20200825121443_586.png",
    "views": 11652
  },
  {
    "slug": "html",
    "name": "html\u5DE5\u5177",
    "subtitle": "HTML\u7F8E\u5316\u3001\u538B\u7F29\u3001\u6E05\u9664\u8FDE\u63A5\u3001\u8F6CJS\u53D8\u91CF\u7B49\u3002",
    "category": "dev",
    "tags": [
      "html\u7F8E\u5316",
      "html\u538B\u7F29",
      "html\u6E05\u94FE\u63A5"
    ],
    "badge": "FREE",
    "icon": "file-html",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202008/20200825120935_158.png",
    "views": 16499
  },
  {
    "slug": "chengyu",
    "name": "\u6210\u8BED\u5927\u5168",
    "subtitle": "\u4E2D\u56FD\u6210\u8BED\u67E5\u8BE2\uFF0C\u6210\u8BED\u7684\u4ECB\u7ECD\u4E0E\u5178\u6545\uFF0C\u6700\u5B8C\u6574\u7684\u6210\u8BED\u63A5\u9F99\u3002",
    "category": "query",
    "tags": [
      "\u6210\u8BED\u5927\u5168",
      "\u6210\u8BED\u5178\u6545",
      "\u56DB\u5B57\u6210\u8BED"
    ],
    "badge": "FREE",
    "icon": "book",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202008/20200822235241_331.png",
    "views": 15180
  },
  {
    "slug": "2048",
    "name": "2048\u6E38\u620F",
    "subtitle": "2048\uFF0C\u4E00\u6B3E\u597D\u73A9\u3001\u653E\u677E\u3001\u4F11\u95F2\u3001\u76CA\u667A\u5C0F\u6E38\u620F",
    "category": "ent",
    "tags": [
      "2048",
      "\u4F11\u95F2\u6E38\u620F"
    ],
    "badge": "FREE",
    "icon": "squares-four",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202008/20200823000743_456.png",
    "views": 19238
  },
  {
    "slug": "taiqiu",
    "name": "\u53F0\u7403\u6E38\u620F",
    "subtitle": "\u5728\u7EBF\u53F0\u7403\u6E38\u620F\uFF0C\u8BA9\u7A0B\u5E8F\u5458\u653E\u677E\u7684\u53F0\u7403\u6E38\u620F\u3002",
    "category": "ent",
    "tags": [
      "\u53F0\u7403\u6E38\u620F",
      "\u7A0B\u5E8F\u5458"
    ],
    "badge": "FREE",
    "icon": "circle",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202008/20200823204124_639.png",
    "views": 10997
  },
  {
    "slug": "relax",
    "name": "\u51CF\u538B\u653E\u677E\u7F51",
    "subtitle": "\u80FD\u8BA9\u4F60\u5185\u5FC3\u611F\u5230\u5B89\u9759\u7684\u9875\u9762\uFF0C\u538B\u529B\u5927\u7684\u65F6\u5019\u770B\u770B\u3002",
    "category": "ent",
    "tags": [
      "\u7A0B\u5E8F\u5458",
      "\u653E\u677E"
    ],
    "badge": "FREE",
    "icon": "music-notes",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202008/20200823222952_646.png",
    "views": 11398
  },
  {
    "slug": "json",
    "name": "JSON\u5DE5\u5177",
    "subtitle": "JSON\u683C\u5F0F\u5316\u5DE5\u5177\uFF0C\u80FD\u8BA9\u4F60\u66F4\u76F4\u89C2\u7684\u67E5\u770Bjson\u7ED3\u6784\uFF0C\u6216\u8F6C\u6362\u6210XML",
    "category": "dev",
    "tags": [
      "json",
      "\u683C\u5F0F\u5316",
      "\u5F00\u53D1"
    ],
    "badge": "FREE",
    "icon": "brackets-curly",
    "hot": true,
    "thumb": "https://img.gjk.cn/thumb/202008/20200825115629_441.png",
    "views": 18246
  },
  {
    "slug": "daxiaoxie",
    "name": "\u82F1\u6587\u5927\u5C0F\u5199\u8F6C\u6362",
    "subtitle": "\u4E00\u952E\u8F6C\u6362\u82F1\u6587\u5B57\u6BCD\u5927\u5C0F\u5199\uFF0C\u7ED9\u82F1\u6587\u52A0\u4E0A\u9A7C\u5CF0\u3001\u9996\u5B57\u6BCD\u5927\u5C0F\u5199\u7B49\u3002",
    "category": "work",
    "tags": [
      "\u82F1\u6587\u8F6C\u6362",
      "\u82F1\u6587",
      "\u5927\u5C0F\u5199\u8F6C\u6362"
    ],
    "badge": "FREE",
    "icon": "text-aa",
    "hot": true,
    "thumb": "https://img.gjk.cn/thumb/202009/20200901172633_188.png",
    "views": 52312
  },
  {
    "slug": "qrcode",
    "name": "\u4E8C\u7EF4\u7801\u751F\u6210",
    "subtitle": "\u80FD\u5FEB\u901F\u7684\u751F\u6210\u9002\u5408\u4F60\u7684\u4E8C\u7EF4\u7801\uFF0C\u591A\u79CD\u98CE\u683C\u9009\u62E9\uFF0C\u5FEB\u901F\u4FBF\u6377\u3002",
    "category": "media",
    "tags": [
      "\u4E8C\u7EF4\u7801",
      "\u7F8E\u5316\u56FE\u7247"
    ],
    "badge": "FREE",
    "icon": "qr-code",
    "hot": true,
    "thumb": "https://img.gjk.cn/thumb/202009/20200904170809_474.png",
    "views": 10728
  },
  {
    "slug": "renmingbi",
    "name": "\u4EBA\u6C11\u5E01\u5927\u5199\u8F6C\u6362",
    "subtitle": "\u4E00\u952E\u628A\u4EBA\u6C11\u5E01\u8F6C\u6362\u6210\u4E2D\u6587\u5927\u5199\uFF0C\u8D22\u52A1\u548C\u4F1A\u8BA1\u4E13\u7528\u3002",
    "category": "work",
    "tags": [
      "\u4EBA\u6C11\u5E01\u5927\u5199\u8F6C\u6362",
      "\u91D1\u989D\u5927\u5199\u8F6C\u6362",
      "\u4F1A\u8BA1\u5927\u5199\u8F6C\u6362",
      "\u5927\u5C0F\u5199\u8F6C\u6362"
    ],
    "badge": "FREE",
    "icon": "currency-cny",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202009/20200901173524_994.png",
    "views": 1287
  },
  {
    "slug": "meijindaxie",
    "name": "\u82F1\u6587\u91D1\u989D\u5927\u5199\u8F6C\u6362",
    "subtitle": "\u628A\u963F\u62C9\u4F2F\u6570\u5B57\u91D1\u989D\u8F6C\u6362\u4E3A\u82F1\u6587\u91D1\u989D\u5927\u5199\u3001\u8F6C\u82F1\u6587\uFF0C\u5916\u8D38\u7684\u597D\u5E2E\u624B\u3002",
    "category": "work",
    "tags": [
      "\u82F1\u6587\u91D1\u989D\u5927\u5199\u8F6C\u6362\u5668",
      "\u82F1\u6587\u6570\u5B57\u5927\u5199",
      "\u82F1\u6587\u91D1\u989D\u5927\u5199\u89C4\u5219"
    ],
    "badge": "FREE",
    "icon": "currency-dollar",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202009/20200901205942_353.png",
    "views": 27482
  },
  {
    "slug": "cron",
    "name": "Cron\u8868\u8FBE\u5F0F\u751F\u6210",
    "subtitle": "\u53EF\u4EE5\u5FEB\u901F\u7684\u5E2E\u60A8\u751F\u6210Cron\u5B9A\u65F6\u6267\u884C\u89C4\u5219\uFF0C\u6A21\u62DFCron\u7684\u6267\u884C\u7ED3\u679C\u3002",
    "category": "dev",
    "tags": [
      "Crontab",
      "quartz",
      "Cron",
      "\u5728\u7EBF\u751F\u6210"
    ],
    "badge": "FREE",
    "icon": "clock-countdown",
    "hot": true,
    "thumb": "https://img.gjk.cn/thumb/202009/20200904153630_810.png",
    "views": 48070
  },
  {
    "slug": "crontab",
    "name": "Crontab\u8868\u8FBE\u5F0F\u751F\u6210",
    "subtitle": "\u5FEB\u901F\u751F\u6210Linux\u7684\u5B9A\u65F6\u6267\u884C\u89C4\u5219\uFF0C\u6A21\u62DFCrontab\u7684\u6267\u884C\u7ED3\u679C\u3002",
    "category": "dev",
    "tags": [
      "linux",
      "crontab",
      "\u5B9A\u65F6\u6267\u884C",
      "\u4EFB\u52A1\u7BA1\u7406"
    ],
    "badge": "FREE",
    "icon": "clock",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202009/20200904154212_746.png",
    "views": 34050
  },
  {
    "slug": "fanyingsudu",
    "name": "\u53CD\u5E94\u901F\u5EA6\u6D4B\u8BD5",
    "subtitle": "\u80FD\u6709\u6548\u7684\u6D4B\u8BD5\u53CD\u5E94\u901F\u5EA6\uFF0C\u53EF\u4EE5\u5F88\u597D\u7684\u7EC3\u4E60\u4E13\u6CE8\u529B\u3002",
    "category": "ent",
    "tags": [
      "\u53CD\u5E94\u901F\u5EA6",
      "\u6D4B\u8BD5"
    ],
    "badge": "FREE",
    "icon": "translate",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202009/20200904174935_363.png",
    "views": 16293
  },
  {
    "slug": "xuexing",
    "name": "\u5B50\u5973\u8840\u578B\u9057\u4F20",
    "subtitle": "\u8840\u578B\u9057\u5B58\u5173\u7CFB\u67E5\u8BE2\u5DE5\u5177\uFF0C\u80FD\u65B9\u4FBF\u7684\u6839\u636E\u7236\u6BCD\u7684\u8840\u578B\u63A8\u6D4B\u5B69\u5B50\u7684\u8840\u578B\u3002",
    "category": "query",
    "tags": [
      "\u5B50\u5973\u8840\u578B\u9057\u5B58\u67E5\u8BE2",
      "\u8840\u578B\u67E5\u8BE2\u5DE5\u5177"
    ],
    "badge": "FREE",
    "icon": "drop",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202009/20200905105904_761.png",
    "views": 13457
  },
  {
    "slug": "xingbie",
    "name": "\u5B9D\u5B9D\u6027\u522B\u9884\u6D4B",
    "subtitle": "\u53EF\u6839\u636E\u5B55\u5987\u7684\u5E74\u9F84\uFF0C\u4EE5\u53CA\u6000\u5B55\u65F6\u95F4\u9884\u7B97\u6000\u5B55\u4E2D\u7684\u5B9D\u8D1D\u7684\u6027\u522B\u3002",
    "category": "query",
    "tags": [
      "\u5B9D\u5B9D\u6027\u522B\u9884\u6D4B",
      "\u751F\u7537\u751F\u5973\u9884\u6D4B"
    ],
    "badge": "FREE",
    "icon": "gender-male",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202009/20200905111613_251.png",
    "views": 12217
  },
  {
    "slug": "katong",
    "name": "\u5361\u901A\u5934\u50CF\u5236\u4F5C",
    "subtitle": "\u514D\u8D39\u7684\u52A8\u6F2B\u4EBA\u7269\u5236\u4F5C\u5DE5\u5177\uFF0C\u53EF\u4EE5\u968F\u5FC3\u5B9A\u5236\u7537\u5973\u5361\u901A\u5934\u50CF\uFF0C\u591A\u79CD\u9762\u90E8\u8868\u60C5",
    "category": "media",
    "tags": [
      "\u5728\u7EBF\u5361\u901A\u4EBA\u7269\u5236\u4F5C",
      "DIY\u7537\u5973\u5361\u901A\u5934\u50CF",
      "\u5728\u7EBF\u52A8\u6F2B\u5F62\u8C61\u5B9A\u5236"
    ],
    "badge": "FREE",
    "icon": "user-circle",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202009/20200905120542_366.png",
    "views": 2531
  },
  {
    "slug": "ip",
    "name": "IP\u5730\u5740\u67E5\u8BE2",
    "subtitle": "\u80FD\u5FEB\u901F\u7684\u67E5\u8BE2IP\u5F52\u5C5E\u5730\uFF0C\u591A\u4E2A\u6570\u636E\u5E93\u505A\u53C2\u8003\uFF0C\u975E\u5E38\u7CBE\u51C6\u3002",
    "category": "web",
    "tags": [
      "IP\u5730\u5740",
      "\u67E5IP",
      "IP\u5F52\u5C5E\u5730"
    ],
    "badge": "FREE",
    "icon": "globe",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202009/20200906003658_451.png",
    "views": 13035
  },
  {
    "slug": "texttohtml",
    "name": "\u6587\u672C\u8F6Chtml\u4EE3\u7801",
    "subtitle": "\u5C06\u6587\u672Cword\u7B49\u4E00\u952E\u8F6C\u6362\u6210html\u4EE3\u7801\uFF0C\u5E26\u6362\u884C\u7B26\u3001\u6BB5\u843D\u6807\u7B7E\u7B49\u3002",
    "category": "web",
    "tags": [
      "\u6587\u672C\u8F6CHTML",
      "\u5728\u7EBF\u6587\u672C\u8F6C\u6362HTML\u5DE5\u5177"
    ],
    "badge": "FREE",
    "icon": "file-html",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202009/20200906174741_624.png",
    "views": 27596
  },
  {
    "slug": "randkey",
    "name": "\u968F\u673A\u5BC6\u7801\u751F\u6210\u5668",
    "subtitle": "\u80FD\u5FEB\u901F\u751F\u6210\u5BC6\u7801\u548C\u5BF9\u4E8Emd5\u503C\uFF0C\u652F\u6301\u5B57\u7B26\u548C\u957F\u5EA6\u8BBE\u5B9A\u3002",
    "category": "dev",
    "tags": [
      "\u968F\u673A\u5BC6\u7801\u751F\u6210\u5DE5\u5177",
      "\u968F\u673A\u5BC6\u7801\u751F\u6210\u5668",
      "\u5728\u7EBF\u968F\u673A\u5BC6\u7801\u751F\u6210"
    ],
    "badge": "FREE",
    "icon": "key",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202009/20200906201854_121.png",
    "views": 15117
  },
  {
    "slug": "randstr",
    "name": "\u968F\u673A\u751F\u6210\u5B57\u7B26\u4E32",
    "subtitle": "\u968F\u673A\u751F\u6210\u5B57\u7B26\u4E32\uFF0C\u53EF\u8BBE\u7F6E\u5B57\u7B26\u4E32\u5185\u5BB9\u3001\u957F\u5EA6\u3001\u7EC4\u6570\u7B49\u3002",
    "category": "dev",
    "tags": [
      "\u968F\u673A\u5B57\u7B26",
      "\u968F\u673A\u5B57\u6BCD",
      "\u968F\u673A\u6570\u5B57",
      "\u968F\u673A\u5B57\u7B26\u4E32"
    ],
    "badge": "FREE",
    "icon": "text-aa",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202009/20200906205647_140.png",
    "views": 11447
  },
  {
    "slug": "jianfanti",
    "name": "\u4E2D\u6587\u7B80\u7E41\u4F53\u8F6C\u6362",
    "subtitle": "\u4E00\u952E\u8F6C\u7B80\u4F53\u5230\u7E41\u4F53\u5B57\uFF0C\u7E41\u4F53\u5230\u7B80\u4F53\uFF0C\u652F\u6301\u53F0\u6E7E\u6B63\u4F53\u3001\u9999\u6E2F\u7E41\u4F53\u3002",
    "category": "work",
    "tags": [
      "\u7B80\u4F53\u5B57",
      "\u7E41\u4F53\u5B57",
      "\u5728\u7EBF\u8F6C\u6362",
      "\u7B80\u7E41\u4F53\u8F6C\u6362"
    ],
    "badge": "FREE",
    "icon": "translate",
    "hot": true,
    "thumb": "https://img.gjk.cn/thumb/202009/20200908190118_397.png",
    "views": 107057
  },
  {
    "slug": "pinyin",
    "name": "\u4E2D\u6587\u8F6C\u62FC\u97F3\u6CE8\u97F3",
    "subtitle": "\u65B9\u4FBF\u7684\u628A\u4E2D\u6587\u8F6C\u6362\u6210\u6709\u62FC\u97F3\u6CE8\u97F3\u7684\u683C\u5F0F\uFF0C\u8FD8\u80FD\u67E5\u8BE2\u4E2D\u6587\u751F\u5B57\u7684\u62FC\u97F3\u3002",
    "category": "work",
    "tags": [
      "\u4E2D\u6587\u62FC\u97F3\u6CE8\u97F3",
      "\u4E2D\u6587\u6CE8\u97F3\u5DE5\u5177"
    ],
    "badge": "FREE",
    "icon": "translate",
    "hot": true,
    "thumb": "https://img.gjk.cn/thumb/202009/20200909013510_znJ2WE.png",
    "views": 35230
  },
  {
    "slug": "ocr",
    "name": "OCR\u56FE\u7247\u8BC6\u522B\u6587\u5B57",
    "subtitle": "OCR\u6587\u5B57\u8BC6\u522B\u5DE5\u5177\u65B9\u4FBF\u7684\u628A\u56FE\u7247\u4E2D\u7684\u6587\u5B57\u8BC6\u522B\u51FA\u6587\u672C\u6765\uFF0C\u8FA8\u8BC6\u7387\u975E\u5E38\u9AD8",
    "category": "media",
    "tags": [
      "OCR\u6587\u5B57\u8BC6\u522B\u5DE5\u5177",
      "\u56FE\u7247\u6587\u5B57\u8BC6\u522B"
    ],
    "badge": "FREE",
    "icon": "scan",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202009/20200909072920_SRZj94.png",
    "views": 9665
  },
  {
    "slug": "quchong",
    "name": "\u6587\u672C\u6BB5\u843D\u53BB\u91CD",
    "subtitle": "\u5728\u7EBF\u6587\u672C\u53BB\u91CD\u5DE5\u5177\uFF0C\u80FD\u628A\u91CD\u590D\u7684\u6587\u672C\u53BB\u91CD\u590D\uFF0C\u4FDD\u7559\u4E00\u6761\u8BB0\u5F55\u3002",
    "category": "work",
    "tags": [
      "\u6587\u672C\u53BB\u91CD\u5DE5\u5177",
      "\u5728\u7EBF\u6587\u672C\u53BB\u91CD\u5DE5\u5177",
      "\u5173\u952E\u8BCD\u53BB\u91CD"
    ],
    "badge": "FREE",
    "icon": "funnel",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202009/20200909072523_IsEEFA.png",
    "views": 9405
  },
  {
    "slug": "timestamp",
    "name": "\u65F6\u95F4\u6233\u8F6C\u6362",
    "subtitle": "\u53EF\u4EE5\u628A\u65F6\u95F4\u6233(Unix timestamp)\u8F6C\u6362\u6210\u65F6\u95F4\uFF0C\u6216\u8005\u628A\u65F6\u95F4\u65E5\u671F\u8F6C\u6362\u6210\u65F6\u95F4\u6233\u3002",
    "category": "dev",
    "tags": [
      "Unix\u65F6\u95F4\u6233\u8F6C\u6362",
      "\u65F6\u95F4\u6233\u8F6C\u6362\u5DE5\u5177",
      "\u65F6\u95F4\u6233\u8F6C\u6362\u65F6\u95F4",
      "\u65F6\u95F4\u8F6C\u6362\u65F6\u95F4\u6233"
    ],
    "badge": "FREE",
    "icon": "clock-clockwise",
    "hot": true,
    "thumb": "https://img.gjk.cn/thumb/202009/20200910040113_TDzudQ.png",
    "views": 16942
  },
  {
    "slug": "holiday",
    "name": "2024\u5E74\u653E\u5047\u5B89\u6392",
    "subtitle": "\u5168\u80FD\u653E\u5047\u7684\u5B89\u6392\uFF0C\u653E\u5047\u7684\u5929\u6570\u3001\u4E0E\u5DE5\u8D44\u500D\u6570\uFF0C\u5B9E\u65F6\u66F4\u65B0\u3002",
    "category": "query",
    "tags": [
      "2020\u5E74\u653E\u5047\u5B89\u6392",
      "\u56FD\u5E86\u653E\u5047\u5B89\u6392",
      "\u4E2D\u79CB\u653E\u5047\u5B89\u6392",
      "\u7AEF\u5348\u653E\u5047\u90A3\u6392"
    ],
    "badge": "FREE",
    "icon": "calendar",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202009/20200912010346_jFchW7.png",
    "views": 9208
  },
  {
    "slug": "reversetext",
    "name": "\u6587\u672C\u53CD\u8F6C\u6392\u5E8F",
    "subtitle": "\u80FD\u628A\u8F93\u5165\u7684\u6587\u672C\uFF0C\u6309\u6BCF\u4E00\u884C\u4E3A\u4E00\u4E2A\u9879\u76EE\u91CD\u65B0\u53CD\u8F6C\u6392\u5E8F\u3002",
    "category": "work",
    "tags": [
      "\u6587\u672C\u7FFB\u8F6C\u6392\u5E8F\u5DE5\u5177",
      "\u6587\u672C\u53CD\u8F6C\u6392\u5E8F"
    ],
    "badge": "FREE",
    "icon": "arrows-left-right",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202009/20200911112018_yOR6W4.png",
    "views": 8028
  },
  {
    "slug": "quanbanjiao",
    "name": "\u5168\u89D2\u534A\u89D2\u8F6C\u6362",
    "subtitle": "\u6B64\u5DE5\u5177\u80FD\u5C06\u5168\u89D2\u5B57\u7B26\u548C\u534A\u89D2\u5B57\u7B26\u76F8\u4E92\u5207\u6362\uFF0C\u4E00\u952E\u8F6C\u6362\uFF0C\u5FEB\u901F\u65B9\u4FBF\u3002",
    "category": "work",
    "tags": [
      "\u6DFB\u52A0\u5E8F\u53F7\u5DE5\u5177",
      "\u6587\u672C\u589E\u52A0\u5E8F\u53F7\u5DE5\u5177"
    ],
    "badge": "FREE",
    "icon": "text-aa",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202009/20200911120949_rxg36X.png",
    "views": 8754
  },
  {
    "slug": "useragent",
    "name": "UserAgent\u4FE1\u606F",
    "subtitle": "User Agent\u4FE1\u606F\u67E5\u770B\u5DE5\u5177\u65B9\u4FBF\u7684\u67E5\u770B\u60A8\u5F53\u524D\u8BBF\u95EE\u7F51\u9875\u7684UA\u4FE1\u606F\u3002",
    "category": "dev",
    "tags": [
      "UserAgent"
    ],
    "badge": "FREE",
    "icon": "monitor",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202009/20200913081228_CT6cLL.png",
    "views": 23556
  },
  {
    "slug": "unserialize",
    "name": "PHP\u53CD\u5E8F\u5217\u5316",
    "subtitle": "\u5728\u7EBF\u53CD\u5E8F\u5217\u5316\u751F\u6210json\u548C\u4EE3\u7801\uFF0C\u8BA9\u60A8\u5FEB\u901F\u67E5\u770B\u5E8F\u5217\u5316\u540E\u7684\u4E1C\u897F\u3002",
    "category": "dev",
    "tags": [
      "\u5E8F\u5217\u5316",
      "php",
      "serialize"
    ],
    "badge": "FREE",
    "icon": "code",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202009/20200914100709_Z3vk6I.png",
    "views": 12562
  },
  {
    "slug": "getmobile",
    "name": "\u624B\u673A\u53F7\u7801\u63D0\u53D6",
    "subtitle": "\u80FD\u4ECE\u6587\u672C\u4E2D\u6279\u91CF\u63D0\u53D6\u624B\u673A\u53F7\u7801\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u5305\u542B\u6216\u4E0D\u5305\u542B\u7684\u6570\u5B57\u3002",
    "category": "work",
    "tags": [
      "\u624B\u673A",
      "\u6293\u53D6"
    ],
    "badge": "FREE",
    "icon": "device-mobile",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202009/20200915111058_tDii4i.png",
    "views": 22068
  },
  {
    "slug": "guid",
    "name": "guid\u5728\u7EBF\u751F\u6210",
    "subtitle": "GUID\u751F\u6210\u5DE5\u5177\u80FD\u4E3A\u60A8\u65B9\u4FBF\u7684\u5728\u7EBF\u751F\u6210\u552F\u4E00\u5B57\u7B26\u4E32GUID/UUID\u3002",
    "category": "dev",
    "tags": [
      "guid",
      "uuid"
    ],
    "badge": "FREE",
    "icon": "fingerprint",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202009/20200916100342_HZU8aG.png",
    "views": 8931
  },
  {
    "slug": "ascii",
    "name": "ASCII\u7F16\u7801\u8F6C\u6362",
    "subtitle": "ASCII\u7F16\u7801\u7684\u8F6C\u6362\uFF0CASCII\u8F6C\u6587\u5B57\uFF0C\u4EE5\u53CAascii\u7684\u5BF9\u7167\u8868\u7801 \u53CA \u63A7\u5236\u5B57\u7B26",
    "category": "dev",
    "tags": [
      "ASCII",
      "\u8F6C\u7801"
    ],
    "badge": "FREE",
    "icon": "text-aa",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202009/20200916104705_IqW8Ua.png",
    "views": 14657
  },
  {
    "slug": "htpasswd",
    "name": "htpasswd\u751F\u6210\u5668",
    "subtitle": "htpasswd\uFF0C\u7528\u4E8E\u751F\u6210 http \u57FA\u672C\u8BA4\u8BC1\u7684\u5BC6\u7801\u6587\u4EF6\u3002",
    "category": "web",
    "tags": [
      "htpasswd",
      "htpasswd\u751F\u6210"
    ],
    "badge": "FREE",
    "icon": "lightning",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202009/20200919082051_vJkZrI.png",
    "views": 8884
  },
  {
    "slug": "urlencode",
    "name": "URL\u7F16\u7801\u89E3\u7801",
    "subtitle": "\u4E3A\u4E86\u8BA9\u5305\u542B\u4E2D\u6587\u7684URL\u53EF\u4EE5\u4F7F\u7528\uFF0C\u60A8\u53EF\u4EE5\u4F7F\u7528\u672C\u5DE5\u5177\u5BF9\u4E2D\u6587\u8FDB\u884CUrlEncode\u7F16\u7801\u3002",
    "category": "web",
    "tags": [
      "URL\u7F16\u7801\u89E3\u7801",
      "UrlEncode\u7F16\u7801",
      "UrlDecode\u89E3\u7801"
    ],
    "badge": "FREE",
    "icon": "link",
    "hot": true,
    "thumb": "https://img.gjk.cn/thumb/202009/20200920101751_E71Dh1.png",
    "views": 41458
  },
  {
    "slug": "utf8",
    "name": "UTF8\u6C49\u5B57\u4E92\u8F6C",
    "subtitle": "\u5E2E\u52A9\u4F60\u628A\u4E2D\u6587\u8F6C\u6362\u6210UTF-8\u7F16\u7801\uFF0C\u540C\u65F6\u4E5F\u652F\u6301\u628AUTF-8\u7F16\u7801\u8FC7\u7684\u8FD8\u539F\u6210\u4E2D\u6587\u3002",
    "category": "web",
    "tags": [
      "UTF-8\u7F16\u7801\u8F6C\u6362",
      "\u5728\u7EBFUTF-8\u7F16\u7801",
      "utf8\u5728\u7EBF\u7F16\u7801"
    ],
    "badge": "FREE",
    "icon": "text-aa",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202009/20200920112231_Tl742m.png",
    "views": 7670
  },
  {
    "slug": "unicode",
    "name": "Unicode\u7F16\u7801\u8F6C\u6362",
    "subtitle": "\u672C\u5DE5\u5177\u53EF\u4EE5ASCII\u4E0EUnicode\u4E92\u8F6C\uFF0CUnicode\u4E0E\u4E2D\u6587\u4E92\u8F6C\u3002",
    "category": "web",
    "tags": [
      "Unicode\u8F6CASCII",
      "ASCII\u8F6CUnicode",
      "\u4E2D\u6587\u8F6CUnicode",
      "Unicode\u8F6C\u4E2D\u6587"
    ],
    "badge": "FREE",
    "icon": "translate",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202009/20200921113209_jN1cK4.png",
    "views": 10797
  },
  {
    "slug": "php",
    "name": "PHP\u5DE5\u5177",
    "subtitle": "Php\u5728\u7EBF\u7F8E\u5316\u3001\u4F18\u5316\u3001\u52A0\u5BC6\u3001\u89E3\u5BC6\u3001\u538B\u7F29\u3001\u89E3\u538B\uFF0Cphp\u89E3\u5BC6\u3001\u5A01\u76FE\u89E3\u5BC6\u3001phpjm \u89E3\u5BC6",
    "category": "dev",
    "tags": [
      "PHP\u4EE3\u7801\u7F8E\u5316",
      "PHP\u4EE3\u7801\u683C\u5F0F\u5316",
      "PHP\u4EE3\u7801\u7F8E\u5316",
      "PHP\u4EE3\u7801\u683C\u5F0F\u5316\u7F8E\u5316"
    ],
    "badge": "FREE",
    "icon": "code",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202009/20200921022504_oGat68.png",
    "views": 11691
  },
  {
    "slug": "md5",
    "name": "MD5\u5728\u7EBF\u52A0\u5BC6",
    "subtitle": "md5\u52A0\u5BC6\uFF0C\u652F\u630132\u4F4D\u548C16\u4F4D\u7684\u52A0\u5BC6\uFF0C\u751F\u6210\u5927\u5C0F\u5199\u7ED3\u679C\u3002",
    "category": "dev",
    "tags": [
      "md5",
      "\u52A0\u5BC6"
    ],
    "badge": "FREE",
    "icon": "lock-key",
    "hot": true,
    "thumb": "https://img.gjk.cn/thumb/202009/20200923095903_Zv0R0P.png",
    "views": 12305
  },
  {
    "slug": "regex",
    "name": "\u6B63\u5219\u8868\u8FBE\u5F0F\u6D4B\u8BD5",
    "subtitle": "\u80FD\u6D4B\u8BD5\u6B63\u5219\u662F\u5426\u6B63\u786E\uFF0C\u4EE5\u53CA\u63D0\u4F9B\u4E00\u4E9B\u5E38\u7528\u7684\u6B63\u5219\u5339\u914D\u3002",
    "category": "dev",
    "tags": [
      "\u6B63\u5219",
      "regex"
    ],
    "badge": "FREE",
    "icon": "asterisk",
    "hot": true,
    "thumb": "https://img.gjk.cn/thumb/202009/20200924111525_pcB7VQ.png",
    "views": 8065
  },
  {
    "slug": "sql",
    "name": "SQL\u5DE5\u5177",
    "subtitle": "sql\u5728\u7EBF\u7F8E\u5316\uFF0C\u683C\u5F0F\u5316\uFF0C\u538B\u7F29\uFF0Csql\u62C6\u5206\u5355\u4E2A\u67E5\u8BE2\uFF0C\u8BED\u6CD5\u9AD8\u4EAE\u7B49\u3002",
    "category": "dev",
    "tags": [
      "sql\u7F8E\u5316",
      "sql\u62C6\u5206",
      "sql\u538B\u7F29"
    ],
    "badge": "FREE",
    "icon": "database",
    "hot": true,
    "thumb": "https://img.gjk.cn/thumb/202009/20200927110915_hvU8j7.png",
    "views": 17923
  },
  {
    "slug": "asciidoc",
    "name": "Asciidoc\u7F16\u8F91\u5668",
    "subtitle": "\u8FD9\u662F\u4E00\u6B3E\u6587\u6863\u7F16\u8F91\u8F6F\u4EF6\uFF0C\u80FD\u5728\u7EBF\u7F16\u8F91\u6587\u6863\uFF0C\u8BED\u6CD5\u65B9\u4FBF\u5FEB\u6377\u3002",
    "category": "dev",
    "tags": [
      "asciidoc",
      "\u6587\u6863"
    ],
    "badge": "FREE",
    "icon": "file-text",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202009/20200928110236_sr0RPD.png",
    "views": 391
  },
  {
    "slug": "xml",
    "name": "XML\u5DE5\u5177",
    "subtitle": "\u80FD\u5FEB\u901F\u538B\u7F29xml\u6587\u4EF6\uFF0C\u540C\u65F6\u4E5F\u53EF\u4EE5\u4E00\u952E\u628Axml\u8F6C\u6210json\u6587\u4EF6\u3002",
    "category": "dev",
    "tags": [
      "xml\u538B\u7F29",
      "xml\u7F8E\u5316",
      "xml\u8F6Cjson"
    ],
    "badge": "FREE",
    "icon": "file-code",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202009/20200927120359_szQoZB.png",
    "views": 8265
  },
  {
    "slug": "tides",
    "name": "\u6F6E\u6C50\u8868",
    "subtitle": "\u5728\u7EBF\u6F6E\u6C50\u67E5\u8BE2\uFF0C\u53EF\u67E5\u8BE2\u5168\u4E16\u754C\u591A\u65E5\u7684\u6E2F\u53E3\u6F6E\u6C50\u4FE1\u606F\u3002",
    "category": "query",
    "tags": [
      "\u6F6E\u6C50",
      "\u4FBF\u6C11"
    ],
    "badge": "FREE",
    "icon": "waves",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202010/20201007043015_I5f5PI.png",
    "views": 70964
  },
  {
    "slug": "favicon",
    "name": "Favicon\u5236\u4F5C",
    "subtitle": "\u80FD\u5FEB\u901F\u7684\u5236\u4F5C\u7F51\u7AD9\u7684favicon\uFF0C\u53EF\u81EA\u7531\u5236\u4F5C\uFF0C\u52A0\u8FB9\u6846\u7B49",
    "category": "web",
    "tags": [
      "favicon",
      "favicon\u5728\u7EBF\u5236\u4F5C",
      "icon\u5236\u4F5C",
      "\u7F51\u7AD9\u56FE\u6807"
    ],
    "badge": "FREE",
    "icon": "image-square",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202010/20201012104825_i56uV1.png",
    "views": 514
  },
  {
    "slug": "editor",
    "name": "HTML\u7F16\u8F91\u5668",
    "subtitle": "\u80FD\u5728\u7EBF\u7F16\u8F91html\u4EE3\u7801\uFF0C\u5E76\u5B9E\u65F6\u663E\u793A\u4EE3\u7801\u7684\u7F51\u9875\u7ED3\u679C\u3002",
    "category": "web",
    "tags": [
      "\u7F16\u8F91\u5668",
      "html",
      "Dreamweaver"
    ],
    "badge": "FREE",
    "icon": "code",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202010/20201014121241_akoju0.png",
    "views": 46577
  },
  {
    "slug": "markdown",
    "name": "Markdown\u7F16\u8F91\u5668",
    "subtitle": "\u80FD\u5728\u7EBF\u7F16\u8F91markdown\u6587\u672C\uFF0C\u53EF\u4EE5\u548Chtml\u4E92\u8F6C\uFF0C\u9AD8\u6548\u4FBF\u6377\u3002",
    "category": "web",
    "tags": [
      "markdown",
      "\u7F16\u8F91\u5668",
      "markdown\u7F16\u8F91\u5668"
    ],
    "badge": "FREE",
    "icon": "file-text",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202010/20201016015125_fjyzo0.png",
    "views": 8686
  },
  {
    "slug": "htmlchars",
    "name": "HTML\u7279\u6B8A\u5B57\u7B26\u8F6C\u4E49",
    "subtitle": "html\u7279\u6B8A\u652F\u4ED8\u5728\u7EBF\u8F6C\u4E49\uFF0C\u5E76\u4E14\u52A0\u4E0A\u4E86\u7279\u6B8A\u5B57\u7B26\u7684\u5BF9\u7167\u8868\u3002",
    "category": "web",
    "tags": [
      "html",
      "\u7279\u6B8A\u5B57\u7B26",
      "\u8F6C\u4E49"
    ],
    "badge": "FREE",
    "icon": "code-simple",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202010/20201020090402_a4HvWw.png",
    "views": 9417
  },
  {
    "slug": "coordinate",
    "name": "\u5730\u56FE\u5750\u6807\u7CFB\u8F6C\u6362",
    "subtitle": "\u80FD\u5FEB\u901F\u8F6C\u6362\u7ECF\u7EAC\u5EA6\u5750\u6807\uFF0C\u5728\u7EBF\u62FE\u53D6\u5750\u6807\uFF0C\u652F\u6301WGS84 GCJ02 BD09\u7B49\u5750\u6807\u3002",
    "category": "work",
    "tags": [
      "WGS84",
      "\u5750\u6807",
      "GCJ02",
      "BD09"
    ],
    "badge": "FREE",
    "icon": "map-pin",
    "hot": true,
    "thumb": "https://img.gjk.cn/thumb/202010/20201021115542_bpU6uv.png",
    "views": 66190
  },
  {
    "slug": "coderday",
    "name": "\u7A0B\u5E8F\u5458\u8001\u9EC4\u5386",
    "subtitle": "\u8001\u9EC4\u5386\u544A\u8BC9\u4F60\u4ECA\u5929\u9002\u5408\u5199\u5565\uFF0C\u4E0D\u9002\u5408\u5199\u5565\uFF0C\u600E\u4E48bug\u5C11\u3002",
    "category": "ent",
    "tags": [
      "\u9EC4\u5386",
      "\u7A0B\u5E8F\u5458"
    ],
    "badge": "FREE",
    "icon": "timer",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202010/20201021054907_JvqPqq.png",
    "views": 13167
  },
  {
    "slug": "maze",
    "name": "\u8FF7\u5BAB\u5C0F\u6E38\u620F",
    "subtitle": "\u8FF7\u5BAB\u6E38\u620F\uFF0C\u53EF\u4EE5\u63D0\u5347\u7A0B\u5E8F\u5458\u7684\u7A7A\u95F4\u5B9A\u4F4D\u65B9\u9762\u7684\u80FD\u529B\u3002",
    "category": "ent",
    "tags": [
      "\u5728\u7EBF\u6E38\u620F",
      "\u8FF7\u5BAB",
      "\u5728\u7EBF\u8FF7\u5BAB\u6E38\u620F",
      "\u8FF7\u5BAB\u5C0F\u6E38\u620F"
    ],
    "badge": "FREE",
    "icon": "path",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202010/20201022111125_c83H0H.png",
    "views": 13841
  },
  {
    "slug": "xiangqi",
    "name": "\u4E2D\u56FD\u8C61\u68CB\u6E38\u620F",
    "subtitle": "\u5728\u7EBF\u4E0B\u8C61\u68CB\uFF0C\u53EF\u4EE5\u9009\u62E9\u96BE\u5EA6\uFF0C\u7A0B\u5E8F\u5458\u6D88\u78E8\u653E\u677E\u7684\u597D\u6E38\u620F\u3002",
    "category": "ent",
    "tags": [
      "\u8C61\u68CB",
      "\u4E2D\u56FD\u8C61\u68CB",
      "\u5728\u7EBF\u6E38\u620F",
      "\u5728\u7EBF\u8C61\u68CB\u6E38\u620F"
    ],
    "badge": "FREE",
    "icon": "chess-knight",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202010/20201023105455_XE6b3t.png",
    "views": 39101
  },
  {
    "slug": "diff",
    "name": "\u6587\u672C\u6BD4\u5BF9\u5F52\u5E76",
    "subtitle": "\u80FD\u5FEB\u901F\u5BF9\u6BD4\u672C\u6587\u6216\u4EE3\u7801\uFF0C\u53EF\u4EE5\u81EA\u7531\u66FF\u6362\u4E0D\u76F8\u540C\u7684\u5185\u5BB9\u3002",
    "category": "dev",
    "tags": [
      "\u5728\u7EBF\u5BF9\u6BD4",
      "\u6BD4\u8F83",
      "\u5BF9\u6BD4\u5DE5\u5177",
      "\u6BD4\u8F83\u5DE5\u5177"
    ],
    "badge": "FREE",
    "icon": "git-diff",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202010/20201027114637_WPzMb9.png",
    "views": 11497
  },
  {
    "slug": "less",
    "name": "Less\u7F16\u8BD1\u5668",
    "subtitle": "\u5FEB\u901F\u7684\u5C06less\u4EE3\u7801\u8F6C\u6362\u6210css\u4EE3\u7801\uFF0C\u8FD8\u53EF\u4EE5\u5C06less\u8F6C\u6210wxss\u4EE3\u7801\u3002",
    "category": "dev",
    "tags": [
      "less\u7F16\u8BD1",
      "less",
      "css\u8F6C\u6362"
    ],
    "badge": "FREE",
    "icon": "paint-brush",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202011/20201109114200_O2CFCm.png",
    "views": 11272
  },
  {
    "slug": "soul",
    "name": "\u7801\u519C\u6BD2\u9E21\u6C64",
    "subtitle": "\u5DE5\u5177\u5E93\u7CBE\u5FC3\u71AC\u5236\u4E86\u6709\u5C4E\u4EE5\u6765\u6700\u6BD22000\u591A\u6761\u7ECF\u5178\u6BD2\u9E21\u6C64\uFF0C\u53E5\u53E5\u201C\u6CBB\u6108\u201D\u4EBA\u5FC3\u3002",
    "category": "ent",
    "tags": [
      "\u6BD2\u9E21\u6C64",
      "\u7A0B\u5E8F\u5458"
    ],
    "badge": "FREE",
    "icon": "heart-straight",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202011/20201109043758_pq3g2Q.png",
    "views": 1140
  },
  {
    "slug": "piano",
    "name": "\u5728\u7EBF\u94A2\u7434",
    "subtitle": "\u514D\u8D39\u5728\u7EBF\u5F39\u94A2\u7434\uFF0C\u8BA9\u60A8\u968F\u65F6\u5728\u7EBF\u4EAB\u53D7\u94A2\u7434\u7684\u7F8E\u597D\u4E50\u7AE0\u3002",
    "category": "ent",
    "tags": [
      "\u5728\u7EBF\u94A2\u7434",
      "\u514D\u8D39\u5F39\u94A2\u7434",
      "\u624B\u673A\u94A2\u7434"
    ],
    "badge": "FREE",
    "icon": "piano-keys",
    "hot": false,
    "thumb": "https://img.gjk.cn/thumb/202311/20231119102805_wfEfXQ.png",
    "views": 38399
  }
];

var about = {
	html: "<nav class=\"level is-mobile\">\r\n    <h1 class=\"is-size-5\">关于工具库</h1>\r\n</nav>\r\n<div class=\"main-content\">\r\n    <article class=\"content\">\r\n        <p>工具库创建于2020年8月份，为了提供优质的在线工具而创建。</p>\r\n        <p>目前已为多家公司提供技术解决方案。</p>\r\n        <h5>展示你的作品</h5>\r\n        <p>你热爱你现在从事的这份职业吗？你还在把你曾经写的精华代码置之不理吗？把你曾经Coding的工具贡献出来。</p>\r\n        <p>凡是经过确认采用工具，我会增加到工具库中，并且署名，加入出处！</p>\r\n        <p>请发邮件到下面的邮箱，并在邮件标题上注明（工具提交，使用的语言，解决的功能，目前还有那些BUG等等）。</p>\r\n        <h5>联系我</h5>\r\n        <p>QQ：54603131</p>\r\n        <p>email：collerhu@gmail.com</p>\r\n        <h2>更新记录：</h2>\r\n        <ul>\r\n            <li>2024年07月02日，增加\r\n                <a href=\"https://www.gjk.cn/\">工具库</a>，使用Go语言开发的 <a href=\"https://www.rehok.com/\">ReHok独立站</a> 系统\r\n                全新改版，性能更强劲稳定。\r\n            </li>\r\n            <li>2024年07月01日，增加\r\n                <a href=\"https://www.gjk.cn/waimao\">外贸工具</a>\r\n            </li>\r\n            <li>2024年06月02日，增加\r\n                <a href=\"https://www.gjk.cn/cloud\">主机测评</a>\r\n            </li>\r\n            <li>2023年11月19日，增加\r\n                <a href=\"https://www.gjk.cn/piano\">在线钢琴</a>\r\n            </li>\r\n            <li>2020年09月11日，增加\r\n                <a href=\"https://www.gjk.cn/quanbanjiao\">全角半角转换</a>\r\n                <a href=\"https://www.gjk.cn/reversetext\">文本反转排序</a>，完善文章系统。\r\n            </li>\r\n            <li>2020年09月10日，增加\r\n                <a href=\"https://www.gjk.cn/timestamp\">时间戳转换</a>。\r\n            </li>\r\n            <li>2020年09月09日，增加\r\n                <a href=\"https://www.gjk.cn/pinyin\">中文转拼音注音</a>\r\n                <a href=\"https://www.gjk.cn/quchong\">文本段落去重</a>\r\n                <a href=\"https://www.gjk.cn/ocr\">OCR图片识别文字</a>。\r\n            </li>\r\n            <li>2020年09月07日，增加\r\n                <a href=\"https://www.gjk.cn/jianfanti\">中文简繁体转换</a>。\r\n            </li>\r\n            <li>2020年09月06日，增加\r\n                <a href=\"https://www.gjk.cn/ip\">IP地址查询</a>\r\n                <a href=\"https://www.gjk.cn/texttohtml\">文本转html代码</a>\r\n                <a href=\"https://www.gjk.cn/randkey\">随机密码生成器</a>\r\n                <a href=\"https://www.gjk.cn/randstr\">随机生成字符串</a>。\r\n            </li>\r\n            <li>2020年09月05日，增加\r\n                <a href=\"https://www.gjk.cn/xuexing\">子女血型遗传</a>\r\n                <a href=\"https://www.gjk.cn/xingbie\">宝宝性别预测</a>\r\n                <a href=\"https://www.gjk.cn/katong\">卡通头像制作</a>，另外完善了首页的板块，我的增加了收藏等。\r\n            </li>\r\n            <li>2020年09月04日，增加\r\n                <a href=\"https://www.gjk.cn/crontab\">Crontab表达式生成</a>\r\n                <a href=\"https://www.gjk.cn/fanyingsudu\">反应速度测试</a>。\r\n            </li>\r\n            <li>2020年09月03日，增加\r\n                <a href=\"https://www.gjk.cn/cron\">Cron表达式生成</a>。\r\n            </li>\r\n            <li>2020年09月01日，增加\r\n                <a href=\"https://www.gjk.cn/renmingbi\">人民币大写转换</a>\r\n                <a href=\"https://www.gjk.cn/meijindaxie\">英文金额大写转换</a>。\r\n            </li>\r\n            <li>2020年08月29日，增加\r\n                <a href=\"https://www.gjk.cn/qrcode\">二维码生成</a>。\r\n            </li>\r\n            <li>2020年08月28日，初版上线。</li>\r\n            <li>2020年08月27日，初步完成系统架构。</li>\r\n            <li>2020年08月26日，增加\r\n                <a href=\"https://www.gjk.cn/daxiaoxie\">英文大小写转换</a>。\r\n            </li>\r\n            <li>2020年08月25日，新增微信扫描登录。</li>\r\n            <li>2020年08月23日，新增QQ登录。</li>\r\n            <li>2020年08月20日，完成网站整体UI界面。</li>\r\n            <li>2020年08月18日，新增登录和注册（邮箱和手机登录部分）。</li>\r\n            <li>2020年08月15日，网站UI界面重构。</li>\r\n            <li>2020年08月13日，增加\r\n                <a href=\"https://www.gjk.cn/json\">JSON工具</a>。\r\n            </li>\r\n            <li>2020年08月12日，增加\r\n                <a href=\"https://www.gjk.cn/relax\">减压放松网</a>。\r\n            </li>\r\n            <li>2020年08月11日，增加\r\n                <a href=\"https://www.gjk.cn/taiqiu\">台球游戏</a>。\r\n            </li>\r\n            <li>2020年08月10日，增加\r\n                <a href=\"https://www.gjk.cn/2048\">2048游戏</a>。\r\n            </li>\r\n            <li>2020年08月08日，增加\r\n                <a href=\"https://www.gjk.cn/chengyu\">成语大全</a>。\r\n            </li>\r\n            <li>2020年08月06日，增加\r\n                <a href=\"https://www.gjk.cn/html\">html工具</a>。\r\n            </li>\r\n            <li>2020年08月05日，增加\r\n                <a href=\"https://www.gjk.cn/css\">CSS工具</a>。\r\n            </li>\r\n            <li>2020年08月04日，增加\r\n                <a href=\"https://www.gjk.cn/js\">javascript工具</a>。\r\n            </li>\r\n            <li>2020年08月03日，增加\r\n                <a href=\"https://www.gjk.cn/paiban\">在线文字排版</a>。\r\n            </li>\r\n            <li>2020年08月02日，增加\r\n                <a href=\"https://www.gjk.cn/zishu\">在线字数统计</a>。\r\n            </li>\r\n            <li>2020年08月01日，1.0上线。</li>\r\n        </ul>\r\n    </article>\r\n</div>",
	js: "",
	template: "content.html"
};
var terms = {
	html: "By accessing the Service and Data at fastdatas.com you agree to be bound by these Terms of Service, all applicable laws\nand regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree\nwith these Terms of Service, you are prohibited from using or accessing fastdatas.com and from using any other services\nwe provide. We reserve the right to review and amend any of these Terms of Service at our sole discretion.\nFastDatas is not affiliated with or endorsed by Google in any way. FastDatas provides web-scraped data collected from\npublic domain sources. All trademarks and copyright are the property of their respective owners.\nService Provider\nThe provider of fastdatas.com services and the contract is concluded with:\nShenzhen Kuaiqin Technology Co., Ltd.\nEstablished and operated in accordance with the laws of China\nRoom 402, No. 123, Dakan No. 2 Village, Dahong Community, Xili Street, Nanshan District, Shenzhen City\nUsage License\nFastDatas is a business-to-business service and does not provide end-user (consumer) services. Permission is granted to\ndownload the materials (information or software) on the Scale SERP website and Service for as long as your use case\nrequires. This constitutes the grant of a license, not a transfer of title, and under this license, you may not:\nModify, copy, prepare derivative works of, decompile, or reverse engineer any materials and software contained on the\nfastdatas.com website\nRemove any copyright or other proprietary notations from the materials.\nRegister more than one API key at any point in time.\nMirror the materials on any other server as-is with no-value-added.\nAttempt to circumvent any restrictions or limits placed on your FastDatas API key or account.\nThis license shall automatically terminate if you violate any of these restrictions and may be terminated by FastDatas\nat any time, with or without cause, with or without notice, effective immediately. All provisions of this Agreement\nwhich by their nature should survive termination shall survive termination, including, without limitation, ownership\nprovisions, warranty disclaimers, waiver and release, indemnity and limitations of liability.\nData License\nAs part of the FastDatas Service, FastDatas collects and generates certain Data by aggregating information regarding\npublicly available web pages, utilizing FastDatas proprietary technology.\nData accessible through FastDatas may contain third-party content (such as text, images, and videos). This content will\nremain the sole responsibility of those who make it available. In some cases, public-domain content accessible to\nFastDatas may also be subject to intellectual property rights. If this is the case you may not use it unless you are\nlicensed to do so or are otherwise permitted by law.\nUnless applicable by law or expressly permitted by the owner, you will not, and will not permit your end users or others\nacting on your behalf to, do any of the following with the Data returned from the API:\nMisrepresent the ownership or the source.\nObscure, remove or change any copyright, trademark, or other proprietary notices.\nFalsify or delete any author attributions, legal notices, or other labels of the origin or source of material.\nAccuracy of Materials\nThe materials appearing on the FastDatas website and Service could include technical, typographical, or photographic\nerrors. FastDatas does not warrant that any of the materials on its website, or returned via the API, are accurate,\ncomplete or current. FastDatas may make changes to the materials contained on its website at any time without notice.\nHowever, FastDatas does not make any commitment to update the materials.\nRefund Policy\nFastDatas offers a full refund when\nA refund request is submitted within 7 calendar days from the date of the first payment for FastDatas API credits.\nLess than 20% of provided FastDatas API credits are used.\nCustomer Data\nAny personal information collected from users will be securely held and processed in accordance with local law and will\nnever be shared with or sold to third parties.\nYou agree to allow us to send you important notifications via email to the email address we have on record for you. You\ncan opt out of these at any time.\nDisclaimer\nThe materials on the FastDatas website and Service are provided on an 'as is' basis. FastDatas makes no warranties,\nexpressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied\nwarranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual\nproperty or other violation of rights. Further, FastDatas does not warrant or make any representations concerning the\naccuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such\nmaterials or on any sites linked to this site.\nIndemnification\nBoth parties agree to defend, indemnify, and hold harmless each other, their respective licensees, and licensors, and\ntheir employees, contractors, agents, officers, and directors, from and against any and all claims, damages,\nobligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting\nfrom or arising out of a) your use of the Service, by you or any person using your account and password, or b) a breach\nof these Terms by either party. Each party shall promptly notify the other in writing of any such claim or suit. The\nindemnifying party shall have the right to assume control of the defense of any such claim or litigation, and the\nindemnified party shall provide full cooperation and assistance in defending any such claim or litigation.\nLiability\nIn no event shall we or our suppliers be liable for any consequential loss suffered or incurred by you or any third\nparty arising from the use or inability to use FastDatas, even if we or an authorized representative has been notified,\norally or in writing, of the possibility of such damage. In the context of this agreement, we define “consequential\nloss” as including any consequential loss, indirect loss, real or anticipated loss of profit, loss of benefit, loss of\nrevenue, loss of business, loss of goodwill, loss of opportunity, loss of savings, loss of reputation, loss of use\nand/or loss or corruption of data, whether under statute, contract, equity, tort (including negligence), indemnity or\notherwise.\nBecause some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential\nor incidental damages, these limitations may not apply to you.\nSeverance\nAny term of these Terms of Service which is wholly or partially void or unenforceable is severed to the extent that it\nis void or unenforceable. The validity of the remainder of these Terms of Service is not affected.\nModifications\nFastDatas reserves the right, at its sole discretion, to modify these Terms at any time without notice and post it on\nits website. By continuing to access or use our Service after any revisions become effective, you agree to be bound by\nthe revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.\nGoverning Law\nThese terms shall be governed and construed in accordance with the laws of the China, without regard to its conflict of\nlaw provisions.",
	js: "",
	template: "content.html"
};
var privacy = {
	html: "Your privacy is important to us. It’s our policy to respect your privacy and comply with any applicable law and\nregulation regarding the personal information we collect about you through this website, fastdatas.com and through any\nassociated services and third-party platforms we may use.\nInformation we collect\nPersonal information is any information about you which can be used to identify you. Any information we collect may be\nautomatically collected (i.e. information automatically sent to us by your devices when you access our services) or\nvoluntarily provided (i.e. information you knowingly and actively provide us).\nAutomatically collected information\nOur servers automatically log standard data provided by your web browser when you visit our website. This data may\ninclude your device’s IP address, device type, operating system, browser type and version, the pages you visit, the time\nand date of your visit, time spent on each page, and other details about your visit or device.\nDevice data we collect can depend on the settings of your device and software. We recommend checking the policies of\nyour device manufacturer or software provider to learn what information they make available to us.\nAdditionally, if you encounter errors on this site, we automatically collect data about the error and the circumstances\nsurrounding its occurrence. This data may include technical details about your device, what you were trying to do when\nthe error happened, and other information relating to the problem. You may or may not receive notice of such errors.\nPlease be aware that while this information may not be personally identifying by itself, it is possible to combine it\nwith other data to personally identify individual persons.\nVoluntarily provided personal information\nWhen you use our product order form, we ask for personal information such as your name, email address, and payment\ninformation.\nWhen you contact us, or interact with us on social media, we may collect the personal information associated with your\nactivity, such as your name and profile.\nAPI Requests Logging and Monitoring\nAt Fastdatas.com, we are committed to ensuring the privacy and security of our users' data. As part of our Google Search\nAPI service, we may collect and log certain information about API requests and queries for the purpose of monitoring and\nmaintaining the performance, security, and functionality of our platform. The following section outlines how we handle\nsuch data, with a particular focus on the query parameter 'q' which may contain sensitive or confidential information.\nCollection and Purpose\nWhen users make API requests to fetch Google search results, our system may automatically collect and store certain\ninformation, including but not limited to:\nIP address\nTimestamp of the request\nUser agent (browser, device, or application information)\nAPI endpoint used\nQuery parameters, including the \"q\" parameter which contains the search query provided by the user\nThe primary purpose of collecting this data is to ensure the efficient operation of our service, identify and\ntroubleshoot technical issues, analyze usage patterns, and improve overall user experience. Additionally, this data is\nused to provide users with useful insights into their queries, allowing them to better understand their search patterns\nand trends. It also helps in debugging and resolving any issues related to their API requests, providing a more seamless\nand satisfying experience.\nHandling Sensitive Information\nWe acknowledge that the query parameter 'q' may contain sensitive or confidential information, and we understand the\nimportance of protecting such data. To safeguard user privacy, we offer the option for users to request the masking of\nthe actual query parameter 'q' in our logs.\nOpting Out and Data Anonymization\nUsers who wish to exercise the option to mask the 'q' parameter in our logs can do so by enabling the appropriate\nprivacy setting in their account preferences. By opting for this feature, the original search query information will be\nreplaced with a generic identifier or removed entirely from the logged data, ensuring that any sensitive or personally\nidentifiable information remains undisclosed.\nBy implementing these measures, we aim to maintain transparency and uphold our commitment to the privacy and security of\nour users' data while providing a reliable and efficient Google Search API service.\nHow we collect and use your personal information\nWe only collect and use your personal information when we have legitimate reasons (what are considered to be “lawful\nbases” by the EU General Data Protection Regulation) for doing so, such as generating your purchased product, responding\nto your email, and identifying your transaction so we can assist you with a support enquiry.\nIn which case, we will collect and use your personal information lawfully, fairly, and in a transparent manner. If we\nseek your consent to process your personal information, and you are under 16 years of age, we will seek your parent or\nlegal guardian’s consent to process your personal information for that specific purpose.\nOur reasons depend on the services you use and how you use them. This means we only collect and use your information on\nthe following grounds:\nConsent From You\nWhere you give us consent to collect and use your personal information for a specific purpose. You may withdraw your\nconsent at any time using the facilities we provide; however this will not affect any use of your information that has\nalready taken place. For example, you may consent to providing your email address for the purpose of receiving marketing\nemails from us. While you may unsubscribe at any time, we cannot recall any email we have already sent. If you have any\nfurther enquiries about how to withdraw your consent, please feel free to enquire using the details provided in the\nContact Us section of this privacy policy.\nPerformance of a Contract or Transaction\nWhere you have entered into a contract or transaction with us, or in order to take preparatory steps prior to our\nentering into a contract or transaction with you. For example, if you purchase a product or service from us, we would\nneed to use your personal and payment information in order to process and deliver your order to you.\nOur Legitimate Interests\nWhere we assess it is necessary for our legitimate interests, such as for us to provide, operate, improve and\ncommunicate our services. For example, we collect technical information about your device in order to improve and\npersonalize your experience of our app. We consider our legitimate interests to include research and development,\nunderstanding our audience, marketing and promoting our services, measures taken to operate our services efficiently,\nmarketing analysis, and measures taken to protect our legal rights and interests.\nCompliance with Law\nIn some cases, we may have a legal obligation to use or keep your personal information. Such cases may include (but are\nnot limited to) court orders, criminal investigations, government requests, and regulatory obligations. If you have any\nfurther enquiries about how we retain personal information in order to comply with the law, please feel free to enquire\nusing the details provided in the Contact Us section of this privacy policy.\nCollection of your personal information\nWe may collect personal information from you when you purchase any services through our site; sign in to your online\naccount; sign up to receive updates from us via email or social media channels; post a comment or review or otherwise\nparticipate in our online community; use a mobile device or web browser to access our content; contact us via email,\nsocial media, or on any similar technologies; or mention us on social media.\nProcessing your personal information\nWe may collect, hold, use, and disclose information to enable you to access and use our website, associated\napplications, and associated social media platforms; to provide you with our platform’s core features and services; to\nprocess and transactional or ongoing payments; to deliver products, services and/or affiliate earnings to you; to enable\nyou to customize or personalize your experience of our website; to attribute any reviews you submit that we publish on\nour website and social media channels; to contact and communicate with you; for internal record-keeping and\nadministrative purposes; for analytics, market research, business development, and technical assessment, including to\noperate our website, associated applications, and associated social media platforms; for advertising and marketing,\nincluding to send you promotional information about our products and services; to comply with our legal obligations and\nresolve any disputes that we may have; to consider your employment application; and for security and fraud preventions,\nand to ensure that our sites are safe, secure and used in line with our terms of use.\nPersonal information will not be further processed in a manner that is incompatible with the aforementioned purposes.\nWe may combine voluntarily provided and automatically collected personal information with general information or\nresearch data we receive from other trusted sources. For example, we may combine personal information voluntarily\nprovided in an email enquiry with anonymised analytics data to understand regional demands for our products.\nData Controller / Data Processor\nThe EU General Data Protection Regulation distinguishes between organizations that process personal information for\ntheir own purposes (known as “data controllers”) and organizations that process personal information on behalf of other\norganizations (known as “data processors”). Within the bounds of this definition, fastdatas.com is a data controller\nwith respect to the personal information you provide to us.\nDisclosure of personal information to third parties\nWe may disclose personal information to a parent, subsidiary, or affiliate of our company; third party service providers\nfor the purpose of enabling them to provide their services, including (without limitation) IT service providers, data\nstorage, hosting and server providers, ad networks, analytics, error loggers, debt collectors, maintenance or\nproblem-solving providers, marketing or advertising providers, professional advisors, and payment systems operators; our\nemployees, contractors, and/or related entities; our existing or potential agents or business partners; courts,\ntribunals, regulatory authorities, and law enforcement officers, as required by law, in connection with any actual or\nprospective legal proceedings, or in order to establish, exercise, or defend our legal rights; third parties, including\nagents or sub-contractors, who assist us in providing information, products, services, or direct marketing to you; third\nparties to collect and process data; an entity that buys, or to which we transfer all or substantially all of our assets\nand business.\nThird parties we currently use include Google Analytics, Google Adwords and Google Optimize for analytics, search engine\nmarketing, and A/B testing; Google Cloud Platform for our web hosting, data hosting, data storage, performance\nmonitoring and logging; Sentry for error monitoring; and Mailgun for sending emails.\nStoring and protecting your personal information\nWe keep your personal information only for as long as we need to. This time period may depend on what we are using your\ninformation for, in accordance with this privacy policy. If your personal information is no longer required for its\nintended purpose, we will delete it or make it anonymous by removing all details that identify you.\nHowever, if necessary, we may retain your personal information for our compliance with a legal, accounting, or reporting\nobligation or for archiving purposes in the public interest, scientific, or historical research purposes or statistical\npurposes.\nWhen we collect and process personal information, and while we retain this information, we will protect it within\ncommercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use, or\nmodification.\nAlthough we will do our best to protect the personal information you provide to us, we advise that no method of\nelectronic transmission or storage is 100% secure, and no one can guarantee absolute data security.\nChildren’s Privacy\nWe do not aim any of our products or services directly at children under the age of 13, and we do not knowingly collect\npersonal information about children under 13.\nInternational transfers of personal information\nThe personal information we collect is stored and/or processed in the United States, where we or our partners,\naffiliates, and third-party providers maintain facilities.\nThe countries to which we store, process, or transfer your personal information may not have the same data protection\nlaws as the country in which you initially provided the information. If we transfer your personal information to third\nparties in other countries: (i) we will perform those transfers in accordance with the requirements of applicable law;\nand (ii) we will protect the transferred personal information in accordance with this privacy policy.\nWe will ensure that any transfer of personal information from countries in the European Economic Area (EEA) to countries\noutside the EEA will be protected by appropriate safeguards, for example by using standard data protection clauses\napproved by the European Commission, or the use of binding corporate rules or other legally accepted means.\nYour rights and controlling your personal information\nYour choice: By providing personal information to us, you understand we will collect, hold, use, and disclose your\npersonal information in accordance with this privacy policy. You do not have to provide personal information to us,\nhowever, if you do not, it may affect your use of our website or the products and/or services offered on or through it.\nInformation from third parties: If we receive personal information about you from a third party, we will protect it as\nset out in this privacy policy. If you are a third party providing personal information about somebody else, you\nrepresent and warrant that you have such person’s consent to provide the personal information to us.\nMarketing permission: If you have previously agreed to us using your personal information for direct marketing purposes,\nyou may change your mind at any time by contacting us using the details below.\nAccess: You may request details of the personal information that we hold about you.\nCorrection: If you believe that any information we hold about you is inaccurate, out of date, incomplete, irrelevant, or\nmisleading, please contact us using the details provided in this privacy policy. We will take reasonable steps to\ncorrect any information found to be inaccurate, incomplete, misleading, or out of date.\nNon-discrimination: We will not discriminate against you for exercising any of your rights over your personal\ninformation. Unless your personal information is required to provide you with a particular service or offer, we will not\ndeny you goods or services and/or charge you different prices or rates for goods or services, including through granting\ndiscounts or other benefits, or imposing penalties, or provide you with a different level or quality of goods or\nservices.\nNotification of data breaches: We will comply with laws applicable to us in respect of any data breach.\nComplaints: If you believe that we have breached a relevant data protection law and wish to make a complaint, please\ncontact us using the details below and provide us with full details of the alleged breach. We will promptly investigate\nyour complaint and respond to you, in writing, setting out the outcome of our investigation and the steps we will take\nto deal with your complaint. You also have the right to contact a regulatory body or data protection authority in\nrelation to your complaint.\nUnsubscribe: To unsubscribe from our e-mail database or opt-out of communications (including marketing communications),\nplease contact us using the details provided in this privacy policy, or opt-out using the opt-out facilities provided in\nthe communication. We may need to request specific information from you to help us confirm your identity.\nRestrict: You have the right to request that we restrict the processing of your personal information if (i) you are\nconcerned about the accuracy of your personal information; (ii) you believe your personal information has been\nunlawfully processed; (iii) you need us to maintain the personal information solely for the purpose of a legal claim; or\n(iv) we are in the process of considering your objection in relation to processing on the basis of legitimate interests.\nObjecting to processing: You have the right to object to processing of your personal information that is based on our\nlegitimate interests or public interest. If this is done, we must provide compelling legitimate grounds for the\nprocessing which overrides your interests, rights, and freedoms, in order to proceed with the processing of your\npersonal information.\nData portability: You may have the right to request a copy of the personal information we hold about you. Where\npossible, we will provide this information in CSV format or other easily readable machine format. You may also have the\nright to request that we transfer this personal information to a third party.\nDeletion: You may have a right to request that we delete the personal information we hold about you at any time, and we\nwill take reasonable steps to delete your personal information from our current records. If you ask us to delete your\npersonal information, we will let you know how the deletion affects your use of our website or products and services.\nThere may be exceptions to this right for specific legal reasons which, if applicable, we will set out for you in\nresponse to your request. Please be aware that search engines and similar third parties may still retain copies of your\npersonal information that has been made public at least once, like reviews and attribution, even after you have\nrequested deletion of the information from our services.\nUse of cookies\nWe use “cookies” to collect information about you and your activity across our site. A cookie is a small piece of data\nthat our website stores on your computer, and accesses each time you visit, so we can understand how you use our site.\nThis helps us serve you content based on preferences you have specified.\nPlease refer to our Cookie Policy for more information.\nLimits of our policy\nOur website may link to external sites that are not operated by us. Please be aware that we have no control over the\ncontent and policies of those sites, and cannot accept responsibility or liability for their respective privacy\npractices.\nChanges to this policy\nAt our discretion, we may change our privacy policy to reflect updates to our business processes, current acceptable\npractices, or legislative or regulatory changes. If we decide to change this privacy policy, we will post the changes\nhere at the same link by which you are accessing this privacy policy.\nIf required by law, we will get your permission or give you the opportunity to opt in to or opt out of, as applicable,\nany new uses of your personal information.\nExternal links\nIn the event our site contains links to third party sites and services, please be aware that those sites and services\nhave their own privacy policies. After following a link to any third-party content, you should read their posted privacy\npolicy information about how they collect and use personal information. This Privacy Policy does not apply to any of\nyour activities after you leave our site.\nContact us\nFor any questions or concerns regarding your privacy, please contact our internal Data Protection Officer. The Data\nProtection Officer’s contact details are as follows:",
	js: "",
	template: "content.html"
};
var feedback = {
	html: "<nav class=\"level is-mobile\">\n    <h1 class=\"is-size-5\">意见反馈</h1>\n</nav>\n<div class=\"main-content\">\n    <article class=\"content\">\n        <p>亲，欢迎您使用工具库，如果您在使用本站时发现问题或者有更好的建议，欢迎您通过以下表单提交反馈。</p>\n        <p>另外如果你在网站开发过程遇到问题，也可以联系站长，我会尽能力帮助大家。</p>\n        <p>工作日站长一般会在当天回复，谢谢支持哦。</p>\n    </article>\n</div>",
	js: "",
	template: "content_comment.html"
};
var cloud = {
	html: "<div class=\"px-6 py-8\">\n            <div class=\"flex items-center gap-2 mb-6 overflow-x-auto hide-scrollbar pb-2\">\n                <span class=\"px-3 py-1 bg-sky-500 text-white shadow-sm rounded-full text-xs font-bold whitespace-nowrap\">🔥 推荐主机</span>\n            </div>\n\n            <div class=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3\">\n                <div class=\"group bg-white/95 border border-slate-100 hover:border-sky-200 rounded-xl p-3.5 shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center gap-3\">\n                    <div class=\"w-11 h-11 rounded-lg bg-sky-50 flex items-center justify-center shrink-0 group-hover:scale-105 transition\">\n                    <img src=\"https://api.dicebear.com/7.x/shapes/svg?seed=ChatGPT\" class=\"w-7 h-7 opacity-90\" alt=\"logo\">\n                    </div>\n                    <div class=\"flex-1 min-w-0\">\n                    <div class=\"flex items-center justify-between\">\n                        <h3 class=\"font-semibold text-sm text-slate-900 truncate group-hover:text-sky-600 transition\">ChatGPT</h3>\n                        <span class=\"text-[10px] px-1.5 py-0.5 bg-sky-50 text-sky-500 rounded-full font-bold\">AI</span>\n                    </div>\n                    <p class=\"text-[11px] text-slate-400 truncate mt-0.5\">OpenAI 旗下语言模型</p>\n                    </div>\n                </div>\n\n                \n                <div class=\"group bg-white/95 border border-slate-100 hover:border-sky-200 rounded-xl p-3.5 shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center gap-3\">\n                    <div class=\"w-11 h-11 rounded-lg bg-purple-50 flex items-center justify-center shrink-0 group-hover:scale-105 transition\">\n                    <img src=\"https://api.dicebear.com/7.x/shapes/svg?seed=Midjourney\" class=\"w-7 h-7 opacity-90\" alt=\"logo\">\n                    </div>\n                    <div class=\"flex-1 min-w-0\">\n                    <div class=\"flex items-center justify-between\">\n                        <h3 class=\"font-semibold text-sm text-slate-900 truncate group-hover:text-purple-600 transition\">Midjourney</h3>\n                        <span class=\"text-[10px] px-1.5 py-0.5 bg-purple-50 text-purple-500 rounded-full font-bold\">绘图</span>\n                    </div>\n                    <p class=\"text-[11px] text-slate-400 truncate mt-0.5\">AI 艺术绘画工具</p>\n                    </div>\n                </div>\n\n                <div class=\"group bg-white/95 border border-slate-100 hover:border-sky-200 rounded-xl p-3.5 shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center gap-3\">\n                    <div class=\"w-11 h-11 rounded-lg bg-orange-50 flex items-center justify-center shrink-0 group-hover:scale-105 transition text-orange-500 font-bold text-base\">C</div>\n                    <div class=\"flex-1 min-w-0\">\n                    <div class=\"flex items-center justify-between\">\n                        <h3 class=\"font-semibold text-sm text-slate-900 truncate group-hover:text-orange-600 transition\">Claude 3.5</h3>\n                        <span class=\"text-[10px] px-1.5 py-0.5 bg-orange-50 text-orange-500 rounded-full font-bold\">对话</span>\n                    </div>\n                    <p class=\"text-[11px] text-slate-400 truncate mt-0.5\">人性化对话助手</p>\n                    </div>\n                </div>",
	js: "",
	template: "cloud.html"
};
var waimao = {
	html: "",
	js: "",
	template: "waimao.html"
};
var piano = {
	html: "<script src=\"//www.gjk.cn/static/js/main.js?ver=1.0.77\"></script>\n<link href=\"/static/lib/piano/css/app.7f9bde966e91b8338cfd67e96aba4478.css?var=ssss\" rel=\"stylesheet\">\n<div id=\"app\"></div>\n<script type=\"text/javascript\" src=\"/static/lib/piano/js/manifest.adaa3ec5b9416723e860.js?version=1.11\"></script>\n<script type=\"text/javascript\" src=\"/static/lib/piano/js/vendor.d4fcbf2cbfa47283e6af.js\"></script>\n<script type=\"text/javascript\" src=\"/static/lib/piano/js/app.7ecf64d97cef4176e4da.js\"></script>",
	js: "",
	template: "pure.html"
};
const raw = {
	about: about,
	terms: terms,
	privacy: privacy,
	feedback: feedback,
	cloud: cloud,
	waimao: waimao,
	piano: piano
};

const RAW = raw;
const META = {
  about: {
    name: "\u5173\u4E8E\u6211\u4EEC",
    title: "\u5173\u4E8E\u5DE5\u5177\u5E93.CN_\u5728\u7EBF\u5DE5\u5177\u5E73\u53F0\u4ECB\u7ECD",
    subtitle: "\u6211\u4EEC\u4E3A\u4EC0\u4E48\u505A\u5DE5\u5177\u5E93",
    description: "\u5DE5\u5177\u5E93.CN \u662F\u4E00\u4E2A\u9762\u5411\u5F00\u53D1\u8005\u4E0E\u5185\u5BB9\u521B\u4F5C\u8005\u7684\u5728\u7EBF\u5DE5\u5177\u4E0E\u5185\u5BB9\u5E73\u53F0\uFF0C\u575A\u6301\u4EBA\u5DE5\u4EB2\u6D4B\u3001\u6253\u5F00\u5373\u7528\u3001\u6CA1\u6709\u5E72\u6270\u3002",
    keywords: "\u5173\u4E8E\u5DE5\u5177\u5E93,\u5DE5\u5177\u5E93\u4ECB\u7ECD,\u5728\u7EBF\u5DE5\u5177\u5E73\u53F0"
  },
  terms: {
    name: "\u670D\u52A1\u6761\u6B3E",
    title: "\u670D\u52A1\u6761\u6B3E_\u4F7F\u7528\u534F\u8BAE",
    subtitle: "\u4F7F\u7528\u672C\u7AD9\u524D\u8BF7\u9605\u8BFB",
    description: "\u5DE5\u5177\u5E93.CN \u670D\u52A1\u6761\u6B3E\uFF0C\u8BF4\u660E\u672C\u7AD9\u670D\u52A1\u8303\u56F4\u3001\u7528\u6237\u4E49\u52A1\u4E0E\u514D\u8D23\u58F0\u660E\u3002",
    keywords: "\u670D\u52A1\u6761\u6B3E,\u4F7F\u7528\u534F\u8BAE,\u514D\u8D23\u58F0\u660E"
  },
  privacy: {
    name: "\u9690\u79C1\u653F\u7B56",
    title: "\u9690\u79C1\u653F\u7B56_\u4FE1\u606F\u6536\u96C6\u4E0E\u4F7F\u7528\u8BF4\u660E",
    subtitle: "\u6211\u4EEC\u5982\u4F55\u4FDD\u62A4\u4F60\u7684\u4FE1\u606F",
    description: "\u5DE5\u5177\u5E93.CN \u9690\u79C1\u653F\u7B56\uFF0C\u8BF4\u660E\u672C\u7AD9\u6536\u96C6\u7684\u4FE1\u606F\u7C7B\u578B\u3001\u7528\u9014\u4E0E\u4FDD\u62A4\u63AA\u65BD\u3002",
    keywords: "\u9690\u79C1\u653F\u7B56,\u9690\u79C1\u4FDD\u62A4,\u4FE1\u606F\u6536\u96C6"
  },
  feedback: {
    name: "\u610F\u89C1\u53CD\u9988",
    title: "\u610F\u89C1\u53CD\u9988_\u95EE\u9898\u4E0E\u5EFA\u8BAE\u63D0\u4EA4",
    subtitle: "\u53D1\u73B0\u95EE\u9898\u6216\u6709\u5EFA\u8BAE\uFF1F\u544A\u8BC9\u6211\u4EEC",
    description: "\u63D0\u4EA4\u5DE5\u5177\u95EE\u9898\u3001\u529F\u80FD\u5EFA\u8BAE\u6216\u5408\u4F5C\u54A8\u8BE2\uFF0C\u6211\u4EEC\u4F1A\u5C3D\u5FEB\u56DE\u590D\u3002",
    keywords: "\u610F\u89C1\u53CD\u9988,\u95EE\u9898\u53CD\u9988,\u529F\u80FD\u5EFA\u8BAE"
  },
  cloud: {
    name: "\u4E3B\u673A\u4FA6\u63A2",
    title: "\u4E3B\u673A\u4FA6\u63A2_\u4E91\u670D\u52A1\u5668\u4E0E\u4E3B\u673A\u8BC4\u6D4B",
    subtitle: "\u4E91\u4E3B\u673A\u4E0E AI \u670D\u52A1\u901F\u67E5",
    description: "\u6C47\u603B\u5E38\u7528\u4E91\u670D\u52A1\u5668\u3001AI \u670D\u52A1\u4E0E\u5F00\u53D1\u5DE5\u5177\u7684\u5165\u53E3\u4E0E\u7B80\u4ECB\uFF0C\u65B9\u4FBF\u5FEB\u901F\u9009\u578B\u3002",
    keywords: "\u4E91\u4E3B\u673A,\u670D\u52A1\u5668\u8BC4\u6D4B,AI\u670D\u52A1"
  },
  waimao: {
    name: "\u5916\u8D38\u5DE5\u5177",
    title: "\u5916\u8D38\u5DE5\u5177_\u8DE8\u5883\u4E1A\u52A1\u5E38\u7528\u5DE5\u5177",
    subtitle: "\u8DE8\u5883\u4E1A\u52A1\u5E38\u7528\u5DE5\u5177\u96C6\u5408",
    description: "\u9762\u5411\u5916\u8D38\u4E0E\u8DE8\u5883\u4E1A\u52A1\u7684\u5E38\u7528\u5DE5\u5177\u4E0E\u67E5\u8BE2\u5165\u53E3\u3002",
    keywords: "\u5916\u8D38\u5DE5\u5177,\u8DE8\u5883\u5DE5\u5177,\u5916\u8D38\u67E5\u8BE2"
  }
};
const AIX_CONTENT_PAGES = Object.entries(META).map(([slug, meta]) => {
  var _a;
  return {
    slug,
    name: meta.name,
    title: meta.title,
    subtitle: meta.subtitle,
    description: meta.description,
    keywords: meta.keywords,
    html: ((_a = RAW[slug]) == null ? void 0 : _a.html) || ""
  };
});

const getSitemapEntries = (source) => {
  if (source !== "aix-tools") return [];
  const entries = [];
  for (const category of GJK_TOOL_CATEGORIES) {
    entries.push({ path: `/category/${category.slug}`, title: category.name, description: category.description, section: "category" });
  }
  for (const tool of GJK_TOOLS) {
    entries.push({ path: `/${tool.slug}`, title: tool.name, description: tool.subtitle, section: "tool" });
  }
  for (const page of AIX_CONTENT_PAGES) {
    if (page.slug === "about" || page.slug === "contact") continue;
    entries.push({ path: `/${page.slug}`, title: page.title, description: page.description, section: "page" });
  }
  return entries;
};

export { getSitemapEntries };
//# sourceMappingURL=seo.mjs.map
