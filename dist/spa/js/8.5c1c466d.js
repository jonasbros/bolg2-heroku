(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"2f23":function(e,t,i){"use strict";i("9222")},9222:function(e,t,i){},d306:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",{attrs:{padding:""}},[i("div",{staticClass:"row justify-center q-mt-xl"},[i("div",{staticClass:"col-lg-6 col-md-8 col-sm-10 col-xs-12"},[i("q-form",{staticClass:"q-gutter-md",attrs:{autocorrect:"off",autocapitalize:"off",autocomplete:"off",spellcheck:"false"},on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[i("q-input",{attrs:{label:"Title","lazy-rules":"ondemand",outlined:"",color:"secondary",rules:[function(e){return e&&e.length>0||"Please type something"}]},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),i("q-editor",{attrs:{dense:e.$q.screen.lt.md,toolbar:[[{label:e.$q.lang.editor.align,icon:e.$q.iconSet.editor.align,fixedLabel:!0,list:"only-icons",options:["left","center","right","justify"]},{label:e.$q.lang.editor.align,icon:e.$q.iconSet.editor.align,fixedLabel:!0,options:["left","center","right","justify"]}],["bold","italic","strike","underline","subscript","superscript"],["token","hr","link","custom_btn"],["print","fullscreen"],[{label:e.$q.lang.editor.formatting,icon:e.$q.iconSet.editor.formatting,list:"no-icons",options:["p","h1","h2","h3","h4","h5","h6","code"]},{label:e.$q.lang.editor.fontSize,icon:e.$q.iconSet.editor.fontSize,fixedLabel:!0,fixedIcon:!0,list:"no-icons",options:["size-1","size-2","size-3","size-4","size-5","size-6","size-7"]},{label:e.$q.lang.editor.defaultFont,icon:e.$q.iconSet.editor.font,fixedIcon:!0,list:"no-icons",options:["default_font","arial","arial_black","comic_sans","courier_new","impact","lucida_grande","times_new_roman","verdana"]},"removeFormat"],["quote","unordered","ordered","outdent","indent"],["undo","redo"],["viewsource"]],fonts:{arial:"Arial",arial_black:"Arial Black",comic_sans:"Comic Sans MS",courier_new:"Courier New",impact:"Impact",lucida_grande:"Lucida Grande",times_new_roman:"Times New Roman",verdana:"Verdana"}},model:{value:e.body,callback:function(t){e.body=t},expression:"body"}}),i("q-input",{attrs:{outlined:"",color:"secondary",label:"Excerpt","lazy-rules":"ondemand",autogrow:"",rules:[function(e){return e&&e.length>0||"Please type something"}]},model:{value:e.excerpt,callback:function(t){e.excerpt=t},expression:"excerpt"}}),i("q-input",{attrs:{outlined:"",color:"secondary",label:"Tags",hint:"Press TAB to add tag"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:(t.preventDefault(),e.addTags(t))}}}),e._l(e.tags,(function(t,a){return i("q-chip",{key:t+a},[e._v("\n          #"+e._s(t)+"\n        ")])})),i("q-uploader",{staticStyle:{"max-width":"100%"},attrs:{label:"Upload Header Photo",accept:".jpg, image/*",color:"secondary","hide-upload-btn":"",flat:""},on:{rejected:e.onRejected,added:e.imageAdded}}),i("div",[i("q-btn",{attrs:{label:"Submit",type:"submit",color:"secondary",loading:e.disableButton,disable:e.disableButton}})],1)],2)],1)])])},o=[],n=(i("5319"),i("ddb0"),i("e6cf"),i("498a"),i("8c56")),s=i("ba9f"),l={name:"NewPost",data(){return{title:"",body:"",picture:"",excerpt:"",disableButton:!1,tags:[]}},computed:{keywords(){let e=[],t=[];return e=this.title.split(" ").filter((e=>{let t=["and","the","The","And"];return e.length>=3&&!t.includes(e)})).map((e=>(/[A-Z]/.test(e.charAt(0))&&t.push(e),e.replace(/[^a-zA-Z0-9]/g,"").toLowerCase()))),e.push(...t),e}},methods:{async onSubmit(){if(!this.body)return void this.$q.notify({type:"negative",message:"Please type something in the body."});let e=n["a"].firestore(),t=this.$store.getters["example/getAuthUser"];console.log(this.keywords),this.$q.loading.show(),this.disableButton=!0,await e.collection("posts").add({title:this.title.trim(),body:this.body,postPicture:this.picture,comments:0,likes:0,createdAt:Object(n["c"])(),userId:t.uid,userName:t.displayName,userPicture:t.photoURL,excerpt:this.excerpt,slug:this.title.replaceAll(" ","-"),tags:this.tags,keywords:this.keywords}),this.$q.loading.hide(),this.disableButton=!1,this.$router.push({name:"Home"})},async imageAdded(e){let t=(new Date).valueOf(),i=n["a"].storage().ref(`photos/${t}.jpg`);this.disableButton=!0;let a=await Object(s["compress"])(e[0],{quality:.8,type:"image/jpeg",scale:.75}),o=await i.put(a,{contentType:"image/jpeg"});this.picture=await o.ref.getDownloadURL(),this.disableButton=!1},onRejected(){this.$q.notify({type:"negative",message:"Only images are allowed"})},addTags(e){e.target.value&&(this.tags.push(e.target.value),e.target.value="")}}},r=l,d=(i("2f23"),i("2877")),c=i("9989"),u=i("0378"),p=i("27f9"),g=i("d66b"),m=i("b047"),h=i("ee89"),f=i("9c40"),b=i("eebe"),y=i.n(b),w=Object(d["a"])(r,a,o,!1,null,null,null);t["default"]=w.exports;y()(w,"components",{QPage:c["a"],QForm:u["a"],QInput:p["a"],QEditor:g["a"],QChip:m["a"],QUploader:h["a"],QBtn:f["a"]})}}]);