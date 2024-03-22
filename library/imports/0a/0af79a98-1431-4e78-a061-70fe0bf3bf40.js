"use strict";
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