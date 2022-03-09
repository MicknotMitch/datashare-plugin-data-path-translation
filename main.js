document.addEventListener('datashare:ready', ({ detail }) => {
  const Alert = {
    computed: {
      docpath () {
        dsroot=detail.core.router.app.$store._modulesNamespaceMap["document/"].state.doc._RAW._source.dirname;
        dspath=detail.core.router.app.$store._modulesNamespaceMap["document/"].state.doc._RAW._source.path;
        newroot="//stthomas";
        newpath=dspath.replace(dsroot,newroot);
        return "<div class=\"text-center bg-info p-2 width-100\"><a href=\"file:"+newpath+"\">"+newpath+"</a></div>";
      }
    },
    template: `<span v-html="docpath"></span>`
  }
  detail.core.registerHook({ target: 'document.header:before', definition: Alert })
})
