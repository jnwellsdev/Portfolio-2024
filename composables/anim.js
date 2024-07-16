import gsap from 'gsap'
import TextPlugin from 'gsap/TextPlugin'
gsap.registerPlugin(TextPlugin)

export function anim(val, complete) {
  if(!complete) {
    gsap.fromTo('.anim-cursor', {autoAlpha: 0, x: -20}, {autoAlpha: 1, duration: 0.5, repeat: -1, ease: 'steps(1)'});

    gsap.to('.anim-text', {text: {value: val}, duration: 4, delay: 1, ease: 'none'})
  
    setTimeout(() => {
      gsap.set('.anim-cursor', {display: 'none'})
    }, 6000)
  } else {
    gsap.set('.anim-text', {text: {value: val}})
    gsap.set('.anim-cursor', {display: 'none'})

  }


}