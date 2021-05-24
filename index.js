function superbowlWin(array){
    let winningYear = array.find(e=>e.result === 'W')

   if(winningYear){ return winningYear.year}
}