"use strict";
cc._RF.push(module, 'fd261oIFQFF5bEfq/dzoEAi', 'EnemyControl');
// Script/EnemyControl.ts

"use strict";
/**
 * 敌人控制脚本
 * 创建一个敌人的节点，添加碰撞组件，缩小碰撞范围
 * 然后添加脚本，挂载到敌人节点上
 *
 * 创建一个die的敌人死亡的方法，逻辑是子弹碰到就要销毁敌人节点
 *
 * die方法中，要动态加载爆炸图片，然后将爆炸图片设置到敌人节点上
 * 然后300ms后销毁敌人节点
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
var EnemyControl = /** @class */ (function (_super) {
    __extends(EnemyControl, _super);
    function EnemyControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 是否死亡
        _this.isDie = false;
        return _this;
    }
    EnemyControl.prototype.start = function () { };
    EnemyControl.prototype.update = function (dt) {
        // 移动
        // 如果没有死亡，就向下移动
        if (this.isDie === false) {
            this.node.y -= 300 * dt;
        }
        // 如果出了屏幕，就销毁
        if (this.node.y < -850) {
            this.node.destroy();
        }
    };
    // 死亡
    EnemyControl.prototype.die = function () {
        var _this = this;
        // 销毁自己
        // this.node.destroy();
        // 已经死亡
        this.isDie = true;
        // 动态加载爆炸图片
        cc.loader.loadRes('enemy0_die', cc.SpriteFrame, function (err, spriteFrame) {
            // 将爆炸图片设置到敌人节点上
            // 得到敌人节点的Sprite组件，然后设置spriteFrame
            _this.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
        // 300ms后销毁
        setTimeout(function () {
            _this.node.destroy();
        }, 300);
    };
    EnemyControl = __decorate([
        ccclass
    ], EnemyControl);
    return EnemyControl;
}(cc.Component));
exports.default = EnemyControl;

cc._RF.pop();