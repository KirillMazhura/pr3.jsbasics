const firstRow ='мама мыла раму'
const secondRow ='собака друг человека'
let someRow  = prompt('Please enter your row', 'blaa-blaa-bla')
let someChar = prompt('Please enter your letter', 'a')
let phone = prompt('Please enter your phone numer', '+71234567890')
let counter1=0
let counter2=0
let counter3=0
function aCounter(firstRow, secondRow, someRow) {
    for(let i =0; i<firstRow.length;i++)
    {
        if (firstRow.charAt(i)=='а' ||firstRow.charAt(i)=='а')
        {
            counter1++
        }
    }
    for(let i =0; i<secondRow.length;i++)
    {
        if (secondRow.charAt(i)=='а' || secondRow.charAt(i)=='a')
        {
            counter2++
        }
    }
    (counter1>counter2) ? console.log(firstRow) : console.log(secondRow) 
}
function interactiveCounter(someRow) {
    for(let i =0; i<someRow.length;i++)
    {
        if (someRow.charAt(i)==`${someChar}`)
        {
            counter3++
        }
    }
    console.log(counter3)
}
function formattedPhone(phone) {
    let newRow =''
    if(phone.length==12) {
        newRow=phone.slice(0,2)+' '+'('+phone.slice(2, 5)+')'+' '+phone.slice(5,8)+'-'+phone.slice(8,10)+'-'+phone.slice(10,12)
    }
    else if(phone.length==11 & (phone.charAt(0)!='+' && phone.charAt(0)=='7')) {
        newRow='+'+phone.slice(0,2-1)+' '+'('+phone.slice(2-1, 5-1)+')'+' '+phone.slice(5-1,8-1)+'-'+phone.slice(8-1,10-1)+'-'+phone.slice(10-1,12-1)
    }
    else if(phone.length==11 & (phone.charAt(0)!='+' && phone.charAt(0)=='8')) {
        newRow='+7' + '('+phone.slice(2-1, 5-1)+')'+' '+phone.slice(5-1,8-1)+'-'+phone.slice(8-1,10-1)+'-'+phone.slice(10-1,12-1)
    }
    else if(phone.length==10) {
        newRow='+7' + ' ' + '('+phone.slice(2-2, 5-2)+')'+' '+phone.slice(5-2,8-2)+'-'+phone.slice(8-2,10-2)+'-'+phone.slice(10-2,12-2)
    }
    else {
        alert('wrong number')
    }
    console.log(newRow)
}
aCounter(firstRow, secondRow, someRow)
interactiveCounter(someRow)
formattedPhone(phone)