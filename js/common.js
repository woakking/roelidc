function navActive(param) {
    $("li[data-nav-item='" + param + "']").addClass("current-menu-item");
}

function includeHTML() {
    const elements = document.querySelectorAll('[data-include]');
    
    elements.forEach(element => {
        const file = element.getAttribute('data-include');
        if (file) {
            fetch(file)
                .then(response => response.text())
                .then(data => {
                    element.innerHTML = data;
                    
                    // 헤더나 푸터가 로드된 후에 select 관련 코드를 실행
                    if (element.tagName === 'HEADER' || element.tagName === 'FOOTER') {
                        initCustomSelect();  // 외부 파일이 로드된 후 실행

                        var menuActiveClass = $("body").attr("class");

                        switch(menuActiveClass) {
                            case "home" :
                                $("li[data-nav-item='" + menuActiveClass + "']").addClass("current-menu-item");
                                break;

                            case "ddos" :
                                $("li[data-nav-item='" + menuActiveClass + "']").addClass("current-menu-item");
                                break;

                            case "network" :
                                $("li[data-nav-item='" + menuActiveClass + "']").addClass("current-menu-item");
                                break;

                            case "datacenter" :
                                $("li[data-nav-item='" + menuActiveClass + "']").addClass("current-menu-item");
                                break;

                            case "customer" :
                                $("li[data-nav-item='" + menuActiveClass + "']").addClass("current-menu-item");
                                break;
                            case "etc" :
                            $("li[data-nav-item='" + menuActiveClass + "']").addClass("current-menu-item");
                            break;
                        }
                    }
                })
                .catch(error => console.error('Error loading include file:', error));
        }
    });
}

// jQuery를 사용해 select 요소를 커스터마이징하는 함수
function initCustomSelect() {
    //select in navigation
    $('nav select').change(function() {
        window.location = $(this).val();
    })

    $("select").each(function() {
        var select = $(this).css('opacity', 0);
        select.wrap('<span class="select"/>');
        select.before('<span class="value"><span></span></span>');
        var selectVal = select.siblings(".value").find("span");

        function selectUpdate() {
            var newVal = select.find(':selected').text();
            selectVal.html(newVal);
        }

        select.bind('change keypress keydown keyup', selectUpdate);
        selectUpdate();
    });
}

// 페이지가 로드된 후 includeHTML 실행
window.onload = includeHTML;