import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-inner-page',
  templateUrl: './inner-page.page.html',
  styleUrls: ['./inner-page.page.scss'],
})
export class InnerPagePage implements OnInit {
  currentItem = 'Television';
 

  isButtonDisabled: boolean = false;

  message: string = '';
  inputValue: string = '';
  selectValue: string = '';
  mouseEventMessage: string = '';
  keyEventMessage: string = '';
  formSubmitMessage: string = '';
  focusEventMessage: string = '';
  blurEventMessage: string = '';
  scrollEventMessage: string = '';

  handleClick() {
    this.message = 'Button clicked!';
  }

  handleInput(event: any) {
    console.log(event)
    console.log(event.target,"event.target")
    console.log(event.target.value,"event.target.value")
    this.inputValue = event.target.value;
  }

  handleChange(event: any) {
    this.selectValue = event.target.value;
  }

  handleMouseOver() {
    this.mouseEventMessage = 'Mouse over the element!';
  }

  handleMouseOut() {
    this.mouseEventMessage = 'Mouse left the element!';
  }

  handleKeyDown(event: any) {
    this.keyEventMessage = `Key pressed: ${event.key}`;
  }

  handleKeyUp(event: any) {
    this.keyEventMessage = `Key released: ${event.key}`;
  }

  handleSubmit() {
    this.formSubmitMessage = 'Form submitted!';
  }

  handleFocus() {
    this.focusEventMessage = 'Input element focused!';
    console.log("element focused")
  }

  handleBlur() {
    this.blurEventMessage = 'Input element blurred!';
    console.log("element blured")
  }

  handleScroll() {
    this.scrollEventMessage = 'Element scrolled!';
  }
  // A method to toggle the button's disabled state
  toggleButtonState() {
    this.isButtonDisabled = !this.isButtonDisabled;
  }
  userColor: string = 'lightblue';
  // logInputValue() {
  //   // Access the input value using the template reference variable
  //   console.log('Input Value:', this.myInput.value);
  // }



  public books: Array<any> = [
    { title: "Math", description: "Math book desc 1" ,price:5,image:"../../assets/images/math.jpg"},
    { title: "Physics", description: "Physics book desc 2" ,price:5,image:"../../assets/images/physics.jpg"},
    { title: "Biology", description: "Biology book desc 3",price:5,image:"../../assets/images/biology.jpg" },
    { title: "chemistry", description: "chemistry book desc 4 ",price:5,image: "../../assets/images/chemistry.jpg" }
  ];

  
  constructor() { }

  ngOnInit() {
  }

}
