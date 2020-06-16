export default (container) => {
    const containerWidth = container.offsetWidth
    const item = container.querySelector('.active')
    const activeItemOffset = item.offsetLeft
    const activeItemWidth = item.offsetWidth
    const containerCenter = containerWidth/2
  
    container.scrollLeft = activeItemOffset - containerCenter + (activeItemWidth/2)
}