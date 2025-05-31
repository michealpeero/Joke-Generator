const butt=document.querySelector('.joker')
const paragraph=document.querySelector('.para')

butt.addEventListener('click', (e)=>{
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(response => response.json())
      .then(json => 
      {
        console.log(json)
        paragraph.innerHTML=`
        <strong> ${json.setup}</strong> <br>
        <strong> ${json.punchline}</strong> <br>

        `

      })
      console.log(butt);
        
})