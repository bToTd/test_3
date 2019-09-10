let packageName = "font-manager";
let fs = require('fire-fs');
let Fs = require('fs');
let test = require(Editor.Project.path + "/packages/font-manager/src/test");

Editor.Panel.extend({
    style: Fs.readFileSync(Editor.Project.path + "/packages/font-manager/panel/index/index.css", "utf8"),
    template: Fs.readFileSync(Editor.Project.path + "/packages/font-manager/panel/index/index.html", "utf8"),
    $: {
      },
    ready () {
        let fontNum = 1;
        let self = this;
      new window.Vue({
        el: this.shadowRoot,
        data: {
            lan: "",
            i18n:[
                {
                    language: "cn",
                    fonts:[
                        {name: "font_1", uuid: null}
                    ],
                    fontSizeItems: [
                        {num: 0}
                    ]
                }
            ],
            items: [
                { name: "", color: '#09f'},
            ],
            fontSizeItems: [
                {num: 0}
            ],
        },
        created: function(){
            this.i18n = self.readFontFromJson(Editor.Project.path + "/packages/font-manager/config/i18n_font.json");
            this.items = self.readFontFromJson(Editor.Project.path + "/packages/font-manager/config/color.json");
            this.fontSizeItems = self.readFontFromJson(Editor.Project.path + "/packages/font-manager/config/font_size.json");
            test.test();
            console.log("index.js 代码中输出的__dirname "+ __dirname);
            console.log("index.js 代码中输出的__filename " + __filename);
        },

        methods: {
            // 字体部分
            add_i18n_font(index){
                event.stopPropagation();
                fontNum++;
                this.i18n[index].fonts.push({
                    name: 'font_'+fontNum,
                    uuid: null
                });
            },
            add_language(data){
                if(this.lan === undefined || this.lan === null || this.lan === ""){
                    Editor.error("添加的语言的 key 值为空，无法添加新语言");
                    return;
                }
                let i18n = {
                    language: this.lan,
                    fonts: this.i18n[this.i18n.length - 1].fonts,
                    fontSizeItems: this.i18n[this.i18n.length - 1].fontSizeItems
                }
        
                Fs.mkdir(Editor.Project.path + "/assets/resources/i18n/" + this.lan, 
                    { recursive: true },(error)=>{
                        Editor.log(error);

                    } );
                this.i18n.push(i18n);
            },
            delete_language(index){
                event.stopPropagation();
                let language = this.i18n[index].language;
                if(Fs.existsSync(Editor.Project.path + "/assets/resources/i18n/" + language)){
                    Fs.rmdir(Editor.Project.path + "/assets/resources/i18n/" + language, (error) =>{
                        Editor.log(error);
                    });
                }
                this.i18n.splice(index, 1);
            },
            delete_font(i18n_index, index){
                this.i18n[i18n_index].fonts.splice(index, 1);
            },

            // 颜色部分
            add_color(){
                this.items.push(
                    {
                        name: "",
                        color: "#09f"
                    }
                );
            },
            delete_all_color(){
                this.items = [];
            },
            delete_color(index){
                this.items.splice(index, 1);
            },

            // 字号部分
            append(index){
                this.i18n[index].fontSizeItems.push({num:0});
            },
            delete_size(i18n_index, index){
                this.i18n[i18n_index].fontSizeItems.splice(index, 1);
            },
            delete_all(){
                this.fontSizeItems = [];
            },


            // 底部的按钮
            save(){
                // let path = Editor.Project.path + '/packages/font-manager/config/i18n_font.json';
                // let data = this.i18n;
                // Fs.writeFileSync(path, JSON.stringify(data, null, 2));
                Fs.writeFileSync(
                    Editor.url("packages://font-manager/config/i18n_font.json"),
                    JSON.stringify(this.i18n, null, 2)
                );
                Fs.writeFileSync(
                    Editor.url("packages://font-manager/config/color.json"),
                    JSON.stringify(this.items, null, 2)
                );
                Fs.writeFileSync(
                    Editor.url("packages://font-manager/config/font_size.json"),
                    JSON.stringify(this.fontSizeItems, null, 2)
                );
            },
            onRefresh(){
                this.save();
                Editor.Ipc.sendToMain('font-manager:save');
            }
        }
      })},

    /**
     * 读取json文件的内容
     */
    readFontFromJson(path){
        if(!fs.existsSync(path)){
            return;
        }
        let data = fs.readFileSync(path,{encoding:'utf8', flag:'r+'});
        data = JSON.parse(data);

        return data;
    },

  });