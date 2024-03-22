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

import EnemyControl from "./EnemyControl";
import ScoreControl from "./ScoreControl";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BulletControl extends cc.Component {
    @property
    speed: number = 800;

    start () {

    }

    update (dt) {
        // 移动
        this.node.y += this.speed * dt;
        // 如果出了屏幕需要销毁
        if (this.node.y > 820) {
            this.node.destroy();
        }
    }

    // 碰撞检测方法，other是敌人
    onCollisionEnter(other, self) {
        // 如果碰到敌人，销毁自己，让敌人死亡
        // 在敌人的碰撞组件中，添加tag为1，表示是敌人
        if(other.tag == 1) {
            // 获取分数节点，调用分数节点的addScore方法
            const scoreNode = cc.director.getScene().getChildByName('score');
            scoreNode && scoreNode.getComponent(ScoreControl).addScore();
            // 销毁敌人
            // 获取敌人的脚本，调用敌人的脚本的die方法
            other.getComponent(EnemyControl).die();
            // 销毁自己
            this.node.destroy();
        }
    }
}
