import { Entity } from '@/utils'
import { Grid } from '@/grid'
import { Fleet } from '@/fleet'
import { Team } from '@/team'

export class Game extends Entity {

  private _entities: Entity[] = []

  public get Entities(): Entity[] {
    return this._entities
  }

  private _lastTimestamp = 0

  public Awake(): void {
    super.Awake()
    const grid = new Grid()

    this._entities.push(
      grid,
      new Fleet(Team.A,grid),
      new Fleet(Team.B, grid),
      )

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