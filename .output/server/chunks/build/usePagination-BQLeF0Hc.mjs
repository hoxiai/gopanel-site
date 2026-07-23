import{ref as a}from"vue";function usePagination(e=15){const n=a(1),i=a(e);return{page:n,pageSize:i,onPageChange:async(a,e)=>{n.value=a,e&&await e()}}}export{usePagination as u};
//# sourceMappingURL=usePagination-BQLeF0Hc.mjs.map
