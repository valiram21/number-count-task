let a=0;
        document.getElementById('sub').addEventListener("click",function(){
            a--;
            document.getElementById('output').textContent=a;

            if(a<0){
                document.getElementById('output').style.color='red'
            }
            if(a>0){
                document.getElementById('output').style.color='green'
            }
            if(a==0){
                document.getElementById('output').style.color='black'
            }
        })

        document.getElementById('reset').addEventListener("click",function(){
            a=0;
            document.getElementById('output').textContent=a;
            document.getElementById('output').style.color='black'
        })

        document.getElementById('add').addEventListener("click",function(){
            a++;
            document.getElementById('output').textContent=a;

            if(a<0){
                document.getElementById('output').style.color='red'
            }
            if(a>0){
                document.getElementById('output').style.color='green'
            }
            if(a==0){
                document.getElementById('output').style.color='black'
            } 
        })