function  clear1(){
             document.getElementById('calculator').innerText='';
        }

         function setValue(data){
            let BtnData=data.innerText;

            let oldText=document.getElementById('calculator').innerText;
            let newText=oldText+""+BtnData;
            document.getElementById('calculator').innerText=newText;
        }
        function equal(){
            let equals=document.getElementById('calculator').innerText;
            let result=eval(equals);
            document.getElementById('calculator').innerText=result;
        }