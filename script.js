
 window.onload= function (){
    
    
    let butn = document.querySelector(".btn");

    //butn.addEventListener("click", generate(rows, cols));
    butn.onclick =function() { addRow(); }

    function addRow(){
        let par = document.querySelector(".bod");
        //let cols = document.querySelector(".mat-col-input").value;
        let row = document.createElement("tr");
        row.classList.add("table-row");
        let col = 3;
        col = document.getElementById("mytab").rows[0].cells.length;
        par.appendChild(row);
        for(let i =0; i < col; i++){
            let temp = document.createElement("th");
            let inp = document.createElement("input");
            inp.classList.add("input1");
            inp.type = "number";
            temp.appendChild(inp);
            row.appendChild(temp);
            par.appendChild(row);
        }
    }

    let delRowBtn = document.querySelector(".del-row");
    delRowBtn.onclick = function(){delRow();}
    
    function delRow(){
        let par = document.querySelector(".bod");
        let row = document.getElementById("mytab").tBodies[0].rows.length;
        if(row >1){
            par.removeChild(par.lastElementChild);
        }
    }
    let addCols = document.querySelector(".col-btn");
    addCols.onclick = function(){addCol()}

    function addCol(){
        let rows = document.getElementById("mytab").tBodies[0].rows.length;
        let row = document.querySelectorAll(".table-row");
        for(let i =0; i < rows; i++){
            let col = document.createElement("th");
            let inp = document.createElement("input");
            inp.type = "number";
            inp.classList.add("input1");
            col.appendChild(inp);
            //document.getElementsByClassName("table")[i].appendChild(col);
            row[i].appendChild(col);
        }
      }
      
      const revCol = document.querySelector(".del-col");
      revCol.onclick = function(){delCol();}
      function delCol(){
          let rows = document.getElementById("mytab").tBodies[0].rows.length;
        //   console.log(rows);
          //let parent = document.querySelector("tbody");
        //   let col = document.getElementById("mytab").rows[0].cells.length;
            let col = document.getElementById("mytab").tBodies[0].rows[0].cells.length;
          let parent = document.querySelectorAll(".table-row");
          for(let i =0; i < rows; i++){
              //console.log(parent.lastChild);
              if(col >1){
                parent[i].removeChild(parent[i].lastElementChild);}
          }
      }

    //   function displayDivDemo(id, elementValue) {
    //     document.getElementById(id).style.display = elementValue.value == 1 ? 'block' : 'none';
    //  }
    const addSecRowBtn = document.querySelector(".sec-btn");
    addSecRowBtn.onclick = function(){
        addSecRow();
    }
    function addSecRow(){


        let par = document.querySelector(".secbody");
        let row = document.createElement("tr");
        row.classList.add("secRow");
        //row.classList.add("table-row");
        //let col = 3;
        col = document.getElementById("mytab2").rows[0].cells.length;
        par.appendChild(row);
        for(let i =0; i < col; i++){
            let temp = document.createElement("th");
            let inp = document.createElement("input");
            inp.classList.add("input2");
            inp.type = "number";
            temp.appendChild(inp);
            row.appendChild(temp);
            par.appendChild(row);
        }
    }

    const addSecColBtn = document.querySelector(".sec-colBtn");
    addSecColBtn.onclick = function(){
        addSecCol();
    }
    function addSecCol(){
        
        let rows = document.getElementById("mytab2").tBodies[0].rows.length;
        //console.log(rows);
        let row = document.querySelectorAll(".secRow");
        for(let i =0; i < rows; i++){
            let col = document.createElement("th");
            let inp = document.createElement("input");
            inp.type = "number";
            inp.classList.add("input2");
            col.appendChild(inp);
            //document.getElementsByClassName("table")[i].appendChild(col);
            row[i].appendChild(col);
        }
    }
    const remSecCol = document.querySelector(".sec-delCol");
    remSecCol.onclick = function(){
        delSecCol();
    }

    function delSecCol(){
        let rows =document.getElementById("mytab2").tBodies[0].rows.length;
      //   console.log(rows);
        //let parent = document.querySelector("tbody");
        let col = document.getElementById("mytab2").tBodies[0].rows[0].cells.length;
        let parent = document.querySelectorAll(".secRow");
        for(let i =0; i < rows; i++){
            //console.log(parent.lastChild);
            if(col >1){
              parent[i].removeChild(parent[i].lastElementChild);}
        }
    }
    const remSecRow = document.querySelector(".sec-delRow");
    remSecRow.onclick = function(){
        delSecRow();
    }

    function delSecRow(){
        let par = document.querySelector(".secbody");
        let row = document.getElementById("mytab2").tBodies[0].rows.length;
        if(row >1){
            par.removeChild(par.lastElementChild);
        }
    }

    let result = document.querySelector(".answer-btn");
    result.onclick = function(){
        let temp = Array.prototype.slice.call(document.querySelectorAll(".input1"));
        let array = splitArray(temp, document.getElementById("mytab").rows[0].cells.length);
        let res = document.querySelector(".result");
        let op = document.querySelector(".operator").value;
        //console.log(op);
        if(op ==0){
           
            if (typeof(det(array)) == 'number')
                res.innerHTML += "Find the <small>determinant</small><br><br> The determinant of " +" is  <strong>" + det(array) +"</strong><br><br><br>"   
            //console.log(document.getElementById("mytab").rows[0].cells.length);
            //let ans = det(array);
            //console.log(ans)
        }
        else if(op == 1) { 
            let temp = Array.prototype.slice.call(document.querySelectorAll(".input2"));
            let array2 = splitArray(temp, document.getElementById("mytab2").rows[0].cells.length);
            let ans = multiply(array, array2);
            // if(array.length == array2.length && array[0].length == array2[0].length){
            //     ans = multiplynbyn(array, array2);
            // }
            // else{
            //      ans = multiply(array, array2);
            // }
           
            if(ans != null){
                res.innerHTML+= "Find the <small>multiplication</small> <br><br>";
                outputMatrix(ans);
                res.innerHTML+= "<br><br></br>";
            }
        }
   
        else{
            let rev = inverse(array);
          //  console.log(rev.length);
          if(rev != null){
            res.innerHTML += "Find the <small>inverse</small>: <br><br>";
            outputMatrix(rev);
            res.innerHTML += "<br><br><br>"
            }
            // document.querySelector(".result")
        }
    }

        function det(M) {
            let res = document.querySelector(".result");
            if(M.length != M[0].length){
                res.innerHTML += "Only square matrices have determinant. Determinant can't be found<br><br><br>"
                return;
            }
            if (M.length==2) {
                return (M[0][0].value*M[1][1].value)-(M[0][1].value*M[1][0].value); 
        }
            var answer = 0;
            for (var i=0; i< M.length; i++) {
                let tm =  det(deleteRowAndColumn(M, i));
                answer += Math.pow(-1,i)*M[0][i].value*tm;
                // console.log(tm); 
            }
            return answer;
        }

        function deleteRowAndColumn(M,index) {
            var temp = [];
            for (var i=0; i<M.length; i++) { temp.push(M[i].slice(0)); } 
            temp.splice(0,1); 
            for (var i=0; i<temp.length; i++) { temp[i].splice(index,1); } 
            return temp;
        }
    
    
    //figuring that one out I guess!!
    function rref(){}   

    function inverse(M){
        // use Guassian Elimination to calculate the inverse:
        // (1) 'augment' the matrix (left) by the identity (on the right)
        // (2) Turn the matrix on the left into the identity by elemetry row ops
        // (3) The matrix on the right is the inverse (was the identity matrix)
        // There are 3 elemtary row ops: (I combine b and c in my code)
        // (a) Swap 2 rows
        // (b) Multiply a row by a scalar
        // (c) Add 2 rows
        let res = document.querySelector(".result");
        //if the matrix isn't square: exit (error)
        if(M.length !== M[0].length){
            res.innerHTML += "The matrix isn't square. Inverse can't be found.<br><br><br>";
            return;
    }
        //create the identity matrix (I), and a copy (C) of the original
        var i=0, ii=0, j=0, dim=M.length, e=0, t=0;
        var I = [], C = [];
        for(i=0; i<dim; i+=1){
            // Create the row
            I[I.length]=[];
            C[C.length]=[];
            for(j=0; j<dim; j+=1){
                
                //if we're on the diagonal, put a 1 (for identity)
                if(i==j){ I[i][j] = 1; }
                else{ I[i][j] = 0; }
                
                // Also, make the copy of the original
                C[i][j] = M[i][j].value;
            }
        }
        
        // Perform elementary row operations
        for(i=0; i<dim; i+=1){
            // get the element e on the diagonal
            e = C[i][i];
            
            // if we have a 0 on the diagonal (we'll need to swap with a lower row)
            if(e==0){
                //look through every row below the i'th row
                for(ii=i+1; ii<dim; ii+=1){
                    //if the ii'th row has a non-0 in the i'th col
                    if(C[ii][i] != 0){
                        //it would make the diagonal have a non-0 so swap it
                        for(j=0; j<dim; j++){
                            e = C[i][j];       //temp store i'th row
                            C[i][j] = C[ii][j];//replace i'th row by ii'th
                            C[ii][j] = e;      //repace ii'th by temp
                            e = I[i][j];       //temp store i'th row
                            I[i][j] = I[ii][j];//replace i'th row by ii'th
                            I[ii][j] = e;      //repace ii'th by temp
                        }
                        //don't bother checking other rows since we've swapped
                        break;
                    }
                }
                //get the new diagonal
                e = C[i][i];
                //if it's still 0, not invertable (error)
                if(e==0){
                    res.innerHTML += "The matrix is not invertible. Inverse can't be found.<br><br><br>";
                    return;}
            }
            
            // Scale this row down by e (so we have a 1 on the diagonal)
            for(j=0; j<dim; j++){
                C[i][j] = C[i][j]/e; //apply to original matrix
                I[i][j] = I[i][j]/e; //apply to identity
            }
            
            // Subtract this row (scaled appropriately for each row) from ALL of
            // the other rows so that there will be 0's in this column in the
            // rows above and below this one
            for(ii=0; ii<dim; ii++){
                // Only apply to other rows (we want a 1 on the diagonal)
                if(ii==i){continue;}
                
                // We want to change this element to 0
                e = C[ii][i];
                
                // Subtract (the row above(or below) scaled by e) from (the
                // current row) but start at the i'th column and assume all the
                // stuff left of diagonal is 0 (which it should be if we made this
                // algorithm correctly)
                for(j=0; j<dim; j++){
                    C[ii][j] -= e*C[i][j]; //apply to original matrix
                    I[ii][j] -= e*I[i][j]; //apply to identity
                }
            }
        }
        
        //we've done all operations, C should be the identity
        //matrix I should be the inverse:
        return I;
    }
    function outputMatrix(M){
        let res = document.querySelector(".result");
        let lineBreak = document.createElement("br");
        if(M == null){return;}
        for(let i =0; i < M.length; i++){
            for(let j =0; j < M[0].length; j++){
                let val = M[i][j];
                val = M[i][j].toFixed(3);
                // console.log(val);
                res.innerHTML += val + " ";

            }
            res.innerHTML+= "<br>"
        }
    }
       
    function multiplynbyn(a, b){
        let result  = new Array(a.length);
        for(let i = 0; i < result.length; i++){
            result[i] = new Array(b[i].length);
            for(let j = 0; j < a.length; j++){
                result[i][j] = 0;
                for(let k = 0; k < b.length; k++){
                    result[i][j] += a[i][k].value * b[k][j].value;
                }
            }
        }
        return result;
    }
    function multiply(a, b){
        let res = document.querySelector(".result");
            if (!Array.isArray(a) || !Array.isArray(b) || !a.length || !b.length) {
                result.innerHTML += "arguments should be in 2-dimensional array format<br><br><br>";
                throw new Error('arguments should be in 2-dimensional array format');
        }
        let x = a.length,
        z = a[0].length,
        y = b[0].length;
        if (b.length !== z) {
           // XxZ & ZxY => XxY
           result.innerHTML += 'number of columns in the first matrix should be the same as the number of rows in the second<br><br><br>';
           throw new Error('number of columns in the first matrix should bethe same as the number of rows in the second');
        }
        let productRow = Array.apply(null, new Array(y)).map(Number.prototype.valueOf, 0);
        let product = new Array(x);
        for (let p = 0; p < x; p++) {
           product[p] = productRow.slice();
        }
        for (let i = 0; i < x; i++) {
           for (let j = 0; j < y; j++) {
              for (let k = 0; k < z; k++) {
                 product[i][j] += (a[i][k].value * b[k][j].value);
                 //console.log(product[i][j]);
              }
           }
        }
        return product;
    }
  
     let delContn = document.querySelector(".delBtn");
    delContn.onclick = function(){
        let res = document.querySelector(".result");
        res.innerHTML = "";
    }
    //convert 1d array to 2d array based on number of column
    function splitArray(array, part) {
        var tmp = [];
        for(var i = 0; i < array.length; i += part) {
            tmp.push(array.slice(i, i + part));
        }
        return tmp;
    }
 }
