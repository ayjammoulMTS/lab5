function $(id){
    return document.getElementById(id);
}

var slider = $('slider');
var sizes  = $('size');

function getSize(){
   return $('slider').value
};

function checkedButtons(id){
    var fillArray = []
    elements = $(id).getElementsByTagName('input')
    for(let i=0; i<elements.length;i++){
        if(elements[i].checked){
            fillArray.push(elements[i]);
        }
    }
    return fillArray;
}
// var fillArray = []
// document.querySelector('input[name="meets"]:checked').map(function(){
//     meet.push($(this).val());
//     console.log('here')
// });
// return

function getMeat(){
    return checkedButtons('meats');
}

// var veggie = []
// console.log('HEY')
// document.querySelector('input[name="veggie"]:checked').map(function(){
//     veggie.push($(this).val());
//     console.log('here')
// });
// console.log('hola')

function getVeggie(){
    return checkedButtons('veggies');
}


function getCheese(){
    var cheese = $('cheese').getElementsByTagName('input')
    for(let i = 0; i < cheese.length; ++i) {
        if (cheese[i].checked) {

          if (cheese[i].value === 'cheese') return 1;
          else if (cheese[i].value === 'no cheese') return 2;
          else if (cheese[i].value === 'extra cheese') return 3;
        }
      }
    return 0;
}

function getPizzaSize(amount){
    if (amount === '1') {

        return 'Small';

      } 
    else if (amount === '2') {

        return 'Medium';

      } 
    else if (amount === '3') {

        return 'Large';

      } 
    else {

        return 'X-Large';
      }

}

function getSizePrice(amount) {
    if (amount === '1') {
      return 6;
    }
    else if(amount === '2') {
      return 10;
    }
    else if(amount === '3') {
      return 14;
    }
    else {
      return 16;
    }
  }

function ChangePizzaSize(amount){
    const image = $('image')
    if(amount == 1){
        $("size").innerHTML = "Small 6$"
        image.style.width   = '100px';
        image.style.height  = '100px';


    }
    else if(amount == 2){
        $("size").innerHTML = "Medium 10$"
        image.style.width   = '150px';
        image.style.height  = '150px';

    }
    else if(amount == 3){
        $("size").innerHTML = "Large 14$"
        image.style.width   = '200px';
        image.style.height  = '200px';

    }
    else{
        $("size").innerHTML = "X-Large 16$"
        image.style.width   = '250px';
        image.style.height  = '250px';
    }

}

function CalculateTotal(){

    return getMeat().length*2 + getVeggie().length + getSizePrice(slider.value) + (getCheese()===3 ? 3:0);
}


function fillSummary(){
    const orderAdd  = $('dlvrTo');
    const address   = $('Address')
    const firstName = $('fname');
    const lastName = $('lname');
    const email = $('Email');
    const phoneNumber = $('PhoneNumber');
    const city = $('City');

    orderAdd.textContent       = firstName.value + ' ' + lastName.value + ', ' + email.value + ', ' 
                                + phoneNumber.value + ', ' + city.value +
                             '-' + address.value;
    
    
    var orderList = $('orderList')
    
    var li = document.createElement("li");
    li.appendChild(document.createTextNode( getPizzaSize(slider.value) + ' size'));
    orderList.append(li);
    
    

    const info = checkedButtons('first')
    info.innerHTML =""

    for(let i=0; i<info.length; i++){
        if(info[i].getAttribute('name') != 'Pay'){
            li = document.createElement("li");
            li.appendChild(document.createTextNode(info[i].value));
            orderList.appendChild(li)
        }
    }
    

    $('total').innerHTML = "Total " + CalculateTotal() + " $";
}



function goToPage(pg){
    const page1 = $('form-1')
    const page2 = $('form-2')
    const summary = $('OrderSummary')
    const next    = $('nextButton')
    const back    = $('backButton')
    const body    = $('body')
    if(pg =='1'){
        page1.style.display     = 'inherit';
        page2.style.display     = 'none';
        summary.style.display   = 'none';
        back.style.display      = 'none';
        body.style.backgroundColor =  '#01dddd';

    }
    else if(pg =='2'){
        page1.style.display     = 'none';
        page2.style.display     = 'inherit';
        summary.style.display   = 'none';
        back.style.display       ='inherit';
        next.style.display='inherit';
        body.style.backgroundColor =  '#e93a57';
    }
    else if(pg =='3'){
        page1.style.display     = 'none';
        page2.style.display     = 'none';
        summary.style.display   = 'inherit';
        back.style.display      = 'inherit';
        next.style.display      = 'none';
        body.style.backgroundColor =  '#3fc38e';
        fillSummary();
    }

}


function next(){
    const page1 = $('form-1')
    const page2 = $('form-2')
    const summary = $('OrderSummary')
    if(page1.style.display  != 'none'){
        goToPage('2')
    }
    else if(page2.style.display === 'inherit'){
        goToPage('3')
    }
}

function back(){
    const page1 = $('form-1')
    const page2 = $('form-2')
    const summary = $('OrderSummary')
    if(page2.style.display  != 'none'){
        goToPage('1')
    }
    else if(summary.style.display === 'inherit'){
        goToPage('2')
    }
}