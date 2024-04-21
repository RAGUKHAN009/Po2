function toggleTheme() {
    const body = document.getElementById('Cont');
    const NAV = document.getElementById('nav');
    const img11 = document.getElementById('img11')
    const img22 = document.getElementById('img22')
    const SHOWmoreCont = document.getElementById('SHOWmoreCont')
    const moreCont = document.getElementById('moreCont')
    const DarkMode = document.getElementById('DarkMode')
    const LightMode = document.getElementById('LightMode')
    const MoreContColors = document.getElementById('MoreContColors')
    const nameSpan = document.getElementById('nameSpan')
    const Namebuttonone = document.getElementById('Namebuttonone')
    const Namebuttontwo = document.getElementById('Namebuttontwo')
    const heroImg1 = document.getElementById('heroImg1')
    const heroImg2 = document.getElementById('heroImg2')
    const gridItem1 = document.getElementById('gridItem1')
    const gridItem2 = document.getElementById('gridItem2')
    const gridItem3 = document.getElementById('gridItem3')
    const gridItem4 = document.getElementById('gridItem4')
    const gridItem5 = document.getElementById('gridItem5')
    const gridItem6 = document.getElementById('gridItem6')
    const ContTwo = document.getElementById('ContTwo')
    const visitbuttton1 = document.getElementById('visitbuttton1')
    const visitbuttton2 = document.getElementById('visitbuttton2')
    const visitbuttton3 = document.getElementById('visitbuttton3')
    const visitbuttton4 = document.getElementById('visitbuttton4')
    const visitbuttton5 = document.getElementById('visitbuttton5')
    const visitbuttton6 = document.getElementById('visitbuttton6')
    const ContThree = document.getElementById('ContThree')
    const scrollToTopBtn = document.getElementById('scrollToTopBtn')
    const GridThreeItem1 = document.getElementById('GridThreeItem1')
    const GridThreeItem2 = document.getElementById('GridThreeItem2')
    const GridThreeItem3 = document.getElementById('GridThreeItem3')
    const GridThreeItem4 = document.getElementById('GridThreeItem4')
    const ContFour = document.getElementById('ContFour')
    const footer = document.getElementById('footer')
    const footerIMG1 = document.getElementById('footerIMG1')
    const footerIMG2 = document.getElementById('footerIMG2')
    const footerAlignR = document.getElementById('footerAlignR')
    const modeSwitchButtons1 = document.getElementById('modeSwitchButtons1')
    const modeSwitchButtons2 = document.getElementById('modeSwitchButtons2')
    const BARSANIMSPAN1 = document.getElementById('BARSANIMSPAN1')
    const BARSANIMSPAN2 = document.getElementById('BARSANIMSPAN2')
    const BARSANIMSPAN3 = document.getElementById('BARSANIMSPAN3')

    // /////////////////
    if (body.classList.contains('darkTheme')) {
        body.classList.remove('darkTheme');
        body.classList.add('lightTheme');
    } else {
        body.classList.remove('lightTheme');
        body.classList.add('darkTheme');
    }
    // /////////////////
    if (BARSANIMSPAN1.classList.contains('BARSANIMSPAN1darkTheme')) {
        BARSANIMSPAN1.classList.remove('BARSANIMSPAN1darkTheme');
        BARSANIMSPAN1.classList.add('BARSANIMSPAN1lightTheme');
    } else {
        BARSANIMSPAN1.classList.remove('BARSANIMSPAN1lightTheme');
        BARSANIMSPAN1.classList.add('BARSANIMSPAN1darkTheme');
    }
    // /////////////////
    if (BARSANIMSPAN2.classList.contains('BARSANIMSPAN1darkTheme')) {
        BARSANIMSPAN2.classList.remove('BARSANIMSPAN1darkTheme');
        BARSANIMSPAN2.classList.add('BARSANIMSPAN1lightTheme');
    } else {
        BARSANIMSPAN2.classList.remove('BARSANIMSPAN1lightTheme');
        BARSANIMSPAN2.classList.add('BARSANIMSPAN1darkTheme');
    }
    // /////////////////
    if (BARSANIMSPAN3.classList.contains('BARSANIMSPAN1darkTheme')) {
        BARSANIMSPAN3.classList.remove('BARSANIMSPAN1darkTheme');
        BARSANIMSPAN3.classList.add('BARSANIMSPAN1lightTheme');
    } else {
        BARSANIMSPAN3.classList.remove('BARSANIMSPAN1lightTheme');
        BARSANIMSPAN3.classList.add('BARSANIMSPAN1darkTheme');
    }
    // /////////////////
    if (NAV.classList.contains('darkNav')) {
        NAV.classList.remove('darkNav');
        NAV.classList.add('lightNav');
    } else {
        NAV.classList.remove('lightNav');
        NAV.classList.add('darkNav');
    }
    // /////////////////
    if (img11.style.display === 'block') {
        img11.style.display = 'none';
    } else {
        img11.style.display = 'block';
    }

    if (img22.style.display === 'none') {
        img22.style.display = 'block';
    } else {
        img22.style.display = 'none';
    }
    // /////////////////
    if (SHOWmoreCont.classList.contains('showMoreButtonLight')) {
        SHOWmoreCont.classList.remove('showMoreButtonLight');
        SHOWmoreCont.classList.add('showMoreButtonDark');
    } else {
        SHOWmoreCont.classList.remove('showMoreButtonDark');
        SHOWmoreCont.classList.add('showMoreButtonLight');
    }
    // /////////////////
    if (moreCont.classList.contains('moreContDark')) {
        moreCont.classList.remove('moreContDark');
        moreCont.classList.add('moreContLight');
    } else {
        moreCont.classList.remove('moreContLight');
        moreCont.classList.add('moreContDark');
    }
    // /////////////////
    if (DarkMode.style.display === 'block') {
        DarkMode.style.display = 'none';
    } else {
        DarkMode.style.display = 'block';

    }
    if (LightMode.style.display === 'none') {
        LightMode.style.display = 'block';
    } else {
        LightMode.style.display = 'none';
    }
    // /////////////////
    if (MoreContColors.classList.contains('MoreContColorsDark')) {
        MoreContColors.classList.remove('MoreContColorsDark');
        MoreContColors.classList.add('MoreContColorsLight');
    } else {
        MoreContColors.classList.remove('MoreContColorsLight');
        MoreContColors.classList.add('MoreContColorsDark');
    }
    // /////////////////
    if (nameSpan.classList.contains('nameSpanLight')) {
        nameSpan.classList.remove('nameSpanLight');
        nameSpan.classList.add('nameSpanDark');
    } else {
        nameSpan.classList.remove('nameSpanDark');
        nameSpan.classList.add('nameSpanLight');
    }
    // /////////////////
    if (Namebuttontwo.classList.contains('NamebuttontwoLight')) {
        Namebuttontwo.classList.remove('NamebuttontwoLight');
        Namebuttontwo.classList.add('NamebuttontwoDark');
    } else {
        Namebuttontwo.classList.remove('NamebuttontwoDark');
        Namebuttontwo.classList.add('NamebuttontwoLight');
    }
    // /////////////////
    if (Namebuttonone.classList.contains('NamebuttononeLight')) {
        Namebuttonone.classList.remove('NamebuttononeLight');
        Namebuttonone.classList.add('NamebuttononeDark');
    } else {
        Namebuttonone.classList.remove('NamebuttononeDark');
        Namebuttonone.classList.add('NamebuttononeLight');
    }
    // /////////////////
    if (heroImg1.style.display === 'none') {
        heroImg1.style.display = 'block';
    } else {
        heroImg1.style.display = 'none';

    }
    if (heroImg2.style.display === 'block') {
        heroImg2.style.display = 'none';
    } else {
        heroImg2.style.display = 'block';
    }
    // /////////////////
    if (gridItem1.classList.contains('gridItem1Light')) {
        gridItem1.classList.remove('gridItem1Light');
        gridItem1.classList.add('gridItem1Dark');
    } else {
        gridItem1.classList.remove('gridItem1Dark');
        gridItem1.classList.add('gridItem1Light');
    }
    // /////////////////
    if (gridItem2.classList.contains('gridItem2Light')) {
        gridItem2.classList.remove('gridItem2Light');
        gridItem2.classList.add('gridItem2Dark');
    } else {
        gridItem2.classList.remove('gridItem2Dark');
        gridItem2.classList.add('gridItem2Light');
    }
    // /////////////////
    if (gridItem3.classList.contains('gridItem3Light')) {
        gridItem3.classList.remove('gridItem3Light');
        gridItem3.classList.add('gridItem3Dark');
    } else {
        gridItem3.classList.remove('gridItem3Dark');
        gridItem3.classList.add('gridItem3Light');
    }
    // /////////////////
    if (gridItem4.classList.contains('gridItem4Light')) {
        gridItem4.classList.remove('gridItem4Light');
        gridItem4.classList.add('gridItem4Dark');
    } else {
        gridItem4.classList.remove('gridItem4Dark');
        gridItem4.classList.add('gridItem4Light');
    }
    // /////////////////
    if (gridItem5.classList.contains('gridItem5Light')) {
        gridItem5.classList.remove('gridItem5Light');
        gridItem5.classList.add('gridItem5Dark');
    } else {
        gridItem5.classList.remove('gridItem5Dark');
        gridItem5.classList.add('gridItem5Light');
    }
    // /////////////////
    if (gridItem6.classList.contains('gridItem6Light')) {
        gridItem6.classList.remove('gridItem6Light');
        gridItem6.classList.add('gridItem6Dark');
    } else {
        gridItem6.classList.remove('gridItem6Dark');
        gridItem6.classList.add('gridItem6Light');
    }
    // /////////////////
    if (ContTwo.classList.contains('ContTwoLight')) {
        ContTwo.classList.remove('ContTwoLight');
        ContTwo.classList.add('ContTwoDark');
    } else {
        ContTwo.classList.remove('ContTwoDark');
        ContTwo.classList.add('ContTwoLight');
    }
    // /////////////////
    if (visitbuttton1.classList.contains('visitbuttton1Light')) {
        visitbuttton1.classList.remove('visitbuttton1Light');
        visitbuttton1.classList.add('visitbuttton1Dark');
    } else {
        visitbuttton1.classList.remove('visitbuttton1Dark');
        visitbuttton1.classList.add('visitbuttton1Light');
    }
    // /////////////////
    if (visitbuttton2.classList.contains('visitbuttton2Light')) {
        visitbuttton2.classList.remove('visitbuttton2Light');
        visitbuttton2.classList.add('visitbuttton2Dark');
    } else {
        visitbuttton2.classList.remove('visitbuttton2Dark');
        visitbuttton2.classList.add('visitbuttton2Light');
    }
    // /////////////////
    if (visitbuttton3.classList.contains('visitbuttton3Light')) {
        visitbuttton3.classList.remove('visitbuttton3Light');
        visitbuttton3.classList.add('visitbuttton3Dark');
    } else {
        visitbuttton3.classList.remove('visitbuttton3Dark');
        visitbuttton3.classList.add('visitbuttton3Light');
    }
    // /////////////////
    if (visitbuttton4.classList.contains('visitbuttton4Light')) {
        visitbuttton4.classList.remove('visitbuttton4Light');
        visitbuttton4.classList.add('visitbuttton4Dark');
    } else {
        visitbuttton4.classList.remove('visitbuttton4Dark');
        visitbuttton4.classList.add('visitbuttton4Light');
    }
    // /////////////////
    if (visitbuttton5.classList.contains('visitbuttton5Light')) {
        visitbuttton5.classList.remove('visitbuttton5Light');
        visitbuttton5.classList.add('visitbuttton5Dark');
    } else {
        visitbuttton5.classList.remove('visitbuttton5Dark');
        visitbuttton5.classList.add('visitbuttton5Light');
    }
    // /////////////////
    if (visitbuttton6.classList.contains('visitbuttton6Light')) {
        visitbuttton6.classList.remove('visitbuttton6Light');
        visitbuttton6.classList.add('visitbuttton6Dark');
    } else {
        visitbuttton6.classList.remove('visitbuttton6Dark');
        visitbuttton6.classList.add('visitbuttton6Light');
    }
    // /////////////////
    if (ContThree.classList.contains('ContThreeLight')) {
        ContThree.classList.remove('ContThreeLight');
        ContThree.classList.add('ContThreeDark');
    } else {
        ContThree.classList.remove('ContThreeDark');
        ContThree.classList.add('ContThreeLight');
    }
    // /////////////////
    if (scrollToTopBtn.classList.contains('scrollToTopBtnLight')) {
        scrollToTopBtn.classList.remove('scrollToTopBtnLight');
        scrollToTopBtn.classList.add('scrollToTopBtnDark');
    } else {
        scrollToTopBtn.classList.remove('scrollToTopBtnDark');
        scrollToTopBtn.classList.add('scrollToTopBtnLight');
    }
    // /////////////////
    if (GridThreeItem1.classList.contains('GridThreeItem1Light')) {
        GridThreeItem1.classList.remove('GridThreeItem1Light');
        GridThreeItem1.classList.add('GridThreeItem1Dark');
    } else {
        GridThreeItem1.classList.remove('GridThreeItem1Dark');
        GridThreeItem1.classList.add('GridThreeItem1Light');
    }
    // /////////////////
    if (GridThreeItem2.classList.contains('GridThreeItem2Light')) {
        GridThreeItem2.classList.remove('GridThreeItem2Light');
        GridThreeItem2.classList.add('GridThreeItem2Dark');
    } else {
        GridThreeItem2.classList.remove('GridThreeItem2Dark');
        GridThreeItem2.classList.add('GridThreeItem2Light');
    }
    // /////////////////
    if (GridThreeItem3.classList.contains('GridThreeItem3Light')) {
        GridThreeItem3.classList.remove('GridThreeItem3Light');
        GridThreeItem3.classList.add('GridThreeItem3Dark');
    } else {
        GridThreeItem3.classList.remove('GridThreeItem3Dark');
        GridThreeItem3.classList.add('GridThreeItem3Light');
    }
    // /////////////////
    if (GridThreeItem4.classList.contains('GridThreeItem4Light')) {
        GridThreeItem4.classList.remove('GridThreeItem4Light');
        GridThreeItem4.classList.add('GridThreeItem4Dark');
    } else {
        GridThreeItem4.classList.remove('GridThreeItem4Dark');
        GridThreeItem4.classList.add('GridThreeItem4Light');
    }
    // /////////////////
    if (ContFour.classList.contains('ContFourLight')) {
        ContFour.classList.remove('ContFourLight');
        ContFour.classList.add('ContFourDark');
    } else {
        ContFour.classList.remove('ContFourDark');
        ContFour.classList.add('ContFourLight');
    }
    // /////////////////
    if (footer.classList.contains('footerLight')) {
        footer.classList.remove('footerLight');
        footer.classList.add('footerDark');
    } else {
        footer.classList.remove('footerDark');
        footer.classList.add('footerLight');
    }
    // /////////////////
    if (footerAlignR.classList.contains('footerAlignRLight')) {
        footerAlignR.classList.remove('footerAlignRLight');
        footerAlignR.classList.add('footerAlignRDark');
    } else {
        footerAlignR.classList.remove('footerAlignRDark');
        footerAlignR.classList.add('footerAlignRLight');
    }
    // /////////////////
    if (footerIMG2.style.display === 'block') {
        footerIMG2.style.display = 'none';
    } else {
        footerIMG2.style.display = 'block';
    }

    if (footerIMG1.style.display === 'none') {
        footerIMG1.style.display = 'block';
    } else {
        footerIMG1.style.display = 'none';
    }
    // /////////////////
    if (modeSwitchButtons2.style.display === 'block') {
        modeSwitchButtons2.style.display = 'none';
    } else {
        modeSwitchButtons2.style.display = 'block';
    }

    if (modeSwitchButtons1.style.display === 'none') {
        modeSwitchButtons1.style.display = 'block';
    } else {
        modeSwitchButtons1.style.display = 'none';
    }

}

function showMore() {
    const downToUp = document.getElementById('MORE')
    const moreCont = document.getElementById('moreCont')

    if (downToUp.style.rotate === '0deg') {
        downToUp.style.rotate = '180deg';
    } else {
        downToUp.style.rotate = '0deg';
    }
    // /////////////////
    if (moreCont.style.display === 'none') {
        moreCont.style.display = 'block';
    } else {
        moreCont.style.display = 'none';
    }
}

// ////////


window.onscroll = function () {
    scrollFunction();
    showdarkThemeBut();
};

function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}
function scrollToTop() {
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, currentScroll - currentScroll / 10);
    }
}
// //////
function showdarkThemeBut() {
    var darkThemeBut = document.getElementById("darkThemeBut");
    var scrollPosition = window.scrollY || window.pageYOffset;

    var threshold = window.innerHeight;

    if (scrollPosition >= threshold) {
        darkThemeBut.style.display = "block";
    } else {
        darkThemeBut.style.display = "none";
    }
}

// /////////////

const TypedText = "A front-end engineer helping startups turn their visions into a digital reality. I specialize in developing and building modern websites that are user friendly and responsive.";
const speed = 15;

let charIndex = 0;

function typeText() {
    const element = document.getElementById('typedText');
    element.innerHTML += TypedText.charAt(charIndex);
    charIndex++;

    if (charIndex < TypedText.length) {
        setTimeout(typeText, speed);
    }
}

window.onload = typeText;

// /////////////


function handleIntersect(entries, observer) {
    entries.forEach(entry => {
        const cartId = entry.target.id;


        let cartNumber;
        if (cartId.startsWith('gridItem')) {
            cartNumber = parseInt(cartId.replace('gridItem', ''));
            if (entry.isIntersecting) {
                if (cartNumber % 2 !== 0) {

                    entry.target.classList.add('AnimateCart1');
                    entry.target.classList.remove('AnimateCart2');
                } else {

                    entry.target.classList.add('AnimateCart2');
                    entry.target.classList.remove('AnimateCart1');
                }
            } else {

                entry.target.classList.remove('AnimateCart1', 'AnimateCart2');
            }
        } else if (cartId.startsWith('GridThreeItem')) {
            cartNumber = parseInt(cartId.replace('GridThreeItem', ''));
            if (entry.isIntersecting) {
                if (cartNumber == 1) {

                    entry.target.classList.add('animatedcart11');
                    entry.target.classList.remove('animatedcart12');
                    entry.target.classList.remove('animatedcart13');
                    entry.target.classList.remove('animatedcart14');
                } else if (cartNumber == 2) {

                    entry.target.classList.add('animatedcart12');
                    entry.target.classList.remove('animatedcart11');
                    entry.target.classList.remove('animatedcart13');
                    entry.target.classList.remove('animatedcart14');
                } else if (cartNumber == 3) {

                    entry.target.classList.add('animatedcart13');
                    entry.target.classList.remove('animatedcart11');
                    entry.target.classList.remove('animatedcart12');
                    entry.target.classList.remove('animatedcart14');
                } else {


                    entry.target.classList.add('animatedcart14');
                    entry.target.classList.remove('animatedcart11');
                    entry.target.classList.remove('animatedcart12');
                    entry.target.classList.remove('animatedcart13');

                }
            } else {

                entry.target.classList.remove('animatedcart11', 'animatedcart12', 'animatedcart13', 'animatedcart14');
            }
        }
    });
}

const observer = new IntersectionObserver(handleIntersect, {
    root: null,
    threshold: 0.5
});

const cartContainers1 = document.querySelectorAll('[id^="gridItem"]');
cartContainers1.forEach(cartContainer => {
    observer.observe(cartContainer);
});

const cartContainers2 = document.querySelectorAll('[id^="GridThreeItem"]');
cartContainers2.forEach(cartContainer => {
    observer.observe(cartContainer);
});

// ///////////////////////////////


function ShowBars() {

    const BarsContend = document.getElementById('BarsContend')
    const carossAnim = document.getElementById('carossAnim')
    const barsAnim = document.getElementById('barsAnim')
    // /////////////////
    if (BarsContend.style.display === 'none') {
        BarsContend.style.display = 'block';
    } else {
        BarsContend.style.display = 'none';
    }
    // /////////////////
    if (carossAnim.style.display === 'none') {
        carossAnim.style.display = 'block';
    } else {
        carossAnim.style.display = 'none';
    }
    // /////////////////
    if (barsAnim.style.display === 'block') {
        barsAnim.style.display = 'none';
    } else {
        barsAnim.style.display = 'block';
    }

}

function HideContact() {
    const BarsContend = document.getElementById('BarsContend')
    const carossAnim = document.getElementById('carossAnim')
    const barsAnim = document.getElementById('barsAnim')

    // /////////////////
    if (BarsContend.style.display === 'block') {
        BarsContend.style.display = 'none';
    }
    // /////////////////
    if (carossAnim.style.display === 'block') {
        carossAnim.style.display = 'none';
    }
    // /////////////////
    if (barsAnim.style.display === 'none') {
        barsAnim.style.display = 'block';
    }

}

function showMoreonBottomList() {
    const fotterList2 = document.getElementById('fotterList2')
    const fotterList1Closebutton = document.getElementById('fotterList1Closebutton')
    // /////////////////
    if (fotterList2.style.display === 'block') {
        fotterList2.style.display = 'none';
    } else {
        fotterList2.style.display = 'block';
    }
    // /////////////////
    if (fotterList1Closebutton.style.rotate === '135deg') {
        fotterList1Closebutton.style.rotate = '0deg';
    } else {
        fotterList1Closebutton.style.rotate = '135deg';
    }
    // /////////////////
}