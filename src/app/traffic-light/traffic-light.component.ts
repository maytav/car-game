import {Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {trafficLightState} from "./stores/traffic-light.state";
import {Observable} from "rxjs";
import {TrafficLightActions} from "./stores/traffic-light.actions";


@Component({
  selector: 'traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.css'],
})
export class TrafficLightComponent implements OnInit {
  colors = {
    off: '#201f1f',
    red: '#e64c3c',
    amber: '#f3d55b',
    green: '#4fba6f',
  };
  @Select(trafficLightState.selectedColor)
  selectedColor$: Observable<string>;

  constructor(private store:Store) {
  }
  ngOnInit() {
    setInterval(() => {
      this.store.dispatch(new TrafficLightActions.ChangeColor())
    }, 1000);
  }

}
