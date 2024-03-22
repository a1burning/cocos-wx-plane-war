
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