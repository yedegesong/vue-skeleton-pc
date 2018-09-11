/**
 * 自定义权限指令
 * @param {权限key}} value 
 */
let auths = (value) => {
    return {
        // 当绑定的元素插入到 DOM 时调用此函数……
        bind: function (el, binding, vnode) {
        },
        inserted(el, binding, vnode) {
            let authMenu = localStorage.get('authMenu');
            let valueItem = tool.getRoot(authMenu);
            let indexInfo = valueItem.findIndex((value)=>{
                    if(value.key ==  binding.value){
                        return value;
                    }
            })
            if(indexInfo == -1){
                el.parentNode.removeChild(el);
            }
            

        }
    }

}
export default {
    router: router(),
    auths:auths()
}