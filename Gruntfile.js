module.exports = function(grunt){
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.initConfig({

        // 画像パス
        paths: {
            img: 'images/',
            imgdist: 'dist/images/'
        },

        less : {
            // 作業のラベルは"dist"にしてみます
            dist : {
                // オプションの指定
                options : {
                    compress : true
                },
                // コンパイルするファイルの指定。左辺には出力先のCSSファイル、右辺には元となるLessファイルへのパス
                files : {
                    "css/style.css" : "css/style.less"
                }
            }
        },

        watch : {

            // ラベルは"less"にしてみます
            less : {
                // "files"セクションで監視するファイルの条件を指定
                files : [
                    "**/*.less"
                ],
                // "tasks"セクションで実行するタスクを指定
                tasks : [
                    "less:dist"
                ]
            }

        }

    });

    // grunt コマンドでなにやるか指定
    grunt.registerTask('default', ['less:dist','watch']);

};
