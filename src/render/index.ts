import { TAttributes } from './types';
import { SquareShape } from '../shape';

const defaultAttributes: TAttributes = {
  width: '100%',
  height: '100%',
  id: 'canvasRender'
}

export default class Render {
  protected el: HTMLCanvasElement | null = null;
  protected ctx: any = null;
  protected attributes: TAttributes = {};
  protected shapes: SquareShape[] = [];

  constructor(
    attributes: TAttributes
  ){
    this.attributes = {
      ...defaultAttributes,
      ...attributes
    };
  }

  private initCanvas(): HTMLCanvasElement {
    const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.createElement('canvas');

    const { width, height, id }: TAttributes = this.attributes;
    const canvasStyles: TAttributes = {
      id,
      width,
      height,
    };

    for (const [attribute, value] of Object.entries(canvasStyles)){
      canvas.setAttribute(attribute, value);
    }

    document.body.appendChild(canvas);

    return canvas;
  }

  createShape(): void {
    this.shapes.push(new SquareShape({
      x: 20,
      y: 40,
      w: 40,
      h: 40,
      fillStyle: "#FF0000"
    }))
  }

  private render(): void{
    const ctx = this.ctx;
    this.shapes.forEach((shape: SquareShape): void => {
      if (this.el){
        ctx.clearRect(0, 0, this.el.width, this.el.height);
      }
      shape.render(ctx);
      shape.move(2, 2);
    })
    
  }

  init(): void{
    this.el = this.initCanvas();
    this.ctx = this.el.getContext("2d");
    this.createShape();
    setInterval(() => this.render(), 100);
  }
}