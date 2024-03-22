/**
 * 按钮一开始就监听点击事件，点击后重启游戏
 */
const {ccclass, property} = cc._decorator;

@ccclass
export default class BtnControl extends cc.Component {

    start () {
        // 设置按钮的点击事件
        this.node.on(cc.Node.EventType.MOUSE_DOWN, () => {
            // 重启游戏
            cc.game.restart();
        });
    }

    // update (dt) {}
}
