console.clear();

http.__okhttp__.setTimeout(10000);

let url = [
    'https://hub.gitmirror.com/https://raw.githubusercontent.com/wuyazhong2022/Qg-Xxzs/main/UI.js',
    'https://raw.gitmirror.com/wuyazhong2022/Qg-Xxzs/main/UI.js',
    'https://raw.githubusercontent.com/wuyazhong2022/Qg-Xxzs/main/UI.js',
    
];

for (var i = 0; i < url.length; i++) {
    try {
        let res = http.get(url[i]);
        console.log(i + ":" + res.statusCode);
        if (res.statusCode == 200) {
            var UI = res.body.string();
            if (UI.indexOf('"ui";') == 1) break;
        } else {
            toastLog('UI脚本:地址' + i + '下载失败');
        }
    } catch (error) {
        console.log(error);
    }
}

engines.execScript("UI", UI);
