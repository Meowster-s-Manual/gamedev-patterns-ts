import { IComponent, Vector2D } from '@/utils'
import { CanvasLayer } from '@/canvas-layer'
import { Ship } from '@/ship/ship'
import { Team } from '@/team'
import { Settings } from '@/settings'

export class ShipDrawComponent implements IComponent {
  public Entity: Ship

  public Awake(): void {
    this.Clear()
  }

  Update(deltaTime: number): void {
    this.Clear()
    this.Draw()
  }

  private Draw(): void {
    const colors = Settings.ships.colors
    const color = this.Entity.Factory.Team === Team.A ? colors.a : colors.b

    CanvasLayer.Foreground.FillCircle(this.Position, Settings.ships.radius, color)
  }
  private Clear(): void {
    CanvasLayer.Foreground.ClearRect(
      new Vector2D(
        this.Position.x - Settings.grid.nodeSize / 2,
        this.Position.y - Settings.grid.nodeSize / 2,
      ),
      new Vector2D(Settings.grid.nodeSize, Settings.grid.nodeSize)
    )
  }

  private get Position(): Vector2D {
    return new Vector2D(100, 100)
  }
}