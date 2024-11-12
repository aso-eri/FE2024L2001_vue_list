// JavaScript用ファイル
new Vue({
    el: '#app',
    data() {
        return {
            //「現在の数」表示用データ，「計算用の数」取得用データを準備する（2行）
            count: 0,
            inNumber: 1
        };
    },
    methods: {
        /* ボタン押下時に動作するメソッドを準備する（たす、ひく、かける、わる、リセット）
           現在の数に応じて表示する画像を変更するメソッドを準備する */
        tasu() {
            this.count += this.inNumber;
            this.imageChange();
        },
        hiku() {
            this.count -= this.inNumber;
            this.imageChange();
        },
        kake() {
            this.count *= this.inNumber;
            this.imageChange();
        },
        waru() {
            this.count /= this.inNumber;
            this.imageChange();
        },
        reset() {
            this.count = 0;
            this.inNumber = 1;
        },
        imageChange() {
            //HTMLからimage_areaの情報を取得する
            let image_area = document.getElementById("image_area");
            //現在の数が0の場合「hime1.jfif」をimage_areaに表示する（<img src="./img/hime1.jfif" width="300">）
            if(this.count == 0) {
                image_area.innerHTML = '<img src="./img/hime1.jfif" width="300">';
            //現在の数が3の倍数かつ5の倍数の場合「hime3.png」をimage_areaに表示する（<img src="./img/hime3.png" width="300">）
            }else if(this.count % 3 == 0 && this.count % 5 == 0) {
                image_area.innerHTML = '<img src="./img/hime3.png" width="300">';
            //現在の数が3の倍数または5の倍数の場合「hime2.jfif」をimage_areaに表示する（<img src="./img/hime2.jfif" width="300">）
            }else if(this.count % 3 == 0 || this.count % 5 == 0) {
                image_area.innerHTML = '<img src="./img/hime2.jfif" width="300">';
            //上記以外の場合「hime1.jfif」をimage_areaに表示する（<img src="./img/hime1.jfif" width="300">）
            }else{
                image_area.innerHTML = '<img src="./img/hime1.jfif" width="300">';
            }
        }
    }
});
