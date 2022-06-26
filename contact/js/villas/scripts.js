const mobileMenu=document.getElementById("mobileMenu"),mobileMenuOverlay=document.getElementById("mobileMenuOverlay");function validateOnlyNumber(e){var n,t=e||window.event;n="paste"===t.type?event.clipboardData.getData("text/plain"):(n=t.keyCode||t.which,String.fromCharCode(n));/[0-9]|\./.test(n)?null==(e=e.srcElement.value)||0==e.length?"0"!=n&&t.preventDefault():1==e.length&&"5"!=n&&t.preventDefault():(t.returnValue=!1,t.preventDefault&&t.preventDefault())}function dateToString(e){return e.toJSON().split("T")[0]}function clearErrors(){const t=document.getElementsByClassName("field-error");for(let e=0,n=t.length;e<n;e++)t[e].innerHTML=""}function showErrors(e){if(e)for(var n in e)document.getElementById(n+"-error").innerHTML=e[n]}function changeLanguage(e){e="ar"==e?"en":"ar";const n=new URL(window.location.href);n.searchParams.set("lang",e),window.location.href=n.href}function showError(e,n){Swal.fire({icon:"error",title:e,text:n})}function showSuccess(e,n){Swal.fire({icon:"success",title:e,text:n,showConfirmButton:!1,timer:1500})}function showMenu(){mobileMenu.className+=" active",mobileMenuOverlay.className+=" active"}function hideMenu(){mobileMenu.className=mobileMenu.className.replaceAll("active","").trim(),mobileMenuOverlay.className=mobileMenuOverlay.className.replaceAll("active","").trim()}
function assignPaymentMethod(elem, paymentMethod){
    const elems = document.querySelectorAll('.payment-methods > div.active')
    elems.forEach(el => el.className = '')
    elem.className = 'active'
    document.getElementById('paymentMethod').value = paymentMethod;
}
function showReservationMsg(downPayment) {
    Swal.fire({
        icon: "success",
        title: "طھظ… ط§ظ„ط­ط¬ط² ط¨ظ†ط¬ط§ط­",
        html: `<div class="rtl">
    <p style="font-size: 20px">ظٹط¬ط¨ طھط³ط¯ظٹط¯ ظ…ط¨ظ„ط؛ <strong>(${downPayment} <i class="fa fa-ils"></i>)</strong> ط®ظ„ط§ظ„ ظ¢ظ¤ ط³ط§ط¹ط© ظ„طھط£ظƒظٹط¯ ط§ظ„ط­ط¬ط²</p>
<p style="font-size: 20px">ظپظٹ ط­ط§ظ„ ظ„ظ… ظٹطھظ… طھط³ط¯ظٹط¯ ط§ظ„ظ…ط¨ظ„ط؛ ط³ظٹطھظ… ط§ظ„ط؛ط§ط، ط§ظ„ط­ط¬ط² طھظ„ظ‚ط§ط¦ظٹط§</p>
</div>`,
        confirmButtonText: "ط­ط³ظ†ط§"
    })
}