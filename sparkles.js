function animateSparkle(sparkle) {
    //get the coordinates of the sparkle!
    const boundingClientRect = sparkle.getBoundingClientRect()
    const coordinates = {
        x: boundingClientRect.left,
        y: boundingClientRect.top
    }
    sparkle.style.left = `${coordinates.x}px`
    sparkle.style.top = `${coordinates.y}px`
    //animation time!
    const relativeToCenter = {
        x: (coordinates.x - window.innerWidth / 2) / window.innerWidth,
        y: (coordinates.y - window.innerHeight / 2) / window.innerHeight
    }
    const distance = Math.min(window.innerWidth, window.innerHeight) / 2
    sparkle.animate([
        {
            filter: 'blur(0)',
            transform: 'scale(0)'
        },
        {
            filter: 'blur(2px)',
            transform: `scale(1) translate(${relativeToCenter.x * distance}px, ${relativeToCenter.y * distance}px)`
        }
    ], {
        duration: 2000,
        easing: 'ease-in-out'
    })
}

function createSparkle() {
    //create a div class for my sparkle!! thanks hazy for helping with this <3
    const sparkle = document.createElement('div')
    sparkle.classList.add('sparkle')

    //putting the sparkle at a random spot on the screen!!! 
    //"left" and "top" are like x and y values on an an axis!!
    const coordinates = {
        x: Math.random() * (window.innerWidth - 15),
        y: Math.random() * (window.innerHeight - 15)
    }
    sparkle.style.left = `${coordinates.x}px`
    sparkle.style.top = `${coordinates.y}px`
    //hueshift! hue, saturation, lightness!
    sparkle.style.backgroundColor = `hsl(275deg, 80%, ${40+Math.random()*50+Math.random()}%)`
    //adding it to <body>!
    document.body.appendChild(sparkle)
    animateSparkle(sparkle)
    sparkle.animate([
        {
            opacity: 0
        },
        {
            opacity: 1
        },
        {
            opacity: 0
        }
    ], {
        duration: 2000,
        easing: 'ease-in-out'
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