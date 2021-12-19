class calculatorLogic {
    static divide (x,y){
        return x/y;
    }
    static multiple (x,y){
        return x*y;
    }
    static minus (x,y){
        return x-y;
    }
    static plus (x,y){
        return x+y;
    }
    static squareroot (x){
        return Math.sqrt(x);
    }
    static remaining (x,y){
        return x%y;
    }
    
    static calculation = (method , x=0, y=0)=>{
        x = Number(x);
        y = Number(y);
        let result = calculatorLogic[method](x, y);
        if(isNaN(result)){
            return 0;
        }else{
            return parseFloat(result.toPrecision(14))
        }
        
    }

}
export default calculatorLogic;