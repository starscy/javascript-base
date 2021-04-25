
function chessBoard() {
    let container = document.querySelector(".container");
    let block;
    let flag = true;
    const sizebox = 8;
    
    let figure = {
        0 : ['-263px -19px', '-484px -22px', '-372px -17px', '-150px -16px', '-42px -16px','-372px -17px', '-484px -22px','-263px -19px'],
        1 : ['-595px -19px', '-595px -19px', '-595px -19px', '-595px -19px', '-595px -19px','-595px -19px', '-595px -19px','-595px -19px'],
        6 : ['-595px -116px', '-595px -116px', '-595px -116px', '-595px -116px', '-595px -116px','-595px -116px', '-595px -116px','-595px -116px'],
        7: ['-263px -116px', '-484px -116px', '-372px -116px', '-150px -116px', '-42px -116px', '-372px -116px', '-484px -116px', '-263px -116px'],
        
       // 0: [bl, bh, bs, bq, bk, bs, bh, bl],
      //  1: [bp, bp, bp, bp, bp, bp, bp, bp],
      //  6: [wp, wp, wp, wp, wp, wp, wp, wp],
      //  7 :[wl,wh,ws,wq,wk,ws,wh,wl],
        
        
        

    }
    
    for (let i = 0; i < sizebox; i++) {
        for (let j = 0; j < sizebox; j++) {
            if (j == 0)
                flag = !flag;
            block = document.createElement("div");
            if (flag) block.className = "block black";
            else block.className = "block white";

            if (figure[i] !== undefined && figure[i][j] !== undefined) {
                block.style.backgroundImage = 'url(img/chess.jpg)';
                block.style.backgroundPosition = figure[i][j];
            }

            container.appendChild(block);
            flag = !flag;
        }
       


    }
    
}

chessBoard();