import { Entity } from '@/utils'
import { Settings } from '@/settings'
import { Grid } from '@/grid'

export class Game extends Entity {
  private _lastTimestamp = 0
  private _entities: Entity[] = []

  public get Entities(): Entity[] {
    return this._entities
  }

  public Awake(): void {
    super.Awake()

    this._entities.push(new Grid())

    for (const entity of this._entities) {
      entity.Awake()
    }

    // Make sure Update starts after all entities are awaken
    window.requestAnimationFrame(() => {
      // set initial timestamp
      this._lastTimestamp = Date.now()

      // start update loop
      this.Update()
    })
  }

  public Update(): void {
    const deltaTime = (Date.now() - this._lastTimestamp) / 1000

    super.Update(deltaTime)

    for (const entity of this._entities) {
      entity.Update(deltaTime)
    }

    this._lastTimestamp = Date.now()

    window.requestAnimationFrame(() => this.Update())
  }
}