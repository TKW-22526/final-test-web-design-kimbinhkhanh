// 1. Mảng dữ liệu phân bón (Gốc cấu trúc của bạn, thêm trường 'desc' để hiện ở trang chi tiết)
const productDatabase = [
    { 
        id: 1, 
        name: "Phân Bón NPK 16-16-8", 
        price: 690000, 
        img: "../assets/npk.jpg", 
        desc: "Kích rễ cực mạnh, giúp cây con bén rễ nhanh, đẻ nhánh hữu hiệu. Sử dụng giai đoạn đầu vụ để cây khỏe, lá cứng, tăng khả năng chống chịu sâu bệnh.Liều lượng 20-30kg/1000m². Hướng dẫn: Bón lót hoặc bón thúc đợt 1 để kích rễ, đẻ nhánh."
    },
    { 
        id: 2, 
        name: "Phân NPK 20-10-10", 
        price: 1000000, 
        img: "../assets/201010.jpg", 
        desc: "Công thức toàn diện nuôi dưỡng cây trồng giai đoạn sinh trưởng. Giúp cây hấp thụ dinh dưỡng tối đa, cây xanh mướt, đòng to, hạt chắc, đặc biệt chịu hạn tốt.Liều lượng 20-25kg/1000m². Hướng dẫn: Bón thúc đợt 2, giúp cây nuôi đòng, nuôi hạt."
    },
    { 
        id: 3, 
        name: "Phân Đạm Cà Mau", 
        price: 750000, 
        img: "../assets/dcm.jpg", 
        desc: "Đạm hạt ngọc dồi dào, tan chậm giúp cây ăn dần, không gây sốc phân. Làm lá xanh bóng, quang hợp mạnh, thúc đẩy cây vươn lóng và đẻ nhánh tập trung.Liều lượng 10-15kg/1000m². Hướng dẫn: Bón rải đều, chia làm 2-3 đợt bón tùy giai đoạn lúa." 
    },
    { 
        id: 4, 
        name: "Filia 525SE", 
        price: 150000, 
        img: "../assets/filia.jpg", 
        desc: "Khắc tinh của bệnh đạo ôn lá và đạo ôn cổ bông. Tác động kép giúp lá đòng xanh bền, hạt lúa vàng sáng, chắc tới cậy, giảm tỷ lệ hạt lép.Liều lượng 20-25ml/bình 16L. Hướng dẫn: Phun khi chớm xuất hiện bệnh hoặc phun ngừa khi lúa bắt đầu trổ."

    },
    { 
        id: 5, 
        name: "Anvil 5SC",
        price: 90000, 
        img: "../assets/anvil.jpg", 
        desc: "Thuốc trừ nấm nội hấp cực nhanh. Trị dứt điểm khô vằn, lem lép hạt, nấm hồng. Giúp bộ lá lúa sạch bệnh đến tận lúc thu hoạch, cây bền sức.Liều lượng 15-20ml/bình 16L. Hướng dẫn: Phun ướt đều mặt lá khi bệnh khô vằn hoặc nấm hồng mới phát sinh."
    },  
    { 
        id: 6, 
        name: "Amistartop 325SC", 
        price: 350000, 
        img: "../assets/amistartop.jpg", 
        desc: "Giải pháp cao cấp giúp lúa vàng sáng, chắc hạt. Tác động bảo vệ kép giúp cây 'bật' sức đề kháng, ngăn ngừa đốm vằn và các loại nấm hại nguy hiểm.Liều lượng 15-20ml/bình 16L. Hướng dẫn: Phun giai đoạn lúa trổ đều để ngừa lem lép hạt."
    },
    { 
        id: 7, 
        name: "Cruiser Flus 312.5FS", 
        price: 35000, 
        img: "../assets/cruiser.jpg", 
        desc: "Bảo vệ hạt giống từ lúc gieo mạ. Giúp cây con mọc khỏe, rễ nhiều, chống chọi tốt với sâu bệnh hại sớm và điều kiện thời tiết bất lợi.Liều lượng 5-10ml/1kg hạt giống. Hướng dẫn: Trộn đều vào hạt giống trước khi gieo sạ (phải để khô mới đem gieo)." 
    },
    { 
        id: 8, 
        name: "Sofit 300EC ", 
        price: 45000, 
        img: "../assets/sofit.jpg", 
        desc: "Diệt sạch cỏ dại (cỏ lồng vực, đuôi phụng) ngay từ khi mới nhú mầm. Chọn lọc kỹ, tuyệt đối an toàn cho mầm lúa, tiết kiệm chi phí làm cỏ tay.Liều lượng 30-40ml/bình 16L. Hướng dẫn: Phun ngay sau khi sạ (từ 0-3 ngày), ruộng cần đủ ẩm." 
    },
    { 
        id: 9, 
        name: "Tilt Super 300Ec", 
        price: 135000, 
        img: "../assets/tilt.jpg", 
        desc: "Vua trừ bệnh khô vằn và lem lép hạt. Giúp lá lúa luôn xanh sạch, tăng cường khả năng quang hợp, cho hạt lúa đầy đặn, tăng năng suất vụ mùa.Liều lượng 10-15ml/bình 16L. Hướng dẫn: Phun vào lúc sáng sớm hoặc chiều mát, phun tập trung vào bông lúa." 
    },
];

// 2. Hàm sinh cấu trúc (Giữ nguyên 100% logic tạo thẻ createElement gốc của bạn)
function addProduct(imgSrc, name, price, productId) {
    // Tạo khung chứa cha
    const myDiv = document.createElement("div");
    myDiv.setAttribute("class", "product-item col-sm-3");

    // Khung 1 – Hình ảnh
    const myDiv1 = document.createElement("div");
    myDiv1.setAttribute("class", "product-image");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", imgSrc);
    productImg.setAttribute("alt", name);
    productImg.style.width = "100%";

    myDiv1.appendChild(productImg);

    // Khung 2 – Thông tin
    const myDiv2 = document.createElement("div");
    myDiv2.setAttribute("class", "product-info");

    const productName = document.createElement("p");
    productName.setAttribute("class", "product-name");
    productName.innerText = name;

    const productPrice = document.createElement("p");
    productPrice.setAttribute("class", "product-price");
    productPrice.innerText = price.toLocaleString("vi-VN") + " vnđ";

    const productBtn = document.createElement("a");
    productBtn.setAttribute("class", "btn-detail");
    // SỬA ĐƯỜNG DẪN: Trỏ sang file chitiet.html nằm cùng thư mục thay vì detail.html
    productBtn.setAttribute("href", "chitiet.html?id=" + productId); 
    productBtn.innerText = "Tìm hiểu thêm";

    myDiv2.appendChild(productName);
    myDiv2.appendChild(productPrice);
    myDiv2.appendChild(productBtn);

    // Bổ sung nút Thêm vào giỏ hàng dưới nút xem chi tiết cho đẹp giống mẫu
    const pAdd = document.createElement("p");
    const addBtn = document.createElement("button");
    addBtn.setAttribute("class", "btn-add");
    addBtn.setAttribute("onclick", "themVaoGio(" + productId + ")");
    addBtn.innerText = "Thêm Vào Giỏ";
    pAdd.appendChild(addBtn);
    myDiv2.appendChild(pAdd);

    myDiv.appendChild(myDiv1);
    myDiv.appendChild(myDiv2);

    // Kiểm tra xem thẻ chứa có tồn tại trên trang hiện tại không mới đẩy vào
    const container = document.getElementById("product-list");
    if (container) {
        container.appendChild(myDiv);
    }
}

// 3. Hàm chạy vòng lặp (Giữ nguyên logic của bạn)
function addProduct_v2(products) {
    products.forEach(function(product) {
        addProduct(product.img, product.name, product.price, product.id);
    });
}

// 4. Hàm xử lý trang chitiet.html - Đọc ID từ URL của Live Server và hiển thị dữ liệu tương ứng
function hienThiChiTietSanPham() {
    const detailName = document.getElementById('detail-name');
    if (!detailName) return; // Nếu không ở trang chi tiết thì dừng hàm

    // Đọc tham số ?id= từ thanh địa chỉ URL
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = urlParams.get('id');
    
    // Nếu có ID thì lấy, không có thì mặc định hiển thị sản phẩm 1
    let productId = idParam ? parseInt(idParam) : 1;

    // Tìm sản phẩm phân bón trong database
    const currentProduct = productDatabase.find(item => item.id === productId);

    if (currentProduct) {
        // Đổ dữ liệu thật vào giao diện chi tiết
        document.getElementById('detail-name').innerText = currentProduct.name;
        document.getElementById('detail-price').innerText = currentProduct.price.toLocaleString("vi-VN") + " vnđ / Sản phẩm";
        
        const descTag = document.getElementById('detail-desc');
        if (descTag) descTag.innerText = currentProduct.desc;
        
        const imgTag = document.getElementById('detail-img');
        if (imgTag) {
            imgTag.src = currentProduct.img;
            imgTag.alt = currentProduct.name;
        }
        
        // Chèn nút mua động kèm đúng ID sản phẩm
        const buyBox = document.getElementById('box-nut-mua');
        if (buyBox) {
            buyBox.innerHTML = `
                <button onclick="themVaoGio(${currentProduct.id})" class="btn-buy">Mua Ngay & Thêm Vào Giỏ</button>
            `;
        }
    } else {
        document.getElementById('detail-name').innerText = "Không tìm thấy sản phẩm!";
    }
}

// 5. Hàm thêm vào giỏ hàng LocalStorage
function themVaoGio(id) {
    let gioHang = JSON.parse(localStorage.getItem('gioHang')) || [];
    let sp = productDatabase.find(item => item.id === id);
    if (!sp) return;
    
    let itemTrongGio = gioHang.find(item => item.id === id);
    if (itemTrongGio) {
        itemTrongGio.soluong = Number(itemTrongGio.soluong) + 1;
    } else {
        gioHang.push({ ...sp, soluong: 1 });
    }
    localStorage.setItem('gioHang', JSON.stringify(gioHang));
    alert("Đã thêm " + sp.name + " vào giỏ hàng!");
}

// 6. Sự kiện kích hoạt tự động liên hoàn khi load trang
window.onload = function() {
    // Tự động kiểm tra hiển thị trang chi tiết
    hienThiChiTietSanPham();
    
    // Tự động kiểm tra hiển thị trang danh sách
    const productListDiv = document.getElementById("product-list");
    if (productListDiv) {
        productListDiv.innerHTML = ""; // Clear dữ liệu cứng cũ
        addProduct_v2(productDatabase); // Gọi hàm của bạn vẽ danh sách sản phẩm động
    }
};