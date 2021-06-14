//1 - Consider the situation in which you are required to check if a number is 1 or 0. If it’s 1 you need to print true. Otherwise, you should print false. Using If Else 
function number()
{
   var digit = document.getElementById("input_number").value;
   if(digit==1)
   {
       console.log("True , The Value is 1");
   }
   else if(digit==0)
   {
    console.log("False , The Value is 0");
   }
   else
   {
    console.log("The Value is not 1 and 0");
   }

   var number = document.getElementById("print_value");
   number.value="The Value Entered is " +digit;
   
   console.log(print_value);
}
//1 - Consider the situation in which you are required to check if a number is 1 or 0. If it’s 1 you need to print true. Otherwise, you should print false. Using Switch 

function inputSwitch()
{

var number = document.getElementById("input_switch").value;
switch(number)
{
        case (number=1):
        console.log("True , The Value is 1");
        break;

        case (number=0):
        console.log("False , The Value is 0");
        break;

        default:
            console.log("The Value is not 1 and 0");
            break;
}

}
// 2 - You are given two numbers, num1 = 4 and num2 = 7. Add both and return true if both are equal to 11. Otherwise, return false, if they don’t equal 11. Using If Else 

var num1 = 4;
var num2 = 7;
var sum = num1+num2;
if(sum==11)
{
    console.log("True, both are equal to 11");
}
else
{
    console.log("False, they don’t equal to 11");
}

// 3 - You are given two numbers, num1 = 4 and num2 = 7. Add both and return true if both are equal to 11. Otherwise, return false, if they don’t equal 11. Switch Statement.

        switch(sum)
        {
            case (sum=11):
                console.log("True, both are equal to 11");
                break;

                default:
                    console.log("False, both are not to 11");
                    break;
    
        }


// 3 - Suppose a situation in which you are expected to show ‘less than 10’ if a number is less than 10. However, if it’s greater than 10, print ‘greater than 10’. Also, deal with the case in which it’s equal to 10 with an appropriate message.

function digit()
{
    var input = document.getElementById("input_digit").value;
    if(input<10)
    {
            console.log("Value Entered is Less Than 10 ");
    }
    else if(input>10)
    {
        console.log("Value Entered is Greater Than 10 ");
    }
    else if(input==10)
    {
        console.log("Value Entered is Equal to 10 ");
    }


    else
    {
    console.log("None of the situation is True ");
    }

}

// 3 - Suppose a situation in which you are expected to show ‘less than 10’ if a number is less than 10. However, if it’s greater than 10, print ‘greater than 10’. Also, deal with the case in which it’s equal to 10 with an appropriate message. Switch Statement

function Switch_Digit()
{
    var switch_Input = document.getElementById("switch_digit").value;
    switch(switch_Input)

    {
        case (switch_Input<10):
            console.log("Value is less Than is 10");
            break;

            case (switch_Input>10):
                console.log("Value is Greater Than is 10");
                break;

                case (switch_Input=10):
                    console.log("Value is Equal to 10");
                    break;

                    default:
                        console.log("You Have Entered a Wrong Value");
                        break;
    }
}


// 4 - Suppose you are given a number and you need to check whether it’s even or odd. How'd you do that?

    function evenOdd()
    {
            var input_number = document.getElementById("evenorodd").value;
            if(input_number%2==0)
            {
                console.log("No is even");
            }
            else
            {
                console.log("No is Odd");
            }

    }

    function switch_evenOdd()
    {
        var input_number = document.getElementById("evenorodd_switch").value;
        switch(input_number)
        {
           case (input_number%2==0):
               console.log("No is Even");
               break;

               case (input_number%2==1):
                console.log("No is odd");
                break;
                
        }
    }

    // 5 - You need to write a function that prints out ‘wild animals’ if the names of lion and leopard are passed to it. However, if I pass the names of cats and rabbits to it, it prints ‘pet animals’. However, if I pass any other name to it, it says ‘unknown’

    function animals()
    {
        var animal = document.getElementById("animal_name").value;
        if( animal =="lion" || animal =="leopard")
        {
                console.log("You have Entered Wild Animals");
        }
        else if(animal =="cats" || animal =="rabbits")
        {
            console.log("You have Entered Pet Animals");
        }
        else
        {
            console.log("Unknown");
        }
    }

     // 5 - You need to write a function that prints out ‘wild animals’ if the names of lion and leopard are passed to it. However, if I pass the names of cats and rabbits to it, it prints ‘pet animals’. However, if I pass any other name to it, it says ‘unknown’ Using Switch


     function switch_Animals()
     {
         var animal = document.getElementById("switch_animal_name").value;
         switch(animal)
         {
                case(animal =="lion" || animal =="leopard"):
                console.log("You have Entered Wild Animals");
                break;

                case(animal =="cats" || animal =="rabbits"):
                console.log("You have Entered Pet Animals");
                break;
                
         }
        }