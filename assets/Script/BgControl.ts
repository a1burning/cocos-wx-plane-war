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

const {ccclass, property} = cc._decorator;

@ccclass
export default class BgControl extends cc.Component {

    start () {}

    update (dt) {
        // 移动
        // 遍历子节点（背景）
        for(let bgNode of this.node.children) {
            // 移动 帧单位改为秒
            bgNode.y -= 50 * dt;
            // // 如果向下出屏幕了，就移动到上面
            if (bgNode.y < -850) {
                bgNode.y += 852 * 2;
            }
        }
    }
}
