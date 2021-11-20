function anounces({
    title = '',
    message = '',
    type = '',
    duraion = 6000
}) {
    const main = document.getElementById('anounces');
    const icons = {
        success: 'fas fa-check-circle',
        info: "fas fa-info-circle",
        warning: "fas fa-exclamation-circle"
    }

    const delay = (duraion / 1000).toFixed(2);
    if(main) {
        const anounce = document.createElement('div');
        const autoClear = setTimeout(function() {
            main.removeChild(anounce);
        }, duraion + 1000)
        anounce.onclick = function(event) {
            if(event.target.closest(`.${type}__close`)) {
                main.removeChild(anounce);
                clearTimeout(autoClear);
            }
        }
        anounce.classList.add(`${type}`);
        anounce.style.animation = `slideInleft ease .5s, fadeOut linear 1s ${delay}s forwards`;
        anounce.innerHTML = `
            <div class="${type}__begin">
                <i class="${icons[type]}"></i>
            </div>
            <div class="${type}__body">
                <h3>${title}</h3>
                <p>${message}</p>
            </div>
            <div class="${type}__close">
                <div class="close">
                    <i class="fas fa-times"></i>
                </div>
            </div>
        `;
        main.appendChild(anounce);
    }
}



function showSuccessAnounce() {
    anounces({
        title: 'Success',
        message: 'Đã đã làm thành công bảng thông báo thành công',
        type: 'success',
        duration: 3000
    });
}

function showInfoAnounce() {
    anounces({
        title: 'Info',
        message: 'Đã đã làm thành công bảng thông báo thông tin',
        type: 'info',
        duration: 3000
    });
}

function showWarningAnounce() { 
    anounces({
        title: 'Warning',
        message: 'Đã đã làm thành công bảng thông báo cảnh báo',
        type: 'warning',
        duration: 3000
    });
}