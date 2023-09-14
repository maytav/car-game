import {Injectable} from "@angular/core";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {TrafficLightActions} from "./traffic-light.actions";


interface trafficLightStateModel {
  selectedColor: string;
}

@State<trafficLightStateModel>({
  name: 'trafficLight',
  defaults: {selectedColor: 'red'},
})

@Injectable()
export class trafficLightState {


  @Selector()
  static selectedColor(state: trafficLightStateModel) {
    return state.selectedColor;
  }

  @Action(TrafficLightActions.ChangeColor)
  onChangeColor({getState, patchState}: StateContext<trafficLightStateModel>) {
    const {selectedColor} = getState();
    if (selectedColor === 'red') {
      patchState({selectedColor: 'green'})
    } else {
      patchState({selectedColor: 'red'})
    }
  }
}

