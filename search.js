var availableKeywords = [
    'Mhoit Sahrma',
    'divya attri',
    'aman kaushik',
    'pooja kaushik',
    'monu sharma',
    'ritu sharma',
    'pratyush sharma',
    'sumit verma',
    'anuj gupta',
    'chirag kaushik'
];
var resultBox = document.querySelector(".result-box");
var inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    var result = [];
    var input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
          return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);
};

function display(result){
    var content = result.map((list)=>{
        return "<li>" + list + "</li>";
    });

    resultBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}