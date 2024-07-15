import gsap from 'gsap'

export function anim() {
const tl2 = gsap.timeline({paused: true})
const tl = gsap.timeline({paused: true})

tl2.fromTo('.anim-type.line2', 1, {width: 0},{width: '664px', ease:  'steps(68)'}, 0)
tl2.fromTo('.anim-type.line2', 0.5, {'border-right-color': 'rgba(255,255,255,0.75)'}, {
    'border-right-color': 'rgba(255,255,255,0)',
    repeat: -1,
    ease: 'steps(68)'
  }, 0)

tl.fromTo('.anim-type.line1', 1, {width: 0},{width: '928px', ease:  'steps(95)'}, 0)
tl.fromTo('.anim-type.line1', 0.5, {'border-right-color': 'rgba(255,255,255,0.75)'}, {
    'border-right-color': 'rgba(255,255,255,0)',
    repeat: -1,
    ease: 'steps(95)'
  }, 0)

setTimeout(() => {
    tl.play()
    setTimeout(() => tl2.play(), 800)
setTimeout(() =>{
    document.querySelector('.line1').classList.remove('anim-type')
    gsap.set('.anim-type.line1', {borderRight: '0px'})
}, 1200)
setTimeout(() =>{
    document.querySelector('.line2').classList.remove('anim-type')
    gsap.set('.anim-type.line2', {borderRight: '0px'})
}, 2200)
}, 500)

}