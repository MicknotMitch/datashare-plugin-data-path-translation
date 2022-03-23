document.addEventListener('datashare:ready', ({ detail }) => {
  const Alert = {
    computed: {
      docpath () {
        dsroot=detail.core.router.app.$store._modulesNamespaceMap["document/"].state.doc._RAW._source.dirname;
        dspath=detail.core.router.app.$store._modulesNamespaceMap["document/"].state.doc._RAW._source.path;
        newroot="//server";
        newpath=dspath.replace(dsroot,newroot);        
        return "<div class=\"text-center bg-info p-2 width-100\"><a href=\"file:"+newpath+"\">"+newpath+"</a></div>";
        // due to security concerns, browsers no longer allow you to use the "file://" protocol,
        // you will either need to use a browser extentions that enables the file protocol or
        // define a new protocol as described here (for windows) https://stackoverflow.com/questions/80650/how-do-i-register-a-custom-url-protocol-in-windows
      }
    },
    template: `<span v-html="docpath"></span>`
  }
  detail.core.registerHook({ target: 'document.header:before', definition: Alert })
})
