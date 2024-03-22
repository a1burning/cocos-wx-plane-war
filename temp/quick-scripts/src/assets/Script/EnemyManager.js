"use strict";
cc._RF.push(module, '5e7e59AQipB4IzayCn+IjdB', 'EnemyManager');
// Script/EnemyManager.ts

"use strict";
/**
 * 在敌机节点上创建一个新的空节点，取名为enemyManager（这样可以保持空节点和敌机节点的中心位置重合），将空节点拖出和敌机节点同级。
 * 将敌机节点拖动到资源管理器保存为预设体
 * 一开始敌机不存在画面中，所以删除敌机节点
 * 创建EnemyManager.ts组件，将其挂载到enemyManager节点下
 * 编辑组件脚本
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
var EnemyManager = /** @class */ (function (_super) {
    __extends(EnemyManager, _super);
    function EnemyManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 敌机预设体
        _this.enemyPrefab = null;
        return _this;
    }
    EnemyManager.prototype.start = function () {
        var _this = this;
        // 每个2s，创建一个敌机
        this.schedule(function () {
            // 创建敌机
            var enemy = cc.instantiate(_this.enemyPrefab);
            // 添加到父场景中
            enemy.setParent(cc.director.getScene());
            enemy.y = _this.node.y;
            // x坐标随机，20-420的随机数
            enemy.x = Math.random() * 400 + 20;
        }, 2);
    };
    EnemyManager.prototype.stop = function () {
        // 停止所有计时器
        this.unscheduleAllCallbacks();
    };
    EnemyManager.prototype.update = function (dt) { };
    __decorate([
        property(cc.Prefab)
    ], EnemyManager.prototype, "enemyPrefab", void 0);
    EnemyManager = __decorate([
        ccclass
    ], EnemyManager);
    return EnemyManager;
}(cc.Component));
exports.default = EnemyManager;

cc._RF.pop();