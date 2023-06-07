import { _decorator, Component, Input, input, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('NewComponent')
export class NewComponent extends Component {
    private _startJump: boolean = false;
    private _jumpStep: number = 0;
    private _curJumpTime: number = 0;
    private _jumpeTime: number = 0.1;
    private _curJumpSpeed: number = 0;
    private _curPos: Vec3 = new Vec3();
    private _deltaPos: Vec3 = new Vec3(0, 0, 0);
    private _targetPos: Vec3 = new Vec3();
    start() {
        input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
    }
    onMouseUp(event: EventMouse) {
        if (event.getButton() == 0) {
            this.jumpByStep(1);
        } else if (event.getButton() == 2) {
            this.jumpByStep(2);
        }
    }
    jumpByStep(step: number) {
        // 处于跳跃状态
        if(this._startJump) {
            return;
        }
        this._startJump = true; // 标记开始跳跃状态
        this._jumpStep = step; // 跳跃的步数 1 or 2
        this._curJumpTime = 0; // 重置开始跳跃的时间
        this._curJumpSpeed = this._jumpStep / this._jumpeTime; // 计算跳跃速度
        this.node.getPosition(this._curPos); // 获取当前位置
        Vec3.add(this._targetPos, this._curPos, new Vec3(this._jumpStep, 0, 0)); // 计算目标位置
    }
    update(deltaTime: number) {
        
    }
}


