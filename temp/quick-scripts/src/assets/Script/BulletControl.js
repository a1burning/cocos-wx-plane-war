"use strict";
cc._RF.push(module, '577341PezJHXavIOLJ+xNa4', 'BulletControl');
// Script/BulletControl.ts

"use strict";
/**
 * 子弹控制脚本
 * 创建子弹到层级管理器，逻辑就是，创建子弹，子弹垂直向上运动。
 * 子弹移动到屏幕外面，就销毁，子弹碰到敌机，自己销毁敌机销毁。
 * 所以要创建碰撞组件，Boxcollider
 * 然后创建子弹脚本BulletControl，然后挂载到子弹上面。
 *
 * 玩家创建子弹的逻辑写完，需要进行子弹本身属性的编写
 * 更新的时候，要移动，然后判断是否出了屏幕，如果出了屏幕就销毁。
 *
 * 然后需要添加碰撞检测，如果碰到敌机，销毁敌机，销毁自己。
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
var EnemyControl_1 = require("./EnemyControl");
var ScoreControl_1 = require("./ScoreControl");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BulletControl = /** @class */ (function (_super) {
    __extends(BulletControl, _super);
    function BulletControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 800;
        return _this;
    }
    BulletControl.prototype.start = function () {
    };
    BulletControl.prototype.update = function (dt) {
        // 移动
        this.node.y += this.speed * dt;
        // 如果出了屏幕需要销毁
        if (this.node.y > 820) {
            this.node.destroy();
        }
    };
    // 碰撞检测方法，other是敌人
    BulletControl.prototype.onCollisionEnter = function (other, self) {
        // 如果碰到敌人，销毁自己，让敌人死亡
        // 在敌人的碰撞组件中，添加tag为1，表示是敌人
        if (other.tag == 1) {
            // 获取分数节点，调用分数节点的addScore方法
            var scoreNode = cc.director.getScene().getChildByName('score');
            scoreNode && scoreNode.getComponent(ScoreControl_1.default).addScore();
            // 销毁敌人
            // 获取敌人的脚本，调用敌人的脚本的die方法
            other.getComponent(EnemyControl_1.default).die();
            // 销毁自己
            this.node.destroy();
        }
    };
    __decorate([
        property
    ], BulletControl.prototype, "speed", void 0);
    BulletControl = __decorate([
        ccclass
    ], BulletControl);
    return BulletControl;
}(cc.Component));
exports.default = BulletControl;

cc._RF.pop();