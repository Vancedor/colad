(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6822],{2920:function(e,t,n){"use strict";var i=n(5893),r=n(4047),o=n(2700),s=n(8127),a=n(4102),c=n(775),l=n(7294),u=n(1664);function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,c.Z)(e);if(t){var r=(0,c.Z)(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return(0,a.Z)(this,n)}}var f=function(e){(0,s.Z)(n,e);var t=d(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,o.Z)(n,[{key:"render",value:function(){return(0,i.jsx)("div",{className:"cta-area-two ptb-100",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsxs)("div",{className:"cta-content",children:[(0,i.jsx)("span",{children:"So What is Next?"}),(0,i.jsx)("h3",{children:"Are You Ready? Let's get to work!"})]}),(0,i.jsx)("div",{className:"cta-btn-box",children:(0,i.jsx)(u.default,{href:"/contact",children:(0,i.jsx)("a",{className:"custom-btn",children:"Contact Us"})})})]})})}}]),n}(l.Component);t.Z=f},7251:function(e,t,n){"use strict";var i=n(5893),r=n(4047),o=n(2700),s=n(8127),a=n(4102),c=n(775);function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,c.Z)(e);if(t){var r=(0,c.Z)(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return(0,a.Z)(this,n)}}var u=function(e){(0,s.Z)(n,e);var t=l(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,o.Z)(n,[{key:"render",value:function(){var e=this.props,t=e.pageTitle,n=e.BGImage;return(0,i.jsx)("div",{className:"page-title-area ".concat(n),children:(0,i.jsx)("div",{className:"d-table",children:(0,i.jsx)("div",{className:"d-table-cell",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("h2",{children:t})})})})})}}]),n}(n(7294).Component);t.Z=u},2167:function(e,t,n){"use strict";var i=n(3848),r=n(9448);t.default=void 0;var o=r(n(7294)),s=n(9414),a=n(4651),c=n(7426),l={};function u(e,t,n,i){if(e&&(0,s.isLocalURL)(t)){e.prefetch(t,n,i).catch((function(e){0}));var r=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;l[t+"%"+n+(r?"%"+r:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=(0,a.useRouter)(),d=o.default.useMemo((function(){var t=(0,s.resolveHref)(r,e.href,!0),n=i(t,2),o=n[0],a=n[1];return{href:o,as:e.as?(0,s.resolveHref)(r,e.as):a||o}}),[r,e.href,e.as]),f=d.href,p=d.as,h=e.children,m=e.replace,v=e.shallow,g=e.scroll,x=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var j=(t=o.Children.only(h))&&"object"===typeof t&&t.ref,b=(0,c.useIntersection)({rootMargin:"200px"}),y=i(b,2),N=y[0],w=y[1],k=o.default.useCallback((function(e){N(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,N]);(0,o.useEffect)((function(){var e=w&&n&&(0,s.isLocalURL)(f),t="undefined"!==typeof x?x:r&&r.locale,i=l[f+"%"+p+(t?"%"+t:"")];e&&!i&&u(r,f,p,{locale:t})}),[p,f,w,x,n,r]);var Z={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,i,r,o,a,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==a&&i.indexOf("#")>=0&&(a=!1),t[r?"replace":"push"](n,i,{shallow:o,locale:c,scroll:a}))}(e,r,f,p,m,v,g,x)},onMouseEnter:function(e){(0,s.isLocalURL)(f)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(r,f,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var I="undefined"!==typeof x?x:r&&r.locale,R=r&&r.isLocaleDomain&&(0,s.getDomainLocale)(p,I,r&&r.locales,r&&r.domainLocales);Z.href=R||(0,s.addBasePath)((0,s.addLocale)(p,I,r&&r.defaultLocale))}return o.default.cloneElement(t,Z)};t.default=d},7426:function(e,t,n){"use strict";var i=n(3848);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!s,c=(0,r.useRef)(),l=(0,r.useState)(!1),u=i(l,2),d=u[0],f=u[1],p=(0,r.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),n||d||e&&e.tagName&&(c.current=function(e,t,n){var i=function(e){var t=e.rootMargin||"",n=a.get(t);if(n)return n;var i=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return a.set(t,n={id:t,observer:r,elements:i}),n}(n),r=i.id,o=i.observer,s=i.elements;return s.set(e,t),o.observe(e),function(){s.delete(e),o.unobserve(e),0===s.size&&(o.disconnect(),a.delete(r))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return(0,r.useEffect)((function(){if(!s&&!d){var e=(0,o.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[d]),[p,d]};var r=n(7294),o=n(3447),s="undefined"!==typeof IntersectionObserver;var a=new Map},746:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var i=n(5893),r=n(4047),o=n(2700),s=n(8127),a=n(4102),c=n(775),l=n(7294),u=n(4123),d=n(7251),f=n(4706),p=n(6265),h=(n(1664),n(2879));function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,c.Z)(e);if(t){var r=(0,c.Z)(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return(0,a.Z)(this,n)}}var v=["/images/portfolio/portfolio1.jpg","/images/portfolio/portfolio2.jpg","/images/portfolio/portfolio3.jpg","/images/portfolio/portfolio4.jpg","/images/portfolio/portfolio5.jpg"],g=function(e){(0,s.Z)(n,e);var t=m(n);function n(){var e;(0,r.Z)(this,n);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return e=t.call.apply(t,[this].concat(o)),(0,p.Z)((0,f.Z)(e),"state",{photoIndex:0,isOpenImage:!1}),e}return(0,o.Z)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.photoIndex,r=t.isOpenImage;return(0,i.jsxs)(i.Fragment,{children:[r&&(0,i.jsx)(h.Z,{mainSrc:v[n],nextSrc:v[(n+1)%v.length],prevSrc:v[(n+v.length-1)%v.length],onCloseRequest:function(){return e.setState({isOpenImage:!1})},onMovePrevRequest:function(){return e.setState({photoIndex:(n+v.length-1)%v.length})},onMoveNextRequest:function(){return e.setState({photoIndex:(n+1)%v.length})}}),(0,i.jsx)("section",{className:"portfolio-details ptb-100",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsxs)("div",{className:"row m-0",children:[(0,i.jsxs)("div",{className:"col-lg-4 col-md-6 p-0",children:[(0,i.jsxs)("div",{className:"portfolio-details-image",children:[(0,i.jsx)("img",{src:"/images/portfolio/portfolio1.jpg",alt:"image"}),(0,i.jsx)("div",{className:"popup-btn",onClick:function(t){e.setState({photoIndex:0,isOpenImage:!0})}})]}),(0,i.jsxs)("div",{className:"portfolio-details-image",children:[(0,i.jsx)("img",{src:"/images/portfolio/portfolio2.jpg",alt:"image"}),(0,i.jsx)("div",{className:"popup-btn",onClick:function(t){e.setState({photoIndex:1,isOpenImage:!0})}})]})]}),(0,i.jsx)("div",{className:"col-lg-4 col-md-6 p-0",children:(0,i.jsxs)("div",{className:"portfolio-details-image",children:[(0,i.jsx)("img",{src:"/images/portfolio/portfolio3.jpg",alt:"image"}),(0,i.jsx)("div",{className:"popup-btn",onClick:function(t){e.setState({photoIndex:2,isOpenImage:!0})}})]})}),(0,i.jsx)("div",{className:"col-lg-4 col-md-12 p-0",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-lg-12 col-md-6 pr_0",children:(0,i.jsxs)("div",{className:"portfolio-details-image",children:[(0,i.jsx)("img",{src:"/images/portfolio/portfolio4.jpg",alt:"image"}),(0,i.jsx)("div",{className:"popup-btn",onClick:function(t){e.setState({photoIndex:3,isOpenImage:!0})}})]})}),(0,i.jsx)("div",{className:"col-lg-12 col-md-6 pl_0",children:(0,i.jsxs)("div",{className:"portfolio-details-image",children:[(0,i.jsx)("img",{src:"/images/portfolio/portfolio5.jpg",alt:"image"}),(0,i.jsx)("div",{className:"popup-btn",onClick:function(t){e.setState({photoIndex:4,isOpenImage:!0})}})]})})]})})]}),(0,i.jsx)("div",{className:"row",children:(0,i.jsxs)("div",{className:"col-lg-12",children:[(0,i.jsxs)("div",{className:"portfolio-desc",children:[(0,i.jsx)("h2",{children:"We Provide Useful Services"}),(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."}),(0,i.jsx)("h2",{children:"Core Development"}),(0,i.jsx)("p",{children:"No fake products and services. The customer is king, their lives and needs are the inspiration. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful."}),(0,i.jsx)("h2",{children:"Define Your Choices"}),(0,i.jsx)("p",{children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic."}),(0,i.jsx)("p",{children:"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this."})]}),(0,i.jsxs)("div",{className:"service-details-info",children:[(0,i.jsxs)("div",{className:"single-info-box",children:[(0,i.jsx)("h4",{children:"Client"}),(0,i.jsx)("span",{children:"James Anderson"})]}),(0,i.jsxs)("div",{className:"single-info-box",children:[(0,i.jsx)("h4",{children:"Category"}),(0,i.jsx)("span",{children:"Saas, Marketing"})]}),(0,i.jsxs)("div",{className:"single-info-box",children:[(0,i.jsx)("h4",{children:"Date"}),(0,i.jsx)("span",{children:"February 28, 2020"})]}),(0,i.jsxs)("div",{className:"single-info-box",children:[(0,i.jsx)("h4",{children:"Share"}),(0,i.jsxs)("ul",{className:"social",children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",children:(0,i.jsx)("i",{className:"icofont-facebook"})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://twitter.com/",target:"_blank",children:(0,i.jsx)("i",{className:"icofont-twitter"})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://icofont.com/",target:"_blank",children:(0,i.jsx)("i",{className:"icofont-linkedin"})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",children:(0,i.jsx)("i",{className:"icofont-instagram"})})})]})]}),(0,i.jsx)("div",{className:"single-info-box",children:(0,i.jsx)("a",{href:"#",className:"default-btn",target:"_blank",children:"Live Preview"})})]})]})})]})})]})}}]),n}(l.Component),x=n(2920),j=n(1613);function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,c.Z)(e);if(t){var r=(0,c.Z)(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return(0,a.Z)(this,n)}}var y=function(e){(0,s.Z)(n,e);var t=b(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,o.Z)(n,[{key:"render",value:function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u.Z,{}),(0,i.jsx)(d.Z,{pageTitle:"UX for Mobile Apps",BGImage:"bg-two"}),(0,i.jsx)(g,{}),(0,i.jsx)(x.Z,{}),(0,i.jsx)(j.Z,{})]})}}]),n}(l.Component)},9721:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio-details",function(){return n(746)}])},1664:function(e,t,n){e.exports=n(2167)},8347:function(e,t,n){"use strict";function i(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return i}})},1163:function(e,t,n){e.exports=n(4651)}},function(e){e.O(0,[9774,2879,4959,2888,179],(function(){return t=9721,e(e.s=t);var t}));var t=e.O();_N_E=t}]);