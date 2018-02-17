export default  {
    knobX: 85,
    knobY: 84,
    svg:`

<svg width="208px" height="208px" viewBox="0 0 208 208" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
 
    <defs>
        <linearGradient x1="50%" y1="50%" x2="50%" y2="100%" id="linearGradient-1">
            <stop stop-color="#444040" stop-opacity="0.51098279" offset="0%"></stop>
            <stop stop-color="#131111" stop-opacity="0.893200861" offset="100%"></stop>
        </linearGradient>
        <circle id="path-2" cx="100" cy="100" r="100"></circle>
        <filter x="-3.2%" y="-3.2%" width="106.5%" height="106.5%" filterUnits="objectBoundingBox" id="filter-3">
            <feMorphology radius="0.5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
            <feOffset dx="0" dy="0" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <circle id="path-4" cx="100" cy="100" r="88"></circle>
        <filter x="-1.1%" y="-1.1%" width="102.3%" height="102.3%" filterUnits="objectBoundingBox" id="filter-5">
            <feGaussianBlur stdDeviation="1.5" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
            <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
        </filter>
        <linearGradient x1="50%" y1="50%" x2="50%" y2="-21.1037009%" id="linearGradient-6">
            <stop stop-color="#DCD0D0" offset="0%"></stop>
            <stop stop-color="#C1C1C1" offset="100%"></stop>
            <stop stop-color="#494444" offset="100%"></stop>
            <stop stop-color="#766C6C" offset="100%"></stop>
        </linearGradient>
        <path d="M80,1 C82.4603081,0.629427456 84.2936414,0.444141183 85.5,0.444141183 C86.7063586,0.444141183 88.5396919,0.629427456 91,1 L91,47 L80,47 L80,1 Z" id="path-7"></path>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="2" transform="translate(4.000000, 4.000000)">
            <g id="container">
                <g id="Oval-2">
                    <use fill="black" fill-opacity="1" filter="url(#filter-3)" xlink:href="#path-2"></use>
                    <use stroke="#979797" stroke-width="1" fill="url(#linearGradient-1)" fill-rule="evenodd" xlink:href="#path-2"></use>
                </g>
                <g id="Oval-2">
                    <use fill="#AEA8A8" fill-rule="evenodd" xlink:href="#path-4"></use>
                    <use fill="black" fill-opacity="1" filter="url(#filter-5)" xlink:href="#path-4"></use>
                    <use stroke="#4A4A4A" stroke-width="1" xlink:href="#path-4"></use>
                </g>
                <g id="knob" transform="translate(15.000000, 15.000000)">
                    <ellipse id="Oval-5" fill="url(#linearGradient-6)" cx="85" cy="84" rx="85" ry="84"></ellipse>
                    <ellipse id="Oval-8" fill="#BFB9B9" cx="85" cy="84" rx="37.4404762" ry="37"></ellipse>
                    <ellipse id="Oval-7" fill="#7F7B7B" cx="85" cy="84" rx="10.1190476" ry="10"></ellipse>
                    <g id="Rectangle-2">
                        <use fill="#EF7C7C" fill-rule="evenodd" xlink:href="#path-7"></use>
                        <path stroke="#C1BBBB" stroke-width="1" d="M80.5,1.43126947 L80.5,46.5 L90.5,46.5 L90.5,1.43126947 C88.275969,1.10626031 86.606489,0.944141183 85.5,0.944141183 C84.393511,0.944141183 82.724031,1.10626031 80.5,1.43126947 Z"></path>
                    </g>
                    <path d="M89.5,2.5 L89.5,45.5" id="Line" stroke="#979797" stroke-linecap="square"></path>
                </g>
            </g>
        </g>
    </g>
</svg>
 `