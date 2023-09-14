import {OverlayContainer} from '@angular/cdk/overlay';

export class AppOverlayContainer extends OverlayContainer {

  protected override  _createContainer(): void {
    super._createContainer();

    const container: HTMLDivElement = document.createElement('div');
    container.classList.add('app-overlay-container');

    const element: Element | null = document.querySelector('.container');
    console.log(element)
    if (element) {
      element.appendChild(container);
      this._containerElement = container;
    }
  }
}
