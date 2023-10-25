import { Entity } from '@/utils'
import { Settings } from '@/settings'
import { Grid } from '@/grid'

export class Game extends Entity {

  private _entities: Entity[] = []

  public get Entities(): Entity[] {
    return this._entities
  }

  private _lastTimestamp = 0

  public Awake(): void {
    super.Awake()

    this._entities.push(new Grid())

    for (const entity of this.Entities){
      entity.Awake()
    }

    window.requestAnimationFrame(() => {
      this._lastTimestamp = Date.now()

      this.Update()
    })
  }

  public Update(): void {
    const deltaTime = (Date.now() - this._lastTimestamp) / 1000

    super.Update(deltaTime)

    for (const entity of this.Entities){
      entity.Update(deltaTime)
    }

    this._lastTimestamp = Date.now()

    window.requestAnimationFrame(() => this.Update())
  }
}