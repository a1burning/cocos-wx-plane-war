
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/BtnControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0af79qYFDFOeKBhcP4L879A', 'BtnControl');
// Script/BtnControl.ts

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
 * 按钮一开始就监听点击事件，点击后重启游戏
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BtnControl = /** @class */ (function (_super) {
    __extends(BtnControl, _super);
    function BtnControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BtnControl.prototype.start = function () {
        // 设置按钮的点击事件
        this.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            // 重启游戏
            cc.game.restart();
        });
    };
    BtnControl = __decorate([
        ccclass
    ], BtnControl);
    return BtnControl;
}(cc.Component));
exports.default = BtnControl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQnRuQ29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNHLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXdDLDhCQUFZO0lBQXBEOztJQVdBLENBQUM7SUFURywwQkFBSyxHQUFMO1FBQ0ksWUFBWTtRQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRTtZQUN2QyxPQUFPO1lBQ1AsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFSZ0IsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQVc5QjtJQUFELGlCQUFDO0NBWEQsQUFXQyxDQVh1QyxFQUFFLENBQUMsU0FBUyxHQVduRDtrQkFYb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog5oyJ6ZKu5LiA5byA5aeL5bCx55uR5ZCs54K55Ye75LqL5Lu277yM54K55Ye75ZCO6YeN5ZCv5ri45oiPXG4gKi9cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnRuQ29udHJvbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIC8vIOiuvue9ruaMiemSrueahOeCueWHu+S6i+S7tlxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgKCkgPT4ge1xuICAgICAgICAgICAgLy8g6YeN5ZCv5ri45oiPXG4gICAgICAgICAgICBjYy5nYW1lLnJlc3RhcnQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==