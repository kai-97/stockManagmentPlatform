$wnd.showcase.runAsyncCallback11("function _Qb(){}\nfunction bRb(){}\nfunction WQb(a,b){a.b=b}\nfunction XQb(a){if(a==MQb){return true}iA();return a==PQb}\nfunction YQb(a){if(a==LQb){return true}iA();return a==KQb}\nfunction aRb(a){this.b=(DSb(),ySb).a;this.e=(ISb(),HSb).a;this.a=a}\nfunction UQb(a,b){var c;c=vO(a.fb,160);c.b=b.a;!!c.d&&OLb(c.d,b)}\nfunction VQb(a,b){var c;c=vO(a.fb,160);c.e=b.a;!!c.d&&QLb(c.d,b)}\nfunction QQb(){QQb=l8;JQb=new _Qb;MQb=new _Qb;LQb=new _Qb;KQb=new _Qb;NQb=new _Qb;OQb=new _Qb;PQb=new _Qb}\nfunction ZQb(){QQb();SLb.call(this);this.b=(DSb(),ySb);this.c=(ISb(),HSb);(CIb(),this.e)[Vmc]=0;this.e[Wmc]=0}\nfunction RQb(a,b,c){var d;if(c==JQb){if(b==a.a){return}else if(a.a){throw H7(new u7b('Only one CENTER widget may be added'))}}Rh(b);N0b(a.j,b);c==JQb&&(a.a=b);d=new aRb(c);b.fb=d;UQb(b,a.b);VQb(b,a.c);TQb(a);Th(b,a)}\nfunction SQb(a){var b,c,d,e,f,g,h;u0b((CIb(),a.hb),'',toc);g=new jfc;h=new X0b(a.j);while(h.b<h.c.c){b=V0b(h);f=vO(b.fb,160).a;d=vO(rac(Bfc(g.d,f)),85);c=!d?1:d.a;e=f==NQb?'north'+c:f==OQb?'south'+c:f==PQb?'west'+c:f==KQb?'east'+c:f==MQb?'linestart'+c:f==LQb?'lineend'+c:Blc;u0b(Qo(b.hb),toc,e);Dac(g,f,K7b(c+1))}}\nfunction TQb(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;b=(CIb(),a.d);while(eKb(b)>0){wo(b,dKb(b,0))}o=1;e=1;for(i=new X0b(a.j);i.b<i.c.c;){d=V0b(i);f=vO(d.fb,160).a;f==NQb||f==OQb?++o:(f==KQb||f==PQb||f==MQb||f==LQb)&&++e}p=EN(e2,Qic,269,o,0,1);for(g=0;g<o;++g){p[g]=new bRb;p[g].b=$doc.createElement(Tmc);so(b,JIb(p[g].b))}k=0;l=e-1;m=0;q=o-1;c=null;for(h=new X0b(a.j);h.b<h.c.c;){d=V0b(h);j=vO(d.fb,160);r=$doc.createElement(Umc);j.d=r;j.d[Gmc]=j.b;j.d.style[Hmc]=j.e;j.d[gjc]=j.f;j.d[fjc]=j.c;if(j.a==NQb){FIb(p[m].b,r,p[m].a);so(r,JIb(d.hb));r[Enc]=l-k+1;++m}else if(j.a==OQb){FIb(p[q].b,r,p[q].a);so(r,JIb(d.hb));r[Enc]=l-k+1;--q}else if(j.a==JQb){c=r}else if(XQb(j.a)){n=p[m];FIb(n.b,r,n.a++);so(r,JIb(d.hb));r[uoc]=q-m+1;++k}else if(YQb(j.a)){n=p[m];FIb(n.b,r,n.a);so(r,JIb(d.hb));r[uoc]=q-m+1;--l}}if(a.a){n=p[m];FIb(n.b,c,n.a);so(c,JIb(eh(a.a)))}}\nvar toc='cwDockPanel';k8(425,1,Alc);_.Bc=function $qb(){var a,b,c;Aab(this.a,(a=new ZQb,(CIb(),a.hb).className='cw-DockPanel',a.e[Vmc]=4,WQb(a,(DSb(),xSb)),RQb(a,new wPb(noc),(QQb(),NQb)),RQb(a,new wPb(ooc),OQb),RQb(a,new wPb(poc),KQb),RQb(a,new wPb(qoc),PQb),RQb(a,new wPb(roc),NQb),RQb(a,new wPb(soc),OQb),b=new wPb(\"Voici un <code>panneau de d\\xE9filement<\\/code> situ\\xE9 au centre d'un <code>panneau d'ancrage<\\/code>. Si des contenus relativement volumineux sont ins\\xE9r\\xE9s au milieu de ce panneau \\xE0 d\\xE9filement et si sa taille est d\\xE9finie, il prend la forme d'une zone dot\\xE9e d'une fonction de d\\xE9filement \\xE0 l'int\\xE9rieur de la page, sans l'utilisation d'un IFRAME.<br><br>Voici un texte encore plus obscur qui va surtout servir \\xE0 faire d\\xE9filer cet \\xE9l\\xE9ment jusqu'en bas de sa zone visible. Sinon, il vous faudra r\\xE9duire ce panneau \\xE0 une taille minuscule pour pouvoir afficher ces formidables barres de d\\xE9filement!\"),c=new RMb(b),c.hb.style[gjc]='400px',c.hb.style[fjc]='100px',RQb(a,c,JQb),SQb(a),a))};k8(881,261,ljc,ZQb);_.gc=function $Qb(a){var b;b=MKb(this,a);if(b){a==this.a&&(this.a=null);TQb(this)}return b};var JQb,KQb,LQb,MQb,NQb,OQb,PQb;var f2=d7b(jjc,'DockPanel',881);k8(159,1,{},_Qb);var c2=d7b(jjc,'DockPanel/DockLayoutConstant',159);k8(160,1,{160:1},aRb);_.c='';_.f='';var d2=d7b(jjc,'DockPanel/LayoutData',160);k8(269,1,{269:1},bRb);_.a=0;var e2=d7b(jjc,'DockPanel/TmpRow',269);vic(zl)(11);\n//# sourceURL=showcase-11.js\n")
