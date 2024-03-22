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
import EnemyManager from "./EnemyManager";
import ScoreControl from "./ScoreControl";
import BtnManager from "./BtnManager";
const {ccclass, property} = cc._decorator;

@ccclass
export default class PlayerControl extends cc.Component {
    @property(cc.Prefab)
    bulletPre: cc.Prefab = null;

    start () {
        // 移动
        this.node.on(cc.Node.EventType.TOUCH_MOVE, (event) => {
            // 触摸移动
            // event.getLocation() 获取当前触摸点的位置
            // this.node.setPosition 设置飞机的位置
            this.node.setPosition(event.getLocation());
        });

        // 攻击 计时器
        // this.schedule(callback, interval, repeat, delay);
        // callback 回调函数
        // interval 间隔时间 - 秒
        // repeat 重复次数，默认一直重复
        // delay 延迟时间 - 秒（如果设置为0，则开始瞬间就会调用）
        this.schedule(() => {
            // 创建子弹
            // cc.instantiate 创建一个预设体
            let bullet = cc.instantiate(this.bulletPre);
            // 设置父物体
            // cc.director.getScene() 获取当前场景
            // bullet.setParent 设置子弹的父物体
            bullet.setParent(cc.director.getScene());
            // 设置子弹的位置
            bullet.x = this.node.x;
            // 设置子弹的y坐标
            // this.node.y 获取飞机的y坐标, 飞机的高度是81，所以这里加60
            bullet.y = this.node.y + 60;
        }, 0.5);

        // 开启碰撞检测
        cc.director.getCollisionManager().enabled = true;
    }

    // 碰撞检测方法，other是敌人
    onCollisionEnter(other, self) {
        // 如果碰到敌人，销毁自己，让敌人死亡
        // 在敌人的碰撞组件中，添加tag为1，表示是敌人
        if(other.tag == 1) {
            // 不让敌人再创建
            // 获取敌人管理的脚本，调用敌人管理的脚本的stop方法
            const enemyManagerNode = cc.director.getScene().getChildByName('enemyManager');
            enemyManagerNode && enemyManagerNode.getComponent(EnemyManager).stop();
            // 销毁自己
            this.die();
        }
    }

    // 销毁自己
    die() {
        // 动态加载爆炸图片
        cc.loader.loadRes('hero1_die', cc.SpriteFrame, (err, spriteFrame) => {
            // 将爆炸图片设置到自己节点上
            // 得到自己节点的Sprite组件，然后设置spriteFrame
            this.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
            // 300ms后销毁
            setTimeout(() => {
                this.node.destroy();
                // 展示最终分数
                const scoreNode = cc.director.getScene().getChildByName('score');
                scoreNode && scoreNode.getComponent(ScoreControl).stop();
                // 展示按钮
                const btnNode = cc.director.getScene().getChildByName('btn');
                btnNode && btnNode.getComponent(BtnManager).show();
            }, 300);
        })
    }

    update (dt) {}
}
