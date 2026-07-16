 // 今日の推し診断
function oshi(){

    let memberArray = [
        "島村嬉唄",
        "環やね",
        "チバゆな",
        "逃げ水あむ"
    ];

    // 0～3のランダムな数字を作る
    let rand = Math.floor(Math.random() * 4);

    const result = document.querySelector("#oshi_result");

    result.textContent =
        "今日の推しは「" + memberArray[rand] + "」です！🎀";

}


// メンバー当てクイズ
function quiz(answer){

    const result =
        document.querySelector("#quiz_result");


    // 正解はチバゆな（番号2）
    if(answer === 2){

        result.textContent =
            "正解です！🎉 チバゆなです！";

    }else{

        result.textContent =
            "残念！もう一度挑戦してみてね！";

    }

}