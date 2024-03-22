
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/BgControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '023c0Ja7wRGWL/sSJJoIXwO', 'BgControl');
// Script/BgControl.ts

"use strict";
/**
 * 首先屏幕是竖向的，背景图片的大小是 480 * 852，所以画布是480 * 800
 * 飞机要做成向前运动的，那么只要背景向下移动就可以了
 * 这个时候需要两个背景，一个在上面，一个在下面，然后交替移动就可以有背景不挺向下移动的效果
 *
 * 在背景图片中，拖出两个到层级管理器，为background1和background2
 * 设置background1的位置为（240,410）
 * 在background1上创建一个空节点（如果在外层，那么他们的相对位置是画布的(0, 0)，如果是在background1节点上创建，那么起点位置是相对于background1的（240,410））
 * 然后将两个background1和background2都挂载到空节点下面，设置background1的位置设置为（0,0），background2的位置为（0,852），正好一个图片的高度
 * 因为两个背景都做的同一个动作，那么在空节点上创建脚本即可，在assets下面添加文件夹Script，添加BgControl脚本，然后将脚本挂载到空节点上
 * 下面进行脚本编辑。
 *
 * 背景的脚本编辑：
 * 1. 首先在脚本中添加一个update方法，这个方法是每一帧都会调用的，所以在这个方法中实现背景的移动
 * 2. 首先在update方法中打印一下this.node.children，这个是当前节点的所有子节点，可以看到两个背景节点
 * 3. 遍历子节点，然后移动
 * 4. 移动的时候，需要注意的是，移动的单位是帧，所以需要乘以dt，dt是每一帧的时间，单位是秒
 * 5. 移动的时候，需要注意的是，如果向下出屏幕了，就移动到上面（实现无限循环）
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BgControl = /** @class */ (function (_super) {
    __extends(BgControl, _super);
    function BgControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BgControl.prototype.start = function () { };
    BgControl.prototype.update = function (dt) {
        // 移动
        // 遍历子节点（背景）
        for (var _i = 0, _a = this.node.children; _i < _a.length; _i++) {
            var bgNode = _a[_i];
            // 移动 帧单位改为秒
            bgNode.y -= 50 * dt;
            // // 如果向下出屏幕了，就移动到上面
            if (bgNode.y < -850) {
                bgNode.y += 852 * 2;
            }
        }
    };
    BgControl = __decorate([
        ccclass
    ], BgControl);
    return BgControl;
}(cc.Component));
exports.default = BgControl;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQmdDb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0JHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF1Qyw2QkFBWTtJQUFuRDs7SUFnQkEsQ0FBQztJQWRHLHlCQUFLLEdBQUwsY0FBVSxDQUFDO0lBRVgsMEJBQU0sR0FBTixVQUFRLEVBQUU7UUFDTixLQUFLO1FBQ0wsWUFBWTtRQUNaLEtBQWtCLFVBQWtCLEVBQWxCLEtBQUEsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQWxCLGNBQWtCLEVBQWxCLElBQWtCLEVBQUU7WUFBbEMsSUFBSSxNQUFNLFNBQUE7WUFDVixZQUFZO1lBQ1osTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ3BCLHFCQUFxQjtZQUNyQixJQUFJLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pCLE1BQU0sQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQzthQUN2QjtTQUNKO0lBQ0wsQ0FBQztJQWZnQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBZ0I3QjtJQUFELGdCQUFDO0NBaEJELEFBZ0JDLENBaEJzQyxFQUFFLENBQUMsU0FBUyxHQWdCbEQ7a0JBaEJvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDpppblhYjlsY/luZXmmK/nq5blkJHnmoTvvIzog4zmma/lm77niYfnmoTlpKflsI/mmK8gNDgwICogODUy77yM5omA5Lul55S75biD5pivNDgwICogODAwXG4gKiDpo57mnLropoHlgZrmiJDlkJHliY3ov5DliqjnmoTvvIzpgqPkuYjlj6ropoHog4zmma/lkJHkuIvnp7vliqjlsLHlj6/ku6XkuoZcbiAqIOi/meS4quaXtuWAmemcgOimgeS4pOS4quiDjOaZr++8jOS4gOS4quWcqOS4iumdou+8jOS4gOS4quWcqOS4i+mdou+8jOeEtuWQjuS6pOabv+enu+WKqOWwseWPr+S7peacieiDjOaZr+S4jeaMuuWQkeS4i+enu+WKqOeahOaViOaenFxuICogXG4gKiDlnKjog4zmma/lm77niYfkuK3vvIzmi5blh7rkuKTkuKrliLDlsYLnuqfnrqHnkIblmajvvIzkuLpiYWNrZ3JvdW5kMeWSjGJhY2tncm91bmQyXG4gKiDorr7nva5iYWNrZ3JvdW5kMeeahOS9jee9ruS4uu+8iDI0MCw0MTDvvIlcbiAqIOWcqGJhY2tncm91bmQx5LiK5Yib5bu65LiA5Liq56m66IqC54K577yI5aaC5p6c5Zyo5aSW5bGC77yM6YKj5LmI5LuW5Lus55qE55u45a+55L2N572u5piv55S75biD55qEKDAsIDAp77yM5aaC5p6c5piv5ZyoYmFja2dyb3VuZDHoioLngrnkuIrliJvlu7rvvIzpgqPkuYjotbfngrnkvY3nva7mmK/nm7jlr7nkuo5iYWNrZ3JvdW5kMeeahO+8iDI0MCw0MTDvvInvvIlcbiAqIOeEtuWQjuWwhuS4pOS4qmJhY2tncm91bmQx5ZKMYmFja2dyb3VuZDLpg73mjILovb3liLDnqbroioLngrnkuIvpnaLvvIzorr7nva5iYWNrZ3JvdW5kMeeahOS9jee9ruiuvue9ruS4uu+8iDAsMO+8ie+8jGJhY2tncm91bmQy55qE5L2N572u5Li677yIMCw4NTLvvInvvIzmraPlpb3kuIDkuKrlm77niYfnmoTpq5jluqZcbiAqIOWboOS4uuS4pOS4quiDjOaZr+mDveWBmueahOWQjOS4gOS4quWKqOS9nO+8jOmCo+S5iOWcqOepuuiKgueCueS4iuWIm+W7uuiEmuacrOWNs+WPr++8jOWcqGFzc2V0c+S4i+mdoua3u+WKoOaWh+S7tuWkuVNjcmlwdO+8jOa3u+WKoEJnQ29udHJvbOiEmuacrO+8jOeEtuWQjuWwhuiEmuacrOaMgui9veWIsOepuuiKgueCueS4ilxuICog5LiL6Z2i6L+b6KGM6ISa5pys57yW6L6R44CCXG4gKiBcbiAqIOiDjOaZr+eahOiEmuacrOe8lui+ke+8mlxuICogMS4g6aaW5YWI5Zyo6ISa5pys5Lit5re75Yqg5LiA5LiqdXBkYXRl5pa55rOV77yM6L+Z5Liq5pa55rOV5piv5q+P5LiA5bin6YO95Lya6LCD55So55qE77yM5omA5Lul5Zyo6L+Z5Liq5pa55rOV5Lit5a6e546w6IOM5pmv55qE56e75YqoXG4gKiAyLiDpppblhYjlnKh1cGRhdGXmlrnms5XkuK3miZPljbDkuIDkuIt0aGlzLm5vZGUuY2hpbGRyZW7vvIzov5nkuKrmmK/lvZPliY3oioLngrnnmoTmiYDmnInlrZDoioLngrnvvIzlj6/ku6XnnIvliLDkuKTkuKrog4zmma/oioLngrlcbiAqIDMuIOmBjeWOhuWtkOiKgueCue+8jOeEtuWQjuenu+WKqFxuICogNC4g56e75Yqo55qE5pe25YCZ77yM6ZyA6KaB5rOo5oSP55qE5piv77yM56e75Yqo55qE5Y2V5L2N5piv5bin77yM5omA5Lul6ZyA6KaB5LmY5LulZHTvvIxkdOaYr+avj+S4gOW4p+eahOaXtumXtO+8jOWNleS9jeaYr+enklxuICogNS4g56e75Yqo55qE5pe25YCZ77yM6ZyA6KaB5rOo5oSP55qE5piv77yM5aaC5p6c5ZCR5LiL5Ye65bGP5bmV5LqG77yM5bCx56e75Yqo5Yiw5LiK6Z2i77yI5a6e546w5peg6ZmQ5b6q546v77yJXG4gKi9cblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCZ0NvbnRyb2wgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgc3RhcnQgKCkge31cblxuICAgIHVwZGF0ZSAoZHQpIHtcbiAgICAgICAgLy8g56e75YqoXG4gICAgICAgIC8vIOmBjeWOhuWtkOiKgueCue+8iOiDjOaZr++8iVxuICAgICAgICBmb3IobGV0IGJnTm9kZSBvZiB0aGlzLm5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIC8vIOenu+WKqCDluKfljZXkvY3mlLnkuLrnp5JcbiAgICAgICAgICAgIGJnTm9kZS55IC09IDUwICogZHQ7XG4gICAgICAgICAgICAvLyAvLyDlpoLmnpzlkJHkuIvlh7rlsY/luZXkuobvvIzlsLHnp7vliqjliLDkuIrpnaJcbiAgICAgICAgICAgIGlmIChiZ05vZGUueSA8IC04NTApIHtcbiAgICAgICAgICAgICAgICBiZ05vZGUueSArPSA4NTIgKiAyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19