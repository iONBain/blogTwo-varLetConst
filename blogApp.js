document.addEventListener("mousemove", parallax)

function parallax(e){
    this.querySelectorAll(".bgAnimation").forEach(svg => {
        const speed = svg.getAttribute("ani-speed")
        const x = (window.innerWidth + e.pageX*speed)/50
        const y = (window.innerHeight + e.pageY*speed)/50

        svg.style.transform =  `translateX(${x}px) translateY(${y}px)`
        
    });
}