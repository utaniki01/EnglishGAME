
//フロント(日本語)のテキストを取得する変数
const japanese=document.getElementById('Japanese');
//フロント(英語)のテキストを取得する変数
const English=document.getElementById('English');
//次へボタンのイベントを格納する変数
const next=document.querySelector('.nextbutton');
next.disabled=true;
//frontのクラスを取得
const front=document.querySelector('.front');
//backのクラスを取得
const back=document.querySelector('.back');
//回答ボタンを取得
const guessSubmit =document.querySelector('.guessSubmit');
//入力欄のidを受け取る
var input = document.getElementById('tangoField');
//再プレイボタンの要素を取得
const Reset=document.querySelector('.reset');
//ボタンのイベントを格納
Reset.addEventListener('click', reset);
//正解不正解の表示するための要素を取得
const lastResult =document.querySelector('.lastResult');
//正解数をカウントする変数
let correctCount=0;
//ゲーム数のカウントをする変数
let gameCount=0;
//表示される数値のidを取得
var correctText=document.getElementById('contentCount');
correctText.textContent=correctCount;
//正解数によってランクを表示して再読み込み
function alertRank() {
    if(correctCount===10){
        alert('全問正解');
    }
    else if(correctCount>=7){
        alert('すごい！');
    }
    else if(correctCount>=4)
        alert('もう一押し！');
    else{
        alert('もう一度挑戦だ！');
    }
    location.reload();
}
function reset() {
    location.reload();
}
//ゲーム数によって処理を分ける関数
function GameRoot(){
//
if (gameCount==10) {
    setTimeout(() => {
       alertRank(); 
    }, 1000);
    next.disabled=true;
}else{
//次へのボタンの入力不可
    next.disabled=false;
}
    input.disabled=true;
    //ボタンも押せない
    guessSubmit.disabled=true;
    //正誤判定
}
//フリップするための関数を追加する
function flip() {
    front.classList.add('flip');//flipを追加
    back.classList.add('flip');//flipをついか
    
}

//クリック時にクラス追加
//回答ボタンのクリックによるイベント
guessSubmit.addEventListener('click',()=>{
    let answer = input.value;//入力した値を受け取る
    let correct=tangoList[index].back;
    //ゲーム数を加算
    gameCount++;
    if(answer===correct){
       lastResult.textContent =
        'おめでとう！正解です！';
        lastResult.style.backgroundColor =
        'red';
        correctCount++;
    correctText.textContent=correctCount;
    }else{
        lastResult.textContent=
        '残念！不正解です！';

        lastResult.style.backgroundColor='blue';
    
    }
    flip();//裏返す
    GameRoot();//ボタン押せなくする


}); 
//英単語を格納する配列
const tangoList=[
  {front:"りんご", back:"apple"},
  {front:"洗う", back:"wash"},
  {front:"自宅", back:"home"},
  { front: "できる，有能な", back: "able" },
  { front: "午後", back: "afternoon" },
  { front: "再び", back: "again" },
  { front: "年齢，時代", back: "age" },
  { front: "前", back: "ago" },
  { front: "すべての", back: "all" },
  { front: "すでに", back: "already" },
  { front: "もまた", back: "also" },
  { front: "いつも", back: "always" },
  { front: "アメリカ合衆国", back: "America" },
  { front: "1つの", back: "an" },
  { front: "～と、そして", back: "and" },
  { front: "怒った", back: "angry" },
  { front: "動物", back: "animal" },
  { front: "りんご", back: "apple" },
  { front: "４月", back: "April" },
  { front: "到着する", back: "arrive" },
  { front: "～に", back: "at" },
  { front: "８月", back: "August" },
  { front: "おば", back: "aunt" },
  { front: "オーストラリア", back: "Australia" },
  { front: "秋", back: "autumn" },
  { front: "悪い", back: "bad" },
  { front: "カバン", back: "bag" },
  { front: "ボール", back: "ball" },
  { front: "銀行，土手", back: "bank" },
  { front: "土手", back: "bank (embankment)" },
  { front: "野球", back: "baseball" },
  { front: "バスケットボール", back: "basketball" },
  { front: "バット", back: "bat" },
  { front: "美しい", back: "beautiful" },
  { front: "ベッド", back: "bed" },
  { front: "一番良い", back: "best" },
  { front: "大きい", back: "big" },
  { front: "自転車", back: "bike" },
  { front: "鳥", back: "bird" },
  { front: "誕生日", back: "birthday" },
  { front: "黒い", back: "black" },
  { front: "青い", back: "blue" },
  { front: "ボート", back: "boat" },
  { front: "本", back: "book" },
  { front: "両方", back: "both" },
  { front: "箱", back: "box" },
  { front: "少年", back: "boy" },
  { front: "パン", back: "bread" },
  { front: "朝食", back: "breakfast" },
  { front: "兄弟", back: "brother" },
  { front: "バス", back: "bus" },
  { front: "忙しい", back: "busy" },
  { front: "しかし", back: "but" },
  { front: "買う", back: "buy" },
  { front: "～よって", back: "by" },
  { front: "ケーキ", back: "cake" },
  { front: "カメラ", back: "camera" },
  { front: "～できる、してもよい", back: "can" },
  { front: "カナダ", back: "Canada" },
  { front: "帽子", back: "cap" },
  { front: "自動車", back: "car" },
  { front: "注意深い", back: "careful" },
  { front: "猫", back: "cat" },
  { front: "捕まえる", back: "catch" },
  { front: "いす", back: "chair" },
  { front: "機会", back: "chance" },
  { front: "教会", back: "church" },
  { front: "市民", back: "citizen" },
  { front: "市，都会", back: "city" },
  { front: "学級，授業", back: "class" },
  { front: "きれいな", back: "clean" },
  { front: "店員", back: "clerk" },
  { front: "冷たい，寒い", back: "cold" },
  { front: "集める", back: "collect" },
  { front: "色", back: "color" },
  { front: "来る", back: "come" },
  { front: "コンピュータ", back: "computer" },
  { front: "料理人", back: "cook" },
  { front: "涼しい", back: "cool" },
  { front: "国，いなか，地方", back: "country" },
  { front: "雌牛", back: "cow" },
  { front: "カップ", back: "cup" },
  { front: "踊る", back: "dance" },
  { front: "危険", back: "danger" },
  { front: "暗い，黒い", back: "dark" },
  { front: "日付", back: "date" },
  { front: "娘", back: "daughter" },
  { front: "日", back: "day" },
  { front: "１２月", back: "December" },
  { front: "机", back: "desk" },
  { front: "日記", back: "diary" },
  { front: "doの過去形", back: "did" },
  { front: "夕食", back: "dinner" },
  { front: "する", back: "do" },
  { front: "医者", back: "doctor" },
  { front: "３人称単数", back: "does" },
  { front: "犬", back: "dog" },
  { front: "人形", back: "doll" },
  { front: "ドア", back: "door" },
  { front: "夢", back: "dream" },
  { front: "飲む", back: "drink" },
  { front: "早い", back: "early" },
  { front: "東", back: "east" },
  { front: "やさしい，気楽に", back: "easy" },
  { front: "食べる", back: "eat" },
  { front: "卵", back: "egg" },
  { front: "8", back: "eight" },
  { front: "18", back: "eighteen" },
  { front: "80", back: "eighty" }
];
// 未使用 index を入れる配列
const remainingIndex = Array.from(
  { length: tangoList.length },
  (_, i) => i
);
//表示を更新する処理
function render() {
//配列の日本語を表示
japanese.textContent=tangoList[index].front;
//配列の英語を表示
English.textContent=tangoList[index].back;
}
//次へのクリックでindexを加算する関数
function Next() {
    //重複がないように次のindexを生成
    const nextIndex = getRandomIndex();

if(nextIndex === null){
    alert("全部出題しました");
    return;
}
    //次のindexをindexに代入
    index = nextIndex;

    //cssのtransitionを一回noneにする
    front.style.transition = "none";
    back.style.transition = "none";

    // 追加したクラスを消す
    front.classList.remove('flip');
    back.classList.remove('flip');
    //正解不正解の表示をリセットする
    lastResult.textContent = '';
    input.value="";
    //入力不可
    input.disabled=false;
    //ボタンも押せない
    guessSubmit.disabled=false;
    //次へをクリック不可
    next.disabled=true;
    // 次の単語を表示
    render();

    // 変更を確定
    void front.offsetWidth;

    // cssのtransitionを元に戻す
    front.style.transition = "transform 1s";
    back.style.transition = "transform 1s";
}
//
next.addEventListener("click",
    Next);
    //ランダムな数の重複をなくすため配列の数字を取り出して削除
function getRandomIndex() {

    // もう無ければ終了
    if (remainingIndex.length === 0) {
        return null;
    }

    // remainingIndex の位置をランダム生成
    const random = Math.floor(
        Math.random() * remainingIndex.length
    );

    // 配列から取り出して削除
    return remainingIndex.splice(random,1)[0];
}
//重複なランダム数の関数を返す
let index = getRandomIndex();
render();