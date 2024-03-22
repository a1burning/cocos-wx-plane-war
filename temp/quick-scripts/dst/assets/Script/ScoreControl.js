
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/ScoreControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '69f51w/TjNPAb9omxY9WOWf', 'ScoreControl');
// Script/ScoreControl.ts

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
var ScoreControl = /** @class */ (function (_super) {
    __extends(ScoreControl, _super);
    function ScoreControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        return _this;
    }
    // 添加分数的逻辑
    ScoreControl.prototype.addScore = function () {
        // 分数加10
        this.label.string = (parseInt(this.label.string) + 10).toString();
    };
    // 游戏结束的逻辑
    ScoreControl.prototype.stop = function () {
        // 移动到画面中间，并修改字体大小为50
        this.node.setPosition(240, 500);
        this.label.fontSize = 60;
    };
    __decorate([
        property(cc.Label)
    ], ScoreControl.prototype, "label", void 0);
    ScoreControl = __decorate([
        ccclass
    ], ScoreControl);
    return ScoreControl;
}(cc.Component));
exports.default = ScoreControl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvU2NvcmVDb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBaUJDO1FBZEcsV0FBSyxHQUFhLElBQUksQ0FBQzs7SUFjM0IsQ0FBQztJQVpHLFVBQVU7SUFDViwrQkFBUSxHQUFSO1FBQ0ksUUFBUTtRQUNSLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDdEUsQ0FBQztJQUVELFVBQVU7SUFDViwyQkFBSSxHQUFKO1FBQ0kscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQWJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ0k7SUFITixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBaUJoQztJQUFELG1CQUFDO0NBakJELEFBaUJDLENBakJ5QyxFQUFFLENBQUMsU0FBUyxHQWlCckQ7a0JBakJvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZUNvbnRyb2wgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICAvLyDmt7vliqDliIbmlbDnmoTpgLvovpFcbiAgICBhZGRTY29yZSgpIHtcbiAgICAgICAgLy8g5YiG5pWw5YqgMTBcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAocGFyc2VJbnQodGhpcy5sYWJlbC5zdHJpbmcpICsgMTApLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgLy8g5ri45oiP57uT5p2f55qE6YC76L6RXG4gICAgc3RvcCAoKSB7XG4gICAgICAgIC8vIOenu+WKqOWIsOeUu+mdouS4remXtO+8jOW5tuS/ruaUueWtl+S9k+Wkp+Wwj+S4ujUwXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbigyNDAsIDUwMCk7XG4gICAgICAgIHRoaXMubGFiZWwuZm9udFNpemUgPSA2MDtcbiAgICB9XG59XG4iXX0=