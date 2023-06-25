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
         url: 'http://localhost:3000/qlnt/thuoc/',
         dataSrc: ''
      },
      columns: [
         { data: 'maSKU' },
         { data: 'maNhom' },
         { data: 'maNhaSanXuat' },
         { data: 'maDonVi' },
         { data: 'tenBietDuoc' },
         { data: 'soDangKy' },
         { data: 'hoatChat' },
         { data: 'donGia' },
         { data: 'giaBan' },
         { data: 'hanSuDung' }
      ],
      dom: 'Bfrtip',
      buttons: [
         {
            extend: 'copyHtml5',
            exportOptions: {
               columns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
         },
         {
            extend: 'csvHtml5',
            exportOptions: {
               columns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
         },
         {
            extend: 'excelHtml5',
            exportOptions: {
               columns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
         },
         {
            extend: 'pdfHtml5',
            exportOptions: {
               columns: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
         },
         {
            extend: 'print',
            exportOptions: {
               columns: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
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