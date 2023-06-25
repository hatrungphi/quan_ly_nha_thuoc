function hienThiBaoCao() {
    const params = {
        ngay: '2023-06-10T17:00:00.000Z',
        gio: '21:55:05',
        soHoaDon: 'HD_002',
        maSKU: 'AAAA',
        maNhom: 'DH',
        maNhaSanXuat: 'CTYHG',
        maDonVi: 'H',
        tenBietDuoc: 'aaaaaaaa',
        soDangKy: '222222',
        hoatChat: 'aaaaaaaaaaaaaa',
        donGia: 10000,
        giaBan: 65000,
        hanSuDung: 12,
        soLuong: 10,
        tongTien: 200000,
        thue: 20000,
        loiNhuan: -500000,
        tenNhanVien: 'Hà Trung Phi'
    };

    const queryString = new URLSearchParams(params).toString();

    fetch(`http://localhost:3000/qlnt/baocao/?${queryString}`)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('table_baocao');
            tableBody.innerHTML = '';

            for (let i = 0; i < data.length; i++) {
                const row = document.createElement('tr');

                const ngayCell = document.createElement('td');
                ngayCell.innerText = data[i].ngay;
                row.appendChild(ngayCell);

                const gioCell = document.createElement('td');
                gioCell.innerText = data[i].gio;
                row.appendChild(gioCell);

                const soHoaDonCell = document.createElement('td');
                soHoaDonCell.innerText = data[i].soHoaDon;
                row.appendChild(soHoaDonCell);

                const maSKUCell = document.createElement('td');
                maSKUCell.innerText = data[i].maSKU;
                row.appendChild(maSKU);

                const maNhomCell = document.createElement('td');
                maNhomCell.innerText = data[i].maNhom;
                row.appendChild(maNhomCell);

                const maNhaSanXuatCell = document.createElement('td');
                maNhaSanXuatCell.innerText = data[i].maNhaSanXuat;
                row.appendChild(maNhaSanXuat);

                const maDonViCell = document.createElement('td');
                maDonViCell.innerText = data[i].maDonVi;
                row.appendChild(maDonViCell);

                const tenBietDuocCell = document.createElement('td');
                tenBietDuocCell.innerText = data[i].tenBietDuoc;
                row.appendChild(tenBietDuocCell);

                const soDangKyCell = document.createElement('td');
                soDangKyCell.innerText = data[i].soDangKy;
                row.appendChild(soDangKyCell);

                const hoatChatCell = document.createElement('td');
                hoatChatCell.innerText = data[i].hoatChat;
                row.appendChild(hoatChatCell);

                const donGiaCell = document.createElement('td');
                donGiaCell.innerText = data[i].donGia;
                row.appendChild(donGiaCell);

                const giaBanCell = document.createElement('td');
                giaBanCell.innerText = data[i].giaBan;
                row.appendChild(giaBanCell);

                const hanSuDungCell = document.createElement('td');
                hanSuDungCell.innerText = data[i].hanSuDung;
                row.appendChild(hanSuDungCell);

                const soLuongCell = document.createElement('td');
                hanSuDungCell.innerText = data[i].soLuong;
                row.appendChild(soLuongCell);

                const tongTienCell = document.createElement('td');
                tongTienCell.innerText = data[i].tongTien;
                row.appendChild(tongTienCell);

                const thueCell = document.createElement('td');
                thueCell.innerText = data[i].thue;
                row.appendChild(thueCell);

                const loiNhuanCell = document.createElement('td');
                thueCell.innerText = data[i].loiNhuan;
                row.appendChild(loiNhuanCell);

                const tenNhanVienCell = document.createElement('td');
                tenNhanVienCell.innerText = data[i].tenNhanVien;
                row.appendChild(tenNhanVienCell);


                tableBody.appendChild(row);
            }
        })
        .catch(error => console.log(error));
}






let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () => {
    toggleBtn.classList.replace('fa-sun', 'fa-moon');
    body.classList.add('dark');
    localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () => {
    toggleBtn.classList.replace('fa-moon', 'fa-sun');
    body.classList.remove('dark');
    localStorage.setItem('dark-mode', 'disabled');
}

if (darkMode === 'enabled') {
    enableDarkMode();
}

toggleBtn.onclick = (e) => {
    darkMode = localStorage.getItem('dark-mode');
    if (darkMode === 'disabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () => {
    profile.classList.toggle('active');
    search.classList.remove('active');
}

let search = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () => {
    search.classList.toggle('active');
    profile.classList.remove('active');
}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () => {
    sideBar.classList.toggle('active');
    body.classList.toggle('active');
}

document.querySelector('#close-btn').onclick = () => {
    sideBar.classList.remove('active');
    body.classList.remove('active');
}

window.onscroll = () => {
    profile.classList.remove('active');
    search.classList.remove('active');

    if (window.innerWidth < 1200) {
        sideBar.classList.remove('active');
        body.classList.remove('active');
    }
}



$(document).ready(function () {
    $('#example').DataTable({
        ajax: {
            url: 'http://localhost:3000/qlnt/baocao/',
            dataSrc: ''
        },
        columns: [
            { data: 'ngay' },
            { data: 'gio' },
            { data: 'soHoaDon' },
            { data: 'maSKU' },
            { data: 'maNhom' },
            { data: 'maNhaSanXuat' },
            { data: 'maDonVi' },
            { data: 'tenBietDuoc' },
            { data: 'soDangKy' },
            { data: 'hoatChat' },
            { data: 'donGia' },
            { data: 'giaBan' },
            { data: 'hanSuDung' },
            { data: 'soLuong' },
            { data: 'tongTien' },
            { data: 'thue' },
            { data: 'loiNhuan' },
            { data: 'tenNhanVien' },
        ],
        dom: 'Bfrtip',
        buttons: [
            {
                extend: 'copyHtml5',
                exportOptions: {
                    columns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
                }
            },
            {
                extend: 'csvHtml5',
                exportOptions: {
                    columns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
                }
            },
            {
                extend: 'excelHtml5',
                exportOptions: {
                    columns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
                }
            },
            {
                extend: 'pdfHtml5',
                exportOptions: {
                    columns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
                }
            },
            {
                extend: 'print',
                exportOptions: {
                    columns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
                }
            }
        ],
        columnDefs: [{
            targets: "_all",
            defaultContent: "-"
        }]
    });
});



// Lấy modal
var modal = document.getElementById("myModal");

// Lấy nút đóng modal
var span = document.getElementsByClassName("close")[0];

// Mở modal khi nhấn vào button
function openModal() {
    modal.style.display = "block";
}

// Đóng modal khi nhấn vào nút đóng
span.onclick = function () {
    modal.style.display = "none";
}

// Đóng modal khi nhấn vào bất kỳ đâu bên ngoài modal
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function showContent(id) {
    // Lấy các phần tử nội dung và menu
    var content = document.getElementsByClassName("content");
    var menu = document.getElementsByClassName("menu")[0].getElementsByTagName("a");


    // Ẩn tất cả các phần tử nội dung
    for (var i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }

    // Hiển thị phần tử nội dung tương ứng với mục được chọn
    document.getElementById("content" + id).style.display = "block";

    // Đổi màu sắc của mục được chọn
    for (var i = 0; i < menu.length; i++) {
        menu[i].classList.remove("active");
    }
    menu[id - 1].classList.add("active");
}




const tableContainer = document.querySelector('.table-container');
const toggleButton = document.querySelector('.toggle-button');

toggleButton.addEventListener('click', function () {
    tableContainer.classList.toggle('show');
});