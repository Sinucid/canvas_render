import { Shape, TShapeConfig } from "./";

export type TSquareShapeConfig = TShapeConfig & {
  fillStyle?: string
};

const defaultFillStyle: string = '#000000'

export class SquareShape extends Shape {
  protected fillStyle: string;

  constructor(config: TSquareShapeConfig){
    const {x, y, w, h, fillStyle = defaultFillStyle}: TSquareShapeConfig = config;
    super({x, y, w, h,})

    this.fillStyle = fillStyle;
  }

  render(ctx: any): void {
    const x = this.x;
    const y = this.y;
    const w = this.w;
    const h = this.h;
    const fillStyle = this.fillStyle;

    ctx.beginPath();
    ctx.rect(x, y, h, w);
    ctx.fillStyle = fillStyle;
    ctx.fill();
    ctx.closePath();
  }
}