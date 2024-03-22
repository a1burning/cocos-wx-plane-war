
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/BtnManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2b11dy+KANNxYjbpA9stbrR', 'BtnManager');
// Script/BtnManager.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 按钮预设体
        _this.btnPre = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.show = function () {
        // 创建按钮
        var btn = cc.instantiate(this.btnPre);
        // 添加到父场景中
        btn.setParent(cc.director.getScene());
        btn.x = 240;
        btn.y = 300;
    };
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "btnPre", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQnRuTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWdCQztRQWRHLFFBQVE7UUFFUixZQUFNLEdBQWMsSUFBSSxDQUFDOztRQVd6QixpQkFBaUI7SUFDckIsQ0FBQztJQVZHLHVCQUFJLEdBQUo7UUFDSSxPQUFPO1FBQ1AsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsVUFBVTtRQUNWLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ1osR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDaEIsQ0FBQztJQVREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQ0s7SUFKUixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBZ0I1QjtJQUFELGVBQUM7Q0FoQkQsQUFnQkMsQ0FoQnFDLEVBQUUsQ0FBQyxTQUFTLEdBZ0JqRDtrQkFoQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIC8vIOaMiemSrumihOiuvuS9k1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgYnRuUHJlOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgc2hvdyAoKSB7XG4gICAgICAgIC8vIOWIm+W7uuaMiemSrlxuICAgICAgICBsZXQgYnRuID0gY2MuaW5zdGFudGlhdGUodGhpcy5idG5QcmUpO1xuICAgICAgICAvLyDmt7vliqDliLDniLblnLrmma/kuK1cbiAgICAgICAgYnRuLnNldFBhcmVudChjYy5kaXJlY3Rvci5nZXRTY2VuZSgpKTtcbiAgICAgICAgYnRuLnggPSAyNDA7XG4gICAgICAgIGJ0bi55ID0gMzAwO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=