(function() {
const CUSTOMER_SITES = {
  z360: {
    api: "https://360zy.com/api.php/provide/vod/",
    name: "360资源站",
    adult: false
  },
  yaya: {
    api: "https://cj.yayazy.net/api.php/provide/vod/",
    name: "鸭鸭资源站",
    adult: false
  },
  guangsu: {
    api: "https://api.guangsuapi.com/api.php/provide/vod/",
    name: "光速资源站",
    adult: false
  },
  tianya: {
    api: "https://tyyszyapi.com/api.php/provide/vod/",
    name: "天涯影视资源站",
    adult: false
  },
  haohua: {
    api: "https://haohuazy.com/api.php/provide/vod/",
    name: "豪华资源站",
    adult: false
  },
  jipin: {
    api: "shturl.cc/2F4ZO3GpjhwZSFFKWZRo699tbqhJgwVM",
    name: "新极品资源站",
    adult: false
  },
  wujin: {
    api: "https://api.wujinapi.me/api.php/provide/vod/",
    name: "无尽资源站",
    adult: false
  },
  baofeng: {
    api: "https://bfzyapi.com/api.php/provide/vod/",
    name: "暴风资源站",
    adult: false
  },
  zuida: {
    api: "http://zuidazy.me/api.php/provide/vod/",
    name: "最大资源站",
    adult: false
  },
  jisu: {
    api: "https://jszyapi.com/api.php/provide/vod/",
    name: "极速资源站",
    adult: false
  },
  aiqiyi: {
    api: "https://iqiyizyapi.com/api.php/provide/vod",
    name: "爱奇艺资源站",
    adult: false
  },
  niuniu: {
    api: "https://api.niuniuzy.me/api.php/provide/vod/",
    name: "牛牛资源",
    adult: false
  },
  maoyan: {
    api: "https://api.maoyanapi.top/api.php/provide/vod",
    name: "猫眼资源",
    adult: false
  },
  suoni: {
    api: "https://suonizy.net/api.php/provide/vod/",
    name: "索尼采集站",
    adult: false
  },
  hongniu: {
    api: "http://hongniuzy2.com/api.php/provide/vod/",
    name: "红牛资源站",
    adult: false
  },
  maotai: {
    api: "https://mtzy5.com/api.php/provide/vod/",
    name: "茅台资源站",
    adult: false
  },
  huya: {
    api: "https://huyazy.net/api.php/provide/vod/",
    name: "虎牙资源站",
    adult: false
  },
  douban: {
    api: "https://dbzy.tv/api.php/provide/vod/",
    name: "豆瓣资源站",
    adult: false
  },
  subocj: {
    api: "https://subocj.com/api.php/provide/vod/",
    name: "速播1",
    adult: false
  },
  suboziyuan: {
    api: "https://www.suboziyuan.net/api.php/provide/vod/",
    name: "速播2",
    adult: false
  },
  jinying: {
    api: "https://jyzyapi.com/provide/vod/",
    name: "金鹰资源站",
    adult: false
  },
  api155: {
    api: "shturl.cc/RiQT9i3lcWCsxH3K6crY25vdCPW5",
    name: "155资源站",
    adult: false
  },
  feifan: {
    api: "https://ffzy5.tv/api.php/provide/vod/",
    name: "非凡资源站",
    adult: false
  },
  piaoling: {
    api: "https://p2100.net/api.php/provide/vod/",
    name: "飘零影院资源站",
    adult: false
  },
  jkun: {
    api: "shturl.cc/R73hHf1cycfG0Tmi4NVD3e5dDeHaasA",
    name: "JKUN资源站",
    adult: false
  },
  modu: {
    api: "https://mdzyapi.com/api.php/provide/vod/",
    name: "魔都资源站",
    adult: false
  },
  lebo: {
    api: "shturl.cc/3i6v0gGN5ANRyBfH5fZmTRc0tz28s",
    name: "乐播资源站",
    adult: false
  },
  dadi: {
    api: "https://dadiapi.com/api.php",
    name: "大地资源站",
    adult: false
  },
  aikun: {
    api: "https://ikunzyapi.com/api.php/provide/vod/",
    name: "爱坤资源站",
    adult: false
  },
  dax: {
    api: "shturl.cc/Ky7lGZ1p2hIxnUFOBAC3FWzLt14n72PMX",
    name: "大X子资源站",
    adult: true
  },
  aosika: {
    api: "shturl.cc/jbuCcVSLU0BpGRmh1QKV4lTlXLjWaGm",
    name: "奥斯卡资源站",
    adult: true
  },
  naixiang: {
    api: "shturl.cc/s8LdPkrwHGTXp7ywXvSiOTcGBxiLp2",
    name: "奶香香资源站",
    adult: true
  },
  xiaoji: {
    api: "shturl.cc/duJ1VhH8URrIbXby6sTed17Ql7fS",
    name: "小鸡资源站",
    adult: true
  },
  taohua: {
    api: "shturl.cc/0eh7fBMV5H5Cb9d1erwQUgr7iqo",
    name: "桃花资源站",
    adult: true
  },
  senlin: {
    api: "shturl.cc/kulcxzDY4G4qrJzJ0oAFyRbgzucBCq",
    name: "森林资源站",
    adult: true
  },
  yinghua: {
    api: "https://m3u8.apiyhzy.com/api.php/provide/vod",
    name: "樱花资源站",
    adult: true
  },
  shileyuan: {
    api: "https://xxavs.com/api.php/provide/vod/",
    name: "湿乐园资源站",
    adult: true
  },
  didi: {
    api: "shturl.cc/5FqwGtG3lgwOR55rcNWeEBB2PVFlyDg",
    name: "滴滴资源站",
    adult: true
  },
  yutu: {
    api: "shturl.cc/3yULTtlFXMut7m1Az2fo6hhp65qYSn",
    name: "玉兔资源站",
    adult: true
  },
  fanhao: {
    api: "shturl.cc/PUGPEEgcByRdGtYNpmlo0G3OwjMc",
    name: "番号资源站",
    adult: true
  },
  fanqie: {
    api: "shturl.cc/CE0lZc5myMwwmen17lG1TfKI0j",
    name: "番茄资源站",
    adult: true
  },
  baihua: {
    api: "shturl.cc/m5dpdrdcJlBAfc6DLiN1k4zJITvA23",
    name: "百花资源站",
    adult: true
  },
  jingpinx: {
    api: "shturl.cc/xA278jKqRnCLiKBvBlwhzxttxW5oFL8DP7",
    name: "精品X资源站",
    adult: true
  },
  xibao: {
    api: "https://www.xxibaozyw.com/api.php",
    name: "细胞网资源站",
    adult: true
  },
  lasex: {
    api: "shturl.cc/HySbMy2SOCtmnGrdh7L84wHuqPwB8vZd",
    name: "老色X资源站",
    adult: true
  },
  semao: {
    api: "https://caiji.semaozy.net/inc/api.php",
    name: "色猫资源站",
    adult: true
  },
  yuenan: {
    api: "https://api.vnzyz.com/api.php/provide/vod/",
    name: "越南资源站",
    adult: true
  },
  lajiao: {
    api: "https://apilj.com/api.php/provide/vod/",
    name: "辣椒资源站",
    adult: true
  },
  xiangjiao: {
    api: "shturl.cc/fF4MT3ZTcZ9ixzf2QhlHvEeeEWJUUi2bcpHNfWS",
    name: "香蕉资源站",
    adult: true
  },
  shayu: {
    api: "shturl.cc/aHjvt7cdeoTYa5egadultr3CVxZFVhB",
    name: "鲨鱼资源站",
    adult: true
  },
  madou: {
    api: "https://91md.me/api.php/provide/vod/",
    name: "麻豆资源站",
    adult: true
  },
  hscangku: {
    api: "https://hsckzy888.com/api.php",
    name: "X色仓库资源",
    adult: true
  },
  heiliao: {
    api: "https://heiliaozyapi.com/api.php/provide/vod",
    name: "黑料资源站",
    adult: true
  },
  okzy: {
    api: "https://api.okzy.com/api.php/provide/vod",
    name: "ok资源站",
    adult: false
  },
  uku: {
    api: "https://api.ukuzy.com/api.php/provide/vod",
    name: "u酷资源站",
    adult: false
  },
  youzhi: {
    api: "https://api.yzzy.com/api.php",
    name: "优质资源站",
    adult: false
  },
  ruyi: {
    api: "https://api.ryzy.com/api.php",
    name: "如意资源站",
    adult: false
  },
  kuaiche: {
    api: "https://api.kczy.com/api.php",
    name: "快车资源站",
    adult: false
  },
  xinlang: {
    api: "https://api.xlzy.com/api.php",
    name: "新浪资源站",
    adult: false
  },
  hongniu2: {
    api: "https://api.hnzy2.com/api.php",
    name: "红牛资源站2",
    adult: false
  },
  shandian: {
    api: "https://api.sdzy.com/api.php",
    name: "闪电资源",
    adult: false
  },
  yaji: {
    api: "https://api.yjzy.com/api.php",
    name: "雅集资源站",
    adult: false
  },
  ckzy: {
    api: "https://api.ckzy.com/api.php",
    name: "ck资源站",
    adult: false
  },
  baiduyun: {
    api: "https://api.apibdzy.com/api.php/provide/vod",
    name: "百度云资源站",
    adult: false
  },
  aidan: {
    api: "https://lovedan.net/api.php/provide/vod/",
    name: "艾旦资源站",
    adult: true
  },
  souav: {
    api: "https://api.souavzyw.net/api.php",
    name: "搜A-V资源站",
    adult: true
  },
  baipiao: {
    api: "https://www.kxgav.com/api/json.php",
    name: "白嫖资源站",
    adult: true
  },
  meishaonv: {
    api: "https://www.msnii.com/api/json.php",
    name: "美少女资源站",
    adult: true
  },
  doudou: {
    api: "shturl.cc/HAxwR8bSXStaeYKfUb1wgMuoElVJWgt",
    name: "豆豆资源站",
    adult: false
  },
  pgxdy: {
    api: "https://www.pgxdy.com/api/json.php",
    name: "X色A-V资源站",
    adult: true
  },
  xrbsp: {
    api: "https://www.xrbsp.com/api/json.php",
    name: "清水源资源站",
    adult: true
  },
  dlsp: {
    api: "https://www.gdlsp.com/api/json.php",
    name: "香系源资源站",
    adult: true
  }
};

// 注入扩展接口列表到LibreTV全局变量
if (window.extendAPISites) {
  window.extendAPISites(CUSTOMER_SITES);
} else {
  console.error("加载顺序错误：必须先加载config.js再加载customer_site.js");
}
})();
