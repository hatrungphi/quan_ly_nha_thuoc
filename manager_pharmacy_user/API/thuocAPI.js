function hienThiTatCa() {
    const params = {
        maSKU: 'AAAA',
        maNhom: 'DH',
        maNhaSanXuat: 'CTYHG',
        maDonVi: 'V',
        tenBietDuoc: 'AAA',
        soDangKy: 'AAA',
        giaBan: 111111,
        hoatChat: 'AAAAAA',
    };

    const queryString = new URLSearchParams(params).toString();

    fetch(`http://localhost:3000/qlnt/thuoc/?${queryString}`)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('table-body');
            tableBody.innerHTML = '';

            for (let i = 0; i < data.length; i++) {
                const row = document.createElement('tr');

                const maSKUCell = document.createElement('td');
                maSKUCell.innerText = data[i].maSKU;
                row.appendChild(maSKUCell);

                const maNhomCell = document.createElement('td');
                maNhomCell.innerText = data[i].maNhom;
                row.appendChild(maNhomCell);

                const maNhaSanXuatCell = document.createElement('td');
                maNhaSanXuatCell.innerText = data[i].maNhaSanXuat;
                row.appendChild(maNhaSanXuatCell);

                const maDonViCell = document.createElement('td');
                maDonViCell.innerText = data[i].maDonVi;
                row.appendChild(maDonViCell);

                const tenBietDuocCell = document.createElement('td');
                tenBietDuocCell.innerText = data[i].tenBietDuoc;
                row.appendChild(tenBietDuocCell);

                const soDangKyCell = document.createElement('td');
                soDangKyCell.innerText = data[i].soDangKy;
                row.appendChild(soDangKyCell);

                const giaBanCell = document.createElement('td');
                giaBanCell.innerText = data[i].giaBan;
                row.appendChild(giaBanCell);

                const hoatChatCell = document.createElement('td');
                hoatChatCell.innerText = data[i].hoatChat;
                row.appendChild(hoatChatCell);

                tableBody.appendChild(row);
            }
        })
        .catch(error => console.log(error));
}
