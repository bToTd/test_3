var fs = require("fs");
window.go = Editor.require("packages://fsm-editor/lib/gojs/go.js"); 

// panel/index.js, this filename needs to match the one registered in package.json
Editor.Panel.extend({
  // css style for panel
  style: fs.readFileSync(Editor.url("packages://fsm-editor/panel/index/index.css"), "utf8"),

  // html template for panel
  template: fs.readFileSync(Editor.url("packages://fsm-editor/panel/index/index.html"), "utf8"),

  // element and variable binding
  $: {
    myDiagram: "#myDiagramDiv"
  },

  // method executed when template and styles are successfully loaded and initialized
  ready () {
    let self = this;
    new window.Vue({
      el: this.shadowRoot,
      data:{
        label: "--"
      },
      
      methods:{
        send2Main(){
          Editor.log("Vue start");
          Editor.Ipc.sendToMain('fsm-editor:clicked');
        },
        changeLabelValue(){
          this.label = "Hello!"
        }
      }
    });

    this.$btn.addEventListener('confirm', () => {
      Editor.Ipc.sendToMain('fsm-editor:clicked');
        });
      },
      

  // register your ipc messages here
  messages: {
    'fsm-editor:hello' (event) {
      this.$label.innerText = 'Hello!';
    }
  },
  
});