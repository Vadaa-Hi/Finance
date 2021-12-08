//Дэлгэцтэй ажиллах контроллёр 
var uiController = (function(){
})();

// Санхүүтэй ажиллах контроллёр
var financeController = (function(){
})();

// Програмын холбогч контроллёр
var appController = (function(uiController,financeController){

var ctrlAddItem = function() {
// 1. Оруулах өгөгдлийг дэлгэцнээс олж авна.
console.log("Дэлгэцнээс өгөгдлөө авах хэсэг:");
// 2. Олж авсан өгөгдлүүдээ санхүүгийн контроллёрт дамжуулж тэнд хадгална.
// 3. Олж авсан өгөгдлүүдээ веб дээрээ тохирох хэсэгт нь гаргана.
// 4. Төсвийг тооцоолно. 
// 5. Эцсийн үлдэгдэль тооцоог дэлгэцэнд гаргана.
};

    document.querySelector(".add__btn").addEventListener("click", function(){
        ctrlAddItem();

    });
    //
document.addEventListener("keypress", function(event){
if (event.keyCode === 13 || event.which === 13) {ctrlAddItem();}
})
})(uiController,financeController);