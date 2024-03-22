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

const {ccclass, property} = cc._decorator;

@ccclass
export default class EnemyControl extends cc.Component {
    // 是否死亡
    isDie: boolean = false;

    start () {}

    update (dt) {
        // 移动
        // 如果没有死亡，就向下移动
        if (this.isDie === false) {
            this.node.y -= 300 * dt;
        }

        // 如果出了屏幕，就销毁
        if(this.node.y < -850) {
            this.node.destroy();
        }
    }

    // 死亡
    die() {
        // 销毁自己
        // this.node.destroy();
        // 已经死亡
        this.isDie = true;
        // 动态加载爆炸图片
        cc.loader.loadRes('enemy0_die', cc.SpriteFrame, (err, spriteFrame) => {
            // 将爆炸图片设置到敌人节点上
            // 得到敌人节点的Sprite组件，然后设置spriteFrame
            this.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        })
        // 300ms后销毁
        setTimeout(() => {
            this.node.destroy();
        }, 300);
    }
}
