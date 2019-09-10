let fs = require('fire-fs');
let Fs = require('fs');

Editor.Panel.extend({
    style: Fs.readFileSync(Editor.url("packages://font-manager/panel/colors/index.css"), "utf8"),
    template: Fs.readFileSync(Editor.url("packages://font-manager/panel/colors/index.html")),
    $: {},
    FONT_INFO: {},
  
    ready () {
        let self = this;
      new window.Vue({
        el: this.shadowRoot,
        data: {
          items: [
            {name: "", color: '#09f'},
          ],
        },
        created: function(){
           let data = self.readFontFromJson();
           this.items = data;

        },

        methods: {
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
            save(){
               let path = Editor.Project.path + "/packages/font-manager/config/color.json";
               Fs.writeFileSync(path, JSON.stringify(this.items, null, 2));
               Editor.log("=====颜色的配置保存完成=====");
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
        let path = Editor.Project.path + '/packages/font-manager/config/color.json';
        if(!fs.existsSync(path)){
            return
        }
        let data = fs.readFileSync(path,{encoding:'utf8', flag:'r+'});
        data = JSON.parse(data);

        return data;
    },

    /**
     * 获取 RGB 名字
     */
    getRGBName(color){
        let name = 'RGB_';
        for(let i = 0; i < 3; i++){
            let v = color[i];
            let x = v.toString(16).toUpperCase();
            if(v < 16){
                x = '0' + x;
            }
            name = name + x; 
        }
        // name = name+color[0].toString(16).toUpperCase()+color[1].toString(16).toUpperCase()+color[2].toString(16).toUpperCase();
        return name;
    },

    /**
     * 解码 alpha 值
     * 将 0~1 解码成 0~255
     */
    decodeAlpha(alpha){
        return parseInt(alpha * 255);
    },

    /**
     * 编码 alpha 值
     * 将 0~255 编码成 0~1
     */
    encodeAlphe(alpha){
        return alpha/255;
    }

  });