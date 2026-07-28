const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
    }
};
function getCustomApis() {
    // =========内置你的苹果CMS接口数组=========
    const builtInSources = [
    {
        "name": "360资源站",
        "api": "https://360zy.com/api.php/provide/vod/",
        "apiType": "json",
        "uptime": "100%",
        "speed": "fast",
        "totalResources": 67581,
        "categories": [

        ]
    },
    {
        "name": "鸭鸭资源站",
        "api": "https://cj.yayazy.net/api.php/provide/vod/",
        "apiType": "json",
        "uptime": "100%",
        "speed": "fast",
        "totalResources": 119261,
        "categories": [

        ]
    },
    {
        "name": "光速资源站",
        "api": "https://api.guangsuapi.com/api.php/provide/vod/",
        "apiType": "json",
        "uptime": "100%",
        "speed": "fast",
        "totalResources": 109627,
        "categories": [

        ]
    },
    {
        "name": "天涯影视资源站",
        "api": "https://tyyszyapi.com/api.php/provide/vod/",
        "apiType": "json",
        "uptime": "100%",
        "speed": "medium",
        "totalResources": 68391,
        "categories": [

        ]
    },
    {
        "name": "豪华资源站",
        "api": "https://haohuazy.com/api.php/provide/vod/",
        "apiType": "json",
        "uptime": "100%",
        "speed": "fast",
        "totalResources": 108304,
        "categories": [

        ]
    },
    {
        "name": "新极品资源站",
        "api": "https://jipinvip1.com/api.php/provide/vod/",
        "apiType": "json",
        "uptime": "100%",
        "speed": "fast",
        "totalResources": 51560,
        "categories": [

        ]
    },
    {
        "name": "无尽资源站",
        "api": "https://api.wujinapi.me/api.php/provide/vod/",
        "apiType": "json",
        "uptime": "100%",
        "speed": "fast",
        "totalResources": 116790,
        "categories": [

        ]
    },
    {
        "name": "暴风资源站",
        "api": "https://bfzyapi.com/api.php/provide/vod/",
        "apiType": "json",
        "uptime": "100%",
        "speed": "fast",
        "totalResources": 151705,
        "categories": [

        ]
    },
    {
        "name": "最大资源站",
        "api": "http://zuidazy.me/api.php/provide/vod/",
        "apiType": "json",
        "uptime": "100%",
        "speed": "medium",
        "totalResources": 121256,
        "categories": [

        ]
    },
    {
        "name": "极速资源站",
        "api": "https://jszyapi.com/api.php/provide/vod/",
        "apiType": "json",
        "uptime": "100%",
        "speed": "fast",
        "totalResources": 107551,
        "categories": [

        ]
    },
    {
        "name": "爱奇艺资源站",
        "api": "https://iqiyizyapi.com/api.php/provide/vod",
        "apiType": "json",
        "uptime": "99.997%",
        "speed": "medium",
        "totalResources": 64901,
        "categories": [

        ]
    },
    {
        "name": "牛牛资源",
        "api": "https://api.niuniuzy.me/api.php/provide/vod/",
        "apiType": "json",
        "uptime": "100%",
        "speed": "fast",
        "totalResources": 121221,
        "categories": [

        ]
    },
    {
        "name": "猫眼资源",
        "api": "https://api.maoyanapi.top/api.php/provide/vod",
        "apiType": "json",
        "uptime": "99.994%",
        "speed": "medium",
        "totalResources": 33610,
        "categories": [

        ]
    },
    {
        "name": "索尼采集站",
        "api": "https://suonizy.net/api.php/provide/vod/",
        "apiType": "json",
        "uptime": "100%",
        "speed": "medium",
        "totalResources": 141354,
        "categories": [

        ]
    },
    {
        "name": "红牛资源站",
        "api": "http://hongniuzy2.com/api.php/provide/vod/",
        "apiType": "json",
        "uptime": "100%",
        "speed": "medium",
        "totalResources": 108965,
        "categories": [

        ]
    },
    {
        "name": "茅台资源站",
        "api": "https://mtzy5.com/api.php/provide/vod/",
        "apiType": "json",
        "uptime": "99.984%",
        "speed": "medium",
        "totalResources": 137724,
        "categories": [

        ]
    },
    {
        "name": "虎牙资源站",
        "api": "https://huyazy.net/api.php/provide/vod/",
        "apiType": "json",
        "uptime": "99.999%",
        "speed": "medium",
        "totalResources": 108221,
        "categories": [

        ]
    },
    {
        "name": "豆瓣资源站",
        "api": "https://dbzy.tv/api.php/provide/vod/",
        "apiType": "json",
        "uptime": "100%",
        "speed": "medium",
        "totalResources": 135509,
        "categories": [

        ]
    },
    {
        "name": "速播资源站",
        "api": "https://subocj.com/api.php/provide/vod/",
        "apiType": "json",
        "uptime": "100%",
        "speed": "medium",
        "totalResources": 109375,
        "categories": [

        ]
    },
    {
        "name": "速播资源站",
        "api": "https://www.suboziyuan.net/api.php/provide/vod/",
        "apiType": "json",
        "uptime": "100%",
        "speed": "medium",
        "totalResources": 109375,
        "categories": [

        ]
    },
    {
        "name": "金鹰资源站",
        "api": "https://jyzyapi.com/provide/vod/",
        "apiType": "json",
        "uptime": "99.999%",
        "speed": "medium",
        "totalResources": 109303,
        "categories": [

        ]
    },
    {
        "name": "155资源站",
        "api": "https://155api.com/api.php/provide/vod",
        "apiType": "json",
        "uptime": "100%",
        "speed": "fast",
        "totalResources": 180282,
        "categories": [

        ]
    },
    {
        "name": "非凡资源站",
        "api": "https://ffzy5.tv/api.php/provide/vod/",
        "apiType": "json",
        "uptime": "100%",
        "speed": "medium",
        "totalResources": 97558,
        "categories": [

        ]
    },
    {
        "name": "飘零影院资源站",
        "api": "https://p2100.net/api.php/provide/vod/",
        "apiType": "json",
        "uptime": "99.994%",
        "speed": "medium",
        "totalResources": 95542,
        "categories": [

        ]
    },
    {
        "name": "JKUN资源站",
        "api": "https://jkunzyapi.com/api.php/provide/vod",
        "apiType": "json",
        "uptime": "100%",
        "speed": "fast",
        "totalResources": 128010,
        "categories": [

        ]
    },
    {
        "name": "魔都资源站",
        "api": "https://www.mdzyapi.com/api.php/provide/vod/",
        "apiType": "json",
        "uptime": "100%",
        "speed": "medium",
        "totalResources": 86030,
        "categories": [

        ]
    },
    {
        "name": "乐播资源站",
        "api": "https://lbapi9.com/api.php/provide/vod/",
        "apiType": "json",
        "uptime": "100%",
        "speed": "medium",
        "totalResources": 322495,
        "categories": [

        ]
    },
    {
        "name": "大地资源站",
        "api": "https://dadiapi.com/api.php",
        "apiType": "json",
        "uptime": "100%",
        "speed": "medium",
        "totalResources": 50000,
        "categories": [

        ]
    },
    {
        "name": "爱坤资源站",
        "api": "https://ikunzyapi.com/api.php/provide/vod/",
        "apiType": "json",
        "uptime": "100%",
        "speed": "medium",
        "totalResources": 66378,
        "categories": [

        ]
    },
    {
        "name": "大X子资源站",
        "api": "https://apidanaizi.com/api.php/provide/vod/",
        "apiType": "json",
        "uptime": "100%",
        "speed": "medium",
        "totalResources": 121370,
        "categories": [

        ]
    },
    {
        "name": "奥斯卡资源站",
        "api": "https://aosikazy.com/api.php/provide/vod/",
        "apiType": "json",
        "uptime": "99.99%",
        "speed": "slow",
        "totalResources": 210022,
        "categories": [

        ]
    },
    {
        "name": "奶香香资源站",
        "api": "https://naixxzy.com/api.php/provide/vod/",
        "apiType": "json",
        "uptime": "99.992%",
        "speed": "slow",
        "totalResources": 173338,
        "categories": [

        ]
    },
    {
        "name": "小鸡资源站",
        "api": "https://api.xiaojizy.live/provide/vod/",
        "apiType": "json",
        "uptime": "100%",
        "speed": "fast",
        "totalResources": 79410,
        "categories": [

        ]
    },
    {
        "name": "桃花资源站",
        "api": "https://thzy1.me/api.php/provide/vod/",
        "apiType": "json",
        "uptime": "99.997%",
        "speed": "slow",
        "totalResources": 134890,
        "categories": [

        ]
    },
    {
        "name": "森林资源站",
        "api": "https://slapibf.com/api.php/provide/vod/",
        "apiType": "json",
        "uptime": "99.998%",
        "speed": "slow",
        "totalResources": 247607,
        "categories": [

        ]
    },
    {
        "name": "樱花资源站",
        "api": "https://m3u8.apiyhzy.com/api.php/provide/vod",
        "apiType": "json",
        "uptime": "100%",
        "speed": "medium",
        "totalResources": 101039,
        "categories": [

        ]
    },
    {
        "name": "湿乐园资源站",
        "api": "https://xxavs.com/api.php/provide/vod/",
        "apiType": "json",
        "uptime": "100%",
        "speed": "slow",
        "totalResources": 219269,
        "categories": [

        ]
    },
    {
        "name": "滴滴资源站",
        "api": "https://api.ddapi.cc/api.php/provide/vod/",
        "apiType": "json",
        "uptime": "99.997%",
        "speed": "fast",
        "totalResources": 42975,
        "categories": [

        ]
    },
    {
        "name": "玉兔资源站",
        "api": "https://apiyutu.com/api.php/provide/vod/",
        "apiType": "json",
        "uptime": "100%",
        "speed": "fast",
        "totalResources": 205106,
        "categories": [

        ]
    },
    {
        "name": "番号资源站",
        "api": "http://fhapi9.com/api.php/provide/vod/",
        "apiType": "json",
        "uptime": "100%",
        "speed": "slow",
        "totalResources": 224833,
        "categories": [

        ]
    },
    {
        "name": "番茄资源站",
        "api": "https://fqzy.me/api.php/provide/vod/",
        "apiType": "json",
        "uptime": "99.994%",
        "speed": "slow",
        "totalResources": 107481,
        "categories": [

        ]
    },
    {
        "name": "百花资源站",
        "api": "https://bhziyuan.com/api.php/provide/vod",
        "apiType": "json",
        "uptime": "100%",
        "speed": "slow",
        "totalResources": 11523,
        "categories": [

        ]
    },
    {
        "name": "精品X资源站",
        "api": "https://www.jingpinx.com/api.php/provide/vod",
        "apiType": "json",
        "uptime": "99.991%",
        "speed": "medium",
        "totalResources": 49298,
        "categories": [

        ]
    },
    {
        "name": "细胞网资源站",
        "api": "https://www.xxibaozyw.com/api.php/provide/vod",
        "apiType": "json",
        "uptime": "100%",
        "speed": "medium",
        "totalResources": 12155,
        "categories": [

        ]
    },
    {
        "name": "老色X资源站",
        "api": "https://apilsbzy1.com/api.php/provide/vod/",
        "apiType": "json",
        "uptime": "100%",
        "speed": "medium",
        "totalResources": 205106,
        "categories": [

        ]
    },
    {
        "name": "色猫资源站",
        "api": "https://caiji.semaozy.net/inc/api.php",
        "apiType": "json",
        "uptime": "100%",
        "speed": "medium",
        "totalResources": 50000,
        "categories": [

        ]
    },
    {
        "name": "越南资源站",
        "api": "https://api.vnzyz.com/api.php/provide/vod/",
        "apiType": "json",
        "uptime": "100%",
        "speed": "medium",
        "totalResources": 13101,
        "categories": [

        ]
    },
    {
        "name": "辣椒资源站",
        "api": "https://apilj.com/api.php/provide/vod/",
        "apiType": "json",
        "uptime": "100%",
        "speed": "medium",
        "totalResources": 220149,
        "categories": [

        ]
    },
    {
        "name": "香蕉资源站",
        "api": "https://www.xiangjiaozyw.com/api.php/provide/vod/",
        "apiType": "json",
        "uptime": "100%",
        "speed": "slow",
        "totalResources": 12144,
        "categories": [

        ]
    },
    {
        "name": "鲨鱼资源站",
        "api": "https://shayuapi.com/api.php/provide/vod/",
        "apiType": "json",
        "uptime": "99.995%",
        "speed": "slow",
        "totalResources": 274142,
        "categories": [

        ]
    },
    {
        "name": "麻豆资源站",
        "api": "https://91md.me/api.php/provide/vod/",
        "apiType": "json",
        "uptime": "100%",
        "speed": "fast",
        "totalResources": 36574,
        "categories": [

        ]
    },
    {
        "name": "X色仓库资源",
        "api": "https://hsckzy888.com/api.php/provide/vod",
        "apiType": "json",
        "uptime": "100%",
        "speed": "fast",
        "totalResources": 62701,
        "categories": [

        ]
    },
    {
        "name": "黑料资源站",
        "api": "https://heiliaozyapi.com/api.php/provide/vod",
        "apiType": "json",
        "uptime": "100%",
        "speed": "slow",
        "totalResources": 97246,
        "categories": [

        ]
    },
    {
        "name": "ok资源站",
        "api": "https://api.okzy.com/api.php/provide/vod",
        "apiType": "json",
        "uptime": "100%",
        "speed": "medium",
        "totalResources": 0,
        "categories": [

        ]
    },
    {
        "name": "u酷资源站",
        "api": "https://api.ukuzy.com/api.php/provide/vod",
        "apiType": "json",
        "uptime": "99.99%",
        "speed": "medium",
        "totalResources": 0,
        "categories": [

        ]
    },
    {
        "name": "优质资源站",
        "api": "https://api.yzzy.com/api.php/provide/vod",
        "apiType": "json",
        "uptime": "100%",
        "speed": "medium",
        "totalResources": 0,
        "categories": [

        ]
    },
    {
        "name": "如意资源站",
        "api": "https://api.ryzy.com/api.php/provide/vod",
        "apiType": "json",
        "uptime": "100%",
        "speed": "medium",
        "totalResources": 0,
        "categories": [

        ]
    },
    {
        "name": "快车资源站",
        "api": "https://api.kczy.com/api.php/provide/vod",
        "apiType": "json",
        "uptime": "100%",
        "speed": "medium",
        "totalResources": 0,
        "categories": [

        ]
    },
    {
        "name": "新浪资源站",
        "api": "https://api.xlzy.com/api.php/provide/vod",
        "apiType": "json",
        "uptime": "100%",
        "speed": "medium",
        "totalResources": 0,
        "categories": [

        ]
    },
    {
        "name": "红牛资源站",
        "api": "https://api.hnzy2.com/api.php/provide/vod",
        "apiType": "json",
        "uptime": "100%",
        "speed": "medium",
        "totalResources": 0,
        "categories": [

        ]
    },
    {
        "name": "闪电资源",
        "api": "https://api.sdzy.com/api.php/provide/vod",
        "apiType": "json",
        "uptime": "100%",
        "speed": "medium",
        "totalResources": 0,
        "categories": [

        ]
    },
    {
        "name": "雅集资源站",
        "api": "https://api.yjzy.com/api.php/provide/vod",
        "apiType": "json",
        "uptime": "99.998%",
        "speed": "medium",
        "totalResources": 0,
        "categories": [

        ]
    },
    {
        "name": "ck资源站",
        "api": "https://api.ckzy.com/api.php/provide/vod",
        "apiType": "json",
        "uptime": "100%",
        "speed": "medium",
        "totalResources": 0,
        "categories": [

        ]
    },
    {
        "name": "百度云资源站",
        "api": "https://api.apibdzy.com/api.php/provide/vod",
        "apiType": "json",
        "uptime": "100%",
        "speed": "medium",
        "totalResources": 47740,
        "categories": [

        ]
    },
    {
        "name": "艾旦资源站",
        "api": "https://lovedan.net/api.php/provide/vod",
        "apiType": "json",
        "uptime": "99.999%",
        "speed": "medium",
        "totalResources": 175917,
        "categories": [

        ]
    },
    {
        "name": "搜A-V资源站",
        "api": "https://api.souavzyw.net/api.php/provide/vod",
        "apiType": "json",
        "uptime": "100%",
        "speed": "medium",
        "totalResources": 123505,
        "categories": [

        ]
    },
    {
        "name": "白嫖资源站",
        "api": "https://www.kxgav.com/api/json.php",
        "apiType": "json",
        "uptime": "100%",
        "speed": "medium",
        "totalResources": 23153,
        "categories": [

        ]
    },
    {
        "name": "美少女资源站",
        "api": "https://www.msnii.com/api/json.php",
        "apiType": "json",
        "uptime": "100%",
        "speed": "medium",
        "totalResources": 24446,
        "categories": [

        ]
    },
    {
        "name": "豆豆资源站",
        "api": "https://api.douapi.cc/api.php/provide/vod",
        "apiType": "json",
        "uptime": "100%",
        "speed": "medium",
        "totalResources": 53727,
        "categories": [

        ]
    },
    {
        "name": "X色A-V资源站",
        "api": "https://www.pgxdy.com/api/json.php",
        "apiType": "json",
        "uptime": "100%",
        "speed": "medium",
        "totalResources": 23319,
        "categories": [

        ]
    },
    {
        "name": "清水源资源站",
        "api": "https://www.xrbsp.com/api/json.php",
        "apiType": "json",
        "uptime": "100%",
        "speed": "medium",
        "totalResources": 23159,
        "categories": [

        ]
    },
    {
        "name": "香系源资源站",
        "api": "https://www.gdlsp.com/api/json.php",
        "apiType": "json",
        "uptime": "100%",
        "speed": "medium",
        "totalResources": 23481,
        "categories": [

        ]
    }
];
    // =========================================
    let list = JSON.parse(localStorage.getItem('libretv_sites') || '[]');
    // 合并，自动去重
    builtInSources.forEach(item => {
        if (!list.find(s => s.api === item.api)) {
            list.push(item);
        }
    });
    return list;
}
// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
