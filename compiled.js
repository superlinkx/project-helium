FPS=30;w=240;h=480;e1h=e1w=30;bgx=y=x=0;bg1y=-480;bg2y=-1440;px=w/2-30;py=h-30;e1x=50;e1y=-45;bg1=new Image;bg1.src="images/background.png";var b=new Image;b.src="images/background.png";var c=new Image;c.src="images/psprite.png";for(var d=!1,e=!1,f=!1,g=!1,i=[],j=null,k=null,l=0;l<5;l++)i.push([e1x,e1y,e1w,e1h,3]),e1x+=e1w+60;window.onload=m;
function m(){j=document.getElementById("helium");k=j.getContext("2d");j.width=w;j.height=h;k.drawImage(bg1,0,0);setInterval(n,1E3/FPS);document.addEventListener("keydown",o,!1);document.addEventListener("keyup",p,!1)}
function n(){j.width=j.width;k.drawImage(bg1,bgx,bg1y);k.drawImage(b,bgx,bg2y);bg1y+=2;bg2y+=2;bg1y==480&&(bg1y=-1440);bg2y==480&&(bg2y=-1440);for(var a=0;a<i.length;a++)i[a][1]<h?i[a][1]+=i[a][4]:i[a][1]>h-1&&(i[a][1]=-45);for(a=0;a<i.length;a++)k.fillStyle="#f00",k.fillRect(i[a][0],i[a][1],e1w,e1h);f?px+=5:g&&(px-=5);d?py-=5:e&&(py+=5);px>w-31&&(px=w-30);px<1&&(px=0);py>h-31&&(py=h-30);py<1&&(py=0);k.drawImage(c,px,py)}
function o(a){a.keyCode==68?f=!0:a.keyCode==65&&(g=!0);a.keyCode==87?d=!0:a.keyCode==83&&(e=!0)}function p(a){a.keyCode==68?f=!1:a.keyCode==65&&(g=!1);a.keyCode==87?d=!1:a.keyCode==83&&(e=!1)};