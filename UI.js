"ui";

importClass(java.net.HttpURLConnection);
importClass(java.net.URL);
importClass(java.io.File);
importClass(java.io.FileOutputStream);
importClass(android.graphics.Color);

var color = "#FF6600";

ui.statusBarColor("#FF6600")

ui.layout(
    <drawer id="drawer">
        <vertical>
            <appbar>
                <toolbar id="toolbar" bg="#FF6600" title="学习助手pro"/>
                <tabs id="tabs" bg="#FF6600"/>
            </appbar>
            <viewpager id="viewpager">
                <frame>
                    <vertical>
                        <vertical gravity="center" layout_weight="1">
                            
                            
                            <card w="*" h="70" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" foreground="?selectableItemBackground">
                                
                                <horizontal gravity="center_vertical">
                                    <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                        <text text="脚本选择" textColor="#222222" textSize="16sp" maxLines="1" />
                                        <text text="切换脚本后需在配置页设置" textColor="#999999" textSize="14sp" maxLines="1" />
                                    </vertical>
                                    <spinner id="script_chosen" marginLeft="4" marginRight="6" entries="学习助手pro" />
                                </horizontal>
                            </card>
                            <card w="*" h="70" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" foreground="?selectableItemBackground">
                                <horizontal gravity="center_vertical">
                                    <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                        <text text="无障碍服务" textColor="#222222" textSize="16sp" maxLines="1" />
                                        <text text="请确保开启" textColor="#999999" textSize="14sp" maxLines="1" />
                                    </vertical>
                                    <checkbox id="autoService" marginLeft="4" marginRight="6" checked="{{auto.service != null}}" />
                                </horizontal>
                            </card>
                            <card w="*" h="70" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" foreground="?selectableItemBackground">
                                <horizontal gravity="center_vertical">
                                    <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                        <text text="悬浮窗权限" textColor="#222222" textSize="16sp" maxLines="1" />
                                        <text text="请确保开启" textColor="#999999" textSize="14sp" maxLines="1" />
                                    </vertical>
                                    <checkbox id="consoleshow" marginLeft="4" marginRight="6" checked="{{floaty.checkPermission()}}" />
                                </horizontal>
                            </card>
                            <card w="*" h="70" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" foreground="?selectableItemBackground">
                                <horizontal gravity="center_vertical">
                                    <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                        <text text="音量上键可以停止所有脚本运行" textColor="#222222" textSize="16sp" maxLines="1" />
                                    </vertical>
                                </horizontal>
                            </card>
                        </vertical>
                        <button h="60" layout_gravity="center" id="click_me" textSize="15sp" text="注意:使用前先看视频教程" />
                        <button h="60" layout_gravity="center" id="log" textSize="18sp" text="查看日志" />
                        <button h="60" layout_gravity="center" id="update" textSize="18sp" />
                        <button id="start" text="开 始 学 习" textSize="25sp" color="#ffffff" bg="#FF6600" foreground="?selectableItemBackground"/>
                    </vertical>
                </frame>
                <ScrollView>
                    <frame>
                        <vertical id="ttxs_pro" gravity="center">
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                
                                
                                <vertical padding="5 4" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="🔥🔥激活码/卡密🔥🔥" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="🔥🔥下方输入卡密，在拉到最下方，点击保存配置🔥🔥" />
                                    <input id="ttxs_pro_pushplus1" text="" textSize="13sp" />
                                </vertical>
                            </horizontal>
                            <horizontal gravity="center_vertical" padding="5 5" >
                                
                                <text w="auto" textColor="#222222" textSize="10sp" text="定时停止运行时间:" />
                                <text text="" textColor="#000000" textSize="11sp" />
                                <input id="定时1" textSize="11sp" textColor="black" w="30" gravity="center" />
                                <text textColor="black" textSize="11sp" text="时" />
                                <input id="定时2" textSize="11sp" textColor="black" w="30" gravity="center" />
                                <text textColor="black" textSize="11sp" text="分" />
                                <text textColor="red" textSize="8sp" textStyle="bold" text="【24小时制  可选/可不选】" />
                                
                                <checkbox id="ttxs_pro_定时停止运行时间" marginLeft="4" marginRight="6" checked="false" />
                            </horizontal>
                            <horizontal gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="auto" w="0"  >
                                </View>
                                <text w="auto" textColor="#222222" textSize="10sp" text="定时启动运行时间:" />
                                <text text="" textColor="#000000" textSize="11sp" />
                                <input id="定时3" textSize="11sp" textColor="black" w="30" gravity="center" />
                                <text textColor="black" textSize="11sp" text="时" />
                                <input id="定时4" textSize="11sp" textColor="black" w="30" gravity="center" />
                                <text textColor="black" textSize="11sp" text="分" />
                                <text textColor="red" textSize="8sp" textStyle="bold" text="【24小时制  可选/可不选】" />
                                
                                <checkbox id="ttxs_pro_定时启动运行时间" marginLeft="4" marginRight="6" checked="false" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#FF6600" h="*" w="10"  >
                                </View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="看门狗(秒)" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="填1800就是超过30分钟重试" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="空着或0默认5400秒，超过即重新执行" />
                                </vertical>
                                <input id="ttxs_pro_watchdog" marginLeft="4" marginRight="6" text="1800"  hint="秒"  textSize="13sp"  inputType="number" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#FF6600" h="*" w="10"  >
                                </View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="发现滑动验证后的震动提醒时间(ms)" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="空着或0不开启震动" />
                                </vertical>
                                <input id="ttxs_pro_slide_verify" marginLeft="4" marginRight="6" text="300" textSize="13sp"  inputType="number" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#FF6600" h="*" w="10"  >
                                </View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="无障碍模式2" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="无障碍服务没问题就不勾选" />
                                </vertical>
                                <checkbox id="ttxs_pro_fast_mode" marginLeft="4" marginRight="6" checked="false" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#FF6600" h="*" w="10"  >
                                </View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="点点通功能" />
                                </vertical>
                                <checkbox id="ttxs_pro_ddtong" marginLeft="4" marginRight="6" checked="false" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#FF6600" h="*" w="10"  >
                                </View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="开始前强制结束强国" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="如果关闭，请确保强国已退出或在首页" />
                                </vertical>
                                <checkbox id="ttxs_pro_is_exit" marginLeft="4" marginRight="6" checked="true" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#FF6600" h="*" w="10"  >
                                </View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="评论" />
                                </vertical>
                                <checkbox id="ttxs_pro_pinglun" marginLeft="4" marginRight="6" checked="true" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#FF6600" h="*" w="10"  >
                                </View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="评论内容" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="随机选择一项作为评论内容，以竖线“|”分隔" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="如果只有一项则每次评论都一样" />
                                    <input id="ttxs_pro_comment" marginLeft="4" marginRight="6" text="为人民服务|共同发展，加油|相互尊重、和平发展|加油厉害我的国|一切为民，实干就对了|努力奋进，服务为民" textSize="13sp"  inputType="textMultiLine" />
                                </vertical>
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#FF6600" h="*" w="10"  >
                                </View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="视听学习次数" />
                                </vertical>
                                <checkbox id="ttxs_pro_shipin" marginLeft="4" marginRight="6" checked="true" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#FF6600" h="*" w="10"  >
                                </View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="文章次数与时长" />
                                </vertical>
                                <checkbox id="ttxs_pro_wenzhang" marginLeft="4" marginRight="6" checked="true" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#FF6600" h="*" w="10"  >
                                </View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="每日答题" />
                                </vertical>
                                <checkbox id="ttxs_pro_meiri" marginLeft="4" marginRight="6" checked="true" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#FF6600" h="*" w="10"  >
                                </View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="趣味答题" />
                                </vertical>
                                <checkbox id="ttxs_pro_quweidati" marginLeft="4" marginRight="6" checked="true" />
                            </horizontal>
                            
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#FF6600" h="*" w="10"  >
                                </View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="本地" />
                                </vertical>
                                <checkbox id="ttxs_pro_bendi" marginLeft="4" marginRight="6" checked="true" />
                            </horizontal>
                            
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#FF6600" h="*" w="10"  >
                                </View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="OCR选择" />
                                    <spinner id="ttxs_pro_ocr_choice" marginLeft="4" marginRight="6" entries="GoogleMLKit|PaddleOCR|第三方插件" />
                                </vertical>
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#FF6600" h="*" w="10"  >
                                </View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="ocr识别跳过阈值(ms)" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="空着或0默认5000，超过此时间会跳过多人对战" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="建议按照平时正常的ocr识别时间设置" />
                                </vertical>
                                <input id="ttxs_pro_ocr_maxtime" marginLeft="4" marginRight="6" text="5000" textSize="13sp"  inputType="number" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#FF6600" h="*" w="10"  >
                                </View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="对战选项模式" />
                                    <spinner id="ttxs_pro_duizhan_mode" marginLeft="4" marginRight="6" entries="随机顺序(等选项显示后识别答案)|固定顺序(历史遗留选项)|手动答题(识别答案后等待用户手动点击)" />
                                </vertical>
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#FF6600" h="*" w="10"  >
                                </View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="对战极速模式延迟(历史遗留选项)" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="只在选项固定顺序时生效" />
                                </vertical>
                                <input id="ttxs_pro_jisu" marginLeft="4" marginRight="6" text="0" textSize="13sp"  inputType="number" />
                            </horizontal>
                            
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#FF6600" h="*" w="10"  >
                                </View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="订阅" />
                                    <spinner id="ttxs_pro_dingyue" marginLeft="4" marginRight="6" entries="不做|正序订阅|只订阅年度上新" />
                                </vertical>
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#FF6600" h="*" w="10"  >
                                </View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="pushplus_token(微信推送)" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="微信关注pushplus推送加，复制token填入" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="注意！搜索结果有两个，一定要关注正确" />
                                    <input id="ttxs_pro_pushplus" text="" textSize="13sp" />
                                </vertical>
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#FF6600" h="*" w="10"  >
                                </View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="是否启用音量调节" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="每次运行脚本后调节音量百分比" />
                                </vertical>
                                <checkbox id="ttxs_pro_yl_on" marginLeft="4" marginRight="6" checked="false" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#FF6600" h="*" w="10"  >
                                </View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="音量" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="调节音量百分比(只填数字)" />
                                </vertical>
                                <input id="ttxs_pro_yinliang" marginLeft="4" marginRight="6" text="0" textSize="13sp"  inputType="number" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#FF6600" h="*" w="10"  >
                                </View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="多账号(选填，不限个数)" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="使用前确保所有账号都已完成短信验证" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="账号1:密码1:token1(换行/回车)账号2:密码2:token2(换行/回车)账号3:密码3:token3" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="结束后会自动登录回账号1" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="新增多账号1对1微信推送，按格式配置即可" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="没有则根据上面配置的pushplus_token为主" />
                                    <input id="ttxs_pro_zhanghao" text="" textSize="13sp" />
                                </vertical>
                            </horizontal>
                            <horizontal>
                                <button style="Widget.AppCompat.Button.Colored" id="ttxs_pro_save" text="保存配置" padding="12dp" w="*" />
                            </horizontal>
                            <horizontal>
                                <button style="Widget.AppCompat.Button.Colored" id="ttxs_pro_reset" text="恢复默认" padding="12dp" w="*" />
                            </horizontal>
                        </vertical>
                    </frame>
                </ScrollView>
                
                <ScrollView>
                    <frame>
                        <vertical>
                            <webview id="a" w="match_parent" h="match_parent" />
                            
                        </vertical>
                        
                    </frame>
                </ScrollView>
                
            </viewpager>
        </vertical>
    </drawer>
);

ui.update.visibility = 8;

http.__okhttp__.setTimeout(10000);


var GLOBAL_CONFIG = storages.create("GLOBAL_CONFIG");
var TTXS_PRO_CONFIG = storages.create("TTXS_PRO_CONFIG");
var BAIDUAPI = storages.create("BAIDUAPI");
var execution = "";
var thread = null;
Initialize();

//公告
webView = ui.a
var settings = webView.getSettings()
// settings.setJavaScriptEnabled(true);
settings.setJavaScriptCanOpenWindowsAutomatically(true);
var url = "https://www.jiebeih.top/14536.html"
webView.loadUrl(url);


// 版本更新检查
var apkurl = "https://www.jiebeih.top/14536.html";
var latest_version = "2.2.3";
if (GLOBAL_CONFIG.get("NO_UPDATE", 0) && (app.versionName != latest_version)) {
    ui.update.visibility = 0;
    ui.update.setText("点击更新至最新版v" + latest_version);
} else if (app.versionName != latest_version) {
    checkversion();
}

// 打开视频教程
ui.click_me.click(function() {

    // 打开浏览器
    app.startActivity({
        action: "android.intent.action.VIEW",
        flags: ["activity_new_task"],
        data: "https://www.jiebeih.top/14536.html"
    });

});

// 创建选项菜单(右上角)
ui.emitter.on("create_options_menu", menu => {
    menu.add("日志");
    menu.add("关于");
    menu.add("留言私信");
    menu.add("強國v2.50版下载");
    menu.add("安装帮助");
    menu.add("卡密购买");
});

// 监听选项菜单点击
ui.emitter.on("options_item_selected", (e, item) => {
    switch (item.getTitle()) {
        case "日志":
            app.startActivity("console");
            break;
        case "关于":
            alert("关于", "学习助手 v" + latest_version);
            break;
        case "留言私信":
            app.openUrl("https://www.jiebeih.top/author/1");
            break;
        case "強國v2.50版下载":
            app.openUrl("https://share.feijipan.com/s/lvUibbQQ");
            break;
        case "安装帮助":
            app.openUrl("http://zyw.jiebeih.top");
            break;
        case "卡密购买":
            app.openUrl("https://sc.xiaogezy.cn/?mod=buy&tid=17");
            break;
    }
    e.consumed = true;
});
activity.setSupportActionBar(ui.toolbar);

// 设置滑动页面的标题
ui.viewpager.setTitles(["首页", "脚本配置", "资源站"]);
// 让滑动页面和标签栏联动
ui.tabs.setupWithViewPager(ui.viewpager);

// 脚本选择监听
var script_chosen_Listener = new android.widget.AdapterView.OnItemSelectedListener({
    onItemSelected: function(parent, view, position, id) {
        toastLog('选择脚本：' + ui.script_chosen.getSelectedItem());
        // ui.ttxs_pro.visibility = 0;
        if (ui.script_chosen.getSelectedItemPosition() == 0) {
            // ui.ttxs.visibility = 8;
            // ui.study.visibility = 8;
            // ui.study1.visibility = 8;
            ui.ttxs_pro.visibility = 0;

        } else if (ui.script_chosen.getSelectedItemPosition() == 1) {
            ui.ttxs_pro.visibility = 8;
            ui.study.visibility = 8;
            ui.study1.visibility = 8;
            ui.ttxs.visibility = 0;
        } else if (ui.script_chosen.getSelectedItemPosition() == 2) {
            ui.ttxs_pro.visibility = 8;
            ui.ttxs.visibility = 8;
            ui.study.visibility = 0;
            ui.study1.visibility = 8;
        } else if (ui.script_chosen.getSelectedItemPosition() == 3) {
            ui.ttxs_pro.visibility = 8;
            ui.ttxs.visibility = 8;
            ui.study1.visibility = 0;
            ui.study.visibility = 8;
        }
        GLOBAL_CONFIG.put("script_chosen", ui.script_chosen.getSelectedItemPosition());
    }
})
ui.script_chosen.setOnItemSelectedListener(script_chosen_Listener);

// 用户勾选无障碍服务的选项时，跳转到页面让用户去开启 
// android.permission.SYSTEM_ALERT_WINDOW
ui.autoService.on("check", function(checked) {
    if (checked && auto.service == null) {
        app.startActivity({
            action: "android.settings.ACCESSIBILITY_SETTINGS"
        });
    }
    if (!checked && auto.service != null) {
        auto.service.disableSelf();
    }
});



// 悬浮窗权限
ui.consoleshow.on("check", function(checked) {
    if (checked && !floaty.checkPermission()) {
        app.startActivity({
            packageName: "com.android.settings",
            className: "com.android.settings.Settings$AppDrawOverlaySettingsActivity",
            data: "package:" + context.getPackageName(),
        });
    }
});

// 当用户回到本界面时，resume事件会被触发
ui.emitter.on("resume", function() {
    // 此时根据无障碍服务的开启情况，同步开关的状态
    ui.autoService.checked = auto.service != null;
    ui.consoleshow.checked = floaty.checkPermission();
});

// 打开日志
ui.log.click(function() {
    app.startActivity("console");
});

// APP更新检测
ui.update.click(function() {
    if (app.versionName != latest_version) {
        GLOBAL_CONFIG.put("NO_UPDATE", 0);
        checkversion();
    } else {
        toast("当前已经是最新版本！");
    }
});

// 下载并运行所选脚本
ui.start.click(function() {
    threads.shutDownAll();
    if (thread != null && thread.isAlive()) {
        alert("注意", "脚本正在运行，请结束之前进程");
        return;
    }

复选框2 = ui.ttxs_pro_定时停止运行时间.isChecked()

    if (复选框2) {
        toastLog("开启：定时停止运行模式")
        threads.start(function() {
            sleep(30000);
            while (true) {
                var 时 = ui.定时1.getText();
                var 分 = ui.定时2.getText();
                var h = parseInt(时)
                var m = parseInt(分)
                var a = new Date().getHours()
                var b = new Date().getMinutes()
                if (h == a && m == b) {
                    console.log("到达指定时间，停止任务")
                    sleep(2000);
                    // 停止运行播放列表删除清空()
                    //返回首页()
                    home()
                    sleep(2000);
                    exit();
                    break;
                }
                log("没到定时停止时间~~")
                sleep(2000);
            }
        });
    }

    复选框3 = ui.ttxs_pro_定时启动运行时间.isChecked()

    if (复选框3) {
        console.log("开启：定时启动运行模式")
        threads.start(function() {
           // window.action.setText('停止');
            sleep(2000);
            while (true) {
                var 时 = ui.定时3.getText();
                var 分 = ui.定时4.getText();
                var h = parseInt(时)
                var m = parseInt(分)
                var a = new Date().getHours()
                var b = new Date().getMinutes()
                if (h == a && m == b) {
                    console.log("到达指定时间，启动任务")
                    sleep(1000);

                    //console.hide()

                    threads.start(function() {
                        execution = engines.execScript("学习助手pro", getScript(ui.script_chosen.getSelectedItemPosition()));
                    });

                    break;
                }
               // console.show()
                 console.log("没到定时启动时间~~")
                sleep(1000);
            }
        });
    } else {

        threads.start(function() {
            execution = engines.execScript("学习助手pro", getScript(ui.script_chosen.getSelectedItemPosition()));
        });
    }


});






////// ========================================================================================

function withtime(message) {
    var date = new Date();
    var 时 = date.getHours()
    var 分 = date.getMinutes();
    var 秒 = date.getSeconds();
    console.info(时 + ":" + 分 + ":" + 秒 + "  " + message)
}


// 保存学习助手pro脚本设置
ui.ttxs_pro_save.click(function() {
    TTXS_PRO_CONFIG.put("pushplus1", ui.ttxs_pro_pushplus1.getText() + "");
    TTXS_PRO_CONFIG.put("定时停止运行时间", ui.ttxs_pro_定时停止运行时间.isChecked());
    TTXS_PRO_CONFIG.put("定时启动运行时间", ui.ttxs_pro_定时启动运行时间.isChecked());

    // 添加复选框2的定时1和定时2的参数保存
    TTXS_PRO_CONFIG.put("时", ui.定时1.getText() + "");
    TTXS_PRO_CONFIG.put("分", ui.定时2.getText() + "");
    // 添加复选框3的定时3和定时4的参数保存
    TTXS_PRO_CONFIG.put("3时", ui.定时3.getText() + "");
    TTXS_PRO_CONFIG.put("4分", ui.定时4.getText() + "");

    TTXS_PRO_CONFIG.put("watchdog", ui.ttxs_pro_watchdog.getText() + "");
    TTXS_PRO_CONFIG.put("slide_verify", ui.ttxs_pro_slide_verify.getText() + "");
    TTXS_PRO_CONFIG.put("fast_mode", ui.ttxs_pro_fast_mode.isChecked());
    TTXS_PRO_CONFIG.put("ddtong", ui.ttxs_pro_ddtong.isChecked());
    TTXS_PRO_CONFIG.put("is_exit", ui.ttxs_pro_is_exit.isChecked());
    TTXS_PRO_CONFIG.put("pinglun", ui.ttxs_pro_pinglun.isChecked());
    TTXS_PRO_CONFIG.put("comment", ui.ttxs_pro_comment.getText() + "");
    TTXS_PRO_CONFIG.put("shipin", ui.ttxs_pro_shipin.isChecked());
    TTXS_PRO_CONFIG.put("wenzhang", ui.ttxs_pro_wenzhang.isChecked());
    TTXS_PRO_CONFIG.put("meiri", ui.ttxs_pro_meiri.isChecked());
    // TTXS_PRO_CONFIG.put("meizhou", ui.ttxs_pro_meizhou.getSelectedItemPosition());
    // TTXS_PRO_CONFIG.put("zhuanxiang", ui.ttxs_pro_zhuanxiang.getSelectedItemPosition());
    //    TTXS_PRO_CONFIG.put("tiaozhan", ui.ttxs_pro_tiaozhan.isChecked());
    TTXS_PRO_CONFIG.put("ocr_choice", ui.ttxs_pro_ocr_choice.getSelectedItemPosition());
    TTXS_PRO_CONFIG.put("ocr_maxtime", ui.ttxs_pro_ocr_maxtime.getText() + "");
    TTXS_PRO_CONFIG.put("duizhan_mode", ui.ttxs_pro_duizhan_mode.getSelectedItemPosition());
    TTXS_PRO_CONFIG.put("jisu", ui.ttxs_pro_jisu.getText() + "");
    // TTXS_PRO_CONFIG.put("guaji", ui.ttxs_pro_guaji.isChecked());
    TTXS_PRO_CONFIG.put("quweidati", ui.ttxs_pro_quweidati.isChecked());
    // TTXS_PRO_CONFIG.put("dacuo_num", ui.ttxs_pro_dacuo_num.getText() + "");
    //    TTXS_PRO_CONFIG.put("shuangren", ui.ttxs_pro_shuangren.isChecked());
    TTXS_PRO_CONFIG.put("bendi", ui.ttxs_pro_bendi.isChecked());
    TTXS_PRO_CONFIG.put("dingyue", ui.ttxs_pro_dingyue.getSelectedItemPosition());
    TTXS_PRO_CONFIG.put("pushplus", ui.ttxs_pro_pushplus.getText() + "");
    TTXS_PRO_CONFIG.put("yl_on", ui.ttxs_pro_yl_on.isChecked());
    TTXS_PRO_CONFIG.put("yinliang", ui.ttxs_pro_yinliang.getText() + "");
    TTXS_PRO_CONFIG.put("zhanghao", ui.ttxs_pro_zhanghao.getText() + "");

    toastLog("学习助手pro配置保存成功！");
});

// 重置学习助手pro脚本设置
ui.ttxs_pro_reset.click(function() {
    TTXS_PRO_CONFIG.put("watchdog", "1800");
    ui.ttxs_pro_watchdog.setText(TTXS_PRO_CONFIG.get("watchdog"));
    TTXS_PRO_CONFIG.put("slide_verify", "300");
    ui.ttxs_pro_slide_verify.setText(TTXS_PRO_CONFIG.get("slide_verify"));
    TTXS_PRO_CONFIG.put("fast_mode", false);
    ui.ttxs_pro_fast_mode.setChecked(TTXS_PRO_CONFIG.get("fast_mode"));
    TTXS_PRO_CONFIG.put("ddtong", false);
    ui.ttxs_pro_ddtong.setChecked(TTXS_PRO_CONFIG.get("ddtong"));
    TTXS_PRO_CONFIG.put("is_exit", false);
    ui.ttxs_pro_is_exit.setChecked(TTXS_PRO_CONFIG.get("is_exit"));
    TTXS_PRO_CONFIG.put("pinglun", true);
    ui.ttxs_pro_pinglun.setChecked(TTXS_PRO_CONFIG.get("pinglun"));
    TTXS_PRO_CONFIG.put("comment", "为人民服务|共同发展，加油|相互尊重、和平发展|加油厉害我的国|一切为民，实干就对了|努力奋进，服务为民");
    ui.ttxs_pro_comment.setText(TTXS_PRO_CONFIG.get("comment"));
    TTXS_PRO_CONFIG.put("shipin", true);
    ui.ttxs_pro_shipin.setChecked(TTXS_PRO_CONFIG.get("shipin"));
    TTXS_PRO_CONFIG.put("wenzhang", true);
    ui.ttxs_pro_wenzhang.setChecked(TTXS_PRO_CONFIG.get("wenzhang"));
    TTXS_PRO_CONFIG.put("meiri", true);
    ui.ttxs_pro_meiri.setChecked(TTXS_PRO_CONFIG.get("meiri"));
    //TTXS_PRO_CONFIG.put("meizhou", 1);
    // ui.ttxs_pro_meizhou.setSelection(TTXS_PRO_CONFIG.get("meizhou"));
    TTXS_PRO_CONFIG.put("zhuanxiang", 2);
    // ui.ttxs_pro_zhuanxiang.setSelection(TTXS_PRO_CONFIG.get("zhuanxiang"));
    TTXS_PRO_CONFIG.put("tiaozhan", false);
    // ui.ttxs_pro_tiaozhan.setChecked(TTXS_PRO_CONFIG.get("tiaozhan"));
    TTXS_PRO_CONFIG.put("ocr_choice", 2);
    ui.ttxs_pro_ocr_choice.setSelection(TTXS_PRO_CONFIG.get("ocr_choice"));
    TTXS_PRO_CONFIG.put("ocr_maxtime", "5000");
    ui.ttxs_pro_ocr_maxtime.setText(TTXS_PRO_CONFIG.get("ocr_maxtime"));
    TTXS_PRO_CONFIG.put("duizhan_mode", 0);
    ui.ttxs_pro_duizhan_mode.setSelection(TTXS_PRO_CONFIG.get("duizhan_mode"));
    TTXS_PRO_CONFIG.put("jisu", "0");
    ui.ttxs_pro_jisu.setText(TTXS_PRO_CONFIG.get("jisu"));
    TTXS_PRO_CONFIG.put("guaji", false);
    // ui.ttxs_pro_guaji.setChecked(TTXS_PRO_CONFIG.get("guaji"));
    TTXS_PRO_CONFIG.put("quweidati", true);
    ui.ttxs_pro_quweidati.setChecked(TTXS_PRO_CONFIG.get("quweidati"));
    TTXS_PRO_CONFIG.put("dacuo_num", "0");
    // ui.ttxs_pro_dacuo_num.setText(TTXS_PRO_CONFIG.get("dacuo_num"));
    TTXS_PRO_CONFIG.put("shuangren", false);
    //    ui.ttxs_pro_shuangren.setChecked(TTXS_PRO_CONFIG.get("shuangren"));
    TTXS_PRO_CONFIG.put("bendi", true);
    ui.ttxs_pro_bendi.setChecked(TTXS_PRO_CONFIG.get("bendi"));
    TTXS_PRO_CONFIG.put("dingyue", 0);
    ui.ttxs_pro_dingyue.setSelection(TTXS_PRO_CONFIG.get("dingyue"));
    TTXS_PRO_CONFIG.put("pushplus", "");
    ui.ttxs_pro_pushplus.setText(TTXS_PRO_CONFIG.get("pushplus"));
    TTXS_PRO_CONFIG.put("yl_on", false);
    ui.ttxs_pro_yl_on.setChecked(TTXS_PRO_CONFIG.get("yl_on"));
    TTXS_PRO_CONFIG.put("yinliang", "0");
    ui.ttxs_pro_yinliang.setText(TTXS_PRO_CONFIG.get("yinliang"));
    TTXS_PRO_CONFIG.put("zhanghao", "");
    ui.ttxs_pro_zhanghao.setText(TTXS_PRO_CONFIG.get("zhanghao"));

    toastLog("学习助手pro配置恢复默认！");
});

// 读取脚本设置
function Initialize() {
    ui.ttxs_pro_pushplus1.setText(TTXS_PRO_CONFIG.get("pushplus1", ""));
    ui.ttxs_pro_定时停止运行时间.setChecked(TTXS_PRO_CONFIG.get("定时停止运行时间", false));
    ui.定时1.setText(TTXS_PRO_CONFIG.get("时", ""));
    ui.定时2.setText(TTXS_PRO_CONFIG.get("分", ""));
    ui.ttxs_pro_定时启动运行时间.setChecked(TTXS_PRO_CONFIG.get("定时启动运行时间", false));
    ui.定时3.setText(TTXS_PRO_CONFIG.get("3时", ""));
    ui.定时4.setText(TTXS_PRO_CONFIG.get("4分", ""));

    ui.script_chosen.setSelection(GLOBAL_CONFIG.get("script_chosen", 0));

    ui.ttxs_pro_watchdog.setText(TTXS_PRO_CONFIG.get("watchdog", "1800"));
    ui.ttxs_pro_slide_verify.setText(TTXS_PRO_CONFIG.get("slide_verify", "300"));
    ui.ttxs_pro_fast_mode.setChecked(TTXS_PRO_CONFIG.get("fast_mode", false));
    ui.ttxs_pro_ddtong.setChecked(TTXS_PRO_CONFIG.get("ddtong", false));
    ui.ttxs_pro_is_exit.setChecked(TTXS_PRO_CONFIG.get("is_exit", true));
    ui.ttxs_pro_pinglun.setChecked(TTXS_PRO_CONFIG.get("pinglun", true));
    ui.ttxs_pro_comment.setText(TTXS_PRO_CONFIG.get("comment", "为人民服务|共同发展，加油|相互尊重、和平发展|加油厉害我的国|一切为民，实干就对了|努力奋进，服务为民"));
    ui.ttxs_pro_shipin.setChecked(TTXS_PRO_CONFIG.get("shipin", true));
    ui.ttxs_pro_wenzhang.setChecked(TTXS_PRO_CONFIG.get("wenzhang", true));
    ui.ttxs_pro_meiri.setChecked(TTXS_PRO_CONFIG.get("meiri", true));
    //  ui.ttxs_pro_meizhou.setSelection(TTXS_PRO_CONFIG.get("meizhou", 0));
    // ui.ttxs_pro_zhuanxiang.setSelection(TTXS_PRO_CONFIG.get("zhuanxiang", 0));
    //ui.ttxs_pro_tiaozhan.setChecked(TTXS_PRO_CONFIG.get("tiaozhan", true));
    ui.ttxs_pro_ocr_choice.setSelection(TTXS_PRO_CONFIG.get("ocr_choice", 2));
    ui.ttxs_pro_ocr_maxtime.setText(TTXS_PRO_CONFIG.get("ocr_maxtime", "5000"));
    ui.ttxs_pro_duizhan_mode.setSelection(TTXS_PRO_CONFIG.get("duizhan_mode", 0));
    ui.ttxs_pro_jisu.setText(TTXS_PRO_CONFIG.get("jisu", "0"));
    // ui.ttxs_pro_guaji.setChecked(TTXS_PRO_CONFIG.get("guaji", true));
    ui.ttxs_pro_quweidati.setChecked(TTXS_PRO_CONFIG.get("quweidati", true));
    // ui.ttxs_pro_dacuo_num.setText(TTXS_PRO_CONFIG.get("dacuo_num", "0"));
    // ui.ttxs_pro_shuangren.setChecked(TTXS_PRO_CONFIG.get("shuangren", true));
    ui.ttxs_pro_bendi.setChecked(TTXS_PRO_CONFIG.get("bendi", true));
    ui.ttxs_pro_dingyue.setSelection(TTXS_PRO_CONFIG.get("dingyue", 0));
    ui.ttxs_pro_pushplus.setText(TTXS_PRO_CONFIG.get("pushplus", ""));
    ui.ttxs_pro_yl_on.setChecked(TTXS_PRO_CONFIG.get("yl_on", false));
    ui.ttxs_pro_yinliang.setText(TTXS_PRO_CONFIG.get("yinliang", "0"));
    ui.ttxs_pro_zhanghao.setText(TTXS_PRO_CONFIG.get("zhanghao", ""));
}

// 检查百度API
function check_baidu_api() {
    thread = threads.start(function() {
        let AK = String(ui.study_AK.getText());
        let SK = String(ui.study_SK.getText());
        var res = http.post(
            'https://aip.baidubce.com/oauth/2.0/token', {
                grant_type: 'client_credentials',
                client_id: AK,
                client_secret: SK
            }
        ).body.json();
        if ("error" in res) {
            toastLog("API Key或Secret Key存在错误");
            console.log(AK);
            console.log(SK);
            ui.study_AK.setText(BAIDUAPI.get("AK", ""));
            ui.study_SK.setText(BAIDUAPI.get("SK", ""));
            BAIDUAPI.put("AK", "");
            BAIDUAPI.put("SK", "");
        } else {
            toastLog("API Key、Secret Key正确，且已缓存");
            BAIDUAPI.put("AK", AK);
            BAIDUAPI.put("SK", SK);
        }
    });
}

// APP更新提示
function checkversion() {
    var releaseNotes = "版本 v" + latest_version + "\n" +
        "更新日志:\n" +
        "* 1.增加防检测模块，一键完成，可多号 \n" +
        "* 2.调整默认OCR为第三方插件 OCR\n" +
        "* 3.MLKitOCR文字识别修复\n" +
        "* 4.视频视听文章评论每日趣味答题已修复\n" +
        "* 5.更新卡密系统，使用前请在脚本配置页面，输入卡密保存\n"

    dialogs.build({
            title: "发现新版本，关注公众号：学已致用了   发送：学习助手",
            content: releaseNotes,
            // positive: "立即下载",
            negative: "取消",
            neutral: "浏览器下载",
            checkBoxPrompt: "不再提示",
            cancelable: false
        })
        .on("positive", () => {
            download(apkurl);
        })
        .on("neutral", () => {
            app.openUrl(apkurl);
        })
        .on("check", (checked) => {
            GLOBAL_CONFIG.put("NO_UPDATE", 1);
        }).show();
}

// 打开下载进度面板
function download(url) {
    downloadDialog = dialogs.build({
        title: "正在下载...",
        progress: {
            max: 100,
            showMinMax: true
        },
        autoDismiss: false,
        cancelable: false
    }).show();
    startDownload(url);
}

// 下载apk的主方法体
function startDownload(url) {
    threads.start(function() {
        var path = files.cwd() + "/new.apk";
        let apkFile = new File(path);
        var conn = new URL(url).openConnection();
        conn.connect();
        let is = conn.getInputStream();
        let length = conn.getContentLength();
        let fos = new FileOutputStream(apkFile);
        let count = 0;
        let buffer = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 1024);
        while (true) {
            var p = ((count / length) * 100);
            let numread = is.read(buffer);
            count += numread;
            // 下载完成
            if (numread < 0) {
                toast("下载完成");
                downloadDialog.dismiss();
                downloadDialog = null;
                break;
            }
            // 更新进度条
            downloadDialog.setProgress(p);
            fos.write(buffer, 0, numread);
        }
        fos.close();
        is.close();
        //自动打开进行安装
        app.viewFile(path);
    })
}

function getScript(choice) {
    let url_prefix = [
        'https://jiaoben.xiaogezy.cn/wuyazhong2022/Qg-Xxzs/main/',
        // 'https://raw.gitmirror.com/wuyazhong2022/Qg-Xxzs/main/',
    ];

    for (var i = 0; i < url_prefix.length; i++) {
        try {
            let res = http.get(url_prefix[i] + choice + ".js");
            console.log(i, ":" + res.statusCode);
            if (res.statusCode == 200) {
                var UI = res.body.string();
                if (UI.indexOf('auto.waitFor();') == 0) break;
            } else {
                toastLog('学习脚本:地址' + i + '下载失败');
            }
        } catch (error) {
            console.log(error);
        }
    }
    return UI;
}