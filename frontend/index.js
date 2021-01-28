console.log("HITHIT")

fetch("http://localhost:3000/skiers")
  .then(response => response.json())
  .then(skiers => {
    skiers.forEach(skier => {
      const skierLi = document.createElement("li")
      skierLi.innerHTML = `<a href="http://localhost:3001/showSkier.html?id=${skier.id}">${skier.name}</a>`
      const skierList = document.getElementById('skier-list')
      skierList.append(skierLi)
    })
  })