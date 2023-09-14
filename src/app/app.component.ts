import {Component, ElementRef, ViewChild, ViewContainerRef} from '@angular/core';
import {Store} from '@ngxs/store';
import {trafficLightState} from './traffic-light/stores/traffic-light.state';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  carPosition: number = 0;
  message: string;
  warningMessage: boolean;
  roadLength: number = 300;

  constructor(private store: Store, private snackBar: MatSnackBar) {
  }

  moveCar(direction: 'forward' | 'backward') {
    if (direction === 'forward') {
      this.carPosition += 10;
      if (this.carPosition === this.roadLength / 2) {
        if (this.store.selectSnapshot(trafficLightState.selectedColor) === 'red') {
          // this.message = 'אזהרה: עוברים באדום!';
          // this.warningMessage = true;
          this.showErrorMessage('אזהרה: עוברים באדום!')
        } else {
          // this.message = 'הצלחה: עוברים בירוק!';
          // this.warningMessage = false;
          this.showSuccessMessage('הצלחה: עוברים בירוק!')


        }
        setTimeout(() => {
          this.message = '';
        }, 5000);
      } else if (this.carPosition >= this.roadLength) {
        this.carPosition = 0

      }
    } else if (direction === 'backward') {
      if (this.carPosition - 10 < 0) {
        this.carPosition = this.roadLength;
      } else {
        this.carPosition -= 10;
      }
    }
  }

  showSuccessMessage(message: string): void {
    this.openSnackBar(message, 'success-snackbar');
  }

  showErrorMessage(message: string): void {
    this.openSnackBar(message, 'error-snackbar');
  }

  private openSnackBar(message: string, panelClass: string): void {
    console.log(message)
    this.snackBar.open(message, 'סגור', {
      duration: 3000,
      panelClass: [panelClass],
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
    });
  }

}
