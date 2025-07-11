// 1. select the elements from  the DOM
const articleFooter = document.querySelector('.article-footer');
const shareButton = document.querySelector('.share-btn');
const tooltip = document.querySelector('.share-toolpip');

// 2. Add a click event listener to the button
shareButton.addEventListener("click", (Event)=>{
    // Prevent the click from bubbling up to the document
    Event.stopPropagation();

    // 3.toggle the 'active'class on all relevant Element
    articleFooter.classList.toggle('active');
    shareButton.classList. toggle('active');
    tooltip.classList. toggle('active');

})
// optional: close the tooltip
