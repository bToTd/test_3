let fs = require('fire-fs');
let Fs = require('fs');

Editor.Panel.extend({
    style: Fs.readFileSync(Editor.url("packages://font-manager/panel/font_size/index.css"), "utf8"),
    template: Fs.readFileSync(Editor.url("packages://font-manager/panel/font_size/index.html"), "utf8"),
    $: {},
    ready () {
        let self = this;
      new window.Vue({
        el: this.shadowRoot,
        data: {
          fontSizeItems: [
              {num: 0}
          ],
        },
        created: function(){
            let data = self.readFontFromJson();
            if(!data){
                return
            }
            this.fontSizeItems = data;
        },

        methods: {
            append(){
                this.fontSizeItems.push({num:0});
            },
            delete_size(index){
                this.fontSizeItems.splice(index, 1);
            },
            delete_all(){
                this.fontSizeItems = [];
            },
            save(){
                let path = Editor.url("packages://font-manager/config/font_size.json");
                Fs.writeFileSync(path, JSON.stringify(this.fontSizeItems, null, 2));
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
        let path = Editor.url("packages://font-manager/config/font_size.json");
        if(!fs.existsSync(path)){
            return
        }
        let data = fs.readFileSync(path,{encoding:'utf8', flag:'r+'});
        data = JSON.parse(data);
        return data;
    }

  });