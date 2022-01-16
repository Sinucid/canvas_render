export type TShapeConfig = {
  x: number,
  y: number,
  w: number,
  h: number
};

export class Shape {
  protected x:number;
  protected y:number;
  protected w:number;
  protected h:number;
  
  constructor(config: TShapeConfig){
    const {
      x = 0,
      y = 0,
      w = 0,
      h = 0,
    }: TShapeConfig = config;

    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h
  }

  position(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }

  move(offsetX: number, offsetY: number): void {
    this.x += offsetX;
    this.y += offsetY;
  }
}

export {SquareShape} from './square';
