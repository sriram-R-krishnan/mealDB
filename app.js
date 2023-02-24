let inputText = document.querySelector('.input-text')
let searchBtn = document.querySelector('.search')
let displayItems = document.querySelector('.displayItems')

let initialContent = document.querySelector('initialContent')
let info = document.querySelector('.info')

async function searchMeals() {
  if (!inputText.value) {
    alert('no recipee found')
  }
  else {
    let dataArr = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText.value}`)
      .then((response) => response.json())
      .then((data) => data.meals);
    console.log(dataArr);
    
    if (!dataArr) {
      alert('no result found')
    }
    else{
      displayItems.innerHTML = ''
      dataArr.map(listEle => {

        let item = document.createElement('div')
        item.className = 'item'
  
        let mealImage = document.createElement('img')
        mealImage.className = 'mealImg'
        mealImage.src = listEle.strMealThumb
  
  
        let mealName = document.createElement('p')
        mealName.className = 'text-center'
        mealName.innerText = listEle.strMeal
  
        let viewRecipe = document.createElement('button')
        viewRecipe.className = 'recipe btn btn-dark '
    

        const link = document.createElement('a');
        link.href = listEle.strYoutube;
        link.innerText='Watch Video'
        link.className='link'
        link.target='_blank'
        
        viewRecipe.appendChild(link)
  
        item.appendChild(mealImage)
        item.appendChild(mealName)
        item.appendChild(viewRecipe)
        displayItems.appendChild(item)
      })
    }
  }

}


searchBtn.addEventListener('click', async function (event) {
  event.preventDefault();
  searchMeals()

})

