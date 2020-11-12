const {body} = document

let zoomActiv = false
window.addEventListener('keydown', (e) => {
    e.key === "z" ? zoomActiv = !zoomActiv :  zoomActiv = zoomActiv
    
})

window.addEventListener('mousemove', (e) => {
    if(zoomActiv){
        const {clientX: x , clientY: y }= e
        body.style.transform = 'scale(2)'
        body.style.transformOrigin = `${x}px ${y}px`
    } else {
        body.style.transform= 'none'
    }
    
    
})