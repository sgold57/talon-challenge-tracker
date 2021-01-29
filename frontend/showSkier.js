
const queryParams = new URLSearchParams (window.location.search)
const skierId = queryParams.get('id')
const trailArray = []
const skiedArray = []
const notSkiedArray = []

fetch(`http://localhost:3000/skiers/${skierId}`)
  .then(response => response.json())
  .then(skier => {
    const skierHeader = document.getElementById("skier-welcome")
    skierHeader.innerText= `Here is your challenge status, ${skier.name}:`
  })

fetch("http://localhost:3000/trails")
  .then(response => response.json())
  .then(trails => {
      trails.forEach(trail => {
        trailArray.push(trail)
        console.log(trailArray)
      })
  })

fetch("http://localhost:3000/completes")
  .then(response => response.json())
  .then(completes => {
    completes.forEach(complete => {
      if(complete.skier.id == skierId) {
        const completedLi = document.createElement('li')
        completedLi.innerHTML = `<img src="./images/Birds/${complete.trail.id}.jpeg"><br>${complete.trail.trail_name}` 
        const completedList = document.getElementById("skied-list")
        completedList.append(completedLi)
        skiedArray.push(complete.trail.trail_name)
        console.log(skiedArray)
      }
    })
    notSkied(trailArray, skiedArray)
    const completionPercentDiv = document.getElementById("completion-percent-div")
    const percentDone = (skiedArray.length/14)
    completionPercentDiv.innerHTML = `You have completed ${skiedArray.length} of ${trailArray.length} trails: <br> That is ${(percentDone * 100).toFixed(2)}%.<br>`
    if((percentDone*100) < 25){
      completionPercentDiv.append("Pathetic...I just baby birded in my mouth.")
    } else if (25 <= (percentDone*100) < 50){
      completionPercentDiv.append("Not even halfway...back to ski school, punk.")
    } else if (50 <= (percentDone*100) < 100){
      completionPercentDiv.append("Now we're cruising... but can you close?")
    } else {
      completionPercentDiv.append("YOU HAVE DEFEATED THE FLOCK! Congratulations.")
    }

  })
  
  function notSkied(array1, array2){
    let skiedBool = false
    for(j = 0; j < array1.length; j++){
      for(i = 0; i < array2.length; i++) {
        if(array2[i] == array1[j].trail_name){
          skiedBool = true
          continue
        } 
      }
      if (skiedBool == false){
        const toDoLi = document.createElement('li')
        const toDoOption = document.createElement('option')
        const toDoInput = document.createElement('input')
        console.log(trailArray[j])
        
        toDoLi.innerText = trailArray[j].trail_name
        toDoOption.value = trailArray[j].id
        console.log(toDoOption)
        toDoOption.innerText = trailArray[j].trail_name
        toDoInput.type = "hidden"
        toDoInput.name = "skier_id"
        toDoInput.value = skierId
        
        const toDoList = document.getElementById("not-yet")
        const toDoDropdown = document.getElementById("trail-field")
        toDoDropdown.append(toDoOption)
        toDoDropdown.append(toDoInput)
        toDoList.append(toDoLi)
      } else{
        skiedBool = false
      }
    }
  }

  

// fetch("http://localhost:3000/trails")
//   .then(response => response.json())
//   .then(trails => {
//     trails.forEach(trail => {
//       for(i = 0; i < skiedArray.length; i++){
//         if(trail.name == skiedArray[i]){
//           continue
//         }else{
//           const toDoLi = document.createElement('li')
//           toDoLi.innerText = 
//         }

//       }
//     })
//   })