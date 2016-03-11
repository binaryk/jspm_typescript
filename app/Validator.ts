export class Validator{
    rules : Array<Object>;

    constructor(){
        this.rules = [
            {}
        ]
    }

    isOk = (field, rule):boolean => {
        var OK  = true,
            fieldValue = field.val();

        switch (rule){
            case 'require':
                if(fieldValue.length > 0){
                    return true;
                }else{
                    return false;
                }
                break;
            case 'email':
                var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(fieldValue);
                break;
        }

        return OK;
    }

}