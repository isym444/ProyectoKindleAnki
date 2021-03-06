import React, { useEffect } from 'react'
//Todo make this into a component s.t. can import each dif. book without having to hard code everything
import Kenshuui from '../Books/Kenshuui';
import Header from '../components/Header';

//Todo modify this so it takes the neame of imported component?
export default function Newpage() {
    let t = window.location.pathname;
    t = t.substr(1);

/* document.addEventListener("DOMContentLoaded", function(event) {
var scrollpos = localStorage.getItem(`${t}`+'scrollpos');
if (scrollpos)
{
        window.scrollTo(0, scrollpos);
}
}); */

useEffect(() => {
    var scrollpos = localStorage.getItem(`${t}`+'scrollpos');
    if (scrollpos)
    {
            window.scrollTo(0, scrollpos);
    }
    return () => {
        localStorage.setItem(`${t}`+'scrollpos', window.scrollY);
        let temp = calcper();
        localStorage.setItem(`${t}`+'percent', temp);
    }
}, [])

function calcper(){
    let sofar = window.scrollY;
    let total = document.body.offsetHeight;
    let per = sofar/total;
    let ans = Math.round(per*100);
    return ans;
}

//h check if window.location.href works to prevent hp and other books from changing
/* if(window.location.href="/kenshuui.html")
{ */
    /* window.onbeforeunload = function(e) {
        localStorage.setItem(`${t}`+'scrollpos', window.scrollY);
        let temp = calcper();
        localStorage.setItem(`${t}`+'percent', temp);
    }; */
//}

function showper(){
    let ans = calcper();
    alert(ans+"%");
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'p' && event.ctrlKey) {
        showper();
    }
});


    return (
        <div>
            <Header />
            <div className="bg-gray-900">
                <button className="bg-white m-2 p-4 bottom-0 left-0 fixed" id="percent" onClick={showper}>
                    <div>Show %</div>
                    <div>(ctrl+p)</div>
                </button>
                <div className="pt-40">
                <Kenshuui />
                </div>
            </div>
        </div>
    )
}
