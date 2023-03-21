const selectors = document.querySelectorAll("li"),
      images = document.querySelectorAll('img');

let imageSrc;
selectors.forEach(function(selector){
    selector.addEventListener('mouseover', function() {
        imageSrc = this.getAttribute('data-image');
        images.forEach(image => {
            if(image.getAttribute('data-image') === imageSrc){
                image.style.display = 'block';
            }else{
                image.style.display = 'none';
            }
        })
    })
})

let text = document.querySelectorAll('p')
function addActiveToObject(objects){
    objects.forEach(object => {
        object.addEventListener('mouseover', event => {
          // 先移除所有元素的 .active 類別
          objects.forEach(object => {
            object.classList.remove('active');
          });
      
          // 再為當前被點擊的元素添加 .active 類別
          event.currentTarget.classList.add('active');
        });
      });
}

addActiveToObject(selectors)

