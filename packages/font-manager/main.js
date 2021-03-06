"use strict";
let fs = require("fire-fs");

module.exports = { 
    load: function () {
        // Editor.log("字体管理器加载完成"); 
    }, 
    unload: function () {
        // Editor.log("字体管理插件卸载了");
    }, 
    messages: { 
        open: function () {
            let path = Editor.url("packages://font-manager/index");
            Editor.log("nnnnnnn>>>>>>"+path);
            Editor.Panel.open("@rjoygame_ccc/font-manager");
            // Editor.Window.main.resetLayout("packages://font-manager/layout.json");
        },
        color: function () {
            Editor.Panel.open("font-manager.colors_index");
        },
        font: function () {
            Editor.Panel.open("font-manager.font_index");
        },
        size: function () {
            Editor.Panel.open("font-manager.size_index");
        },
        "say-hello": function () {
            Editor.log("Hello World!");
            Editor.Ipc.sendToPanel("font-manager", "font-manager:hello");
        }, 
        clicked: function () {
            Editor.log("Button clicked!")
        },
        "font-manager:save": function(event){
            let args = this.readConfig();
            Editor.log("================main args====================")
            this.translateColorsAlpha(args);
           
            let language = this.generateRJoyI18n(args["language"]);
            Editor.log(language);
            let colorNames = this.generateRJoyColors(args['colorNames']) + '\n';
            Editor.log(colorNames);
            let fonts      = this.generateRJoyFonts(args['fonts']) + '\n'
            Editor.log(fonts);
            let fontSizes  = this.generateRJoyFontSizes(args['fontSizes']) + '\n'
            Editor.log(fontSizes);
            let  font_info = this.setFONT_INFO(args);
            Editor.log(font_info);
            let path = Editor.Project.path + '/assets/Script/config/FontConfig.ts';
            let path2 = Editor.Project.path + '/assets/resources/config/FontConfig.json';

            let fontJson = args;
          
            let allEx = this.generateExport(args["language"]);
            
            Editor.log('开始写文件')
            let template = language + colorNames + fonts + fontSizes + font_info + allEx;
            fs.writeFileSync(path, template, {encoding:'utf8', flag:'w+'});
            fs.writeFileSync(path2, JSON.stringify(fontJson, null, 2), {encoding:'utf8', flag:'w+'});
            Editor.log('保存完成');
          
        },
    },

    /**
     * 读取 config/ 文件夹下的配置文件
     * 将配置文件生成之前的 json 格式的数据 
     */
    readConfig(){
        let data = {};
        // 拼接 colors 和 colorNames 字段
        let colors = fs.readFileSync(Editor.url("packages://font-manager/config/color.json"), "utf8");
        colors = JSON.parse(colors);
        data["colors"] = [];
        data["colorNames"] = [];
        if(!colors || colors.length === 0){
            data["colors"] = [[255,255,255,1]];
            data["colorNames"] = ["white"];
        } else {
            for(let index = 0; index < colors.length; index++){
                data["colors"].push(colors[index].color);
                data["colorNames"].push(colors[index].name);
            }
        }

        // 拼接 fontSizes 字段
        let sizes = fs.readFileSync(Editor.url("packages://font-manager/config/font_size.json"), "utf8");
        sizes = JSON.parse(sizes);
        data["fontSizes"] = [];
        if(!sizes || sizes.length === 0){
            data["fontSizes"] = [28];
        } else {
            for(let index = 0; index < sizes.length; index ++){
                data["fontSizes"].push(sizes[index].num);
            }
        }

        // 拼接 font 字段
        let fonts = fs.readFileSync(Editor.url("packages://font-manager/config/i18n_font.json"));
        fonts = JSON.parse(fonts);
        data["fonts"] = {};
        data["language"] = [];
        if(!fonts || fonts.length === 0){
            data["fonts"]["cn"] = [];
        } else {
            for(let index = 0; index < fonts.length; index++){
                data["language"].push(fonts[index].language);
                data["fonts"][fonts[index].language] = [];
                for(let fontIndex = 0; fontIndex < fonts[index].fonts.length; fontIndex++){
                    let path = Editor.assetdb.uuidToUrl(fonts[index].fonts[fontIndex].uuid);
                    data["fonts"][fonts[index].language].push(path);
                }
            }
        } 
        return data;
    },

     /**
     * 转换所有颜色值中的 alpha 值
     * @param {*} obj 
     */
    translateColorsAlpha(obj){
        let colors = obj['colors'];
        for(let j = 0; j < colors.length; j++){
            colors[j][3] = this.decodeAlpha(colors[j][3]);
        }
        obj['colors'] = colors;
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
    },

    /**
     * 生成颜色枚举的字符串
     */
    generateRJoyColors(nameArr){
        let str = 'enum RJoyColors {';
        for(let i = 0; i < nameArr.length; i++){
            str = str + '\n\t' +nameArr[i] + '=' + i.toString(10) + ',';
        }
        str = str + '\n}';
        return str;
    },
    /**
     * 生成font枚举的字符串
     * @param {Array} fontArr 
     */
    generateRJoyFonts(obj){
        let keys = Object.keys(obj);
        let str = "";

        for(let keysIndex = 0; keysIndex < keys.length; keysIndex++){
            let names = [];
            let paths = [];
            paths = obj[keys[keysIndex]];
            for(let i = 0; i < paths.length; i++){
                if(paths[i] != null){
                    let name = paths[i].split('/').pop();
                    name = name.replace('.', '_');
                    names.push(name);
                }
            }
            str = str + `enum RJoyFonts_${keys[keysIndex]}{`;
            for(let k = 0; k < names.length; k++){
                str = str + '\n\t' +names[k] + '=' + k.toString(10) + ',';
            }
            str = str + '\n\t' + 'systemFont' + '= 999' + ',';
            str = str + '\n}\n';
            Editor.log(str);
        }
        return str;
    },

    /**
     * 生成size枚举的字符串
     * @param {*} sizesArr 
     */
    generateRJoyFontSizes(sizesArr){
        let size = sizesArr;
        let names = [];
        for(let j = 0; j < size.length; j++){
            let value = size[j];
            let name = 'FONT_SIZE_'
            let x = value.toString(10).toUpperCase();
            name = name + x;
            names.push(name);
        }
        let str = 'enum RJoyFontSizes{';
        for(let k = 0; k < names.length; k++){
            str = str + '\n\t' +names[k] + '=' + size[k].toString(10) + ',';
        }
        str = str + '\n}';
        return str;
    },

    /**
     * 生成多语言的枚举
     * @param {array} i18ns 
     */
    generateRJoyI18n(i18ns){
        let str = "enum LANGUAGE {";
        for(let index = 0; index < i18ns.length; index++){
            str = str + "\n\t"+ i18ns[index] + "=" + index.toString(10) + ",";
        }
        str = str + "\n}"
        return str;
    },

    generateExport(arr){
        let font = "";
        for(let index = 0; index < arr.length; index++){
            font = font + `RJoyFonts_${arr[index]}: RJoyFonts_${arr[index]},\n`
        }
        let allEx = "\nexport let fntCfg = {\n"
        +    "RJoyColors : RJoyColors,\n"
        +    `${font}`
        +    "RJoyFontSizes : RJoyFontSizes,\n"
        +    "config: FONT_INFO,\n"
        +    "i18n: LANGUAGE\n"
        + "};"

        return allEx;
    },

    /**
     * 设置 FontConfig.ts 中的 FONT_INFO 数据
     * @param {*} obj 
     */
    setFONT_INFO(obj){
        let data = 'const FONT_INFO = ';
        let str = JSON.stringify(obj, null, 2);
        data = data + str + "\n"
        
        return data;
    },

    /**
     *  截取路径(url)中字体的文件名字
     * @param {*} arr 
     */
    getFontName(arr){
        let obj = {};
        let names = [];
        let paths = [];
        paths = arr;
        for(let i = 0; i < paths.length; i++){
            if(paths[i] != null){
                let name = paths[i].split('/').pop();
                name = name.replace('.', '_');
                names.push(name);
            }
        }
        obj = this.arrayToObj(names);
        return obj;
    },

    /**
     * 将字符串数组转换为枚举所需要的对象
     * @param {Array} arr 
     */
    arrayToObj(arr){
        let obj = {};
    
        for(let i = 0; i < arr.length; i++){
            obj[arr[i]] = i;
        }

        return obj;
    },
    /**
     * 将字体的uuid 转化为 url 或者 path
     * @param {Array} arr uuid 的数组
     */
    uuidToPath(arr){
        let pathArr = [];
        for(let i = 0; i < arr.length; i++){
            if(arr[i] != null){
                let url = Editor.assetdb.uuidToUrl(arr[i]);
                pathArr.push(url);
            }
        }
        return pathArr;
    },
};