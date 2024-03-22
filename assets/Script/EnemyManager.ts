/**
 * 在敌机节点上创建一个新的空节点，取名为enemyManager（这样可以保持空节点和敌机节点的中心位置重合），将空节点拖出和敌机节点同级。
 * 将敌机节点拖动到资源管理器保存为预设体
 * 一开始敌机不存在画面中，所以删除敌机节点
 * 创建EnemyManager.ts组件，将其挂载到enemyManager节点下
 * 编辑组件脚本
 */

const {ccclass, property} = cc._decorator;

@ccclass
export default class EnemyManager extends cc.Component {
    // 敌机预设体
    @property(cc.Prefab)
    enemyPrefab: cc.Prefab = null;

    start () {
        // 每个2s，创建一个敌机
        this.schedule(() => {
            // 创建敌机
            let enemy = cc.instantiate(this.enemyPrefab);
            // 添加到父场景中
            enemy.setParent(cc.director.getScene());
            enemy.y = this.node.y;
            // x坐标随机，20-420的随机数
            enemy.x = Math.random() * 400 + 20;
        }, 2)
    }

    stop () {
        // 停止所有计时器
        this.unscheduleAllCallbacks();
    }

    update (dt) {}
}
