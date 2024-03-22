const {ccclass, property} = cc._decorator;

@ccclass
export default class ScoreControl extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    // 添加分数的逻辑
    addScore() {
        // 分数加10
        this.label.string = (parseInt(this.label.string) + 10).toString();
    }

    // 游戏结束的逻辑
    stop () {
        // 移动到画面中间，并修改字体大小为50
        this.node.setPosition(240, 500);
        this.label.fontSize = 60;
    }
}
