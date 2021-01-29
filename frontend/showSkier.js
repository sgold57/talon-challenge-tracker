console.log("HITSHOWPAGEHIT")

const queryParams = new URLSearchParams (window.location.search)
const skierId = queryParams.get('id')
const trailArray = []
const skiedArray = []
const notSkiedArray = []

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
        completedLi.innerText = complete.trail.trail_name
        const completedList = document.getElementById("skied-list")
        completedList.append(completedLi)
        skiedArray.push(complete.trail.trail_name)
        console.log(skiedArray)
      }
    })
    notSkied(trailArray, skiedArray)
  })
  console.log("ARE WE THERE YET?")
  
  function notSkied(array1, array2){
    let skiedBool = false
    for(j = 0; j < array1.length; j++){
      for(i = 0; i < array2.length; i++) {
        if(array2[i] == array1[j].trail_name){
          console.log(array2[i])
          console.log(array1[j].trail_name)
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