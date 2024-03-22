
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/PlayerControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6587f6zJ8lC9YkBHrw/+N5s', 'PlayerControl');
// Script/PlayerControl.ts

"use strict";
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
/**
 * 创建一个玩家，拖拽飞机资源到层级编辑器，然后拖拽飞机到屏幕中间。
 * 现在需要给飞机添加左右拖拽的效果，
 * 创建一个脚本PlayerControl.ts，将脚本挂载到飞机上
 * 双击脚本编写移动的逻辑
 *
 * 创建完子弹脚本之后，这里要进行攻击的逻辑
 * 首先要加入计时器schedule，每隔0.5s间就创建一个子弹
 * 然后需要将子弹创建一个预设体
 * 在脚本中添加一个property，然后将预设体拖拽到PlayerControl属性上
 * 然后编写攻击的逻辑
 *
 * 在敌人脚本写完die的方法之后，需要在玩家这里开启碰撞检测功能
 */
var EnemyManager_1 = require("./EnemyManager");
var ScoreControl_1 = require("./ScoreControl");
var BtnManager_1 = require("./BtnManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayerControl = /** @class */ (function (_super) {
    __extends(PlayerControl, _super);
    function PlayerControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bulletPre = null;
        return _this;
    }
    PlayerControl.prototype.start = function () {
        var _this = this;
        // 移动
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            // 触摸移动
            // event.getLocation() 获取当前触摸点的位置
            // this.node.setPosition 设置飞机的位置
            _this.node.setPosition(event.getLocation());
        });
        // 攻击 计时器
        // this.schedule(callback, interval, repeat, delay);
        // callback 回调函数
        // interval 间隔时间 - 秒
        // repeat 重复次数，默认一直重复
        // delay 延迟时间 - 秒（如果设置为0，则开始瞬间就会调用）
        this.schedule(function () {
            // 创建子弹
            // cc.instantiate 创建一个预设体
            var bullet = cc.instantiate(_this.bulletPre);
            // 设置父物体
            // cc.director.getScene() 获取当前场景
            // bullet.setParent 设置子弹的父物体
            bullet.setParent(cc.director.getScene());
            // 设置子弹的位置
            bullet.x = _this.node.x;
            // 设置子弹的y坐标
            // this.node.y 获取飞机的y坐标, 飞机的高度是81，所以这里加60
            bullet.y = _this.node.y + 60;
        }, 0.5);
        // 开启碰撞检测
        cc.director.getCollisionManager().enabled = true;
    };
    // 碰撞检测方法，other是敌人
    PlayerControl.prototype.onCollisionEnter = function (other, self) {
        // 如果碰到敌人，销毁自己，让敌人死亡
        // 在敌人的碰撞组件中，添加tag为1，表示是敌人
        if (other.tag == 1) {
            // 不让敌人再创建
            // 获取敌人管理的脚本，调用敌人管理的脚本的stop方法
            var enemyManagerNode = cc.director.getScene().getChildByName('enemyManager');
            enemyManagerNode && enemyManagerNode.getComponent(EnemyManager_1.default).stop();
            // 销毁自己
            this.die();
        }
    };
    // 销毁自己
    PlayerControl.prototype.die = function () {
        var _this = this;
        // 动态加载爆炸图片
        cc.loader.loadRes('hero1_die', cc.SpriteFrame, function (err, spriteFrame) {
            // 将爆炸图片设置到自己节点上
            // 得到自己节点的Sprite组件，然后设置spriteFrame
            _this.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
            // 300ms后销毁
            setTimeout(function () {
                _this.node.destroy();
                // 展示最终分数
                var scoreNode = cc.director.getScene().getChildByName('score');
                scoreNode && scoreNode.getComponent(ScoreControl_1.default).stop();
                // 展示按钮
                var btnNode = cc.director.getScene().getChildByName('btn');
                btnNode && btnNode.getComponent(BtnManager_1.default).show();
            }, 300);
        });
    };
    PlayerControl.prototype.update = function (dt) { };
    __decorate([
        property(cc.Prefab)
    ], PlayerControl.prototype, "bulletPre", void 0);
    PlayerControl = __decorate([
        ccclass
    ], PlayerControl);
    return PlayerControl;
}(cc.Component));
exports.default = PlayerControl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvUGxheWVyQ29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7OztHQWFHO0FBQ0gsK0NBQTBDO0FBQzFDLCtDQUEwQztBQUMxQywyQ0FBc0M7QUFDaEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBMkMsaUNBQVk7SUFBdkQ7UUFBQSxxRUF5RUM7UUF2RUcsZUFBUyxHQUFjLElBQUksQ0FBQzs7SUF1RWhDLENBQUM7SUFyRUcsNkJBQUssR0FBTDtRQUFBLGlCQWdDQztRQS9CRyxLQUFLO1FBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFVBQUMsS0FBSztZQUM3QyxPQUFPO1lBQ1AsaUNBQWlDO1lBQ2pDLGdDQUFnQztZQUNoQyxLQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQztRQUVILFNBQVM7UUFDVCxvREFBb0Q7UUFDcEQsZ0JBQWdCO1FBQ2hCLG9CQUFvQjtRQUNwQixxQkFBcUI7UUFDckIsbUNBQW1DO1FBQ25DLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDVixPQUFPO1lBQ1AseUJBQXlCO1lBQ3pCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzVDLFFBQVE7WUFDUixnQ0FBZ0M7WUFDaEMsNEJBQTRCO1lBQzVCLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ3pDLFVBQVU7WUFDVixNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLFdBQVc7WUFDWCx5Q0FBeUM7WUFDekMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDaEMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRVIsU0FBUztRQUNULEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3JELENBQUM7SUFFRCxrQkFBa0I7SUFDbEIsd0NBQWdCLEdBQWhCLFVBQWlCLEtBQUssRUFBRSxJQUFJO1FBQ3hCLG9CQUFvQjtRQUNwQiwwQkFBMEI7UUFDMUIsSUFBRyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRTtZQUNmLFVBQVU7WUFDViw2QkFBNkI7WUFDN0IsSUFBTSxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUMvRSxnQkFBZ0IsSUFBSSxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsc0JBQVksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3ZFLE9BQU87WUFDUCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDZDtJQUNMLENBQUM7SUFFRCxPQUFPO0lBQ1AsMkJBQUcsR0FBSDtRQUFBLGlCQWlCQztRQWhCRyxXQUFXO1FBQ1gsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBQyxHQUFHLEVBQUUsV0FBVztZQUM1RCxnQkFBZ0I7WUFDaEIsa0NBQWtDO1lBQ2xDLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1lBQzVELFdBQVc7WUFDWCxVQUFVLENBQUM7Z0JBQ1AsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDcEIsU0FBUztnQkFDVCxJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDakUsU0FBUyxJQUFJLFNBQVMsQ0FBQyxZQUFZLENBQUMsc0JBQVksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN6RCxPQUFPO2dCQUNQLElBQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM3RCxPQUFPLElBQUksT0FBTyxDQUFDLFlBQVksQ0FBQyxvQkFBVSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDdkQsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1osQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsOEJBQU0sR0FBTixVQUFRLEVBQUUsSUFBRyxDQUFDO0lBdEVkO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0RBQ1E7SUFGWCxhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBeUVqQztJQUFELG9CQUFDO0NBekVELEFBeUVDLENBekUwQyxFQUFFLENBQUMsU0FBUyxHQXlFdEQ7a0JBekVvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDliJvlu7rkuIDkuKrnjqnlrrbvvIzmi5bmi73po57mnLrotYTmupDliLDlsYLnuqfnvJbovpHlmajvvIznhLblkI7mi5bmi73po57mnLrliLDlsY/luZXkuK3pl7TjgIJcbiAqIOeOsOWcqOmcgOimgee7memjnuacuua3u+WKoOW3puWPs+aLluaLveeahOaViOaenO+8jFxuICog5Yib5bu65LiA5Liq6ISa5pysUGxheWVyQ29udHJvbC50c++8jOWwhuiEmuacrOaMgui9veWIsOmjnuacuuS4ilxuICog5Y+M5Ye76ISa5pys57yW5YaZ56e75Yqo55qE6YC76L6RXG4gKiBcbiAqIOWIm+W7uuWujOWtkOW8ueiEmuacrOS5i+WQju+8jOi/memHjOimgei/m+ihjOaUu+WHu+eahOmAu+i+kVxuICog6aaW5YWI6KaB5Yqg5YWl6K6h5pe25Zmoc2NoZWR1bGXvvIzmr4/pmpQwLjVz6Ze05bCx5Yib5bu65LiA5Liq5a2Q5by5XG4gKiDnhLblkI7pnIDopoHlsIblrZDlvLnliJvlu7rkuIDkuKrpooTorr7kvZNcbiAqIOWcqOiEmuacrOS4rea3u+WKoOS4gOS4qnByb3BlcnR577yM54S25ZCO5bCG6aKE6K6+5L2T5ouW5ou95YiwUGxheWVyQ29udHJvbOWxnuaAp+S4ilxuICog54S25ZCO57yW5YaZ5pS75Ye755qE6YC76L6RXG4gKiBcbiAqIOWcqOaVjOS6uuiEmuacrOWGmeWujGRpZeeahOaWueazleS5i+WQju+8jOmcgOimgeWcqOeOqeWutui/memHjOW8gOWQr+eisOaSnuajgOa1i+WKn+iDvVxuICovXG5pbXBvcnQgRW5lbXlNYW5hZ2VyIGZyb20gXCIuL0VuZW15TWFuYWdlclwiO1xuaW1wb3J0IFNjb3JlQ29udHJvbCBmcm9tIFwiLi9TY29yZUNvbnRyb2xcIjtcbmltcG9ydCBCdG5NYW5hZ2VyIGZyb20gXCIuL0J0bk1hbmFnZXJcIjtcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyQ29udHJvbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBidWxsZXRQcmU6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIC8vIOenu+WKqFxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAvLyDop6bmkbjnp7vliqhcbiAgICAgICAgICAgIC8vIGV2ZW50LmdldExvY2F0aW9uKCkg6I635Y+W5b2T5YmN6Kem5pG454K555qE5L2N572uXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuc2V0UG9zaXRpb24g6K6+572u6aOe5py655qE5L2N572uXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oZXZlbnQuZ2V0TG9jYXRpb24oKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIOaUu+WHuyDorqHml7blmahcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZShjYWxsYmFjaywgaW50ZXJ2YWwsIHJlcGVhdCwgZGVsYXkpO1xuICAgICAgICAvLyBjYWxsYmFjayDlm57osIPlh73mlbBcbiAgICAgICAgLy8gaW50ZXJ2YWwg6Ze06ZqU5pe26Ze0IC0g56eSXG4gICAgICAgIC8vIHJlcGVhdCDph43lpI3mrKHmlbDvvIzpu5jorqTkuIDnm7Tph43lpI1cbiAgICAgICAgLy8gZGVsYXkg5bu26L+f5pe26Ze0IC0g56eS77yI5aaC5p6c6K6+572u5Li6MO+8jOWImeW8gOWni+eerOmXtOWwseS8muiwg+eUqO+8iVxuICAgICAgICB0aGlzLnNjaGVkdWxlKCgpID0+IHtcbiAgICAgICAgICAgIC8vIOWIm+W7uuWtkOW8uVxuICAgICAgICAgICAgLy8gY2MuaW5zdGFudGlhdGUg5Yib5bu65LiA5Liq6aKE6K6+5L2TXG4gICAgICAgICAgICBsZXQgYnVsbGV0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5idWxsZXRQcmUpO1xuICAgICAgICAgICAgLy8g6K6+572u54i254mp5L2TXG4gICAgICAgICAgICAvLyBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpIOiOt+WPluW9k+WJjeWcuuaZr1xuICAgICAgICAgICAgLy8gYnVsbGV0LnNldFBhcmVudCDorr7nva7lrZDlvLnnmoTniLbniankvZNcbiAgICAgICAgICAgIGJ1bGxldC5zZXRQYXJlbnQoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKSk7XG4gICAgICAgICAgICAvLyDorr7nva7lrZDlvLnnmoTkvY3nva5cbiAgICAgICAgICAgIGJ1bGxldC54ID0gdGhpcy5ub2RlLng7XG4gICAgICAgICAgICAvLyDorr7nva7lrZDlvLnnmoR55Z2Q5qCHXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUueSDojrflj5bpo57mnLrnmoR55Z2Q5qCHLCDpo57mnLrnmoTpq5jluqbmmK84Me+8jOaJgOS7pei/memHjOWKoDYwXG4gICAgICAgICAgICBidWxsZXQueSA9IHRoaXMubm9kZS55ICsgNjA7XG4gICAgICAgIH0sIDAuNSk7XG5cbiAgICAgICAgLy8g5byA5ZCv56Kw5pKe5qOA5rWLXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyDnorDmkp7mo4DmtYvmlrnms5XvvIxvdGhlcuaYr+aVjOS6ulxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIHtcbiAgICAgICAgLy8g5aaC5p6c56Kw5Yiw5pWM5Lq677yM6ZSA5q+B6Ieq5bex77yM6K6p5pWM5Lq65q275LqhXG4gICAgICAgIC8vIOWcqOaVjOS6uueahOeisOaSnue7hOS7tuS4re+8jOa3u+WKoHRhZ+S4ujHvvIzooajnpLrmmK/mlYzkurpcbiAgICAgICAgaWYob3RoZXIudGFnID09IDEpIHtcbiAgICAgICAgICAgIC8vIOS4jeiuqeaVjOS6uuWGjeWIm+W7ulxuICAgICAgICAgICAgLy8g6I635Y+W5pWM5Lq6566h55CG55qE6ISa5pys77yM6LCD55So5pWM5Lq6566h55CG55qE6ISa5pys55qEc3RvcOaWueazlVxuICAgICAgICAgICAgY29uc3QgZW5lbXlNYW5hZ2VyTm9kZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuZ2V0Q2hpbGRCeU5hbWUoJ2VuZW15TWFuYWdlcicpO1xuICAgICAgICAgICAgZW5lbXlNYW5hZ2VyTm9kZSAmJiBlbmVteU1hbmFnZXJOb2RlLmdldENvbXBvbmVudChFbmVteU1hbmFnZXIpLnN0b3AoKTtcbiAgICAgICAgICAgIC8vIOmUgOavgeiHquW3sVxuICAgICAgICAgICAgdGhpcy5kaWUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOmUgOavgeiHquW3sVxuICAgIGRpZSgpIHtcbiAgICAgICAgLy8g5Yqo5oCB5Yqg6L2954iG54K45Zu+54mHXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdoZXJvMV9kaWUnLCBjYy5TcHJpdGVGcmFtZSwgKGVyciwgc3ByaXRlRnJhbWUpID0+IHtcbiAgICAgICAgICAgIC8vIOWwhueIhueCuOWbvueJh+iuvue9ruWIsOiHquW3seiKgueCueS4ilxuICAgICAgICAgICAgLy8g5b6X5Yiw6Ieq5bex6IqC54K555qEU3ByaXRl57uE5Lu277yM54S25ZCO6K6+572uc3ByaXRlRnJhbWVcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICAgICAgLy8gMzAwbXPlkI7plIDmr4FcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgLy8g5bGV56S65pyA57uI5YiG5pWwXG4gICAgICAgICAgICAgICAgY29uc3Qgc2NvcmVOb2RlID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5nZXRDaGlsZEJ5TmFtZSgnc2NvcmUnKTtcbiAgICAgICAgICAgICAgICBzY29yZU5vZGUgJiYgc2NvcmVOb2RlLmdldENvbXBvbmVudChTY29yZUNvbnRyb2wpLnN0b3AoKTtcbiAgICAgICAgICAgICAgICAvLyDlsZXnpLrmjInpkq5cbiAgICAgICAgICAgICAgICBjb25zdCBidG5Ob2RlID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5nZXRDaGlsZEJ5TmFtZSgnYnRuJyk7XG4gICAgICAgICAgICAgICAgYnRuTm9kZSAmJiBidG5Ob2RlLmdldENvbXBvbmVudChCdG5NYW5hZ2VyKS5zaG93KCk7XG4gICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=