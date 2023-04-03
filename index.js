function scuberGreetingForFeet(dist){
  if (dist <= 400)
    return 'This one is on me!'
  else if (dist <= 2000)
    return 'That will be twenty bucks.'
  else if (dist <= 2500)
    return 'I will gladly take your thirty bucks.'
  else return 'No can do.'
}

function ternaryCheckCity(city){
  let response = ''
  city === 'NYC' ? (response = 'Ok, sounds good.') : (response =  'No go.')
  return response
}

function switchOnCharmFromTip(grat){
  switch(grat) {
    case 'generous':
      return 'Thank you so much.'
      break
    case 'not as generous':
      return 'Thank you.'
      break
    default :
      return 'Bye.'
    break
  }
}