
function waitforit(time){
    return new Promise(resolve => setTimeout(resolve, time));
}
 function randomSort(){
    const cards= document.querySelectorAll('.card');
    console.table(cards);
    
    let cardsinfos =[]
    
    cards.forEach((e,i)=>{
           cardsinfos.push({content: e.innerText, x:e.offsetLeft, y:e.offsetTop})
           
        
    })
    
    cardsinfos.sort((x,y)=> (x.content<y.content ?-1:1))
    
    
    cardsinfos.forEach(async(e, i)=>{
        
        
        document.documentElement.style.setProperty('--xpos',-Math.random()*100 * i+'px')
        document.documentElement.style.setProperty('--ypos', -Math.random()*200* i+'px')
        document.documentElement.style.setProperty('--xposdest',e.x + 'px')
        document.documentElement.style.setProperty('--yposdest', e.y+'px')
        cards[i].classList.add('cardrotate');
        
        cards[i].innerText=e.content;
        await waitforit(2000);
        
        cards[i].classList.remove('cardrotate');
       
        
    })
    
    console.table(cardsinfos)
    
}
