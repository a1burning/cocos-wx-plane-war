
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/BgControl');
require('./assets/Script/BtnControl');
require('./assets/Script/BtnManager');
require('./assets/Script/BulletControl');
require('./assets/Script/EnemyControl');
require('./assets/Script/EnemyManager');
require('./assets/Script/PlayerControl');
require('./assets/Script/ScoreControl');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQnRuTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWdCQztRQWRHLFFBQVE7UUFFUixZQUFNLEdBQWMsSUFBSSxDQUFDOztRQVd6QixpQkFBaUI7SUFDckIsQ0FBQztJQVZHLHVCQUFJLEdBQUo7UUFDSSxPQUFPO1FBQ1AsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsVUFBVTtRQUNWLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ1osR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDaEIsQ0FBQztJQVREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQ0s7SUFKUixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBZ0I1QjtJQUFELGVBQUM7Q0FoQkQsQUFnQkMsQ0FoQnFDLEVBQUUsQ0FBQyxTQUFTLEdBZ0JqRDtrQkFoQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICAvLyDmjInpkq7pooTorr7kvZNcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGJ0blByZTogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIHNob3cgKCkge1xuICAgICAgICAvLyDliJvlu7rmjInpkq5cbiAgICAgICAgbGV0IGJ0biA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYnRuUHJlKTtcbiAgICAgICAgLy8g5re75Yqg5Yiw54i25Zy65pmv5LitXG4gICAgICAgIGJ0bi5zZXRQYXJlbnQoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKSk7XG4gICAgICAgIGJ0bi54ID0gMjQwO1xuICAgICAgICBidG4ueSA9IDMwMDtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/PlayerControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvUGxheWVyQ29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7OztHQWFHO0FBQ0gsK0NBQTBDO0FBQzFDLCtDQUEwQztBQUMxQywyQ0FBc0M7QUFDaEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBMkMsaUNBQVk7SUFBdkQ7UUFBQSxxRUF5RUM7UUF2RUcsZUFBUyxHQUFjLElBQUksQ0FBQzs7SUF1RWhDLENBQUM7SUFyRUcsNkJBQUssR0FBTDtRQUFBLGlCQWdDQztRQS9CRyxLQUFLO1FBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFVBQUMsS0FBSztZQUM3QyxPQUFPO1lBQ1AsaUNBQWlDO1lBQ2pDLGdDQUFnQztZQUNoQyxLQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQztRQUVILFNBQVM7UUFDVCxvREFBb0Q7UUFDcEQsZ0JBQWdCO1FBQ2hCLG9CQUFvQjtRQUNwQixxQkFBcUI7UUFDckIsbUNBQW1DO1FBQ25DLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDVixPQUFPO1lBQ1AseUJBQXlCO1lBQ3pCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzVDLFFBQVE7WUFDUixnQ0FBZ0M7WUFDaEMsNEJBQTRCO1lBQzVCLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ3pDLFVBQVU7WUFDVixNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLFdBQVc7WUFDWCx5Q0FBeUM7WUFDekMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDaEMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRVIsU0FBUztRQUNULEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3JELENBQUM7SUFFRCxrQkFBa0I7SUFDbEIsd0NBQWdCLEdBQWhCLFVBQWlCLEtBQUssRUFBRSxJQUFJO1FBQ3hCLG9CQUFvQjtRQUNwQiwwQkFBMEI7UUFDMUIsSUFBRyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRTtZQUNmLFVBQVU7WUFDViw2QkFBNkI7WUFDN0IsSUFBTSxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUMvRSxnQkFBZ0IsSUFBSSxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsc0JBQVksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3ZFLE9BQU87WUFDUCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDZDtJQUNMLENBQUM7SUFFRCxPQUFPO0lBQ1AsMkJBQUcsR0FBSDtRQUFBLGlCQWlCQztRQWhCRyxXQUFXO1FBQ1gsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBQyxHQUFHLEVBQUUsV0FBVztZQUM1RCxnQkFBZ0I7WUFDaEIsa0NBQWtDO1lBQ2xDLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1lBQzVELFdBQVc7WUFDWCxVQUFVLENBQUM7Z0JBQ1AsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDcEIsU0FBUztnQkFDVCxJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDakUsU0FBUyxJQUFJLFNBQVMsQ0FBQyxZQUFZLENBQUMsc0JBQVksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN6RCxPQUFPO2dCQUNQLElBQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM3RCxPQUFPLElBQUksT0FBTyxDQUFDLFlBQVksQ0FBQyxvQkFBVSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDdkQsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1osQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsOEJBQU0sR0FBTixVQUFRLEVBQUUsSUFBRyxDQUFDO0lBdEVkO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0RBQ1E7SUFGWCxhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBeUVqQztJQUFELG9CQUFDO0NBekVELEFBeUVDLENBekUwQyxFQUFFLENBQUMsU0FBUyxHQXlFdEQ7a0JBekVvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDliJvlu7rkuIDkuKrnjqnlrrbvvIzmi5bmi73po57mnLrotYTmupDliLDlsYLnuqfnvJbovpHlmajvvIznhLblkI7mi5bmi73po57mnLrliLDlsY/luZXkuK3pl7TjgIJcbiAqIOeOsOWcqOmcgOimgee7memjnuacuua3u+WKoOW3puWPs+aLluaLveeahOaViOaenO+8jFxuICog5Yib5bu65LiA5Liq6ISa5pysUGxheWVyQ29udHJvbC50c++8jOWwhuiEmuacrOaMgui9veWIsOmjnuacuuS4ilxuICog5Y+M5Ye76ISa5pys57yW5YaZ56e75Yqo55qE6YC76L6RXG4gKiBcbiAqIOWIm+W7uuWujOWtkOW8ueiEmuacrOS5i+WQju+8jOi/memHjOimgei/m+ihjOaUu+WHu+eahOmAu+i+kVxuICog6aaW5YWI6KaB5Yqg5YWl6K6h5pe25Zmoc2NoZWR1bGXvvIzmr4/pmpQwLjVz6Ze05bCx5Yib5bu65LiA5Liq5a2Q5by5XG4gKiDnhLblkI7pnIDopoHlsIblrZDlvLnliJvlu7rkuIDkuKrpooTorr7kvZNcbiAqIOWcqOiEmuacrOS4rea3u+WKoOS4gOS4qnByb3BlcnR577yM54S25ZCO5bCG6aKE6K6+5L2T5ouW5ou95YiwUGxheWVyQ29udHJvbOWxnuaAp+S4ilxuICog54S25ZCO57yW5YaZ5pS75Ye755qE6YC76L6RXG4gKiBcbiAqIOWcqOaVjOS6uuiEmuacrOWGmeWujGRpZeeahOaWueazleS5i+WQju+8jOmcgOimgeWcqOeOqeWutui/memHjOW8gOWQr+eisOaSnuajgOa1i+WKn+iDvVxuICovXG5pbXBvcnQgRW5lbXlNYW5hZ2VyIGZyb20gXCIuL0VuZW15TWFuYWdlclwiO1xuaW1wb3J0IFNjb3JlQ29udHJvbCBmcm9tIFwiLi9TY29yZUNvbnRyb2xcIjtcbmltcG9ydCBCdG5NYW5hZ2VyIGZyb20gXCIuL0J0bk1hbmFnZXJcIjtcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyQ29udHJvbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBidWxsZXRQcmU6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIC8vIOenu+WKqFxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAvLyDop6bmkbjnp7vliqhcbiAgICAgICAgICAgIC8vIGV2ZW50LmdldExvY2F0aW9uKCkg6I635Y+W5b2T5YmN6Kem5pG454K555qE5L2N572uXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuc2V0UG9zaXRpb24g6K6+572u6aOe5py655qE5L2N572uXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oZXZlbnQuZ2V0TG9jYXRpb24oKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIOaUu+WHuyDorqHml7blmahcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZShjYWxsYmFjaywgaW50ZXJ2YWwsIHJlcGVhdCwgZGVsYXkpO1xuICAgICAgICAvLyBjYWxsYmFjayDlm57osIPlh73mlbBcbiAgICAgICAgLy8gaW50ZXJ2YWwg6Ze06ZqU5pe26Ze0IC0g56eSXG4gICAgICAgIC8vIHJlcGVhdCDph43lpI3mrKHmlbDvvIzpu5jorqTkuIDnm7Tph43lpI1cbiAgICAgICAgLy8gZGVsYXkg5bu26L+f5pe26Ze0IC0g56eS77yI5aaC5p6c6K6+572u5Li6MO+8jOWImeW8gOWni+eerOmXtOWwseS8muiwg+eUqO+8iVxuICAgICAgICB0aGlzLnNjaGVkdWxlKCgpID0+IHtcbiAgICAgICAgICAgIC8vIOWIm+W7uuWtkOW8uVxuICAgICAgICAgICAgLy8gY2MuaW5zdGFudGlhdGUg5Yib5bu65LiA5Liq6aKE6K6+5L2TXG4gICAgICAgICAgICBsZXQgYnVsbGV0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5idWxsZXRQcmUpO1xuICAgICAgICAgICAgLy8g6K6+572u54i254mp5L2TXG4gICAgICAgICAgICAvLyBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpIOiOt+WPluW9k+WJjeWcuuaZr1xuICAgICAgICAgICAgLy8gYnVsbGV0LnNldFBhcmVudCDorr7nva7lrZDlvLnnmoTniLbniankvZNcbiAgICAgICAgICAgIGJ1bGxldC5zZXRQYXJlbnQoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKSk7XG4gICAgICAgICAgICAvLyDorr7nva7lrZDlvLnnmoTkvY3nva5cbiAgICAgICAgICAgIGJ1bGxldC54ID0gdGhpcy5ub2RlLng7XG4gICAgICAgICAgICAvLyDorr7nva7lrZDlvLnnmoR55Z2Q5qCHXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUueSDojrflj5bpo57mnLrnmoR55Z2Q5qCHLCDpo57mnLrnmoTpq5jluqbmmK84Me+8jOaJgOS7pei/memHjOWKoDYwXG4gICAgICAgICAgICBidWxsZXQueSA9IHRoaXMubm9kZS55ICsgNjA7XG4gICAgICAgIH0sIDAuNSk7XG5cbiAgICAgICAgLy8g5byA5ZCv56Kw5pKe5qOA5rWLXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyDnorDmkp7mo4DmtYvmlrnms5XvvIxvdGhlcuaYr+aVjOS6ulxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIHtcbiAgICAgICAgLy8g5aaC5p6c56Kw5Yiw5pWM5Lq677yM6ZSA5q+B6Ieq5bex77yM6K6p5pWM5Lq65q275LqhXG4gICAgICAgIC8vIOWcqOaVjOS6uueahOeisOaSnue7hOS7tuS4re+8jOa3u+WKoHRhZ+S4ujHvvIzooajnpLrmmK/mlYzkurpcbiAgICAgICAgaWYob3RoZXIudGFnID09IDEpIHtcbiAgICAgICAgICAgIC8vIOS4jeiuqeaVjOS6uuWGjeWIm+W7ulxuICAgICAgICAgICAgLy8g6I635Y+W5pWM5Lq6566h55CG55qE6ISa5pys77yM6LCD55So5pWM5Lq6566h55CG55qE6ISa5pys55qEc3RvcOaWueazlVxuICAgICAgICAgICAgY29uc3QgZW5lbXlNYW5hZ2VyTm9kZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuZ2V0Q2hpbGRCeU5hbWUoJ2VuZW15TWFuYWdlcicpO1xuICAgICAgICAgICAgZW5lbXlNYW5hZ2VyTm9kZSAmJiBlbmVteU1hbmFnZXJOb2RlLmdldENvbXBvbmVudChFbmVteU1hbmFnZXIpLnN0b3AoKTtcbiAgICAgICAgICAgIC8vIOmUgOavgeiHquW3sVxuICAgICAgICAgICAgdGhpcy5kaWUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOmUgOavgeiHquW3sVxuICAgIGRpZSgpIHtcbiAgICAgICAgLy8g5Yqo5oCB5Yqg6L2954iG54K45Zu+54mHXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdoZXJvMV9kaWUnLCBjYy5TcHJpdGVGcmFtZSwgKGVyciwgc3ByaXRlRnJhbWUpID0+IHtcbiAgICAgICAgICAgIC8vIOWwhueIhueCuOWbvueJh+iuvue9ruWIsOiHquW3seiKgueCueS4ilxuICAgICAgICAgICAgLy8g5b6X5Yiw6Ieq5bex6IqC54K555qEU3ByaXRl57uE5Lu277yM54S25ZCO6K6+572uc3ByaXRlRnJhbWVcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICAgICAgLy8gMzAwbXPlkI7plIDmr4FcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgLy8g5bGV56S65pyA57uI5YiG5pWwXG4gICAgICAgICAgICAgICAgY29uc3Qgc2NvcmVOb2RlID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5nZXRDaGlsZEJ5TmFtZSgnc2NvcmUnKTtcbiAgICAgICAgICAgICAgICBzY29yZU5vZGUgJiYgc2NvcmVOb2RlLmdldENvbXBvbmVudChTY29yZUNvbnRyb2wpLnN0b3AoKTtcbiAgICAgICAgICAgICAgICAvLyDlsZXnpLrmjInpkq5cbiAgICAgICAgICAgICAgICBjb25zdCBidG5Ob2RlID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5nZXRDaGlsZEJ5TmFtZSgnYnRuJyk7XG4gICAgICAgICAgICAgICAgYnRuTm9kZSAmJiBidG5Ob2RlLmdldENvbXBvbmVudChCdG5NYW5hZ2VyKS5zaG93KCk7XG4gICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/BgControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '023c0Ja7wRGWL/sSJJoIXwO', 'BgControl');
// Script/BgControl.ts

"use strict";
/**
 * 首先屏幕是竖向的，背景图片的大小是 480 * 852，所以画布是480 * 800
 * 飞机要做成向前运动的，那么只要背景向下移动就可以了
 * 这个时候需要两个背景，一个在上面，一个在下面，然后交替移动就可以有背景不挺向下移动的效果
 *
 * 在背景图片中，拖出两个到层级管理器，为background1和background2
 * 设置background1的位置为（240,410）
 * 在background1上创建一个空节点（如果在外层，那么他们的相对位置是画布的(0, 0)，如果是在background1节点上创建，那么起点位置是相对于background1的（240,410））
 * 然后将两个background1和background2都挂载到空节点下面，设置background1的位置设置为（0,0），background2的位置为（0,852），正好一个图片的高度
 * 因为两个背景都做的同一个动作，那么在空节点上创建脚本即可，在assets下面添加文件夹Script，添加BgControl脚本，然后将脚本挂载到空节点上
 * 下面进行脚本编辑。
 *
 * 背景的脚本编辑：
 * 1. 首先在脚本中添加一个update方法，这个方法是每一帧都会调用的，所以在这个方法中实现背景的移动
 * 2. 首先在update方法中打印一下this.node.children，这个是当前节点的所有子节点，可以看到两个背景节点
 * 3. 遍历子节点，然后移动
 * 4. 移动的时候，需要注意的是，移动的单位是帧，所以需要乘以dt，dt是每一帧的时间，单位是秒
 * 5. 移动的时候，需要注意的是，如果向下出屏幕了，就移动到上面（实现无限循环）
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
var BgControl = /** @class */ (function (_super) {
    __extends(BgControl, _super);
    function BgControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BgControl.prototype.start = function () { };
    BgControl.prototype.update = function (dt) {
        // 移动
        // 遍历子节点（背景）
        for (var _i = 0, _a = this.node.children; _i < _a.length; _i++) {
            var bgNode = _a[_i];
            // 移动 帧单位改为秒
            bgNode.y -= 50 * dt;
            // // 如果向下出屏幕了，就移动到上面
            if (bgNode.y < -850) {
                bgNode.y += 852 * 2;
            }
        }
    };
    BgControl = __decorate([
        ccclass
    ], BgControl);
    return BgControl;
}(cc.Component));
exports.default = BgControl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQmdDb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0JHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF1Qyw2QkFBWTtJQUFuRDs7SUFnQkEsQ0FBQztJQWRHLHlCQUFLLEdBQUwsY0FBVSxDQUFDO0lBRVgsMEJBQU0sR0FBTixVQUFRLEVBQUU7UUFDTixLQUFLO1FBQ0wsWUFBWTtRQUNaLEtBQWtCLFVBQWtCLEVBQWxCLEtBQUEsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQWxCLGNBQWtCLEVBQWxCLElBQWtCLEVBQUU7WUFBbEMsSUFBSSxNQUFNLFNBQUE7WUFDVixZQUFZO1lBQ1osTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ3BCLHFCQUFxQjtZQUNyQixJQUFJLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pCLE1BQU0sQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQzthQUN2QjtTQUNKO0lBQ0wsQ0FBQztJQWZnQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBZ0I3QjtJQUFELGdCQUFDO0NBaEJELEFBZ0JDLENBaEJzQyxFQUFFLENBQUMsU0FBUyxHQWdCbEQ7a0JBaEJvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDpppblhYjlsY/luZXmmK/nq5blkJHnmoTvvIzog4zmma/lm77niYfnmoTlpKflsI/mmK8gNDgwICogODUy77yM5omA5Lul55S75biD5pivNDgwICogODAwXG4gKiDpo57mnLropoHlgZrmiJDlkJHliY3ov5DliqjnmoTvvIzpgqPkuYjlj6ropoHog4zmma/lkJHkuIvnp7vliqjlsLHlj6/ku6XkuoZcbiAqIOi/meS4quaXtuWAmemcgOimgeS4pOS4quiDjOaZr++8jOS4gOS4quWcqOS4iumdou+8jOS4gOS4quWcqOS4i+mdou+8jOeEtuWQjuS6pOabv+enu+WKqOWwseWPr+S7peacieiDjOaZr+S4jeaMuuWQkeS4i+enu+WKqOeahOaViOaenFxuICogXG4gKiDlnKjog4zmma/lm77niYfkuK3vvIzmi5blh7rkuKTkuKrliLDlsYLnuqfnrqHnkIblmajvvIzkuLpiYWNrZ3JvdW5kMeWSjGJhY2tncm91bmQyXG4gKiDorr7nva5iYWNrZ3JvdW5kMeeahOS9jee9ruS4uu+8iDI0MCw0MTDvvIlcbiAqIOWcqGJhY2tncm91bmQx5LiK5Yib5bu65LiA5Liq56m66IqC54K577yI5aaC5p6c5Zyo5aSW5bGC77yM6YKj5LmI5LuW5Lus55qE55u45a+55L2N572u5piv55S75biD55qEKDAsIDAp77yM5aaC5p6c5piv5ZyoYmFja2dyb3VuZDHoioLngrnkuIrliJvlu7rvvIzpgqPkuYjotbfngrnkvY3nva7mmK/nm7jlr7nkuo5iYWNrZ3JvdW5kMeeahO+8iDI0MCw0MTDvvInvvIlcbiAqIOeEtuWQjuWwhuS4pOS4qmJhY2tncm91bmQx5ZKMYmFja2dyb3VuZDLpg73mjILovb3liLDnqbroioLngrnkuIvpnaLvvIzorr7nva5iYWNrZ3JvdW5kMeeahOS9jee9ruiuvue9ruS4uu+8iDAsMO+8ie+8jGJhY2tncm91bmQy55qE5L2N572u5Li677yIMCw4NTLvvInvvIzmraPlpb3kuIDkuKrlm77niYfnmoTpq5jluqZcbiAqIOWboOS4uuS4pOS4quiDjOaZr+mDveWBmueahOWQjOS4gOS4quWKqOS9nO+8jOmCo+S5iOWcqOepuuiKgueCueS4iuWIm+W7uuiEmuacrOWNs+WPr++8jOWcqGFzc2V0c+S4i+mdoua3u+WKoOaWh+S7tuWkuVNjcmlwdO+8jOa3u+WKoEJnQ29udHJvbOiEmuacrO+8jOeEtuWQjuWwhuiEmuacrOaMgui9veWIsOepuuiKgueCueS4ilxuICog5LiL6Z2i6L+b6KGM6ISa5pys57yW6L6R44CCXG4gKiBcbiAqIOiDjOaZr+eahOiEmuacrOe8lui+ke+8mlxuICogMS4g6aaW5YWI5Zyo6ISa5pys5Lit5re75Yqg5LiA5LiqdXBkYXRl5pa55rOV77yM6L+Z5Liq5pa55rOV5piv5q+P5LiA5bin6YO95Lya6LCD55So55qE77yM5omA5Lul5Zyo6L+Z5Liq5pa55rOV5Lit5a6e546w6IOM5pmv55qE56e75YqoXG4gKiAyLiDpppblhYjlnKh1cGRhdGXmlrnms5XkuK3miZPljbDkuIDkuIt0aGlzLm5vZGUuY2hpbGRyZW7vvIzov5nkuKrmmK/lvZPliY3oioLngrnnmoTmiYDmnInlrZDoioLngrnvvIzlj6/ku6XnnIvliLDkuKTkuKrog4zmma/oioLngrlcbiAqIDMuIOmBjeWOhuWtkOiKgueCue+8jOeEtuWQjuenu+WKqFxuICogNC4g56e75Yqo55qE5pe25YCZ77yM6ZyA6KaB5rOo5oSP55qE5piv77yM56e75Yqo55qE5Y2V5L2N5piv5bin77yM5omA5Lul6ZyA6KaB5LmY5LulZHTvvIxkdOaYr+avj+S4gOW4p+eahOaXtumXtO+8jOWNleS9jeaYr+enklxuICogNS4g56e75Yqo55qE5pe25YCZ77yM6ZyA6KaB5rOo5oSP55qE5piv77yM5aaC5p6c5ZCR5LiL5Ye65bGP5bmV5LqG77yM5bCx56e75Yqo5Yiw5LiK6Z2i77yI5a6e546w5peg6ZmQ5b6q546v77yJXG4gKi9cblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCZ0NvbnRyb2wgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgc3RhcnQgKCkge31cblxuICAgIHVwZGF0ZSAoZHQpIHtcbiAgICAgICAgLy8g56e75YqoXG4gICAgICAgIC8vIOmBjeWOhuWtkOiKgueCue+8iOiDjOaZr++8iVxuICAgICAgICBmb3IobGV0IGJnTm9kZSBvZiB0aGlzLm5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIC8vIOenu+WKqCDluKfljZXkvY3mlLnkuLrnp5JcbiAgICAgICAgICAgIGJnTm9kZS55IC09IDUwICogZHQ7XG4gICAgICAgICAgICAvLyAvLyDlpoLmnpzlkJHkuIvlh7rlsY/luZXkuobvvIzlsLHnp7vliqjliLDkuIrpnaJcbiAgICAgICAgICAgIGlmIChiZ05vZGUueSA8IC04NTApIHtcbiAgICAgICAgICAgICAgICBiZ05vZGUueSArPSA4NTIgKiAyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/BulletControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQnVsbGV0Q29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0dBV0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVILCtDQUEwQztBQUMxQywrQ0FBMEM7QUFFcEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBMkMsaUNBQVk7SUFBdkQ7UUFBQSxxRUFnQ0M7UUE5QkcsV0FBSyxHQUFXLEdBQUcsQ0FBQzs7SUE4QnhCLENBQUM7SUE1QkcsNkJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCw4QkFBTSxHQUFOLFVBQVEsRUFBRTtRQUNOLEtBQUs7UUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUMvQixhQUFhO1FBQ2IsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN2QjtJQUNMLENBQUM7SUFFRCxrQkFBa0I7SUFDbEIsd0NBQWdCLEdBQWhCLFVBQWlCLEtBQUssRUFBRSxJQUFJO1FBQ3hCLG9CQUFvQjtRQUNwQiwwQkFBMEI7UUFDMUIsSUFBRyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRTtZQUNmLDJCQUEyQjtZQUMzQixJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNqRSxTQUFTLElBQUksU0FBUyxDQUFDLFlBQVksQ0FBQyxzQkFBWSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDN0QsT0FBTztZQUNQLHdCQUF3QjtZQUN4QixLQUFLLENBQUMsWUFBWSxDQUFDLHNCQUFZLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUN2QyxPQUFPO1lBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN2QjtJQUNMLENBQUM7SUE3QkQ7UUFEQyxRQUFRO2dEQUNXO0lBRkgsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQWdDakM7SUFBRCxvQkFBQztDQWhDRCxBQWdDQyxDQWhDMEMsRUFBRSxDQUFDLFNBQVMsR0FnQ3REO2tCQWhDb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog5a2Q5by55o6n5Yi26ISa5pysXG4gKiDliJvlu7rlrZDlvLnliLDlsYLnuqfnrqHnkIblmajvvIzpgLvovpHlsLHmmK/vvIzliJvlu7rlrZDlvLnvvIzlrZDlvLnlnoLnm7TlkJHkuIrov5DliqjjgIJcbiAqIOWtkOW8ueenu+WKqOWIsOWxj+W5leWklumdou+8jOWwsemUgOavge+8jOWtkOW8ueeisOWIsOaVjOacuu+8jOiHquW3semUgOavgeaVjOacuumUgOavgeOAglxuICog5omA5Lul6KaB5Yib5bu656Kw5pKe57uE5Lu277yMQm94Y29sbGlkZXJcbiAqIOeEtuWQjuWIm+W7uuWtkOW8ueiEmuacrEJ1bGxldENvbnRyb2zvvIznhLblkI7mjILovb3liLDlrZDlvLnkuIrpnaLjgIJcbiAqIFxuICog546p5a625Yib5bu65a2Q5by555qE6YC76L6R5YaZ5a6M77yM6ZyA6KaB6L+b6KGM5a2Q5by55pys6Lqr5bGe5oCn55qE57yW5YaZXG4gKiDmm7TmlrDnmoTml7blgJnvvIzopoHnp7vliqjvvIznhLblkI7liKTmlq3mmK/lkKblh7rkuoblsY/luZXvvIzlpoLmnpzlh7rkuoblsY/luZXlsLHplIDmr4HjgIJcbiAqIFxuICog54S25ZCO6ZyA6KaB5re75Yqg56Kw5pKe5qOA5rWL77yM5aaC5p6c56Kw5Yiw5pWM5py677yM6ZSA5q+B5pWM5py677yM6ZSA5q+B6Ieq5bex44CCXG4gKi9cblxuaW1wb3J0IEVuZW15Q29udHJvbCBmcm9tIFwiLi9FbmVteUNvbnRyb2xcIjtcbmltcG9ydCBTY29yZUNvbnRyb2wgZnJvbSBcIi4vU2NvcmVDb250cm9sXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnVsbGV0Q29udHJvbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5XG4gICAgc3BlZWQ6IG51bWJlciA9IDgwMDtcblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIHVwZGF0ZSAoZHQpIHtcbiAgICAgICAgLy8g56e75YqoXG4gICAgICAgIHRoaXMubm9kZS55ICs9IHRoaXMuc3BlZWQgKiBkdDtcbiAgICAgICAgLy8g5aaC5p6c5Ye65LqG5bGP5bmV6ZyA6KaB6ZSA5q+BXG4gICAgICAgIGlmICh0aGlzLm5vZGUueSA+IDgyMCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOeisOaSnuajgOa1i+aWueazle+8jG90aGVy5piv5pWM5Lq6XG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlciwgc2VsZikge1xuICAgICAgICAvLyDlpoLmnpznorDliLDmlYzkurrvvIzplIDmr4Hoh6rlt7HvvIzorqnmlYzkurrmrbvkuqFcbiAgICAgICAgLy8g5Zyo5pWM5Lq655qE56Kw5pKe57uE5Lu25Lit77yM5re75YqgdGFn5Li6Me+8jOihqOekuuaYr+aVjOS6ulxuICAgICAgICBpZihvdGhlci50YWcgPT0gMSkge1xuICAgICAgICAgICAgLy8g6I635Y+W5YiG5pWw6IqC54K577yM6LCD55So5YiG5pWw6IqC54K555qEYWRkU2NvcmXmlrnms5VcbiAgICAgICAgICAgIGNvbnN0IHNjb3JlTm9kZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuZ2V0Q2hpbGRCeU5hbWUoJ3Njb3JlJyk7XG4gICAgICAgICAgICBzY29yZU5vZGUgJiYgc2NvcmVOb2RlLmdldENvbXBvbmVudChTY29yZUNvbnRyb2wpLmFkZFNjb3JlKCk7XG4gICAgICAgICAgICAvLyDplIDmr4HmlYzkurpcbiAgICAgICAgICAgIC8vIOiOt+WPluaVjOS6uueahOiEmuacrO+8jOiwg+eUqOaVjOS6uueahOiEmuacrOeahGRpZeaWueazlVxuICAgICAgICAgICAgb3RoZXIuZ2V0Q29tcG9uZW50KEVuZW15Q29udHJvbCkuZGllKCk7XG4gICAgICAgICAgICAvLyDplIDmr4Hoh6rlt7FcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------
