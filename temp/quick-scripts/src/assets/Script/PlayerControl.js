"use strict";
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