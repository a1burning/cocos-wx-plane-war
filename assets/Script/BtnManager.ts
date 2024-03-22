// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

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
