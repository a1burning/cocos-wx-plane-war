const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // 按钮预设体
    @property(cc.Prefab)
    btnPre: cc.Prefab = null;

    show () {
        // 创建按钮
        let btn = cc.instantiate(this.btnPre);
        // 添加到父场景中
        btn.setParent(cc.director.getScene());
        btn.x = 240;
        btn.y = 300;
    }

    // update (dt) {}
}
