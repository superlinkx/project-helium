if(!b)var b="";var c=30,d=240,e=480,f=30,g=30;bgx=y=x=0;bg1y=-480;bg2y=-1440;px=d/2-30;py=e-30;e1x=50;e1y=-45;bg1=new Image;bg1.src=b+"images/background.png";var h=new Image;h.src=b+"images/background.png";var i=new Image;i.src=b+"images/psprite.png";for(var j=!1,k=!1,l=!1,m=!1,n=[],o=null,p=null,q=0;q<5;q++)n.push([e1x,e1y,f,g,3]),e1x+=f+60;window.onload=r;
function r(){o=document.getElementById("helium");p=o.getContext("2d");o.width=d;o.height=e;p.drawImage(bg1,0,0);setInterval(s,1E3/c);document.addEventListener("keydown",t,!1);document.addEventListener("keyup",u,!1)}
function s(){o.width=o.width;p.drawImage(bg1,bgx,bg1y);p.drawImage(h,bgx,bg2y);bg1y+=2;bg2y+=2;bg1y==480&&(bg1y=-1440);bg2y==480&&(bg2y=-1440);for(var a=0;a<n.length;a++)n[a][1]<e?n[a][1]+=n[a][4]:n[a][1]>e-1&&(n[a][1]=-45);for(a=0;a<n.length;a++)p.fillStyle="#f00",p.fillRect(n[a][0],n[a][1],f,g);l?px+=5:m&&(px-=5);j?py-=5:k&&(py+=5);px>d-31&&(px=d-30);px<1&&(px=0);py>e-31&&(py=e-30);py<1&&(py=0);p.drawImage(i,px,py)}
function t(a){a.keyCode==68?l=!0:a.keyCode==65&&(m=!0);a.keyCode==87?j=!0:a.keyCode==83&&(k=!0)}function u(a){a.keyCode==68?l=!1:a.keyCode==65&&(m=!1);a.keyCode==87?j=!1:a.keyCode==83&&(k=!1)};
