import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DataService } from '../data.service';
@Component({
  selector: 'app-inner-page',
  templateUrl: './inner-page.page.html',
  styleUrls: ['./inner-page.page.scss'],
})
export class InnerPagePage implements OnInit {
  currentItem = 'Television';
  receivedouterformData: any;
  retrievedDatavialocalstorage:any;
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
    console.log(event);
    console.log(event.target, 'event.target');
    console.log(event.target.value, 'event.target.value');
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
    console.log('element focused');
  }

  handleBlur() {
    this.blurEventMessage = 'Input element blurred!';
    console.log('element blured');
  }

  handleScroll() {
    this.scrollEventMessage = 'Element scrolled!';
  }
  // A method to toggle the button's disabled state
  toggleButtonState() {
    this.isButtonDisabled = !this.isButtonDisabled;
  }

  sendData() {
    console.log("inside senddata")
    const data = { message: 'Hello from Component One-inner-page.page.html' };
    this.dataService.setData(data);
  }
  userColor: string = 'lightblue';
  // logInputValue() {
  //   // Access the input value using the template reference variable
  //   console.log('Input Value:', this.myInput.value);
  // }

  public books: Array<any> = [
    {
      title: 'Math',
      description: 'Math book desc 1',
      price: 5,
      image: '../../assets/images/math.jpg',
    },
    {
      title: 'Physics',
      description: 'Physics book desc 2',
      price: 5,
      image: '../../assets/images/physics.jpg',
    },
    {
      title: 'Biology',
      description: 'Biology book desc 3',
      price: 5,
      image: '../../assets/images/biology.jpg',
    },
    {
      title: 'chemistry',
      description: 'chemistry book desc 4 ',
      price: 5,
      image: '../../assets/images/chemistry.jpg',
    },
  ];

  constructor(private route: ActivatedRoute,private dataService: DataService) {
    console.log("i'm here ")
    const retrievedData2:any = localStorage.getItem('settingItem');
    console.log(retrievedData2,"receiveddata2")
    const newdata:any=JSON.parse(retrievedData2);
    console.log(newdata,"inside inner page 345")
    this.books.push(newdata);
    console.log(this.books,"inconstructor")
    const newvar:any=JSON.stringify(this.books)
    console.log(newvar,"inconstructor newvar")
    localStorage.setItem('updatedbooks',newvar);
    // const retrievedData233:any=localStorage.getItem('settingItem')
    // console.log(retrievedData233,"after setting item")
  }

  ngOnInit() {
   

    // this.route.queryParams.subscribe((params) => {
    //   const receivedDatas = JSON.parse(params['special']);
    //   this.receivedouterformData = receivedDatas;
    //   this.books.push(this.receivedouterformData);
    //   localStorage.setItem('books', JSON.stringify(this.books));
    //   // this.retrieveBooksFromLocalStorage();
    //   console.log(this.receivedouterformData, 'recevied outer form data');
    // });
    

  }
  


   
  // private retrieveBooksFromLocalStorage() {
  //   // Retrieve the stored data from local storage
  //   console.log('inside retrieveBooksFromLocalStorage');
  //   const storedBooks = localStorage.getItem('books');
  //   // console.log(storedBooks);
  //   if (storedBooks !== null) {
  //     // Parse the JSON data back to an array
  //     const booksArray = JSON.parse(storedBooks);

  //     console.log(booksArray);
  //   } else {
  //     console.error('No data found in local storage for key "books".');
  //   }
  //   // Parse the JSON data back to an array
  //   // const booksArray = JSON.parse(storedBooks);

  //   // console.log(booksArray);
  // }
}
