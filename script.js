let text=prompt("enter message","");
let count=parseInt(prompt("How many times???",10));
window.InputEvent=window.Event || window.InputEvent;
let event=new InputEvent("input",{bubbles:true});
let textContainer=document.getElementsByClassName("_13NKt copyable-text selectable-text")[1];
for(let i=0;i<count;i++)
{
    textContainer.innerHTML=text;
    textContainer.dispatchEvent(event);
    document.getElementsByClassName("_4sWnG")[0].click();
}






