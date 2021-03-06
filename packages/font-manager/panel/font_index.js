let packageName = "font-manager";
let fs = require('fire-fs');
let Fs = require('fs');

Editor.Panel.extend({
    style: Fs.readFileSync(Editor.url("packages://font-manager/panel/i18n_font/index.css"), "utf8"),
    template: Fs.readFileSync(Editor.url("packages://font-manager/panel/i18n_font/index.html"),"utf8"),
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
                ]
            }
          ],
        },
        created: function(){
            let data = self.readFontFromJson();
            this.i18n = data;
        },

        methods: {

            myChange(event){
             // 用来测试的函数
            },
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
                fontNum++;
                let la = {
                    language: this.lan,
                    fonts:[
                        {name: "font_"+fontNum, uuid: null}
                    ]
                };
                this.i18n.push(la);
            },
            delete_language(index){
                event.stopPropagation();
                this.i18n.splice(index, 1);
            },
            delete_font(i18n_index, index){
                console.log(this.i18n[i18n_index].fonts[index]);
                this.i18n[i18n_index].fonts.splice(index, 1);
            },
            save(){
                let path = Editor.Project.path + '/packages/font-manager/config/i18n_font.json';
                let data = this.i18n;
                Fs.writeFileSync(path, JSON.stringify(data, null, 2));
            },
            onRefresh(){
                Editor.Ipc.sendToMain('font-manager:save');
            }
        }
      });
    },

    /**
     * 读取json文件的内容
     */
    readFontFromJson(){
        let path = Editor.Project.path + '/packages/font-manager/config/i18n_font.json';
        if(!fs.existsSync(path)){
            return;
        }
        let data = fs.readFileSync(path,{encoding:'utf8', flag:'r+'});
        // Editor.log( data);
        data = JSON.parse(data);
        return data;
    },
  });