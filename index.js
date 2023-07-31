function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance <= 400) {
    return 'This one is on me!'
  } else if (distance > 400 && distance < 2001) {
     return 'That will be twenty bucks.';
  } else if (distance > 2000 && distance < 2500) {
     return 'I will gladly take your thirty bucks.';
  } else if (distance > 2500) {
     return 'No can do.';
  } else {
     return 'Error';
  }
}

function ternaryCheckCity(city){
  // Write your code here!

  let answer = city === 'NYC' ? 'Ok, sounds good.' : 'No go.';

  return answer;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let answer;

  switch (tip) {
    case 'generous':
    answer = 'Thank you so much.'
    break;
    case 'not as generous':
    answer = 'Thank you.'
    break;
    default:
    answer = 'Bye.'
  }

  return answer;
}