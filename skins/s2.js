export default  {
    knobX: 85,
    knobY: 84,
    svg:`

    <svg width="208px" height="208px" viewBox="0 0 208 208" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 47.1 (45422) - http://www.bohemiancoding.com/sketch -->
    <desc>Created with Sketch.</desc>
    <defs>
        <linearGradient x1="50%" y1="50%" x2="50%" y2="100%" id="linearGradient-1">
            <stop stop-color="#444040" stop-opacity="0.51098279" offset="0%"></stop>
            <stop stop-color="#131111" stop-opacity="0.893200861" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="50%" x2="50%" y2="100%" id="linearGradient-2">
            <stop stop-color="#444040" stop-opacity="0.51098279" offset="0%"></stop>
            <stop stop-color="#131111" stop-opacity="0.893200861" offset="100%"></stop>
        </linearGradient>
        <circle id="path-3" cx="100" cy="100" r="100"></circle>
        <filter x="-3.2%" y="-3.2%" width="106.5%" height="106.5%" filterUnits="objectBoundingBox" id="filter-4">
            <feMorphology radius="0.5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
            <feOffset dx="0" dy="0" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <linearGradient x1="50%" y1="-21.1037009%" x2="50%" y2="50%" id="linearGradient-5">
            <stop stop-color="#514E4E" offset="0%"></stop>
            <stop stop-color="#363333" offset="100%"></stop>
            <stop stop-color="#494444" offset="100%"></stop>
            <stop stop-color="#766C6C" offset="100%"></stop>
        </linearGradient>
        <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="81.7422672%" gradientTransform="translate(0.500000,0.500000),scale(0.988235,1.000000),rotate(90.000000),translate(-0.500000,-0.500000)" id="radialGradient-6">
            <stop stop-color="#FFFFFF" offset="0%"></stop>
            <stop stop-color="#000000" offset="100%"></stop>
        </radialGradient>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="2" transform="translate(4.000000, 4.000000)">
            <g id="Oval-2">
                <g id="path-2-link">
                    <g id="path-2">
                        <use fill="black" fill-opacity="1" filter="url(#filter-4)" xlink:href="#path-3"></use>
                        <use stroke="#979797" stroke-width="1" fill="url(#linearGradient-2)" fill-rule="evenodd" xlink:href="#path-3"></use>
                    </g>
                </g>
            </g>
            <g id="knob" transform="translate(15.000000, 15.000000)">
                <ellipse id="Oval-5" stroke="#494545" stroke-width="5" fill="url(#linearGradient-5)" fill-rule="nonzero" cx="85" cy="84" rx="85" ry="84"></ellipse>
                <circle id="Oval-8" fill="#BFB9B9" fill-rule="nonzero" cx="85" cy="84" r="37"></circle>
                <ellipse id="Oval-7" fill="url(#radialGradient-6)" fill-rule="nonzero" cx="85.1190476" cy="84" rx="10.1190476" ry="10"></ellipse>
                <path d="M89.5,2.5 L89.5,45.5" id="Line" stroke="#979797" stroke-linecap="square"></path>
                <rect id="Rectangle-2" fill="#F5A623" fill-rule="nonzero" x="81" y="2" width="8" height="43"></rect>
            </g>
        </g>
    </g>
</svg>
 `
}