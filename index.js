fetch('https://api.github.com/users/putriikaa')
  .then(res => res.json())
  .then(data => {
    console.log(data)
    document.getElementById('bio').innerHTML = data.bio
    document.getElementById('username').innerHTML = data.name
    document.getElementById('id').innerHTML = data.id
    document.getElementById('url').innerHTML = data.url

    document.getElementById('githubsaya').style.textAlign= "center";
    document.getElementById('githubsaya').style.backgroundColor= "#c2c2f0";

    document.getElementById('githubb').style.textAlign= "center";
    document.getElementById('githubb').style.backgroundImage= "url(img/wal2.gif)";
    document.getElementById('githubb').style.padding= "50px";

    document.getElementById('bio').style.padding= "50px";
    document.getElementById('bio').style.fontSize= "30px";

    document.getElementById('avatar').style.paddingTop= "40px";
    document.getElementById('avatar').style.borderRadius= "50%";
    document.getElementById('avatar').style.width= "350px";
    document.getElementById('avatar').style.height= "350px";
    document.getElementById('avatar').style.paddingBottom= "40px";

    document.getElementById('text-username').style.textAlign= "center";
    document.getElementById('text-username').style.paddingBottom= "20px";

    document.getElementById('text-id').style.textAlign= "center";
    document.getElementById('text-id').style.paddingBottom= "20px";
    document.getElementById('text-id').style.backgroundColor="#d6d6f5";

    document.getElementById('text-url').style.textAlign= "center";
    document.getElementById('text-url').style.paddingBottom= "20px";
    document.getElementById('text-url').style.backgroundColor= "#eaeafa";

    document.getElementById('button-name').style.backgroundColor= "#40184e";
    document.getElementById('button-name').style.border= "none";
    document.getElementById('button-name').style.borderRadius= "10px";
    document.getElementById('button-name').style.boxShadow="0 0 10px 0px rgba( 0, 0, 0.19)";
    document.getElementById('button-name').style.transition="0.5s";
    document.getElementById('button-name').style.boxSizing="border-box";
    document.getElementById('button-name').style.flexBasis="40%";
    document.getElementById('button-name').style.padding="20px";
    document.getElementById('button-name').style.marginBottom= "40px";

    document.getElementById('username').style.backgroundColor=" #f5d6f5";
    document.getElementById('username').style.padding="40px";
    document.getElementById('username').style.borderRadius="10px";
    document.getElementById('username').style.fontSize= "30px";

    document.getElementById('button-id').style.backgroundColor= "#40184e";
    document.getElementById('button-id').style.border= "none";
    document.getElementById('button-id').style.borderRadius= "10px";
    document.getElementById('button-id').style.boxShadow="0 0 10px 0px rgba( 0, 0, 0.19)";
    document.getElementById('button-id').style.transition="0.5s";
    document.getElementById('button-id').style.boxSizing="border-box";
    document.getElementById('button-id').style.flexBasis="40%";
    document.getElementById('button-id').style.padding="20px";
    document.getElementById('button-id').style.marginBottom= "40px";

    document.getElementById('id').style.backgroundColor="#f5d6f5";
    document.getElementById('id').style.padding="40px";
    document.getElementById('id').style.borderRadius="10px";
    document.getElementById('id').style.fontSize= "30px";

    document.getElementById('button-url').style.backgroundColor= "#40184e";
    document.getElementById('button-url').style.border= "none";
    document.getElementById('button-url').style.borderRadius= "10px";
    document.getElementById('button-url').style.boxShadow="0 0 10px 0px rgba( 0, 0, 0.19)";
    document.getElementById('button-url').style.transition="0.5s";
    document.getElementById('button-url').style.boxSizing="border-box";
    document.getElementById('button-url').style.flexBasis="40%";
    document.getElementById('button-url').style.padding="20px";
    document.getElementById('button-url').style.marginBottom= "40px";

    document.getElementById('url').style.backgroundColor="#f5d6f5";
    document.getElementById('url').style.padding="40px";
    document.getElementById('url').style.borderRadius="10px";
    document.getElementById('url').style.fontSize= "30px";

    document.getElementById('name').style.textAlign= "center";

    document.getElementById('id-github').style.textAlign= "center";
    document.getElementById('id-github').style.backgroundColor=" #eaeafa";

    document.getElementById('url-github').style.textAlign= "center";
    document.getElementById('url-github').style.backgroundColor="#d6d6f5";

    document.getElementById('about').style.textAlign= "center";
    document.getElementById('about').style.padding= "30px";
    document.getElementById('about').style.margin= "auto";

    document.getElementById('row').style.marginTop= "5%";
    document.getElementById('row').style.display= "flex";
    document.getElementById('row').style.justifyContent= "space-between";
    document.getElementById('row').style.backgroundColor= " #dbb4e4";
    document.getElementById('row').style.padding= "5%";

    document.getElementById('about-col').style.flexBasis ="80%";
    document.getElementById('about-col').style.backgroundColor="#B5B9FF";
    document.getElementById('about-col').style.borderRadius="10px";
    document.getElementById('about-col').style.marginBottom ="5%";
    document.getElementById('about-col').style.marginRight ="5%"
    document.getElementById('about-col').style.padding ="30px 10px";
    document.getElementById('about-col').style.boxSizing ="border-box";
    document.getElementById('about-col').style.transition ="0.5s";
    document.getElementById('about-col').style.boxShadow ="0 10px 0px rgba(0, 0, 0.19)";

    document.getElementById('about-col1').style.flexBasis ="80%";
    document.getElementById('about-col1').style.backgroundColor="#B5B9FF";
    document.getElementById('about-col1').style.borderRadius="10px";
    document.getElementById('about-col1').style.marginRight ="5%";
    document.getElementById('about-col1').style.marginBottom ="5%";
    document.getElementById('about-col1').style.padding ="30px 10px";
    document.getElementById('about-col1').style.boxSizing ="border-box";
    document.getElementById('about-col1').style.transition ="0.5s";
    document.getElementById('about-col1').style.boxShadow ="0 10px 0px rgba(0, 0, 0.19)";

    document.getElementById('about-col2').style.flexBasis ="80%";
    document.getElementById('about-col2').style.backgroundColor="#B5B9FF";
    document.getElementById('about-col2').style.marginBottom ="5%";
    document.getElementById('about-col2').style.padding ="30px 10px";
    document.getElementById('about-col2').style.boxSizing ="border-box";
    document.getElementById('about-col2').style.transition ="0.5s";
    document.getElementById('about-col2').style.boxShadow ="0 10px 0px rgba(0, 0, 0.19)";
   
    document.getElementById('sosmed').style.marginTop= "5%";
    document.getElementById('sosmed').style.display= "flex";
    document.getElementById('sosmed').style.justifyContent= "space-between";
    document.getElementById('sosmed').style.backgroundImage= "url(img/wal.png)";
    document.getElementById('sosmed').style.padding= "5%";
    document.getElementById('sosmed').style.opacity= "80%";

    document.getElementById('judul-sosmed').style.textAlign= "center";
    document.getElementById('judul-sosmed').style.padding= "30px";
    document.getElementById('judul-sosmed').style.margin= "auto";

    document.getElementById('text-ig').style.color= "black";
    document.getElementById('text-ig').style.marginTop= "10px";
    document.getElementById('text-ig').style.fontSize= "20px";

    document.getElementById('text-tw').style.color= "black";
    document.getElementById('text-tw').style.marginTop= "10px";
    document.getElementById('text-tw').style.fontSize= "20px";

    document.getElementById('text-pi').style.color= "black";
    document.getElementById('text-pi').style.marginTop= "10px";
    document.getElementById('text-pi').style.fontSize= "20px";

    
    document.getElementById('judul-k').style.textAlign= "center";
    document.getElementById('judul-k').style.padding= "30px";
    document.getElementById('judul-k').style.margin= "auto";

    document.getElementById('k-dra').style.display= "flex";
    document.getElementById('k-dra').style.justifyContent= "space-between";
    document.getElementById('k-dra').style.marginTop= "5%";
    document.getElementById('k-dra').style.padding= "30px";
    
    document.getElementById('card').style.width= "350px";
    document.getElementById('card').style.height= "500px";
    document.getElementById('card').style.borderWidth= "1px";
    document.getElementById('card').style.borderStyle= "solid";
    document.getElementById('card').style.backgroundColor= "black";
    document.getElementById('card').style.backgroundImage= "initial";

    document.getElementById('gambar-k').style.width= "95%";
    document.getElementById('gambar-k').style.marginBottom= "10%";

    document.getElementById('card1').style.width= "350px";
    document.getElementById('card1').style.height= "500px";
    document.getElementById('card1').style.borderWidth= "1px";
    document.getElementById('card1').style.borderStyle= "solid";
    document.getElementById('card1').style.backgroundColor= "black";
    document.getElementById('card1').style.backgroundImage= "initial";
    

    document.getElementById('gambar-k1').style.width= "95%";
    document.getElementById('gambar-k1').style.marginBottom= "10%";

    document.getElementById('card2').style.width= "350px";
    document.getElementById('card2').style.height= "500px";
    document.getElementById('card2').style.borderWidth= "1px";
    document.getElementById('card2').style.borderStyle= "solid";
    document.getElementById('card2').style.backgroundColor= "black";
    document.getElementById('card2').style.backgroundImage= "initial";

    document.getElementById('gambar-k2').style.width= "95%";
    document.getElementById('gambar-k2').style.marginBottom= "10%";

    document.getElementById('judul-a').style.textAlign= "center";
    document.getElementById('judul-a').style.padding= "30px";
    document.getElementById('judul-a').style.margin= "auto";
    
    document.getElementById('art').style.display= "flex";
    document.getElementById('art').style.justifyContent= "space-between";
    document.getElementById('art').style.marginTop= "5%";
    document.getElementById('art').style.padding= "20px";

    document.getElementById('gambar-art1').style.width= "100%";
    document.getElementById('gambar-art1').style.marginBottom= "5%";
    document.getElementById('gambar-art1').style.padding= "10px";
    
    document.getElementById('gb-art1').style.width= "68%";
    document.getElementById('gb-art1').style.boxSizing="border-box";
    document.getElementById('gb-art1').style.border="5px solid #6a69af";
    
    document.getElementById('gambar-art2').style.width= "100%";
    document.getElementById('gambar-art2').style.marginBottom= "5%";
    document.getElementById('gambar-art2').style.padding= "10px";
    document.getElementById('gambar-art2').style.textAlign= "center";

    document.getElementById('gb-art2').style.width= "68%";
    document.getElementById('gb-art2').style.boxSizing="border-box";
    document.getElementById('gb-art2').style.border="5px solid #6a69af";

    document.getElementById('gambar-art3').style.width= "100%";
    document.getElementById('gambar-art3').style.marginBottom= "5%";
    document.getElementById('gambar-art3').style.padding= "10px";

    document.getElementById('gb-art3').style.width= "68%";
    document.getElementById('gb-art3').style.boxSizing="border-box";
    document.getElementById('gb-art3').style.border="5px solid #6a69af";

    document.getElementById('gambar-art4').style.width= "100%";
    document.getElementById('gambar-art4').style.marginBottom= "5%";
    document.getElementById('gambar-art4').style.padding= "10px";

    document.getElementById('gb-art4').style.width= "68%";
    document.getElementById('gb-art4').style.boxSizing="border-box";
    document.getElementById('gb-art4').style.border="5px solid #6a69af";

    document.getElementById('art-1').style.display= "flex";
    document.getElementById('art-1').style.justifyContent= "space-between";
    document.getElementById('art-1').style.padding= "10px";

    document.getElementById('gambar-art5').style.width= "100%";

    document.getElementById('gb-art5').style.width= "80%";
    document.getElementById('gb-art5').style.boxSizing="border-box";

    document.getElementById('gambar-art6').style.width= "100%";

    document.getElementById('gb-art6').style.width= "80%";
    document.getElementById('gb-art6').style.boxSizing="border-box";

    document.getElementById('gambar-art7').style.width= "100%";

    document.getElementById('gb-art7').style.width= "80%";
    document.getElementById('gb-art7').style.boxSizing="border-box";

    document.getElementById('footer').style.padding="20px";
    document.getElementById('footer').style.backgroundColor="#d590a7";

    document.getElementById('text-footer').style.textAlign="center";

  }
  )