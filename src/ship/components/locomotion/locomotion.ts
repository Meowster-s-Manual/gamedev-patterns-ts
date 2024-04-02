import { IComponent, Vector2D } from '@/utils'
import { Ship } from '@/ship'
import { Node } from '@/node'

export class ShipLocomotionComponent implements IComponent {
  private _node: Node | null = null
  
  public Entity: Ship

  public Awake(): void {
    /* todo */
  }

  public Update(deltatime:number): void {
    /* todo */
  }

  public get Node(): Node | null {
    return this._node
  }

  public set Node(node: Node | null) {
    this._node = node
  }

  public get Position(): Vector2D | null {
    return this.Node ? this.Node.Center : null
  }
}