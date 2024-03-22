
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/EnemyControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvRW5lbXlDb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7O0dBU0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVHLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBb0NDO1FBbkNHLE9BQU87UUFDUCxXQUFLLEdBQVksS0FBSyxDQUFDOztJQWtDM0IsQ0FBQztJQWhDRyw0QkFBSyxHQUFMLGNBQVUsQ0FBQztJQUVYLDZCQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04sS0FBSztRQUNMLGVBQWU7UUFDZixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7U0FDM0I7UUFFRCxhQUFhO1FBQ2IsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQztJQUVELEtBQUs7SUFDTCwwQkFBRyxHQUFIO1FBQUEsaUJBZUM7UUFkRyxPQUFPO1FBQ1AsdUJBQXVCO1FBQ3ZCLE9BQU87UUFDUCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixXQUFXO1FBQ1gsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBQyxHQUFHLEVBQUUsV0FBVztZQUM3RCxnQkFBZ0I7WUFDaEIsa0NBQWtDO1lBQ2xDLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQ2hFLENBQUMsQ0FBQyxDQUFBO1FBQ0YsV0FBVztRQUNYLFVBQVUsQ0FBQztZQUNQLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQW5DZ0IsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQW9DaEM7SUFBRCxtQkFBQztDQXBDRCxBQW9DQyxDQXBDeUMsRUFBRSxDQUFDLFNBQVMsR0FvQ3JEO2tCQXBDb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog5pWM5Lq65o6n5Yi26ISa5pysXG4gKiDliJvlu7rkuIDkuKrmlYzkurrnmoToioLngrnvvIzmt7vliqDnorDmkp7nu4Tku7bvvIznvKnlsI/norDmkp7ojIPlm7RcbiAqIOeEtuWQjua3u+WKoOiEmuacrO+8jOaMgui9veWIsOaVjOS6uuiKgueCueS4ilxuICogXG4gKiDliJvlu7rkuIDkuKpkaWXnmoTmlYzkurrmrbvkuqHnmoTmlrnms5XvvIzpgLvovpHmmK/lrZDlvLnnorDliLDlsLHopoHplIDmr4HmlYzkurroioLngrlcbiAqIFxuICogZGll5pa55rOV5Lit77yM6KaB5Yqo5oCB5Yqg6L2954iG54K45Zu+54mH77yM54S25ZCO5bCG54iG54K45Zu+54mH6K6+572u5Yiw5pWM5Lq66IqC54K55LiKXG4gKiDnhLblkI4zMDBtc+WQjumUgOavgeaVjOS6uuiKgueCuVxuICovXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5lbXlDb250cm9sIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICAvLyDmmK/lkKbmrbvkuqFcbiAgICBpc0RpZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgc3RhcnQgKCkge31cblxuICAgIHVwZGF0ZSAoZHQpIHtcbiAgICAgICAgLy8g56e75YqoXG4gICAgICAgIC8vIOWmguaenOayoeacieatu+S6oe+8jOWwseWQkeS4i+enu+WKqFxuICAgICAgICBpZiAodGhpcy5pc0RpZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS55IC09IDMwMCAqIGR0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5aaC5p6c5Ye65LqG5bGP5bmV77yM5bCx6ZSA5q+BXG4gICAgICAgIGlmKHRoaXMubm9kZS55IDwgLTg1MCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOatu+S6oVxuICAgIGRpZSgpIHtcbiAgICAgICAgLy8g6ZSA5q+B6Ieq5bexXG4gICAgICAgIC8vIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIC8vIOW3sue7j+atu+S6oVxuICAgICAgICB0aGlzLmlzRGllID0gdHJ1ZTtcbiAgICAgICAgLy8g5Yqo5oCB5Yqg6L2954iG54K45Zu+54mHXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdlbmVteTBfZGllJywgY2MuU3ByaXRlRnJhbWUsIChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XG4gICAgICAgICAgICAvLyDlsIbniIbngrjlm77niYforr7nva7liLDmlYzkurroioLngrnkuIpcbiAgICAgICAgICAgIC8vIOW+l+WIsOaVjOS6uuiKgueCueeahFNwcml0Zee7hOS7tu+8jOeEtuWQjuiuvue9rnNwcml0ZUZyYW1lXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgfSlcbiAgICAgICAgLy8gMzAwbXPlkI7plIDmr4FcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICB9LCAzMDApO1xuICAgIH1cbn1cbiJdfQ==