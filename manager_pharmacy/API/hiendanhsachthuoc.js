function hienThiTatCa() {
  const params = {
    maSKU: "AAAA",
    maNhom: "DH",
    maNhaSanXuat: "CTYHG",
    maDonVi: "V",
    tenBietDuoc: "AAA",
    soDangKy: "AAA",
    giaBan: 111111,
    hoatChat: "AAAAAA",
  };

  const queryString = new URLSearchParams(params).toString();

  fetch(`http://localhost:3000/qlnt/thuoc/?${queryString}`)
    .then((response) => response.json())
    .then((data) => {
      const tableBody = document.getElementById("table-body");
      tableBody.innerHTML = "";

      for (let i = 0; i < data.length; i++) {
        const row = document.createElement("tr");

        const maSKUCell = document.createElement("td");
        maSKUCell.innerText = data[i].maSKU;
        row.appendChild(maSKUCell);

        const maNhomCell = document.createElement("td");
        maNhomCell.innerText = data[i].maNhom;
        row.appendChild(maNhomCell);

        const maNhaSanXuatCell = document.createElement("td");
        maNhaSanXuatCell.innerText = data[i].maNhaSanXuat;
        row.appendChild(maNhaSanXuatCell);

        const maDonViCell = document.createElement("td");
        maDonViCell.innerText = data[i].maDonVi;
        row.appendChild(maDonViCell);

        const tenBietDuocCell = document.createElement("td");
        tenBietDuocCell.innerText = data[i].tenBietDuoc;
        row.appendChild(tenBietDuocCell);

        const soDangKyCell = document.createElement("td");
        soDangKyCell.innerText = data[i].soDangKy;
        row.appendChild(soDangKyCell);

        const giaBanCell = document.createElement("td");
        giaBanCell.innerText = data[i].giaBan;
        row.appendChild(giaBanCell);

        const hoatChatCell = document.createElement("td");
        hoatChatCell.innerText = data[i].hoatChat;
        row.appendChild(hoatChatCell);

        tableBody.appendChild(row);
      }
    })
    .catch((error) => console.log(error));
}

function timTenThuoc() {
    
  // Lấy giá trị từ thẻ input
  const value = document.getElementById("tim").value;
  console.log(value);
  // Gọi API để lấy dữ liệu
  fetch("http://localhost:3000/qlnt/thuoc/findThuoc", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tenBietDuoc: value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      const tableBody = document.getElementById("tabTim");
      // Xóa toàn bộ nội dung trong thẻ tbody
      tableBody.innerHTML = "";
      // Tạo các dòng mới trong bảng
      console.log(data);
      if(data.length==0){
        var row = document.createElement("tr");
        const td = document.createElement("td");
        td.innerText = "KHÔNG TÌM THẤY";
        td.setAttribute("colspan", "10");
        td.style.fontSize = "22px";
        td.style.color = "red";
        td.style.textAlign = "center";
        row.appendChild(td);
        tableBody.appendChild(row);

      }else{
        for (let i = 0; i < data.length; i++) {
          console.log(data.length);
          var row = document.createElement("tr");
  
          const maSKUCell = document.createElement("td");
          maSKUCell.innerText = data[i].maSKU;
          row.appendChild(maSKUCell);
  
          const maNhomCell = document.createElement("td");
          maNhomCell.innerText = data[i].maNhom;
          row.appendChild(maNhomCell);
  
          const maNhaSanXuatCell = document.createElement("td");
          maNhaSanXuatCell.innerText = data[i].maNhaSanXuat;
          row.appendChild(maNhaSanXuatCell);
  
          const maDonViCell = document.createElement("td");
          maDonViCell.innerText = data[i].maDonVi;
          row.appendChild(maDonViCell);
  
          const hoatChatCell = document.createElement("td");
          hoatChatCell.innerText = data[i].hoatChat;
          row.appendChild(hoatChatCell);
  
          const tenBietDuocCell = document.createElement("td");
          tenBietDuocCell.innerText = data[i].tenBietDuoc;
          row.appendChild(tenBietDuocCell);
  
          const soDangKyCell = document.createElement("td");
          soDangKyCell.innerText = data[i].soDangKy;
          row.appendChild(soDangKyCell);
  
          const donGiaCell = document.createElement("td");
          donGiaCell.innerText = data[i].donGia;
          row.appendChild(donGiaCell);
  
          const giaBanCell = document.createElement("td");
          giaBanCell.innerText = data[i].giaBan;
          row.appendChild(giaBanCell);
  
          const hanSuDungCell = document.createElement("td");
          hanSuDungCell.innerText = data[i].hanSuDung;
          row.appendChild(hanSuDungCell);
  
          tableBody.appendChild(row);
          
        }
      }
      
    })
    .catch((error) => {
      // Xử lý lỗi nếu có
      console.log(error);
    });
}
