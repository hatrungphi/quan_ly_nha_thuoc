
function themNhanVien() {
    const maNhanVien = document.getElementById('manhanvien').value;
    const maChiNhanh = document.getElementById('machinhanh');
    const cCCD = document.getElementById('cccd').value;
    const tenNhanVien = document.getElementById('tennhanvien').value;
    const ngaySinh = document.getElementById('ngaysinh').value;
    const gioiTinhInputs = document.getElementsByName('gioitinh');
    let gioiTinhValue;
    for (let i = 0; i < gioiTinhInputs.length; i++) {
        if (gioiTinhInputs[i].checked) {
            gioiTinhValue = gioiTinhInputs[i].value;
            break;
        }
    }
    console.log(gioiTinhValue);

    const sDT = document.getElementById('sdt').value;
    const diaChi = document.getElementById('diachi').value;
    const requiredInputs = document.querySelectorAll('.form-nhap [required]');

    // Kiểm tra xem có trường nhập liệu bắt buộc nào bị bỏ trống hay không
    let hasEmptyFields = false;
    requiredInputs.forEach((input) => {
        if (!input.value) {
            input.classList.add('warning');
            if (!input.nextElementSibling || !input.nextElementSibling.classList.contains('warning-message')) {
                const warningMessage = document.createElement('div');
                warningMessage.classList.add('warning-message');
                warningMessage.textContent = 'Vui lòng nhập giá trị.';
                input.parentNode.insertBefore(warningMessage, input.nextElementSibling);
            }
            hasEmptyFields = true;
        } else {
            input.classList.remove('warning');
            if (input.nextElementSibling && input.nextElementSibling.classList.contains('warning-message')) {
                input.nextElementSibling.remove();
            }
        }
    });

    // Nếu không có trường nào bị bỏ trống, thêm sản phẩm vào danh sách
    if (!hasEmptyFields) {
        const productList = document.getElementById('product-list');
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${maNhanVien}</td>
          <td value="${maChiNhanh.value}">${maChiNhanh.options[maChiNhanh.selectedIndex].text}</td>
          <td>${cCCD}</td>
          <td>${tenNhanVien}</td>
          <td>${ngaySinh}</td>
          <td>${gioiTinhValue}</td>
          
          <td>${sDT}</td>
          <td>${diaChi}</td>
        
        <td>
          <button class="row-button" onmousedown="xoa()" >Xoá</button>
        </td>
      `;
        productList.appendChild(row);

        // Xóa các giá trị trong form

        document.getElementById('manhanvien').value = '';
        document.getElementById('machinhanh').value = '';
        document.getElementById('cccd').value = '';
        document.getElementById('tennhanvien').value = '';
        document.getElementById('sdt').value = '';
        document.getElementById('diachi').value = '';
        document.getElementById('ngaysinh').value = '';
        document.querySelector('input[name="gioitinh"]:checked').checked = false;


        console.log('Thêm sản phẩm thành công.');

        // Lấy bảng dữ liệu và các trường nhập liệu từ DOM
        const addEmploy = document.getElementById('product-list');
        const formNhap = document.querySelector('.formnhap');

        // Kiểm tra xem bảng dữ liệu đã có nội dung hay chưa
        if (addEmploy.rows.length > 0) {
            // Vô hiệu hóa các trường nhập liệu
            const inputFields = formNhap.querySelectorAll('input, select');
            inputFields.forEach(field => {
                field.disabled = true;
            });

            // Hiển thị thông báo đỏ
            const errorMessage = document.createElement('p');
            errorMessage.textContent = 'Bạn phải ấn lưu trước khi thêm mới';
            errorMessage.style.color = 'red';
            formNhap.appendChild(errorMessage);
            btnLuu.addEventListener('click', () => {
                formNhap.removeChild(errorMessage);
            });

            
        }
    }




}

function addListNhanVien() {
    const productList = document.getElementById('product-list');
    const rows = productList.querySelectorAll('tr');
    const cells = rows[0].querySelectorAll('td');
    const maNhanVien = cells[0].textContent;
    const maChiNhanh = cells[1].getAttribute('value');
    const cccd = cells[2].textContent;
    const tenNhanVien = cells[3].textContent;
    const ngaySinh = cells[4].textContent;
    const gioiTinh = cells[5].textContent === 'Nam' ? 0 : 1;
    const sdt = cells[6].textContent;
    const diaChi = cells[7].textContent;

    const data = {
        maNhanVien: maNhanVien,
        maChiNhanh: maChiNhanh,
        cccd: cccd,
        tenNhanVien: tenNhanVien,
        ngaySinh: ngaySinh,
        gioiTinh: gioiTinh,
        sdt: sdt,
        diaChi: diaChi,
    };

    // Gửi dữ liệu bằng AJAX
    fetch('http://localhost:3000/qlnt/nhanvien/addNV', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => {
            if (response.ok) {
                // Xử lý khi gửi dữ liệu thành công
                const tbody = document.getElementById('product-list');
                tbody.innerHTML = '';
                alert('Đã lưu thành công.');
            } else {
                // Xử lý khi có lỗi xảy ra
                alert('Lưu thất bại.');
            }
        })
        .catch((error) => {
            console.log(error);
        });

    //reset
    reset();
}

function xoa() {
    // Thêm sự kiện "click" cho tất cả các nút "Xoá" trong bảng sản phẩm
    const deleteButtons = document.querySelectorAll('#product-list .row-button');
    deleteButtons.forEach((button) => {
        button.addEventListener('click', () => {
            // Xóa phần tử tr chứa nút "Xoá" được nhấn
            const row = button.parentNode.parentNode;
            row.parentNode.removeChild(row);
        });
    });

    reset();


}



///


///

function reset() {
    // Lấy bảng dữ liệu và các trường nhập liệu từ DOM
    const productList1 = document.getElementById('product-list');
    const formNhap = document.querySelector('.formnhap');
    // Đặt lại các phần tử input radio "Giới tính"

    // Đặt lại các trường nhập liệu
    const inputFields = formNhap.querySelectorAll('input, select');
    inputFields.forEach(field => {
        if (field.type === 'radio') { // nếu là input radio
            field.checked = false; // bỏ chọn input radio
        } else { // nếu là input khác
            field.value = ''; // đặt lại giá trị
        }
        field.disabled = false;
    });

    // Xóa tất cả các hàng trong bảng dữ liệu
    while (productList1.rows.length > 0) {
        productList1.deleteRow(0);
    }
}

