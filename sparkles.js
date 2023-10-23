function createSparkle(){
    //create a div class for my sparkle!! thanks hazy for helping with this <3
    const sparkle = document.createElement('div')
    sparkle.classList.add('sparkle')

    //putting the sparkle at a random spot on the screen!!! 
    //"left" and "top" are like x and y values on an an axis!!
    sparkle.style.left = `${Math.random() * (window.innerWidth - 15)}px`
    sparkle.style.top = `${Math.random() * (window.innerHeight - 15)}px`
    //hueshift! hue, saturation, lightness!
    sparkle.style.backgroundColor = `hsl(275deg, 80%, ${40+Math.random()*50+Math.random()}%)`
    //adding it to <body>!
    document.body.appendChild(sparkle)

    sparkle.addEventListener('animationend', () => {sparkle.remove()
    })
    
    setTimeout(() => sparkle.remove(), 2000)
}

function createSparkleLoop(){
    const sparkleCount = Math.random() * 100
    for (let i = 0; i < sparkleCount; i++) {
        setTimeout(createSparkle, Math.random() * 200)
    }
    setTimeout(createSparkleLoop, Math.random() * 800 + 100)

}
//repeat sparkle loop :3333

createSparkleLoop()