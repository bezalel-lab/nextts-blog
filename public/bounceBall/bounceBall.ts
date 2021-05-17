//✅✅✅✅callが抜けていたためにevilCircleが表示されなかった
  // また、メソッドの()が抜けていたために動作しなかったところもあった
    //ちょっとしたミスが原因のことが多い。それ一つでうまくいかなくなるし、一生懸命探しても見つからないことが多い
      //💎💎💎丁寧に、良い習慣を身に付けつつ、少しずつスキルを上げる他ないかもしれない。どうしてもうまくいかないことは多いが、そのように基礎力を上げているうちに、どうしてもできなかったことの多くは、もはや間違えない事柄になっていくだろう
      //自分のコードでも、洗練されてはいないかもしれないが、動作自体はうまくいった、上の点を直した後は。
        //基礎の力は順調に身についていると思われる。ちょっとした間違いが少なくなれば、かなり行えることの幅は広がり、かかる時間も短縮されそう

  //⭕️これは追加分
  const para = document.querySelector('p');
  let count = 0;

// setup canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// define Ball constructor

function Shape(x, y, velX, velY, exists) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.exists = exists; //結果2：MDNのコードを見ると、結局右はexistsだった。　　　結果："= exists"ではなく、"= true"にする必要があった。それでボールが表示された。　疑問：ブール値である必要があるとのこと。これを定義した場面での言及だったが、私はtrueともfalseとも入力していない。これで良いのか？
}

// define Ball constructor, inheriting from Shape

function Ball(x, y, velX, velY, exists, color, size) {
  Shape.call(this, x, y, velX, velY, exists); //⭕️⭕️⭕️Ball()の括弧内はexistsを一番右にしてしまうと動かなかった。すぐ下の継承がうまくいかないからか。　　　Ball()コンストラクターの「constructor(も)適切に設定してください」ということだが、ここでできているのか、別のことなのか

  this.color = color;
  this.size = size;
}

Ball.prototype = Object.create(Shape.prototype); //⭕️⭕️⭕️Ballの方でこれを定義するとは思っていなかった。「Ball()コンストラクターのprototype と constructor を適切に設定してください」というのは、これのことだったようだ
Ball.prototype.constructor = Ball;

Ball.prototype.draw = function() {  
  ctx.beginPath(); //⭕️「Ball()コンストラクターのprototype と constructor を適切に設定してください」とのことだが、既に設定されているのでは...？何か手を加える必要があるだろうか？学習のためという観点では、よくこの作りと方法について考慮しておく
  ctx.fillStyle = this.color; //Ball()コンストラクターの「constructor(も)適切に設定してください」ということだが、どのような意味か。その前の手順で行なったことでは足りないのか・・・？
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};

// define ball update method

Ball.prototype.update = function() {
  if (this.x + this.size >= width) {
    this.velX = -this.velX;
  }

  if (this.x - this.size <= 0) {
    this.velX = -this.velX;
  }

  if (this.y + this.size >= height) {
    this.velY = -this.velY;
  }

  if (this.y - this.size <= 0) {
    this.velY = -this.velY;
  }

  this.x += this.velX;
  this.y += this.velY;
};

// define ball collision detection

Ball.prototype.collisionDetect = function() {
  for (let j = 0; j < balls.length; j++) {
    if (!(this === balls[j])) {
      const dx = this.x - balls[j].x;
      const dy = this.y - balls[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].color = this.color =
          "rgb(" +
          random(0, 255) +
          "," +
          random(0, 255) +
          "," +
          random(0, 255) +
          ")";
      }
    }
  }
};

// define EvilCircle constructor, inheriting from Shape

function EvilCircle(x, y, exists) {
    Shape.call(this, x, y, 20, 20, exists); //✅✅✅✅callが抜けていたためにevilCircleが表示されなかった　⭕️⭕️vel2つも、値が決まっているので、上の仮引数？として入力する必要はなかった//vel2つは継承しないので、ここで削除した。継承しない時は、ここから除くというこのやり方でよかったか？ // this.velX = 20; //EvilCircleの引数括弧内で、vel2つの色が異なる。それは20の代わりにvel2つを入れていないからだと思うが、これは、色がこのままでもよかったか？学習ページのBlueGlassBrickでは、引数がなく、ただリテラルの入力はここで私がしているようになされていた // this.velY = 20; //⭕️このブロックの、上の色々なコメントはとりあえず無視して。実際に継承するが、[再定義]するということか

    this.color = 'white'; //⭕️上に、colorとsizeは入力しなかった。引数を渡して設定するのではなく、いつも下で指定しているwhiteや10にすると決まっているから。上の引数の変数？は、その時用いる値を渡したい時に入力するのであって、そのコンストラクターに含めるプロパティ名を全て入力しなければならないということではない　　//上は、異なるコンストラクターから継承する時であれば、作成中など色が一時的に異なっていることもあるが、今回のように結局自分で[定義]するのであれば、上には入力しないのが正解なのだろうか？動きを見て答えを知るようにする
    this.size = 10; //⭕️上の色々なコメントは、ここと一つ上の行について当てはまるかも。上にも入力しているが、ここでリテラルを代入して、上の文字の色が他と異なる状態になってしまっているが、これは構わないのだろうか？→上のプロパティは消した
}

EvilCircle.prototype = Object.create(Shape.prototype); //✅ここでEvilCircleのprototypeを作る(create)必要があるかも？いや、元のメソッドを継承する必要がないから、いらないか...。それも違うかも。そもそも元々ここでなされていたことの意味をよく理解できていなかったので、今は試しながら学ぶか。一応作っておく。うまくいったとしても、消してみて、不要かもしれない点を検証する
EvilCircle.prototype.constructor = EvilCircle;

// define ball draw method ✅よくわからない。少しあやしい

EvilCircle.prototype.draw = function() {
  ctx.beginPath(); //(これは初めからあったが、出現する場所の指定だろうか？→”現在のパスをリセットする”とのこと。結局わからないが)
  ctx.strokeStyle = this.color; //答え：これらは、関数ではあるのかもしれないが、APIで、名前を変更する前も変更した後も、もともとあるプログラムを利用していたようだ。自作の名前としてではなく、呼び出しのためのAPI[名]として入力されていたようだ。付け加えると、上に追加したlineWidthもそうであるようだ　　　疑問：こことstroke()は名前を変えてあるが、これは関数？メソッド？なのだろうか。では、この異なる名前の関数？を作成する必要があるのだろうか？
  ctx.lineWidth = 3;//「Ball()コンストラクターのprototype と constructor を適切に設定してください」とのことだが、既に設定されているのでは...？何か手を加える必要があるだろうか？学習のためという観点では、よくこの作りと方法について考慮しておく //Ball()コンストラクターの「constructor(も)適切に設定してください」ということだが、どのような意味か。その前の手順で行なったことでは足りないのか・・・？
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.stroke();
};

// define ball update method ✅

EvilCircle.prototype.checkBounds = function() {
  if (this.x + this.size >= width) {
    this.x -= this.size; //⭕️⭕️答え：サイズ、すなわち半径の分、位置をずらして埋もれた感覚を出しているのか　　疑問：サイズでなくxを変えるべきだったようだが、まだその理由は理解できていない。　this.size = 10;としていたが、MDNの完成コードを見て書き換えた
  } 

  if (this.x - this.size <= 0) {
    this.x += this.size;
  } 

  if (this.y + this.size >= height) {
    this.y -= this.size;
  }

  if (this.y - this.size <= 0) {
    this.y += this.size;
  }
};//⭕️⭕️答え：サイズではなく位置を変更して描写するから　　疑問：this.size = 20; これは必要なかったよう。なぜかはわからない　 //⭕️もともとが20でなかったとすれば、調べてその元々の値をここに入力する

// define EvilCircle setControls　✅

EvilCircle.prototype.setControls = function() {
  let _this = this; //(⭕️)この、thisの前の_は、メソッド内で関数を呼び出してundefindになってしまわないため？
  window.onkeydown = function(e) {
    if (e.keyCode === 65) {
      _this.x -= _this.velX;
    } else if (e.keyCode === 68) {
      _this.x += _this.velX;
    } else if (e.keyCode === 87) {
      _this.y -= _this.velY;
    } else if (e.keyCode === 83) {
      _this.y += _this.velY;
    }
  }; //⭕️⭕️答え：ここにも；が必要なのは、どちらも関数の終わりだから？上は、ifの終わりか　　　ここにも; が必要な理由や、見分け方がわからない。自分はつけていなかった
};

// define EvilCircle collision detection

//⭕️ボールの数をカウントするための変数
// let number = 0;
//✅✅結果：自分のコードでも動作はうまくいった。だがこちらの方がスマートか。カウント方法の違いなどから、ここだけ戻すこともできないので、MDNの答えコードのままにしている　　　怪しいポイントと感じた。コピーはコピーで残しつつ、MDNのものをこちらに貼り付けた。最終的にうまくいったら、コピーして保存しておいたものを残し、うまく動作するものだったか確認する
EvilCircle.prototype.collisionDetect = function() {
  for(let j = 0; j < balls.length; j++) {
    if( balls[j].exists ) {
      const dx = this.x - balls[j].x;
      const dy = this.y - balls[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].exists = false;
        count--;
        para.textContent = 'Ball count: ' + count;
      }
    }
  }
};


// define array to store balls and populate it　✅

const balls = []; //これは元々あったもので、ボールを全部保存しておくための配列

while (balls.length < 25) {
    const size = random(10, 20);
    let ball = new Ball(
      // ball position always drawn at least one ball width
      // away from the adge of the canvas, to avoid drawing errors
      random(0 + size, width - size),
      random(0 + size, height - size),
      random(-7, 7),
      random(-7, 7),
      true, //⭕️⭕️⭕️ここが抜けていた
      "rgb(" + random(0, 255) + "," + random(0, 255) + "," + random(0, 255) + ")",
      size
    );
    balls.push(ball);
    count++;
    para.textContent = 'Ball count: ' + count;
    //⭕️ number = number + 1; 
}

// define loop that keeps drawing the scene constantly　//⭕️evilCircleを生じさせるためのものだが、この部分には自信がない


let evilCircle = new EvilCircle(random(0, width), random(0, height), true); //⭕️⭕️結果：上で書き直した分、実際は色々と不要だった。仮引数？として入れた分と同じ数引数を渡せば、おそらく良いのだろうと思う　　　⭕️最後の2つが必要かわからない。　　　trueって必要だろうか？常に存在するからいらないような
evilCircle.setControls(); //⭕️答え：これで実行でき、うまく動作した　　　疑問：これでevilCircleに適用できるかどうか　//⭕️ボールの場合のように、ここにpush(ball)のようにする必要はない？

function loop() {
  ctx.fillStyle = "rgba(0,0,0,0.25)";
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < balls.length; i++) {
    if (balls[i].exists) {
      balls[i].draw();
      balls[i].update();
      balls[i].collisionDetect();  
    }
  }
  
  evilCircle.draw();
  evilCircle.checkBounds();
  evilCircle.collisionDetect()  //⭕️⭕️⭕️setControlsは一度だけで良いので、ここでは呼ばなかった evilCircle.setControls();

  requestAnimationFrame(loop);
}

// score counter

// let sect = document.createElement("section");
// ⭕️この２行をBalls countのために使用していた　const para = document.querySelector('p');
// ⭕️para.textContent = para.textContent + number;
// sect.appendChild(para);

//para + number; //⭕️右側はpara.textContentでなくても良い？

loop();

//何がうまくいっていないか：evilCircleが現れていない。操作してもどこかから現れる様子もない
  //→evilCircleを[作成し読み込む]部分、あるいは何かのことで関係する他の箇所が間違えている模様
    //エラーの表示はされていない
//あとは、〜

export {};