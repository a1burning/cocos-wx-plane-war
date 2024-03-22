
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/EnemyManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvRW5lbXlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVHLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBd0JDO1FBdkJHLFFBQVE7UUFFUixpQkFBVyxHQUFjLElBQUksQ0FBQzs7SUFxQmxDLENBQUM7SUFuQkcsNEJBQUssR0FBTDtRQUFBLGlCQVdDO1FBVkcsY0FBYztRQUNkLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDVixPQUFPO1lBQ1AsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDN0MsVUFBVTtZQUNWLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ3hDLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdEIsbUJBQW1CO1lBQ25CLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDdkMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ1QsQ0FBQztJQUVELDJCQUFJLEdBQUo7UUFDSSxVQUFVO1FBQ1YsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELDZCQUFNLEdBQU4sVUFBUSxFQUFFLElBQUcsQ0FBQztJQXBCZDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3FEQUNVO0lBSGIsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQXdCaEM7SUFBRCxtQkFBQztDQXhCRCxBQXdCQyxDQXhCeUMsRUFBRSxDQUFDLFNBQVMsR0F3QnJEO2tCQXhCb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog5Zyo5pWM5py66IqC54K55LiK5Yib5bu65LiA5Liq5paw55qE56m66IqC54K577yM5Y+W5ZCN5Li6ZW5lbXlNYW5hZ2Vy77yI6L+Z5qC35Y+v5Lul5L+d5oyB56m66IqC54K55ZKM5pWM5py66IqC54K555qE5Lit5b+D5L2N572u6YeN5ZCI77yJ77yM5bCG56m66IqC54K55ouW5Ye65ZKM5pWM5py66IqC54K55ZCM57qn44CCXG4gKiDlsIbmlYzmnLroioLngrnmi5bliqjliLDotYTmupDnrqHnkIblmajkv53lrZjkuLrpooTorr7kvZNcbiAqIOS4gOW8gOWni+aVjOacuuS4jeWtmOWcqOeUu+mdouS4re+8jOaJgOS7peWIoOmZpOaVjOacuuiKgueCuVxuICog5Yib5bu6RW5lbXlNYW5hZ2VyLnRz57uE5Lu277yM5bCG5YW25oyC6L295YiwZW5lbXlNYW5hZ2Vy6IqC54K55LiLXG4gKiDnvJbovpHnu4Tku7bohJrmnKxcbiAqL1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZW15TWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgLy8g5pWM5py66aKE6K6+5L2TXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBlbmVteVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8g5q+P5LiqMnPvvIzliJvlu7rkuIDkuKrmlYzmnLpcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgICAgICAvLyDliJvlu7rmlYzmnLpcbiAgICAgICAgICAgIGxldCBlbmVteSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZW5lbXlQcmVmYWIpO1xuICAgICAgICAgICAgLy8g5re75Yqg5Yiw54i25Zy65pmv5LitXG4gICAgICAgICAgICBlbmVteS5zZXRQYXJlbnQoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKSk7XG4gICAgICAgICAgICBlbmVteS55ID0gdGhpcy5ub2RlLnk7XG4gICAgICAgICAgICAvLyB45Z2Q5qCH6ZqP5py677yMMjAtNDIw55qE6ZqP5py65pWwXG4gICAgICAgICAgICBlbmVteS54ID0gTWF0aC5yYW5kb20oKSAqIDQwMCArIDIwO1xuICAgICAgICB9LCAyKVxuICAgIH1cblxuICAgIHN0b3AgKCkge1xuICAgICAgICAvLyDlgZzmraLmiYDmnInorqHml7blmahcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlIChkdCkge31cbn1cbiJdfQ==