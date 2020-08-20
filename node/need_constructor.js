module.exports = {
    meta:{
        docs：{
            description:'',
            category:'',
            recommend:true
        },
        fixable:null,
        scheme:[]
    },
    create:function(context){
        return{
            ClassDeclaration(node){
                const body = node.body.body;
                const result = body.some(element=>{
                    element.type === 'MethodDefinition' && element.kind === 'constructor'
                });
                if(!result){
                    context.report({
                        node,
                        message:'no constructor found.'
                    })
                }
            }
        }
    }
}