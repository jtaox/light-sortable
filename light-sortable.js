let yPos
const list = document.querySelector("ul");
let target = null
list.ondragstart = function(e) {
  e.dataTransfer.dropEffect = "move";
  activeEle = null
  target = e.target
  tag = true
  preEle = target
  globalRect = target.getBoundingClientRect()
  yPos = globalRect.y
  const i = ([...e.target.parentNode.children]).findIndex(item => item === e.target)
  console.log(i)

  // clone = target.cloneNode(true)
  // target.style.display = 'none'
  // target.parentNode.insertBefore(clone, target)


  // e.dataTransfer.setData('Text', target.textContent)

  // const rect = target.getBoundingClientRect()
  // console.log(rect)
  // const clone = target.cloneNode(true)
  // clone.style.position = 'fixed'
  // clone.style.left = rect.left + 'px'
  // clone.style.top = rect.top + 'px' 
  // clone.style.opacity = '0.8'
  // clone.style.zIndex = '-1'
  // clone.draggable = false
  // list.appendChild(clone)
}
const activeEle
const tag = false
const set = new Set()

// 当前持有的target
const currentEntrer 
const preEle

// 持有的element
const enter 
const i = 0
list.ondragenter = function(e) {
  if (e.target === list) return
  console.log('进入----->', e.target.textContent)
  if (target === e.target) {

  } else {
    currentEntrer = e.target
  console.log(currentEntrer.textContent, 'kkkkkkkkkkkkkkkkkk')
  console.log(currentEntrer.getBoundingClientRect().y, target.getBoundingClientRect().y, 'uuuuuuuuuu')
  }

  if (!enter && enter != target) {
    enter = e.target
  }

  if (target === e.target) {
    return
  } 

  const t = e.target
  const r = t.getBoundingClientRect()
  set.add(currentEntrer)
  e.dataTransfer.dropEffect = "move"
  const juli = r.y - globalRect.y
  const juli2 = r.y - target.getBoundingClientRect().y
  

  if (r.y < target.getBoundingClientRect().y) {
    // 从下向上滑
    if (currentEntrer === e.target) {

      if (e.target === (currentEntrer)) {
        juli2 = 0
      } else{
        
      }

      if (getNextSibling(e.target) == currentEntrer) {
        juli2 = 0
        console.log('000000000000')
      } else {
        // juli2 = 0
        console.log(juli2, '--++++++++++++=====')
      }
      
    } else {
      console.log('else..........')
      juli2 = -(target.getBoundingClientRect().y - r.y)
    }
  } else {
    // 从上向下
  }
  console.log('计算->', r.y, target.getBoundingClientRect().y)
  // const juli = r.y - preEle.getBoundingClientRect().y
  console.log('持有的距离' + target.textContent + '=' + target.getBoundingClientRect().y,
    '当前距离' + e.target.textContent + ' =' + r.y, 
    'currentEntrer' + currentEntrer.textContent + ' =' + currentEntrer.getBoundingClientRect().y)
  t.style.transform = 'translate(' + 0 + 'px,' + (-juli2) + 'px)'
  target.style.transform = 'translate(' + 0 + 'px,' + (juli) + 'px)'

}

list.ondragleave = function(e) {
  console.log('离开------>', e.target.textContent)
}

list.ondragover = function(e) {
  e.preventDefault() 
} 



list.ondragend = function(e) {
  e.preventDefault()
  console.log('current', getNextSibling(currentEntrer))
  console.log(`将${target.textContent}插入到${getNextSibling(currentEntrer)}前面`)
  console.log(target, currentEntrer)
  target.parentNode.insertBefore(target, getNextSibling(currentEntrer))
  e.target.style.transform = 'translate(' + 0 + 'px,' + 0 + 'px)'
  target.style.transform = 'translate(' + 0 + 'px,' + 0 + 'px)'
  set.forEach(e => {
    e.style.transition = 'none'
    e.style.transform = 'translate(' + 0 + 'px,' + 0 + 'px)'
  })
  
}

function getNextSibling(el) {
  el = el.nextSibling
  if (el.nodeType == 3) return getNextSibling(el)
  else return el
}