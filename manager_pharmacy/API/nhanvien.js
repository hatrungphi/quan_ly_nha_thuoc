function hienThiTatCa() {
   const params = {
      maNhanVien: 'NV_02',
      maChiNhanh: 'NT_01',
      cccd: '123456789012',
      tenNhanVien: 'Nguyen Thanh Tra',
      ngaySinh: '2001-05-14T17:00:00.000Z',
      gioiTinh: '0',
      sdt: "0969884949",
      diaChi: 'jjjjjjjjjjj',
      maUser: '5',
   };

   const queryString = new URLSearchParams(params).toString();

   fetch(`http://localhost:3000/qlnt/nhanvien/?${queryString}`)
      .then(response => response.json())
      .then(data => {
         const tableBody = document.getElementById('table-body1');
         tableBody.innerHTML = '';

         for (let i = 0; i < data.length; i++) {
            const row = document.createElement('tr');

            const maSKUCell = document.createElement('td');
            maSKUCell.innerText = data[i].maNhanVien;
            row.appendChild(maSKUCell);

            const maNhomCell = document.createElement('td');
            maNhomCell.innerText = data[i].maChiNhanh;
            row.appendChild(maNhomCell);

            const maNhaSanXuatCell = document.createElement('td');
            maNhaSanXuatCell.innerText = data[i].cccd;
            row.appendChild(maNhaSanXuatCell);

            const maDonViCell = document.createElement('td');
            maDonViCell.innerText = data[i].tenNhanVien;
            row.appendChild(maDonViCell);

            const tenBietDuocCell = document.createElement('td');
            tenBietDuocCell.innerText = data[i].ngaySinh;
            row.appendChild(tenBietDuocCell);

            const soDangKyCell = document.createElement('td');
            soDangKyCell.innerText = data[i].gioiTinh;
            row.appendChild(soDangKyCell);

            const giaBanCell = document.createElement('td');
            giaBanCell.innerText = data[i].giaBan;
            row.appendChild(giaBanCell);

            const hoatChatCell = document.createElement('td');
            hoatChatCell.innerText = data[i].sdt;
            row.appendChild(hoatChatCell);

            const hoatChatCell1 = document.createElement('td');
            hoatChatCell.innerText = data[i].diaChi;
            row.appendChild(hoatChatCell);

            const hoatChatCell2 = document.createElement('td');
            hoatChatCell.innerText = data[i].maUser;
            row.appendChild(hoatChatCell);

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

//// sửa nè

$(document).ready(function() {
   $('#example').DataTable( {
      ajax: {
         url: 'http://localhost:3000/qlnt/nhanvien/',
         dataSrc: ''
      },
      columns: [
         { data: 'maNhanVien' },
         { data: 'maChiNhanh' },
         { data: 'cccd' },
         { data: 'tenNhanVien' },
         { data: 'ngaySinh' },
         { data: 'gioiTinh' },
         { data: 'sdt' },
         { data: 'diaChi' },
         { data: 'maUser' },
      ],
      dom: 'Bfrtip',
      buttons: [
         {
            extend: 'copyHtml5',
            exportOptions: {
               columns: [ 0, 1, 2, 3, 4, 5, 6, 7 ,8]
            }
         },
         {
            extend: 'csvHtml5',
            exportOptions: {
               columns: [ 0, 1, 2, 3, 4, 5, 6, 7,8 ]
            }
         },
         {
            extend: 'excelHtml5',
            exportOptions: {
               columns: [ 0, 1, 2, 3, 4, 5, 6, 7 ,8]
            }
         },
         {
            extend: 'pdfHtml5',
            exportOptions: {
               columns: [ 0, 1, 2, 3, 4, 5, 6, 7 ,8]
            }
         },
         {
            extend: 'print',
            exportOptions: {
               columns: [ 0, 1, 2, 3, 4, 5, 6, 7 ,8]
            }
         }
      ],
      columnDefs: [{
         targets: -1, // Thêm cột mới vào cuối bảng
         data: null,
         defaultContent: '<button class="editBtn">Sửa</button>'
      }]
   } );   
} );

///// sửa nè


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



// code mới thêm

// Lấy tất cả các hàng trong tbody
const rows = document.querySelectorAll('#example tbody tr');

// Lặp qua từng hàng
rows.forEach(row => {
  // Tạo một ô mới chứa button sửa
  const editCell = document.createElement('td');
  const editBtn = document.createElement('button');
  editBtn.textContent = 'Sửa';
  editBtn.addEventListener('click', () => {
    // Thực hiện thao tác sửa dữ liệu cho hàng này khi người dùng click vào button sửa
    // Ví dụ: Hiển thị một form để người dùng nhập liệu và cập nhật dữ liệu cho hàng này
    console.log('Sửa dữ liệu cho hàng này');
  });
  editCell.appendChild(editBtn);

  // Thêm ô mới vào cuối hàng
  row.appendChild(editCell);
});