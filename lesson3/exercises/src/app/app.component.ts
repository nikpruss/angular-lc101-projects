import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = false;


  takeOff () {
    let result = window.confirm("Confirm that the shuttle is ready for takeoff.");
    if (result){
        this.message = "Shuttle in flight.";
        this.color = "blue";
        this.height = 10000;
        this.takeOffEnabled = true;
    }
  }

  landProcess (rocketImage) {
    window.alert("The shuttle is landing. Landing gear engaged.");        
    this.message = "The shuttle has landed.";
    this.color = 'green';
    this.height = 0;  
    rocketImage.style.bottom = '0px';  
  }

  missionAbort (rocketImage) {
    let result = window.confirm("Confirm that you want to abort the mission.");
    if (result) {
        this.message = "Mission aborted.";
        this.color = 'red';
        this.height = 0;    
        rocketImage.style.bottom = '0px';
    }
  }

  moveRocket (rocketImage, direction) {
    if (direction === 'right') {
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
    }
    if (direction === 'left') {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
    }
    if (direction === 'up') {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
      if (parseInt(rocketImage.style.bottom) == 320) {
        this.color = "orange";
      }
    }
    if (direction === 'down') {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
    }
  }   

  edgeClose (rocketImage) {
    if (parseInt(rocketImage.style.bottom) > 310 || parseInt(rocketImage.style.bottom) < 0) {
      this.color = "orange";
    }
    if ( parseInt(rocketImage.style.left) < -10 || parseInt(rocketImage.style.left) > 460) {
      this.color = "orange";
    }
    console.log (parseInt(rocketImage.style.left));  
  }
  
}
