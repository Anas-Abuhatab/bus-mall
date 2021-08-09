'use strict';

let arrOfImg = [ //! STEP NUMBER ONE  get the constractor property source
  './img/bag.jpg',
  './img/banana.jpg',
  './img/bathroom.jpg',
  './img/boots.jpg',
  './img/breakfast.jpg',
  './img/bubblegum.jpg',
  './img/chair.jpg',
  './img/cthulhu.jpg',
  './img/dog-duck.jpg',
  './img/dragon.jpg',
  './img/pen.jpg',
  './img/pet-sweep.jpg',
  './img/scissors.jpg',
  './img/shark.jpg',
  './img/sweep.png',
  './img/tauntaun.jpg',
  './img/unicorn.jpg',
  './img/water-can.jpg',
  './img/wine-glass.jpg',
];
let firstImg = document.getElementById( 'firstImg' ); //!STEP #5 getElementById
let secondImg = document.getElementById( 'secondImg' );
let thirdImg = document.getElementById( 'thirdImg' );
let image = document.getElementById( 'imagesection' );
let botton = document.getElementById( 'botton' );



let cont = 0;
let maxcont = 25;



function Mall ( imgName ,imgSrc ){ //! STEP NUMBER TWO  make constractor with his tool (all)
  this.imgName = imgName;
  this.imgSrc = imgSrc;
  this.numofshow = 0;
  this.clickCount = 0;
  Mall.mallAll.push( this );

}
Mall.mallAll = [];


for( let i = 0;i < arrOfImg.length ;i++ ){ //! STEP NUMBER THREE make objects
  new Mall ( arrOfImg[i].split( '.' )[1].split( '/' )[2] , arrOfImg[i] );
}

let theRandomone = 0;
let theRandomtwo = 0;
let theRandomthree = 0;



function render(){ //! STEP NUMBER FOUR make render go to JS section on html and see the id

  theRandomone = random( 0,arrOfImg.length - 1 );
  theRandomtwo = random( 0,arrOfImg.length - 1 );
  theRandomthree = random( 0,arrOfImg.length - 1 );

  firstImg.src = Mall.mallAll[theRandomone].imgSrc; //!STEP #6 add parameter to id
  secondImg.src = Mall.mallAll[theRandomtwo].imgSrc;
  thirdImg.src = Mall.mallAll[theRandomthree].imgSrc;

  Mall.mallAll[theRandomone ].numofshow++;
  Mall.mallAll[ theRandomtwo ].numofshow++;
  Mall.mallAll[ theRandomthree ].numofshow++;


}

render();

function random( min, max ) {
  return Math.floor( Math.random() * ( max - min + 1 ) + min );
}


image.addEventListener( 'click' , clicker );

function clicker( event ){

  if ( ( event.target.id === 'firstImg' || event.target.id === 'secondImg' ||
  event.target.id === 'thirdImg' ) && ( cont < maxcont ) ){
    if ( event.target.id === 'firstImg' ){
      Mall.mallAll[theRandomone].clickCount++;
    }

    if ( event.target.id === 'secondImg' ){
      Mall.mallAll[theRandomtwo].clickCount++;
    }
    if ( event.target.id === 'thirdImg' ){
      Mall.mallAll[theRandomthree].clickCount++;
    }

    cont++;
    render();

  }
  if( cont >= maxcont ){
    image.removeEventListener( 'click' , clicker );
  }

}

botton.addEventListener( 'click' ,result );
function result( ){
  let ul = document.createElement( 'ul' );
  botton.appendChild( ul );

  for ( let i = 0; i < Mall.mallAll.length; i++ ) {

    let li = document.createElement( 'li' );
    li.textContent = `${Mall.mallAll[i].imgName} had ${Mall.mallAll[i].numofshow} votes ,and was seen ${Mall.mallAll[i].clickCount}
  times`;
    ul.appendChild( li );

  }
}
