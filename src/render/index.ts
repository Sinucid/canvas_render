import { TAttributes } from './types';

interface IRender {
  attributes: TAttributes;
  initCanvas: () => HTMLCanvasElement;
  render: () => void;
};

const defaultAttributes: TAttributes = {
  width: '100%',
  height: '100%',
  id: 'canvasRender'
}

export default class Render implements IRender {
  constructor(public attributes: TAttributes = {}){
    this.attributes = {...defaultAttributes, ...attributes};
  }

  initCanvas(): HTMLCanvasElement {
    const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.createElement('canvas');

    const { width, height, id } = this.attributes;
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

  render(): void{
    this.initCanvas();
  }
}