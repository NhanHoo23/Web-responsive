window.addEventListener('scroll', function () {
    let currentScrollPos = window.pageYOffset;
    console.log(currentScrollPos);
    const navbarTop = document.querySelector('.navbarTop');
    const firstaElement = navbarTop.querySelectorAll('a');
    const secondaElement = document.querySelectorAll('.navbarTop ul li ul li a');
    const img = navbarTop.querySelector('.navbarLogo');
    const windowWidth = window.innerWidth;
    console.log(windowWidth);

    if (currentScrollPos >= 80) {
        navbarTop.style.top = '0';
        navbarTop.style.position = "fixed";
        navbarTop.style.background = "#fff";
        navbarTop.style.borderBottom = "1px solid gray";
        navbarTop.style.transition = "background 0.2s ease-in";
        firstaElement.forEach(anchor => {
            if (windowWidth >= 768) {
                anchor.style.color = "#000";
                anchor.style.borderBottom = "2px solid black";
            } else {
                anchor.style.color = "#fff";
                anchor.style.borderBottom = "2px solid white";
            }
        })
        
        img.src = "Images/logo_black.png";
    } else {
        if (windowWidth >= 1200) {
            navbarTop.style.top = '57px';
        } else if (windowWidth >= 768) {
            navbarTop.style.top = '47px';
        } else {
            navbarTop.style.top = '40px';
        }
        navbarTop.style.position = "absolute";
        navbarTop.style.background = "transparent";
        navbarTop.style.borderBottom = "none";
        navbarTop.style.transition = "background 0.2s ease-out";
        firstaElement.forEach(anchor => {
            anchor.style.color = "#fff";
            anchor.style.borderBottom = "2px solid white";
        })
        img.src = "Images/logo.png";
    }

    if (windowWidth >= 768) {
        firstaElement.forEach(anchor => {
            anchor.addEventListener('mouseenter', function() {
                this.style.color = 'orange'; 
                this.style.borderBottom = "2px solid orange";
            });
        
            anchor.addEventListener('mouseleave', function() {
                if (currentScrollPos >= 120) {
                    this.style.color = '#000';
                    this.style.borderBottom = "2px solid #000";
                } else {
                    this.style.color = '#fff';
                    this.style.borderBottom = "2px solid #fff";
                }
            });
        
        })
        secondaElement.forEach(anchor => {
            anchor.style.color = "#000";
            anchor.style.borderBottom = "none";
            anchor.addEventListener('mouseenter', function() {
                this.style.color = 'orange'; 
                anchor.style.borderBottom = "none";
            });
        
            anchor.addEventListener('mouseleave', function() {
                this.style.color = '#000';
                anchor.style.borderBottom = "none";
            });
        })        
    } else {
        firstaElement.forEach(anchor => {
            anchor.addEventListener('mouseenter', function() {
                this.style.color = 'orange'; 
                this.style.borderBottom = "2px solid orange";
            });
        
            anchor.addEventListener('mouseleave', function() {
                this.style.color = '#fff';
                this.style.borderBottom = "2px solid #fff";
            });
        
        })
        secondaElement.forEach(anchor => {
            anchor.style.color = "#fff";
            anchor.style.borderBottom = "none";
            anchor.addEventListener('mouseenter', function() {
                this.style.color = 'orange'; 
                this.style.borderBottom = "none";
            });
        
            anchor.addEventListener('mouseleave', function() {
                this.style.color = '#fff';
                this.style.borderBottom = "none";
            });
        })
        
    }

})